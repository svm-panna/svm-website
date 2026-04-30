import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy policy for Swami Vivekanand Mahavidyalaya website.',
  alternates: {
    canonical: 'https://swamivivekanandmahavidyalaya.edu.in/privacy',
  },
  robots: { index: false, follow: false },
};

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return children;
}
