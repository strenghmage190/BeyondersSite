import React, { useEffect, useState } from 'react';
import { Campaign, CampaignPlayer } from '../types';
import { getCampaignById, getCampaignsByMasterId, getPlayersByCampaignId } from '../api/campaigns';
import { supabase } from '../supabaseClient';
import CharacterCard from './CharacterCard';
import InvitePlayerModal from './modals/InvitePlayerModal';
import AddAgentModal from './modals/AddAgentModal';
import EditCampaignModal from './modals/EditCampaignModal'; // Importe o novo modal
import CoverImageModal from './modals/CoverImageModal';

type Tab = 'agents' | 'players' | 'combats';

const headerStyles: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: 12,
  padding: '16px 12px',
  background: 'linear-gradient(90deg,#111,#0b0b0b)'
};

const actionBarStyles: React.CSSProperties = {
  display: 'flex',
  gap: 8,
  alignItems: 'center'
};

const coverStyles: React.CSSProperties = {
  height: 160,
  width: '100%',
  borderRadius: 8,
  background: 'linear-gradient(180deg,#222,#111)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#ddd'
};

const tabsContainer: React.CSSProperties = {
  display: 'flex',
  gap: 12,
  borderBottom: '1px solid #222',
  padding: '8px 12px'
};

const tabStyle = (active: boolean): React.CSSProperties => ({
  padding: '8px 12px',
  cursor: 'pointer',
  borderBottom: active ? '3px solid #6ab04c' : '3px solid transparent'
});

const gridStyle: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
  gap: 12,
  padding: 12
};

