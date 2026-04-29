'use client';

import { useState, useEffect } from 'react';
import { Plus, Trash2, Edit2, Save, X, ChevronDown, ChevronUp } from 'lucide-react';
import type { Course } from '@/lib/data';

const CATEGORIES = [
  { id: 'teacher-education', label: 'Teacher Education' },
  { id: 'special-education', label: 'Special Education' },
  { id: 'technical-vocational', label: 'Technical & Vocational' },
  { id: 'medical-paramedical', label: 'Medical & Paramedical' },
];

const emptyCourse = (): Course => ({
  id: `course-${Date.now()}`,
  categoryId: 'teacher-education',
  short: '',
  name: { en: '', hi: '' },
  duration: { en: '', hi: '' },
  seats: 30,
  eligible: { en: '', hi: '' },
  badge: { en: 'NCTE Recognized', hi: 'NCTE मान्यता' },
  affiliation: '',
  annualFee: '',
  examFee: { en: '', hi: '' },
  totalFee: '',
  description: { en: '', hi: '' },
  highlights: [],
  syllabusUrl: '',
  order: 99,
});

export default function AdminCoursesPage() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [editing, setEditing] = useState<Course | null>(null);
  const [saving, setSaving] = useState(false);
  const [msg, setMsg] = useState('');
  const [expandedCat, setExpandedCat] = useState<string | null>('teacher-education');

  useEffect(() => {
    fetch('/api/courses').then(r => r.json()).then((d) => setCourses(d.courses ?? []));
  }, []);

  const save = async (updated: Course[]) => {
    setSaving(true);
    setMsg('');
    const res = await fetch('/api/courses', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ courses: updated }),
    });
    setSaving(false);
    setMsg(res.ok ? 'Saved' : 'Error saving');
    if (res.ok) setTimeout(() => setMsg(''), 3000);
  };

  const saveEdit = () => {
    if (!editing || !editing.name.en) return;
    const updated = courses.find(c => c.id === editing.id)
      ? courses.map(c => c.id === editing.id ? editing : c)
      : [...courses, editing];
    setCourses(updated);
    setEditing(null);
    save(updated);
  };

  const deleteCourse = (id: string) => {
    const updated = courses.filter(c => c.id !== id);
    setCourses(updated);
    save(updated);
  };

  const set = <K extends keyof Course>(key: K, val: Course[K]) =>
    setEditing(prev => prev ? { ...prev, [key]: val } : prev);

  const setBi = (key: 'name' | 'duration' | 'eligible' | 'badge' | 'examFee' | 'description', lang: 'en' | 'hi', val: string) =>
    setEditing(prev => prev ? { ...prev, [key]: { ...(prev[key] as { en: string; hi: string }), [lang]: val } } : prev);

  const setHighlight = (i: number, lang: 'en' | 'hi', val: string) =>
    setEditing(prev => {
      if (!prev) return prev;
      const h = [...prev.highlights];
      h[i] = { ...h[i], [lang]: val };
      return { ...prev, highlights: h };
    });

  const addHighlight = () =>
    setEditing(prev => prev ? { ...prev, highlights: [...prev.highlights, { en: '', hi: '' }] } : prev);

  const removeHighlight = (i: number) =>
    setEditing(prev => prev ? { ...prev, highlights: prev.highlights.filter((_, idx) => idx !== i) } : prev);

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-xl font-semibold text-gray-900">Courses &amp; programmes</h1>
          <p className="text-sm text-gray-500 mt-0.5">All bilingual course data shown on the website</p>
        </div>
        <button onClick={() => setEditing(emptyCourse())} className="btn-primary text-xs px-4 py-2">
          <Plus size={14} /> Add course
        </button>
      </div>

      {msg && (
        <div className={`mb-4 text-xs px-3 py-2 rounded-lg ${msg.includes('Error') ? 'bg-red-50 text-red-700' : 'bg-green-50 text-green-700'}`}>
          {msg}
        </div>
      )}

      {/* Edit form */}
      {editing && (
        <div className="bg-white border border-brand-200 rounded-xl p-5 mb-6">
          <h2 className="text-sm font-semibold text-gray-900 mb-4">
            {courses.find(c => c.id === editing.id) ? 'Edit course' : 'New course'}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Basic */}
            <div>
              <label className="label">Short name (e.g. B.Ed.)</label>
              <input className="input" value={editing.short} onChange={e => set('short', e.target.value)} placeholder="B.Ed." />
            </div>
            <div>
              <label className="label">Category</label>
              <select className="input" value={editing.categoryId} onChange={e => set('categoryId', e.target.value)}>
                {CATEGORIES.map(c => <option key={c.id} value={c.id}>{c.label}</option>)}
              </select>
            </div>

            {/* Name bilingual */}
            <div>
              <label className="label">Name — English *</label>
              <input className="input" value={editing.name.en} onChange={e => setBi('name', 'en', e.target.value)} placeholder="Bachelor of Education" />
            </div>
            <div>
              <label className="label">Name — हिंदी</label>
              <input className="input" value={editing.name.hi} onChange={e => setBi('name', 'hi', e.target.value)} placeholder="शिक्षा स्नातक" dir="auto" />
            </div>

            {/* Duration */}
            <div>
              <label className="label">Duration — English</label>
              <input className="input" value={editing.duration.en} onChange={e => setBi('duration', 'en', e.target.value)} placeholder="2 Years" />
            </div>
            <div>
              <label className="label">Duration — हिंदी</label>
              <input className="input" value={editing.duration.hi} onChange={e => setBi('duration', 'hi', e.target.value)} placeholder="2 वर्ष" dir="auto" />
            </div>

            {/* Seats + Affiliation */}
            <div>
              <label className="label">Seats</label>
              <input type="number" className="input" value={editing.seats} onChange={e => set('seats', Number(e.target.value))} />
            </div>
            <div>
              <label className="label">Affiliation</label>
              <input className="input" value={editing.affiliation} onChange={e => set('affiliation', e.target.value)} placeholder="NCTE / MCBU" />
            </div>

            {/* Eligibility */}
            <div>
              <label className="label">Eligibility — English</label>
              <input className="input" value={editing.eligible.en} onChange={e => setBi('eligible', 'en', e.target.value)} placeholder="Graduate (50%)" />
            </div>
            <div>
              <label className="label">Eligibility — हिंदी</label>
              <input className="input" value={editing.eligible.hi} onChange={e => setBi('eligible', 'hi', e.target.value)} placeholder="स्नातक (50%)" dir="auto" />
            </div>

            {/* Badge */}
            <div>
              <label className="label">Badge — English</label>
              <input className="input" value={editing.badge.en} onChange={e => setBi('badge', 'en', e.target.value)} placeholder="NCTE Recognized" />
            </div>
            <div>
              <label className="label">Badge — हिंदी</label>
              <input className="input" value={editing.badge.hi} onChange={e => setBi('badge', 'hi', e.target.value)} placeholder="NCTE मान्यता" dir="auto" />
            </div>

            {/* Fees */}
            <div>
              <label className="label">Annual Fee</label>
              <input className="input" value={editing.annualFee} onChange={e => set('annualFee', e.target.value)} placeholder="₹35,000" />
            </div>
            <div>
              <label className="label">Total Fee</label>
              <input className="input" value={editing.totalFee} onChange={e => set('totalFee', e.target.value)} placeholder="₹70,000" />
            </div>
            <div>
              <label className="label">Exam Fee — English</label>
              <input className="input" value={editing.examFee.en} onChange={e => setBi('examFee', 'en', e.target.value)} placeholder="As per MCBU" />
            </div>
            <div>
              <label className="label">Exam Fee — हिंदी</label>
              <input className="input" value={editing.examFee.hi} onChange={e => setBi('examFee', 'hi', e.target.value)} placeholder="MCBU के अनुसार" dir="auto" />
            </div>

            {/* Description */}
            <div className="sm:col-span-2">
              <label className="label">Description — English</label>
              <textarea className="input h-20 resize-none" value={editing.description.en} onChange={e => setBi('description', 'en', e.target.value)} />
            </div>
            <div className="sm:col-span-2">
              <label className="label">Description — हिंदी</label>
              <textarea className="input h-20 resize-none" value={editing.description.hi} onChange={e => setBi('description', 'hi', e.target.value)} dir="auto" />
            </div>

            {/* Syllabus URL */}
            <div className="sm:col-span-2">
              <label className="label">Syllabus URL (optional)</label>
              <input className="input" value={editing.syllabusUrl || ''} onChange={e => set('syllabusUrl', e.target.value)} placeholder="/docs/bed-syllabus.pdf" />
            </div>

            {/* Highlights */}
            <div className="sm:col-span-2">
              <div className="flex items-center justify-between mb-2">
                <label className="label mb-0">Highlights</label>
                <button type="button" onClick={addHighlight} className="text-xs text-brand-600 hover:underline flex items-center gap-1">
                  <Plus size={12} /> Add
                </button>
              </div>
              <div className="space-y-2">
                {editing.highlights.map((h, i) => (
                  <div key={i} className="flex gap-2 items-center">
                    <input className="input text-xs flex-1" value={h.en} onChange={e => setHighlight(i, 'en', e.target.value)} placeholder="English highlight" />
                    <input className="input text-xs flex-1" value={h.hi} onChange={e => setHighlight(i, 'hi', e.target.value)} placeholder="हिंदी हाइलाइट" dir="auto" />
                    <button onClick={() => removeHighlight(i)} className="p-1 text-gray-400 hover:text-red-500"><X size={13} /></button>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <label className="label">Display order</label>
              <input type="number" className="input" value={editing.order} onChange={e => set('order', Number(e.target.value))} />
            </div>
          </div>

          <div className="flex gap-3 mt-5">
            <button onClick={saveEdit} className="btn-primary text-xs px-4 py-2" disabled={saving || !editing.name.en}>
              <Save size={14} /> {saving ? 'Saving…' : 'Save course'}
            </button>
            <button onClick={() => setEditing(null)} className="btn-ghost text-xs">
              <X size={14} /> Cancel
            </button>
          </div>
        </div>
      )}

      {/* Courses list grouped by category */}
      <div className="space-y-3">
        {CATEGORIES.map(cat => {
          const catCourses = courses.filter(c => c.categoryId === cat.id).sort((a, b) => a.order - b.order);
          const open = expandedCat === cat.id;
          return (
            <div key={cat.id} className="bg-white border border-gray-100 rounded-xl overflow-hidden">
              <button
                onClick={() => setExpandedCat(open ? null : cat.id)}
                className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="text-sm font-semibold text-gray-900">{cat.label}</span>
                  <span className="text-xs text-gray-400">{catCourses.length} course{catCourses.length !== 1 ? 's' : ''}</span>
                </div>
                {open ? <ChevronUp size={16} className="text-gray-400" /> : <ChevronDown size={16} className="text-gray-400" />}
              </button>
              {open && (
                <div className="border-t border-gray-100">
                  {catCourses.length === 0 ? (
                    <p className="px-5 py-4 text-xs text-gray-400">No courses in this category.</p>
                  ) : catCourses.map(c => (
                    <div key={c.id} className="flex items-center justify-between px-5 py-3 border-b border-gray-50 last:border-0 hover:bg-gray-50">
                      <div>
                        <p className="text-sm font-medium text-gray-900">{c.short} — {c.name.en}</p>
                        <p className="text-xs text-gray-500 mt-0.5">{c.duration.en} · {c.seats} seats · {c.eligible.en}</p>
                      </div>
                      <div className="flex gap-2 flex-shrink-0">
                        <button onClick={() => setEditing(c)} className="p-1.5 text-gray-400 hover:text-brand-600 hover:bg-brand-50 rounded-lg transition-colors">
                          <Edit2 size={13} />
                        </button>
                        <button onClick={() => deleteCourse(c.id)} className="p-1.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                          <Trash2 size={13} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
