import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Admissions',
  description:
    'Apply for admissions at Swami Vivekanand Mahavidyalaya, Panna. Eligibility criteria, important dates, and online application for B.Ed., M.Ed., and integrated programmes.',
  alternates: {
    canonical: 'https://swamivivekanandmahavidyalaya.edu.in/admissions',
  },
  openGraph: {
    title: 'Admissions | Swami Vivekanand Mahavidyalaya',
    description: 'Apply online for B.Ed., M.Ed., BA B.Ed., and more at SVM Panna.',
    url: 'https://swamivivekanandmahavidyalaya.edu.in/admissions',
    images: [{ url: '/images/banner-01.jpeg', width: 1200, height: 630 }],
  },
};

export default function AdmissionsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
