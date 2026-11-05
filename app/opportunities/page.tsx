import Link from 'next/link';

export default function OpportunitiesPage() {
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
        <p className="text-pink-300/80 text-sm font-medium tracking-wide mb-1">VERIFIED ONLY</p>
        <h1 className="text-3xl font-bold text-white mb-2">Opportunities</h1>
        <p className="text-purple-100/50 mb-10 max-w-xl">
          Only opportunities that have been verified by the Sip & Cloud team appear here. Your network is your net worth — we protect it.
        </p>

        <div className="rounded-2xl border border-dashed border-purple-500/25 bg-purple-950/20 p-12 text-center">
          <p className="text-purple-100/60 mb-2">No verified opportunities published yet.</p>
          <p className="text-sm text-purple-200/40 mb-6">When the scraper and moderation flow are connected, only approved roles and gigs will show here.</p>
          <Link href="/preferences" className="text-pink-300 hover:text-pink-200 text-sm font-medium">Set preferences so we can match you →</Link>
        </div>

        <div className="mt-12 grid sm:grid-cols-3 gap-4 text-sm">
          <div className="p-4 rounded-xl bg-white/[0.03] border border-purple-500/10">
            <p className="text-pink-300/80 font-medium mb-1">Verified</p>
            <p className="text-purple-100/50">Every listing is checked before it reaches members.</p>
          </div>
          <div className="p-4 rounded-xl bg-white/[0.03] border border-purple-500/10">
            <p className="text-pink-300/80 font-medium mb-1">Matched</p>
            <p className="text-purple-100/50">Shown only if it fits your city, skills and level.</p>
          </div>
          <div className="p-4 rounded-xl bg-white/[0.03] border border-purple-500/10">
            <p className="text-pink-300/80 font-medium mb-1">Reported</p>
            <p className="text-purple-100/50">When someone is hired we generate a success report.</p>
          </div>
        </div>
      </main>
    </div>
  );
}
