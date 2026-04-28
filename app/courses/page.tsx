'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/site/Navbar';
import Footer from '@/components/site/Footer';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/lib/translations';

const courseCategories = {
  en: [
    {
      id: 'teaching',
      icon: '📚',
      title: 'Teacher Education',
      affil: 'NCTE / MCBU Recognized',
      accent: '#E87722' as const,
      bg: '#FEF3EB',
      programs: [
        { id: 'bed', short: 'B.Ed.', name: 'Bachelor of Education', duration: '2 Yrs', seats: '50', eligible: 'Graduate (50%)', badge: 'NCTE Recognized' },
        { id: 'deled', short: 'D.El.Ed.', name: 'Diploma in Elementary Education', duration: '2 Yrs', seats: '50', eligible: '10+2 (50%)', badge: 'NCTE Recognized' },
        { id: 'babed', short: 'B.A.B.Ed.', name: 'Integrated BA + BEd', duration: '4 Yrs', seats: '40', eligible: '10+2 (50%)', badge: 'NCTE Recognized' },
      ],
    },
    {
      id: 'special',
      icon: '♿',
      title: 'Special Education',
      affil: 'NCTE / MCBU Recognized',
      accent: '#1A2B4A' as const,
      bg: '#EEF2FA',
      programs: [
        { id: 'ded-spl-hivi', short: 'D.Ed. Spl. HI/VI', name: 'Special Education Diploma (HI/VI)', duration: '2 Yrs', seats: '25', eligible: '12th (50%)', badge: 'NCTE Recognized' },
        { id: 'bed-spl-vi', short: 'B.Ed. Spl. VI', name: 'B.Ed. Special Education (Visual Impairment)', duration: '2 Yrs', seats: '25', eligible: 'Graduate (50%)', badge: 'NCTE Recognized' },
        { id: 'int-spl', short: 'BA/BSc/BCom B.Ed. Spl.', name: 'Integrated Special Education (HI/VI)', duration: '4 Yrs', seats: '25 each', eligible: '12th (50%)', badge: 'NCTE Recognized' },
      ],
    },
    {
      id: 'technical',
      icon: '⚙️',
      title: 'Technical & Vocational',
      affil: 'DVET / State Board',
      accent: '#E87722' as const,
      bg: '#FEF3EB',
      programs: [
        { id: 'iti-electrician', short: 'ITI Electrician', name: 'Electrician Trade', duration: '2 Yrs', seats: '30', eligible: 'Class 8 Pass', badge: 'DVET Certified' },
        { id: 'iti-fitter', short: 'ITI Fitter', name: 'Fitter Trade', duration: '2 Yrs', seats: '30', eligible: 'Class 10 Pass', badge: 'DVET Certified' },
      ],
    },
    {
      id: 'medical',
      icon: '💊',
      title: 'Medical & Paramedical',
      affil: 'PCI / State Board',
      accent: '#1A2B4A' as const,
      bg: '#EEF2FA',
      programs: [
        { id: 'dpharma', short: 'D-Pharma', name: 'Diploma in Pharmacy', duration: '2 Yrs', seats: '60', eligible: '12th Bio/Math (50%)', badge: 'PCI Approved' },
        { id: 'dmlt', short: 'DMLT', name: 'Diploma Medical Lab Technology', duration: '2 Yrs', seats: '30', eligible: '12th Bio (50%)', badge: 'State Board' },
        { id: 'bmlt', short: 'BMLT', name: 'Bachelor Medical Lab Technology', duration: '3 Yrs', seats: '30', eligible: '12th Bio (50%)', badge: 'State Board' },
        { id: 'ot-tech', short: 'OT Technician', name: 'Operation Theatre Technician', duration: '1 Yr', seats: '30', eligible: '12th Bio/Math', badge: 'State Board' },
      ],
    },
  ],
  hi: [
    {
      id: 'teaching',
      icon: '📚',
      title: 'शिक्षक शिक्षा',
      affil: 'NCTE / MCBU मान्यता प्राप्त',
      accent: '#E87722' as const,
      bg: '#FEF3EB',
      programs: [
        { id: 'bed', short: 'बी.एड.', name: 'शिक्षा स्नातक', duration: '2 वर्ष', seats: '50', eligible: 'स्नातक (50%)', badge: 'NCTE मान्यता' },
        { id: 'deled', short: 'डी.एल.एड.', name: 'प्राथमिक शिक्षा डिप्लोमा', duration: '2 वर्ष', seats: '50', eligible: '10+2 (50%)', badge: 'NCTE मान्यता' },
        { id: 'babed', short: 'बी.ए.बी.एड.', name: 'एकीकृत बी.ए. + बी.एड.', duration: '4 वर्ष', seats: '40', eligible: '10+2 (50%)', badge: 'NCTE मान्यता' },
      ],
    },
    {
      id: 'special',
      icon: '♿',
      title: 'विशेष शिक्षा',
      affil: 'NCTE / MCBU मान्यता प्राप्त',
      accent: '#1A2B4A' as const,
      bg: '#EEF2FA',
      programs: [
        { id: 'ded-spl-hivi', short: 'डी.एड. विशेष HI/VI', name: 'विशेष शिक्षा डिप्लोमा (HI/VI)', duration: '2 वर्ष', seats: '25', eligible: '12वीं (50%)', badge: 'NCTE मान्यता' },
        { id: 'bed-spl-vi', short: 'बी.एड. विशेष VI', name: 'बी.एड. विशेष शिक्षा (दृष्टिबाधित)', duration: '2 वर्ष', seats: '25', eligible: 'स्नातक (50%)', badge: 'NCTE मान्यता' },
        { id: 'int-spl', short: 'BA/BSc/BCom बी.एड. विशेष', name: 'एकीकृत विशेष शिक्षा (HI/VI)', duration: '4 वर्ष', seats: '25 प्रत्येक', eligible: '12वीं (50%)', badge: 'NCTE मान्यता' },
      ],
    },
    {
      id: 'technical',
      icon: '⚙️',
      title: 'तकनीकी और व्यावसायिक',
      affil: 'DVET / राज्य बोर्ड',
      accent: '#E87722' as const,
      bg: '#FEF3EB',
      programs: [
        { id: 'iti-electrician', short: 'ITI इलेक्ट्रीशियन', name: 'इलेक्ट्रीशियन ट्रेड', duration: '2 वर्ष', seats: '30', eligible: 'कक्षा 8 पास', badge: 'DVET प्रमाणित' },
        { id: 'iti-fitter', short: 'ITI फिटर', name: 'फिटर ट्रेड', duration: '2 वर्ष', seats: '30', eligible: 'कक्षा 10 पास', badge: 'DVET प्रमाणित' },
      ],
    },
    {
      id: 'medical',
      icon: '💊',
      title: 'चिकित्सा एवं पैरामेडिकल',
      affil: 'PCI / राज्य बोर्ड',
      accent: '#1A2B4A' as const,
      bg: '#EEF2FA',
      programs: [
        { id: 'dpharma', short: 'डी-फार्मा', name: 'फार्मेसी डिप्लोमा', duration: '2 वर्ष', seats: '60', eligible: '12वीं Bio/Math (50%)', badge: 'PCI अनुमोदित' },
        { id: 'dmlt', short: 'DMLT', name: 'डिप्लोमा मेडिकल लैब टेक्नोलॉजी', duration: '2 वर्ष', seats: '30', eligible: '12वीं Bio (50%)', badge: 'राज्य बोर्ड' },
        { id: 'bmlt', short: 'BMLT', name: 'बैचलर मेडिकल लैब टेक्नोलॉजी', duration: '3 वर्ष', seats: '30', eligible: '12वीं Bio (50%)', badge: 'राज्य बोर्ड' },
        { id: 'ot-tech', short: 'OT टेकनीशियन', name: 'ऑपरेशन थिएटर टेक्नीशियन', duration: '1 वर्ष', seats: '30', eligible: '12वीं Bio/Math', badge: 'राज्य बोर्ड' },
      ],
    },
  ],
};

