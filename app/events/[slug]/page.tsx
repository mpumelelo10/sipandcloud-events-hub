'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function EventDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const [event, setEvent] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [rsvpLoading, setRsvpLoading] = useState(false);
  const [ticket, setTicket] = useState<any>(null);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('/api/events')
      .then((r) => r.json())
      .then((d) => {
        const found = (d.events || []).find((e: any) => e.slug === slug);
        setEvent(found || null);
      })
      .finally(() => setLoading(false));
  }, [slug]);

  async function handleRsvp(e: React.FormEvent) {
    e.preventDefault();
    if (!event) return;
    setRsvpLoading(true);
    setError('');
    try {
      const res = await fetch('/api/rsvp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ event_id: event.id, attendee_name: name, attendee_email: email }),
      });
      const json = await res.json();
      if (!res.ok) {
        setError(json.error || 'RSVP failed');
        return;
      }
      setTicket(json.ticket);
    } catch {
      setError('Network error');
    } finally {
      setRsvpLoading(false);
    }
  }

  if (loading) return <div className="min-h-screen flex items-center justify-center text-purple-200/50">Loading…</div>;
  if (!event) {
    return (
      <div className="min-h-screen flex items-center justify-center text-center p-4">
        <div>
          <p className="text-white mb-2">Event not found</p>
          <Link href="/events" className="text-pink-300 text-sm">← Events</Link>
        </div>
      </div>
    );
  }

  if (ticket) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="text-center max-w-md card-glass rounded-2xl p-8">
          <img src="/logo.svg" alt="" className="h-12 mx-auto mb-4" />
          <h1 className="text-xl font-bold text-white mb-2">RSVP confirmed</h1>
          <p className="text-sm text-purple-100/55 mb-6">Your ticket is ready. You can update or cancel anytime.</p>
          <Link href={`/ticket/${ticket.id}`} className="btn-brand inline-flex px-6 py-2.5 rounded-full text-sm font-medium">
            Open ticket & QR
          </Link>
        </div>
      </div>
    );
  }

  const price = event.price_cents > 0 ? `R ${(event.price_cents / 100).toFixed(0)}` : 'Free';

  return (
    <div className="min-h-screen">
      <header className="border-b border-pink-900/20">
        <div className="max-w-xl mx-auto px-4 h-14 flex items-center justify-between">
          <Link href="/events" className="text-sm text-purple-200/60">← Events</Link>
          <img src="/logo.svg" alt="" className="h-8 w-auto" />
        </div>
      </header>

      <main className="max-w-xl mx-auto px-4 py-10">
        <div className="flex items-center gap-3 mb-4">
          <img src="/logo.svg" alt="" className="h-10" />
          {event.host_logo_url && <img src={event.host_logo_url} alt="Host" className="h-10 rounded" />}
        </div>
        <p className="text-xs text-pink-300 tracking-widest uppercase mb-1">{price}</p>
        <h1 className="text-2xl font-bold text-white mb-2">{event.title}</h1>
        <p className="text-sm text-purple-100/50 mb-1">
          {new Date(event.starts_at).toLocaleString('en-ZA')}
        </p>
        <p className="text-sm text-purple-100/50 mb-6">{event.location || event.city || 'Global / Online'}</p>
        {event.description && <p className="text-sm text-purple-100/60 mb-8 leading-relaxed">{event.description}</p>}

        <form onSubmit={handleRsvp} className="space-y-4 card-glass rounded-2xl p-6">
          <h2 className="font-semibold text-white">RSVP</h2>
          <p className="text-xs text-purple-200/40">Confirm only if you intend to attend. You can change or cancel later.</p>
          <input required value={name} onChange={(e) => setName(e.target.value)} placeholder="Full name"
            className="w-full bg-white/5 border border-purple-500/20 rounded-xl px-3.5 py-2.5 text-white" />
          <input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email"
            className="w-full bg-white/5 border border-purple-500/20 rounded-xl px-3.5 py-2.5 text-white" />
          {error && <p className="text-sm text-red-400">{error}</p>}
          <button type="submit" disabled={rsvpLoading} className="w-full btn-brand font-semibold py-3 rounded-full disabled:opacity-60">
            {rsvpLoading ? 'Confirming…' : 'Confirm RSVP'}
          </button>
        </form>
      </main>
    </div>
  );
}
