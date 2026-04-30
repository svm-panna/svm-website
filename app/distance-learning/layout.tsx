import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Distance Learning',
  description:
    'Distance learning and correspondence programmes at Swami Vivekanand Mahavidyalaya, Panna, Madhya Pradesh. Flexible education for working professionals.',
  alternates: {
    canonical: 'https://swamivivekanandmahavidyalaya.edu.in/distance-learning',
  },
  openGraph: {
    title: 'Distance Learning | Swami Vivekanand Mahavidyalaya',
    description: 'Flexible distance education programmes at SVM Panna.',
    url: 'https://swamivivekanandmahavidyalaya.edu.in/distance-learning',
    images: [{ url: '/images/banner-01.jpeg', width: 1200, height: 630 }],
  },
};

export default function DistanceLearningLayout({ children }: { children: React.ReactNode }) {
  return children;
}
