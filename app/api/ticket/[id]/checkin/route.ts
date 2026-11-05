import { NextRequest, NextResponse } from 'next/server';
import { createServiceClient } from '@/lib/supabase';

export async function POST(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const body = await req.json().catch(() => ({}));
    const action = body.action === 'checkout' ? 'checkout' : 'checkin';

    const supabase = createServiceClient();
    if (!supabase) return NextResponse.json({ error: 'Database not configured' }, { status: 503 });

    const { data: ticket, error } = await supabase
      .from('tickets')
      .select('*, events(title, host_email)')
      .eq('id', params.id)
      .single();

    if (error || !ticket) {
      return NextResponse.json({ error: 'Ticket not found' }, { status: 404 });
    }

    if (ticket.status === 'cancelled') {
      return NextResponse.json({ error: 'Ticket cancelled' }, { status: 400 });
    }

    const now = new Date().toISOString();
    const updates =
      action === 'checkout'
        ? { status: 'checked_out', checked_out_at: now }
        : { status: 'checked_in', checked_in_at: now };

    const { data: updated, error: upErr } = await supabase
      .from('tickets')
      .update(updates)
      .eq('id', params.id)
      .select()
      .single();

    if (upErr) return NextResponse.json({ error: upErr.message }, { status: 500 });

    return NextResponse.json({ ok: true, ticket: updated, action });
  } catch (e: any) {
    return NextResponse.json({ error: e.message || 'Server error' }, { status: 500 });
  }
}
