import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: { absolute: 'SVM Staff App — Privacy Policy | Swami Vivekanand Mahavidyalaya' },
  description:
    'Privacy policy for SVM Staff, the staff attendance app of the Swami Vivekanand institutions, Panna — what it collects, why, and your choices.',
  alternates: {
    canonical: 'https://swamivivekanandmahavidyalaya.edu.in/svm-staff/privacy',
  },
  robots: { index: true, follow: false },
};

export default function SvmStaffPrivacyLayout({ children }: { children: React.ReactNode }) {
  return children;
}
