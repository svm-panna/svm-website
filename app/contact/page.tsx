'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/site/Navbar';
import Footer from '@/components/site/Footer';

const infoCards = [
  {
    href: 'tel:+917987021244',
    icon: '📞',
    iconBg: '#FEF3EB',
    title: 'Call Us',
    lines: ['+91-7987021244', '+91-9425168440'],
    sub: 'Mon–Sat, 10AM–6PM',
    accent: '#E87722',
  },
  {
    href: 'mailto:pannango71@gmail.com',
    icon: '✉️',
    iconBg: '#EEF2FA',
    title: 'Email Us',
    lines: ['pannango71@gmail.com'],
    sub: 'We respond within 24 hours',
    accent: '#E87722',
  },
];

function focusStyle(e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
  e.target.style.borderColor = '#E87722';
  e.target.style.boxShadow = '0 0 0 3px rgba(232,119,34,0.12)';
}
function blurStyle(e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
  e.target.style.borderColor = '#E5E7EB';
  e.target.style.boxShadow = 'none';
}

const inputClass = 'w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm transition-all';
const inputStyle = { color: '#1A2B4A', outline: 'none' };

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

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
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span className="mx-2">/</span>
              <span style={{ color: 'rgba(255,255,255,0.8)' }}>Contact Us</span>
            </div>
            <h1
              className="font-bold text-white mb-3"
              style={{ fontFamily: '"DM Serif Display", serif', fontSize: 'clamp(2rem,4vw,3rem)' }}
            >
              Contact Us
            </h1>
            <p className="max-w-xl text-sm leading-relaxed" style={{ color: 'rgba(186,210,255,0.75)' }}>
              We&apos;re here to answer your questions about admissions, programs, and everything else. Reach out to us anytime.
            </p>
          </div>
        </section>

        {/* CONTACT INFO CARDS */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
              {/* Phone */}
              <a
                href="tel:+917987021244"
                className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm text-center block transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mx-auto mb-4" style={{ background: '#FEF3EB' }}>📞</div>
                <h3 className="font-bold mb-2" style={{ color: '#1A2B4A' }}>Call Us</h3>
                <div className="text-sm font-medium mb-1" style={{ color: '#E87722' }}>+91-7987021244</div>
                <div className="text-sm" style={{ color: '#E87722' }}>+91-9425168440</div>
                <div className="text-xs text-gray-400 mt-2">Mon–Sat, 10AM–6PM</div>
              </a>

              {/* Email */}
              <a
                href="mailto:pannango71@gmail.com"
                className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm text-center block transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mx-auto mb-4" style={{ background: '#EEF2FA' }}>✉️</div>
                <h3 className="font-bold mb-2" style={{ color: '#1A2B4A' }}>Email Us</h3>
                <div className="text-sm" style={{ color: '#E87722' }}>pannango71@gmail.com</div>
                <div className="text-xs text-gray-400 mt-2">We respond within 24 hours</div>
              </a>

              {/* Address */}
              <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mx-auto mb-4" style={{ background: '#FEF3EB' }}>📍</div>
                <h3 className="font-bold mb-2" style={{ color: '#1A2B4A' }}>Visit Us</h3>
                <div className="text-sm text-gray-600 leading-relaxed">
                  Ward No. 1, Beside RSS Ground,<br />Indrapuri Colony,<br />Panna, Madhya Pradesh
                </div>
              </div>

              {/* Hours */}
              <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mx-auto mb-4" style={{ background: '#EEF2FA' }}>🕐</div>
                <h3 className="font-bold mb-2" style={{ color: '#1A2B4A' }}>Office Hours</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between gap-4">
                    <span className="text-gray-500">Mon – Sat</span>
                    <span className="font-medium" style={{ color: '#1A2B4A' }}>10 AM – 6 PM</span>
                  </div>
                  <div className="flex justify-between gap-4">
                    <span className="text-gray-500">Sunday</span>
                    <span className="text-red-500 font-medium">Closed</span>
                  </div>
                  <div className="flex justify-between gap-4">
                    <span className="text-gray-500">Holidays</span>
                    <span className="text-red-500 font-medium">Closed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Map + Form */}
            <div className="grid lg:grid-cols-2 gap-10">
              {/* Map */}
              <div>
                <h2 className="text-2xl font-bold mb-5" style={{ fontFamily: '"DM Serif Display", serif', color: '#1A2B4A' }}>
                  Find Us on the Map
                </h2>
                <div
                  className="rounded-2xl overflow-hidden h-80 flex flex-col items-center justify-center relative"
                  style={{ background: 'linear-gradient(135deg, #1A2B4A 0%, #263D65 100%)' }}
                >
                  {/* Decorative grid overlay */}
                  <div
                    className="absolute inset-0 opacity-30"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40'%3E%3Crect width='40' height='40' fill='none' stroke='rgba(255,255,255,0.06)' stroke-width='1'/%3E%3C/svg%3E")`,
                    }}
                  />
                  {/* Decorative road SVG */}
                  <svg viewBox="0 0 400 280" fill="none" className="absolute inset-0 w-full h-full opacity-30">
                    <line x1="0" y1="140" x2="400" y2="140" stroke="white" strokeWidth="3" opacity="0.4" />
                    <line x1="200" y1="0" x2="200" y2="280" stroke="white" strokeWidth="3" opacity="0.4" />
                    <line x1="0" y1="80" x2="400" y2="200" stroke="white" strokeWidth="1.5" opacity="0.2" />
                    <line x1="50" y1="0" x2="350" y2="280" stroke="white" strokeWidth="1.5" opacity="0.2" />
                    <rect x="60" y="100" width="60" height="30" rx="2" fill="white" opacity="0.1" />
                    <rect x="140" y="90" width="40" height="40" rx="2" fill="white" opacity="0.1" />
                    <rect x="240" y="105" width="70" height="25" rx="2" fill="white" opacity="0.1" />
                    <rect x="100" y="155" width="50" height="35" rx="2" fill="white" opacity="0.1" />
                    <rect x="260" y="150" width="80" height="40" rx="2" fill="white" opacity="0.1" />
                  </svg>
                  <div className="relative z-10 text-center">
                    <div className="flex flex-col items-center">
                      <div
                        className="w-14 h-14 rounded-full border-4 border-white flex items-center justify-center text-xl shadow-2xl mb-2"
                        style={{ background: '#E87722' }}
                      >
                        📍
                      </div>
                      <div className="bg-white rounded-xl px-4 py-2 shadow-xl text-sm">
                        <div className="font-bold" style={{ color: '#1A2B4A' }}>SVN Mahavidyalaya</div>
                        <div className="text-xs text-gray-500">Indrapuri Colony, Panna (MP)</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 p-4 rounded-xl border border-gray-100" style={{ background: '#F8F9FA' }}>
                  <div className="flex items-start gap-3">
                    <div className="text-xl flex-shrink-0">📌</div>
                    <div>
                      <div className="font-semibold text-sm mb-1" style={{ color: '#1A2B4A' }}>How to Reach Us</div>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        Swami Vivekanand Mahavidyalaya is located at Ward No. 1, beside RSS Ground, Indrapuri Colony,
                        Panna, Madhya Pradesh. The college is accessible by local transport from Panna bus stand and
                        railway station. Ask for &quot;SVN College, Indrapuri Colony&quot; — locals know us well.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Enquiry Form */}
              <div>
                <h2 className="text-2xl font-bold mb-5" style={{ fontFamily: '"DM Serif Display", serif', color: '#1A2B4A' }}>
                  Send an Enquiry
                </h2>
                <form
                  onSubmit={handleSubmit}
                  className="bg-white rounded-2xl shadow-sm border border-gray-100 p-7 space-y-5"
                >
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold mb-1.5" style={{ color: '#1A2B4A' }}>Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="Your full name"
                        className={inputClass}
                        style={inputStyle}
                        onFocus={focusStyle}
                        onBlur={blurStyle}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold mb-1.5" style={{ color: '#1A2B4A' }}>Mobile Number *</label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 00000 00000"
                        className={inputClass}
                        style={inputStyle}
                        onFocus={focusStyle}
                        onBlur={blurStyle}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold mb-1.5" style={{ color: '#1A2B4A' }}>Email Address</label>
                    <input
                      type="email"
                      placeholder="your@email.com"
                      className={inputClass}
                      style={inputStyle}
                      onFocus={focusStyle}
                      onBlur={blurStyle}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold mb-1.5" style={{ color: '#1A2B4A' }}>Topic / Subject *</label>
                    <select
                      required
                      className={`${inputClass} bg-white`}
                      style={inputStyle}
                      onFocus={focusStyle}
                      onBlur={blurStyle}
                    >
                      <option value="">Select a topic</option>
                      <option>Admissions Enquiry</option>
                      <option>Program Information</option>
                      <option>Fee Structure</option>
                      <option>Documents Required</option>
                      <option>Library Access</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold mb-1.5" style={{ color: '#1A2B4A' }}>Your Message *</label>
                    <textarea
                      rows={5}
                      required
                      placeholder="Describe your query or message..."
                      className={`${inputClass} resize-none`}
                      style={inputStyle}
                      onFocus={focusStyle}
                      onBlur={blurStyle}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-full font-semibold text-white text-sm transition-all hover:shadow-lg hover:scale-[1.01]"
                    style={{ background: submitted ? '#2D7A3A' : '#E87722' }}
                  >
                    {submitted ? 'Sent ✓' : 'Send Message →'}
                  </button>

                  {submitted && (
                    <div className="rounded-xl p-4 text-center text-sm font-medium" style={{ background: '#FEF3EB', color: '#C85E0A' }}>
                      ✅ Your message has been sent! We&apos;ll get back to you soon.
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* QUICK CONTACT STRIP */}
        <section className="py-14" style={{ background: '#F8F9FA' }}>
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-2xl font-bold" style={{ fontFamily: '"DM Serif Display", serif', color: '#1A2B4A' }}>
                Need Immediate Help?
              </h2>
              <p className="text-sm text-gray-500 mt-2">For admissions guidance, contact our Director directly</p>
            </div>
            <div className="grid sm:grid-cols-3 gap-5 max-w-3xl mx-auto">
              <div className="bg-white rounded-2xl p-5 text-center border border-gray-100 shadow-sm">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white text-sm font-bold mx-auto mb-3"
                  style={{ background: '#E87722' }}
                >
                  AS
                </div>
                <div className="font-bold text-sm mb-0.5" style={{ color: '#1A2B4A' }}>Dr. Arvind Singh</div>
                <div className="text-xs text-gray-500 mb-3">Director (Ph.D.)</div>
                <a href="tel:+917987021244" className="text-xs font-semibold" style={{ color: '#E87722' }}>
                  +91-7987021244
                </a>
              </div>
              <div className="bg-white rounded-2xl p-5 text-center border border-gray-100 shadow-sm">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl mx-auto mb-3" style={{ background: '#FEF3EB' }}>
                  📧
                </div>
                <div className="font-bold text-sm mb-0.5" style={{ color: '#1A2B4A' }}>Email Enquiry</div>
                <div className="text-xs text-gray-500 mb-3">24-hour response time</div>
                <a href="mailto:pannango71@gmail.com" className="text-xs font-semibold" style={{ color: '#E87722' }}>
                  pannango71@gmail.com
                </a>
              </div>
              <div className="bg-white rounded-2xl p-5 text-center border border-gray-100 shadow-sm">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl mx-auto mb-3" style={{ background: '#EEF2FA' }}>
                  🏫
                </div>
                <div className="font-bold text-sm mb-0.5" style={{ color: '#1A2B4A' }}>Walk-In Visit</div>
                <div className="text-xs text-gray-500 mb-3">No appointment needed</div>
                <div className="text-xs font-semibold" style={{ color: '#1A2B4A' }}>Mon–Sat, 10AM–6PM</div>
              </div>
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
              <div className="md:col-span-2 rounded-2xl overflow-hidden shadow-sm" style={{ height: '200px' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/campus-06.jpg" alt="SVN Panna Campus" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              {['gallery-08.jpeg', 'gallery-18.jpeg'].map((img) => (
                <div key={img} className="rounded-2xl overflow-hidden shadow-sm" style={{ height: '200px' }}>
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
