import Link from 'next/link';

export default function HostDashboard() {
  return (
    <div className="min-h-screen text-slate-100">
      <header className="border-b border-purple-900/40 sticky top-0 z-50 bg-[#0f0618]/90 backdrop-blur">
        <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
          <Link href="/" className="font-semibold text-white flex items-center gap-2">
            <span className="w-7 h-7 rounded-full bg-gradient-to-br from-pink-300 to-purple-400 flex items-center justify-center text-xs font-bold text-[#1e0a2e]">SC</span>
            Host Dashboard
          </Link>
          <Link href="/" className="text-sm text-purple-200/60 hover:text-white">← Back to site</Link>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-12">
        <div className="mb-10">
          <p className="text-pink-300/80 text-sm font-medium tracking-wide mb-1">FOR EVENT HOSTS & SPEAKERS</p>
          <h1 className="text-3xl font-bold text-white">Your event control centre</h1>
          <p className="text-purple-100/50 mt-2">Create events, manage RSVPs, scan tickets and track payouts.</p>
        </div>

        <div className="grid sm:grid-cols-3 gap-4 mb-12">
          {[
            { label: 'Total events', value: '—' },
            { label: 'Confirmed RSVPs', value: '—' },
            { label: 'Platform fee earned', value: 'R 0' },
          ].map((stat) => (
            <div key={stat.label} className="rounded-2xl border border-purple-500/15 bg-white/[0.03] p-5">
              <p className="text-xs text-purple-200/50 mb-1">{stat.label}</p>
              <p className="text-2xl font-semibold text-white">{stat.value}</p>
            </div>
          ))}
        </div>

        <div className="rounded-2xl border border-dashed border-purple-500/25 bg-purple-950/20 p-10 text-center">
          <h2 className="text-lg font-semibold text-white mb-2">Connect Supabase to activate</h2>
          <p className="text-sm text-purple-100/50 max-w-md mx-auto mb-6">
            Once the database is connected, you will be able to create paid or free events, generate QR tickets, check attendees in, and receive host payouts (Sip & Cloud takes 10%).
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/preferences" className="btn-brand px-5 py-2.5 rounded-full text-sm font-medium">Join as attendee first</Link>
            <a href="https://supabase.com" target="_blank" rel="noreferrer" className="bg-white/5 border border-purple-400/20 px-5 py-2.5 rounded-full text-sm text-purple-100 hover:bg-white/10 transition">Open Supabase →</a>
          </div>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 gap-6">
          <div className="rounded-xl border border-purple-500/10 p-6">
            <h3 className="font-semibold text-white mb-2">What hosts get</h3>
            <ul className="text-sm text-purple-100/50 space-y-1.5">
              <li>• Create free or paid events (ZAR)</li>
              <li>• Automatic QR ticket generation</li>
              <li>• Check-in / check-out scanning</li>
              <li>• Attendee list + capacity control</li>
              <li>• 90% of ticket revenue (10% platform fee)</li>
            </ul>
          </div>
          <div className="rounded-xl border border-purple-500/10 p-6">
            <h3 className="font-semibold text-white mb-2">What speakers get</h3>
            <ul className="text-sm text-purple-100/50 space-y-1.5">
              <li>• Profile linked to events</li>
              <li>• Verified speaker badge</li>
              <li>• Reach community members only</li>
              <li>• Opportunity matching after talks</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
