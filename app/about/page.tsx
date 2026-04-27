'use client';

import Link from 'next/link';
import Navbar from '@/components/site/Navbar';
import Footer from '@/components/site/Footer';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/lib/translations';

const galleryRow2 = ['gallery-02.jpeg', 'gallery-06.jpeg', 'gallery-08.jpeg', 'gallery-11.jpeg', 'gallery-16.jpeg', 'gallery-21.jpeg'];
const galleryRow3 = ['gallery-09.jpeg', 'gallery-14.jpeg', 'gallery-18.jpeg', 'gallery-26.jpeg'];

export default function AboutPage() {
  const { lang } = useLanguage();
  const T = translations[lang];
  const Ta = T.about;
  const Tc = T.common;

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
              <Link href="/" className="hover:text-white transition-colors">{T.nav.home}</Link>
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

        {/* MISSION & VISION */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="rounded-2xl p-8 border-l-4" style={{ background: '#FEF3EB', borderColor: '#E87722' }}>
                <div className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: '#E87722' }}>
                  {Ta.missionLabel}
                </div>
                <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: '"DM Serif Display", serif', color: '#1A2B4A' }}>
                  {Ta.missionTitle.split('\n').map((line, i) => (
                    <span key={i}>{line}{i < Ta.missionTitle.split('\n').length - 1 && <br />}</span>
                  ))}
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {Ta.missionDesc}
                </p>
              </div>
              <div className="rounded-2xl p-8 border-l-4" style={{ background: '#EEF2FA', borderColor: '#1A2B4A' }}>
                <div className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: '#1A2B4A' }}>
                  {Ta.visionLabel}
                </div>
                <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: '"DM Serif Display", serif', color: '#1A2B4A' }}>
                  {Ta.visionTitle.split('\n').map((line, i) => (
                    <span key={i}>{line}{i < Ta.visionTitle.split('\n').length - 1 && <br />}</span>
                  ))}
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {Ta.visionDesc}
                </p>
              </div>
            </div>

            {/* Our Story */}
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
              <div>
                <div className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: '#E87722' }}>
                  {Ta.storyLabel}
                </div>
                <h2
                  className="text-3xl font-bold mb-5"
                  style={{ fontFamily: '"DM Serif Display", serif', color: '#1A2B4A' }}
                >
                  {Ta.storyTitle1}<br />
                  <em className="not-italic" style={{ color: '#E87722' }}>{Ta.storyTitle2}</em>
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{Ta.storyPara1}</p>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{Ta.storyPara2}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{Ta.storyPara3}</p>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg relative">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/campus-03.jpg"
                  alt="SVN Panna College Campus Building"
                  className="w-full object-cover"
                  style={{ height: '360px' }}
                />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(26,43,74,0.6), transparent 55%)' }} />
                <div className="absolute bottom-5 left-5 right-5">
                  <div className="text-white font-bold text-base">{Ta.campusName}</div>
                  <div className="text-xs mt-1" style={{ color: 'rgba(255,255,255,0.8)' }}>
                    {Ta.campusAddress}
                  </div>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
              {Ta.stats.map((s) => (
                <div
                  key={s.label}
                  className="bg-white border border-gray-100 rounded-2xl p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div
                    className="text-4xl font-bold mb-2"
                    style={{ fontFamily: '"DM Serif Display", serif', color: '#E87722' }}
                  >
                    {s.value}
                  </div>
                  <div className="text-sm font-medium" style={{ color: '#1A2B4A' }}>{s.label}</div>
                  <div className="text-xs text-gray-400 mt-1">{s.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* LEADERSHIP */}
        <section className="py-20" style={{ background: '#F8F9FA' }}>
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-14">
              <div className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: '#E87722' }}>
                {Ta.leadersLabel}
              </div>
              <h2 className="text-3xl font-bold" style={{ fontFamily: '"DM Serif Display", serif', color: '#1A2B4A' }}>
                {Ta.leadersTitle}
              </h2>
              <div className="w-14 h-1 mx-auto mt-4 rounded-full" style={{ background: '#E87722' }} />
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Chairman */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <div className="flex items-start gap-5 mb-6">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/chairman.jpg"
                    alt="Vedant Singh — Chairman"
                    className="w-16 h-16 rounded-full object-cover flex-shrink-0 shadow-md border-2 border-white"
                  />
                  <div>
                    <h3 className="text-xl font-bold" style={{ fontFamily: '"DM Serif Display", serif', color: '#1A2B4A' }}>
                      {Ta.chairmanName}
                    </h3>
                    <div className="text-sm font-semibold mt-1" style={{ color: '#E87722' }}>{Ta.chairmanTitle}</div>
                    <div className="text-xs text-gray-500 mt-0.5">{Ta.chairmanInstitution}</div>
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{Ta.chairmanDesc}</p>
                <div className="flex flex-wrap gap-2">
                  {Ta.chairmanTags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full font-medium"
                      style={{ background: '#EEF2FA', color: '#1A2B4A' }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Director */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <div className="flex items-start gap-5 mb-6">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/director.jpg"
                    alt="Dr. Arvind Singh — Director"
                    className="w-16 h-16 rounded-full object-cover flex-shrink-0 shadow-md border-2"
                    style={{ borderColor: '#E87722' }}
                  />
                  <div>
                    <h3 className="text-xl font-bold" style={{ fontFamily: '"DM Serif Display", serif', color: '#1A2B4A' }}>
                      {Ta.directorName}
                    </h3>
                    <div className="text-sm font-semibold mt-1" style={{ color: '#E87722' }}>{Ta.directorTitle}</div>
                    <div className="text-xs text-gray-500 mt-0.5">{Ta.directorSub}</div>
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{Ta.directorDesc}</p>
                <div className="flex flex-wrap gap-2">
                  {Ta.directorTags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full font-medium"
                      style={{ background: '#FEF3EB', color: '#E87722' }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* INFRASTRUCTURE */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-14">
              <div className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: '#E87722' }}>
                {Ta.facilityLabel}
              </div>
              <h2 className="text-3xl font-bold" style={{ fontFamily: '"DM Serif Display", serif', color: '#1A2B4A' }}>
                {Ta.facilityTitle}
              </h2>
              <div className="w-14 h-1 mx-auto mt-4 rounded-full" style={{ background: '#E87722' }} />
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {Ta.facilities.map((f) => (
                <div key={f.title} className="rounded-2xl p-6 border border-gray-100 shadow-sm">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4"
                    style={{ background: f.iconBg }}
                  >
                    {f.icon}
                  </div>
                  <h3 className="font-bold mb-2" style={{ color: '#1A2B4A' }}>{f.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* GALLERY */}
        <section id="gallery" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-10">
              <div className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: '#E87722' }}>
                {Ta.galleryLabel}
              </div>
              <h2 className="text-3xl font-bold" style={{ fontFamily: '"DM Serif Display", serif', color: '#1A2B4A' }}>
                {Ta.galleryTitle}
              </h2>
              <div className="w-14 h-1 mx-auto mt-4 rounded-full" style={{ background: '#E87722' }} />
              <p className="text-sm text-gray-500 mt-3">{Ta.galleryDesc}</p>
            </div>

            {/* Hero row */}
            <div className="grid grid-cols-3 gap-3 mb-3">
              <div className="col-span-2 rounded-2xl overflow-hidden" style={{ height: '280px' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/campus-01.jpg" alt="SVN Panna Main Campus" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="rounded-2xl overflow-hidden" style={{ height: '280px' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/gallery-04.jpeg" alt="SVN Panna Activities" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            </div>

            {/* 6-column grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-3">
              {galleryRow2.map((img) => (
                <div key={img} className="rounded-xl overflow-hidden aspect-square">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={`/images/${img}`} alt="SVN Panna" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
              ))}
            </div>

            {/* Bottom row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {galleryRow3.map((img) => (
                <div key={img} className="rounded-xl overflow-hidden" style={{ height: '180px' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={`/images/${img}`} alt="SVN Panna" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-14" style={{ background: 'linear-gradient(135deg, #E87722 0%, #C85E0A 100%)' }}>
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: '"DM Serif Display", serif' }}>
              {Ta.ctaTitle}
            </h2>
            <p className="text-lg mb-8" style={{ color: 'rgba(255,255,255,0.85)' }}>
              {Ta.ctaDesc}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/admissions#apply" className="px-8 py-3.5 bg-white font-semibold rounded-full transition-all hover:shadow-xl hover:scale-105" style={{ color: '#E87722' }}>
                {Tc.applyNow}
              </Link>
              <Link href="/contact" className="px-8 py-3.5 border-2 border-white text-white font-semibold rounded-full hover:bg-white/10">
                {Tc.getInTouch}
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
