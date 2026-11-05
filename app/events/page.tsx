import Link from 'next/link';

export default function EventsPage() {
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
        <p className="text-pink-300 text-xs font-semibold tracking-[0.15em] uppercase mb-2">Verified & formal</p>
        <h1 className="text-3xl font-bold text-white mb-3">Curated events</h1>
        <p className="text-purple-100/50 max-w-xl mb-10 text-sm leading-relaxed">
          Only events that have been reviewed appear here. Members see the full private calendar. Guests see public listings. RSVP is a commitment — update it if you cannot attend.
        </p>

        <div className="rounded-2xl border border-dashed border-purple-500/20 bg-purple-950/15 p-12 text-center">
          <img src="/logo.svg" alt="" className="h-12 w-auto mx-auto mb-5 opacity-70" />
          <p className="text-purple-100/55 mb-2">No public events listed yet.</p>
          <p className="text-sm text-purple-200/40 mb-6">When verified hosts publish, events will appear here with clear capacity and RSVP status.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/preferences" className="btn-brand px-5 py-2.5 rounded-full text-sm font-medium">Request membership</Link>
            <Link href="/host" className="bg-white/5 border border-purple-400/20 px-5 py-2.5 rounded-full text-sm text-purple-100 hover:bg-white/10 transition">I want to host →</Link>
          </div>
        </div>
      </main>
    </div>
  );
}
