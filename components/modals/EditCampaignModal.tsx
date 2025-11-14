import React, { useState } from 'react';
import { Campaign } from '../../types';
import { updateCampaign } from '../../api/campaigns';

interface Props {
  campaign: Campaign; // Recebe os dados atuais da campanha
  onClose: () => void;
  onSaved: (updatedCampaign: Campaign) => void; // Função para atualizar a UI na página pai
}

const EditCampaignModal: React.FC<Props> = ({ campaign, onClose, onSaved }) => {
  // Inicializa o estado do formulário com os dados existentes
  const [formData, setFormData] = useState({
    name: campaign.name || '',
    description: campaign.description || '',
  });
  const [isSaving, setIsSaving] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    try {
      const updatedCampaign = await updateCampaign(campaign.id, {
        name: formData.name,
        description: formData.description,
      });
      alert('Campanha atualizada com sucesso!');
      onSaved(updatedCampaign); // Envia os novos dados de volta para a página do dashboard
    } catch (error) {
      alert('Ocorreu um erro ao salvar as alterações.');
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        <form onSubmit={handleSubmit}>
          <h2>Editar Campanha</h2>

          <div className="form-group">
            <label htmlFor="name">Nome da Campanha</label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Descrição</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={4}
            />
          </div>

          <div className="modal-actions">
            <button type="button" onClick={onClose} disabled={isSaving}>
              Cancelar
            </button>
            <button type="submit" disabled={isSaving}>
              {isSaving ? 'Salvando...' : 'Salvar Alterações'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditCampaignModal;
