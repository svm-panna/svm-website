import type { Metadata } from 'next';
import '../styles/globals.css';
import { LanguageProvider } from '@/context/LanguageContext';

export const metadata: Metadata = {
  title: {
    default: 'Swami Vivekanand Mahavidyalaya — Panna, Madhya Pradesh',
    template: '%s | Swami Vivekanand Mahavidyalaya',
  },
  description:
    'A premier NCTE-approved teacher education institution in Janakpur, Panna, Madhya Pradesh. Offering B.Ed, M.Ed, BA B.Ed and B.Sc B.Ed programmes affiliated to Maharaja Chhatrasal Bundelkhand University.',
  keywords: [
    'Swami Vivekanand Mahavidyalaya',
    'B.Ed college Panna',
    'teacher education Madhya Pradesh',
    'NCTE approved college',
    'M.Ed Panna',
    'BA BEd integrated',
  ],
  metadataBase: new URL('https://swamivivekanandmahavidyalaya.edu.in'),
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://swamivivekanandmahavidyalaya.edu.in',
    siteName: 'Swami Vivekanand Mahavidyalaya',
    title: 'Swami Vivekanand Mahavidyalaya — Panna, MP',
    description: 'Shaping the teachers of tomorrow. NCTE approved, Est. 2014.',
  },
  icons: {
    icon: '/images/favicon.png',
    shortcut: '/images/favicon.png',
    apple: '/images/favicon.png',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
