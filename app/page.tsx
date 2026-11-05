import Link from 'next/link';
import Image from 'next/image';

export default function HomePage() {
  return (
    <div className="min-h-screen text-slate-100">
      {/* Nav */}
      <header className="border-b border-pink-900/20 sticky top-0 z-50 bg-[#0c0614]/95 backdrop-blur-md">
        <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <img src="/logo.svg" alt="Sip and Cloud Tech" className="h-10 w-auto" />
            <span className="hidden sm:block font-semibold tracking-tight text-white">
              Sip & Cloud <span className="text-pink-300">Events</span>
            </span>
          </Link>
          <nav className="flex items-center gap-5 text-sm">
            <Link href="/events" className="text-purple-200/70 hover:text-white transition">Events</Link>
            <Link href="/opportunities" className="text-purple-200/70 hover:text-white transition">Opportunities</Link>
            <Link href="/learn" className="text-purple-200/70 hover:text-white transition">Learn</Link>
            <Link href="/host" className="text-purple-200/70 hover:text-white transition">Host</Link>
            <Link href="/preferences" className="btn-brand px-4 py-1.5 rounded-full text-sm font-medium shadow-lg shadow-pink-900/30">
              Join
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="relative max-w-5xl mx-auto px-4 pt-16 pb-20 text-center">
          <div className="flex justify-center mb-8">
            <img src="/logo.svg" alt="Sip and Cloud Tech" className="h-28 w-auto opacity-95" />
          </div>
          <p className="text-pink-300 text-sm font-semibold tracking-[0.2em] uppercase mb-4">
            Your Network is Your Networth
          </p>
          <h1 className="text-3xl sm:text-5xl font-bold text-white leading-tight tracking-tight max-w-3xl mx-auto">
            Curated events & opportunities for{' '}
            <span className="brand-gradient">serious professionals</span>
          </h1>
          <p className="mt-6 text-base sm:text-lg text-purple-100/55 max-w-2xl mx-auto leading-relaxed">
            No noise. No random crowds. Only verified events, selective community members, and continuous learning that opens real doors. Built for people who treat their time and network as capital.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/preferences"
              className="inline-flex items-center justify-center btn-brand font-semibold px-8 py-3.5 rounded-full transition shadow-lg shadow-pink-900/30"
            >
              Request Membership
            </Link>
            <Link
              href="/events"
              className="inline-flex items-center justify-center bg-white/5 hover:bg-white/10 text-white font-medium px-8 py-3.5 rounded-full transition border border-purple-400/20"
            >
              View Curated Events
            </Link>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <div className="border-y border-pink-900/15 bg-pink-950/10">
        <div className="max-w-5xl mx-auto px-4 py-3.5 text-center text-xs sm:text-sm text-purple-200/45 tracking-wide">
          SELECTIVE · VERIFIED · RESPONSIBLE RSVP · CONTINUOUS LEARNING · CAPE TOWN & BEYOND
        </div>
      </div>

      {/* Principles */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <h2 className="text-xl font-semibold text-white text-center mb-2">Built for professionals who are focused</h2>
        <p className="text-center text-purple-200/45 text-sm mb-10 max-w-xl mx-auto">
          We do not take everyone. We curate people who take responsibility for their attendance and their growth.
        </p>
        <div className="grid gap-5 sm:grid-cols-3">
          {[
            { title: 'Selective membership', body: 'Application-based. We prioritise professionals who are continuously learning and respect other people\'s time.' },
            { title: 'Verified only', body: 'Every event and opportunity is reviewed. No spam listings. No unverified hosts. Your network stays high-signal.' },
            { title: 'Responsible RSVP', body: 'Confirm, update or cancel cleanly. QR check-in. Hosts see real commitment. No-shows are visible.' },
          ].map((item) => (
            <div key={item.title} className="card-glass rounded-2xl p-6">
              <h3 className="font-semibold text-pink-200 mb-2">{item.title}</h3>
              <p className="text-sm text-purple-100/50 leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Continuous learning */}
      <section className="max-w-5xl mx-auto px-4 py-12">
        <div className="card-glass rounded-2xl p-8 sm:p-10">
          <p className="text-pink-300/80 text-xs font-semibold tracking-widest uppercase mb-2">Continuous learning</p>
          <h2 className="text-2xl font-bold text-white mb-3">Skills that open employment</h2>
          <p className="text-purple-100/50 text-sm max-w-2xl mb-6 leading-relaxed">
            Members receive a personalised stream of free, high-signal learning paths — cloud, AI, media and emerging tech — chosen because they currently open jobs. Not noise. Not trends for trends\' sake.
          </p>
          <Link href="/learn" className="text-sm font-medium text-pink-300 hover:text-pink-200">
            Explore learning paths →
          </Link>
        </div>
      </section>

      {/* Two doors */}
      <section className="max-w-5xl mx-auto px-4 py-12">
        <div className="grid sm:grid-cols-2 gap-5">
          <div className="rounded-2xl border border-pink-400/20 bg-gradient-to-br from-pink-500/10 to-transparent p-8">
            <h3 className="text-lg font-semibold text-pink-200 mb-2">Community Members</h3>
            <p className="text-sm text-purple-100/55 mb-5 leading-relaxed">
              Verified opportunities, private events, connection matching, personalised skill alerts. For professionals who already know why they are in tech.
            </p>
            <Link href="/preferences" className="text-sm font-medium text-pink-300 hover:text-pink-200">Request membership →</Link>
          </div>
          <div className="card-glass rounded-2xl p-8">
            <h3 className="text-lg font-semibold text-purple-200 mb-2">Event Hosts & Speakers</h3>
            <p className="text-sm text-purple-100/55 mb-5 leading-relaxed">
              Create formal events, manage RSVPs, scan QR tickets branded with Sip & Cloud, view attendance, and receive payouts (platform fee 10%).
            </p>
            <Link href="/host" className="text-sm font-medium text-purple-300 hover:text-purple-200">Host dashboard →</Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-5xl mx-auto px-4 py-16 text-center">
        <img src="/logo.svg" alt="" className="h-16 w-auto mx-auto mb-6 opacity-80" />
        <p className="text-pink-300 text-sm font-semibold tracking-[0.15em] uppercase mb-3">Your Network is Your Networth</p>
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Protect your time. Grow your network.</h2>
        <p className="text-purple-100/50 mb-8 max-w-md mx-auto text-sm">
          Membership is selective. We built this for mature professionals who continuously learn and show up when they say they will.
        </p>
        <Link
          href="/preferences"
          className="inline-flex items-center justify-center btn-brand font-semibold px-8 py-3.5 rounded-full transition shadow-lg shadow-pink-900/30"
        >
          Request Membership
        </Link>
      </section>

      {/* Footer */}
      <footer className="border-t border-pink-900/20 py-10">
        <div className="max-w-5xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-purple-200/40">
          <div className="flex items-center gap-3">
            <img src="/logo.svg" alt="" className="h-8 w-auto opacity-70" />
            <span>Happy Cloud, Happy Explorers</span>
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
