-- Sip & Cloud Tech – Events Hub Database Schema
-- Run this in Supabase SQL Editor

create extension if not exists "uuid-ossp";
create extension if not exists "pgcrypto";

create table public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text,
  email text unique not null,
  city text,
  prefer_remote boolean default false,
  interests text[] default '{}',
  experience_level text check (experience_level in ('beginner', 'intermediate', 'advanced', 'pivoting')),
  linkedin_url text,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, email, full_name)
  values (new.id, new.email, new.raw_user_meta_data->>'full_name');
  return new;
end;
$$ language plpgsql security definer;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

create table public.events (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  title text not null,
  description text,
  location text,
  city text,
  starts_at timestamptz not null,
  ends_at timestamptz,
  capacity integer,
  image_url text,
  is_published boolean default false,
  price_cents integer default 0,
  currency text default 'ZAR',
  platform_fee_percent numeric(5,2) default 10.00,
  host_email text,
  host_name text,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create index events_city_idx on public.events(city);
create index events_starts_at_idx on public.events(starts_at);
create index events_published_idx on public.events(is_published);

create table public.tickets (
  id uuid primary key default gen_random_uuid(),
  event_id uuid not null references public.events(id) on delete cascade,
  user_id uuid references public.profiles(id) on delete set null,
  attendee_name text not null,
  attendee_email text not null,
  status text not null default 'confirmed'
    check (status in ('confirmed', 'checked_in', 'checked_out', 'cancelled', 'pending_payment')),
  qr_code_url text,
  checked_in_at timestamptz,
  checked_out_at timestamptz,
  notes text,
  amount_paid_cents integer default 0,
  platform_fee_cents integer default 0,
  host_payout_cents integer default 0,
  payment_provider text,
  payment_reference text,
  paid_at timestamptz,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create index tickets_event_id_idx on public.tickets(event_id);
create index tickets_email_idx on public.tickets(attendee_email);

create table public.opportunities (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text,
  type text,
  location text,
  is_remote boolean default false,
  is_published boolean default true,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table public.opportunity_interests (
  id uuid primary key default gen_random_uuid(),
  opportunity_id uuid references public.opportunities(id) on delete cascade,
  user_id uuid references public.profiles(id) on delete set null,
  email text,
  name text,
  message text,
  created_at timestamptz default now()
);

-- RLS and helpers can be added later. Core tables ready for monetization.
