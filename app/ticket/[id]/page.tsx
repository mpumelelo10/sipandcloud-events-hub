import Link from 'next/link';
import { createServiceClient } from '@/lib/supabase';
import TicketActions from '@/components/TicketActions';

export default async function TicketPage({ params }: { params: { id: string } }) {
  const supabase = createServiceClient();
  let ticket: any = null;
  let event: any = null;

  if (supabase) {
    const { data } = await supabase
      .from('tickets')
      .select('*, events(*)')
      .eq('id', params.id)
      .single();
    ticket = data;
    event = data?.events;
  }

  if (!ticket) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4 text-center">
        <div>
          <p className="text-white mb-2">Ticket not found</p>
          <Link href="/" className="text-pink-300 text-sm">← Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-10 px-4">
      <div className="max-w-md mx-auto card-glass rounded-2xl p-6 text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <img src="/logo.svg" alt="Sip & Cloud" className="h-10 w-auto" />
          {event?.host_logo_url && (
            <img src={event.host_logo_url} alt="Host" className="h-10 w-auto rounded" />
          )}
        </div>

        <p className="text-xs text-pink-300 tracking-widest uppercase mb-1">Your ticket</p>
        <h1 className="text-xl font-bold text-white mb-1">{event?.title}</h1>
        <p className="text-sm text-purple-100/50 mb-4">
          {event?.starts_at && new Date(event.starts_at).toLocaleString('en-ZA')}
          {event?.location && ` · ${event.location}`}
        </p>

        <div className="bg-white rounded-xl p-4 mb-4 inline-block">
          {ticket.qr_code_url ? (
            <img src={ticket.qr_code_url} alt="QR ticket" className="w-48 h-48 object-contain" />
          ) : (
            <div className="w-48 h-48 flex items-center justify-center text-slate-400 text-sm">QR generating…</div>
          )}
        </div>

        <p className="font-medium text-white">{ticket.attendee_name}</p>
        <p className="text-sm text-purple-200/50 mb-2">{ticket.attendee_email}</p>
        <p className="text-xs uppercase tracking-wide text-pink-300/80 mb-6">Status: {ticket.status}</p>

        <TicketActions ticketId={ticket.id} currentStatus={ticket.status} attendeeName={ticket.attendee_name} />

        <p className="mt-6 text-xs text-purple-200/35">Your Network is Your Networth · Sip & Cloud Tech</p>
      </div>
    </div>
  );
}
