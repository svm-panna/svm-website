import Link from 'next/link';
import Navbar from '@/components/site/Navbar';
import Footer from '@/components/site/Footer';

const publishers = [
  { icon: '📖', name: 'A. Agrawal Publication', desc: 'Hindi academic texts for teacher education, pedagogy, and educational psychology' },
  { icon: '📗', name: 'Vinod Pushtak Mandir', desc: 'Comprehensive books for B.Ed. and D.El.Ed. courses — textbooks and reference guides' },
  { icon: '📘', name: 'Radha Prakashan', desc: 'Subject methodology books, curriculum guides, and teacher practice resources' },
  { icon: '📙', name: 'Thakur Publication', desc: 'Academic texts covering education theories, school management, and social science education' },
];

const facilities = [
  { icon: '🪑', iconBg: '#FEF3EB', title: 'Reading Room', desc: 'Quiet, spacious reading area with good lighting and individual seating for focused study and research.' },
  { icon: '🔍', iconBg: '#EEF2FA', title: 'Book Search & Issue', desc: 'Students can request book searches and borrow books for home study with valid student ID.' },
  { icon: '📋', iconBg: '#FEF3EB', title: 'Journal Reading Area', desc: 'Dedicated section for reading the 22 academic journals and research periodicals available in the library.' },
  { icon: '📝', iconBg: '#EEF2FA', title: 'Reference & Study Notes', desc: 'Course notes and reference materials for all programs available for in-library consultation.' },
];

const rules = [
  'Valid student ID card required for entry and book issue',
  'Maintain silence in the reading room at all times',
  'Books must be returned within the due date to avoid fines',
  'Food and beverages are not permitted inside the library',
  'Mobile phones must be on silent mode in the reading area',
  'Maximum 2 books may be borrowed at a time per student',
  'Journals and reference books are for in-library use only',
  'Lost or damaged books must be replaced or fines paid',
];

const galleryImages = [
  { src: 'gallery-03.jpeg', tall: true },
  { src: 'gallery-12.jpeg', tall: false },
  { src: 'gallery-17.jpeg', tall: false },
  { src: 'gallery-19.jpeg', tall: false },
  { src: 'gallery-22.jpeg', tall: false },
];

