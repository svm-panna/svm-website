import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Clock, Users, FileText } from 'lucide-react';
import Navbar from '@/components/site/Navbar';
import Footer from '@/components/site/Footer';
import { getCourses } from '@/lib/data';
import { courseColor } from '@/lib/utils';

export const metadata: Metadata = { title: 'Academic Programmes' };

export default function AcademicsPage() {
  const courses = getCourses();

  return (
    <>
      <Navbar />
      <main>
        <section className="bg-brand-800 text-white py-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-xs text-blue-300 mb-2">Academics</div>
            <h1 className="text-3xl font-semibold mb-3">Our programmes</h1>
            <p className="text-blue-100 text-sm max-w-xl">
              All programmes are NCTE approved and affiliated to Maharaja Chhatrasal Bundelkhand University, Chhatarpur.
            </p>
          </div>
        </section>

        <section className="py-14 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {courses.map((course) => {
                const colors = courseColor(course.color);
                return (
                  <div key={course.id} className="card hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <span className={`inline-block text-xs px-2.5 py-1 rounded-full font-medium mb-2 ${colors.pill}`}>
                          {course.type}
                        </span>
                        <h2 className="text-xl font-semibold text-gray-900">{course.short}</h2>
                        <p className="text-sm text-gray-500">{course.name}</p>
                      </div>
                    </div>

                    <p className="text-sm text-gray-600 leading-relaxed mb-5">{course.description}</p>

                    <div className="grid grid-cols-3 gap-3 mb-5">
                      <div className="bg-gray-50 rounded-lg p-3 text-center">
                        <Clock size={16} className="mx-auto mb-1 text-gray-400" />
                        <div className="text-xs font-medium text-gray-800">{course.duration}</div>
                        <div className="text-xs text-gray-500">Duration</div>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-3 text-center">
                        <Users size={16} className="mx-auto mb-1 text-gray-400" />
                        <div className="text-xs font-medium text-gray-800">{course.seats}</div>
                        <div className="text-xs text-gray-500">Seats</div>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-3 text-center">
                        <FileText size={16} className="mx-auto mb-1 text-gray-400" />
                        <div className="text-xs font-medium text-gray-800">{course.level}</div>
                        <div className="text-xs text-gray-500">Level</div>
                      </div>
                    </div>

                    <div className="mb-5">
                      <div className="text-xs font-medium text-gray-700 mb-1">Eligibility</div>
                      <p className="text-xs text-gray-500 leading-relaxed">{course.eligibility}</p>
                    </div>

                    <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                      <Link href="/admissions" className="btn-primary text-xs px-4 py-2">
                        Apply now
                      </Link>
                      {course.syllabus_url && (
                        <Link href={course.syllabus_url} className="text-xs text-brand-600 hover:underline flex items-center gap-1">
                          Download syllabus <ArrowRight size={12} />
                        </Link>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
