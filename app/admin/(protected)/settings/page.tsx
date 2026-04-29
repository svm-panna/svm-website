'use client';

import { useState, useEffect } from 'react';
import { Save, CheckCircle, AlertCircle } from 'lucide-react';
import { fetchSettings, updateSettings } from '@/lib/adminClient';
import type { SiteSettings } from '@/lib/data';

// ─── Field helpers ────────────────────────────────────────────────────────────

function getPath(obj: unknown, path: string): unknown {
  return path.split('.').reduce((o, k) => (o as Record<string, unknown>)?.[k], obj);
}

function setPath(obj: unknown, path: string, value: unknown): unknown {
  const keys = path.split('.');
  const updated = JSON.parse(JSON.stringify(obj));
  let cur: Record<string, unknown> = updated;
  for (let i = 0; i < keys.length - 1; i++) cur = cur[keys[i]] as Record<string, unknown>;
  cur[keys[keys.length - 1]] = value;
  return updated;
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
      <div className="px-5 py-3.5 border-b border-gray-100 bg-gray-50">
        <h2 className="text-sm font-semibold text-gray-800">{title}</h2>
      </div>
      <div className="p-5">{children}</div>
    </div>
  );
}

function Field({
  label, path, settings, onChange, type = 'text', span,
}: {
  label: string;
  path: string;
  settings: SiteSettings;
  onChange: (path: string, value: unknown) => void;
  type?: string;
  span?: 'full';
}) {
  const value = getPath(settings, path) as string | number;
  return (
    <div className={span === 'full' ? 'col-span-full' : ''}>
      <label className="label">{label}</label>
      <input
        type={type}
        className="input"
        value={value ?? ''}
        onChange={e => onChange(path, type === 'number' ? Number(e.target.value) : e.target.value)}
      />
    </div>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function AdminSettingsPage() {
  const [settings, setSettings] = useState<SiteSettings | null>(null);
  const [saving, setSaving] = useState(false);
  const [status, setStatus] = useState<'idle' | 'ok' | 'error'>('idle');

  useEffect(() => {
    fetchSettings().then(setSettings).catch(console.error);
  }, []);

  const onChange = (path: string, value: unknown) => {
    setSettings(prev => prev ? setPath(prev, path, value) as SiteSettings : prev);
  };

  const handleSave = async () => {
    if (!settings) return;
    setSaving(true);
    setStatus('idle');
    try {
      await updateSettings(settings);
      setStatus('ok');
      setTimeout(() => setStatus('idle'), 3000);
    } catch {
      setStatus('error');
    } finally {
      setSaving(false);
    }
  };

  if (!settings) {
    return <div className="text-sm text-gray-400 p-2">Loading…</div>;
  }

  return (
    <div className="max-w-3xl">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-xl font-semibold text-gray-900">Site settings</h1>
          <p className="text-sm text-gray-500 mt-0.5">All editable content shown on the public website</p>
        </div>
        <div className="flex items-center gap-3">
          {status === 'ok' && (
            <span className="flex items-center gap-1.5 text-xs text-green-700">
              <CheckCircle size={13} /> Saved
            </span>
          )}
          {status === 'error' && (
            <span className="flex items-center gap-1.5 text-xs text-red-600">
              <AlertCircle size={13} /> Error saving
            </span>
          )}
          <button
            onClick={handleSave}
            disabled={saving}
            className="btn-primary text-xs px-4 py-2 disabled:opacity-60"
          >
            <Save size={13} /> {saving ? 'Saving…' : 'Save changes'}
          </button>
        </div>
      </div>

      <div className="space-y-5">
        {/* ── College info ── */}
        <Section title="College information">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Field label="Full name" path="college.name" settings={settings} onChange={onChange} span="full" />
            <Field label="Short name" path="college.short_name" settings={settings} onChange={onChange} />
            <Field label="Established year" path="college.established" settings={settings} onChange={onChange} type="number" />
            <Field label="Tagline" path="college.tagline" settings={settings} onChange={onChange} span="full" />
            <Field label="Website URL" path="college.website" settings={settings} onChange={onChange} span="full" />
            <Field label="Address / location" path="college.location" settings={settings} onChange={onChange} span="full" />
            <Field label="Primary phone" path="college.phone" settings={settings} onChange={onChange} />
            <Field label="Secondary phone" path="college.phone2" settings={settings} onChange={onChange} />
            <Field label="Primary email" path="college.email" settings={settings} onChange={onChange} />
            <Field label="Secondary email" path="college.email2" settings={settings} onChange={onChange} />
            <Field label="Nearest railway station" path="college.nearest_railway" settings={settings} onChange={onChange} />
            <Field label="Nearest airport" path="college.nearest_airport" settings={settings} onChange={onChange} />
          </div>
        </Section>

        {/* ── Stats ── */}
        <Section title="Stats (shown in homepage hero)">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <Field label="Total intake" path="stats.total_intake" settings={settings} onChange={onChange} type="number" />
            <Field label="Faculty count" path="stats.faculty_count" settings={settings} onChange={onChange} type="number" />
            <Field label="Programmes" path="stats.programmes" settings={settings} onChange={onChange} type="number" />
            <Field label="Campus area (acres)" path="stats.area_acres" settings={settings} onChange={onChange} type="number" />
          </div>
        </Section>

        {/* ── Hero / Homepage ── */}
        <Section title="Homepage hero">
          <div className="space-y-4">
            <div>
              <label className="label">Badge text (below logo)</label>
              <input
                className="input"
                value={settings.hero.badge}
                onChange={e => onChange('hero.badge', e.target.value)}
              />
            </div>
            <div>
              <label className="label">Main heading</label>
              <input
                className="input"
                value={settings.hero.heading}
                onChange={e => onChange('hero.heading', e.target.value)}
              />
            </div>
            <div>
              <label className="label">Subheading</label>
              <textarea
                className="input min-h-[5rem] resize-y"
                value={settings.hero.subheading}
                onChange={e => onChange('hero.subheading', e.target.value)}
              />
            </div>
            <div>
              <label className="label">News ticker text</label>
              <textarea
                className="input min-h-[4rem] resize-y"
                value={settings.ticker_text}
                onChange={e => onChange('ticker_text', e.target.value)}
              />
            </div>
            <div className="flex items-center gap-3 pt-1">
              <input
                id="admission_open"
                type="checkbox"
                checked={settings.admission_open}
                onChange={e => onChange('admission_open', e.target.checked)}
                className="w-4 h-4 rounded accent-orange-500"
              />
              <label htmlFor="admission_open" className="text-sm text-gray-700 cursor-pointer">
                Admissions open (shows banner on homepage)
              </label>
            </div>
          </div>
        </Section>

        {/* ── Social media ── */}
        <Section title="Social media links">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Field label="Facebook URL" path="social.facebook" settings={settings} onChange={onChange} />
            <Field label="Instagram URL" path="social.instagram" settings={settings} onChange={onChange} />
            <Field label="YouTube URL" path="social.youtube" settings={settings} onChange={onChange} />
            <Field label="Twitter / X URL" path="social.twitter" settings={settings} onChange={onChange} />
          </div>
        </Section>

        {/* ── Affiliations ── */}
        <Section title="Affiliations">
          <div className="space-y-3">
            {settings.affiliations.map((a, i) => (
              <div key={i} className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 border border-gray-100 rounded-lg">
                <div>
                  <label className="label">Short name</label>
                  <input
                    className="input"
                    value={a.short}
                    onChange={e => {
                      const updated = [...settings.affiliations];
                      updated[i] = { ...a, short: e.target.value };
                      onChange('affiliations', updated);
                    }}
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="label">Full name</label>
                  <input
                    className="input"
                    value={a.name}
                    onChange={e => {
                      const updated = [...settings.affiliations];
                      updated[i] = { ...a, name: e.target.value };
                      onChange('affiliations', updated);
                    }}
                  />
                </div>
                <div>
                  <label className="label">Status</label>
                  <input
                    className="input"
                    value={a.status}
                    onChange={e => {
                      const updated = [...settings.affiliations];
                      updated[i] = { ...a, status: e.target.value };
                      onChange('affiliations', updated);
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Section>
      </div>
    </div>
  );
}
