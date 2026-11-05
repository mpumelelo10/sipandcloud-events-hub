import { NextRequest, NextResponse } from 'next/server';
import { createServiceClient } from '@/lib/supabase';

function slugify(s: string) {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
    .slice(0, 60);
}

export async function GET() {
  const supabase = createServiceClient();
  if (!supabase) return NextResponse.json({ events: [] });

  const { data, error } = await supabase
    .from('events')
    .select('*')
    .eq('is_published', true)
    .order('starts_at', { ascending: true });

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ events: data || [] });
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      title, description, location, city, starts_at, ends_at,
      capacity, price_cents, host_email, host_name, host_logo_url,
      meeting_url, is_global, currency,
    } = body;

    if (!title || !starts_at || !host_email) {
      return NextResponse.json({ error: 'title, starts_at and host_email are required' }, { status: 400 });
    }

    const supabase = createServiceClient();
    if (!supabase) return NextResponse.json({ error: 'Database not configured' }, { status: 503 });

    const baseSlug = slugify(title) || 'event';
    const slug = `${baseSlug}-${Date.now().toString(36)}`;

    const { data, error } = await supabase
      .from('events')
      .insert({
        slug,
        title: title.trim(),
        description: description || null,
        location: location || null,
        city: city || null,
        starts_at,
        ends_at: ends_at || null,
        capacity: capacity ? Number(capacity) : null,
        price_cents: price_cents ? Number(price_cents) : 0,
        currency: currency || 'ZAR',
        platform_fee_percent: 10,
        host_email: host_email.trim().toLowerCase(),
        host_name: host_name || null,
        host_logo_url: host_logo_url || null,
        meeting_url: meeting_url || null,
        is_global: is_global !== false,
        is_published: true,
      })
      .select()
      .single();

    if (error) return NextResponse.json({ error: error.message }, { status: 500 });
    return NextResponse.json({ ok: true, event: data });
  } catch (e: any) {
    return NextResponse.json({ error: e.message || 'Server error' }, { status: 500 });
  }
}
