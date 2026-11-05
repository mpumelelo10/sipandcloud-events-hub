'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function PreferencesPage() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Ready for API: /api/preferences
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="text-center max-w-md">
          <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-gradient-to-br from-pink-300 to-purple-400 flex items-center justify-center text-2xl text-[#1e0a2e]">✓</div>
          <h1 className="text-2xl font-bold text-white mb-2">You're in, {name}</h1>
          <p className="text-purple-100/60 mb-2">Your network is your net worth.</p>
          <p className="text-sm text-purple-200/40 mb-8">We'll only send verified events and opportunities that match your profile.</p>
          <Link href="/" className="text-pink-300 hover:text-pink-200 text-sm font-medium">← Back to home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <header className="border-b border-purple-900/40">
        <div className="max-w-xl mx-auto px-4 h-14 flex items-center">
          <Link href="/" className="text-sm text-purple-200/60 hover:text-white">← Back</Link>
        </div>
      </header>

      <main className="max-w-xl mx-auto px-4 py-12">
        <p className="text-pink-300/80 text-sm font-medium tracking-wide mb-1">YOUR NETWORK IS YOUR NET WORTH</p>
        <h1 className="text-2xl font-bold text-white mb-2">Join the community</h1>
        <p className="text-purple-100/50 mb-8 text-sm">Tell us once. We match you to verified events and opportunities. Non-members only see public listings.</p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm text-purple-200/60 mb-1.5">Full name</label>
            <input required type="text" value={name} onChange={(e) => setName(e.target.value)}
              className="w-full bg-white/5 border border-purple-500/20 rounded-xl px-3.5 py-2.5 text-white placeholder:text-purple-200/30 focus:outline-none focus:ring-2 focus:ring-pink-400/50" />
          </div>

          <div>
            <label className="block text-sm text-purple-200/60 mb-1.5">Email</label>
            <input required type="email" value={email} onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-white/5 border border-purple-500/20 rounded-xl px-3.5 py-2.5 text-white placeholder:text-purple-200/30 focus:outline-none focus:ring-2 focus:ring-pink-400/50" />
          </div>

          <div>
            <label className="block text-sm text-purple-200/60 mb-1.5">City / Region</label>
            <input type="text" placeholder="Cape Town, Johannesburg, Remote..." value={city} onChange={(e) => setCity(e.target.value)}
              className="w-full bg-white/5 border border-purple-500/20 rounded-xl px-3.5 py-2.5 text-white placeholder:text-purple-200/30 focus:outline-none focus:ring-2 focus:ring-pink-400/50" />
          </div>

          <button type="submit" className="w-full btn-brand font-semibold py-3 rounded-full transition shadow-lg shadow-purple-900/30">
            Save & Activate Alerts
          </button>
        </form>
      </main>
    </div>
  );
}
