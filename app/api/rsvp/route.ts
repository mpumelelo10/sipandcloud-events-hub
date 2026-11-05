import { NextRequest, NextResponse } from 'next/server';
import { createServiceClient } from '@/lib/supabase';
import { generateTicketQR } from '@/lib/qr';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { event_id, attendee_name, attendee_email } = body;

    if (!event_id || !attendee_name || !attendee_email) {
      return NextResponse.json({ error: 'event_id, attendee_name and attendee_email required' }, { status: 400 });
    }

    const supabase = createServiceClient();
    if (!supabase) return NextResponse.json({ error: 'Database not configured' }, { status: 503 });

    const { data: event, error: evErr } = await supabase
      .from('events')
      .select('*')
      .eq('id', event_id)
      .single();

    if (evErr || !event) {
      return NextResponse.json({ error: 'Event not found' }, { status: 404 });
    }

    // Capacity check
    if (event.capacity) {
      const { count } = await supabase
        .from('tickets')
        .select('*', { count: 'exact', head: true })
        .eq('event_id', event_id)
        .in('status', ['confirmed', 'checked_in']);
      if ((count || 0) >= event.capacity) {
        return NextResponse.json({ error: 'Event is full' }, { status: 409 });
      }
    }

    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://eventssipandcloud.netlify.app';

    const { data: ticket, error } = await supabase
      .from('tickets')
      .insert({
        event_id,
        attendee_name: attendee_name.trim(),
        attendee_email: attendee_email.trim().toLowerCase(),
        status: event.price_cents > 0 ? 'pending_payment' : 'confirmed',
        amount_paid_cents: 0,
        platform_fee_cents: 0,
        host_payout_cents: 0,
      })
      .select()
      .single();

    if (error) return NextResponse.json({ error: error.message }, { status: 500 });

    const ticketUrl = `${siteUrl}/ticket/${ticket.id}`;
    const qrCodeUrl = await generateTicketQR(ticketUrl);

    await supabase
      .from('tickets')
      .update({ qr_code_url: qrCodeUrl })
      .eq('id', ticket.id);

    return NextResponse.json({
      ok: true,
      ticket: { ...ticket, qr_code_url: qrCodeUrl, ticket_url: ticketUrl },
      event: { title: event.title, starts_at: event.starts_at, location: event.location },
    });
  } catch (e: any) {
    return NextResponse.json({ error: e.message || 'Server error' }, { status: 500 });
  }
}
