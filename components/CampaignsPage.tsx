import React, { useEffect, useState } from 'react';
import { Campaign } from '../types';
import { createCampaign, getCampaignsByMasterId } from '../api/campaigns';
import { supabase } from '../supabaseClient';

const Modal: React.FC<{ open: boolean; onClose: () => void; children?: React.ReactNode }> = ({ open, onClose, children }) => {
  if (!open) return null;
  return (
    <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 60 }}>
      <div style={{ width: 480, maxWidth: '95%', background: '#111', padding: 20, borderRadius: 8 }}>
        {children}
        <div style={{ marginTop: 12, textAlign: 'right' }}>
          <button onClick={onClose} style={{ marginLeft: 8 }}>Fechar</button>
        </div>
      </div>
    </div>
  );
};

const CampaignsPage: React.FC = () => {
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [newName, setNewName] = useState('');

  const load = async () => {
    setLoading(true);
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      setCampaigns([]);
      setLoading(false);
      return;
    }
    const list = await getCampaignsByMasterId(user.id);
    setCampaigns(list);
    setLoading(false);
  };

  useEffect(() => {
    load();
  }, []);

  const handleCreate = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      alert('Você precisa estar logado para criar uma campanha.');
      return;
    }
    if (!newName.trim()) {
      alert('Informe um nome válido para a campanha.');
      return;
    }
    const created = await createCampaign(newName.trim(), user.id);
    setCampaigns(prev => [...prev, created]);
    setNewName('');
    setShowModal(false);
  };

  return (
    <div style={{ padding: 12 }}>
      <h2>Campanhas</h2>
      <div style={{ marginBottom: 12 }}>
        <button onClick={() => setShowModal(true)}>Criar Nova Campanha</button>
      </div>

      {loading ? (
        <div>Carregando...</div>
      ) : (
        <ul>
          {campaigns.length === 0 ? <li>Nenhuma campanha encontrada.</li> : campaigns.map(c => (
            <li key={c.id} style={{ padding: 8, borderBottom: '1px solid #222' }}>{c.name}</li>
          ))}
        </ul>
      )}

      <Modal open={showModal} onClose={() => setShowModal(false)}>
        <h3>Criar Nova Campanha</h3>
        <div style={{ marginTop: 8 }}>
          <label>Nome da Campanha</label>
          <input value={newName} onChange={(e) => setNewName(e.target.value)} style={{ width: '100%', marginTop: 6, padding: 8 }} />
        </div>
        <div style={{ marginTop: 12, textAlign: 'right' }}>
          <button onClick={handleCreate}>Salvar</button>
        </div>
      </Modal>
    </div>
  );
};

export default CampaignsPage;
