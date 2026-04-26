import { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle, AlertCircle, FileText, ArrowRight } from 'lucide-react';
import Navbar from '@/components/site/Navbar';
import Footer from '@/components/site/Footer';
import { getCourses, getSettings } from '@/lib/data';
import { courseColor } from '@/lib/utils';

export const metadata: Metadata = { title: 'Admissions' };

const steps = [
  { step: '01', title: 'Check eligibility', desc: 'Review the eligibility criteria for your chosen programme below.' },
  { step: '02', title: 'Obtain application form', desc: 'Collect the form from the college office or download it from the Documents section.' },
  { step: '03', title: 'Submit with documents', desc: 'Submit the completed form with required documents and application fee at the college office.' },
  { step: '04', title: 'Merit list', desc: 'Admission is based on merit in the qualifying examination as per university/state guidelines.' },
  { step: '05', title: 'Fee payment & enrollment', desc: 'Pay the fee and complete enrollment formalities within the stipulated time.' },
];

export default function AdmissionsPage() {
  const settings = getSettings();
  const courses = getCourses();

  return (
    <>
      <Navbar />
      <main>
        <section className="bg-brand-800 text-white py-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-xs text-blue-300 mb-2">Admissions</div>
            <h1 className="text-3xl font-semibold mb-3">Admission guide 2025–26</h1>
            <p className="text-blue-100 text-sm max-w-xl">
              Admissions are merit-based as per the policy of the state government and Maharaja Chhatrasal Bundelkhand University.
            </p>
            {settings.admission_open && (
              <span className="mt-4 inline-flex items-center gap-1.5 bg-green-500/20 border border-green-400/30 text-green-200 text-xs px-3 py-1 rounded-full">
                <CheckCircle size={12} /> Admissions open for 2025–26
              </span>
            )}
          </div>
        </section>

        {/* Steps */}
        <section className="py-14 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <h2 className="section-heading mb-2">How to apply</h2>
            <p className="section-sub mb-8">Follow these steps to complete your admission</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {steps.map((s) => (
                <div key={s.step} className="card text-center">
                  <div className="text-2xl font-semibold text-brand-600 mb-2">{s.step}</div>
                  <h3 className="text-sm font-medium text-gray-900 mb-1">{s.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Eligibility per course */}
        <section className="py-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <h2 className="section-heading mb-2">Eligibility criteria</h2>
            <p className="section-sub mb-8">Minimum requirements for each programme</p>
            <div className="space-y-4">
              {courses.map((course) => {
                const colors = courseColor(course.color);
                return (
                  <div key={course.id} className="card flex flex-col sm:flex-row gap-4">
                    <div className="flex-shrink-0">
                      <span className={`inline-block text-xs px-2.5 py-1 rounded-full font-medium ${colors.pill}`}>
                        {course.short}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-sm font-medium text-gray-900 mb-1">{course.name}</h3>
                      <p className="text-xs text-gray-600 leading-relaxed">{course.eligibility}</p>
                    </div>
                    <div className="flex-shrink-0 text-xs text-gray-500">
                      <div>{course.duration}</div>
                      <div>{course.seats} seats</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Important note */}
        <section className="pb-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 flex gap-3">
              <AlertCircle size={18} className="text-amber-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="text-sm font-medium text-amber-800 mb-1">Important note</h3>
                <p className="text-xs text-amber-700 leading-relaxed">
                  Admission shall be made on merit based on marks obtained in the qualifying examination and/or entrance examination as per the policy of the state government / UT Administration and the university. No fixed cutoff is declared — eligibility is relative to the applicant pool each year.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
