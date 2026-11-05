-- Extra columns for paid membership, host logos, global events
-- Run this in Supabase SQL Editor after schema.sql

alter table public.profiles add column if not exists phone text;
alter table public.profiles add column if not exists membership_tier text default 'free'
  check (membership_tier in ('free', 'paying', 'host', 'speaker'));
alter table public.profiles add column if not exists snapscan_ref text;
alter table public.profiles add column if not exists paid_at timestamptz;
alter table public.profiles add column if not exists source text; -- form, whatsapp, import
alter table public.profiles add column if not exists linkedin_url text;

alter table public.events add column if not exists host_logo_url text;
alter table public.events add column if not exists is_global boolean default true;
alter table public.events add column if not exists timezone text default 'Africa/Johannesburg';
alter table public.events add column if not exists meeting_url text; -- for online / hybrid

-- Membership leads (from form import + website) without requiring auth.users
create table if not exists public.members (
  id uuid primary key default gen_random_uuid(),
  full_name text not null,
  email text unique not null,
  phone text,
  city text,
  role text,
  interests text,
  membership_tier text default 'free',
  source text,
  linkedin_url text,
  snapscan_ref text,
  paid_at timestamptz,
  notes text,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create index if not exists members_email_idx on public.members(email);
create index if not exists members_tier_idx on public.members(membership_tier);

alter table public.members enable row level security;
create policy if not exists "Service can manage members" on public.members for all using (true) with check (true);
