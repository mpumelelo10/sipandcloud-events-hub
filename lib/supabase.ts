// lib/supabase.ts
// Supports both classic JWT keys and new sb_publishable_ / sb_secret_ keys

import { createClient, SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl =
  process.env.NEXT_PUBLIC_SUPABASE_URL ||
  process.env.SUPABASE_URL ||
  '';

const publishableKey =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
  process.env.SUPABASE_PUBLISHABLE_KEY ||
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ||
  '';

const secretKey =
  process.env.SUPABASE_SERVICE_ROLE_KEY ||
  process.env.SUPABASE_SECRET_KEY ||
  '';

export const isSupabaseConfigured =
  Boolean(supabaseUrl) &&
  Boolean(publishableKey) &&
  !supabaseUrl.includes('your-project');

export const supabase: SupabaseClient | null = isSupabaseConfigured
  ? createClient(supabaseUrl, publishableKey)
  : null;

/** Server-side client with elevated access (use only in API routes / server components) */
export function createServiceClient(): SupabaseClient | null {
  if (!isSupabaseConfigured) return null;
  const key = secretKey || publishableKey;
  return createClient(supabaseUrl, key);
}