export default function LibraryPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* PAGE HERO */}
        <section
          className="page-hero-pattern py-16"
          style={{ background: 'linear-gradient(135deg,#1A2B4A,#0F1C34)' }}
        >
          <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="text-xs mb-4" style={{ color: 'rgba(186,210,255,0.5)' }}>
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
                <span className="mx-2">/</span>
                <span style={{ color: 'rgba(255,255,255,0.8)' }}>Library</span>
              </div>
              <h1
                className="font-bold text-white mb-3"
                style={{ fontFamily: '"DM Serif Display", serif', fontSize: 'clamp(2rem,4vw,3rem)' }}
              >
                Our Library
              </h1>
              <p className="max-w-lg text-sm leading-relaxed" style={{ color: 'rgba(186,210,255,0.75)' }}>
                A rich repository of knowledge supporting teacher education programs — 7,955+ books, 22 journals, and growing.
              </p>
              <div className="flex gap-6 mt-6">
                {[
                  { value: '7,955+', label: 'Books' },
                  { value: '22', label: 'Journals' },
                  { value: '4+', label: 'Publishers' },
                ].map((s, i) => (
                  <div key={s.label} className="flex items-center gap-6">
                    {i > 0 && <div className="w-px h-8" style={{ background: 'rgba(255,255,255,0.15)' }} />}
                    <div>
                      <div
                        className="text-3xl font-bold"
                        style={{ fontFamily: '"DM Serif Display", serif', color: '#E87722' }}
                      >
                        {s.value}
                      </div>
                      <div className="text-xs" style={{ color: 'rgba(186,210,255,0.65)' }}>{s.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="hidden lg:flex justify-end">
              <div className="relative w-full max-w-xs rounded-2xl overflow-hidden shadow-2xl" style={{ height: '260px' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/campus-04.jpg" alt="SVN Panna Campus Library" className="w-full h-full object-cover" />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(26,43,74,0.55), transparent 60%)' }} />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="text-white font-semibold text-sm">Central Library</div>
                  <div className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.75)' }}>7,955 Books &amp; 22 Journals</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* STATS BAR */}
        <section className="py-10" style={{ background: 'linear-gradient(135deg, #E87722 0%, #C85E0A 100%)' }}>
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              {[
                { value: '7,955+', label: 'Books in Collection' },
                { value: '22', label: 'Academic Journals' },
                { value: '4+', label: 'Publisher Partners' },
                { value: '5', label: 'Programs Supported' },
              ].map((s) => (
                <div key={s.label}>
                  <div
                    className="text-4xl font-bold text-white mb-1"
                    style={{ fontFamily: '"DM Serif Display", serif' }}
                  >
                    {s.value}
                  </div>
                  <div className="text-xs font-medium" style={{ color: 'rgba(255,255,255,0.8)' }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* COLLECTIONS */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-14">
              <div className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: '#E87722' }}>
                What We Hold
              </div>
              <h2 className="text-3xl font-bold" style={{ fontFamily: '"DM Serif Display", serif', color: '#1A2B4A' }}>
                Library Collections
              </h2>
              <div className="w-14 h-1 mx-auto mt-4 rounded-full" style={{ background: '#E87722' }} />
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-14">
              {/* Books card */}
              <div className="rounded-2xl border border-gray-100 p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center text-3xl" style={{ background: '#FEF3EB' }}>📚</div>
                  <div>
                    <h3 className="text-xl font-bold" style={{ fontFamily: '"DM Serif Display", serif', color: '#1A2B4A' }}>
                      Teacher Education Collection
                    </h3>
                    <div className="text-xs font-semibold mt-1" style={{ color: '#E87722' }}>B.Ed. &amp; B.A.B.Ed. Programs</div>
                  </div>
                </div>
                <div className="text-4xl font-bold mb-3" style={{ fontFamily: '"DM Serif Display", serif', color: '#1A2B4A' }}>
                  7,955 <span className="text-xl font-normal text-gray-400">volumes</span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  Comprehensive collection covering all aspects of teacher education: pedagogy, educational psychology,
                  curriculum design, school management, and subject-specific methodology books for B.Ed. and B.A.B.Ed. programs.
                </p>
                <div className="grid grid-cols-2 gap-3 text-xs text-gray-600">
                  {['Educational Psychology', 'Pedagogy & Methods', 'Curriculum Development', 'School Administration', 'Hindi & English Literature', 'Social Sciences'].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <span style={{ color: '#E87722' }}>▸</span> {item}
                    </div>
                  ))}
                </div>
              </div>

              {/* Journals card */}
              <div className="rounded-2xl border border-gray-100 p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center text-3xl" style={{ background: '#EEF2FA' }}>📰</div>
                  <div>
                    <h3 className="text-xl font-bold" style={{ fontFamily: '"DM Serif Display", serif', color: '#1A2B4A' }}>
                      Academic Journals
                    </h3>
                    <div className="text-xs font-semibold mt-1" style={{ color: '#1A2B4A' }}>Research &amp; Periodicals</div>
                  </div>
                </div>
                <div className="text-4xl font-bold mb-3" style={{ fontFamily: '"DM Serif Display", serif', color: '#1A2B4A' }}>
                  22 <span className="text-xl font-normal text-gray-400">journals</span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  A curated selection of academic journals covering education research, child development, special education,
                  and vocational training. Supporting students and faculty in staying current with latest educational research.
                </p>
                <div className="grid grid-cols-2 gap-3 text-xs text-gray-600">
                  {['Education Research', 'Child Development', 'Special Education', 'Vocational Training', 'Psychology in Education', 'Hindi Journals'].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <span style={{ color: '#1A2B4A' }}>▸</span> {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Publishers */}
            <div className="text-center mb-10">
              <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: '"DM Serif Display", serif', color: '#1A2B4A' }}>
                Our Publisher Partners
              </h3>
              <p className="text-sm text-gray-500">Leading academic publishers whose works are available in our collection</p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
              {publishers.map((p) => (
                <div
                  key={p.name}
                  className="bg-white border border-gray-100 rounded-2xl p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="text-3xl mb-3">{p.icon}</div>
                  <div className="font-bold mb-1" style={{ color: '#1A2B4A' }}>{p.name}</div>
                  <div className="text-xs text-gray-500">{p.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FACILITIES & RULES */}
        <section className="py-20" style={{ background: '#F8F9FA' }}>
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Facilities */}
              <div>
                <div className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: '#E87722' }}>
                  What We Offer
                </div>
                <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: '"DM Serif Display", serif', color: '#1A2B4A' }}>
                  Library Facilities
                </h2>
                <div className="space-y-4">
                  {facilities.map((f) => (
                    <div key={f.title} className="flex items-start gap-4 bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                        style={{ background: f.iconBg }}
                      >
                        {f.icon}
                      </div>
                      <div>
                        <div className="font-semibold text-sm mb-1" style={{ color: '#1A2B4A' }}>{f.title}</div>
                        <div className="text-xs text-gray-600 leading-relaxed">{f.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Rules & Timings */}
              <div>
                <div className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: '#1A2B4A' }}>
                  Guidelines
                </div>
                <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: '"DM Serif Display", serif', color: '#1A2B4A' }}>
                  Library Rules &amp; Timings
                </h2>
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                  <div className="p-5" style={{ background: '#EEF2FA' }}>
                    <h3 className="font-semibold mb-1" style={{ color: '#1A2B4A' }}>📅 Library Hours</h3>
                    <div className="text-sm text-gray-600 mt-2 space-y-1">
                      <div className="flex justify-between">
                        <span>Monday – Saturday</span>
                        <span className="font-medium" style={{ color: '#1A2B4A' }}>10:00 AM – 6:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sunday &amp; Public Holidays</span>
                        <span className="font-medium text-red-500">Closed</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-semibold mb-3" style={{ color: '#1A2B4A' }}>📌 Rules &amp; Conduct</h3>
                    <ul className="space-y-2 text-xs text-gray-600">
                      {rules.map((rule) => (
                        <li key={rule} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ background: '#E87722' }} />
                          {rule}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-14" style={{ background: 'linear-gradient(135deg, #E87722 0%, #C85E0A 100%)' }}>
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: '"DM Serif Display", serif' }}>
              Ready to Join SVN Panna?
            </h2>
            <p className="text-lg mb-8" style={{ color: 'rgba(255,255,255,0.85)' }}>
              Access our library and all academic resources by enrolling in one of our recognized programs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/admissions#apply" className="px-8 py-3.5 bg-white font-semibold rounded-full transition-all hover:shadow-xl hover:scale-105" style={{ color: '#E87722' }}>
                Apply Now
              </Link>
              <Link href="/courses" className="px-8 py-3.5 border-2 border-white text-white font-semibold rounded-full hover:bg-white/10">
                View Programs
              </Link>
            </div>
          </div>
        </section>

        {/* CAMPUS GALLERY */}
        <section className="py-16" style={{ background: '#F8F9FA' }}>
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-10">
              <div className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: '#E87722' }}>Campus Life</div>
              <h2 className="text-3xl font-bold" style={{ fontFamily: '"DM Serif Display", serif', color: '#1A2B4A' }}>
                Life at SVN Panna
              </h2>
              <div className="w-14 h-1 mx-auto mt-4 rounded-full" style={{ background: '#E87722' }} />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <div className="md:col-span-2 md:row-span-2 rounded-2xl overflow-hidden shadow-sm" style={{ height: '320px' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/gallery-03.jpeg" alt="Campus Activity" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              {['gallery-12.jpeg', 'gallery-17.jpeg', 'gallery-19.jpeg', 'gallery-22.jpeg'].map((img) => (
                <div key={img} className="rounded-2xl overflow-hidden shadow-sm" style={{ height: '152px' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={`/images/${img}`} alt="Campus Activity" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
