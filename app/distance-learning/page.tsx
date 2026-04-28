'use client';

import Link from 'next/link';
import Navbar from '@/components/site/Navbar';
import Footer from '@/components/site/Footer';
import { useLanguage } from '@/context/LanguageContext';

const COUNSELLING_FORM_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLScjuIN1EUS1AXM9L8Ie61_wYjs_VpPlhmcipj5WFJQZbQk12w/viewform?usp=header';

const courseCategories = [
  {
    id: 'mgmt',
    titleEn: 'Management / Social / Arts / Commerce',
    titleHi: 'प्रबंधन / सामाजिक / कला / वाणिज्य',
    color: '#E87722',
    bg: '#FEF3EB',
    courses: [
      { code: 'MBA', nameEn: 'MBA (Rural Management)', nameHi: 'MBA (ग्रामीण प्रबंधन)' },
      { code: 'MSW', nameEn: 'MSW (Master of Social Work)', nameHi: 'MSW (समाज कार्य स्नातकोत्तर)' },
      { code: 'MSc', nameEn: 'MSc (Mathematics)', nameHi: 'MSc (गणित)' },
      { code: 'MA Edu', nameEn: 'MA (Education)', nameHi: 'MA (शिक्षा)' },
      { code: 'MCom', nameEn: 'MCom (Master in Commerce)', nameHi: 'MCom (वाणिज्य स्नातकोत्तर)' },
      { code: 'MA', nameEn: 'MA (History, Political Science, English, Hindi, Sociology)', nameHi: 'MA (इतिहास, राजनीति विज्ञान, अंग्रेजी, हिंदी, समाजशास्त्र)' },
      { code: 'BSW', nameEn: 'BSW (Bachelor of Social Work)', nameHi: 'BSW (समाज कार्य स्नातक)' },
      { code: 'BSc', nameEn: 'BSc (Maths, Physics, Chemistry)', nameHi: 'BSc (गणित, भौतिकी, रसायन)' },
      { code: 'BA', nameEn: 'BA (Bachelor of Art)', nameHi: 'BA (कला स्नातक)' },
      { code: 'BCom', nameEn: 'BCom (Bachelor in Commerce)', nameHi: 'BCom (वाणिज्य स्नातक)' },
    ],
  },
  {
    id: 'lib',
    titleEn: 'Library Science',
    titleHi: 'पुस्तकालय विज्ञान',
    color: '#1A2B4A',
    bg: '#EEF2FA',
    courses: [
      { code: 'B.Lib', nameEn: 'B.Lib.I.Science', nameHi: 'B.Lib.I.Science' },
      { code: 'M.Lib', nameEn: 'M.Lib.I.Science', nameHi: 'M.Lib.I.Science' },
    ],
  },
  {
    id: 'tech',
    titleEn: 'Technical / Diploma Courses',
    titleHi: 'तकनीकी / डिप्लोमा पाठ्यक्रम',
    color: '#E87722',
    bg: '#FEF3EB',
    courses: [
      { code: 'DJMC', nameEn: 'DJMC (Diploma in Journalism and Mass Communication)', nameHi: 'DJMC (पत्रकारिता एवं जनसंचार डिप्लोमा)' },
      { code: 'DCA', nameEn: 'DCA (Diploma in Computer Application)', nameHi: 'DCA (कम्प्यूटर अनुप्रयोग डिप्लोमा)' },
      { code: 'DHRE', nameEn: 'DHRE (Diploma in Human Rights Education)', nameHi: 'DHRE (मानवाधिकार शिक्षा डिप्लोमा)' },
      { code: 'DIRPM', nameEn: 'DIRPM (Diploma in Industrial Relation & Personal Management)', nameHi: 'DIRPM (औद्योगिक संबंध एवं व्यक्तिगत प्रबंधन डिप्लोमा)' },
      { code: 'DGC', nameEn: 'DGC (Diploma in Guidance & Counselling)', nameHi: 'DGC (मार्गदर्शन एवं परामर्श डिप्लोमा)' },
      { code: 'DYN', nameEn: 'DYN (Diploma in Yoga and Naturopathy)', nameHi: 'DYN (योग एवं प्राकृतिक चिकित्सा डिप्लोमा)' },
    ],
  },
  {
    id: 'special',
    titleEn: 'Specialized Diplomas',
    titleHi: 'विशेष डिप्लोमा',
    color: '#1A2B4A',
    bg: '#EEF2FA',
    courses: [
      { code: 'DCS', nameEn: 'DCS (Diploma in Cyber Security)', nameHi: 'DCS (साइबर सुरक्षा डिप्लोमा)' },
      { code: 'DDM', nameEn: 'DDM (Diploma in Disaster Management)', nameHi: 'DDM (आपदा प्रबंधन डिप्लोमा)' },
      { code: 'DNGOM', nameEn: 'DNGOM (Diploma in Management of NGOs)', nameHi: 'DNGOM (NGO प्रबंधन डिप्लोमा)' },
    ],
  },
  {
    id: 'traditional',
    titleEn: 'Traditional Knowledge Diplomas',
    titleHi: 'पारंपरिक ज्ञान डिप्लोमा',
    color: '#E87722',
    bg: '#FEF3EB',
    courses: [
      { code: 'Jyotish', nameEn: 'Diploma in Jyotish (Astrology)', nameHi: 'डिप्लोमा इन ज्योतिष' },
      { code: 'Karmakand', nameEn: 'Diploma in Karmakand (Vedic Rituals)', nameHi: 'डिप्लोमा इन कर्मकाण्ड' },
      { code: 'Vastu', nameEn: 'Diploma in Vastu Shastra', nameHi: 'डिप्लोमा इन वास्तुशास्त्र' },
    ],
  },
];

