import Link from 'next/link';

export default function EventsPage() {
  return (
    <div className="min-h-screen text-slate-100">
      <header className="border-b border-purple-900/40 sticky top-0 z-50 bg-[#0f0618]/90 backdrop-blur">
        <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
          <Link href="/" className="font-semibold text-white flex items-center gap-2">
            <span className="w-7 h-7 rounded-full bg-gradient-to-br from-pink-300 to-purple-400 flex items-center justify-center text-xs font-bold text-[#1e0a2e]">SC</span>
            Sip & Cloud <span className="text-pink-300">Events</span>
          </Link>
          <Link href="/preferences" className="btn-brand px-3.5 py-1.5 rounded-full text-sm font-medium">Join</Link>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-12">
        <p className="text-pink-300/80 text-sm font-medium tracking-wide mb-1">YOUR NETWORK IS YOUR NET WORTH</p>
        <h1 className="text-3xl font-bold text-white mb-2">Events</h1>
        <p className="text-purple-100/50 mb-10">Upcoming cloud, AI and tech gatherings. Members get the full private calendar.</p>

        <div className="rounded-2xl border border-dashed border-purple-500/25 bg-purple-950/20 p-12 text-center">
          <p className="text-purple-100/60 mb-2">No events published yet.</p>
          <p className="text-sm text-purple-200/40 mb-6">When hosts create events they will appear here. Members see exclusive sessions first.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/preferences" className="btn-brand px-5 py-2.5 rounded-full text-sm font-medium">Join to get alerts</Link>
            <Link href="/host" className="bg-white/5 border border-purple-400/20 px-5 py-2.5 rounded-full text-sm text-purple-100 hover:bg-white/10 transition">I'm a host →</Link>
          </div>
        </div>
      </main>
    </div>
  );
}
