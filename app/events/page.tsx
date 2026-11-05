import Link from 'next/link';

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="border-b border-slate-800/80 sticky top-0 z-50 bg-slate-950/90 backdrop-blur">
        <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
          <Link href="/" className="font-semibold text-white">Sip & Cloud <span className="text-indigo-400">Events</span></Link>
          <Link href="/preferences" className="text-sm text-indigo-400 hover:text-indigo-300">Preferences</Link>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-white mb-2">Events</h1>
        <p className="text-slate-400 mb-10">Upcoming cloud, AI and tech gatherings across Africa and online.</p>

        <div className="text-center py-20 border border-dashed border-slate-800 rounded-2xl">
          <p className="text-slate-400 mb-2">No events published yet.</p>
          <p className="text-sm text-slate-600">Once Supabase is connected, events will appear here.</p>
          <Link href="/" className="inline-block mt-6 text-indigo-400 hover:text-indigo-300">← Back to home</Link>
        </div>
      </main>
    </div>
  );
}
