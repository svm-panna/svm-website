'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/lib/translations';

type NoticeTag = 'important' | 'new' | 'exam' | 'event' | 'general';

interface Notice {
  id: string;
  title: { en: string; hi: string } | string;
  category: string;
  tag: NoticeTag;
  date: string;
  link?: string;
}

const TAG_STYLES: Record<NoticeTag, { bg: string; color: string; dot: string }> = {
  important: { bg: '#FEE2E2', color: '#B91C1C', dot: '#EF4444' },
  new:       { bg: '#DCFCE7', color: '#15803D', dot: '#22C55E' },
  exam:      { bg: '#DBEAFE', color: '#1D4ED8', dot: '#3B82F6' },
  event:     { bg: '#EDE9FE', color: '#6D28D9', dot: '#8B5CF6' },
  general:   { bg: '#F3F4F6', color: '#4B5563', dot: '#9CA3AF' },
};

function formatDate(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
}

export default function NoticeBoard() {
  const { lang } = useLanguage();
  const T = translations[lang].home;

  const [notices, setNotices] = useState<Notice[]>([]);
  const [loading, setLoading] = useState(true);

  const getTitle = (title: Notice['title']) =>
    typeof title === 'string' ? title : (title[lang] || title.en);

  useEffect(() => {
    fetch('/api/notices')
      .then((r) => r.json())
      .then((data: Notice[]) => {
        setNotices(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const tagLabel: Record<NoticeTag, string> = {
    important: T.noticeBoardTagImportant,
    new:       T.noticeBoardTagNew,
    exam:      T.noticeBoardTagExam,
    event:     T.noticeBoardTagEvent,
    general:   T.noticeBoardTagGeneral,
  };

  // Sort: important first, then by date descending
  const sorted = [...notices].sort((a, b) => {
    if (a.tag === 'important' && b.tag !== 'important') return -1;
    if (b.tag === 'important' && a.tag !== 'important') return 1;
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  const importantNotices = sorted.filter((n) => n.tag === 'important');

  return (
    <section className="py-16" style={{ background: '#F7F3EE' }}>
      <div className="max-w-7xl mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-10">
          <div
            className="text-xs font-semibold tracking-widest uppercase mb-2"
            style={{ color: '#E87722' }}
          >
            {T.noticeBoardLabel}
          </div>
          <h2
            className="text-3xl sm:text-4xl font-bold mb-3"
            style={{ fontFamily: '"DM Serif Display", serif', color: '#1A2B4A' }}
          >
            {T.noticeBoardTitle}
          </h2>
          <div className="w-14 h-1 mx-auto rounded-full" style={{ background: '#E87722' }} />
          <p className="text-gray-500 mt-4 max-w-xl mx-auto text-base leading-relaxed">
            {T.noticeBoardDesc}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 items-start">
          {/* Ticker strip for important notices — left column on lg */}
          {importantNotices.length > 0 && (
            <div
              className="lg:col-span-1 rounded-2xl overflow-hidden shadow-sm border"
              style={{ borderColor: '#FDDBB4', background: '#FEF3EB' }}
            >
              <div
                className="flex items-center gap-2 px-4 py-3"
                style={{ background: '#E87722' }}
              >
                {/* Bell icon */}
                <svg className="w-4 h-4 text-white flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
                <span className="text-white text-xs font-bold uppercase tracking-widest">
                  {T.noticeBoardTagImportant}
                </span>
              </div>
              <ul className="divide-y divide-orange-100">
                {importantNotices.map((n) => (
                  <li key={n.id} className="px-4 py-4 group">
                    <div className="flex items-start gap-2">
                      <span
                        className="mt-1.5 w-2 h-2 rounded-full flex-shrink-0"
                        style={{ background: TAG_STYLES.important.dot }}
                      />
                      <div className="flex-1 min-w-0">
                        {n.link ? (
                          <Link
                            href={n.link}
                            className="text-sm font-semibold leading-snug transition-colors hover:text-[#E87722] line-clamp-2"
                            style={{ color: '#1A2B4A' }}
                          >
                            {getTitle(n.title)}
                          </Link>
                        ) : (
                          <p
                            className="text-sm font-semibold leading-snug line-clamp-2"
                            style={{ color: '#1A2B4A' }}
                          >
                            {getTitle(n.title)}
                          </p>
                        )}
                        <p className="text-xs mt-1" style={{ color: '#C85E0A' }}>
                          {formatDate(n.date)}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Scrollable notice list */}
          <div
            className={`rounded-2xl shadow-sm border overflow-hidden bg-white ${
              importantNotices.length > 0 ? 'lg:col-span-2' : 'lg:col-span-3'
            }`}
            style={{ borderColor: '#E8DDD0' }}
          >
            {/* List header */}
            <div
              className="flex items-center justify-between px-5 py-4 border-b"
              style={{ borderColor: '#F0E8DE', background: '#FAFAFA' }}
            >
              <div className="flex items-center gap-2">
                {/* Document icon */}
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="#E87722" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round"
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span className="text-sm font-bold" style={{ color: '#1A2B4A' }}>
                  {T.noticeBoardTitle}
                </span>
              </div>
              <Link
                href="/students/notices"
                className="text-xs font-semibold transition-colors hover:text-[#C85E0A]"
                style={{ color: '#E87722' }}
              >
                {T.noticeBoardViewAll}
              </Link>
            </div>

            {/* Scrollable list */}
            <div
              className="overflow-y-auto divide-y"
              style={{ maxHeight: '340px', borderColor: '#F0E8DE' }}
            >
              {loading ? (
                // Skeleton
                Array.from({ length: 4 }).map((_, i) => (
                  <div key={i} className="px-5 py-4 animate-pulse flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-gray-100 flex-shrink-0" />
                    <div className="flex-1 space-y-2">
                      <div className="h-3 bg-gray-100 rounded w-3/4" />
                      <div className="h-3 bg-gray-100 rounded w-1/2" />
                    </div>
                  </div>
                ))
              ) : sorted.length === 0 ? (
                <div className="px-5 py-10 text-center text-sm text-gray-400">
                  {T.noticeBoardEmpty}
                </div>
              ) : (
                sorted.map((notice) => {
                  const style = TAG_STYLES[notice.tag] ?? TAG_STYLES.general;
                  const label = tagLabel[notice.tag] ?? notice.tag;
                  const inner = (
                    <>
                      {/* Tag icon box */}
                      <div
                        className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
                        style={{ background: style.bg }}
                      >
                        <span
                          className="w-2.5 h-2.5 rounded-full"
                          style={{ background: style.dot }}
                        />
                      </div>

                      {/* Text */}
                      <div className="flex-1 min-w-0">
                        <p
                          className="text-sm font-semibold leading-snug line-clamp-2 transition-colors"
                          style={{ color: '#1A2B4A' }}
                        >
                          {getTitle(notice.title)}
                        </p>
                        <div className="flex items-center gap-2 mt-1.5 flex-wrap">
                          <span
                            className="text-xs font-semibold px-2 py-0.5 rounded-full"
                            style={{ background: style.bg, color: style.color }}
                          >
                            {label}
                          </span>
                          <span className="text-xs text-gray-400">{formatDate(notice.date)}</span>
                        </div>
                      </div>

                      {/* Arrow if linkable */}
                      {notice.link && (
                        <svg
                          className="w-4 h-4 flex-shrink-0 text-gray-300 transition-transform group-hover:translate-x-0.5 group-hover:text-[#E87722]"
                          viewBox="0 0 20 20"
                          fill="none"
                        >
                          <path
                            d="M4 10h12M10 4l6 6-6 6"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      )}
                    </>
                  );

                  return notice.link ? (
                    <Link
                      key={notice.id}
                      href={notice.link}
                      className="flex items-center gap-4 px-5 py-4 group hover:bg-[#FEF9F5] transition-colors"
                    >
                      {inner}
                    </Link>
                  ) : (
                    <div key={notice.id} className="flex items-center gap-4 px-5 py-4">
                      {inner}
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
