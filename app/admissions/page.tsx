'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/site/Navbar';
import Footer from '@/components/site/Footer';

const eligibilityCards = [
  {
    icon: '📚',
    iconBg: '#FEF3EB',
    program: 'B.Ed.',
    seats: '50 Seats',
    accentColor: '#E87722',
    items: [
      'Graduation in any discipline',
      'General/OBC: min 50% marks',
      'SC/ST: min 45% marks',
      'Final year students eligible',
    ],
  },
  {
    icon: '📝',
    iconBg: '#EEF2FA',
    program: 'D.El.Ed.',
    seats: '50 Seats',
    accentColor: '#1A2B4A',
    items: ['10+2 in any stream', 'General/OBC: min 50%', 'SC/ST: min 45%'],
  },
  {
    icon: '🎓',
    iconBg: '#FEF3EB',
    program: 'B.A.B.Ed.',
    seats: '40 Seats',
    accentColor: '#E87722',
    items: ['10+2 in any stream', 'General/OBC: min 50%', 'SC/ST: min 45%'],
  },
  {
    icon: '🤲',
    iconBg: '#EEF2FA',
    program: 'D.Ed. Special',
    seats: '25 Seats',
    accentColor: '#1A2B4A',
    items: ['Graduation in any discipline', 'General/OBC: min 50%', 'SC/ST: min 45%'],
  },
  {
    icon: '🔧',
    iconBg: '#FEF3EB',
    program: 'ITI Trades',
    seats: '60 Seats',
    accentColor: '#E87722',
    items: ['Class 8 pass (Electrician)', 'Class 10 pass (Fitter)', 'No minimum % required'],
  },
];

const documents = [
  { n: 1, title: 'Academic Certificates & Marksheets', sub: '10th, 12th, and Graduation (whichever applicable)', color: '#E87722' },
  { n: 2, title: 'Transfer Certificate (TC)', sub: 'From last attended institution', color: '#E87722' },
  { n: 3, title: 'Caste/Category Certificate', sub: 'SC/ST/OBC certificate (if applicable)', color: '#E87722' },
  { n: 4, title: 'Domicile / Residence Certificate', sub: 'Madhya Pradesh residency proof', color: '#E87722' },
  { n: 5, title: 'Aadhar Card & Passport Photos', sub: 'Valid government ID + 4 recent passport photographs', color: '#E87722' },
  { n: 6, title: 'Character Certificate', sub: 'From last attended institution or gazetted officer', color: '#1A2B4A' },
];

const importantDates = [
  { month: 'MAY', day: '1', title: 'Admissions Open', desc: 'Application forms available online and at the college', highlight: true },
  { month: 'JUL', day: '31', title: 'Last Date to Apply', desc: 'Deadline for all program applications (subject to seats)', highlight: false },
  { month: 'AUG', day: '15', title: 'Document Verification', desc: 'Selected candidates called for document verification', highlight: false },
  { month: 'SEP', day: '1', title: 'Academic Session Begins', desc: 'Orientation and commencement of classes', highlight: false },
];

