-- SQL to create campaigns and campaign_members tables for Supabase
-- Run this in Supabase SQL editor

create table if not exists public.campaigns (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  description text,
  creator_id uuid references auth.users(id) on delete cascade,
  created_at timestamptz default now()
);

create table if not exists public.campaign_members (
  id uuid primary key default gen_random_uuid(),
  campaign_id uuid references public.campaigns(id) on delete cascade,
  user_id uuid references auth.users(id) on delete cascade,
  role text not null default 'player', -- 'gm' or 'player'
  joined_at timestamptz default now()
);

-- Basic RLS policy notes (adapt per your security needs)
-- Enable RLS on the tables in Supabase and add policies like:
-- For campaigns: allow INSERT for authenticated users, SELECT for members, UPDATE/DELETE only for creator
-- For campaign_members: allow INSERT when invited or by the campaign creator, SELECT for members, DELETE by campaign creator or the member
