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
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center p-4">
        <div className="text-center max-w-md">
          <div className="text-4xl mb-4">✓</div>
          <h1 className="text-2xl font-bold text-white mb-2">Preferences saved</h1>
          <p className="text-slate-400 mb-6">Thank you {name}. We will start sending relevant updates soon.</p>
          <Link href="/" className="text-indigo-400 hover:text-indigo-300">← Back to home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="border-b border-slate-800/80">
        <div className="max-w-xl mx-auto px-4 h-14 flex items-center">
          <Link href="/" className="text-sm text-slate-400 hover:text-white">← Back</Link>
        </div>
      </header>

      <main className="max-w-xl mx-auto px-4 py-12">
        <h1 className="text-2xl font-bold text-white mb-2">Set your preferences once</h1>
        <p className="text-slate-400 mb-8">We'll only send you relevant events and opportunities.</p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm text-slate-400 mb-1.5">Full name</label>
            <input required type="text" value={name} onChange={(e) => setName(e.target.value)}
              className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3.5 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500" />
          </div>

          <div>
            <label className="block text-sm text-slate-400 mb-1.5">Email</label>
            <input required type="email" value={email} onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3.5 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500" />
          </div>

          <div>
            <label className="block text-sm text-slate-400 mb-1.5">City / Region</label>
            <input type="text" placeholder="e.g. Cape Town, Johannesburg, Remote" value={city} onChange={(e) => setCity(e.target.value)}
              className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3.5 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500" />
          </div>

          <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3 rounded-xl transition">
            Save & Activate Alerts
          </button>
        </form>
      </main>
    </div>
  );
}