const CampaignDashboardPage: React.FC<{ campaignId?: string }> = ({ campaignId }) => {
  const [campaign, setCampaign] = useState<Campaign | null>(null);
  const [players, setPlayers] = useState<CampaignPlayer[]>([]);
  const [activeTab, setActiveTab] = useState<Tab>('agents');
  const [loading, setLoading] = useState(true);
  const [showInviteModal, setShowInviteModal] = useState(false);
  const [showAddAgentModal, setShowAddAgentModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false); // <--- NOVO ESTADO
  const [showCoverModal, setShowCoverModal] = useState(false);

  useEffect(() => {
    async function load() {
      setLoading(true);
      let id = campaignId;
      if (!id) {
        // fallback: pick first campaign of current user
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) {
          setCampaign(null);
          setPlayers([]);
          setLoading(false);
          return;
        }
  // get campaigns by master and pick first
  const list = await getCampaignsByMasterId(user.id);
        if (list && list.length > 0) id = list[0].id;
        else {
          setCampaign(null);
          setPlayers([]);
          setLoading(false);
          return;
        }
      }

      const found = await getCampaignById(id!);
      if (found) {
        const campaignPlayers = await getPlayersByCampaignId(id!);
        setPlayers(campaignPlayers);
      }
      setCampaign(found);
      setLoading(false);
    }
    load();
  }, [campaignId]);

  if (loading) return <div style={{ padding: 20 }}>Carregando campanha...</div>;
  if (!campaign) return <div style={{ padding: 20 }}>Campanha não encontrada.</div>;

  // Função para copiar o link para a área de transferência
  const handleCopyInviteLink = () => {
    if (!campaign?.invite_code) return;
    const inviteLink = `${window.location.origin}/invite/${campaign.invite_code}`;
    navigator.clipboard.writeText(inviteLink)
      .then(() => alert('Link de convite copiado para a área de transferência!'))
      .catch(err => console.error('Falha ao copiar o link:', err));
  };

  const handlePlayerInvited = () => {
    // Esta função será chamada para atualizar a lista de jogadores após um convite
    // Por enquanto, vamos apenas fechar o modal
    setShowInviteModal(false);
    // Idealmente, você iria recarregar a lista de jogadores aqui
  };

  const handleAgentAdded = (newLink: any) => {
    // Atualiza a lista de jogadores/agentes na UI
    // Recarregar a lista de players
    if (campaign) {
      getPlayersByCampaignId(campaign.id).then(setPlayers);
    }
    setShowAddAgentModal(false);
  };

  return (
    <div>
      <header style={headerStyles}>
        <div style={actionBarStyles}>
          <button onClick={() => setShowCoverModal(true)}>Foto de Capa</button>
          <button onClick={() => setShowAddAgentModal(true)}>Adicionar Agentes</button>
          <button onClick={handleCopyInviteLink}>Convidar com Link</button>
          <button onClick={() => setShowEditModal(true)}>Editar Campanha</button>
          <button onClick={() => alert('Funcionalidade de Criar Combate ainda não implementada')}>Criar Combate</button>
          <button onClick={() => alert('Funcionalidade de Escudo do Mestre ainda não implementada')}>Escudo do Mestre</button>
        </div>

        <div>
          <h1 style={{ fontSize: 28, margin: '8px 0' }}>{campaign.name}</h1>
          <div className="campaign-cover-container">
            {campaign.cover_image_url ? (
              <img src={campaign.cover_image_url} alt="Capa da campanha" className="campaign-cover-image" />
            ) : (
              <div style={coverStyles}>Foto de Capa (placeholder)</div>
            )}
          </div>
        </div>
      </header>

      <nav style={tabsContainer}>
        <div style={tabStyle(activeTab === 'agents')} onClick={() => setActiveTab('agents')}>Agentes</div>
        <div style={tabStyle(activeTab === 'players')} onClick={() => setActiveTab('players')}>Jogadores</div>
        <div style={tabStyle(activeTab === 'combats')} onClick={() => setActiveTab('combats')}>Combates</div>
      </nav>

      <main>
        {activeTab === 'agents' && (
          <section style={gridStyle}>
            {/* For demo: show any players as 'agents' if agentId present */}
            {players.filter(p => p.agentId).length === 0 && <div style={{ padding: 12 }}>Nenhum agente (NPC) adicionado.</div>}
            {players.filter(p => p.agentId).map(p => (
              <CharacterCard
                key={p.agentId}
                name={p.agentId}
                path={'NPC'}
                createdAt={undefined}
                onOpen={() => alert(`Abrir agente ${p.agentId}`)}
                onEdit={() => alert('Editar agente')}
                onRemove={() => alert('Remover agente')}
              />
            ))}
          </section>
        )}

        {activeTab === 'players' && (
          <section style={gridStyle}>
            {players.filter(p => p.userId).length === 0 && <div style={{ padding: 12 }}>Nenhum jogador convidado.</div>}
            {players.filter(p => p.userId).map(p => (
              <CharacterCard
                key={p.userId}
                name={p.userId}
                path={'Jogador'}
                createdAt={undefined}
                onOpen={() => alert(`Abrir jogador ${p.userId}`)}
                onEdit={() => alert('Editar jogador')}
                onRemove={() => alert('Remover jogador')}
              />
            ))}
          </section>
        )}

        {activeTab === 'combats' && (
          <section style={{ padding: 12 }}>
            <div style={{ padding: 12 }}>Lista de combates (ainda vazia - funcionalidade futura)</div>
          </section>
        )}
      </main>

      {/* 👇 ADICIONE A RENDERIZAÇÃO CONDICIONAL DO MODAL 👇 */}
      {showInviteModal && (
        <InvitePlayerModal
          campaignId={campaign.id}
          onClose={() => setShowInviteModal(false)}
          onPlayerInvited={handlePlayerInvited}
        />
      )}
      {showAddAgentModal && (
        <AddAgentModal
          campaignId={campaign.id}
          onClose={() => setShowAddAgentModal(false)}
          onAgentAdded={handleAgentAdded}
        />
      )}
      {showEditModal && (
        <EditCampaignModal
          campaign={campaign}
          onClose={() => setShowEditModal(false)}
          onSaved={(updatedCampaign) => {
            setCampaign(updatedCampaign); // ATUALIZA A UI IMEDIATAMENTE!
            setShowEditModal(false);
          }}
        />
      )}
      {showCoverModal && (
        <CoverImageModal
          campaign={campaign}
          onClose={() => setShowCoverModal(false)}
          onSaved={(updatedCampaign) => {
            setCampaign(updatedCampaign); // ATUALIZA A UI IMEDIATAMENTE!
            setShowCoverModal(false);
          }}
        />
      )}
    </div>
  );
};

export default CampaignDashboardPage;
