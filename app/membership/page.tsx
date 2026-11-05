'use client';

import Link from 'next/link';

// Replace SNAPSCAN_LINK with your real Snapscan pay link when ready
const SNAPSCAN_LINK = process.env.NEXT_PUBLIC_SNAPSCAN_LINK || '';

export default function MembershipPage() {
  return (
    <div className="min-h-screen">
      <header className="border-b border-pink-900/20">
        <div className="max-w-xl mx-auto px-4 h-14 flex items-center justify-between">
          <Link href="/" className="text-sm text-purple-200/60">← Home</Link>
          <img src="/logo.svg" alt="" className="h-8 w-auto" />
        </div>
      </header>

      <main className="max-w-xl mx-auto px-4 py-10">
        <p className="text-pink-300 text-xs font-semibold tracking-[0.15em] uppercase mb-2">Your Network is Your Networth</p>
        <h1 className="text-2xl font-bold text-white mb-3">Paying membership</h1>
        <p className="text-sm text-purple-100/55 mb-8 leading-relaxed">
          Paying members support the mission and unlock deeper features: private events, personalised learning, opportunity matching, and community recognition. Global — distance is not a barrier.
        </p>

        <div className="card-glass rounded-2xl p-6 mb-6 space-y-3 text-sm text-purple-100/60">
          <p>• Verified opportunities matched to you</p>
          <p>• Personalised continuous learning paths</p>
          <p>• Priority RSVP on curated events</p>
          <p>• Support fellow members&apos; LinkedIn wins as a circle</p>
          <p>• Host & speaker pathways</p>
        </div>

        {SNAPSCAN_LINK ? (
          <a href={SNAPSCAN_LINK} target="_blank" rel="noreferrer"
            className="block w-full text-center btn-brand font-semibold py-3 rounded-full">
            Pay with Snapscan
          </a>
        ) : (
          <div className="rounded-2xl border border-dashed border-pink-500/30 p-6 text-center">
            <p className="text-sm text-purple-100/55 mb-3">Snapscan link will appear here once added.</p>
            <p className="text-xs text-purple-200/40">Send your Snapscan pay link and we will wire it in.</p>
          </div>
        )}

        <p className="mt-6 text-xs text-center text-purple-200/35">
          After payment, email tickets@sipandcloud.co.za with your reference so we can upgrade your membership.
        </p>
      </main>
    </div>
  );
}
