import React, { useState } from 'react';
import { supabase } from '../../supabaseClient';
import { addPlayerToCampaign } from '../../api/campaigns';

interface Profile {
  id: string;
  email: string;
  // adicione outros campos como username se tiver
}

interface Props {
  campaignId: string;
  onClose: () => void;
  onPlayerInvited: () => void;
}

const InvitePlayerModal: React.FC<Props> = ({ campaignId, onClose, onPlayerInvited }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<Profile[]>([]);
  const [selectedProfile, setSelectedProfile] = useState<Profile | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    if (searchTerm.trim().length < 3) {
      setError('Digite ao menos 3 caracteres para buscar.');
      return;
    }
    setIsLoading(true);
    setError('');
    setSelectedProfile(null);

    // Assumindo que você tem uma tabela 'profiles' para buscar usuários
    const { data, error } = await supabase
      .from('profiles')
      .select('id, email')
      .like('email', `%${searchTerm}%`); // Busca por emails que contenham o termo

    if (error) {
      setError('Erro ao buscar usuários.');
      console.error(error);
    } else {
      setSearchResults(data || []);
    }
    setIsLoading(false);
  };

  const handleInvite = async () => {
    if (!selectedProfile) {
      alert('Por favor, selecione um jogador da lista.');
      return;
    }
    try {
      await addPlayerToCampaign(campaignId, selectedProfile.id);
      alert(`${selectedProfile.email} foi convidado com sucesso!`);
      onPlayerInvited(); // Avisa o componente pai para atualizar a lista
    } catch (err) {
      alert('Ocorreu um erro ao convidar o jogador.');
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Convidar Jogador</h2>
        <p>Procure por um jogador pelo email para adicioná-lo à campanha.</p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1rem' }}>
          <input
            type="email"
            placeholder="Email do jogador"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ padding: '0.5rem', border: '1px solid #ccc', borderRadius: '4px' }}
          />
          <button onClick={handleSearch} disabled={isLoading} style={{ padding: '0.5rem', background: '#007bff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
            {isLoading ? 'Buscando...' : 'Buscar'}
          </button>
        </div>

        {error && <p style={{ color: 'red', marginBottom: '1rem' }}>{error}</p>}

        <div style={{ marginBottom: '1rem' }}>
          {searchResults.map(profile => (
            <div
              key={profile.id}
              style={{
                padding: '0.5rem',
                border: selectedProfile?.id === profile.id ? '2px solid #007bff' : '1px solid #ccc',
                borderRadius: '4px',
                marginBottom: '0.5rem',
                cursor: 'pointer',
                background: selectedProfile?.id === profile.id ? '#e7f3ff' : 'white'
              }}
              onClick={() => setSelectedProfile(profile)}
            >
              {profile.email}
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.5rem' }}>
          <button onClick={onClose} style={{ padding: '0.5rem 1rem', background: '#6c757d', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Cancelar</button>
          <button onClick={handleInvite} disabled={!selectedProfile} style={{ padding: '0.5rem 1rem', background: selectedProfile ? '#28a745' : '#ccc', color: 'white', border: 'none', borderRadius: '4px', cursor: selectedProfile ? 'pointer' : 'not-allowed' }}>
            Confirmar Convite
          </button>
        </div>
      </div>
    </div>
  );
};

export default InvitePlayerModal;
