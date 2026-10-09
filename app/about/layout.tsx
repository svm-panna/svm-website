import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about Swami Vivekanand Mahavidyalaya — our history, leadership, faculty, and NCTE-approved programmes in Panna, Madhya Pradesh since 2014.',
  alternates: {
    canonical: 'https://swamivivekanandmahavidyalaya.edu.in/about',
  },
  openGraph: {
    title: 'About Us | Swami Vivekanand Mahavidyalaya',
    description: 'History, leadership, and faculty of SVM Panna — NCTE approved since 2014.',
    url: 'https://swamivivekanandmahavidyalaya.edu.in/about',
    images: [{ url: '/images/banner-01.jpeg', width: 1200, height: 630 }],
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
