'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function EventsPage() {
  const [events, setEvents] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/events')
      .then((r) => r.json())
      .then((d) => setEvents(d.events || []))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="min-h-screen text-slate-100">
      <header className="border-b border-pink-900/20 sticky top-0 z-50 bg-[#0c0614]/95 backdrop-blur-md">
        <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <img src="/logo.svg" alt="" className="h-8 w-auto" />
            <span className="font-semibold text-white text-sm">Events</span>
          </Link>
          <Link href="/preferences" className="btn-brand px-3.5 py-1.5 rounded-full text-sm font-medium">Join</Link>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-12">
        <p className="text-pink-300 text-xs font-semibold tracking-[0.15em] uppercase mb-2">Verified & global</p>
        <h1 className="text-3xl font-bold text-white mb-3">Curated events</h1>
        <p className="text-purple-100/50 max-w-xl mb-10 text-sm leading-relaxed">
          Distance is not a barrier. RSVP is a commitment — update it if you cannot attend.
        </p>

        {loading ? (
          <p className="text-purple-200/40 text-sm">Loading events…</p>
        ) : events.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-purple-500/20 bg-purple-950/15 p-12 text-center">
            <img src="/logo.svg" alt="" className="h-12 w-auto mx-auto mb-5 opacity-70" />
            <p className="text-purple-100/55 mb-2">No events published yet.</p>
            <p className="text-sm text-purple-200/40 mb-6">Hosts can create the first one now.</p>
            <Link href="/host/create" className="btn-brand px-5 py-2.5 rounded-full text-sm font-medium">Create event</Link>
          </div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2">
            {events.map((ev) => (
              <Link key={ev.id} href={`/events/${ev.slug}`} className="card-glass rounded-2xl p-6 hover:border-pink-400/30 transition">
                <p className="text-xs text-pink-300 mb-1">
                  {ev.price_cents > 0 ? `R ${(ev.price_cents / 100).toFixed(0)}` : 'Free'}
                  {ev.city ? ` · ${ev.city}` : ' · Global'}
                </p>
                <h2 className="font-semibold text-white mb-1">{ev.title}</h2>
                <p className="text-sm text-purple-100/50">
                  {new Date(ev.starts_at).toLocaleString('en-ZA')}
                </p>
              </Link>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
