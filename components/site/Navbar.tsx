'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/lib/translations';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [navHeight, setNavHeight] = useState(0);
  const navRef = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef(0);
  const pathname = usePathname();
  const { lang, toggleLang } = useLanguage();
  const T = translations[lang].nav;

  useEffect(() => {
    if (navRef.current) {
      setNavHeight(navRef.current.offsetHeight);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      setVisible(current < lastScrollY.current || current < 10);
      lastScrollY.current = current;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: T.home },
    { href: '/about', label: T.about },
    { href: '/courses', label: T.courses },
    { href: '/distance-learning', label: T.distanceLearning },
    { href: '/admissions', label: T.admissions },
    { href: '/library', label: T.library },
    { href: '/contact', label: T.contact },
  ];

  return (
    <>
      <div
        ref={navRef}
        className="fixed top-0 left-0 right-0 w-full z-50 transition-transform duration-300"
        style={{ transform: visible ? 'translateY(0)' : 'translateY(-100%)' }}
      >
        {/* Topbar */}
        <div style={{ background: '#1A2B4A' }}>
          <div className="max-w-7xl mx-auto px-4 py-2 flex flex-col sm:flex-row justify-between items-center gap-2">
            <div className="flex flex-wrap items-center gap-4 text-xs" style={{ color: 'rgba(255,255,255,0.85)' }}>
              <a href="tel:+917999404729" className="flex items-center gap-1.5 hover:text-white transition-colors">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                +91-7999404729
              </a>
              <span style={{ color: 'rgba(255,255,255,0.2)' }}>|</span>
              <a href="mailto:pannango71@gmail.com" className="flex items-center gap-1.5 hover:text-white transition-colors">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                pannango71@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2 text-xs">
              {['NCTE', 'MCBU', 'UGC', 'AISHE'].map((badge) => (
                <span
                  key={badge}
                  className="px-2 py-0.5 rounded font-medium tracking-wide"
                  style={{ background: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.9)' }}
                >
                  {badge}
                </span>
              ))}
              {/* Language Toggle */}
              <button
                onClick={toggleLang}
                className="ml-2 flex items-center gap-0.5 rounded-full px-2.5 py-1 text-xs font-semibold transition-all hover:scale-105"
                style={{ background: 'rgba(232,119,34,0.25)', border: '1px solid rgba(232,119,34,0.5)', color: '#fff' }}
                aria-label="Toggle language"
              >
                <span style={{ opacity: lang === 'en' ? 1 : 0.45, fontWeight: lang === 'en' ? 700 : 400 }}>EN</span>
                <span style={{ opacity: 0.4, margin: '0 3px' }}>|</span>
                <span style={{ opacity: lang === 'hi' ? 1 : 0.45, fontWeight: lang === 'hi' ? 700 : 400 }}>हिं</span>
              </button>
            </div>
          </div>
        </div>

        {/* Navbar */}
        <nav className="bg-white border-b border-gray-100 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
            {/* Logo - Centered on small screens, left-aligned on lg+ */}
            <div className="flex-1 lg:flex-none flex justify-center lg:justify-start">
              <Link href="/" className="flex flex-col items-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/logo.png" alt="Swami Vivekanand Mahavidyalaya Panna" className="h-32 w-auto object-contain" style={{ maxWidth: '280px' }} />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/logo2.png" alt="Swami Vivekanand Mahavidyalaya, Panna — Institutional Emblem" className="h-22 w-auto object-contain" style={{ maxWidth: '300px' }} />
              </Link>
            </div>

            <div className="hidden lg:flex items-center gap-1 flex-1">
              {navLinks.map((link) => {
                const active = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="px-3 py-2 text-base rounded-lg transition-colors text-center"
                    style={
                      active
                        ? { color: '#E87722', background: '#FEF3EB', fontWeight: 600 }
                        : { color: '#4B5563', fontWeight: 500 }
                    }
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>

            <div className="hidden lg:block">
              <Link
                href="/admissions#apply"
                className="px-5 py-2.5 rounded-full text-base font-semibold text-white transition-all hover:shadow-lg hover:scale-105"
                style={{ background: '#E87722' }}
              >
                {T.applyBtn}
              </Link>
            </div>

            {/* Hamburger Icon - Right aligned on small screens */}
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden p-2 rounded-md text-gray-500 flex-shrink-0"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={open ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                />
              </svg>
            </button>
          </div>

          {open && (
            <div className="lg:hidden bg-white border-t border-gray-100 px-4 pb-4">
              <div className="flex flex-col gap-1 pt-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="px-3 py-2.5 text-base rounded-lg"
                    style={
                      pathname === link.href
                        ? { color: '#E87722', fontWeight: 600 }
                        : { color: '#374151', fontWeight: 500 }
                    }
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href="/admissions#apply"
                  onClick={() => setOpen(false)}
                  className="mt-2 px-5 py-3 rounded-full text-sm font-semibold text-white text-center"
                  style={{ background: '#E87722' }}
                >
                  {T.applyBtn}
                </Link>
                {/* Language toggle in mobile menu */}
                <button
                  onClick={toggleLang}
                  className="mt-2 mx-auto flex items-center gap-1 rounded-full px-4 py-2 text-sm font-semibold transition-all"
                  style={{ background: '#FEF3EB', color: '#E87722', border: '1px solid #E87722' }}
                >
                  <span style={{ fontWeight: lang === 'en' ? 700 : 400 }}>English</span>
                  <span style={{ opacity: 0.4, margin: '0 4px' }}>|</span>
                  <span style={{ fontWeight: lang === 'hi' ? 700 : 400 }}>हिंदी</span>
                </button>
              </div>
            </div>
          )}
        </nav>
      </div>

      {/* Spacer to offset fixed navbar */}
      <div style={{ height: navHeight }} aria-hidden="true" />
    </>
  );
}
