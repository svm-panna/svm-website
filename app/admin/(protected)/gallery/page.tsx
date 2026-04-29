'use client';

import { useState, useEffect } from 'react';
import { Plus, Trash2, Edit2, Save, X } from 'lucide-react';
import type { GalleryImage } from '@/lib/data';

const emptyImage = (): GalleryImage => ({
  id: `g${Date.now()}`,
  src: '',
  alt: { en: '', hi: '' },
  caption: { en: '', hi: '' },
  tag: 'campus',
  order: 99,
});

const TAGS = ['campus', 'academics', 'events', 'sports'];

export default function AdminGalleryPage() {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [editing, setEditing] = useState<GalleryImage | null>(null);
  const [saving, setSaving] = useState(false);
  const [msg, setMsg] = useState('');

  useEffect(() => {
    fetch('/api/gallery').then(r => r.json()).then(setImages);
  }, []);

  const save = async (updated: GalleryImage[]) => {
    setSaving(true);
    setMsg('');
    const res = await fetch('/api/gallery', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updated),
    });
    setSaving(false);
    setMsg(res.ok ? 'Saved' : 'Error saving');
    if (res.ok) setTimeout(() => setMsg(''), 3000);
  };

  const saveEdit = () => {
    if (!editing || !editing.src) return;
    const updated = images.find(i => i.id === editing.id)
      ? images.map(i => i.id === editing.id ? editing : i)
      : [...images, editing];
    const sorted = updated.sort((a, b) => a.order - b.order);
    setImages(sorted);
    setEditing(null);
    save(sorted);
  };

  const deleteImage = (id: string) => {
    const updated = images.filter(i => i.id !== id);
    setImages(updated);
    save(updated);
  };

  const set = <K extends keyof GalleryImage>(key: K, val: GalleryImage[K]) =>
    setEditing(prev => prev ? { ...prev, [key]: val } : prev);

  const setBi = (key: 'alt' | 'caption', lang: 'en' | 'hi', val: string) =>
    setEditing(prev => prev ? { ...prev, [key]: { ...(prev[key] as { en: string; hi: string }), [lang]: val } } : prev);

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-xl font-semibold text-gray-900">Campus gallery</h1>
          <p className="text-sm text-gray-500 mt-0.5">Manage gallery images shown on the website</p>
        </div>
        <button onClick={() => setEditing(emptyImage())} className="btn-primary text-xs px-4 py-2">
          <Plus size={14} /> Add image
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
            {images.find(i => i.id === editing.id) ? 'Edit image' : 'Add image'}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="sm:col-span-2">
              <label className="label">Image path *</label>
              <input className="input" value={editing.src} onChange={e => set('src', e.target.value)} placeholder="/images/gallery-01.jpeg" />
              {editing.src && (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={editing.src} alt="preview" className="mt-2 h-24 object-cover rounded-lg border" />
              )}
            </div>
            <div>
              <label className="label">Alt text — English *</label>
              <input className="input" value={editing.alt.en} onChange={e => setBi('alt', 'en', e.target.value)} placeholder="Annual cultural programme" />
            </div>
            <div>
              <label className="label">Alt text — हिंदी</label>
              <input className="input" value={editing.alt.hi} onChange={e => setBi('alt', 'hi', e.target.value)} placeholder="वार्षिक सांस्कृतिक कार्यक्रम" dir="auto" />
            </div>
            <div>
              <label className="label">Caption — English</label>
              <input className="input" value={editing.caption.en} onChange={e => setBi('caption', 'en', e.target.value)} placeholder="Caption shown on hover" />
            </div>
            <div>
              <label className="label">Caption — हिंदी</label>
              <input className="input" value={editing.caption.hi} onChange={e => setBi('caption', 'hi', e.target.value)} placeholder="होवर पर दिखने वाला कैप्शन" dir="auto" />
            </div>
            <div>
              <label className="label">Tag</label>
              <select className="input" value={editing.tag || 'campus'} onChange={e => set('tag', e.target.value)}>
                {TAGS.map(t => <option key={t} value={t}>{t}</option>)}
              </select>
            </div>
            <div>
              <label className="label">Display order</label>
              <input type="number" className="input" value={editing.order} onChange={e => set('order', Number(e.target.value))} />
            </div>
          </div>
          <div className="flex gap-3 mt-4">
            <button onClick={saveEdit} className="btn-primary text-xs px-4 py-2" disabled={saving || !editing.src || !editing.alt.en}>
              <Save size={14} /> {saving ? 'Saving…' : 'Save'}
            </button>
            <button onClick={() => setEditing(null)} className="btn-ghost text-xs">
              <X size={14} /> Cancel
            </button>
          </div>
        </div>
      )}

      {/* Grid preview */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        {images.sort((a, b) => a.order - b.order).map(img => (
          <div key={img.id} className="relative group rounded-xl overflow-hidden border border-gray-100 bg-white">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={img.src}
              alt={img.alt.en}
              className="w-full aspect-square object-cover"
              onError={e => { (e.target as HTMLImageElement).style.display = 'none'; }}
            />
            <div className="p-2">
              <p className="text-xs text-gray-700 truncate">{img.alt.en}</p>
              <p className="text-xs text-gray-400">{img.tag} · #{img.order}</p>
            </div>
            <div className="absolute top-2 right-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
              <button onClick={() => setEditing(img)} className="p-1 bg-white rounded-lg shadow text-gray-500 hover:text-brand-600">
                <Edit2 size={12} />
              </button>
              <button onClick={() => deleteImage(img.id)} className="p-1 bg-white rounded-lg shadow text-gray-500 hover:text-red-600">
                <Trash2 size={12} />
              </button>
            </div>
          </div>
        ))}
      </div>
      {images.length === 0 && (
        <div className="text-center text-xs text-gray-400 py-10">No images yet. Click &quot;Add image&quot; to add one.</div>
      )}
    </div>
  );
}
