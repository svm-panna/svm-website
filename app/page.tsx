'use client';

import Link from 'next/link';
import { useState, useEffect, useCallback } from 'react';
import Navbar from '@/components/site/Navbar';
import Footer from '@/components/site/Footer';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/lib/translations';

const bannerSlides = [
  {
    file: 'banner-02.jpeg',
    alt: 'Swami Vivekanand College Panna — Admissions Open',
    label: 'Admissions Open',
    ctaHref: '/admissions#apply',
  },
  {
    file: 'banner-01.jpeg',
    alt: 'Doorasth Adhyayan Kendra Panna — Distance Education',
    label: 'Distance Education',
    ctaHref: '/courses',
  },
];

const affiliations = [
  { icon: '🏛️', short: 'NCTE', name: 'National Council for Teacher Education' },
  { icon: '🎓', short: 'MCBU', name: 'Mahatma Chhatrasala University' },
  { icon: '📋', short: 'UGC', name: 'University Grants Commission' },
  { icon: '📊', short: 'AISHE', name: 'All India Survey on Higher Education' },
  { icon: '⭐', short: 'AFRCMP', name: 'State Regulatory Authority, MP' },
];

const galleryImages = [
  { file: 'gallery-01.jpeg', caption: 'Annual cultural programme at SVN Panna' },
  { file: 'gallery-05.jpeg', caption: 'Classroom session — B.Ed. program' },
  { file: 'gallery-07.jpeg', caption: 'Teaching practice internship' },
  { file: 'gallery-10.jpeg', caption: 'Campus events and student activities' },
  { file: 'gallery-13.jpeg', caption: 'Sports and extracurricular activities' },
  { file: 'gallery-15.jpeg', caption: 'Convocation and award ceremony' },
  { file: 'gallery-20.jpeg', caption: 'Library and study sessions' },
  { file: 'gallery-24.jpeg', caption: 'Campus life at SVN Panna' },
];

