// app/layout.tsx
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Sip & Cloud Events | Automated tech opportunities',
  description:
    'Your automated home for cloud, AI & tech events and opportunities in Africa. Built for busy professionals.',
  openGraph: {
    title: 'Sip & Cloud Events',
    description: 'Automated home for cloud, AI & tech opportunities',
    url: 'https://events.sipandcloud.co.za',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}