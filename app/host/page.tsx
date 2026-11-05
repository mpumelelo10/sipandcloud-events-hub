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
          <Link href="/host/create" className="btn-brand px-3.5 py-1.5 rounded-full text-sm font-medium">Create event</Link>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-12">
        <p className="text-pink-300 text-xs font-semibold tracking-[0.15em] uppercase mb-2">For hosts & speakers</p>
        <h1 className="text-3xl font-bold text-white mb-2">Run formal, high-signal events</h1>
        <p className="text-purple-100/50 max-w-xl mb-10 text-sm leading-relaxed">
          Create events anywhere in the world. QR tickets carry the Sip & Cloud logo and your host logo. Platform fee 10% on paid tickets. Distance is not a barrier.
        </p>

        <div className="grid sm:grid-cols-3 gap-4 mb-10">
          {[
            { label: 'Create event', href: '/host/create', cta: 'Start →' },
            { label: 'View public events', href: '/events', cta: 'Open →' },
            { label: 'Membership', href: '/membership', cta: 'Snapscan →' },
          ].map((s) => (
            <Link key={s.label} href={s.href} className="card-glass rounded-2xl p-5 hover:border-pink-400/30 transition">
              <p className="text-white font-medium mb-1">{s.label}</p>
              <p className="text-sm text-pink-300">{s.cta}</p>
            </Link>
          ))}
        </div>

        <div className="card-glass rounded-2xl p-8">
          <h2 className="font-semibold text-white mb-3">Ticket & check-in flow</h2>
          <ul className="text-sm text-purple-100/55 space-y-2 leading-relaxed">
            <li>1. Host publishes event (free or paid in ZAR)</li>
            <li>2. Attendee RSVPs → unique ticket + QR (qr.cloudboost.co.za)</li>
            <li>3. Ticket page shows Sip & Cloud logo + host logo</li>
            <li>4. Attendee can edit name or cancel RSVP</li>
            <li>5. At the door: open ticket URL or scan QR → check-in / check-out</li>
          </ul>
        </div>
      </main>
    </div>
  );
}
