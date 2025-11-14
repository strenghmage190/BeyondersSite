import { createClient } from '@supabase/supabase-js';

// Pega as variáveis de ambiente que são injetadas pelo ambiente de execução.
const supabaseUrl = (import.meta as any).env.VITE_SUPABASE_URL;
const supabaseAnonKey = (import.meta as any).env.VITE_SUPABASE_ANON_KEY;

// createClient irá lançar um erro se as variáveis não estiverem definidas,
// o que ajuda a identificar problemas de configuração.
export const supabase = createClient(supabaseUrl!, supabaseAnonKey!);
