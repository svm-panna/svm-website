import Link from 'next/link';
import { MapPin, Phone, Mail, ExternalLink } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-brand-600 flex items-center justify-center text-white text-xs font-semibold">
                SVM
              </div>
              <div>
                <div className="text-sm font-semibold text-white">Swami Vivekanand</div>
                <div className="text-xs text-gray-400">Mahavidyalaya, Panna</div>
              </div>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed">
              NCTE approved teacher education institution. Affiliated to Maharaja Chhatrasal Bundelkhand University, Chhatarpur.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-3">Quick links</h4>
            <ul className="space-y-1.5 text-sm">
              {[
                { href: '/about', label: 'About us' },
                { href: '/academics', label: 'Programmes' },
                { href: '/admissions', label: 'Admissions' },
                { href: '/students', label: 'Student portal' },
                { href: '/campus', label: 'Campus & facilities' },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-white transition-colors text-xs">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Compliance */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-3">Compliance & docs</h4>
            <ul className="space-y-1.5 text-sm">
              {[
                { href: '/docs/ncte-approval.pdf', label: 'NCTE approval letter' },
                { href: '/docs/affiliation.pdf', label: 'Affiliation certificate' },
                { href: '/docs/noc.pdf', label: 'NOC — Higher Education' },
                { href: '/docs/noc-paramedical.pdf', label: 'NOC — Paramedical' },
                { href: '/about#iqac', label: 'IQAC' },
                { href: '/contact#rti', label: 'RTI' },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-white transition-colors text-xs flex items-center gap-1">
                    {l.label} <ExternalLink size={10} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-3">Contact</h4>
            <ul className="space-y-2 text-xs">
              <li className="flex gap-2">
                <MapPin size={14} className="text-gray-400 flex-shrink-0 mt-0.5" />
                <span>Janakpur, Ward No. 3, Indrapuri Colony, Panna, Madhya Pradesh – 488001</span>
              </li>
              <li className="flex gap-2">
                <Phone size={14} className="text-gray-400 flex-shrink-0 mt-0.5" />
                <div>
                  <div>+91-7987021244</div>
                  <div>+91-8641044597</div>
                </div>
              </li>
              <li className="flex gap-2">
                <Mail size={14} className="text-gray-400 flex-shrink-0 mt-0.5" />
                <a href="mailto:pannango464@gmail.com" className="hover:text-white transition-colors">
                  pannango464@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Swami Vivekanand Mahavidyalaya. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-gray-300">Privacy policy</Link>
            <Link href="/contact" className="hover:text-gray-300">Contact us</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
