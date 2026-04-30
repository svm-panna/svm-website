import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Library',
  description:
    'Library resources at Swami Vivekanand Mahavidyalaya — books, publishers, and reference materials for B.Ed., M.Ed., and teacher education programmes in Panna, MP.',
  alternates: {
    canonical: 'https://swamivivekanandmahavidyalaya.edu.in/library',
  },
  openGraph: {
    title: 'Library | Swami Vivekanand Mahavidyalaya',
    description: 'Books and reference materials for teacher education at SVM Panna.',
    url: 'https://swamivivekanandmahavidyalaya.edu.in/library',
    images: [{ url: '/images/banner-01.jpeg', width: 1200, height: 630 }],
  },
};

export default function LibraryLayout({ children }: { children: React.ReactNode }) {
  return children;
}
