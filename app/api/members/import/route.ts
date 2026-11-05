import { NextRequest, NextResponse } from 'next/server';
import { createServiceClient } from '@/lib/supabase';

/** Import community members (from form exports). Body: { members: [{ full_name, email, phone?, city?, role?, interests?, source? }] } */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const members = body.members as any[];
    if (!Array.isArray(members) || members.length === 0) {
      return NextResponse.json({ error: 'members array required' }, { status: 400 });
    }

    const supabase = createServiceClient();
    if (!supabase) return NextResponse.json({ error: 'Database not configured' }, { status: 503 });

    const rows = members
      .filter((m) => m.email && m.full_name)
      .map((m) => ({
        full_name: String(m.full_name).trim(),
        email: String(m.email).trim().toLowerCase(),
        phone: m.phone ? String(m.phone).trim() : null,
        city: m.city || null,
        role: m.role || null,
        interests: m.interests || null,
        source: m.source || 'import',
        membership_tier: 'free',
        linkedin_url: m.linkedin_url || null,
      }));

    const { data, error } = await supabase
      .from('members')
      .upsert(rows, { onConflict: 'email' })
      .select('id, email');

    if (error) return NextResponse.json({ error: error.message }, { status: 500 });
    return NextResponse.json({ ok: true, imported: data?.length || 0 });
  } catch (e: any) {
    return NextResponse.json({ error: e.message || 'Server error' }, { status: 500 });
  }
}
