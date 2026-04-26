import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{ background: '#1A2B4A' }} className="text-white">
      <div className="max-w-7xl mx-auto px-4 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="mb-4 flex items-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/logo.png"
                alt="Swami Vivekanand Mahavidyalaya"
                className="h-16 w-auto object-contain"
                style={{ filter: 'brightness(0) invert(1)', opacity: 0.9, maxWidth: '220px' }}
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/logo2.png"
                alt=""
                className="h-16 w-auto object-contain ml-2"
                style={{ filter: 'brightness(0) invert(1)', opacity: 0.9, maxWidth: '200px' }}
              />
            </div>
            <p className="text-xs leading-relaxed mb-4" style={{ color: 'rgba(186,210,255,0.65)' }}>
              NGO-run teacher education college in Panna, MP. NCTE recognized. Empowering educators since our founding.
            </p>
            <div className="text-xs leading-relaxed" style={{ color: 'rgba(186,210,255,0.5)' }}>
              Ward No. 1, Beside RSS Ground,
              <br />
              Indrapuri Colony, Panna (MP)
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-sm mb-4">Quick Links</h4>
            <ul className="space-y-2 text-xs" style={{ color: 'rgba(186,210,255,0.65)' }}>
              {[
                { href: '/', label: 'Home' },
                { href: '/about', label: 'About Us' },
                { href: '/courses', label: 'Academic Programs' },
                { href: '/admissions', label: 'Admissions' },
                { href: '/library', label: 'Library' },
                { href: '/contact', label: 'Contact Us' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-semibold text-sm mb-4">Programs</h4>
            <ul className="space-y-2 text-xs" style={{ color: 'rgba(186,210,255,0.65)' }}>
              {[
                { href: '/courses#bed', label: 'B.Ed. (2 Years)' },
                { href: '/courses#deled', label: 'D.El.Ed. (2 Years)' },
                { href: '/courses#babed', label: 'B.A.B.Ed. (4 Years)' },
                { href: '/courses#dspecial', label: 'D.Ed. Special (2 Years)' },
                { href: '/courses#iti', label: 'ITI Electrician & Fitter' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-sm mb-4">Contact</h4>
            <ul className="space-y-3 text-xs" style={{ color: 'rgba(186,210,255,0.65)' }}>
              <li className="flex items-start gap-2">
                <svg className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span>
                  +91-7987021244
                  <br />
                  +91-9425168440
                </span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-3.5 h-3.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                pannango71@gmail.com
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-3.5 h-3.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                    clipRule="evenodd"
                  />
                </svg>
                Mon–Sat: 10 AM – 6 PM
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        <div
          className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs"
          style={{ color: 'rgba(186,210,255,0.4)' }}
        >
          <div>© 2026 Swami Vivekanand Mahavidyalaya, Panna (MP). All rights reserved.</div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
