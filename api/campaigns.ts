import { supabase } from '../supabaseClient';
import { Campaign, CampaignPlayer } from '../types';

/**
 * Cria uma nova campanha no banco de dados Supabase.
 */
export async function createCampaign(name: string, masterId: string): Promise<Campaign> {
  // Gera um código de convite único
  const inviteCode = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);

  const { data, error } = await supabase
    .from('campaigns')
    .insert({
      name: name,
      gm_id: masterId, // Certifique-se que sua coluna se chama 'gm_id'
      invite_code: inviteCode
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
    .eq('gm_id', masterId); // Filtra pela coluna do mestre

  if (error) {
    console.error('Erro ao buscar campanhas por mestre:', error);
    return [];
  }

  // Map to Campaign type
  const campaigns: Campaign[] = (data || []).map(c => ({
    id: c.id,
    name: c.name,
    gm_id: c.gm_id,
    invite_code: c.invite_code
  }));

  return campaigns;
}

/**
 * Busca uma única campanha pelo seu ID.
 */
export async function getCampaignById(id: string): Promise<Campaign | null> {
  const { data, error } = await supabase
    .from('campaigns')
    .select('*')
    .eq('id', id)
    .single(); // .single() pega um único registro ou retorna erro se não achar (ou achar mais de um)

  if (error) {
    // É normal não encontrar um registro, então só logamos outros tipos de erro
    if (error.code !== 'PGRST116') {
      console.error('Erro ao buscar campanha por ID:', error);
    }
    return null;
  }

  // Map to Campaign type
  const campaign: Campaign = {
    id: data.id,
    name: data.name,
    gm_id: data.gm_id,
    invite_code: data.invite_code
  };

  return campaign;
}

/**
 * Busca os jogadores de uma campanha específica.
 */
export async function getPlayersByCampaignId(campaignId: string): Promise<CampaignPlayer[]> {
  const { data, error } = await supabase
    .from('campaign_players')
    .select('*')
    .eq('campaign_id', campaignId);

  if (error) {
    console.error('Erro ao buscar jogadores da campanha:', error);
    return [];
  }

  // Map to CampaignPlayer type
  const players: CampaignPlayer[] = (data || []).map(p => ({
    userId: p.player_id,
    agentId: p.agent_id
  }));

  return players;
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
      // agent_id pode ser null se o jogador ainda não tem um personagem
      agent_id: null
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
 * O player_id fica nulo para indicar que é um NPC controlado pelo mestre.
 */
export async function linkAgentToCampaign(campaignId: string, agentId: string): Promise<any> {
  const { data, error } = await supabase
    .from('campaign_players')
    .insert({
      campaign_id: campaignId,
      agent_id: agentId,
      player_id: null // NULO significa que é um NPC
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
 * Isso atualiza a entrada existente criada durante o convite.
 */
export async function linkPlayerCharacter(campaignId: string, playerId: string, agentId: string): Promise<any> {
  const { data, error } = await supabase
    .from('campaign_players')
    .update({ agent_id: agentId }) // Apenas atualiza o agent_id
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
    .eq('invite_code', code) // Busca pela nova coluna
    .single();

  if (error) {
    if (error.code !== 'PGRST116') { // Ignora o erro "not found"
      console.error('Erro ao buscar campanha por código de convite:', error);
    }
    return null;
  }
  return data as Campaign | null;
}

/**
 * Atualiza os dados de uma campanha existente.
 * @param campaignId O ID da campanha a ser atualizada.
 * @param updates Um objeto com os campos a serem atualizados (ex: { name: 'Novo Nome' }).
 * @returns A campanha atualizada.
 */
export async function updateCampaign(campaignId: string, updates: Partial<Campaign>): Promise<Campaign> {
  const { data, error } = await supabase
    .from('campaigns')
    .update(updates)
    .eq('id', campaignId)
    .select() // Pede ao Supabase para retornar o registro atualizado
    .single(); // Espera um único resultado

  if (error) {
    console.error('Erro ao atualizar a campanha:', error);
    throw error;
  }
  return data as Campaign;
}

/**
 * Faz upload de uma imagem de capa para o bucket 'campaign-covers' no Supabase,
 * obtém a URL pública e atualiza a campanha com essa URL.
 * @param campaignId O ID da campanha.
 * @param file O arquivo de imagem a ser enviado.
 * @returns A campanha atualizada com a nova cover_image_url.
 */
export async function uploadAndSetCampaignCover(campaignId: string, file: File): Promise<Campaign> {
  // Gera um nome único para o arquivo
  const fileExt = file.name.split('.').pop();
  const fileName = `${campaignId}_${Date.now()}.${fileExt}`;

  // Faz upload para o bucket 'campaign-covers'
  const { data: uploadData, error: uploadError } = await supabase.storage
    .from('campaign-covers')
    .upload(fileName, file);

  if (uploadError) {
    console.error('Erro ao fazer upload da imagem:', uploadError);
    throw uploadError;
  }

  // Obtém a URL pública do arquivo
  const { data: publicUrlData } = supabase.storage
    .from('campaign-covers')
    .getPublicUrl(fileName);

  const publicUrl = publicUrlData.publicUrl;

  // Atualiza a campanha com a nova URL da imagem de capa
  const updatedCampaign = await updateCampaign(campaignId, { cover_image_url: publicUrl });

  return updatedCampaign;
}
