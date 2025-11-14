import { supabase } from '../supabaseClient';

export async function uploadAgentAvatar(agentId: string, fieldName: string, file: File, field: any): Promise<string> {
  const fileExt = file.name.split('.').pop();
  // Cria um nome de arquivo que inclui o campo (ex: ID-avatarHealthy-timestamp.jpg)
  const filePath = `${agentId}-${fieldName}-${Date.now()}.${fileExt}`;

  const { error } = await supabase.storage.from('agent-avatars').upload(filePath, file);
  if (error) throw error;

  return filePath;
}
