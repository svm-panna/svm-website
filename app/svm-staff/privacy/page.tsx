import Link from 'next/link';
import Navbar from '@/components/site/Navbar';
import Footer from '@/components/site/Footer';

const heading = { fontFamily: '"DM Serif Display", serif', color: '#1A2B4A' };

const collected: [string, string, string][] = [
  ['Name, mobile number, staff ID, role, assigned shift and approver', 'Entered by an administrator when your account is created', 'Your account and login'],
  ['One-time login codes', 'When you log in', 'Login. Codes are stored hashed and expire after 10 minutes'],
  ['Face photos (5 poses) and a face template computed on your phone', 'When you set up Face ID', 'Confirming it is you at check-in and check-out. An administrator reviews the photos once; the front photo is used as your profile picture'],
  ['Precise location (GPS) and its accuracy', 'Only at the moment you check in or check out, with the app open', 'Confirming you are at a Samiti building. The app does not track location in the background'],
  ['Check-in and check-out times, and failed attempts (time, reason, location)', 'When you mark attendance', 'Attendance records, the monthly register and preventing misuse'],
  ['Correction requests and their reasons', 'When you raise one', 'Fixing missed or wrong attendance'],
  ['A random install ID, phone model, OS version and app version', 'At login', 'Recognising your phone; logging in on a new phone requires Face ID setup again'],
  ['Push notification token', 'After login', 'Sending you reminders and updates'],
];

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="text-xl font-bold mb-3" style={heading}>
        {title}
      </h2>
      {children}
    </div>
  );
}

export default function SvmStaffPrivacyPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="page-hero-pattern py-16" style={{ background: 'linear-gradient(135deg,#1A2B4A,#0F1C34)' }}>
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-xs mb-4" style={{ color: 'rgba(186,210,255,0.5)' }}>
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span className="mx-2">/</span>
              <span style={{ color: 'rgba(255,255,255,0.8)' }}>SVM Staff Privacy Policy</span>
            </div>
            <h1
              className="font-bold text-white mb-3"
              style={{ fontFamily: '"DM Serif Display", serif', fontSize: 'clamp(2rem,4vw,3rem)' }}
            >
              SVM Staff App — Privacy Policy
            </h1>
            <p className="max-w-xl text-sm leading-relaxed" style={{ color: 'rgba(186,210,255,0.75)' }}>
              Effective 10 October 2026
            </p>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <div className="space-y-8 text-gray-700 leading-relaxed">
              <Section title="1. About this policy">
                <p>
                  SVM Staff is the staff attendance app of the Swami Vivekanand institutions, Panna, run by Sriram Shiksha
                  Prasar Evam Gramin Vikas Samajothan Samiti (&ldquo;the Samiti&rdquo;, &ldquo;we&rdquo;). It is only for
                  people employed by the Samiti; accounts are created by the Samiti&rsquo;s administrators, not by the
                  public. This policy explains what the app collects, why, and your choices. It covers only the SVM Staff
                  app; the website has its own <Link href="/privacy" style={{ color: '#E87722' }}>privacy policy</Link>.
                </p>
              </Section>

              <Section title="2. What we collect">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="text-left" style={{ color: '#1A2B4A' }}>
                        <th className="py-2 pr-3 border-b">Data</th>
                        <th className="py-2 pr-3 border-b">When</th>
                        <th className="py-2 border-b">Why</th>
                      </tr>
                    </thead>
                    <tbody>
                      {collected.map(([data, when, why]) => (
                        <tr key={data} className="align-top">
                          <td className="py-2 pr-3 border-b">{data}</td>
                          <td className="py-2 pr-3 border-b">{when}</td>
                          <td className="py-2 border-b">{why}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="mt-3">
                  We do not collect contacts, messages, files, microphone audio or browsing history, and the app contains no
                  advertising or analytics SDKs.
                </p>
              </Section>

              <Section title="3. How it is used and shared">
                <p className="mb-3">
                  Your data is used only to run staff attendance for the Samiti. Administrators of the Samiti can see staff
                  attendance, face photos for review and the information listed above. We do not sell your data or share it
                  with anyone for advertising.
                </p>
                <p className="mb-2">These service providers process data only on our behalf:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Amazon Web Services (Mumbai region, India) — servers and database backups</li>
                  <li>Cloudflare — secure network connection to our servers and hosting of the admin website</li>
                  <li>Google Firebase — push notifications and app update settings</li>
                </ul>
              </Section>

              <Section title="4. Security">
                <p>
                  Every request between the app and our servers is encrypted (TLS plus an additional application-level
                  encryption layer). Servers have no open inbound ports, login codes and session tokens are stored hashed,
                  and access is limited to administrators.
                </p>
              </Section>

              <Section title="5. How long we keep it">
                <p>
                  Attendance records are kept while you are employed and afterwards for as long as the Samiti needs them for
                  payroll and legal records. When you change phones, your previous face photos and template are deleted and
                  you enrol again. Database backups are deleted automatically after 30 days.
                </p>
              </Section>

              <Section title="6. Your choices and rights">
                <p>
                  Camera and location permissions are needed to mark attendance; without them the app cannot be used for
                  check-in. You can ask to see, correct or delete your data, or withdraw consent, by writing to us at the
                  contact below. Under India&rsquo;s Digital Personal Data Protection Act, 2023 you may also raise a
                  grievance with us, and then with the Data Protection Board of India.
                </p>
              </Section>

              <Section title="7. Children">
                <p>The app is for adult employees only.</p>
              </Section>

              <Section title="8. Changes">
                <p>If this policy changes, the new version will be published on this page with a new effective date.</p>
              </Section>

              <div className="rounded-xl p-5 border-l-4" style={{ background: '#FEF3EB', borderColor: '#E87722' }}>
                <p className="font-semibold text-sm mb-1" style={{ color: '#1A2B4A' }}>Contact</p>
                <p className="text-sm">
                  Sriram Shiksha Prasar Evam Gramin Vikas Samajothan Samiti, Ward No. 1, Beside RSS Ground, Indrapuri
                  Colony, Panna — 488001, Madhya Pradesh
                  <br />
                  ✉️{' '}
                  <a href="mailto:pannango71@gmail.com" style={{ color: '#E87722' }}>
                    pannango71@gmail.com
                  </a>{' '}
                  &nbsp;|&nbsp; 📞{' '}
                  <a href="tel:+917999404729" style={{ color: '#E87722' }}>
                    +91-7999404729
                  </a>
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
