// /api/campaigns.ts

import { supabase } from '../supabaseClient';
import { Campaign, CampaignPlayer } from '../types';

/**
 * Cria uma nova campanha no banco de dados Supabase.
 */
export async function createCampaign(name: string, masterId: string): Promise<Campaign> {
  const { data, error } = await supabase
    .from('campaigns')
    .insert({
      name: name,
      gm_id: masterId,
    })
    .select()
    .single();

  if (error) {
    console.error('Erro ao criar campanha:', error);
    throw error;
  }
  return data as Campaign;
}

/**
 * Busca todas as campanhas de um mestre específico.
 */
export async function getCampaignsByMasterId(masterId: string): Promise<Campaign[]> {
  const { data, error } = await supabase
    .from('campaigns')
    .select('*')
    .eq('gm_id', masterId);

  if (error) {
    console.error('Erro ao buscar campanhas por mestre:', error);
    return [];
  }
  return (data as Campaign[]) || [];
}

/**
 * Busca uma única campanha pelo seu ID.
 */
export async function getCampaignById(id: string): Promise<Campaign | null> {
  const { data, error } = await supabase
    .from('campaigns')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    if (error.code !== 'PGRST116') {
      console.error('Erro ao buscar campanha por ID:', error);
    }
    return null;
  }
  return data as Campaign | null;
}

/**
 * Busca os jogadores de uma campanha específica, incluindo os dados dos seus agentes.
 */
export async function getPlayersByCampaignId(campaignId: string): Promise<any[]> {
  const { data, error } = await supabase
    .from('campaign_players')
    // 👇👇👇 ESTA É A CORREÇÃO. A SINTAXE DE JOIN DA SUPABASE 👇👇👇
    .select(`
      id,
      campaign_id,
      player_id,
      agent_id,
      agents (
        id,
        data
      )
    `)
    .eq('campaign_id', campaignId);

  if (error) {
    console.error('Erro ao buscar jogadores da campanha com join:', error);
    return [];
  }

  return data || [];
}

/**
 * Adiciona um registro na tabela campaign_players para vincular um usuário a uma campanha.
 */
export async function addPlayerToCampaign(campaignId: string, playerId: string): Promise<any> {
  const { data, error } = await supabase
    .from('campaign_players')
    .insert({
      campaign_id: campaignId,
      player_id: playerId,
      agent_id: null,
    })
    .select()
    .single();

  if (error) {
    console.error('Erro ao adicionar jogador à campanha:', error);
    throw error;
  }
  return data;
}

/**
 * Vincula um AGENTE (NPC) existente a uma campanha.
 */
export async function linkAgentToCampaign(campaignId: string, agentId: string): Promise<any> {
  const { data, error } = await supabase
    .from('campaign_players')
    .insert({
      campaign_id: campaignId,
      agent_id: agentId,
      player_id: null,
    })
    .select()
    .single();

  if (error) {
    console.error('Erro ao vincular agente à campanha:', error);
    throw error;
  }
  return data;
}

/**
 * Vincula o PERSONAGEM (agent) de um JOGADOR a uma campanha.
 */
export async function linkPlayerCharacter(campaignId: string, playerId: string, agentId: string): Promise<any> {
  const { data, error } = await supabase
    .from('campaign_players')
    .update({ agent_id: agentId })
    .eq('campaign_id', campaignId)
    .eq('player_id', playerId)
    .select()
    .single();

  if (error) {
    console.error('Erro ao vincular personagem do jogador:', error);
    throw error;
  }
  return data;
}

/**
 * Busca uma única campanha pelo seu CÓDIGO DE CONVITE.
 */
export async function getCampaignByInviteCode(code: string): Promise<Campaign | null> {
  const { data, error } = await supabase
    .from('campaigns')
    .select('*')
    .eq('invite_code', code)
    .single();

  if (error) {
    if (error.code !== 'PGRST116') {
      console.error('Erro ao buscar campanha por código de convite:', error);
    }
    return null;
  }
  return data as Campaign | null;
}

/**
 * Atualiza os dados de uma campanha existente.
 */
export async function updateCampaign(campaignId: string, updates: Partial<Campaign>): Promise<Campaign> {
  const { data, error } = await supabase
    .from('campaigns')
    .update(updates)
    .eq('id', campaignId)
    .select()
    .single();

  if (error) {
    console.error('Erro ao atualizar a campanha:', error);
    throw error;
  }
  return data as Campaign;
}


/**
 * Remove o vínculo de um jogador/agente de uma campanha.
 * @param linkId O ID da linha na tabela 'campaign_players'.
 */
export async function removeParticipantFromCampaign(linkId: string): Promise<void> {
  const { error } = await supabase
    .from('campaign_players')
    .delete()
    .eq('id', linkId); // Apaga a linha específica da ligação

  if (error) {
    console.error('Erro ao remover participante da campanha:', error);
    throw error;
  }
}

/**
 * Faz upload de uma imagem de capa, salva o path no banco e atualiza a campanha.
 */
export async function uploadAndSetCampaignCover(campaignId: string, file: File): Promise<Campaign> {
  // 1. Gera um nome único para o arquivo
  const fileExt = file.name.split('.').pop();
  const fileName = `${campaignId}_${Date.now()}.${fileExt}`;

  // 2. Faz upload para o bucket
  const { error: uploadError } = await supabase.storage
    .from('campaign-covers')
    .upload(fileName, file);

  if (uploadError) {
    console.error('Erro ao fazer upload da imagem:', uploadError);
    throw uploadError;
  }

  // 3. Salva APENAS o path no banco de dados, não a URL inteira.
  const updatedCampaign = await updateCampaign(campaignId, { cover_image_url: fileName });

  return updatedCampaign;
}

/**
 * Registra uma rolagem de dados no banco de dados para exibição em tempo real.
 */
export async function logDiceRoll(payload: {
  campaign_id: string;
  character_name: string;
  roll_name: string;
  result: string;
  details: string;
  roll_data?: any;
}) {
  console.log("4. API: Função logDiceRoll recebida com payload:", payload); // LOG 4

  try {
    const { error } = await supabase.from('dice_rolls').insert(payload);

    if (error) {
      // Se houver um erro do Supabase, ele será mostrado aqui
      console.error("ERRO DETALHADO DENTRO DA API:", error); // LOG DE ERRO
    } else {
      console.log("5. API: Rolagem inserida no banco com sucesso!"); // LOG DE SUCESSO
    }
  } catch (e) {
    console.error("ERRO INESPERADO NA API:", e);
  }
}
