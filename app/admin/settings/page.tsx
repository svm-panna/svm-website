'use client';

import { useState, useEffect } from 'react';
import { Save } from 'lucide-react';
import type { SiteSettings } from '@/lib/data';

export default function AdminSettingsPage() {
  const [settings, setSettings] = useState<SiteSettings | null>(null);
  const [saving, setSaving] = useState(false);
  const [msg, setMsg] = useState('');

  useEffect(() => {
    fetch('/api/settings').then(r => r.json()).then(setSettings);
  }, []);

  const handleSave = async () => {
    setSaving(true);
    const res = await fetch('/api/settings', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(settings),
    });
    setSaving(false);
    setMsg(res.ok ? 'Settings saved!' : 'Error saving');
    if (res.ok) setTimeout(() => setMsg(''), 3000);
  };

  if (!settings) return <div className="text-sm text-gray-500 p-6">Loading…</div>;

  const set = (path: string, value: unknown) => {
    setSettings(prev => {
      if (!prev) return prev;
      const keys = path.split('.');
      const updated = JSON.parse(JSON.stringify(prev));
      let obj: Record<string, unknown> = updated;
      for (let i = 0; i < keys.length - 1; i++) {
        obj = obj[keys[i]] as Record<string, unknown>;
      }
      obj[keys[keys.length - 1]] = value;
      return updated as SiteSettings;
    });
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-xl font-semibold text-gray-900">Site settings</h1>
          <p className="text-sm text-gray-500 mt-0.5">Edit college info and homepage content</p>
        </div>
        <button onClick={handleSave} disabled={saving} className="btn-primary text-xs px-4 py-2">
          <Save size={14} /> {saving ? 'Saving…' : 'Save changes'}
        </button>
      </div>

      {msg && (
        <div className={`mb-4 text-xs px-3 py-2 rounded-lg ${msg.includes('Error') ? 'bg-red-50 text-red-700' : 'bg-green-50 text-green-700'}`}>
          {msg}
        </div>
      )}

      <div className="space-y-6">
        {/* Hero section */}
        <div className="bg-white border border-gray-100 rounded-xl p-5">
          <h2 className="text-sm font-semibold text-gray-900 mb-4">Homepage hero</h2>
          <div className="space-y-4">
            <div>
              <label className="label">Badge text</label>
              <input className="input" value={settings.hero.badge} onChange={e => set('hero.badge', e.target.value)} />
            </div>
            <div>
              <label className="label">Heading</label>
              <input className="input" value={settings.hero.heading} onChange={e => set('hero.heading', e.target.value)} />
            </div>
            <div>
              <label className="label">Subheading</label>
              <textarea className="input min-h-20 resize-none" value={settings.hero.subheading} onChange={e => set('hero.subheading', e.target.value)} />
            </div>
            <div>
              <label className="label">Ticker text (news bar)</label>
              <input className="input" value={settings.ticker_text} onChange={e => set('ticker_text', e.target.value)} />
            </div>
            <div className="flex items-center gap-3">
              <label className="label mb-0">Admissions open</label>
              <input type="checkbox" checked={settings.admission_open} onChange={e => set('admission_open', e.target.checked)} className="w-4 h-4 accent-brand-600" />
            </div>
          </div>
        </div>

        {/* College info */}
        <div className="bg-white border border-gray-100 rounded-xl p-5">
          <h2 className="text-sm font-semibold text-gray-900 mb-4">College information</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { field: 'college.name', label: 'College name' },
              { field: 'college.tagline', label: 'Tagline' },
              { field: 'college.phone', label: 'Primary phone' },
              { field: 'college.phone2', label: 'Secondary phone' },
              { field: 'college.email', label: 'Primary email' },
              { field: 'college.email2', label: 'Secondary email' },
            ].map(({ field, label }) => {
              const keys = field.split('.');
              const val = keys.reduce((o, k) => (o as Record<string, unknown>)[k], settings as unknown) as string;
              return (
                <div key={field}>
                  <label className="label">{label}</label>
                  <input className="input" value={val || ''} onChange={e => set(field, e.target.value)} />
                </div>
              );
            })}
            <div className="sm:col-span-2">
              <label className="label">Location / address</label>
              <input className="input" value={settings.college.location} onChange={e => set('college.location', e.target.value)} />
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="bg-white border border-gray-100 rounded-xl p-5">
          <h2 className="text-sm font-semibold text-gray-900 mb-4">Stats (shown in hero)</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { field: 'stats.total_intake', label: 'Total intake' },
              { field: 'stats.faculty_count', label: 'Faculty count' },
              { field: 'stats.programmes', label: 'Programmes' },
              { field: 'stats.area_acres', label: 'Campus area (acres)' },
            ].map(({ field, label }) => {
              const keys = field.split('.');
              const val = keys.reduce((o, k) => (o as Record<string, unknown>)[k], settings as unknown) as number;
              return (
                <div key={field}>
                  <label className="label">{label}</label>
                  <input type="number" className="input" value={val} onChange={e => set(field, Number(e.target.value))} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
