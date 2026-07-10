-- ST Web — Supabase Schema
-- Run this in Supabase SQL Editor

create extension if not exists "uuid-ossp";

-- Leads table
create table if not exists public.leads (
  id          uuid primary key default uuid_generate_v4(),
  name        text not null,
  email       text not null,
  company     text,
  type        text not null,
  message     text,
  status      text not null default 'new'
              check (status in ('new','contacted','in_progress','closed','spam')),
  notes       text,
  source      text not null default 'web_form',
  ip          text,
  created_at  timestamptz not null default now(),
  updated_at  timestamptz
);

-- Auto-update updated_at
create or replace function update_updated_at()
returns trigger as $$
begin new.updated_at = now(); return new; end;
$$ language plpgsql;

create trigger leads_updated_at
  before update on public.leads
  for each row execute function update_updated_at();

-- RLS: service role only (admin panel uses service role key)
alter table public.leads enable row level security;

create policy "service_role_all" on public.leads
  for all using (auth.role() = 'service_role');

-- Indexes
create index leads_status_idx    on public.leads(status);
create index leads_created_at_idx on public.leads(created_at desc);
create index leads_email_idx      on public.leads(email);
