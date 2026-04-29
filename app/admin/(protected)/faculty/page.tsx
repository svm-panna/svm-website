'use client';

import { useState, useEffect } from 'react';
import { Plus, Trash2, Edit2, Save, X } from 'lucide-react';
import type { FacultyMember } from '@/lib/data';

const emptyMember = (): FacultyMember => ({
  id: Date.now().toString(),
  name: { en: '', hi: '' },
  role: 'lecturer',
  designation: { en: 'Lecturer', hi: 'व्याख्याता' },
  qualifications: '',
  specialization: '',
  email: '',
  photo: '',
  order: 99,
});

const ROLES: { value: FacultyMember['role']; label: string }[] = [
  { value: 'principal', label: 'Principal' },
  { value: 'lecturer', label: 'Lecturer' },
  { value: 'specialized', label: 'Specialized Teacher' },
];

const roleLabel = (role: string) => ROLES.find(r => r.value === role)?.label ?? role;

export default function AdminFacultyPage() {
  const [faculty, setFaculty] = useState<FacultyMember[]>([]);
  const [editing, setEditing] = useState<FacultyMember | null>(null);
  const [saving, setSaving] = useState(false);
  const [msg, setMsg] = useState('');

  useEffect(() => {
    fetch('/api/faculty').then(r => r.json()).then(setFaculty);
  }, []);

  const save = async (updated: FacultyMember[]) => {
    setSaving(true);
    setMsg('');
    const res = await fetch('/api/faculty', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updated),
    });
    setSaving(false);
    setMsg(res.ok ? 'Saved' : 'Error saving');
    if (res.ok) setTimeout(() => setMsg(''), 3000);
  };

  const saveEdit = () => {
    if (!editing || !editing.name.en) return;
    const updated = faculty.find(f => f.id === editing.id)
      ? faculty.map(f => f.id === editing.id ? editing : f)
      : [...faculty, editing];
    const sorted = updated.sort((a, b) => a.order - b.order);
    setFaculty(sorted);
    setEditing(null);
    save(sorted);
  };

  const deleteMember = (id: string) => {
    const updated = faculty.filter(f => f.id !== id);
    setFaculty(updated);
    save(updated);
  };

  const set = <K extends keyof FacultyMember>(key: K, val: FacultyMember[K]) =>
    setEditing(prev => prev ? { ...prev, [key]: val } : prev);

  const setBi = (key: 'name' | 'designation', lang: 'en' | 'hi', val: string) =>
    setEditing(prev => prev ? { ...prev, [key]: { ...(prev[key] as { en: string; hi: string }), [lang]: val } } : prev);

  const grouped = {
    principal: faculty.filter(f => f.role === 'principal'),
    lecturer: faculty.filter(f => f.role === 'lecturer'),
    specialized: faculty.filter(f => f.role === 'specialized'),
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-xl font-semibold text-gray-900">Faculty list</h1>
          <p className="text-sm text-gray-500 mt-0.5">Manage faculty shown on the About page</p>
        </div>
        <button onClick={() => setEditing(emptyMember())} className="btn-primary text-xs px-4 py-2">
          <Plus size={14} /> Add member
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
            {faculty.find(f => f.id === editing.id) ? 'Edit member' : 'New member'}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="label">Name — English *</label>
              <input className="input" value={editing.name.en} onChange={e => setBi('name', 'en', e.target.value)} placeholder="Dr. Saurabh Agrawal" />
            </div>
            <div>
              <label className="label">Name — हिंदी</label>
              <input className="input" value={editing.name.hi} onChange={e => setBi('name', 'hi', e.target.value)} placeholder="डॉ. सौरभ अग्रवाल" dir="auto" />
            </div>
            <div>
              <label className="label">Designation — English</label>
              <input className="input" value={editing.designation.en} onChange={e => setBi('designation', 'en', e.target.value)} placeholder="Lecturer" />
            </div>
            <div>
              <label className="label">Designation — हिंदी</label>
              <input className="input" value={editing.designation.hi} onChange={e => setBi('designation', 'hi', e.target.value)} placeholder="व्याख्याता" dir="auto" />
            </div>
            <div>
              <label className="label">Role</label>
              <select className="input" value={editing.role} onChange={e => set('role', e.target.value as FacultyMember['role'])}>
                {ROLES.map(r => <option key={r.value} value={r.value}>{r.label}</option>)}
              </select>
            </div>
            <div>
              <label className="label">Display order</label>
              <input type="number" className="input" value={editing.order} onChange={e => set('order', Number(e.target.value))} />
            </div>
            <div>
              <label className="label">Qualifications</label>
              <input className="input" value={editing.qualifications || ''} onChange={e => set('qualifications', e.target.value)} placeholder="M.Ed., Ph.D." />
            </div>
            <div>
              <label className="label">Specialization</label>
              <input className="input" value={editing.specialization || ''} onChange={e => set('specialization', e.target.value)} placeholder="Education Administration" />
            </div>
            <div>
              <label className="label">Email</label>
              <input type="email" className="input" value={editing.email || ''} onChange={e => set('email', e.target.value)} placeholder="name@college.edu.in" />
            </div>
            <div>
              <label className="label">Photo path</label>
              <input className="input" value={editing.photo || ''} onChange={e => set('photo', e.target.value)} placeholder="/images/faculty/name.jpg" />
            </div>
          </div>
          <div className="flex gap-3 mt-4">
            <button onClick={saveEdit} className="btn-primary text-xs px-4 py-2" disabled={saving || !editing.name.en}>
              <Save size={14} /> {saving ? 'Saving…' : 'Save'}
            </button>
            <button onClick={() => setEditing(null)} className="btn-ghost text-xs">
              <X size={14} /> Cancel
            </button>
          </div>
        </div>
      )}

      {(['principal', 'lecturer', 'specialized'] as const).map(role => (
        <div key={role} className="mb-4">
          <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 px-1">{roleLabel(role)}</h2>
          <div className="bg-white border border-gray-100 rounded-xl overflow-hidden">
            {grouped[role].length === 0 ? (
              <p className="px-5 py-4 text-xs text-gray-400">None.</p>
            ) : grouped[role].map(f => (
              <div key={f.id} className="flex items-center justify-between px-5 py-3 border-b border-gray-50 last:border-0 hover:bg-gray-50">
                <div>
                  <p className="text-sm font-medium text-gray-900">{f.name.en}</p>
                  <p className="text-xs text-gray-500">{f.designation.en}{f.qualifications ? ` · ${f.qualifications}` : ''}</p>
                </div>
                <div className="flex gap-2">
                  <button onClick={() => setEditing(f)} className="p-1.5 text-gray-400 hover:text-brand-600 hover:bg-brand-50 rounded-lg transition-colors">
                    <Edit2 size={13} />
                  </button>
                  <button onClick={() => deleteMember(f.id)} className="p-1.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                    <Trash2 size={13} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