export default function CoursesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const { lang } = useLanguage();
  const T = translations[lang];
  const Tc = T.courses;
  const Tcommon = T.common;

  return (
    <>
      <Navbar />
      <main>
        {/* PAGE HERO */}
        <section
          className="page-hero-pattern py-16"
          style={{ background: 'linear-gradient(135deg,#1A2B4A,#0F1C34)' }}
        >
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-xs mb-4" style={{ color: 'rgba(186,210,255,0.5)' }}>
              <Link href="/" className="hover:text-white transition-colors">
                {T.nav.home}
              </Link>
              <span className="mx-2">/</span>
              <span style={{ color: 'rgba(255,255,255,0.8)' }}>{Tc.breadcrumb}</span>
            </div>
            <h1
              className="font-bold text-white mb-1"
              style={{ fontFamily: '"DM Serif Display", serif', fontSize: 'clamp(2rem,4vw,3rem)' }}
            >
              {Tc.heroTitle}
            </h1>
            <p className="text-sm font-semibold mb-3" style={{ color: '#E87722' }}>
              {lang === 'hi' ? 'कैंपस / नियमित कार्यक्रम' : 'Campus / Regular Programs — Panna Campus'}
            </p>
            <p
              className="max-w-xl text-base leading-relaxed mb-4"
              style={{ color: 'rgba(186,210,255,0.75)' }}
            >
              {Tc.heroDesc}
            </p>
            <Link
              href="/distance-learning"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold border-2 transition-all hover:bg-white/10 text-white"
              style={{ borderColor: 'rgba(255,255,255,0.4)' }}
            >
              {lang === 'hi' ? 'दूरस्थ शिक्षा कार्यक्रम भी देखें →' : 'Also see: Distance Learning Programs →'}
            </Link>
          </div>
        </section>

        {/* BANNER IMAGE */}
        <div className="w-full">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/banner-01.jpeg"
            alt="Swami Vivekanand College Panna — Campus Programs"
            className="w-full object-contain"
          />
        </div>

        {/* PROGRAMS DETAIL — CATEGORY SECTIONS */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-14">
              <div className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: '#E87722' }}>
                {Tc.allProgramsLabel}
              </div>
              <h2
                className="text-3xl font-bold"
                style={{ fontFamily: '"DM Serif Display", serif', color: '#1A2B4A' }}
              >
                {Tc.choosePath}
              </h2>
              <div className="w-14 h-1 mx-auto mt-4 rounded-full" style={{ background: '#E87722' }} />
            </div>

            <div className="space-y-16">
              {courseCategories[lang].map((cat) => (
                <div key={cat.id} id={cat.id}>
                  {/* Category Header */}
                  <div className="flex items-center gap-4 mb-8">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0"
                      style={{ background: cat.bg }}
                    >
                      {cat.icon}
                    </div>
                    <div>
                      <h3
                        className="text-2xl font-bold"
                        style={{ fontFamily: '"DM Serif Display", serif', color: '#1A2B4A' }}
                      >
                        {cat.title}
                      </h3>
                      <div className="text-xs font-semibold uppercase tracking-wide mt-1" style={{ color: cat.accent }}>
                        {cat.affil}
                      </div>
                    </div>
                    <div className="flex-1 h-px ml-4" style={{ background: '#E5E0D8' }} />
                  </div>

                  {/* Program Cards */}
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {cat.programs.map((p) => (
                      <div
                        key={p.id}
                        id={p.id}
                        className="rounded-xl border p-6 hover:shadow-md transition-all bg-white"
                        style={{ borderColor: '#E5E0D8', borderTop: `4px solid ${cat.accent}` }}
                      >
                        <div className="flex items-start justify-between gap-3 mb-3">
                          <div>
                            <h4 className="text-xl font-bold" style={{ color: '#1A2B4A' }}>{p.short}</h4>
                            <p className="text-sm text-gray-500 mt-0.5">{p.name}</p>
                          </div>
                          <span
                            className="text-xs font-semibold px-2.5 py-1 rounded-full flex-shrink-0 mt-1"
                            style={{ background: cat.bg, color: cat.accent }}
                          >
                            {p.badge}
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-3 text-sm text-gray-500 mb-4">
                          <span>⏱ {p.duration}</span>
                          <span>👥 {p.seats} {lang === 'hi' ? 'सीटें' : 'Seats'}</span>
                          <span>🎓 {p.eligible}</span>
                        </div>
                        <Link
                          href="/admissions#apply"
                          className="block text-center px-4 py-2 rounded-full text-sm font-semibold text-white transition-all hover:shadow-md"
                          style={{ background: cat.accent }}
                        >
                          {Tcommon.applyNow}
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* OVERVIEW TABLE */}
        <section className="py-20" style={{ background: '#F8F9FA' }}>
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2
                className="text-3xl font-bold"
                style={{ fontFamily: '"DM Serif Display", serif', color: '#1A2B4A' }}
              >
                {Tc.overviewTitle}
              </h2>
              <div className="w-14 h-1 mx-auto mt-4 rounded-full" style={{ background: '#E87722' }} />
            </div>
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100">
              <div className="overflow-x-auto">
                <table className="w-full text-base">
                  <thead>
                    <tr style={{ background: '#1A2B4A' }}>
                      {Tc.tableHeaders.map((h) => (
                        <th
                          key={h}
                          className="text-left px-5 py-4 text-white font-semibold text-sm uppercase tracking-wide"
                        >
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {Tc.overviewRows.map((row, i) => (
                      <tr
                        key={row.program}
                        className="border-b border-gray-100 hover:bg-orange-50 transition-colors"
                        style={i % 2 === 1 ? { background: '#F8F9FA' } : {}}
                      >
                        <td className="px-5 py-4">
                          <span className="font-semibold" style={{ color: '#1A2B4A' }}>
                            {row.program}
                          </span>
                        </td>
                        <td className="px-5 py-4 text-gray-600">{row.duration}</td>
                        <td className="px-5 py-4 text-gray-600">{row.eligibility}</td>
                        <td className="px-5 py-4 text-gray-600">{row.marks}</td>
                        <td className="px-5 py-4">
                          <span className="font-medium" style={{ color: '#E87722' }}>
                            {row.seats}
                          </span>
                        </td>
                        <td className="px-5 py-4 text-gray-600">{row.affil}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* FEE STRUCTURE */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <div className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: '#E87722' }}>
                {Tc.feeStructureLabel}
              </div>
              <h2
                className="text-3xl font-bold"
                style={{ fontFamily: '"DM Serif Display", serif', color: '#1A2B4A' }}
              >
                {Tc.feeStructureTitle}
              </h2>
              <div className="w-14 h-1 mx-auto mt-4 rounded-full" style={{ background: '#E87722' }} />
            </div>
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100 mb-5">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr style={{ background: '#E87722' }}>
                      {Tc.feeTableHeaders.map((h) => (
                        <th
                          key={h}
                          className="text-left px-5 py-4 text-white font-semibold text-xs uppercase tracking-wide"
                        >
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {Tc.feeRows.map((row, i) => (
                      <tr
                        key={row.program}
                        className="border-b border-gray-100 hover:bg-orange-50 transition-colors"
                        style={i % 2 === 1 ? { background: '#F8F9FA' } : {}}
                      >
                        <td className="px-5 py-4">
                          <span className="font-semibold" style={{ color: '#1A2B4A' }}>{row.program}</span>
                        </td>
                        <td className="px-5 py-4 text-gray-600">{row.duration}</td>
                        <td className="px-5 py-4">
                          <span className="font-bold" style={{ color: '#E87722' }}>{row.annual}</span>
                        </td>
                        <td className="px-5 py-4 text-gray-600">{row.exam}</td>
                        <td className="px-5 py-4 font-medium" style={{ color: '#1A2B4A' }}>{row.total}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <p className="text-xs text-gray-500 text-center leading-relaxed max-w-2xl mx-auto">
              {Tc.feeStructureNote}
            </p>
          </div>
        </section>

        {/* HOW TO APPLY */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4">
            <div className="text-center mb-14">
              <h2
                className="text-3xl font-bold"
                style={{ fontFamily: '"DM Serif Display", serif', color: '#1A2B4A' }}
              >
                {Tc.howToApplyTitle}
              </h2>
              <div className="w-14 h-1 mx-auto mt-4 rounded-full" style={{ background: '#E87722' }} />
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {Tc.steps.map((step) => (
                <div key={step.n} className="text-center">
                  <div className="flex justify-center mb-4">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg"
                      style={{ background: '#E87722' }}
                    >
                      {step.n}
                    </div>
                  </div>
                  <h3 className="font-semibold mb-2" style={{ color: '#1A2B4A' }}>
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-10">
              <Link
                href="/admissions#apply"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-white transition-all hover:shadow-lg"
                style={{ background: '#E87722' }}
              >
                {Tcommon.startApplication}
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20" style={{ background: '#F8F9FA' }}>
          <div className="max-w-3xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2
                className="text-3xl font-bold"
                style={{ fontFamily: '"DM Serif Display", serif', color: '#1A2B4A' }}
              >
                {Tc.faqTitle}
              </h2>
              <div className="w-14 h-1 mx-auto mt-4 rounded-full" style={{ background: '#E87722' }} />
            </div>
            <div className="space-y-3">
              {Tc.faqs.map((faq, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl border border-gray-100 overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between p-5 text-left font-medium"
                    style={{ color: '#1A2B4A' }}
                  >
                    {faq.q}
                    <svg
                      className="w-5 h-5 flex-shrink-0 transition-transform duration-300"
                      style={{ transform: openFaq === i ? 'rotate(180deg)' : 'rotate(0deg)' }}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openFaq === i && (
                    <div className="px-5 pb-5 text-base text-gray-600 leading-relaxed">{faq.a}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CAMPUS GALLERY */}
        <section className="py-16" style={{ background: '#F8F9FA' }}>
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-10">
              <div className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: '#E87722' }}>
                {Tc.campusLifeLabel}
              </div>
              <h2
                className="text-3xl font-bold"
                style={{ fontFamily: '"DM Serif Display", serif', color: '#1A2B4A' }}
              >
                {Tc.campusLifeTitle}
              </h2>
              <div className="w-14 h-1 mx-auto mt-4 rounded-full" style={{ background: '#E87722' }} />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {['campus-05.jpg', 'campus-06.jpg', 'campus-07.jpg', 'gallery-23.jpeg', 'gallery-25.jpeg', 'campus-04.jpg'].map(
                (img, i) => (
                  <div
                    key={img}
                    className={`rounded-2xl overflow-hidden shadow-sm ${i === 0 || i === 5 ? 'md:col-span-2' : ''}`}
                    style={{ height: '220px' }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={`/images/${img}`}
                      alt="SVN Panna Campus"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                )
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
