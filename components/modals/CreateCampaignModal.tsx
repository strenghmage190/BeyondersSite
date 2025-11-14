import React, { useState } from 'react';
import { supabase } from '../../supabaseClient';
import { createCampaign } from '../../api/campaigns';
import { Campaign } from '../../types';

interface Props {
  onClose: () => void;
  onCreated: (campaign: Campaign) => void;
}

export const CreateCampaignModal: React.FC<Props> = ({ onClose, onCreated }) => {
  const [campaignName, setCampaignName] = useState('');
  const [loading, setLoading] = useState(false);

  const handleCreate = async () => {
    if (!campaignName) {
        alert("O nome da campanha não pode ser vazio.");
        return;
    }

    // 1. Pega os dados do usuário que está logado no momento.
    const { data: { user } } = await supabase.auth.getUser();

    // 2. Garante que realmente há um usuário logado.
    if (!user) {
        console.error("Usuário não está logado. Impossível criar campanha.");
        return;
    }

    setLoading(true);
    try {
      const campaign = await createCampaign(campaignName, user.id);
      onCreated(campaign);
      onClose();
    } catch (error) {
      console.error("Erro ao criar campanha:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h3>Criar Campanha</h3>
        <label>Nome</label>
        <input value={campaignName} onChange={e => setCampaignName(e.target.value)} />
        <div className="modal-actions">
          <button onClick={onClose} disabled={loading}>Cancelar</button>
          <button onClick={handleCreate} disabled={loading || !campaignName}>{loading ? 'Criando...' : 'Criar'}</button>
        </div>
      </div>
    </div>
  );
};

export default CreateCampaignModal;