const eligibleGroups = [
  { icon: '💼', en: 'Business persons (व्यवसायी)', hi: 'व्यवसायी' },
  { icon: '👔', en: 'Working Professionals (सेवाकार)', hi: 'सेवाकार' },
  { icon: '🏠', en: 'Homemakers (गृहणी)', hi: 'गृहणी' },
  { icon: '🌾', en: 'Farmers (किसान)', hi: 'किसान' },
  { icon: '🤝', en: 'Volunteers (स्वेच्छिक कार्यकर्ता)', hi: 'स्वेच्छिक कार्यकर्ता' },
];

const contactNumbers = [
  { num: '7999404729', href: 'tel:+917999404729' },
  { num: '8641044697', href: 'tel:+918641044697' },
  { num: '9201253341', href: 'tel:+919201253341' },
  { num: '8103282168', href: 'tel:+918103282168' },
];

export default function DistanceLearningPage() {
  const { lang } = useLanguage();
  const isHi = lang === 'hi';

  return (
    <>
      <Navbar />
      <main>
        {/* HERO */}
        <section
          className="relative overflow-hidden py-16"
          style={{ background: 'linear-gradient(135deg, #1A2B4A 0%, #0F1C34 100%)' }}
        >
          <div className="absolute inset-0 opacity-10">
            <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice" className="w-full h-full">
              <defs>
                <pattern id="dl-pattern" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M10 0L20 10L10 20L0 10Z" fill="none" stroke="white" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100" height="100" fill="url(#dl-pattern)" />
            </svg>
          </div>
          <div className="max-w-7xl mx-auto px-4 relative">
            <div className="text-sm mb-4" style={{ color: 'rgba(186,210,255,0.5)' }}>
              <Link href="/" className="hover:text-white transition-colors">
                {isHi ? 'होम' : 'Home'}
              </Link>
              <span className="mx-2">/</span>
              <span style={{ color: 'rgba(255,255,255,0.8)' }}>
                {isHi ? 'दूरस्थ शिक्षा' : 'Distance Learning'}
              </span>
            </div>
            <div
              className="inline-block text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-4 tracking-wider uppercase"
              style={{ background: 'rgba(232,119,34,0.3)', border: '1px solid rgba(232,119,34,0.5)' }}
            >
              {isHi ? 'दूरस्थ अध्ययन केन्द्र, पन्ना' : 'Distance Study Centre, Panna'}
            </div>
            <h1
              className="font-bold text-white mb-3"
              style={{ fontFamily: '"DM Serif Display", serif', fontSize: 'clamp(2rem,4vw,3rem)' }}
            >
              {isHi ? 'दूरस्थ / मुक्त विश्वविद्यालय पाठ्यक्रम' : 'Open University Programs'}
            </h1>
            <p className="text-lg mb-2" style={{ color: '#E87722', fontWeight: 600 }}>
              {isHi
                ? 'महात्मा गाँधी चित्रकूट ग्रामोदय विश्वविद्यालय, चित्रकूट'
                : 'Mahatma Gandhi Chitrakoot Gramodaya University, Chitrakoot'}
            </p>
            <p className="text-base mb-6" style={{ color: 'rgba(186,210,255,0.8)' }}>
              {isHi
                ? 'दूरस्थ अध्ययन केन्द्र — स्वामी विवेकानन्द कॉलेज कैंपस, इन्द्रपुरी कॉलोनी, पन्ना (म.प्र.)'
                : 'Distance Study Centre — Swami Vivekanand College Campus, Indrapuri Colony, Panna (M.P.)'}
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href={COUNSELLING_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-semibold text-white transition-all hover:shadow-xl hover:scale-105"
                style={{ background: '#E87722' }}
              >
                {isHi ? 'परामर्श फॉर्म भरें' : 'Fill Counselling Form'}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
              <a
                href="tel:+917999404729"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-semibold text-white border-2 transition-all hover:bg-white/10"
                style={{ borderColor: 'rgba(255,255,255,0.4)' }}
              >
                📞 {isHi ? 'कॉल करें' : 'Call Us'}
              </a>
            </div>
          </div>
        </section>

        {/* BANNER IMAGE */}
        <section className="bg-white py-8">
          <div className="max-w-5xl mx-auto px-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/banner-02.jpeg"
              alt="Distance Study Centre — Mahatma Gandhi Chitrakoot Gramodaya University"
              className="w-full object-contain rounded-2xl shadow-lg"
            />
            <p className="text-center text-sm text-gray-500 mt-3">
              {isHi
                ? 'दूरस्थ अध्ययन केन्द्र — महात्मा गाँधी चित्रकूट ग्रामोदय विश्वविद्यालय'
                : 'Distance Study Centre — Mahatma Gandhi Chitrakoot Gramodaya University'}
            </p>
          </div>
        </section>

        {/* INFO STRIP */}
        <section className="py-10" style={{ background: 'linear-gradient(135deg, #E87722 0%, #C85E0A 100%)' }}>
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-white text-center">
              <div>
                <div className="text-3xl font-bold mb-1" style={{ fontFamily: '"DM Serif Display", serif' }}>30+</div>
                <div className="text-base font-medium" style={{ color: 'rgba(255,255,255,0.85)' }}>
                  {isHi ? 'पाठ्यक्रम उपलब्ध' : 'Courses Available'}
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-1" style={{ fontFamily: '"DM Serif Display", serif' }}>UGC</div>
                <div className="text-base font-medium" style={{ color: 'rgba(255,255,255,0.85)' }}>
                  {isHi ? 'मान्यता प्राप्त विश्वविद्यालय' : 'Recognized University'}
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-1" style={{ fontFamily: '"DM Serif Display", serif' }}>
                  {isHi ? 'पन्ना' : 'Panna'}
                </div>
                <div className="text-base font-medium" style={{ color: 'rgba(255,255,255,0.85)' }}>
                  {isHi ? 'दूरस्थ केन्द्र, म.प्र.' : 'Distance Centre, M.P.'}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* COURSE CATEGORIES */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-14">
              <div className="text-sm font-semibold tracking-widest uppercase mb-2" style={{ color: '#E87722' }}>
                {isHi ? 'पाठ्यक्रम सूची' : 'Available Courses'}
              </div>
              <h2
                className="text-3xl sm:text-4xl font-bold mb-4"
                style={{ fontFamily: '"DM Serif Display", serif', color: '#1A2B4A' }}
              >
                {isHi ? 'दूरस्थ शिक्षा कार्यक्रम' : 'Distance Learning Programs'}
              </h2>
              <div className="w-14 h-1 mx-auto rounded-full" style={{ background: '#E87722' }} />
              <p className="text-base text-gray-500 mt-4 max-w-2xl mx-auto leading-relaxed">
                {isHi
                  ? 'महात्मा गाँधी चित्रकूट ग्रामोदय विश्वविद्यालय के दूरस्थ अध्ययन केन्द्र, पन्ना के माध्यम से उपलब्ध पाठ्यक्रम।'
                  : 'Courses available through the Distance Study Centre, Panna — affiliated to Mahatma Gandhi Chitrakoot Gramodaya University.'}
              </p>
            </div>

            <div className="space-y-10">
              {courseCategories.map((cat) => (
                <div key={cat.id} className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
                  {/* Category Header */}
                  <div className="px-6 py-4" style={{ background: cat.color }}>
                    <h3 className="text-xl font-bold text-white">
                      {isHi ? cat.titleHi : cat.titleEn}
                    </h3>
                  </div>
                  {/* Course Grid */}
                  <div className="p-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                      {cat.courses.map((course) => (
                        <div
                          key={course.code}
                          className="flex items-start gap-3 rounded-xl p-4 border border-gray-100"
                          style={{ background: cat.bg }}
                        >
                          <span
                            className="w-2.5 h-2.5 rounded-full flex-shrink-0 mt-1.5"
                            style={{ background: cat.color }}
                          />
                          <div>
                            <div className="font-semibold text-base" style={{ color: '#1A2B4A' }}>
                              {isHi ? course.nameHi : course.nameEn}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHO CAN APPLY */}
        <section className="py-20" style={{ background: '#F8F9FA' }}>
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <div className="text-sm font-semibold tracking-widest uppercase mb-2" style={{ color: '#E87722' }}>
                {isHi ? 'पात्रता' : 'Who Can Apply'}
              </div>
              <h2
                className="text-3xl font-bold"
                style={{ fontFamily: '"DM Serif Display", serif', color: '#1A2B4A' }}
              >
                {isHi ? 'दूरस्थ शिक्षा — आपके लिए' : 'Distance Education — Made for You'}
              </h2>
              <div className="w-14 h-1 mx-auto mt-4 rounded-full" style={{ background: '#E87722' }} />
              <p className="text-base text-gray-600 mt-4 max-w-xl mx-auto">
                {isHi
                  ? 'दूरस्थ शिक्षा उन सभी के लिए है जो अपनी दैनिक जिम्मेदारियों के साथ उच्च शिक्षा प्राप्त करना चाहते हैं।'
                  : 'Distance education is designed for those who want to pursue higher education alongside their daily responsibilities.'}
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
              {eligibleGroups.map((group) => (
                <div
                  key={group.en}
                  className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100"
                >
                  <div className="text-4xl mb-3">{group.icon}</div>
                  <div className="font-semibold text-base" style={{ color: '#1A2B4A' }}>
                    {isHi ? group.hi : group.en}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="text-sm font-semibold tracking-widest uppercase mb-2" style={{ color: '#E87722' }}>
                  {isHi ? 'संपर्क करें' : 'Get in Touch'}
                </div>
                <h2
                  className="text-3xl font-bold mb-4"
                  style={{ fontFamily: '"DM Serif Display", serif', color: '#1A2B4A' }}
                >
                  {isHi ? 'दूरस्थ अध्ययन केन्द्र, पन्ना' : 'Distance Study Centre, Panna'}
                </h2>
                <div className="w-14 h-1 rounded-full mb-6" style={{ background: '#E87722' }} />
                <div className="space-y-4 text-base text-gray-600">
                  <div className="flex items-start gap-3">
                    <span className="text-xl flex-shrink-0">🏛️</span>
                    <div>
                      <div className="font-semibold" style={{ color: '#1A2B4A' }}>
                        {isHi ? 'विश्वविद्यालय' : 'University'}
                      </div>
                      <div>
                        {isHi
                          ? 'महात्मा गाँधी चित्रकूट ग्रामोदय विश्वविद्यालय, चित्रकूट'
                          : 'Mahatma Gandhi Chitrakoot Gramodaya University, Chitrakoot'}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-xl flex-shrink-0">📍</span>
                    <div>
                      <div className="font-semibold" style={{ color: '#1A2B4A' }}>
                        {isHi ? 'केन्द्र का पता' : 'Centre Address'}
                      </div>
                      <div>
                        {isHi
                          ? 'स्वामी विवेकानन्द कॉलेज कैंपस, इन्द्रपुरी कॉलोनी, पन्ना (म.प्र.)'
                          : 'Swami Vivekanand College Campus, Indrapuri Colony, Panna (M.P.)'}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-xl flex-shrink-0">🕐</span>
                    <div>
                      <div className="font-semibold" style={{ color: '#1A2B4A' }}>
                        {isHi ? 'कार्यालय समय' : 'Office Hours'}
                      </div>
                      <div>{isHi ? 'सोम–शनि: प्रातः 10 – सायं 6 बजे' : 'Mon–Sat: 10 AM – 6 PM'}</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm">
                <h3 className="text-xl font-bold mb-6" style={{ color: '#1A2B4A', fontFamily: '"DM Serif Display", serif' }}>
                  {isHi ? 'संपर्क नंबर' : 'Contact Numbers'}
                </h3>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {contactNumbers.map(({ num, href }) => (
                    <a
                      key={num}
                      href={href}
                      className="flex items-center gap-3 rounded-xl p-4 border border-gray-100 transition-all hover:-translate-y-1 hover:shadow-md"
                      style={{ background: '#FEF3EB' }}
                    >
                      <span className="text-xl">📞</span>
                      <span className="font-semibold text-base" style={{ color: '#E87722' }}>
                        {num}
                      </span>
                    </a>
                  ))}
                </div>
                <a
                  href={COUNSELLING_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center px-6 py-4 rounded-full font-semibold text-white transition-all hover:shadow-xl hover:scale-105 text-base"
                  style={{ background: '#E87722' }}
                >
                  {isHi ? 'परामर्श फॉर्म भरें →' : 'Fill Counselling Form →'}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA STRIP */}
        <section
          className="py-16 relative overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #1A2B4A 0%, #0F1C34 100%)' }}
        >
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2
              className="text-3xl sm:text-4xl font-bold text-white mb-4"
              style={{ fontFamily: '"DM Serif Display", serif' }}
            >
              {isHi ? 'आज ही नामांकन करें' : 'Enroll Today'}
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto" style={{ color: 'rgba(186,210,255,0.85)' }}>
              {isHi
                ? 'दूरस्थ शिक्षा से अपने करियर को नई दिशा दें — घर बैठे पढ़ाई करें।'
                : 'Give your career a new direction through distance education — study from home.'}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={COUNSELLING_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 bg-white font-semibold rounded-full transition-all hover:shadow-xl hover:scale-105"
                style={{ color: '#1A2B4A' }}
              >
                {isHi ? 'परामर्श फॉर्म' : 'Counselling Form'}
              </a>
              <Link
                href="/contact"
                className="px-8 py-3.5 border-2 border-white text-white font-semibold rounded-full transition-all hover:bg-white/10"
              >
                {isHi ? 'संपर्क करें' : 'Contact Us'}
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
