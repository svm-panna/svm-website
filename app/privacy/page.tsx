import Link from 'next/link';
import Navbar from '@/components/site/Navbar';
import Footer from '@/components/site/Footer';

export const metadata = {
  title: 'Privacy Policy — Swami Vivekanand Mahavidyalaya, Panna',
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main>
        <section
          className="page-hero-pattern py-16"
          style={{ background: 'linear-gradient(135deg,#1A2B4A,#0F1C34)' }}
        >
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-xs mb-4" style={{ color: 'rgba(186,210,255,0.5)' }}>
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span className="mx-2">/</span>
              <span style={{ color: 'rgba(255,255,255,0.8)' }}>Privacy Policy</span>
            </div>
            <h1
              className="font-bold text-white mb-3"
              style={{ fontFamily: '"DM Serif Display", serif', fontSize: 'clamp(2rem,4vw,3rem)' }}
            >
              Privacy Policy
            </h1>
            <p className="max-w-xl text-sm leading-relaxed" style={{ color: 'rgba(186,210,255,0.75)' }}>
              Last updated: January 2026
            </p>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 prose prose-sm">
            <div className="space-y-8 text-gray-700 leading-relaxed">

              <div>
                <h2 className="text-xl font-bold mb-3" style={{ fontFamily: '"DM Serif Display", serif', color: '#1A2B4A' }}>
                  1. About This Policy
                </h2>
                <p>
                  Swami Vivekanand Mahavidyalaya (&ldquo;SVN Panna&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) is a teacher
                  education institution run by Sriram Shiksha Prasar Evam Gramin Vikas Samajothan Samiti, located at Ward No. 1, Indrapuri Colony, Panna, Madhya Pradesh. This Privacy
                  Policy explains how we collect, use, and protect information submitted through our website at{' '}
                  <span className="font-medium">indiamppannango.org</span>.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-3" style={{ fontFamily: '"DM Serif Display", serif', color: '#1A2B4A' }}>
                  2. Information We Collect
                </h2>
                <p className="mb-3">We collect information you voluntarily provide when:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Submitting an admissions enquiry form</li>
                  <li>Sending us a contact message</li>
                  <li>Calling or emailing us directly</li>
                </ul>
                <p className="mt-3">
                  This information may include your name, mobile number, email address, highest qualification, and any
                  message you write to us.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-3" style={{ fontFamily: '"DM Serif Display", serif', color: '#1A2B4A' }}>
                  3. How We Use Your Information
                </h2>
                <ul className="list-disc pl-5 space-y-1">
                  <li>To respond to your enquiries about admissions or programs</li>
                  <li>To guide you through the admissions process</li>
                  <li>To send you important notices regarding your application</li>
                  <li>To improve our services and website</li>
                </ul>
                <p className="mt-3">
                  We do not sell, rent, or share your personal information with third parties for marketing purposes.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-3" style={{ fontFamily: '"DM Serif Display", serif', color: '#1A2B4A' }}>
                  4. Data Security
                </h2>
                <p>
                  We take reasonable precautions to protect your information. Enquiry data submitted through our website
                  is transmitted securely and stored only as long as necessary to respond to your query or process your
                  application.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-3" style={{ fontFamily: '"DM Serif Display", serif', color: '#1A2B4A' }}>
                  5. Cookies
                </h2>
                <p>
                  Our website may use essential cookies to ensure basic functions work correctly (e.g., language
                  preference). We do not use tracking or advertising cookies.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-3" style={{ fontFamily: '"DM Serif Display", serif', color: '#1A2B4A' }}>
                  6. Your Rights
                </h2>
                <p>
                  You may request access to, correction of, or deletion of any personal information we hold about you
                  by contacting us at{' '}
                  <a href="mailto:pannango71@gmail.com" className="font-medium" style={{ color: '#E87722' }}>
                    pannango71@gmail.com
                  </a>{' '}
                  or calling <a href="tel:+917999404729" style={{ color: '#E87722' }}>+91-7999404729</a>.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-3" style={{ fontFamily: '"DM Serif Display", serif', color: '#1A2B4A' }}>
                  7. Changes to This Policy
                </h2>
                <p>
                  We may update this policy from time to time. Any significant changes will be posted on this page with
                  an updated date.
                </p>
              </div>

              <div className="rounded-xl p-5 border-l-4" style={{ background: '#FEF3EB', borderColor: '#E87722' }}>
                <p className="font-semibold text-sm mb-1" style={{ color: '#1A2B4A' }}>Contact Us</p>
                <p className="text-sm">
                  Swami Vivekanand Mahavidyalaya, Ward No. 1, Beside RSS Ground,
                  Indrapuri Colony, Panna — 488001, Madhya Pradesh<br />
                  📞 <a href="tel:+917999404729" style={{ color: '#E87722' }}>+91-7999404729</a> &nbsp;|&nbsp;
                  ✉️ <a href="mailto:pannango71@gmail.com" style={{ color: '#E87722' }}>pannango71@gmail.com</a>
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
