import Link from 'next/link';

export default function HostDashboard() {
  return (
    <div className="min-h-screen text-slate-100">
      <header className="border-b border-pink-900/20 sticky top-0 z-50 bg-[#0c0614]/95 backdrop-blur-md">
        <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <img src="/logo.svg" alt="" className="h-8 w-auto" />
            <span className="font-semibold text-white text-sm">Host & Speaker</span>
          </Link>
          <Link href="/" className="text-sm text-purple-200/60 hover:text-white">← Site</Link>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-12">
        <p className="text-pink-300 text-xs font-semibold tracking-[0.15em] uppercase mb-2">For hosts & speakers</p>
        <h1 className="text-3xl font-bold text-white mb-2">Run formal, high-signal events</h1>
        <p className="text-purple-100/50 max-w-xl mb-10 text-sm leading-relaxed">
          Create events, issue branded QR tickets, manage responsible RSVPs, check people in, and receive payouts. Platform fee is 10%. Tickets and emails carry the Sip & Cloud logo so the community stays recognisable.
        </p>

        <div className="grid sm:grid-cols-3 gap-4 mb-10">
          {[
            { label: 'Your events', value: '—' },
            { label: 'Confirmed RSVPs', value: '—' },
            { label: 'Host payout ready', value: 'R 0' },
          ].map((s) => (
            <div key={s.label} className="card-glass rounded-2xl p-5">
              <p className="text-xs text-purple-200/45 mb-1">{s.label}</p>
              <p className="text-2xl font-semibold text-white">{s.value}</p>
            </div>
          ))}
        </div>

        <div className="card-glass rounded-2xl p-8 mb-10">
          <h2 className="font-semibold text-white mb-3">What you get</h2>
          <ul className="text-sm text-purple-100/55 space-y-2 leading-relaxed">
            <li>• Free or paid events (ZAR) with capacity control</li>
            <li>• QR tickets branded with Sip & Cloud logo (and optional host logo)</li>
            <li>• Attendees can edit or cancel RSVP cleanly — no WhatsApp chaos</li>
            <li>• Check-in / check-out scanning on the day</li>
            <li>• 90% of ticket revenue returned to the host</li>
            <li>• Audience that is selective and professional</li>
          </ul>
        </div>

        <div className="rounded-2xl border border-dashed border-pink-500/25 bg-pink-950/10 p-8 text-center">
          <p className="text-purple-100/55 text-sm mb-4">Full host tools activate when the database is connected. Until then, contact us to list your first event.</p>
          <a href="https://sipandcloud.co.za" className="btn-brand inline-flex px-6 py-2.5 rounded-full text-sm font-medium">Contact Sip & Cloud</a>
        </div>
      </main>
    </div>
  );
}
