'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Navbar from '@/components/site/Navbar';
import Footer from '@/components/site/Footer';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/lib/translations';
import type { FacultyMember, GalleryImage } from '@/lib/data';

export default function AboutPage() {
  const { lang } = useLanguage();
  const T = translations[lang];
  const Ta = T.about;
  const Tc = T.common;

  const [faculty, setFaculty] = useState<FacultyMember[]>([]);
  const [gallery, setGallery] = useState<GalleryImage[]>([]);

  useEffect(() => {
    fetch('/api/faculty').then(r => r.json()).then(setFaculty);
    fetch('/api/gallery').then(r => r.json()).then((data: GalleryImage[]) =>
      setGallery(data.sort((a, b) => a.order - b.order))
    );
  }, []);

  const name = (f: FacultyMember) => f.name[lang] || f.name.en;
  const desig = (f: FacultyMember) => f.designation[lang] || f.designation.en;

  const galleryHero = gallery[3]; // order 4
  const galleryRow2 = gallery.slice(1, 7); // orders 2-7
  const galleryRow3 = gallery.slice(8, 12); // orders 9-12

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

        {/* FACULTY */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-14">
              <div className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: '#E87722' }}>
                {Ta.facultyLabel}
              </div>
              <h2 className="text-3xl font-bold" style={{ fontFamily: '"DM Serif Display", serif', color: '#1A2B4A' }}>
                {Ta.facultyTitle}
              </h2>
              <div className="w-14 h-1 mx-auto mt-4 rounded-full" style={{ background: '#E87722' }} />
            </div>

            {/* Principal */}
            <div className="mb-10">
              <div className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: '#1A2B4A' }}>
                {Ta.facultyPrincipalLabel}
              </div>
              {faculty.filter(f => f.role === 'principal').map(f => (
                <div key={f.id} className="inline-flex items-center gap-4 bg-white rounded-2xl px-6 py-4 shadow-sm border border-gray-100" style={{ borderLeft: '4px solid #E87722' }}>
                  <div className="w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold text-white flex-shrink-0" style={{ background: '#E87722' }}>
                    {name(f).charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-base" style={{ color: '#1A2B4A' }}>{name(f)}</div>
                    <div className="text-sm" style={{ color: '#E87722' }}>{desig(f)}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Lecturers */}
            <div className="mb-10">
              <div className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: '#1A2B4A' }}>
                {Ta.facultyLecturersLabel}
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {faculty.filter(f => f.role === 'lecturer').map(f => (
                  <div key={f.id} className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 shadow-sm border border-gray-100 hover:-translate-y-0.5 transition-transform duration-200">
                    <div className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold text-white flex-shrink-0" style={{ background: '#1A2B4A' }}>
                      {name(f).charAt(0)}
                    </div>
                    <div>
                      <div className="font-medium text-sm" style={{ color: '#1A2B4A' }}>{name(f)}</div>
                      <div className="text-xs text-gray-400">{desig(f)}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Specialized Teachers */}
            <div>
              <div className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: '#1A2B4A' }}>
                {Ta.facultySpecializedLabel}
              </div>
              <div className="flex flex-wrap gap-4">
                {faculty.filter(f => f.role === 'specialized').map(f => (
                  <div key={f.id} className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 shadow-sm border border-gray-100">
                    <div className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0" style={{ background: '#FEF3EB', color: '#E87722' }}>
                      {name(f).charAt(0)}
                    </div>
                    <div>
                      <div className="font-medium text-sm" style={{ color: '#1A2B4A' }}>{name(f)}</div>
                      <div className="text-xs" style={{ color: '#E87722' }}>{desig(f)}</div>
                    </div>
                  </div>
                ))}
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
                {galleryHero && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={galleryHero.src} alt={galleryHero.alt[lang] || galleryHero.alt.en} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                )}
              </div>
            </div>

            {/* 6-column grid */}
            {galleryRow2.length > 0 && (
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-3">
                {galleryRow2.map((item) => (
                  <div key={item.id} className="rounded-xl overflow-hidden aspect-square relative group">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={item.src} alt={item.alt[lang] || item.alt.en} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute bottom-0 left-0 right-0 px-2 py-1.5 text-xs text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ background: 'rgba(26,43,74,0.78)' }}>
                      {item.caption[lang] || item.caption.en}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Bottom row */}
            {galleryRow3.length > 0 && (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {galleryRow3.map((item) => (
                  <div key={item.id} className="rounded-xl overflow-hidden relative group" style={{ height: '180px' }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={item.src} alt={item.alt[lang] || item.alt.en} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute bottom-0 left-0 right-0 px-3 py-2 text-xs text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ background: 'rgba(26,43,74,0.78)' }}>
                      {item.caption[lang] || item.caption.en}
                    </div>
                  </div>
                ))}
              </div>
            )}
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
