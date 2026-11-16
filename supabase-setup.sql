-- Alphabet Ladder: cloud progress table.
-- Run this once in the Supabase dashboard: SQL Editor -> New query -> paste -> Run.
-- It only creates ONE new, uniquely named table; it does not touch your party
-- invite tables.

-- 1. The table: one row per player (anonymous or email), holding their save.
create table if not exists public.alphabet_ladder_progress (
  user_id    uuid primary key default auth.uid() references auth.users (id) on delete cascade,
  data       jsonb not null,
  updated_at timestamptz not null default now(),
  constraint alphabet_ladder_progress_is_object check (jsonb_typeof(data) = 'object'),
  constraint alphabet_ladder_progress_size check (octet_length(data::text) < 500000)
);

-- 2. Row-level security: a player can only ever see and change their own row.
alter table public.alphabet_ladder_progress enable row level security;

drop policy if exists "alphabet ladder: read own" on public.alphabet_ladder_progress;
create policy "alphabet ladder: read own" on public.alphabet_ladder_progress
  for select to authenticated using (user_id = (select auth.uid()));

drop policy if exists "alphabet ladder: insert own" on public.alphabet_ladder_progress;
create policy "alphabet ladder: insert own" on public.alphabet_ladder_progress
  for insert to authenticated with check (user_id = (select auth.uid()));

drop policy if exists "alphabet ladder: update own" on public.alphabet_ladder_progress;
create policy "alphabet ladder: update own" on public.alphabet_ladder_progress
  for update to authenticated
  using (user_id = (select auth.uid())) with check (user_id = (select auth.uid()));

-- 3. Tight table permissions: signed-out visitors get nothing; players can read,
--    create and update (never delete) their own row.
revoke all on public.alphabet_ladder_progress from anon, authenticated;
grant select, insert, update on public.alphabet_ladder_progress to authenticated;

-- ---------------------------------------------------------------------------
-- IMPORTANT if this project is shared with another app (e.g. a party invite):
-- Players here sign up with just an email, so anyone can get the `authenticated`
-- role. If any other table has a policy written "to authenticated" (or
-- "using (true)"), those players would pass it. Also, any sign-up trigger on
-- auth.users that demands an invite will reject game players. Run this to check
-- the policies:
--
--   select schemaname, tablename, policyname, roles, cmd, qual
--   from pg_policies
--   where schemaname = 'public' and tablename <> 'alphabet_ladder_progress';
--
-- Any policy listing {authenticated} or {public} with a loose `qual` should be
-- tightened first (e.g. require (auth.jwt() ->> 'is_anonymous')::boolean is false).
-- ---------------------------------------------------------------------------
