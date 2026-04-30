import type { Metadata } from 'next';
import '../styles/globals.css';
import { LanguageProvider } from '@/context/LanguageContext';
import { Analytics } from '@vercel/analytics/next';

const BASE_URL = 'https://swamivivekanandmahavidyalaya.edu.in';

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
  metadataBase: new URL(BASE_URL),
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: BASE_URL,
    siteName: 'Swami Vivekanand Mahavidyalaya',
    title: 'Swami Vivekanand Mahavidyalaya — Panna, MP',
    description: 'Shaping the teachers of tomorrow. NCTE approved, Est. 2014.',
    images: [
      {
        url: '/images/banner-01.jpeg',
        width: 1200,
        height: 630,
        alt: 'Swami Vivekanand Mahavidyalaya — Panna, Madhya Pradesh',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Swami Vivekanand Mahavidyalaya — Panna, MP',
    description: 'Shaping the teachers of tomorrow. NCTE approved, Est. 2014.',
    images: ['/images/banner-01.jpeg'],
  },
  icons: {
    icon: '/images/favicon.png',
    shortcut: '/images/favicon.png',
    apple: '/images/favicon.png',
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  name: 'Swami Vivekanand Mahavidyalaya',
  alternateName: 'SVM Panna',
  url: 'https://swamivivekanandmahavidyalaya.edu.in',
  logo: 'https://swamivivekanandmahavidyalaya.edu.in/images/favicon.png',
  image: 'https://swamivivekanandmahavidyalaya.edu.in/images/banner-01.jpeg',
  description:
    'NCTE-approved teacher education institution in Janakpur, Panna, Madhya Pradesh. Offering B.Ed, M.Ed, BA B.Ed and B.Sc B.Ed programmes.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Indrapuri Colony',
    addressLocality: 'Panna',
    addressRegion: 'Madhya Pradesh',
    postalCode: '488001',
    addressCountry: 'IN',
  },
  telephone: '',
  email: 'info@swamivivekanandmahavidyalaya.edu.in',
  foundingDate: '2014',
  accreditedBy: {
    '@type': 'Organization',
    name: 'National Council for Teacher Education',
    alternateName: 'NCTE',
  },
  memberOf: {
    '@type': 'Organization',
    name: 'Maharaja Chhatrasal Bundelkhand University',
    alternateName: 'MCBU',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Academic Programmes',
    itemListElement: [
      { '@type': 'Course', name: 'Bachelor of Education (B.Ed.)', educationalLevel: 'Undergraduate' },
      { '@type': 'Course', name: 'Master of Education (M.Ed.)', educationalLevel: 'Postgraduate' },
      { '@type': 'Course', name: 'Integrated BA B.Ed.', educationalLevel: 'Undergraduate' },
      { '@type': 'Course', name: 'Integrated B.Sc B.Ed.', educationalLevel: 'Undergraduate' },
    ],
  },
  sameAs: [],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        <LanguageProvider>{children}</LanguageProvider>
        <Analytics />
      </body>
    </html>
  );
}
