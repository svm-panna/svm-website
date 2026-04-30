import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Privacy policy for the Swami Vivekanand Mahavidyalaya website — how we collect, use, and protect your personal information.',
  alternates: {
    canonical: 'https://swamivivekanandmahavidyalaya.edu.in/privacy',
  },
  robots: { index: false, follow: false },
};

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return children;
}