const programIcons = [
  (
    <svg viewBox="0 0 28 28" className="w-7 h-7" fill="none">
      <path d="M14 3L3 9l11 5.5L25 9 14 3z" fill="#E87722" />
      <path d="M3 14l11 5.5L25 14" stroke="#E87722" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M3 19l11 5.5L25 19" stroke="#E87722" strokeWidth="1" strokeLinecap="round" opacity="0.4" />
    </svg>
  ),
  (
    <svg viewBox="0 0 28 28" className="w-7 h-7" fill="none">
      <rect x="5" y="7" width="18" height="14" rx="2" fill="#1A2B4A" opacity="0.8" />
      <path d="M9 12h10M9 16h6" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="21" cy="7" r="4" fill="#E87722" />
      <path d="M19.5 7l1.2 1.3L23 5.5" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  (
    <svg viewBox="0 0 28 28" className="w-7 h-7" fill="none">
      <path d="M14 2L2 8l12 6 12-6-12-6z" fill="#E87722" />
      <path d="M6 11v8" stroke="#1A2B4A" strokeWidth="1.5" strokeLinecap="round" />
      <rect x="4" y="19" width="4" height="4" rx="1" fill="#1A2B4A" />
      <path d="M22 11v8" stroke="#1A2B4A" strokeWidth="1.5" strokeLinecap="round" />
      <rect x="20" y="19" width="4" height="4" rx="1" fill="#1A2B4A" />
    </svg>
  ),
  (
    <svg viewBox="0 0 28 28" className="w-7 h-7" fill="none">
      <circle cx="14" cy="10" r="4" fill="#E87722" opacity="0.25" />
      <circle cx="14" cy="10" r="2.5" fill="#E87722" />
      <path d="M7 24c0-3.866 3.134-7 7-7s7 3.134 7 7" stroke="#E87722" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M19 18.5l2.5 2.5-2.5 2.5" stroke="#1A2B4A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  (
    <svg viewBox="0 0 28 28" className="w-7 h-7" fill="none">
      <circle cx="14" cy="14" r="8" stroke="#1A2B4A" strokeWidth="1.5" fill="none" />
      <path d="M14 10v4l3 2" stroke="#1A2B4A" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M8 24h12" stroke="#E87722" strokeWidth="2" strokeLinecap="round" />
      <path d="M10 22l2-2h4l2 2" stroke="#1A2B4A" strokeWidth="1" strokeLinecap="round" />
    </svg>
  ),
];

const programMeta = [
  { id: 'bed', short: 'B.Ed.', badgeBg: '#FEF3EB', badgeColor: '#E87722', iconBg: '#FEF3EB' },
  { id: 'deled', short: 'D.El.Ed.', badgeBg: '#FEF3EB', badgeColor: '#E87722', iconBg: '#EEF2FA' },
  { id: 'babed', short: 'B.A.B.Ed.', badgeBg: '#EEF2FA', badgeColor: '#1A2B4A', iconBg: '#FEF3EB' },
  { id: 'dspecial', short: 'D.Ed. Special', badgeBg: '#FEF3EB', badgeColor: '#E87722', iconBg: '#FEF3EB' },
  { id: 'iti', short: 'ITI Trades', badgeBg: '#EEF2FA', badgeColor: '#1A2B4A', iconBg: '#EEF2FA' },
];

const homeProgramData = {
  en: [
    { name: 'Bachelor of Education', badge: '2 Years · 50 Seats', desc: 'Professional teacher training for secondary & higher secondary levels.' },
    { name: 'Diploma in Elementary Education', badge: '2 Years · 50 Seats', desc: 'Foundation program for primary & elementary school teaching.' },
    { name: 'Integrated BA + BEd', badge: '4 Years · 40 Seats', desc: 'Integrated Arts & Education degree for aspiring school teachers.' },
    { name: 'Special Education Diploma', badge: '2 Years · 25 Seats', desc: 'Specialized training to teach children with diverse learning needs.' },
    { name: 'Electrician & Fitter', badge: '1–2 Yrs · 60 Seats', desc: 'Vocational training for skilled employment in technical trades.' },
  ],
  hi: [
    { name: 'शिक्षा स्नातक', badge: '2 वर्ष · 50 सीटें', desc: 'माध्यमिक और उच्च माध्यमिक स्तर के लिए पेशेवर शिक्षक प्रशिक्षण।' },
    { name: 'प्राथमिक शिक्षा डिप्लोमा', badge: '2 वर्ष · 50 सीटें', desc: 'प्राथमिक और प्राथमिक विद्यालय शिक्षण के लिए आधार कार्यक्रम।' },
    { name: 'एकीकृत बीए + बीएड', badge: '4 वर्ष · 40 सीटें', desc: 'इच्छुक विद्यालय शिक्षकों के लिए एकीकृत कला और शिक्षा डिग्री।' },
    { name: 'विशेष शिक्षा डिप्लोमा', badge: '2 वर्ष · 25 सीटें', desc: 'विविध सीखने की जरूरतों वाले बच्चों को पढ़ाने के लिए विशेष प्रशिक्षण।' },
    { name: 'इलेक्ट्रीशियन और फिटर', badge: '1-2 वर्ष · 60 सीटें', desc: 'तकनीकी व्यवसायों में कुशल रोजगार के लिए व्यावसायिक प्रशिक्षण।' },
  ],
};

export default function HomePage() {
  const { lang } = useLanguage();
  const T = translations[lang];
  const Th = T.home;
  const Tc = T.common;
  const programs = homeProgramData[lang];

  const [slide, setSlide] = useState(0);
  const nextSlide = useCallback(() => setSlide((s) => (s + 1) % bannerSlides.length), []);
  const prevSlide = () => setSlide((s) => (s - 1 + bannerSlides.length) % bannerSlides.length);

  useEffect(() => {
    const t = setInterval(nextSlide, 6000);
    return () => clearInterval(t);
  }, [nextSlide]);

  const stats = [
    { value: '500+', label: Th.statsStudents },
    { value: '5', label: Th.statsPrograms },
    { value: '15+', label: Th.statsYears },
    { value: '100%', label: Th.statsCompliant },
  ];

  return (
    <>
      <Navbar />
      <main>
        {/* HERO — pure banner slider, no overlay, no text on top */}
        <section className="relative overflow-hidden" style={{ background: '#ffffff' }}>
          {/* Banner images */}
          <div className="relative w-full" style={{ minHeight: '200px' }}>
            {bannerSlides.map((s, i) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={s.file}
                src={`/images/${s.file}`}
                alt={s.alt}
                className="w-full object-contain transition-opacity duration-700"
                style={{ opacity: i === slide ? 1 : 0, position: i === 0 ? 'relative' : 'absolute', top: 0, left: 0 }}
              />
            ))}

            {/* Prev / Next arrows */}
            <button
              onClick={prevSlide}
              aria-label="Previous"
              className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center justify-center w-9 h-9 rounded-full text-white transition-all hover:scale-110"
              style={{ background: 'rgba(0,0,0,0.35)', zIndex: 2 }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next"
              className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center w-9 h-9 rounded-full text-white transition-all hover:scale-110"
              style={{ background: 'rgba(0,0,0,0.35)', zIndex: 2 }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Slide dots */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2" style={{ zIndex: 2 }}>
              {bannerSlides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setSlide(i)}
                  aria-label={`Slide ${i + 1}`}
                  className="w-2.5 h-2.5 rounded-full transition-all"
                  style={{ background: i === slide ? '#E87722' : 'rgba(0,0,0,0.3)' }}
                />
              ))}
            </div>
          </div>

          {/* CTA strip below the banner */}
          <div
            className="flex flex-wrap items-center justify-center gap-4 px-4 py-5"
            style={{ background: '#1A2B4A' }}
          >
            <Link
              href="/admissions#apply"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-semibold text-white transition-all hover:shadow-xl hover:scale-105"
              style={{ background: '#E87722' }}
            >
              {Tc.applyNow}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/courses"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-semibold text-white border-2 transition-all hover:bg-white/10"
              style={{ borderColor: 'rgba(255,255,255,0.4)' }}
            >
              {Tc.explorePrograms}
            </Link>
            <div className="hidden sm:flex items-center gap-5 ml-4">
              {[Th.verify1, Th.verify2, Th.verify3].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm" style={{ color: 'rgba(186,210,255,0.85)' }}>
                  <div className="w-5 h-5 rounded-full flex items-center justify-center text-xs text-white font-bold flex-shrink-0" style={{ background: '#E87722' }}>
                    ✓
                  </div>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* STATS BAR */}
        <section
          className="py-10"
          style={{ background: 'linear-gradient(135deg, #E87722 0%, #C85E0A 100%)' }}
        >
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div
                    className="font-bold leading-none text-white"
                    style={{ fontFamily: '"DM Serif Display", serif', fontSize: '3rem' }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-xs font-medium mt-1 tracking-wide" style={{ color: 'rgba(255,255,255,0.8)' }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROGRAMS */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-14">
              <div className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: '#E87722' }}>
                {Th.programsLabel}
              </div>
              <h2
                className="text-3xl sm:text-4xl font-bold mb-4"
                style={{ fontFamily: '"DM Serif Display", serif', color: '#1A2B4A' }}
              >
                {Th.programsTitle}
              </h2>
              <div className="w-14 h-1 mx-auto rounded-full" style={{ background: '#E87722' }} />
              <p className="text-gray-500 mt-4 max-w-xl mx-auto text-sm leading-relaxed">
                {Th.programsDesc}
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
              {programs.map((p, i) => {
                const meta = programMeta[i];
                return (
                  <div
                    key={meta.id}
                    className="program-card bg-white border border-gray-100 rounded-2xl p-6 shadow-sm"
                  >
                    <div
                      className="flex items-center justify-center mb-4"
                      style={{ background: meta.iconBg, width: 52, height: 52, borderRadius: 14 }}
                    >
                      {programIcons[i]}
                    </div>
                    <div
                      className="h-0.5 rounded-full mb-3"
                      style={{ width: 36, background: '#E87722', transition: 'width 0.4s ease' }}
                    />
                    <h3 className="font-bold text-lg mb-0.5" style={{ color: '#1A2B4A' }}>
                      {meta.short}
                    </h3>
                    <p className="text-xs text-gray-400 mb-2">{p.name}</p>
                    <span
                      className="inline-block text-xs font-semibold px-2.5 py-1 rounded-full mb-3"
                      style={{ background: meta.badgeBg, color: meta.badgeColor }}
                    >
                      {p.badge}
                    </span>
                    <p className="text-xs text-gray-600 mb-4 leading-relaxed">{p.desc}</p>
                    <Link
                      href={`/courses#${meta.id}`}
                      className="text-xs font-semibold flex items-center gap-1 transition-all hover:gap-2"
                      style={{ color: '#E87722' }}
                    >
                      {Tc.learnMore}
                    </Link>
                  </div>
                );
              })}
            </div>
            <div className="text-center mt-10">
              <Link
                href="/courses"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold border-2 transition-all hover:shadow-md hover:scale-105"
                style={{ borderColor: '#1A2B4A', color: '#1A2B4A' }}
              >
                {Tc.viewAllPrograms}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* ABOUT STRIP */}
        <section className="py-20" style={{ background: '#F8F9FA' }}>
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-xl relative">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/campus-02.jpg"
                    alt="SVN Panna College Campus"
                    className="w-full object-cover"
                    style={{ height: '340px' }}
                  />
                  <div
                    className="absolute inset-0 rounded-2xl"
                    style={{ background: 'linear-gradient(to top, rgba(26,43,74,0.55), transparent 55%)' }}
                  />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="text-white font-semibold text-sm">Swami Vivekanand Mahavidyalaya</div>
                    <div className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.75)' }}>
                      Indrapuri Colony, Panna (MP)
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-5 -right-5 bg-white rounded-xl shadow-xl p-4 border border-gray-100 text-center">
                  <div
                    className="font-bold"
                    style={{ fontFamily: '"DM Serif Display", serif', fontSize: '2.2rem', color: '#E87722' }}
                  >
                    15+
                  </div>
                  <div className="text-xs text-gray-500 font-medium whitespace-pre-line">
                    {Th.yearsServingLabel}
                  </div>
                </div>
              </div>

              <div>
                <div
                  className="text-xs font-semibold tracking-widest uppercase mb-3"
                  style={{ color: '#E87722' }}
                >
                  {Th.aboutLabel}
                </div>
                <h2
                  className="font-bold leading-tight mb-5"
                  style={{
                    fontFamily: '"DM Serif Display", serif',
                    fontSize: 'clamp(1.8rem,3vw,2.5rem)',
                    color: '#1A2B4A',
                  }}
                >
                  {Th.aboutTitle1}
                  <br />
                  <em className="not-italic" style={{ color: '#E87722' }}>
                    {Th.aboutTitle2}
                  </em>
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4 text-sm">
                  {Th.aboutPara1}
                </p>
                <p className="text-gray-600 leading-relaxed mb-7 text-sm">
                  {Th.aboutPara2}
                </p>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm flex items-center gap-3">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/images/chairman.jpg"
                      alt="Vedant Singh — Chairman"
                      className="w-10 h-10 rounded-full object-cover flex-shrink-0 shadow-sm"
                    />
                    <div>
                      <div className="font-semibold text-sm" style={{ color: '#1A2B4A' }}>
                        Vedant Singh
                      </div>
                      <div className="text-xs text-gray-400">{Th.chairman}</div>
                    </div>
                  </div>
                  <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm flex items-center gap-3">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/images/director.jpg"
                      alt="Dr. Arvind Singh — Director"
                      className="w-10 h-10 rounded-full object-cover flex-shrink-0 shadow-sm"
                    />
                    <div>
                      <div className="font-semibold text-sm" style={{ color: '#1A2B4A' }}>
                        Dr. Arvind Singh
                      </div>
                      <div className="text-xs text-gray-400">{Th.director}</div>
                    </div>
                  </div>
                </div>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold border-2 transition-all hover:shadow-md"
                  style={{ borderColor: '#1A2B4A', color: '#1A2B4A' }}
                >
                  {Tc.knowMore}
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ADMISSIONS BANNER */}
        <section
          className="py-16 relative overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #E87722 0%, #C85E0A 100%)' }}
        >
          <div className="absolute inset-0 opacity-10">
            <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice" className="w-full h-full">
              <defs>
                <pattern id="p1" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M10 0L20 10L10 20L0 10Z" fill="none" stroke="white" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100" height="100" fill="url(#p1)" />
            </svg>
          </div>
          <div className="max-w-4xl mx-auto px-4 text-center relative">
            <div
              className="inline-block text-white text-xs font-semibold px-3 py-1.5 rounded-full mb-4 tracking-wider uppercase"
              style={{ background: 'rgba(255,255,255,0.2)' }}
            >
              {Th.admissionsNowOpen}
            </div>
            <h2
              className="text-3xl sm:text-4xl font-bold text-white mb-4"
              style={{ fontFamily: '"DM Serif Display", serif' }}
            >
              {Th.admissionsNowOpenYear}
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.85)' }}>
              {Th.admissionsNowOpenDesc}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/admissions#apply"
                className="px-8 py-3.5 bg-white font-semibold rounded-full transition-all hover:shadow-xl hover:scale-105"
                style={{ color: '#E87722' }}
              >
                {Tc.applyOnline}
              </Link>
              <Link
                href="/courses"
                className="px-8 py-3.5 border-2 border-white text-white font-semibold rounded-full transition-all hover:bg-white/10"
              >
                {Tc.viewPrograms}
              </Link>
            </div>
          </div>
        </section>

        {/* AFFILIATIONS */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-10">
              <h2
                className="text-2xl font-bold mb-2"
                style={{ fontFamily: '"DM Serif Display", serif', color: '#1A2B4A' }}
              >
                {Th.affiliationsTitle}
              </h2>
              <p className="text-gray-500 text-sm">
                {Th.affiliationsDesc}
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {affiliations.map((a) => (
                <div key={a.short} className="affil-card rounded-xl p-5 text-center cursor-default">
                  <div className="text-3xl mb-2">{a.icon}</div>
                  <div className="font-bold text-sm mb-1" style={{ color: '#1A2B4A' }}>
                    {a.short}
                  </div>
                  <div className="text-xs text-gray-500">{a.name}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PHOTO GALLERY */}
        <section className="py-20" style={{ background: '#F8F9FA' }}>
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-10">
              <div className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: '#E87722' }}>
                {Th.campusLifeLabel}
              </div>
              <h2
                className="text-3xl font-bold"
                style={{ fontFamily: '"DM Serif Display", serif', color: '#1A2B4A' }}
              >
                {Th.campusLifeTitle}
              </h2>
              <div className="w-14 h-1 mx-auto mt-4 rounded-full" style={{ background: '#E87722' }} />
              <p className="text-sm text-gray-500 mt-3">
                {Th.campusLifeDesc}
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {galleryImages.map((item) => (
                <div key={item.file} className="rounded-xl overflow-hidden aspect-square relative group">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`/images/${item.file}`}
                    alt={item.caption}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-0 left-0 right-0 px-3 py-2 text-xs text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: 'rgba(26,43,74,0.75)' }}>
                    {item.caption}
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link
                href="/about#gallery"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-semibold border-2 transition-all hover:shadow-md"
                style={{ borderColor: '#1A2B4A', color: '#1A2B4A' }}
              >
                {Tc.viewAllPhotos}
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
