-- Ensure needed columns exist before creating policies
alter table public.agents
  add column if not exists data jsonb,
  add column if not exists lastModified timestamptz,
  add column if not exists created_by uuid references auth.users(id) default auth.uid();

-- Enable RLS
alter table public.agents enable row level security;

-- Allow INSERT for authenticated users
create policy "Users can create agents"
  on public.agents
  for insert
  to authenticated
  with check (created_by = auth.uid());

-- Allow users to SELECT their own agents (using auth.uid())
create policy "Users can view their own agents"
  on public.agents
  for select
  to authenticated
  using (auth.uid() = created_by);

-- Allow users to UPDATE their own agents
create policy "Users can update their own agents"
  on public.agents
  for update
  to authenticated
  using (created_by = auth.uid())
  with check (created_by = auth.uid());

-- Allow users to DELETE their own agents
create policy "Users can delete their own agents"
  on public.agents
  for delete
  to authenticated
  using (auth.uid() = created_by);

-- (created_by, data and lastModified columns are ensured earlier in this script)