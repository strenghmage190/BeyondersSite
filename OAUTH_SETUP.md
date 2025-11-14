# Configurando OAuth (Google e GitHub) com Supabase

Este guia mostra os passos para habilitar login via Google e GitHub usando o Supabase (Auth UI já está integrado no `AuthPage.tsx`). Não posso criar os apps no GitHub/Google ou alterar o painel do Supabase por você, mas abaixo está tudo que você precisa fazer — siga na ordem indicada.

## Resumo rápido
- Criar OAuth App no GitHub e OAuth Client (Web) no Google Cloud
- Copiar Client ID e Client Secret para o painel do Supabase (Authentication -> Providers)
- Adicionar os Redirect URIs corretos nos apps OAuth
- Configurar variáveis de ambiente no Vercel e localmente
- Testar localmente e em produção

---

## 1) URL de callback correta (Redirect URI)
Importante: ao usar o Supabase como camada de autenticação, o *callback* que você deve registrar no provedor (GitHub/Google) é o endpoint de OAuth do próprio Supabase — ou seja, a URL do seu projeto Supabase seguida de `/auth/v1/callback`.

Exemplo de URL que deve ser registrada no provedor (GitHub/Google):

- https://<SEU_PROJETO>.supabase.co/auth/v1/callback

Como obter essa URL: abra o painel do Supabase → Settings → API → Project URL (ex.: `https://xxxxx.supabase.co`). Cole ` /auth/v1/callback` no final.

Observação: não registre o callback apontando diretamente para seu domínio Vercel (como `https://beyonders-site-zeta.vercel.app/auth/v1/callback`). O fluxo OAuth com Supabase funciona assim:

1. O usuário é redirecionado ao provedor (GitHub/Google) para autenticar.
2. O provedor redireciona de volta para o endpoint do Supabase (`https://<seu_projeto>.supabase.co/auth/v1/callback`).
3. O Supabase trata o callback, cria a sessão e então redireciona de volta para sua aplicação (usando o parâmetro `redirect_to`).

Portanto, os provedores **devem** ter a URL do Supabase registrada como Authorized Redirect URI.

---

## 2) Criar OAuth App no GitHub
1. Vá em https://github.com/settings/developers -> OAuth Apps -> New OAuth App
2. App name: "Beyonders" (ou o que preferir)
3. Homepage URL: https://<SEU_DOMINIO>.vercel.app (ou http://localhost:3000 para testes locais)
4. Authorization callback URL: adicione as URIs de callback listadas acima
5. Crie a App e anote o `Client ID` e o `Client Secret`

---

## 3) Criar OAuth Client no Google (Google Cloud Console)
1. Abra https://console.cloud.google.com/apis/credentials
2. Configure a tela de consentimento OAuth (OAuth consent screen) se ainda não fez (coloque o email do dev, nome do app, escopos básicos)
3. Crie credenciais -> OAuth client ID -> Web application
4. Em "Authorized redirect URIs" adicione as URIs do passo 1
5. Anote o `Client ID` e `Client Secret`

---

## 4) Configurar no Supabase
1. Entre no painel do seu projeto Supabase -> Authentication -> Providers (ou Settings -> Auth -> External OAuth Providers)
2. Cole o `Client ID` e `Client Secret` de GitHub e Google nos campos correspondentes
3. Salve
4. Em Settings -> Auth -> Site URL, coloque sua URL de produção (ex: https://<SEU_DOMINIO>.vercel.app)

---

## 5) Configurar variáveis de ambiente
No Vercel (Dashboard -> seu projeto -> Settings -> Environment Variables) adicione:

- VITE_SUPABASE_URL = https://xxxxx.supabase.co
- VITE_SUPABASE_ANON_KEY = <sua-anon-key>

No seu ambiente local (arquivo `.env.local` ou `.env`), adicione:

VITE_SUPABASE_URL=https://xxxxx.supabase.co
VITE_SUPABASE_ANON_KEY=<sua-anon-key>

> Observação: o prefixo `VITE_` é necessário para que o Vite exponha as variáveis no client-side.

---

## 6) Testar
1. Reinicie dev server: `npm run dev`
2. Abra `http://localhost:3000` (ou a porta que o Vite usar)
3. Clique em GitHub ou Google no formulário de login — você deverá ser redirecionado ao provedor e, após autenticar, voltar à sua aplicação com sessão ativa

---

## 7) Troubleshooting
- Se ver o erro "Invalid hook call": verifique se há múltiplas versões de React (`npm ls react`) e que você não está usando CDN importmap (o projeto já foi ajustado para usar node_modules)
- Se o redirecionamento falhar: confira as URIs de callback no app OAuth e no painel do Supabase
- Verifique se as variáveis `VITE_SUPABASE_URL` e `VITE_SUPABASE_ANON_KEY` estão corretas no Vercel e no local
- Para logs de autenticação, veja o console do navegador e o painel do Supabase (Logs)

---

Se quiser, eu posso:
- Gerar o arquivo `.env.example` no repositório com as chaves placeholders (faço agora),
- Fornecer as instruções passo-a-passo específicas para o seu domínio Vercel se você me informar o domínio (eu completo as URIs),
- Ou te guiar enquanto você cria as apps no GitHub/Google e cola os Client IDs/Secrets no Supabase.

Diga qual dessas opções prefere que eu faça em seguida.
