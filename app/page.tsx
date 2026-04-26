import Link from 'next/link';
import { ArrowRight, BookOpen, Users, Award, MapPin, Bell } from 'lucide-react';
import Navbar from '@/components/site/Navbar';
import Footer from '@/components/site/Footer';
import { getNotices, getCourses, getSettings } from '@/lib/data';
import { formatDate, tagColor, courseColor } from '@/lib/utils';

export default function HomePage() {
  const settings = getSettings();
  const notices = getNotices().slice(0, 5);
  const courses = getCourses();

  return (
    <>
      <Navbar />
      <main>
        {/* Ticker */}
        {settings.ticker_text && (
          <div className="bg-brand-600 text-blue-100 py-2 px-4 overflow-hidden">
            <div className="max-w-7xl mx-auto flex items-center gap-3">
              <Bell size={13} className="flex-shrink-0 text-blue-200" />
              <p className="text-xs truncate">{settings.ticker_text}</p>
            </div>
          </div>
        )}

        {/* Hero */}
        <section className="bg-gradient-to-br from-brand-800 to-brand-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
            <div className="flex flex-col lg:flex-row items-start gap-12">
              <div className="flex-1">
                {settings.hero.badge && (
                  <span className="inline-block bg-white/10 border border-white/20 text-blue-100 text-xs px-3 py-1 rounded-full mb-5">
                    {settings.hero.badge}
                  </span>
                )}
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight mb-4">
                  {settings.hero.heading}
                </h1>
                <p className="text-blue-100 text-sm sm:text-base leading-relaxed max-w-xl mb-8">
                  {settings.hero.subheading}
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link href="/academics" className="bg-white text-brand-700 px-6 py-3 rounded-lg text-sm font-medium hover:bg-blue-50 transition-colors inline-flex items-center gap-2">
                    Explore programmes <ArrowRight size={16} />
                  </Link>
                  <Link href="/admissions" className="border border-white/40 text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-white/10 transition-colors">
                    Admission guide
                  </Link>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 lg:grid-cols-1 w-full lg:w-52 flex-shrink-0">
                {[
                  { value: settings.stats.total_intake, label: 'Total intake' },
                  { value: settings.stats.faculty_count, label: 'Faculty members' },
                  { value: settings.stats.programmes, label: 'Programmes' },
                  { value: `${settings.stats.area_acres} ac`, label: 'Campus area' },
                ].map((s) => (
                  <div key={s.label} className="bg-white/10 border border-white/15 rounded-xl p-4">
                    <div className="text-2xl font-semibold text-white">{s.value}</div>
                    <div className="text-xs text-blue-200 mt-0.5">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Programmes */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="mb-8">
              <h2 className="section-heading">Our programmes</h2>
              <p className="section-sub">All courses are full-time and approved by NCTE</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {courses.map((course) => {
                const colors = courseColor(course.color);
                return (
                  <Link key={course.id} href={`/academics/${course.id}`} className="card hover:shadow-md transition-shadow group">
                    <span className={`inline-block text-xs px-2.5 py-1 rounded-full font-medium mb-3 ${colors.pill}`}>
                      {course.level}
                    </span>
                    <h3 className="font-semibold text-gray-900 text-lg mb-1 group-hover:text-brand-600 transition-colors">
                      {course.short}
                    </h3>
                    <p className="text-xs text-gray-500 mb-3">{course.name}</p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>{course.duration}</span>
                      <span>{course.seats} seats</span>
                    </div>
                    <div className="mt-3 pt-3 border-t border-gray-100 text-xs text-brand-600 flex items-center gap-1 group-hover:gap-2 transition-all">
                      Learn more <ArrowRight size={12} />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Notices + About grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Notices */}
              <div className="lg:col-span-2">
                <div className="flex items-center justify-between mb-5">
                  <div>
                    <h2 className="section-heading text-xl">Notices &amp; circulars</h2>
                    <p className="section-sub text-xs">Latest from the college</p>
                  </div>
                  <Link href="/students" className="text-xs text-brand-600 hover:underline flex items-center gap-1">
                    View all <ArrowRight size=12 />
                  </Link>
                </div>
                <div className="space-y-3">
                  {notices.map((notice) => (
                    <div key={notice.id} className="card flex items-start gap-3 hover:shadow-md transition-shadow">
                      <span className={`text-xs px-2 py-0.5 rounded border font-medium flex-shrink-0 mt-0.5 ${tagColor(notice.tag)}`}>
                        {notice.tag.charAt(0).toUpperCase() + notice.tag.slice(1)}
                      </span>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-gray-800 leading-snug">{notice.title}</p>
                        <p className="text-xs text-gray-400 mt-1">{formatDate(notice.date)}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick info */}
              <div>
                <h2 className="section-heading text-xl mb-5">Quick info</h2>
                <div className="space-y-4">
                  <div className="card">
                    <div className="flex items-center gap-2 mb-2">
                      <Award size={16} className="text-brand-600" />
                      <span className="text-sm font-medium text-gray-800">Affiliations</span>
                    </div>
                    {settings.affiliations.map((a) => (
                      <div key={a.short} className="mt-2">
                        <div className="text-xs font-medium text-gray-700">{a.short}</div>
                        <div className="text-xs text-gray-500">{a.name}</div>
                        <div className="text-xs text-green-600 font-medium">{a.status}</div>
                      </div>
                    ))}
                  </div>
                  <div className="card">
                    <div className="flex items-center gap-2 mb-2">
                      <MapPin size={16} className="text-brand-600" />
                      <span className="text-sm font-medium text-gray-800">Location</span>
                    </div>
                    <p className="text-xs text-gray-500 leading-relaxed">{settings.college.location}</p>
                    <p className="text-xs text-gray-500 mt-1">Nearest airport/railway: {settings.college.nearest_airport}</p>
                  </div>
                  <div className="card">
                    <div className="flex items-center gap-2 mb-2">
                      <BookOpen size={16} className="text-brand-600" />
                      <span className="text-sm font-medium text-gray-800">Established</span>
                    </div>
                    <p className="text-xs text-gray-500">{settings.college.established}</p>
                  </div>
                  {settings.admission_open && (
                    <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                      <div className="text-sm font-medium text-green-800 mb-1">Admissions open</div>
                      <p className="text-xs text-green-700 mb-3">Applications are being accepted for the 2025–26 academic session.</p>
                      <Link href="/admissions" className="text-xs text-green-700 font-medium hover:underline flex items-center gap-1">
                        How to apply <ArrowRight size={12} />
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
