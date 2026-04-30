import Link from 'next/link';
import Navbar from '@/components/site/Navbar';
import Footer from '@/components/site/Footer';

export const metadata = {
  title: { absolute: 'Sitemap | Swami Vivekanand Mahavidyalaya' },
};

const siteMap = [
  {
    section: 'Main Pages',
    links: [
      { href: '/', label: 'Home' },
      { href: '/about', label: 'About Us' },
      { href: '/courses', label: 'Academic Programs' },
      { href: '/admissions', label: 'Admissions 2026–27' },
      { href: '/library', label: 'Library' },
      { href: '/contact', label: 'Contact Us' },
    ],
  },
  {
    section: 'Academic Programs',
    links: [
      { href: '/courses#bed', label: 'B.Ed. — Bachelor of Education (2 Years)' },
      { href: '/courses#deled', label: 'D.El.Ed. — Diploma in Elementary Education (2 Years)' },
      { href: '/courses#babed', label: 'B.A.B.Ed. — Integrated Degree (4 Years)' },
      { href: '/courses#dspecial', label: 'D.Ed. Special — Special Education Diploma (2 Years)' },
      { href: '/courses#iti', label: 'ITI — Electrician & Fitter (1–2 Years)' },
    ],
  },
  {
    section: 'Admissions',
    links: [
      { href: '/admissions', label: 'Admissions Overview' },
      { href: '/admissions#apply', label: 'Apply Online / Enquiry Form' },
    ],
  },
  {
    section: 'About the College',
    links: [
      { href: '/about', label: 'About SVN Panna' },
      { href: '/about#gallery', label: 'Campus Gallery' },
      { href: '/library', label: 'Library Resources' },
    ],
  },
  {
    section: 'Legal',
    links: [
      { href: '/privacy', label: 'Privacy Policy' },
      { href: '/sitemap', label: 'Sitemap (this page)' },
    ],
  },
];

export default function SitemapPage() {
  return (
    <>
      <Navbar />
      <main>
        <section
          className="page-hero-pattern py-16"
          style={{ background: 'linear-gradient(135deg,#1A2B4A,#0F1C34)' }}
        >
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-xs mb-4" style={{ color: 'rgba(186,210,255,0.5)' }}>
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span className="mx-2">/</span>
              <span style={{ color: 'rgba(255,255,255,0.8)' }}>Sitemap</span>
            </div>
            <h1
              className="font-bold text-white mb-3"
              style={{ fontFamily: '"DM Serif Display", serif', fontSize: 'clamp(2rem,4vw,3rem)' }}
            >
              Sitemap
            </h1>
            <p className="max-w-xl text-sm leading-relaxed" style={{ color: 'rgba(186,210,255,0.75)' }}>
              A complete list of all pages on the Swami Vivekanand Mahavidyalaya website.
            </p>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {siteMap.map((group) => (
                <div key={group.section}>
                  <h2
                    className="font-bold text-base mb-4 pb-2 border-b-2"
                    style={{ color: '#1A2B4A', borderColor: '#E87722' }}
                  >
                    {group.section}
                  </h2>
                  <ul className="space-y-2">
                    {group.links.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="text-sm flex items-center gap-2 transition-colors hover:text-orange-600"
                          style={{ color: '#374151' }}
                        >
                          <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#E87722' }} />
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
