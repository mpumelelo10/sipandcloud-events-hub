import Link from 'next/link';

export default function LearnPage() {
  const paths = [
    { title: 'AWS Cloud Practitioner path', level: 'Foundation', note: 'Still one of the fastest ways into cloud roles in South Africa and remote.' },
    { title: 'Practical AI for non-researchers', level: 'Applied', note: 'Prompting, automation and tools that actually get used in business.' },
    { title: 'Tech media & documentation', level: 'Growth', note: 'Writing, podcasting and storytelling that builds professional visibility.' },
    { title: 'Emerging tech orientation', level: 'Scan', note: 'What is real vs hype — so you invest time only where jobs are opening.' },
  ];

  return (
    <div className="min-h-screen text-slate-100">
      <header className="border-b border-pink-900/20 sticky top-0 z-50 bg-[#0c0614]/95 backdrop-blur-md">
        <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <img src="/logo.svg" alt="" className="h-8 w-auto" />
            <span className="font-semibold text-white text-sm">Continuous Learning</span>
          </Link>
          <Link href="/preferences" className="btn-brand px-3.5 py-1.5 rounded-full text-sm font-medium">Join</Link>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-12">
        <p className="text-pink-300 text-xs font-semibold tracking-[0.15em] uppercase mb-2">Personalised for members</p>
        <h1 className="text-3xl font-bold text-white mb-3">Skills that open employment</h1>
        <p className="text-purple-100/50 max-w-2xl mb-10 text-sm leading-relaxed">
          We do not push random courses. We surface free and low-cost learning that is currently tied to real openings — cloud, AI, media and emerging tech. Members get a tighter, personalised stream.
        </p>

        <div className="grid gap-4 sm:grid-cols-2">
          {paths.map((p) => (
            <div key={p.title} className="card-glass rounded-2xl p-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-white">{p.title}</h3>
                <span className="text-xs text-pink-300/80 bg-pink-500/10 px-2 py-0.5 rounded-full">{p.level}</span>
              </div>
              <p className="text-sm text-purple-100/50 leading-relaxed">{p.note}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 card-glass rounded-2xl p-8 text-center">
          <p className="text-purple-100/55 text-sm mb-4">Full personalised learning feed is available to approved members.</p>
          <Link href="/preferences" className="btn-brand inline-flex px-6 py-2.5 rounded-full text-sm font-medium">Request membership</Link>
        </div>
      </main>
    </div>
  );
}
