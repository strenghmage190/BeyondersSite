import React from 'react';

interface Props {
  id?: string | number;
  avatarUrl?: string;
  name?: string;
  path?: string;
  createdAt?: string;
  onOpen?: () => void;
  onEdit?: () => void;
  onRemove?: () => void;
}

const styles: { [k: string]: React.CSSProperties } = {
  card: {
    display: 'flex',
    alignItems: 'center',
    gap: 12,
    padding: 12,
    background: '#0f0f0f',
    border: '1px solid #222',
    borderRadius: 8,
    position: 'relative'
  },
  avatar: {
    width: 72,
    height: 72,
    borderRadius: 6,
    objectFit: 'cover',
    background: '#222'
  },
  content: {
    flex: 1
  },
  name: {
    fontSize: 16,
    fontWeight: 700
  },
  subtitle: {
    fontSize: 12,
    color: '#aaa'
  },
  small: {
    fontSize: 11,
    color: '#777'
  },
  actions: {
    display: 'flex',
    gap: 8,
    marginLeft: 8
  },
  gear: {
    position: 'absolute',
    top: 8,
    right: 8,
    cursor: 'pointer'
  }
};

export const CharacterCard: React.FC<Props> = ({ avatarUrl, name, path, createdAt, onOpen, onEdit, onRemove }) => {
  const displayDate = createdAt ? new Date(createdAt).toLocaleDateString() : '';
  return (
    <div style={styles.card}>
      <div style={styles.gear} title="Opções" onClick={onEdit}>⚙️</div>
      <img src={avatarUrl || 'https://via.placeholder.com/72x72?text=Avatar'} alt="avatar" style={styles.avatar} />
      <div style={styles.content}>
        <div style={styles.name}>{name || 'Sem nome'}</div>
        <div style={styles.subtitle}>{path || 'Sem caminho'}</div>
        <div style={styles.small}>{displayDate ? `Registrado em ${displayDate}` : ''}</div>
      </div>
      <div style={styles.actions}>
        <button onClick={onOpen} style={{ padding: '8px 12px' }}>Acessar Ficha</button>
        <button onClick={onRemove} style={{ padding: '6px 10px' }}>Remover</button>
      </div>
    </div>
  );
};

export default CharacterCard;
