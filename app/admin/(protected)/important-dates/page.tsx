'use client';

import { useState, useEffect } from 'react';
import { Plus, Trash2, Edit2, Save, X } from 'lucide-react';
import type { ImportantDate } from '@/lib/data';

const emptyDate = (): ImportantDate => ({
  id: Date.now().toString(),
  month: { en: '', hi: '' },
  day: '',
  title: { en: '', hi: '' },
  description: { en: '', hi: '' },
  highlight: false,
});

export default function AdminImportantDatesPage() {
  const [dates, setDates] = useState<ImportantDate[]>([]);
  const [editing, setEditing] = useState<ImportantDate | null>(null);
  const [saving, setSaving] = useState(false);
  const [msg, setMsg] = useState('');

  useEffect(() => {
    fetch('/api/important-dates').then(r => r.json()).then(setDates);
  }, []);

  const save = async (updated: ImportantDate[]) => {
    setSaving(true);
    setMsg('');
    const res = await fetch('/api/important-dates', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updated),
    });
    setSaving(false);
    setMsg(res.ok ? 'Saved' : 'Error saving');
    if (res.ok) setTimeout(() => setMsg(''), 3000);
  };

  const saveEdit = () => {
    if (!editing || !editing.title.en) return;
    const updated = dates.find(d => d.id === editing.id)
      ? dates.map(d => d.id === editing.id ? editing : d)
      : [...dates, editing];
    setDates(updated);
    setEditing(null);
    save(updated);
  };

  const deleteDate = (id: string) => {
    const updated = dates.filter(d => d.id !== id);
    setDates(updated);
    save(updated);
  };

  const set = <K extends keyof ImportantDate>(key: K, val: ImportantDate[K]) =>
    setEditing(prev => prev ? { ...prev, [key]: val } : prev);

  const setBi = (key: 'month' | 'title' | 'description', lang: 'en' | 'hi', val: string) =>
    setEditing(prev => prev ? { ...prev, [key]: { ...(prev[key] as { en: string; hi: string }), [lang]: val } } : prev);

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-xl font-semibold text-gray-900">Important dates 2026–27</h1>
          <p className="text-sm text-gray-500 mt-0.5">Admission timeline shown on the Admissions page</p>
        </div>
        <button onClick={() => setEditing(emptyDate())} className="btn-primary text-xs px-4 py-2">
          <Plus size={14} /> Add date
        </button>
      </div>

      {msg && (
        <div className={`mb-4 text-xs px-3 py-2 rounded-lg ${msg.includes('Error') ? 'bg-red-50 text-red-700' : 'bg-green-50 text-green-700'}`}>
          {msg}
        </div>
      )}

      {editing && (
        <div className="bg-white border border-brand-200 rounded-xl p-5 mb-6">
          <h2 className="text-sm font-semibold text-gray-900 mb-4">
            {dates.find(d => d.id === editing.id) ? 'Edit date' : 'New date'}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="label">Month — English (e.g. MAY)</label>
              <input className="input" value={editing.month.en} onChange={e => setBi('month', 'en', e.target.value)} placeholder="MAY" />
            </div>
            <div>
              <label className="label">Month — हिंदी (e.g. मई)</label>
              <input className="input" value={editing.month.hi} onChange={e => setBi('month', 'hi', e.target.value)} placeholder="मई" dir="auto" />
            </div>
            <div>
              <label className="label">Day</label>
              <input className="input" value={editing.day} onChange={e => set('day', e.target.value)} placeholder="1" />
            </div>
            <div className="flex items-center gap-3 pt-6">
              <input
                type="checkbox"
                id="highlight"
                checked={editing.highlight}
                onChange={e => set('highlight', e.target.checked)}
                className="w-4 h-4 accent-brand-600"
              />
              <label htmlFor="highlight" className="label mb-0">Highlight (featured card)</label>
            </div>
            <div>
              <label className="label">Title — English *</label>
              <input className="input" value={editing.title.en} onChange={e => setBi('title', 'en', e.target.value)} placeholder="Admissions Open" />
            </div>
            <div>
              <label className="label">Title — हिंदी</label>
              <input className="input" value={editing.title.hi} onChange={e => setBi('title', 'hi', e.target.value)} placeholder="प्रवेश खुले" dir="auto" />
            </div>
            <div>
              <label className="label">Description — English</label>
              <input className="input" value={editing.description.en} onChange={e => setBi('description', 'en', e.target.value)} placeholder="Application forms available online" />
            </div>
            <div>
              <label className="label">Description — हिंदी</label>
              <input className="input" value={editing.description.hi} onChange={e => setBi('description', 'hi', e.target.value)} placeholder="आवेदन फॉर्म ऑनलाइन उपलब्ध" dir="auto" />
            </div>
          </div>
          <div className="flex gap-3 mt-4">
            <button onClick={saveEdit} className="btn-primary text-xs px-4 py-2" disabled={saving || !editing.title.en}>
              <Save size={14} /> {saving ? 'Saving…' : 'Save'}
            </button>
            <button onClick={() => setEditing(null)} className="btn-ghost text-xs">
              <X size={14} /> Cancel
            </button>
          </div>
        </div>
      )}

      <div className="bg-white border border-gray-100 rounded-xl overflow-hidden">
        {dates.length === 0 ? (
          <div className="px-5 py-8 text-center text-xs text-gray-400">No dates yet.</div>
        ) : dates.map(d => (
          <div key={d.id} className="flex items-center gap-4 px-5 py-3 border-b border-gray-50 last:border-0 hover:bg-gray-50">
            <div
              className="flex-shrink-0 w-12 h-12 rounded-xl flex flex-col items-center justify-center text-white"
              style={{ background: d.highlight ? '#E87722' : '#1A2B4A' }}
            >
              <span className="text-xs font-bold leading-none">{d.month.en}</span>
              <span className="text-lg font-bold leading-none">{d.day}</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-gray-900">{d.title.en}</p>
              <p className="text-xs text-gray-500 truncate">{d.description.en}</p>
            </div>
            {d.highlight && (
              <span className="text-xs bg-orange-50 text-orange-600 px-2 py-0.5 rounded-full flex-shrink-0">Featured</span>
            )}
            <div className="flex gap-2 flex-shrink-0">
              <button onClick={() => setEditing(d)} className="p-1.5 text-gray-400 hover:text-brand-600 hover:bg-brand-50 rounded-lg transition-colors">
                <Edit2 size={13} />
              </button>
              <button onClick={() => deleteDate(d.id)} className="p-1.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                <Trash2 size={13} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
