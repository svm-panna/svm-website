'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/site/Navbar';
import Footer from '@/components/site/Footer';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/lib/translations';

export default function AdmissionsPage() {
  const [submitted, setSubmitted] = useState(false);
  const { lang } = useLanguage();
  const T = translations[lang];
  const Ta = T.admissions;

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  const inputStyle = { color: '#1A2B4A', outline: 'none' };
  const focusHandlers = {
    onFocus: (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      e.target.style.borderColor = '#E87722';
      e.target.style.boxShadow = '0 0 0 3px rgba(232,119,34,0.12)';
    },
    onBlur: (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      e.target.style.borderColor = '#E5E7EB';
      e.target.style.boxShadow = 'none';
    },
  };

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
              <span style={{ color: 'rgba(255,255,255,0.8)' }}>{Ta.breadcrumb}</span>
            </div>
            <h1
              className="font-bold text-white mb-3"
              style={{ fontFamily: '"DM Serif Display", serif', fontSize: 'clamp(2rem,4vw,3rem)' }}
            >
              {Ta.heroTitle}
            </h1>
            <p className="max-w-xl text-sm leading-relaxed" style={{ color: 'rgba(186,210,255,0.75)' }}>
              {Ta.heroDesc}
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
                <div className="font-bold text-white text-lg">{Ta.bannerTitle}</div>
                <div className="text-sm" style={{ color: 'rgba(255,255,255,0.85)' }}>
                  {Ta.bannerDesc}
                </div>
              </div>
            </div>
            <a
              href="#apply"
              className="px-6 py-2.5 bg-white font-semibold rounded-full text-sm flex-shrink-0 transition-all hover:shadow-lg"
              style={{ color: '#E87722' }}
            >
              {Ta.applyNowArrow}
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
                {Ta.whoCanApply}
              </div>
              <h2
                className="text-3xl font-bold"
                style={{ fontFamily: '"DM Serif Display", serif', color: '#1A2B4A' }}
              >
                {Ta.eligibilityTitle}
              </h2>
              <div className="w-14 h-1 mx-auto mt-4 rounded-full" style={{ background: '#E87722' }} />
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {Ta.eligibilityCards.map((card) => (
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
                      <div className="font-bold" style={{ color: '#1A2B4A' }}>{card.program}</div>
                      <span className="text-xs" style={{ color: '#E87722' }}>{card.seats}</span>
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
                <div className="font-bold mb-2" style={{ color: '#1A2B4A' }}>{Ta.needHelp}</div>
                <p className="text-sm text-gray-600 mb-4">{Ta.needHelpDesc}</p>
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
                {Ta.stepByStep}
              </div>
              <h2
                className="text-3xl font-bold"
                style={{ fontFamily: '"DM Serif Display", serif', color: '#1A2B4A' }}
              >
                {Ta.admissionProcess}
              </h2>
              <div className="w-14 h-1 mx-auto mt-4 rounded-full" style={{ background: '#E87722' }} />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {Ta.admissionSteps.map((step) => (
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
                  {Ta.bePrepared}
                </div>
                <h2
                  className="text-3xl font-bold mb-6"
                  style={{ fontFamily: '"DM Serif Display", serif', color: '#1A2B4A' }}
                >
                  {Ta.requiredDocs}
                </h2>
                <p className="text-sm text-gray-600 mb-8 leading-relaxed">{Ta.docsIntro}</p>
                <div className="space-y-3">
                  {Ta.documents.map((doc) => (
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
                        <div className="font-medium text-sm" style={{ color: '#1A2B4A' }}>{doc.title}</div>
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
                  {Ta.keyDates}
                </div>
                <h2
                  className="text-3xl font-bold mb-6"
                  style={{ fontFamily: '"DM Serif Display", serif', color: '#1A2B4A' }}
                >
                  {Ta.importantDates}
                </h2>
                <div className="space-y-4">
                  {Ta.importantDatesData.map((date) => (
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
                        <div className="font-semibold text-sm" style={{ color: '#1A2B4A' }}>{date.title}</div>
                        <div className="text-xs text-gray-600 mt-0.5">{date.desc}</div>
                      </div>
                    </div>
                  ))}
                  <div className="rounded-xl p-4 text-sm" style={{ background: '#EEF2FA', color: '#1A2B4A' }}>
                    <div className="font-semibold mb-1">{Ta.noteDates}</div>
                    <div className="text-xs text-gray-600">{Ta.noteDatesDesc}</div>
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
                {Ta.getInTouch}
              </div>
              <h2
                className="text-3xl font-bold"
                style={{ fontFamily: '"DM Serif Display", serif', color: '#1A2B4A' }}
              >
                {Ta.submitEnquiry}
              </h2>
              <div className="w-14 h-1 mx-auto mt-4 rounded-full" style={{ background: '#E87722' }} />
              <p className="text-sm text-gray-500 mt-4">{Ta.enquiryDesc}</p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold mb-1.5" style={{ color: '#1A2B4A' }}>
                    {Ta.fullName}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={Ta.namePlaceholder}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm transition-all"
                    style={inputStyle}
                    {...focusHandlers}
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold mb-1.5" style={{ color: '#1A2B4A' }}>
                    {Ta.mobileNumber}
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder={Ta.phonePlaceholder}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm transition-all"
                    style={inputStyle}
                    {...focusHandlers}
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold mb-1.5" style={{ color: '#1A2B4A' }}>
                  {Ta.emailAddress}
                </label>
                <input
                  type="email"
                  placeholder={Ta.emailPlaceholder}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm transition-all"
                  style={inputStyle}
                  {...focusHandlers}
                />
              </div>

              <div>
                <label className="block text-xs font-semibold mb-1.5" style={{ color: '#1A2B4A' }}>
                  {Ta.programOfInterest}
                </label>
                <select
                  required
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm transition-all bg-white"
                  style={inputStyle}
                  {...focusHandlers}
                >
                  <option value="">{Ta.selectProgram}</option>
                  {Ta.programOptions.map((opt) => (
                    <option key={opt}>{opt}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold mb-1.5" style={{ color: '#1A2B4A' }}>
                  {Ta.highestQualification}
                </label>
                <input
                  type="text"
                  placeholder={Ta.qualificationPlaceholder}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm transition-all"
                  style={inputStyle}
                  {...focusHandlers}
                />
              </div>

              <div>
                <label className="block text-xs font-semibold mb-1.5" style={{ color: '#1A2B4A' }}>
                  {Ta.messageQuestions}
                </label>
                <textarea
                  rows={4}
                  placeholder={Ta.messagePlaceholder}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm transition-all resize-none"
                  style={inputStyle}
                  {...focusHandlers}
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-full font-semibold text-white text-sm transition-all hover:shadow-lg hover:scale-[1.01]"
                style={{ background: submitted ? '#2D7A3A' : '#E87722' }}
              >
                {submitted ? Ta.submittedBtn : Ta.submitBtn}
              </button>

              {submitted && (
                <div
                  className="rounded-xl p-4 text-center text-sm font-medium"
                  style={{ background: '#FEF3EB', color: '#C85E0A' }}
                >
                  {Ta.successMsg}
                </div>
              )}

              <p className="text-xs text-center text-gray-400">
                {Ta.callUs}{' '}
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