export default function AdmissionsPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

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
              <span style={{ color: 'rgba(255,255,255,0.8)' }}>Admissions</span>
            </div>
            <h1
              className="font-bold text-white mb-3"
              style={{ fontFamily: '"DM Serif Display", serif', fontSize: 'clamp(2rem,4vw,3rem)' }}
            >
              Admissions 2026–27
            </h1>
            <p className="max-w-xl text-sm leading-relaxed" style={{ color: 'rgba(186,210,255,0.75)' }}>
              Applications are now open for all programs. Secure your seat in one of Central India&apos;s
              leading teacher education colleges.
            </p>
          </div>
        </section>

        {/* ADMISSIONS OPEN BANNER */}
        <section
          className="py-8"
          style={{ background: 'linear-gradient(135deg, #E87722 0%, #C85E0A 100%)' }}
        >
          <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-xl"
                style={{ background: 'rgba(255,255,255,0.2)' }}
              >
                🎓
              </div>
              <div>
                <div className="font-bold text-white text-lg">
                  Admissions Open for Academic Year 2026–27
                </div>
                <div className="text-sm" style={{ color: 'rgba(255,255,255,0.85)' }}>
                  Limited seats available — B.Ed. | D.El.Ed. | B.A.B.Ed. | D.Ed. Special | ITI
                </div>
              </div>
            </div>
            <a
              href="#apply"
              className="px-6 py-2.5 bg-white font-semibold rounded-full text-sm flex-shrink-0 transition-all hover:shadow-lg"
              style={{ color: '#E87722' }}
            >
              Apply Now →
            </a>
          </div>
        </section>

        {/* ELIGIBILITY */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-14">
              <div
                className="text-xs font-semibold tracking-widest uppercase mb-2"
                style={{ color: '#E87722' }}
              >
                Who Can Apply
              </div>
              <h2
                className="text-3xl font-bold"
                style={{ fontFamily: '"DM Serif Display", serif', color: '#1A2B4A' }}
              >
                Eligibility Criteria
              </h2>
              <div className="w-14 h-1 mx-auto mt-4 rounded-full" style={{ background: '#E87722' }} />
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {eligibilityCards.map((card) => (
                <div
                  key={card.program}
                  className="rounded-2xl border border-gray-100 p-6 shadow-sm"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
                      style={{ background: card.iconBg }}
                    >
                      {card.icon}
                    </div>
                    <div>
                      <div className="font-bold" style={{ color: '#1A2B4A' }}>
                        {card.program}
                      </div>
                      <span className="text-xs" style={{ color: '#E87722' }}>
                        {card.seats}
                      </span>
                    </div>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-600">
                    {card.items.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span
                          className="w-4 h-4 rounded-full flex items-center justify-center text-white text-xs flex-shrink-0 mt-0.5"
                          style={{ background: card.accentColor }}
                        >
                          ✓
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              {/* Help card */}
              <div
                className="rounded-2xl p-6 flex flex-col justify-center items-center text-center"
                style={{ background: '#FEF3EB' }}
              >
                <div className="text-4xl mb-3">📞</div>
                <div className="font-bold mb-2" style={{ color: '#1A2B4A' }}>
                  Need Help?
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  Contact Dr. Arvind Singh for admissions guidance
                </p>
                <a href="tel:+917987021244" className="text-sm font-semibold" style={{ color: '#E87722' }}>
                  +91-7987021244
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* PROCESS TIMELINE */}
        <section className="py-20" style={{ background: '#F8F9FA' }}>
          <div className="max-w-5xl mx-auto px-4">
            <div className="text-center mb-14">
              <div
                className="text-xs font-semibold tracking-widest uppercase mb-2"
                style={{ color: '#E87722' }}
              >
                Step by Step
              </div>
              <h2
                className="text-3xl font-bold"
                style={{ fontFamily: '"DM Serif Display", serif', color: '#1A2B4A' }}
              >
                Admission Process
              </h2>
              <div className="w-14 h-1 mx-auto mt-4 rounded-full" style={{ background: '#E87722' }} />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  n: 1,
                  title: 'Check Eligibility',
                  desc: 'Review program requirements and confirm you meet the minimum academic criteria.',
                },
                {
                  n: 2,
                  title: 'Fill Application',
                  desc: 'Complete the online or offline application form with accurate personal and academic details.',
                },
                {
                  n: 3,
                  title: 'Document Verification',
                  desc: 'Submit required documents for review by the admissions committee at the college office.',
                },
                {
                  n: 4,
                  title: 'Enrollment & Fees',
                  desc: 'Pay fees and complete enrollment formalities. Receive your student ID and program schedule.',
                },
              ].map((step) => (
                <div key={step.n} className="text-center">
                  <div className="flex justify-center mb-4">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg"
                      style={{ background: '#E87722' }}
                    >
                      {step.n}
                    </div>
                  </div>
                  <h3 className="font-semibold mb-2 text-sm" style={{ color: '#1A2B4A' }}>
                    {step.title}
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DOCUMENTS & DATES */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Documents */}
              <div>
                <div
                  className="text-xs font-semibold tracking-widest uppercase mb-3"
                  style={{ color: '#E87722' }}
                >
                  Be Prepared
                </div>
                <h2
                  className="text-3xl font-bold mb-6"
                  style={{ fontFamily: '"DM Serif Display", serif', color: '#1A2B4A' }}
                >
                  Required Documents
                </h2>
                <p className="text-sm text-gray-600 mb-8 leading-relaxed">
                  Please have the following documents ready in original and self-attested photocopy form
                  when visiting the college for verification:
                </p>
                <div className="space-y-3">
                  {documents.map((doc) => (
                    <div
                      key={doc.n}
                      className="flex items-center gap-3 p-4 rounded-xl border border-gray-100 bg-white shadow-sm"
                    >
                      <div
                        className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
                        style={{ background: doc.color }}
                      >
                        {doc.n}
                      </div>
                      <div>
                        <div className="font-medium text-sm" style={{ color: '#1A2B4A' }}>
                          {doc.title}
                        </div>
                        <div className="text-xs text-gray-500">{doc.sub}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Important Dates */}
              <div>
                <div
                  className="text-xs font-semibold tracking-widest uppercase mb-3"
                  style={{ color: '#E87722' }}
                >
                  Key Dates
                </div>
                <h2
                  className="text-3xl font-bold mb-6"
                  style={{ fontFamily: '"DM Serif Display", serif', color: '#1A2B4A' }}
                >
                  Important Dates 2026–27
                </h2>
                <div className="space-y-4">
                  {importantDates.map((date) => (
                    <div
                      key={date.title}
                      className="flex items-start gap-4 p-4 rounded-xl"
                      style={date.highlight ? { background: '#FEF3EB' } : { border: '1px solid #E5EAF3' }}
                    >
                      <div
                        className="w-12 h-12 rounded-xl flex flex-col items-center justify-center flex-shrink-0"
                        style={{ background: date.highlight ? '#E87722' : '#1A2B4A' }}
                      >
                        <span className="text-white text-xs font-bold">{date.month}</span>
                        <span className="text-white text-lg font-bold leading-none">{date.day}</span>
                      </div>
                      <div>
                        <div className="font-semibold text-sm" style={{ color: '#1A2B4A' }}>
                          {date.title}
                        </div>
                        <div className="text-xs text-gray-600 mt-0.5">{date.desc}</div>
                      </div>
                    </div>
                  ))}
                  <div className="rounded-xl p-4 text-sm" style={{ background: '#EEF2FA', color: '#1A2B4A' }}>
                    <div className="font-semibold mb-1">⚠️ Note on Dates</div>
                    <div className="text-xs text-gray-600">
                      Dates are indicative and subject to change based on NCTE/MCBU guidelines. Contact the
                      college for confirmed dates.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ENQUIRY FORM */}
        <section id="apply" className="py-20" style={{ background: '#F8F9FA' }}>
          <div className="max-w-3xl mx-auto px-4">
            <div className="text-center mb-12">
              <div
                className="text-xs font-semibold tracking-widest uppercase mb-2"
                style={{ color: '#E87722' }}
              >
                Get In Touch
              </div>
              <h2
                className="text-3xl font-bold"
                style={{ fontFamily: '"DM Serif Display", serif', color: '#1A2B4A' }}
              >
                Submit an Enquiry
              </h2>
              <div className="w-14 h-1 mx-auto mt-4 rounded-full" style={{ background: '#E87722' }} />
              <p className="text-sm text-gray-500 mt-4">
                Fill out this form and we&apos;ll reach out to guide you through the admissions process.
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label
                    className="block text-xs font-semibold mb-1.5"
                    style={{ color: '#1A2B4A' }}
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Your full name"
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm transition-all"
                    style={{ color: '#1A2B4A', outline: 'none' }}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#E87722';
                      e.target.style.boxShadow = '0 0 0 3px rgba(232,119,34,0.12)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#E5E7EB';
                      e.target.style.boxShadow = 'none';
                    }}
                  />
                </div>
                <div>
                  <label
                    className="block text-xs font-semibold mb-1.5"
                    style={{ color: '#1A2B4A' }}
                  >
                    Mobile Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 00000 00000"
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm transition-all"
                    style={{ color: '#1A2B4A', outline: 'none' }}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#E87722';
                      e.target.style.boxShadow = '0 0 0 3px rgba(232,119,34,0.12)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#E5E7EB';
                      e.target.style.boxShadow = 'none';
                    }}
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold mb-1.5" style={{ color: '#1A2B4A' }}>
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm transition-all"
                  style={{ color: '#1A2B4A', outline: 'none' }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#E87722';
                    e.target.style.boxShadow = '0 0 0 3px rgba(232,119,34,0.12)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#E5E7EB';
                    e.target.style.boxShadow = 'none';
                  }}
                />
              </div>

              <div>
                <label className="block text-xs font-semibold mb-1.5" style={{ color: '#1A2B4A' }}>
                  Program of Interest *
                </label>
                <select
                  required
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm transition-all bg-white"
                  style={{ color: '#1A2B4A', outline: 'none' }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#E87722';
                    e.target.style.boxShadow = '0 0 0 3px rgba(232,119,34,0.12)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#E5E7EB';
                    e.target.style.boxShadow = 'none';
                  }}
                >
                  <option value="">Select a program</option>
                  <option>B.Ed. (Bachelor of Education)</option>
                  <option>D.El.Ed. (Diploma in Elementary Education)</option>
                  <option>B.A.B.Ed. (Integrated Degree)</option>
                  <option>D.Ed. Special (Special Education)</option>
                  <option>ITI – Electrician</option>
                  <option>ITI – Fitter</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold mb-1.5" style={{ color: '#1A2B4A' }}>
                  Highest Qualification
                </label>
                <input
                  type="text"
                  placeholder="e.g. B.A. (Pass), 65%"
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm transition-all"
                  style={{ color: '#1A2B4A', outline: 'none' }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#E87722';
                    e.target.style.boxShadow = '0 0 0 3px rgba(232,119,34,0.12)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#E5E7EB';
                    e.target.style.boxShadow = 'none';
                  }}
                />
              </div>

              <div>
                <label className="block text-xs font-semibold mb-1.5" style={{ color: '#1A2B4A' }}>
                  Message / Questions
                </label>
                <textarea
                  rows={4}
                  placeholder="Any questions about the program, fees, or process?"
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm transition-all resize-none"
                  style={{ color: '#1A2B4A', outline: 'none' }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#E87722';
                    e.target.style.boxShadow = '0 0 0 3px rgba(232,119,34,0.12)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#E5E7EB';
                    e.target.style.boxShadow = 'none';
                  }}
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-full font-semibold text-white text-sm transition-all hover:shadow-lg hover:scale-[1.01]"
                style={{ background: submitted ? '#2D7A3A' : '#E87722' }}
              >
                {submitted ? 'Submitted ✓' : 'Submit Enquiry →'}
              </button>

              {submitted && (
                <div
                  className="rounded-xl p-4 text-center text-sm font-medium"
                  style={{ background: '#FEF3EB', color: '#C85E0A' }}
                >
                  ✅ Your enquiry has been submitted. We&apos;ll contact you soon!
                </div>
              )}

              <p className="text-xs text-center text-gray-400">
                Or call us directly at{' '}
                <a href="tel:+917987021244" className="font-medium" style={{ color: '#E87722' }}>
                  +91-7987021244
                </a>
              </p>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
