import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CustomizationSettings, AgentData } from '../types';
import { getAvatarForSanityAndVitality } from '../utils/agentUtils';
import { supabase } from '../supabaseClient';

interface CharacterCardProps {
  agent?: AgentData;
  id?: string | number;
  avatarUrl?: string;
  name?: string;
  path?: string;
  createdAt?: string;
  customization?: CustomizationSettings;
  sanity?: number;
  maxSanity?: number;
  vitality?: number;
  maxVitality?: number;
  onOpen?: () => void;
  onEdit?: () => void;
  onRemove?: () => void;
}

export const CharacterCard: React.FC<CharacterCardProps> = ({ agent, avatarUrl, name, path, createdAt, customization, sanity, maxSanity, vitality, maxVitality, onOpen, onEdit, onRemove }) => {
  // Safety guard: if no agent and no fallback props, log and return null
  if (!agent && !name) {
    console.log('CharacterCard: No agent or name provided, skipping render');
    return null;
  }

  // Extract values from agent or use fallbacks
  const extractedName = agent?.character?.name || name || '[Sem nome]';
  const extractedPath = agent?.character?.pathway || path || 'NPC';
  const extractedAvatarUrl = agent?.character?.avatarUrl || avatarUrl;
  const extractedCustomization = agent?.customization || customization;
  const extractedSanity = agent?.character?.sanity ?? sanity ?? 0;
  const extractedMaxSanity = agent?.character?.maxSanity ?? maxSanity ?? 1;
  const extractedVitality = agent?.character?.vitality ?? vitality ?? 0;
  const extractedMaxVitality = agent?.character?.maxVitality ?? maxVitality ?? 1;

  console.log('CharacterCard: Rendering with agent data', { extractedName, extractedAvatarUrl, agent: !!agent });
  const displayAvatar = getAvatarForSanityAndVitality({
    sanity: extractedSanity,
    maxSanity: extractedMaxSanity,
    vitality: extractedVitality,
    maxVitality: extractedMaxVitality,
    avatarUrl: extractedAvatarUrl,
    insaneAvatarUrl: extractedCustomization?.insaneAvatarUrl,
    deadAvatarUrl: extractedCustomization?.deadAvatarUrl,
  });

  const [avatarUrlState, setAvatarUrlState] = useState<string | null>(null);

  useEffect(() => {
    if (displayAvatar && !displayAvatar.startsWith('http')) {
      // É um path, gere a URL assinada
      supabase.storage.from('agent-avatars').createSignedUrl(displayAvatar, 3600)
        .then(({ data }) => {
          if (data) setAvatarUrlState(data.signedUrl);
        });
    } else {
      // É uma URL completa (DiceBear, link externo) ou está vazio
      setAvatarUrlState(displayAvatar || null);
    }
  }, [displayAvatar]);

  return (
    <div className="character-card">
      <div className="character-avatar">
        {avatarUrlState ? <img src={avatarUrlState} alt="avatar" className="character-avatar-img" /> : 'Avatar'}
      </div>
      <div className="character-info">
        <span className="character-name">{extractedName}</span>
        <span className="character-subtitle">{extractedPath}</span>
      </div>
      <div className="character-actions">
        <button onClick={onOpen} className="character-btn">Acessar Ficha</button>
        <button onClick={onRemove} className="character-btn-remove">🗑️</button>
      </div>
      <div className="character-gear" onClick={onEdit}>⚙️</div>
    </div>
  );
};

export default CharacterCard;