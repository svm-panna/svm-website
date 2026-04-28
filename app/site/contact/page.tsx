'use client';

import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import Navbar from '@/components/site/Navbar';
import Footer from '@/components/site/Footer';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setStatus('success');
      setForm({ name: '', email: '', phone: '', subject: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  return (
    <>
      <Navbar />
      <main>
        <section className="bg-brand-800 text-white py-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-xs text-blue-300 mb-2">Contact</div>
            <h1 className="text-3xl font-semibold mb-3">Get in touch</h1>
            <p className="text-blue-100 text-sm">Reach us for admissions, general enquiries, or document requests.</p>
          </div>
        </section>

        <section className="py-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              {/* Info */}
              <div className="space-y-5">
                <div className="card">
                  <div className="flex items-center gap-2 mb-3">
                    <MapPin size={16} className="text-brand-600" />
                    <h3 className="text-sm font-medium text-gray-900">Address</h3>
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Swami Vivekanand Mahavidyalaya<br />
                    Ward No. 3, Indrapuri Colony, Janakpur<br />
                    Panna, Madhya Pradesh – 488001
                  </p>
                </div>
                <div className="card">
                  <div className="flex items-center gap-2 mb-3">
                    <Phone size={16} className="text-brand-600" />
                    <h3 className="text-sm font-medium text-gray-900">Phone</h3>
                  </div>
                  <div className="space-y-1 text-xs text-gray-600">
                    <a href="tel:+917999404729" className="block hover:text-brand-600">+91-7999404729</a>
                    <a href="tel:+918641044697" className="block hover:text-brand-600">+91-8641044697</a>
                    <p className="text-gray-400">(STD: 07732 — 254002)</p>
                  </div>
                </div>
                <div className="card">
                  <div className="flex items-center gap-2 mb-3">
                    <Mail size={16} className="text-brand-600" />
                    <h3 className="text-sm font-medium text-gray-900">Email</h3>
                  </div>
                  <div className="space-y-1 text-xs text-gray-600">
                    <a href="mailto:pannango464@gmail.com" className="block hover:text-brand-600">pannango464@gmail.com</a>
                    <a href="mailto:info@swamivivekanandmahavidyalaya.edu.in" className="block hover:text-brand-600">info@swamivivekanand…edu.in</a>
                  </div>
                </div>
                <div className="card">
                  <div className="flex items-center gap-2 mb-3">
                    <Clock size={16} className="text-brand-600" />
                    <h3 className="text-sm font-medium text-gray-900">Office hours</h3>
                  </div>
                  <div className="text-xs text-gray-600 space-y-0.5">
                    <div>Monday – Saturday: 10:00 AM – 6:00 PM</div>
                    <div className="text-gray-400">Closed on Sundays &amp; public holidays</div>
                  </div>
                </div>
              </div>

              {/* Form */}
              <div className="lg:col-span-2 card">
                <h2 className="text-lg font-semibold text-gray-900 mb-5">Send an enquiry</h2>
                {status === 'success' ? (
                  <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
                    <div className="text-green-700 font-medium mb-1">Message sent!</div>
                    <p className="text-xs text-green-600">We will get back to you within 2 working days.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="label">Full name *</label>
                        <input className="input" required value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} placeholder="Your name" />
                      </div>
                      <div>
                        <label className="label">Email *</label>
                        <input type="email" className="input" required value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} placeholder="you@example.com" />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="label">Phone</label>
                        <input className="input" value={form.phone} onChange={e => setForm(f => ({ ...f, phone: e.target.value }))} placeholder="+91 XXXXXXXXXX" />
                      </div>
                      <div>
                        <label className="label">Subject *</label>
                        <select className="input" required value={form.subject} onChange={e => setForm(f => ({ ...f, subject: e.target.value }))}>
                          <option value="">Select topic</option>
                          <option>Admission enquiry</option>
                          <option>Course information</option>
                          <option>Fee structure</option>
                          <option>Document request</option>
                          <option>Other</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="label">Message *</label>
                      <textarea className="input min-h-32 resize-none" required value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))} placeholder="Type your message here…" />
                    </div>
                    {status === 'error' && (
                      <p className="text-xs text-red-600">Something went wrong. Please try again or contact us by phone.</p>
                    )}
                    <button type="submit" disabled={status === 'loading'} className="btn-primary">
                      <Send size={14} />
                      {status === 'loading' ? 'Sending…' : 'Send message'}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
