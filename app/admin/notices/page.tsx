'use client';

import { useState, useEffect } from 'react';
import { Plus, Trash2, Edit2, Save, X } from 'lucide-react';
import { formatDate } from '@/lib/utils';
import type { Notice } from '@/lib/data';

const emptyNotice = (): Notice => ({
  id: Date.now().toString(),
  title: '',
  category: 'general',
  tag: 'general',
  date: new Date().toISOString().split('T')[0],
  link: '',
});

export default function AdminNoticesPage() {
  const [notices, setNotices] = useState<Notice[]>([]);
  const [editing, setEditing] = useState<Notice | null>(null);
  const [saving, setSaving] = useState(false);
  const [msg, setMsg] = useState('');

  useEffect(() => {
    fetch('/api/notices').then(r => r.json()).then(setNotices);
  }, []);

  const save = async (updated: Notice[]) => {
    setSaving(true);
    setMsg('');
    const res = await fetch('/api/notices', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updated),
    });
    setSaving(false);
    setMsg(res.ok ? 'Saved successfully' : 'Error saving');
    if (res.ok) setTimeout(() => setMsg(''), 3000);
  };

  const addNotice = () => setEditing(emptyNotice());

  const saveEdit = () => {
    if (!editing) return;
    const updated = notices.find(n => n.id === editing.id)
      ? notices.map(n => n.id === editing.id ? editing : n)
      : [editing, ...notices];
    setNotices(updated);
    setEditing(null);
    save(updated);
  };

  const deleteNotice = (id: string) => {
    const updated = notices.filter(n => n.id !== id);
    setNotices(updated);
    save(updated);
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-xl font-semibold text-gray-900">Notices &amp; circulars</h1>
          <p className="text-sm text-gray-500 mt-0.5">Manage notices shown on the website</p>
        </div>
        <button onClick={addNotice} className="btn-primary text-xs px-4 py-2">
          <Plus size={14} /> Add notice
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
            {notices.find(n => n.id === editing.id) ? 'Edit notice' : 'New notice'}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="sm:col-span-2">
              <label className="label">Title *</label>
              <input className="input" value={editing.title} onChange={e => setEditing({ ...editing, title: e.target.value })} placeholder="Notice title" />
            </div>
            <div>
              <label className="label">Tag</label>
              <select className="input" value={editing.tag} onChange={e => setEditing({ ...editing, tag: e.target.value as Notice['tag'] })}>
                <option value="general">General</option>
                <option value="new">New</option>
                <option value="important">Important</option>
                <option value="exam">Exam</option>
                <option value="event">Event</option>
              </select>
            </div>
            <div>
              <label className="label">Date</label>
              <input type="date" className="input" value={editing.date} onChange={e => setEditing({ ...editing, date: e.target.value })} />
            </div>
            <div>
              <label className="label">Category</label>
              <input className="input" value={editing.category} onChange={e => setEditing({ ...editing, category: e.target.value })} placeholder="e.g. admission, exam, event" />
            </div>
            <div>
              <label className="label">Link (optional)</label>
              <input className="input" value={editing.link || ''} onChange={e => setEditing({ ...editing, link: e.target.value })} placeholder="/students/notices" />
            </div>
          </div>
          <div className="flex gap-3 mt-4">
            <button onClick={saveEdit} className="btn-primary text-xs px-4 py-2" disabled={saving || !editing.title}>
              <Save size={14} /> Save
            </button>
            <button onClick={() => setEditing(null)} className="btn-ghost text-xs">
              <X size={14} /> Cancel
            </button>
          </div>
        </div>
      )}

      {/* Notices list */}
      <div className="bg-white border border-gray-100 rounded-xl overflow-hidden">
        <div className="grid grid-cols-12 px-4 py-2 border-b border-gray-100 text-xs font-medium text-gray-500">
          <span className="col-span-6">Title</span>
          <span className="col-span-2">Tag</span>
          <span className="col-span-2">Date</span>
          <span className="col-span-2 text-right">Actions</span>
        </div>
        {notices.length === 0 && (
          <div className="px-4 py-8 text-center text-xs text-gray-400">No notices yet. Click &quot;Add notice&quot; to create one.</div>
        )}
        {notices.map((n) => (
          <div key={n.id} className="grid grid-cols-12 px-4 py-3 border-b border-gray-50 last:border-0 items-center hover:bg-gray-50 transition-colors">
            <span className="col-span-6 text-xs text-gray-800 truncate pr-4">{n.title}</span>
            <span className="col-span-2">
              <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded capitalize">{n.tag}</span>
            </span>
            <span className="col-span-2 text-xs text-gray-500">{formatDate(n.date)}</span>
            <div className="col-span-2 flex justify-end gap-2">
              <button onClick={() => setEditing(n)} className="p-1.5 text-gray-400 hover:text-brand-600 hover:bg-brand-50 rounded-lg transition-colors">
                <Edit2 size={13} />
              </button>
              <button onClick={() => deleteNotice(n.id)} className="p-1.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                <Trash2 size={13} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
