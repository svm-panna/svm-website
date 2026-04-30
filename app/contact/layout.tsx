import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with Swami Vivekanand Mahavidyalaya, Panna. Address, phone, email, and enquiry form for admissions, courses, and general information.',
  alternates: {
    canonical: 'https://swamivivekanandmahavidyalaya.edu.in/contact',
  },
  openGraph: {
    title: 'Contact Us | Swami Vivekanand Mahavidyalaya',
    description: 'Reach SVM Panna — address, phone, email, and enquiry form.',
    url: 'https://swamivivekanandmahavidyalaya.edu.in/contact',
    images: [{ url: '/images/banner-01.jpeg', width: 1200, height: 630 }],
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
