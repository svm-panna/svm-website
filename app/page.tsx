import Link from 'next/link';
import Navbar from '@/components/site/Navbar';
import Footer from '@/components/site/Footer';

const programs = [
  {
    id: 'bed',
    short: 'B.Ed.',
    name: 'Bachelor of Education',
    badge: '2 Years · 50 Seats',
    badgeBg: '#FEF3EB',
    badgeColor: '#E87722',
    desc: 'Professional teacher training for secondary & higher secondary levels.',
    iconBg: '#FEF3EB',
    icon: (
      <svg viewBox="0 0 28 28" className="w-7 h-7" fill="none">
        <path d="M14 3L3 9l11 5.5L25 9 14 3z" fill="#E87722" />
        <path d="M3 14l11 5.5L25 14" stroke="#E87722" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M3 19l11 5.5L25 19" stroke="#E87722" strokeWidth="1" strokeLinecap="round" opacity="0.4" />
      </svg>
    ),
  },
  {
    id: 'deled',
    short: 'D.El.Ed.',
    name: 'Diploma in Elementary Education',
    badge: '2 Years · 50 Seats',
    badgeBg: '#FEF3EB',
    badgeColor: '#E87722',
    desc: 'Foundation program for primary & elementary school teaching.',
    iconBg: '#EEF2FA',
    icon: (
      <svg viewBox="0 0 28 28" className="w-7 h-7" fill="none">
        <rect x="5" y="7" width="18" height="14" rx="2" fill="#1A2B4A" opacity="0.8" />
        <path d="M9 12h10M9 16h6" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="21" cy="7" r="4" fill="#E87722" />
        <path d="M19.5 7l1.2 1.3L23 5.5" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: 'babed',
    short: 'B.A.B.Ed.',
    name: 'Integrated BA + BEd',
    badge: '4 Years · 40 Seats',
    badgeBg: '#EEF2FA',
    badgeColor: '#1A2B4A',
    desc: 'Integrated Arts & Education degree for aspiring school teachers.',
    iconBg: '#FEF3EB',
    icon: (
      <svg viewBox="0 0 28 28" className="w-7 h-7" fill="none">
        <path d="M14 2L2 8l12 6 12-6-12-6z" fill="#E87722" />
        <path d="M6 11v8" stroke="#1A2B4A" strokeWidth="1.5" strokeLinecap="round" />
        <rect x="4" y="19" width="4" height="4" rx="1" fill="#1A2B4A" />
        <path d="M22 11v8" stroke="#1A2B4A" strokeWidth="1.5" strokeLinecap="round" />
        <rect x="20" y="19" width="4" height="4" rx="1" fill="#1A2B4A" />
      </svg>
    ),
  },
  {
    id: 'dspecial',
    short: 'D.Ed. Special',
    name: 'Special Education Diploma',
    badge: '2 Years · 25 Seats',
    badgeBg: '#FEF3EB',
    badgeColor: '#E87722',
    desc: 'Specialized training to teach children with diverse learning needs.',
    iconBg: '#FEF3EB',
    icon: (
      <svg viewBox="0 0 28 28" className="w-7 h-7" fill="none">
        <circle cx="14" cy="10" r="4" fill="#E87722" opacity="0.25" />
        <circle cx="14" cy="10" r="2.5" fill="#E87722" />
        <path d="M7 24c0-3.866 3.134-7 7-7s7 3.134 7 7" stroke="#E87722" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M19 18.5l2.5 2.5-2.5 2.5" stroke="#1A2B4A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: 'iti',
    short: 'ITI Trades',
    name: 'Electrician & Fitter',
    badge: '1–2 Yrs · 60 Seats',
    badgeBg: '#EEF2FA',
    badgeColor: '#1A2B4A',
    desc: 'Vocational training for skilled employment in technical trades.',
    iconBg: '#EEF2FA',
    icon: (
      <svg viewBox="0 0 28 28" className="w-7 h-7" fill="none">
        <circle cx="14" cy="14" r="8" stroke="#1A2B4A" strokeWidth="1.5" fill="none" />
        <path d="M14 10v4l3 2" stroke="#1A2B4A" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M8 24h12" stroke="#E87722" strokeWidth="2" strokeLinecap="round" />
        <path d="M10 22l2-2h4l2 2" stroke="#1A2B4A" strokeWidth="1" strokeLinecap="round" />
      </svg>
    ),
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
  'gallery-01.jpeg', 'gallery-05.jpeg', 'gallery-07.jpeg', 'gallery-10.jpeg',
  'gallery-13.jpeg', 'gallery-15.jpeg', 'gallery-20.jpeg', 'gallery-24.jpeg',
];

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        {/* HERO */}
        <section
          className="hero-pattern relative overflow-hidden"
          style={{ background: 'linear-gradient(135deg,#1A2B4A 0%,#0F1C34 55%,#12203A 100%)', padding: '96px 0 112px' }}
        >
          <div
            className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10"
            style={{ background: 'radial-gradient(circle,#E87722,transparent 70%)', transform: 'translate(35%,-35%)' }}
          />
          <div
            className="absolute bottom-0 left-0 w-80 h-80 rounded-full opacity-5"
            style={{ background: 'radial-gradient(circle,#E87722,transparent 70%)', transform: 'translate(-30%,30%)' }}
          />
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="anim-up d1">
                <div
                  className="inline-flex items-center gap-2 mb-6 text-xs font-semibold tracking-widest uppercase"
                  style={{ color: '#E87722' }}
                >
                  <span className="w-8 h-px inline-block" style={{ background: '#E87722' }} />
                  NCTE Recognized · Panna, Madhya Pradesh
                </div>
                <h1
                  className="font-bold text-white leading-tight mb-6"
                  style={{ fontFamily: '"DM Serif Display", serif', fontSize: 'clamp(2.4rem,5vw,3.6rem)' }}
                >
                  Shaping
                  <br />
                  <em className="not-italic" style={{ color: '#E87722' }}>
                    Tomorrow&apos;s
                  </em>
                  <br />
                  Educators
                </h1>
                <p
                  className="text-lg leading-relaxed mb-8 max-w-lg"
                  style={{ color: 'rgba(186,210,255,0.8)' }}
                >
                  Premier NCTE &amp; UGC recognized teacher education college serving Panna, Madhya
                  Pradesh. Admissions open for academic year 2026–27.
                </p>
                <div className="flex flex-wrap gap-3 mb-10">
                  <Link
                    href="/admissions#apply"
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-white transition-all hover:shadow-xl hover:scale-105"
                    style={{ background: '#E87722' }}
                  >
                    Apply Now
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                  <Link
                    href="/courses"
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-white border-2 transition-all hover:bg-white/10"
                    style={{ borderColor: 'rgba(255,255,255,0.3)' }}
                  >
                    Explore Programs
                  </Link>
                </div>
                <div className="flex flex-wrap gap-5">
                  {['NCTE Recognized', 'MCBU Affiliated', '100% Govt. Compliant'].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 text-sm"
                      style={{ color: 'rgba(186,210,255,0.7)' }}
                    >
                      <div
                        className="w-5 h-5 rounded-full flex items-center justify-center text-xs text-white font-bold"
                        style={{ background: '#E87722' }}
                      >
                        ✓
                      </div>
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              {/* Campus Photo */}
              <div className="hidden lg:flex justify-center anim-up d3">
                <div className="relative w-full max-w-lg">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/campus-01.jpg"
                    alt="Swami Vivekanand Mahavidyalaya Campus, Panna"
                    className="w-full rounded-2xl shadow-2xl object-cover"
                    style={{ maxHeight: '420px' }}
                  />
                  <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-xl px-5 py-3 border border-gray-100">
                    <div className="text-xs text-gray-500 font-medium">Admissions Open</div>
                    <div className="font-bold text-sm" style={{ color: '#E87722' }}>
                      2026–27 Academic Year
                    </div>
                  </div>
                  <div
                    className="absolute top-4 left-4 rounded-lg px-3 py-1.5 text-xs font-semibold text-white"
                    style={{ background: 'rgba(26,43,74,0.8)' }}
                  >
                    📍 Panna, Madhya Pradesh
                  </div>
                </div>
              </div>
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
              {[
                { value: '500+', label: 'Students Enrolled' },
                { value: '5', label: 'Academic Programs' },
                { value: '15+', label: 'Years of Excellence' },
                { value: '100%', label: 'Govt. Compliant' },
              ].map((stat) => (
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

        {/* PROGRAMS — visible early */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-14">
              <div className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: '#E87722' }}>
                Our Offerings
              </div>
              <h2
                className="text-3xl sm:text-4xl font-bold mb-4"
                style={{ fontFamily: '"DM Serif Display", serif', color: '#1A2B4A' }}
              >
                Academic Programs
              </h2>
              <div className="w-14 h-1 mx-auto rounded-full" style={{ background: '#E87722' }} />
              <p className="text-gray-500 mt-4 max-w-xl mx-auto text-sm leading-relaxed">
                NCTE, UGC &amp; state-recognized programs crafted to produce skilled, empathetic educators
                for India&apos;s classrooms.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
              {programs.map((p) => (
                <div
                  key={p.id}
                  className="program-card bg-white border border-gray-100 rounded-2xl p-6 shadow-sm"
                >
                  <div
                    className="w-13 h-13 rounded-2xl flex items-center justify-center mb-4"
                    style={{ background: p.iconBg, width: 52, height: 52, borderRadius: 14 }}
                  >
                    {p.icon}
                  </div>
                  <div
                    className="h-0.5 rounded-full mb-3"
                    style={{ width: 36, background: '#E87722', transition: 'width 0.4s ease' }}
                  />
                  <h3 className="font-bold text-lg mb-0.5" style={{ color: '#1A2B4A' }}>
                    {p.short}
                  </h3>
                  <p className="text-xs text-gray-400 mb-2">{p.name}</p>
                  <span
                    className="inline-block text-xs font-semibold px-2.5 py-1 rounded-full mb-3"
                    style={{ background: p.badgeBg, color: p.badgeColor }}
                  >
                    {p.badge}
                  </span>
                  <p className="text-xs text-gray-600 mb-4 leading-relaxed">{p.desc}</p>
                  <Link
                    href={`/courses#${p.id}`}
                    className="text-xs font-semibold flex items-center gap-1 transition-all hover:gap-2"
                    style={{ color: '#E87722' }}
                  >
                    Learn More →
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
                View All Programs
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
                  <div className="text-xs text-gray-500 font-medium">
                    Years Serving
                    <br />
                    Education
                  </div>
                </div>
              </div>

              <div>
                <div
                  className="text-xs font-semibold tracking-widest uppercase mb-3"
                  style={{ color: '#E87722' }}
                >
                  About SVN Panna
                </div>
                <h2
                  className="font-bold leading-tight mb-5"
                  style={{
                    fontFamily: '"DM Serif Display", serif',
                    fontSize: 'clamp(1.8rem,3vw,2.5rem)',
                    color: '#1A2B4A',
                  }}
                >
                  Empowering Rural India
                  <br />
                  <em className="not-italic" style={{ color: '#E87722' }}>
                    Through Education
                  </em>
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4 text-sm">
                  Swami Vivekanand Mahavidyalaya is an NGO-run institution in the heart of Panna, Madhya
                  Pradesh, committed to making quality teacher education accessible to every aspiring
                  educator in Central India.
                </p>
                <p className="text-gray-600 leading-relaxed mb-7 text-sm">
                  Recognized by NCTE and affiliated to Mahatma Chhatrasala University (MCBU), we blend
                  academic rigor with practical teaching skills — preparing graduates who make a real
                  difference in India&apos;s classrooms.
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
                      <div className="text-xs text-gray-400">Chairman</div>
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
                      <div className="text-xs text-gray-400">Director (Ph.D.)</div>
                    </div>
                  </div>
                </div>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold border-2 transition-all hover:shadow-md"
                  style={{ borderColor: '#1A2B4A', color: '#1A2B4A' }}
                >
                  Know More About Us →
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
              Admissions Now Open
            </div>
            <h2
              className="text-3xl sm:text-4xl font-bold text-white mb-4"
              style={{ fontFamily: '"DM Serif Display", serif' }}
            >
              Academic Year 2026–27
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.85)' }}>
              Limited seats available across all programs. Register today to secure your place.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/admissions#apply"
                className="px-8 py-3.5 bg-white font-semibold rounded-full transition-all hover:shadow-xl hover:scale-105"
                style={{ color: '#E87722' }}
              >
                Apply Online
              </Link>
              <Link
                href="/courses"
                className="px-8 py-3.5 border-2 border-white text-white font-semibold rounded-full transition-all hover:bg-white/10"
              >
                View Programs
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
                Recognized &amp; Affiliated By
              </h2>
              <p className="text-gray-500 text-sm">
                Fully compliant with national regulatory bodies for higher education
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
                Campus Life
              </div>
              <h2
                className="text-3xl font-bold"
                style={{ fontFamily: '"DM Serif Display", serif', color: '#1A2B4A' }}
              >
                Life at SVN Panna
              </h2>
              <div className="w-14 h-1 mx-auto mt-4 rounded-full" style={{ background: '#E87722' }} />
              <p className="text-sm text-gray-500 mt-3">
                A glimpse of campus activities, events, and student life
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {galleryImages.map((img) => (
                <div key={img} className="rounded-xl overflow-hidden aspect-square">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`/images/${img}`}
                    alt="SVN Panna College"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link
                href="/about#gallery"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-semibold border-2 transition-all hover:shadow-md"
                style={{ borderColor: '#1A2B4A', color: '#1A2B4A' }}
              >
                View All Photos →
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
