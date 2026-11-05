import { NextRequest, NextResponse } from 'next/server';
import { createServiceClient } from '@/lib/supabase';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, city, focus, why } = body;

    if (!name || !email) {
      return NextResponse.json({ error: 'Name and email are required' }, { status: 400 });
    }

    const supabase = createServiceClient();
    if (!supabase) {
      return NextResponse.json({ error: 'Database not configured' }, { status: 503 });
    }

    // Upsert into profiles by email (table uses email as unique)
    // profiles.id references auth.users – for open membership we store as a simple lead first
    // If profiles requires auth.users id, we fall back to opportunity_interests style storage

    // Try insert into a simple membership_requests pattern via profiles if possible
    // Our schema has profiles tied to auth.users. For now store in opportunity_interests
    // as a general interest record, and also try profiles if the user later signs up.

    const { data, error } = await supabase
      .from('opportunity_interests')
      .insert({
        email: email.trim().toLowerCase(),
        name: name.trim(),
        message: [city && `City: ${city}`, focus && `Focus: ${focus}`, why && `Why: ${why}`]
          .filter(Boolean)
          .join(' | '),
      })
      .select()
      .single();

    if (error) {
      console.error('Supabase insert error:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ ok: true, id: data?.id });
  } catch (e: any) {
    console.error(e);
    return NextResponse.json({ error: e.message || 'Server error' }, { status: 500 });
  }
}
