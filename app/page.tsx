import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen text-slate-100">
      {/* Nav */}
      <header className="border-b border-purple-900/40 sticky top-0 z-50 bg-[#0f0618]/90 backdrop-blur">
        <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
          <Link href="/" className="font-semibold text-white tracking-tight flex items-center gap-2">
            <span className="w-7 h-7 rounded-full bg-gradient-to-br from-pink-300 to-purple-400 flex items-center justify-center text-xs font-bold text-[#1e0a2e]">SC</span>
            Sip & Cloud <span className="text-pink-300">Events</span>
          </Link>
          <nav className="flex items-center gap-5 text-sm">
            <Link href="/events" className="text-purple-200/70 hover:text-white transition">Events</Link>
            <Link href="/opportunities" className="text-purple-200/70 hover:text-white transition">Opportunities</Link>
            <Link href="/host" className="text-purple-200/70 hover:text-white transition">Host</Link>
            <Link href="/preferences" className="btn-brand px-3.5 py-1.5 rounded-full text-sm font-medium transition shadow-lg shadow-purple-900/40">
              Join
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-950/50 via-transparent to-transparent pointer-events-none" />
        <div className="relative max-w-5xl mx-auto px-4 pt-20 pb-24 text-center">
          <p className="text-pink-300/90 text-sm font-medium tracking-widest uppercase mb-4">
            Your network is your net worth
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight tracking-tight max-w-3xl mx-auto">
            Your automated home for{' '}
            <span className="brand-gradient">cloud, AI & tech</span>{' '}
            opportunities
          </h1>
          <p className="mt-6 text-lg text-purple-100/60 max-w-2xl mx-auto leading-relaxed">
            Get the right events and verified opportunities near you — designed for professionals who don't have time to browse.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/preferences"
              className="inline-flex items-center justify-center btn-brand font-semibold px-7 py-3.5 rounded-full transition shadow-lg shadow-purple-900/40"
            >
              Join the Community
            </Link>
            <Link
              href="/events"
              className="inline-flex items-center justify-center bg-white/5 hover:bg-white/10 text-white font-medium px-7 py-3.5 rounded-full transition border border-purple-400/20"
            >
              View Events Near Me
            </Link>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <div className="border-y border-purple-900/30 bg-purple-950/20">
        <div className="max-w-5xl mx-auto px-4 py-4 text-center text-sm text-purple-200/50">
          Built for professionals who don't have time to browse · Powered by Sip & Cloud Tech · Cape Town & beyond
        </div>
      </div>

      {/* How it works */}
      <section className="max-w-5xl mx-auto px-4 py-20">
        <h2 className="text-2xl font-bold text-white text-center mb-3">How it works</h2>
        <p className="text-center text-purple-200/50 mb-12 text-sm">Your network is your net worth — we help you grow it automatically.</p>
        <div className="grid gap-8 sm:grid-cols-3">
          {[
            { step: '01', title: 'Tell us once', body: 'Share your city and interests in 30 seconds. We remember and match you.' },
            { step: '02', title: 'Receive smart alerts', body: 'Only verified events and opportunities that fit your profile. No noise.' },
            { step: '03', title: 'RSVP & connect', body: 'One click → personal QR ticket. Meet the right people. Grow your network.' },
          ].map((item) => (
            <div key={item.step} className="text-center p-6 rounded-2xl bg-white/[0.03] border border-purple-500/10">
              <div className="text-pink-300/80 font-mono text-sm mb-3">{item.step}</div>
              <h3 className="font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-sm text-purple-100/50 leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Member vs Guest */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-pink-400/20 bg-gradient-to-br from-pink-500/10 to-transparent p-8">
            <h3 className="text-lg font-semibold text-pink-200 mb-2">Community Members</h3>
            <p className="text-sm text-purple-100/60 mb-4">Full access to verified opportunities, private events, connection matching and personalised alerts.</p>
            <Link href="/preferences" className="text-sm text-pink-300 hover:text-pink-200 font-medium">Become a member →</Link>
          </div>
          <div className="rounded-2xl border border-purple-500/15 bg-white/[0.02] p-8">
            <h3 className="text-lg font-semibold text-purple-200 mb-2">Event Hosts & Speakers</h3>
            <p className="text-sm text-purple-100/60 mb-4">Create events, manage RSVPs, scan QR tickets, view attendee insights and receive payouts.</p>
            <Link href="/host" className="text-sm text-purple-300 hover:text-purple-200 font-medium">Host dashboard →</Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-5xl mx-auto px-4 py-20 text-center">
        <p className="text-pink-300/80 text-sm font-medium tracking-wide mb-3">YOUR NETWORK IS YOUR NET WORTH</p>
        <h2 className="text-3xl font-bold text-white mb-4">Start growing yours today</h2>
        <p className="text-purple-100/50 mb-8 max-w-lg mx-auto">
          Join free. Takes less than a minute. Built for people who value connection and time.
        </p>
        <Link
          href="/preferences"
          className="inline-flex items-center justify-center btn-brand font-semibold px-8 py-3.5 rounded-full transition shadow-lg shadow-purple-900/40"
        >
          Join free
        </Link>
      </section>

      {/* Footer */}
      <footer className="border-t border-purple-900/30 py-10">
        <div className="max-w-5xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-purple-200/40">
          <div>
            <span className="text-white/80 font-medium">Sip & Cloud Tech</span>
            <span className="mx-2">·</span>
            Happy Cloud, Happy Explorers
          </div>
          <div className="flex gap-6">
            <a href="https://sipandcloud.co.za" className="hover:text-pink-300 transition">Company</a>
            <a href="https://za.linkedin.com/company/sipandcloudtechusergroupafricaandbeyoud" className="hover:text-pink-300 transition">LinkedIn</a>
            <Link href="/host" className="hover:text-pink-300 transition">Host</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
