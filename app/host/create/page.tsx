'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function CreateEventPage() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError('');
    const fd = new FormData(e.currentTarget);
    const priceZar = Number(fd.get('price_zar') || 0);

    try {
      const res = await fetch('/api/events', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: fd.get('title'),
          description: fd.get('description'),
          location: fd.get('location'),
          city: fd.get('city'),
          starts_at: fd.get('starts_at'),
          ends_at: fd.get('ends_at') || null,
          capacity: fd.get('capacity') || null,
          price_cents: Math.round(priceZar * 100),
          host_email: fd.get('host_email'),
          host_name: fd.get('host_name'),
          host_logo_url: fd.get('host_logo_url') || null,
          meeting_url: fd.get('meeting_url') || null,
          is_global: true,
        }),
      });
      const json = await res.json();
      if (!res.ok) {
        setError(json.error || 'Failed to create event');
        return;
      }
      setResult(json.event);
    } catch {
      setError('Network error');
    } finally {
      setLoading(false);
    }
  }

  if (result) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="text-center max-w-md card-glass rounded-2xl p-8">
          <img src="/logo.svg" alt="" className="h-12 w-auto mx-auto mb-4" />
          <h1 className="text-xl font-bold text-white mb-2">Event published</h1>
          <p className="text-sm text-purple-100/55 mb-4">{result.title}</p>
          <p className="text-xs text-purple-200/40 mb-6">QR tickets will show Sip & Cloud logo + your host branding.</p>
          <div className="flex flex-col gap-2">
            <Link href={`/events/${result.slug}`} className="btn-brand py-2.5 rounded-full text-sm font-medium">View event page</Link>
            <Link href="/host" className="text-sm text-purple-300">← Host dashboard</Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <header className="border-b border-pink-900/20">
        <div className="max-w-xl mx-auto px-4 h-14 flex items-center justify-between">
          <Link href="/host" className="text-sm text-purple-200/60 hover:text-white">← Host</Link>
          <img src="/logo.svg" alt="" className="h-8 w-auto" />
        </div>
      </header>

      <main className="max-w-xl mx-auto px-4 py-10">
        <p className="text-pink-300 text-xs font-semibold tracking-[0.15em] uppercase mb-2">Host</p>
        <h1 className="text-2xl font-bold text-white mb-2">Create an event</h1>
        <p className="text-sm text-purple-100/50 mb-8">Global by default. Distance is not a barrier. Platform fee 10% on paid tickets.</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <Field label="Event title" name="title" required />
          <div>
            <label className="block text-sm text-purple-200/60 mb-1.5">Description</label>
            <textarea name="description" rows={3} className="input" />
          </div>
          <Field label="Venue / location" name="location" placeholder="Cape Town / Online / Hybrid" />
          <Field label="City (optional)" name="city" placeholder="Any city or leave blank for global" />
          <Field label="Online meeting URL (optional)" name="meeting_url" placeholder="https://..." />
          <Field label="Starts at" name="starts_at" type="datetime-local" required />
          <Field label="Ends at" name="ends_at" type="datetime-local" />
          <Field label="Capacity (optional)" name="capacity" type="number" />
          <Field label="Ticket price (ZAR, 0 = free)" name="price_zar" type="number" placeholder="0" />
          <Field label="Host name" name="host_name" required />
          <Field label="Host email" name="host_email" type="email" required />
          <Field label="Host logo URL (optional)" name="host_logo_url" placeholder="https://...png" />

          {error && <p className="text-sm text-red-400">{error}</p>}

          <button type="submit" disabled={loading} className="w-full btn-brand font-semibold py-3 rounded-full disabled:opacity-60">
            {loading ? 'Publishing…' : 'Publish event'}
          </button>
        </form>
      </main>

      <style jsx global>{`
        .input {
          width: 100%;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(167,139,250,0.2);
          border-radius: 0.75rem;
          padding: 0.625rem 0.875rem;
          color: white;
        }
        .input:focus { outline: none; box-shadow: 0 0 0 2px rgba(244,114,182,0.4); }
      `}</style>
    </div>
  );
}

function Field({ label, name, type = 'text', required, placeholder }: any) {
  return (
    <div>
      <label className="block text-sm text-purple-200/60 mb-1.5">{label}</label>
      <input name={name} type={type} required={required} placeholder={placeholder} className="input" />
    </div>
  );
}
