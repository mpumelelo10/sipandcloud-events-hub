import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Nav */}
      <header className="border-b border-slate-800/80 sticky top-0 z-50 bg-slate-950/90 backdrop-blur">
        <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
          <Link href="/" className="font-semibold text-white tracking-tight">
            Sip & Cloud <span className="text-indigo-400">Events</span>
          </Link>
          <nav className="flex items-center gap-6 text-sm">
            <Link href="/events" className="text-slate-400 hover:text-white transition">
              Events
            </Link>
            <Link href="/preferences" className="bg-indigo-600 hover:bg-indigo-500 text-white px-3.5 py-1.5 rounded-lg text-sm font-medium transition">
              Join
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-950/40 via-slate-950 to-slate-950 pointer-events-none" />
        <div className="relative max-w-5xl mx-auto px-4 pt-20 pb-24 text-center">
          <p className="text-indigo-400 text-sm font-medium tracking-wide mb-4">
            AUTOMATED • LOCATION-AWARE • NO NOISE
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight tracking-tight max-w-3xl mx-auto">
            Your automated home for cloud, AI & tech opportunities
          </h1>
          <p className="mt-6 text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Get the right events and opportunities near you — designed for professionals who don't have time to browse.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/preferences"
              className="inline-flex items-center justify-center bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-7 py-3.5 rounded-xl transition shadow-lg shadow-indigo-900/30"
            >
              Join / Update Preferences
            </Link>
            <Link
              href="/events"
              className="inline-flex items-center justify-center bg-slate-800 hover:bg-slate-700 text-white font-medium px-7 py-3.5 rounded-xl transition border border-slate-700"
            >
              View Events Near Me
            </Link>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <div className="border-y border-slate-800/80 bg-slate-900/40">
        <div className="max-w-5xl mx-auto px-4 py-4 text-center text-sm text-slate-500">
          Built for professionals who don't have time to browse · Powered by Sip & Cloud Tech · Cape Town & beyond
        </div>
      </div>

      {/* How it works */}
      <section className="max-w-5xl mx-auto px-4 py-20">
        <h2 className="text-2xl font-bold text-white text-center mb-12">How it works</h2>
        <div className="grid gap-8 sm:grid-cols-3">
          <div className="text-center">
            <div className="text-indigo-500 font-mono text-sm mb-3">01</div>
            <h3 className="font-semibold text-white mb-2">Tell us once</h3>
            <p className="text-sm text-slate-400 leading-relaxed">Share your city and interests in 30 seconds. We remember.</p>
          </div>
          <div className="text-center">
            <div className="text-indigo-500 font-mono text-sm mb-3">02</div>
            <h3 className="font-semibold text-white mb-2">Receive smart alerts</h3>
            <p className="text-sm text-slate-400 leading-relaxed">Only relevant events and opportunities. No noise.</p>
          </div>
          <div className="text-center">
            <div className="text-indigo-500 font-mono text-sm mb-3">03</div>
            <h3 className="font-semibold text-white mb-2">RSVP & go</h3>
            <p className="text-sm text-slate-400 leading-relaxed">One click → personal QR ticket. Edit or cancel anytime.</p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-5xl mx-auto px-4 py-24 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Start your automated journey</h2>
        <p className="text-slate-400 mb-8 max-w-lg mx-auto">
          Join free. Takes less than a minute. Built for people who value their time.
        </p>
        <Link
          href="/preferences"
          className="inline-flex items-center justify-center bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-8 py-3.5 rounded-xl transition shadow-lg shadow-indigo-900/30"
        >
          Join free
        </Link>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800/80 py-10">
        <div className="max-w-5xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <div>
            <span className="text-white font-medium">Sip & Cloud Tech</span>
            <span className="mx-2">·</span>
            Happy Cloud, Happy Explorers
          </div>
          <div className="flex gap-6">
            <a href="https://sipandcloud.co.za" className="hover:text-white transition">Company</a>
            <a href="https://za.linkedin.com/company/sipandcloudtechusergroupafricaandbeyoud" className="hover:text-white transition">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
