'use client';

import Link from 'next/link';
import Navbar from '@/components/site/Navbar';
import Footer from '@/components/site/Footer';

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main
        className="flex flex-col items-center justify-center text-center px-4"
        style={{ minHeight: '60vh', background: '#ffffff' }}
      >
        {/* Decorative SVG — open book / education theme */}
        <div className="mb-6 opacity-20" aria-hidden="true">
          <svg
            width="120"
            height="120"
            viewBox="0 0 120 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="10" y="30" width="44" height="60" rx="4" fill="#1A2B4A" />
            <rect x="66" y="30" width="44" height="60" rx="4" fill="#1A2B4A" />
            <path d="M54 30 Q60 24 66 30 L66 90 Q60 84 54 90 Z" fill="#E87722" />
            <path d="M20 48h24M20 58h24M20 68h16" stroke="white" strokeWidth="3" strokeLinecap="round" />
            <path d="M76 48h24M76 58h24M76 68h16" stroke="white" strokeWidth="3" strokeLinecap="round" />
          </svg>
        </div>

        {/* 404 number */}
        <div
          style={{
            fontFamily: '"DM Serif Display", serif',
            fontSize: '6rem',
            lineHeight: 1,
            color: '#E87722',
            fontWeight: 400,
          }}
        >
          404
        </div>

        {/* Heading */}
        <h1
          className="mt-4 mb-3"
          style={{
            fontFamily: '"DM Serif Display", serif',
            fontSize: '1.875rem',
            color: '#1A2B4A',
            fontWeight: 400,
          }}
        >
          Page Not Found
        </h1>

        {/* Subtext */}
        <p
          className="text-base mb-8 max-w-md"
          style={{ color: '#6B7280' }}
        >
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full font-semibold text-white transition-all hover:shadow-lg hover:scale-105"
            style={{ background: '#E87722' }}
          >
            Go Home
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full font-semibold transition-all hover:shadow-md hover:scale-105"
            style={{ border: '2px solid #1A2B4A', color: '#1A2B4A' }}
          >
            Contact Us
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
