import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Courses & Programmes',
  description:
    'Explore B.Ed., M.Ed., BA B.Ed., B.Sc B.Ed., D.El.Ed., ITI, D-Pharma, DMLT and more programmes at Swami Vivekanand Mahavidyalaya, Panna, MP.',
  alternates: {
    canonical: 'https://swamivivekanandmahavidyalaya.edu.in/courses',
  },
  openGraph: {
    title: 'Courses & Programmes | Swami Vivekanand Mahavidyalaya',
    description: 'B.Ed., M.Ed., BA B.Ed., B.Sc B.Ed., ITI, D-Pharma and more at SVM Panna.',
    url: 'https://swamivivekanandmahavidyalaya.edu.in/courses',
    images: [{ url: '/images/banner-01.jpeg', width: 1200, height: 630 }],
  },
};

export default function CoursesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
