'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function PreferencesPage() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="text-center max-w-md">
          <img src="/logo.svg" alt="" className="h-16 w-auto mx-auto mb-6 opacity-90" />
          <h1 className="text-2xl font-bold text-white mb-2">Request received</h1>
          <p className="text-purple-100/55 mb-2 text-sm">Your Network is Your Networth.</p>
          <p className="text-sm text-purple-200/40 mb-8 leading-relaxed">
            We review membership requests carefully. You will hear from us by email if your profile is a fit for the community.
          </p>
          <Link href="/" className="text-pink-300 hover:text-pink-200 text-sm font-medium">← Back to home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <header className="border-b border-pink-900/20">
        <div className="max-w-xl mx-auto px-4 h-14 flex items-center justify-between">
          <Link href="/" className="text-sm text-purple-200/60 hover:text-white">← Back</Link>
          <img src="/logo.svg" alt="Sip and Cloud Tech" className="h-8 w-auto" />
        </div>
      </header>

      <main className="max-w-xl mx-auto px-4 py-10">
        <p className="text-pink-300 text-xs font-semibold tracking-[0.15em] uppercase mb-2">Membership</p>
        <h1 className="text-2xl font-bold text-white mb-2">Request to join</h1>
        <p className="text-purple-100/50 mb-8 text-sm leading-relaxed">
          This is not an open signup. We select professionals who are focused, continuously learning, and who take responsibility for their RSVPs. Your time is valuable — so is everyone else's.
        </p>

        {/* Netlify Forms — works immediately, no backend required */}
        <form
          name="membership-request"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          onSubmit={() => setSubmitted(true)}
          className="space-y-5"
        >
          <input type="hidden" name="form-name" value="membership-request" />
          <p className="hidden">
            <label>Don’t fill this out: <input name="bot-field" /></label>
          </p>

          <div>
            <label className="block text-sm text-purple-200/60 mb-1.5">Full name</label>
            <input required name="name" type="text"
              className="w-full bg-white/5 border border-purple-500/20 rounded-xl px-3.5 py-2.5 text-white placeholder:text-purple-200/30 focus:outline-none focus:ring-2 focus:ring-pink-400/40" />
          </div>

          <div>
            <label className="block text-sm text-purple-200/60 mb-1.5">Professional email</label>
            <input required name="email" type="email"
              className="w-full bg-white/5 border border-purple-500/20 rounded-xl px-3.5 py-2.5 text-white placeholder:text-purple-200/30 focus:outline-none focus:ring-2 focus:ring-pink-400/40" />
          </div>

          <div>
            <label className="block text-sm text-purple-200/60 mb-1.5">City / Region</label>
            <input name="city" type="text" placeholder="Cape Town, Johannesburg, Remote..."
              className="w-full bg-white/5 border border-purple-500/20 rounded-xl px-3.5 py-2.5 text-white placeholder:text-purple-200/30 focus:outline-none focus:ring-2 focus:ring-pink-400/40" />
          </div>

          <div>
            <label className="block text-sm text-purple-200/60 mb-1.5">Current focus in tech</label>
            <select name="focus" className="w-full bg-white/5 border border-purple-500/20 rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-pink-400/40">
              <option value="">Select...</option>
              <option value="cloud">Cloud / Infrastructure</option>
              <option value="ai">AI / Machine Learning</option>
              <option value="media">Media / Content / Creative Tech</option>
              <option value="emerging">Emerging Technology</option>
              <option value="pivoting">Pivoting into tech</option>
              <option value="leadership">Tech leadership / Building teams</option>
            </select>
          </div>

          <div>
            <label className="block text-sm text-purple-200/60 mb-1.5">Why do you want to join? (optional)</label>
            <textarea name="why" rows={3} placeholder="What are you building or learning right now?"
              className="w-full bg-white/5 border border-purple-500/20 rounded-xl px-3.5 py-2.5 text-white placeholder:text-purple-200/30 focus:outline-none focus:ring-2 focus:ring-pink-400/40 resize-none" />
          </div>

          <button type="submit" className="w-full btn-brand font-semibold py-3 rounded-full transition shadow-lg shadow-pink-900/25">
            Submit membership request
          </button>

          <p className="text-xs text-purple-200/35 text-center leading-relaxed">
            By submitting you agree that attendance commitments matter. We expect members to update RSVPs if plans change.
          </p>
        </form>
      </main>
    </div>
  );
}
