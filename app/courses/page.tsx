'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/site/Navbar';
import Footer from '@/components/site/Footer';
import { Metadata } from 'next';

const programs = [
  {
    id: 'bed',
    short: 'Bachelor of Education (B.Ed.)',
    badge: 'NCTE Recognized',
    badgeBg: '#FEF3EB',
    badgeColor: '#E87722',
    iconBg: '#FEF3EB',
    duration: '2 Years',
    seats: '50',
    eligibility: 'Graduation Required',
    details: {
      duration: '2 Years',
      seats: '50',
      affiliation: 'MCBU',
      recognition: 'NCTE',
      level: 'PG Diploma',
    },
    description:
      'The B.Ed. program is a 2-year professional degree designed to prepare graduates for teaching at the secondary and higher secondary levels. Students develop deep understanding of pedagogy, subject specialization, classroom management, and educational psychology through a blend of theoretical study and school-based practice teaching.',
    highlights: [
      'Practical teaching internship',
      'Educational psychology & pedagogy',
      'Subject specialization options',
      'MCBU affiliated examinations',
    ],
    eligibilityList: [
      'Graduation in any discipline',
      'SC/ST: minimum 45% marks',
      'OBC/General: minimum 50%',
      'Final year students also eligible',
    ],
    icon: (
      <svg viewBox="0 0 28 28" className="w-7 h-7" fill="none">
        <path d="M14 3L3 9l11 5.5L25 9 14 3z" fill="#E87722" />
        <path d="M3 14l11 5.5L25 14" stroke="#E87722" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 'deled',
    short: 'Diploma in Elementary Education (D.El.Ed.)',
    badge: 'NCTE Recognized',
    badgeBg: '#EEF2FA',
    badgeColor: '#1A2B4A',
    iconBg: '#EEF2FA',
    duration: '2 Years',
    seats: '50',
    eligibility: '10+2 Required',
    details: {
      duration: '2 Years',
      seats: '50',
      affiliation: 'MCBU',
      recognition: 'NCTE',
      level: 'Diploma',
    },
    description:
      'D.El.Ed. prepares teachers for primary and elementary education (Classes 1–8). The curriculum integrates child development, language learning, mathematics pedagogy, and experiential teaching methodologies — making graduates eligible for government and private school appointments at the elementary level.',
    highlights: [
      'Child development & psychology',
      'School internship program',
      'RTE Act compliant training',
      'Govt. school eligibility',
    ],
    eligibilityList: ['10+2 in any stream', 'SC/ST: minimum 45%', 'General/OBC: minimum 50%'],
    icon: (
      <svg viewBox="0 0 28 28" className="w-7 h-7" fill="none">
        <rect x="5" y="7" width="18" height="14" rx="2" fill="#1A2B4A" opacity="0.8" />
        <path d="M9 12h10M9 16h6" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 'babed',
    short: 'Integrated B.A. + B.Ed. (B.A.B.Ed.)',
    badge: 'NCTE Recognized',
    badgeBg: '#FEF3EB',
    badgeColor: '#E87722',
    iconBg: '#FEF3EB',
    duration: '4 Years',
    seats: '40',
    eligibility: '10+2 Required',
    details: {
      duration: '4 Years',
      seats: '40',
      affiliation: 'MCBU',
      recognition: 'NCTE',
      level: 'Integrated UG',
    },
    description:
      'The integrated B.A.B.Ed. program combines a Bachelor of Arts degree with a Bachelor of Education qualification into a seamless 4-year curriculum. Graduates earn a dual qualification, saving time and being better prepared for school teaching with both subject expertise and pedagogical skills.',
    highlights: [
      'Dual degree in 4 years',
      'Arts specializations available',
      'Integrated pedagogy training',
      'Cost-effective pathway',
    ],
    eligibilityList: ['10+2 in any stream', 'SC/ST: minimum 45%', 'General/OBC: minimum 50%'],
    icon: (
      <svg viewBox="0 0 28 28" className="w-7 h-7" fill="none">
        <path d="M14 2L2 8l12 6 12-6-12-6z" fill="#E87722" />
        <path d="M6 11v8M22 11v8" stroke="#1A2B4A" strokeWidth="1.5" strokeLinecap="round" />
        <rect x="4" y="19" width="4" height="4" rx="1" fill="#1A2B4A" />
        <rect x="20" y="19" width="4" height="4" rx="1" fill="#1A2B4A" />
      </svg>
    ),
  },
];

const smallPrograms = [
  {
    id: 'dspecial',
    short: 'D.Ed. (Special Education)',
    duration: '2 Years',
    seats: '25',
    eligibility: 'Graduation',
    iconBg: '#FEF3EB',
    accentColor: '#E87722',
    description:
      'Specialized diploma for teaching children with hearing, visual, intellectual, or learning disabilities. Graduates work in special schools, inclusive education programs, and rehabilitation centers across India.',
    highlights: [
      'Special education methodologies',
      'Inclusive education training',
      'Rehabilitation techniques',
    ],
    icon: (
      <svg viewBox="0 0 28 28" className="w-6 h-6" fill="none">
        <circle cx="14" cy="10" r="4" fill="#E87722" opacity="0.3" />
        <circle cx="14" cy="10" r="2.5" fill="#E87722" />
        <path d="M7 24c0-3.866 3.134-7 7-7s7 3.134 7 7" stroke="#E87722" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 'iti',
    short: 'ITI — Electrician & Fitter',
    duration: '1–2 Years',
    seats: '60',
    eligibility: 'Class 8/10',
    iconBg: '#EEF2FA',
    accentColor: '#1A2B4A',
    description:
      'Industrial Training Institute courses in Electrician and Fitter trades — providing hands-on vocational training for immediate employment in industrial, construction, and technical sectors across India.',
    highlights: ['Practical workshop training', 'NSQF level certification', 'Industry-ready skills'],
    icon: (
      <svg viewBox="0 0 28 28" className="w-6 h-6" fill="none">
        <circle cx="14" cy="14" r="7" stroke="#1A2B4A" strokeWidth="1.5" fill="none" />
        <path d="M14 10v4l3 2" stroke="#1A2B4A" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M8 24h12" stroke="#E87722" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
];

const faqs = [
  {
    q: 'Are scholarships available for students?',
    a: 'Yes. SC/ST/OBC students may be eligible for state government scholarships. Additionally, as an NGO-run institution, we maintain affordable fee structures and may offer need-based concessions on a case-by-case basis. Contact the admissions office for details.',
  },
  {
    q: 'What is the examination and assessment pattern?',
    a: 'Examinations are conducted by MCBU (Mahatma Chhatrasala University) for all teacher education programs. Assessment includes theory examinations, practical sessions, school internship evaluations, and continuous internal assessment throughout the academic year.',
  },
  {
    q: 'Is hostel accommodation available?',
    a: 'Hostel facilities are not currently available on campus. However, the college can help connect outstation students with appropriate private accommodation options near the campus in Panna town. Please contact us for guidance.',
  },
  {
    q: 'After completing B.Ed., what career options are available?',
    a: 'B.Ed. graduates are eligible for TET (Teacher Eligibility Test), MPTET, CTET, and state government teacher recruitment exams. Career paths include: government school teacher, private school teacher, coaching center faculty, educational NGO roles, and further M.Ed. studies.',
  },
];

const overviewRows = [
  { program: 'B.Ed.', duration: '2 Years', eligibility: 'Graduation', marks: '50% (Gen) / 45% (SC/ST)', seats: '50', affil: 'NCTE / MCBU' },
  { program: 'D.El.Ed.', duration: '2 Years', eligibility: '10+2', marks: '50% (Gen) / 45% (SC/ST)', seats: '50', affil: 'NCTE / MCBU' },
  { program: 'B.A.B.Ed.', duration: '4 Years', eligibility: '10+2', marks: '50% (Gen) / 45% (SC/ST)', seats: '40', affil: 'NCTE / MCBU' },
  { program: 'D.Ed. Special', duration: '2 Years', eligibility: 'Graduation', marks: '50% (Gen) / 45% (SC/ST)', seats: '25', affil: 'NCTE / MCBU' },
  { program: 'ITI Trades', duration: '1–2 Years', eligibility: 'Class 8/10', marks: 'Pass', seats: '60', affil: 'DVET / Govt.' },
];

export default function CoursesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

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
                Home
              </Link>
              <span className="mx-2">/</span>
              <span style={{ color: 'rgba(255,255,255,0.8)' }}>Academic Programs</span>
            </div>
            <h1
              className="font-bold text-white mb-3"
              style={{ fontFamily: '"DM Serif Display", serif', fontSize: 'clamp(2rem,4vw,3rem)' }}
            >
              Academic Programs
            </h1>
            <p
              className="max-w-xl text-sm leading-relaxed"
              style={{ color: 'rgba(186,210,255,0.75)' }}
            >
              NCTE & UGC recognized programs designed to create skilled, empathetic, and effective
              educators for India&apos;s classrooms.
            </p>
          </div>
        </section>

        {/* PROGRAMS DETAIL */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-14">
              <div className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: '#E87722' }}>
                All Programs
              </div>
              <h2
                className="text-3xl font-bold"
                style={{ fontFamily: '"DM Serif Display", serif', color: '#1A2B4A' }}
              >
                Choose Your Path
              </h2>
              <div className="w-14 h-1 mx-auto mt-4 rounded-full" style={{ background: '#E87722' }} />
            </div>

            <div className="space-y-8">
              {programs.map((p) => (
                <div
                  key={p.id}
                  id={p.id}
                  className="program-card bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden"
                >
                  <div className="grid lg:grid-cols-3">
                    <div className="p-8 lg:col-span-2">
                      <div className="flex items-start gap-4 mb-5">
                        <div
                          className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                          style={{ background: p.iconBg }}
                        >
                          {p.icon}
                        </div>
                        <div>
                          <div className="flex flex-wrap items-center gap-2 mb-1">
                            <h3
                              className="text-2xl font-bold"
                              style={{ fontFamily: '"DM Serif Display", serif', color: '#1A2B4A' }}
                            >
                              {p.short}
                            </h3>
                            <span
                              className="text-xs font-semibold px-2.5 py-1 rounded-full"
                              style={{ background: p.badgeBg, color: p.badgeColor }}
                            >
                              {p.badge}
                            </span>
                          </div>
                          <div className="flex flex-wrap gap-3 text-xs text-gray-500">
                            <span>⏱ {p.duration}</span>
                            <span>👥 {p.seats} Seats</span>
                            <span>🎓 {p.eligibility}</span>
                            <span>📍 Panna, MP</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 leading-relaxed mb-5">{p.description}</p>
                      <div className="grid sm:grid-cols-2 gap-4 mb-6">
                        <div>
                          <h4
                            className="text-xs font-semibold uppercase tracking-wide mb-2"
                            style={{ color: '#1A2B4A' }}
                          >
                            Key Highlights
                          </h4>
                          <ul className="space-y-1.5 text-xs text-gray-600">
                            {p.highlights.map((h) => (
                              <li key={h} className="flex items-center gap-2">
                                <span
                                  className="w-4 h-4 rounded-full flex items-center justify-center text-white text-xs flex-shrink-0"
                                  style={{ background: '#E87722' }}
                                >
                                  ✓
                                </span>
                                {h}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4
                            className="text-xs font-semibold uppercase tracking-wide mb-2"
                            style={{ color: '#1A2B4A' }}
                          >
                            Eligibility
                          </h4>
                          <ul className="space-y-1.5 text-xs text-gray-600">
                            {p.eligibilityList.map((e) => (
                              <li key={e} className="flex items-center gap-2">
                                <span
                                  className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                                  style={{ background: '#E87722' }}
                                />
                                {e}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div
                      className="p-8 flex flex-col justify-between"
                      style={{ background: '#F8F9FA', borderLeft: '1px solid #E5EAF3' }}
                    >
                      <div>
                        <h4 className="font-semibold text-sm mb-4" style={{ color: '#1A2B4A' }}>
                          Program Details
                        </h4>
                        <div className="space-y-3 text-sm mb-6">
                          {Object.entries(p.details).map(([k, v]) => (
                            <div key={k} className="flex justify-between">
                              <span className="text-gray-500 capitalize">{k}</span>
                              <span className="font-medium" style={{ color: '#1A2B4A' }}>
                                {v}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="space-y-3">
                        <Link
                          href="/admissions#apply"
                          className="block text-center px-5 py-2.5 rounded-full text-sm font-semibold text-white transition-all hover:shadow-md"
                          style={{ background: '#E87722' }}
                        >
                          Apply Now
                        </Link>
                        <a
                          href="#"
                          className="block text-center px-5 py-2.5 rounded-full text-sm font-semibold border-2 transition-all hover:bg-gray-50"
                          style={{ borderColor: '#1A2B4A', color: '#1A2B4A' }}
                        >
                          Download Syllabus
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* D.Ed. Special & ITI side by side */}
              <div className="grid md:grid-cols-2 gap-8">
                {smallPrograms.map((p) => (
                  <div
                    key={p.id}
                    id={p.id}
                    className="program-card bg-white border border-gray-100 rounded-2xl p-7 shadow-sm"
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ background: p.iconBg }}
                      >
                        {p.icon}
                      </div>
                      <div>
                        <h3
                          className="text-xl font-bold"
                          style={{ fontFamily: '"DM Serif Display", serif', color: '#1A2B4A' }}
                        >
                          {p.short}
                        </h3>
                        <div className="flex flex-wrap gap-2 mt-1 text-xs text-gray-500">
                          <span>⏱ {p.duration}</span>
                          <span>👥 {p.seats} Seats</span>
                          <span>🎓 {p.eligibility}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed mb-4">{p.description}</p>
                    <ul className="space-y-1.5 text-xs text-gray-600 mb-6">
                      {p.highlights.map((h) => (
                        <li key={h} className="flex items-center gap-2">
                          <span
                            className="w-4 h-4 rounded-full flex items-center justify-center text-white text-xs flex-shrink-0"
                            style={{ background: p.accentColor }}
                          >
                            ✓
                          </span>
                          {h}
                        </li>
                      ))}
                    </ul>
                    <div className="flex gap-3">
                      <Link
                        href="/admissions#apply"
                        className="flex-1 text-center px-4 py-2.5 rounded-full text-xs font-semibold text-white"
                        style={{ background: '#E87722' }}
                      >
                        Apply Now
                      </Link>
                      <a
                        href="#"
                        className="flex-1 text-center px-4 py-2.5 rounded-full text-xs font-semibold border-2 hover:bg-gray-50"
                        style={{ borderColor: '#1A2B4A', color: '#1A2B4A' }}
                      >
                        Details
                      </a>
                    </div>
                  </div>
                ))}
              </div>
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
                Eligibility &amp; Program Overview
              </h2>
              <div className="w-14 h-1 mx-auto mt-4 rounded-full" style={{ background: '#E87722' }} />
            </div>
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr style={{ background: '#1A2B4A' }}>
                      {['Program', 'Duration', 'Eligibility', 'Min. Marks', 'Seats', 'Affiliation'].map(
                        (h) => (
                          <th
                            key={h}
                            className="text-left px-5 py-4 text-white font-semibold text-xs uppercase tracking-wide"
                          >
                            {h}
                          </th>
                        )
                      )}
                    </tr>
                  </thead>
                  <tbody>
                    {overviewRows.map((row, i) => (
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

        {/* HOW TO APPLY */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4">
            <div className="text-center mb-14">
              <h2
                className="text-3xl font-bold"
                style={{ fontFamily: '"DM Serif Display", serif', color: '#1A2B4A' }}
              >
                How to Apply
              </h2>
              <div className="w-14 h-1 mx-auto mt-4 rounded-full" style={{ background: '#E87722' }} />
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  n: 1,
                  title: 'Download Form',
                  desc: 'Get the application form from our website or visit the college in person.',
                },
                {
                  n: 2,
                  title: 'Fill & Submit',
                  desc: 'Complete the form accurately and submit it with all required documents.',
                },
                {
                  n: 3,
                  title: 'Verification',
                  desc: 'Your documents will be verified by the admissions committee.',
                },
                {
                  n: 4,
                  title: 'Enrollment',
                  desc: 'Pay fees and confirm enrollment. Welcome to SVN Panna!',
                },
              ].map((step) => (
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
                  <p className="text-xs text-gray-500 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-10">
              <Link
                href="/admissions#apply"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-white transition-all hover:shadow-lg"
                style={{ background: '#E87722' }}
              >
                Start Your Application →
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
                Frequently Asked Questions
              </h2>
              <div className="w-14 h-1 mx-auto mt-4 rounded-full" style={{ background: '#E87722' }} />
            </div>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
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
                    <div className="px-5 pb-5 text-sm text-gray-600 leading-relaxed">{faq.a}</div>
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
                Campus Life
              </div>
              <h2
                className="text-3xl font-bold"
                style={{ fontFamily: '"DM Serif Display", serif', color: '#1A2B4A' }}
              >
                Life at SVN Panna
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
