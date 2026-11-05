import Link from 'next/link';

export default function OpportunitiesPage() {
  return (
    <div className="min-h-screen text-slate-100">
      <header className="border-b border-pink-900/20 sticky top-0 z-50 bg-[#0c0614]/95 backdrop-blur-md">
        <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <img src="/logo.svg" alt="" className="h-8 w-auto" />
            <span className="font-semibold text-white text-sm">Opportunities</span>
          </Link>
          <Link href="/preferences" className="btn-brand px-3.5 py-1.5 rounded-full text-sm font-medium">Join</Link>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-12">
        <p className="text-pink-300 text-xs font-semibold tracking-[0.15em] uppercase mb-2">Verified only</p>
        <h1 className="text-3xl font-bold text-white mb-3">Opportunities</h1>
        <p className="text-purple-100/50 max-w-xl mb-10 text-sm leading-relaxed">
          We do not list everything. Opportunities are reviewed before they reach members. When someone is hired through the platform we generate a success report so the community can see real outcomes.
        </p>

        <div className="rounded-2xl border border-dashed border-purple-500/20 bg-purple-950/15 p-12 text-center mb-10">
          <p className="text-purple-100/55 mb-2">No verified opportunities published yet.</p>
          <p className="text-sm text-purple-200/40 mb-6">Approved members will see matched roles and gigs here.</p>
          <Link href="/preferences" className="text-pink-300 hover:text-pink-200 text-sm font-medium">Request membership →</Link>
        </div>

        <div className="grid sm:grid-cols-3 gap-4 text-sm">
          <div className="card-glass rounded-xl p-5">
            <p className="text-pink-300/90 font-medium mb-1">Verified</p>
            <p className="text-purple-100/45">Checked before members see it.</p>
          </div>
          <div className="card-glass rounded-xl p-5">
            <p className="text-pink-300/90 font-medium mb-1">Matched</p>
            <p className="text-purple-100/45">Shown against your city, skills and level.</p>
          </div>
          <div className="card-glass rounded-xl p-5">
            <p className="text-pink-300/90 font-medium mb-1">Reported</p>
            <p className="text-purple-100/45">Hires generate a success report for the community.</p>
          </div>
        </div>
      </main>
    </div>
  );
}
