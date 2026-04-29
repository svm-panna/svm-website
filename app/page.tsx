'use client';

import Link from 'next/link';
import Navbar from '@/components/site/Navbar';
import Footer from '@/components/site/Footer';
import NoticeBoard from '@/components/site/NoticeBoard';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/lib/translations';

const affiliations = [
  { logo: '/images/logos/ncte.png', short: 'NCTE', name: 'National Council for Teacher Education' },
  { logo: '/images/logos/mcbu.png', short: 'MCBU', name: 'Mahatma Chhatrasala University' },
  { logo: '/images/logos/ugc.png', short: 'UGC', name: 'University Grants Commission' },
  { logo: '/images/logos/aishe.png', short: 'AISHE', name: 'All India Survey on Higher Education' },
  { logo: '/images/logos/afrcmp.png', short: 'AFRCMP', name: 'State Regulatory Authority, MP' },
];

const affiliationCertificates = [
  { program: 'B.Ed.', label: '2014–2015', url: 'https://www.indiamppannango.org/wp-content/uploads/2020/07/Aaffiliation-BED-2014-15.pdf', color: '#E87722', bg: '#FEF3EB' },
  { program: 'B.Ed.', label: '2015–2016', url: 'https://www.indiamppannango.org/wp-content/uploads/2020/07/Aaffiliation-BED-2015-16.pdf', color: '#E87722', bg: '#FEF3EB' },
  { program: 'B.Ed.', label: '2016–2017', url: 'https://www.indiamppannango.org/wp-content/uploads/2020/07/Affiliation-BED-2016-17.pdf', color: '#E87722', bg: '#FEF3EB' },
  { program: 'B.A.B.Ed.', label: '2017–2018', url: 'https://www.indiamppannango.org/wp-content/uploads/2020/07/Affiliation-BABED-2017-18.pdf', color: '#1A2B4A', bg: '#EEF2FA' },
  { program: 'B.A.B.Ed. & B.Ed.', label: '2018–2019', url: 'https://www.indiamppannango.org/wp-content/uploads/2020/07/Affiliation-BABED-BED-2018-19.pdf', color: '#1A2B4A', bg: '#EEF2FA' },
  { program: 'B.A.B.Ed. & B.Ed.', label: '2019–2020', url: 'https://www.indiamppannango.org/wp-content/uploads/2020/07/Affiliation-BABED-BED-2019-20.pdf', color: '#1A2B4A', bg: '#EEF2FA' },
  { program: 'D.El.Ed.', label: '2016 · Page 1', url: 'https://www.indiamppannango.org/wp-content/uploads/2020/07/Affiliation-DELED-2016-1st-page.pdf', color: '#E87722', bg: '#FEF3EB' },
  { program: 'D.El.Ed.', label: '2016 · Page 2', url: 'https://www.indiamppannango.org/wp-content/uploads/2020/07/Affiliation-DELED-2016-2nd-page.pdf', color: '#E87722', bg: '#FEF3EB' },
  { program: 'D.El.Ed.', label: '2017–2020', url: 'https://www.indiamppannango.org/wp-content/uploads/2020/07/AaffiliationDELED201720.pdf', color: '#E87722', bg: '#FEF3EB' },
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

const homeCategories = {
  en: [
    {
      id: 'teaching',
      icon: '📚',
      category: 'Teacher Education',
      accent: '#E87722',
      bg: '#FEF3EB',
      programs: [
        { short: 'B.Ed.', name: 'Bachelor of Education', duration: '2 Yrs', eligible: 'Graduate' },
        { short: 'D.Ed.', name: 'Diploma in Education', duration: '2 Yrs', eligible: '10+2' },
        { short: 'B.A.B.Ed.', name: 'Integrated BA + BEd', duration: '4 Yrs', eligible: '10+2' },
      ],
    },
    {
      id: 'special',
      icon: '♿',
      category: 'Special Education',
      accent: '#1A2B4A',
      bg: '#EEF2FA',
      programs: [
        { short: 'D.Ed. Spl. HI/VI', name: 'Special Ed Diploma (HI/VI)', duration: '2 Yrs', eligible: '12th' },
        { short: 'B.Ed. Spl. VI', name: 'B.Ed. Special Education (VI)', duration: 'B.Ed. Duration', eligible: 'Graduate' },
        { short: 'BA/BSc/BCom B.Ed.', name: 'Integrated Spl. Education', duration: '4 Yrs', eligible: '12th' },
      ],
    },
    {
      id: 'technical',
      icon: '⚙️',
      category: 'Technical & Vocational',
      accent: '#E87722',
      bg: '#FEF3EB',
      programs: [
        { short: 'ITI Electrician', name: 'Electrician Trade', duration: '2 Yrs', eligible: '8th Pass' },
        { short: 'ITI Fitter', name: 'Fitter Trade', duration: '2 Yrs', eligible: '8th Pass' },
      ],
    },
    {
      id: 'medical',
      icon: '💊',
      category: 'Medical & Paramedical',
      accent: '#1A2B4A',
      bg: '#EEF2FA',
      programs: [
        { short: 'D-Pharma', name: 'Diploma in Pharmacy', duration: '2 Yrs', eligible: '12th Bio/Math' },
        { short: 'DMLT', name: 'Diploma Medical Lab Tech.', duration: '2 Yrs', eligible: '12th Bio' },
        { short: 'BMLT', name: 'Bachelor Medical Lab Tech.', duration: '3 Yrs', eligible: '12th Bio' },
        { short: 'OT Technician', name: 'Operation Theatre Tech.', duration: '1 Yr', eligible: '12th Bio' },
      ],
    },
  ],
  hi: [
    {
      id: 'teaching',
      icon: '📚',
      category: 'शिक्षक शिक्षा',
      accent: '#E87722',
      bg: '#FEF3EB',
      programs: [
        { short: 'बी.एड.', name: 'बैचलर ऑफ एजुकेशन', duration: '2 वर्ष', eligible: 'स्नातक' },
        { short: 'डी.एड.', name: 'डिप्लोमा इन एजुकेशन', duration: '2 वर्ष', eligible: '10+2' },
        { short: 'बी.ए.बी.एड.', name: 'एकीकृत बीए + बीएड', duration: '4 वर्ष', eligible: '10+2' },
      ],
    },
    {
      id: 'special',
      icon: '♿',
      category: 'विशेष शिक्षा',
      accent: '#1A2B4A',
      bg: '#EEF2FA',
      programs: [
        { short: 'डी.एड. विशेष HI/VI', name: 'विशेष शिक्षा डिप्लोमा', duration: '2 वर्ष', eligible: '12वीं' },
        { short: 'बी.एड. विशेष VI', name: 'बी.एड. विशेष शिक्षा', duration: 'बी.एड. अवधि', eligible: 'स्नातक' },
        { short: 'बीए/बीएससी/बीकॉम बी.एड.', name: 'एकीकृत विशेष शिक्षा', duration: '4 वर्ष', eligible: '12वीं' },
      ],
    },
    {
      id: 'technical',
      icon: '⚙️',
      category: 'तकनीकी एवं व्यावसायिक',
      accent: '#E87722',
      bg: '#FEF3EB',
      programs: [
        { short: 'ITI इलेक्ट्रीशियन', name: 'इलेक्ट्रीशियन ट्रेड', duration: '2 वर्ष', eligible: '8वीं पास' },
        { short: 'ITI फिटर', name: 'फिटर ट्रेड', duration: '2 वर्ष', eligible: '8वीं पास' },
      ],
    },
    {
      id: 'medical',
      icon: '💊',
      category: 'चिकित्सा एवं पैरामेडिकल',
      accent: '#1A2B4A',
      bg: '#EEF2FA',
      programs: [
        { short: 'डी-फार्मा', name: 'डिप्लोमा इन फार्मेसी', duration: '2 वर्ष', eligible: '12वीं Bio/Math' },
        { short: 'DMLT', name: 'डिप्लोमा मेडिकल लैब टेक.', duration: '2 वर्ष', eligible: '12वीं Bio' },
        { short: 'BMLT', name: 'बैचलर मेडिकल लैब टेक.', duration: '3 वर्ष', eligible: '12वीं Bio' },
        { short: 'OT टेक्नीशियन', name: 'ऑपरेशन थिएटर टेक.', duration: '1 वर्ष', eligible: '12वीं Bio' },
      ],
    },
  ],
};

export default function HomePage() {
  const { lang } = useLanguage();
  const T = translations[lang];
  const Th = T.home;
  const Tc = T.common;
  const categories = homeCategories[lang];

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
        {/* HERO — clean banner image, no overlay */}
        <section className="relative overflow-hidden" style={{ background: '#ffffff' }}>
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/banner-01.jpeg"
              alt="Swami Vivekanand Mahavidyalaya Panna — Admissions Open"
              className="w-full object-contain"
            />
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
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScjuIN1EUS1AXM9L8Ie61_wYjs_VpPlhmcipj5WFJQZbQk12w/viewform?usp=header"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-semibold text-white border-2 transition-all hover:bg-white/10"
              style={{ borderColor: 'rgba(255,255,255,0.4)' }}
            >
              {lang === 'hi' ? 'परामर्श फॉर्म' : 'Counselling Form'}
            </a>
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
                  <div className="text-sm font-medium mt-1 tracking-wide" style={{ color: 'rgba(255,255,255,0.8)' }}>
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
              <p className="text-gray-500 mt-4 max-w-xl mx-auto text-base leading-relaxed">
                {Th.programsDesc}
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {categories.map((cat) => (
                <div
                  key={cat.id}
                  className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
                  style={{ borderTop: `4px solid ${cat.accent}` }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4"
                    style={{ background: cat.bg }}
                  >
                    {cat.icon}
                  </div>
                  <h3 className="font-bold text-lg mb-4" style={{ color: '#1A2B4A', fontFamily: '"DM Serif Display", serif' }}>
                    {cat.category}
                  </h3>
                  <ul className="space-y-3 mb-5">
                    {cat.programs.map((p) => (
                      <li key={p.short} className="flex items-start justify-between gap-2">
                        <div>
                          <div className="font-semibold text-sm" style={{ color: '#1A2B4A' }}>{p.short}</div>
                          <div className="text-xs text-gray-500">{p.name}</div>
                        </div>
                        <span
                          className="text-xs font-semibold px-2 py-0.5 rounded-full whitespace-nowrap flex-shrink-0 mt-0.5"
                          style={{ background: cat.bg, color: cat.accent }}
                        >
                          {p.duration}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/courses#${cat.id}`}
                    className="text-sm font-semibold flex items-center gap-1 transition-all hover:gap-2"
                    style={{ color: cat.accent }}
                  >
                    {Tc.learnMore}
                  </Link>
                </div>
              ))}
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
                <p className="text-gray-600 leading-relaxed mb-4 text-base">
                  {Th.aboutPara1}
                </p>
                <p className="text-gray-600 leading-relaxed mb-7 text-base">
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

        {/* NOTICE BOARD */}
        <NoticeBoard />

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
              <p className="text-gray-500 text-base">
                {Th.affiliationsDesc}
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {affiliations.map((a) => (
                <div key={a.short} className="affil-card rounded-xl p-5 text-center cursor-default">
                  <div className="flex items-center justify-center mb-3" style={{ height: '56px' }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={a.logo}
                      alt={a.name}
                      className="max-h-full max-w-full object-contain"
                      style={{ maxHeight: '56px', maxWidth: '100px' }}
                    />
                  </div>
                  <div className="font-bold text-sm mb-1" style={{ color: '#1A2B4A' }}>
                    {a.short}
                  </div>
                  <div className="text-sm text-gray-500">{a.name}</div>
                </div>
              ))}
            </div>

            {/* Affiliation Certificates */}
            <div className="mt-16">
              <div className="flex items-center gap-4 mb-8">
                <div className="flex-1 h-px" style={{ background: '#E8DDD0' }} />
                <div className="text-center">
                  <div className="text-xs font-semibold tracking-widest uppercase mb-1" style={{ color: '#E87722' }}>
                    {lang === 'hi' ? 'आधिकारिक दस्तावेज़' : 'Official Documents'}
                  </div>
                  <h3
                    className="text-xl font-bold"
                    style={{ fontFamily: '"DM Serif Display", serif', color: '#1A2B4A' }}
                  >
                    {lang === 'hi' ? 'संबद्धता प्रमाण पत्र' : 'Affiliation Certificates'}
                  </h3>
                </div>
                <div className="flex-1 h-px" style={{ background: '#E8DDD0' }} />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {affiliationCertificates.map((cert) => (
                  <a
                    key={cert.url}
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 rounded-xl p-4 border transition-all hover:shadow-md hover:scale-[1.01] group"
                    style={{ borderColor: '#E8DDD0', background: '#FAFAFA' }}
                  >
                    <div
                      className="flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center"
                      style={{ background: cert.bg }}
                    >
                      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none">
                        <rect x="4" y="2" width="12" height="17" rx="1.5" stroke={cert.color} strokeWidth="1.5" />
                        <path d="M14 2l4 4h-4V2z" fill={cert.color} fillOpacity="0.25" stroke={cert.color} strokeWidth="1" />
                        <path d="M7 11h6M7 14h4" stroke={cert.color} strokeWidth="1.2" strokeLinecap="round" />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div
                        className="text-xs font-bold uppercase tracking-wide mb-0.5"
                        style={{ color: cert.color }}
                      >
                        {cert.program}
                      </div>
                      <div className="font-semibold text-sm" style={{ color: '#1A2B4A' }}>
                        {cert.label}
                      </div>
                      <div className="text-xs mt-0.5 text-gray-400">MCBU Affiliation · PDF</div>
                    </div>
                    <svg
                      className="w-5 h-5 flex-shrink-0 text-gray-300 transition-transform group-hover:translate-x-1 group-hover:text-[#E87722]"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path d="M4 10h12M10 4l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                ))}
              </div>
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
              <p className="text-base text-gray-500 mt-3">
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
