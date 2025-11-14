import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../supabaseClient';
import { getCampaignsByMasterId, getPlayersByCampaignId, getCampaignById } from '../api/campaigns';
import { Campaign, CampaignPlayer } from '../types';
import CreateCampaignModal from './modals/CreateCampaignModal';
import LinkCharacterModal from './modals/LinkCharacterModal';
import CampaignCard from './CampaignCard';

const CampaignsListPage: React.FC = () => {
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);
  const [playerCampaigns, setPlayerCampaigns] = useState<(Campaign & { agentId: string | null })[]>([]);
  const [showCreate, setShowCreate] = useState(false);
  const [showLinkModal, setShowLinkModal] = useState(false);
  const [selectedCampaignId, setSelectedCampaignId] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    async function fetchCampaigns() {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;

      // Busca campanhas onde o usuário é mestre
      const gmCampaigns = await getCampaignsByMasterId(user.id);

      // Busca campanhas onde o usuário é jogador
      const { data: playerLinks, error } = await supabase
        .from('campaign_players')
        .select('campaign_id, agent_id')
        .eq('player_id', user.id);

      if (playerLinks) {
        // Para cada link de jogador, busca os detalhes da campanha
        const playerCampaignDetails = await Promise.all(
          playerLinks.map(async (link) => {
            const campaign = await getCampaignById(link.campaign_id);
            return campaign ? { ...campaign, agentId: link.agent_id } : null;
          })
        );
        const validPlayerCampaigns = playerCampaignDetails.filter(c => c !== null) as (Campaign & { agentId: string | null })[];
        setPlayerCampaigns(validPlayerCampaigns);
      }

      if (mounted) setCampaigns(gmCampaigns);
    }
    fetchCampaigns();
    return () => { mounted = false; };
  }, []);

  const handleCreated = (campaign: Campaign) => {
    setCampaigns(prev => [campaign, ...prev]);
  };

  const handleLinkCharacter = (campaignId: string) => {
    setSelectedCampaignId(campaignId);
    setShowLinkModal(true);
  };

  const fetchPlayerCampaigns = async (userId: string) => {
    const { data: playerLinks, error } = await supabase
      .from('campaign_players')
      .select('campaign_id, agent_id')
      .eq('player_id', userId);

    if (playerLinks) {
      const playerCampaignDetails = await Promise.all(
        playerLinks.map(async (link) => {
          const campaign = await getCampaignById(link.campaign_id);
          return campaign ? { ...campaign, agentId: link.agent_id } : null;
        })
      );
      const validPlayerCampaigns = playerCampaignDetails.filter(c => c !== null) as (Campaign & { agentId: string | null })[];
      setPlayerCampaigns(validPlayerCampaigns);
    }
  };

  const handleCharacterLinked = async () => {
    setShowLinkModal(false);
    // Refetch player campaigns
    const { data: { user } } = await supabase.auth.getUser();
    if (user) {
      await fetchPlayerCampaigns(user.id);
    }
  };

  return (
    <div className="campaign-list-page">
      <div className="page-header">
        <h2>Campanhas</h2>
        <button className="button-primary" onClick={() => setShowCreate(true)}>+ Nova Campanha</button>
      </div>

      <div className="campaign-section">
        <h3>Como Mestre</h3>
        <div className="campaigns-grid">
          {campaigns.map(c => (
            <CampaignCard
              key={c.id}
              campaign={c}
              isPlayer={false}
            />
          ))}
        </div>
      </div>

      <div className="campaign-section">
        <h3>Como Jogador</h3>
        <div className="campaigns-grid">
          {playerCampaigns.map(c => (
            <CampaignCard
              key={c.id}
              campaign={c}
              isPlayer={true}
              agentId={c.agentId}
              onLinkCharacter={handleLinkCharacter}
            />
          ))}
        </div>
      </div>

      {campaigns.length === 0 && playerCampaigns.length === 0 && (
        <p>Nenhuma campanha encontrada.</p>
      )}

      {showCreate && (
        <CreateCampaignModal onClose={() => setShowCreate(false)} onCreated={handleCreated} />
      )}

      {showLinkModal && selectedCampaignId && (
        <LinkCharacterModal
          campaignId={selectedCampaignId}
          onClose={() => setShowLinkModal(false)}
          onCharacterLinked={handleCharacterLinked}
        />
      )}
    </div>
  );
};

export default CampaignsListPage;
