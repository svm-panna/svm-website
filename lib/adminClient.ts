/**
 * Admin data service layer.
 *
 * All admin pages MUST use these functions — never call fetch('/api/...') directly.
 * To connect a real backend API: change BASE_URL and update the auth header below.
 * The rest of the codebase stays the same.
 */

import type {
  SiteSettings,
  Notice,
  Course,
  CourseCategory,
  FacultyMember,
  GalleryImage,
  ImportantDate,
} from '@/lib/data';

// ─── Transport ───────────────────────────────────────────────────────────────
// Replace BASE_URL with your API root when ready (e.g. 'https://api.yoursite.com')
const BASE_URL = '';

async function apiGet<T>(path: string): Promise<T> {
  const res = await fetch(`${BASE_URL}${path}`, { cache: 'no-store' });
  if (!res.ok) throw new Error(`GET ${path} → ${res.status}`);
  return res.json() as Promise<T>;
}

async function apiPut<T>(path: string, body: unknown): Promise<T> {
  const res = await fetch(`${BASE_URL}${path}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error(`PUT ${path} → ${res.status}`);
  return res.json() as Promise<T>;
}

// ─── Settings ────────────────────────────────────────────────────────────────
export const fetchSettings = () => apiGet<SiteSettings>('/api/settings');
export const updateSettings = (data: SiteSettings) => apiPut<{ success: boolean }>('/api/settings', data);

// ─── Notices ─────────────────────────────────────────────────────────────────
export const fetchNotices = () => apiGet<Notice[]>('/api/notices');
export const updateNotices = (data: Notice[]) => apiPut<{ success: boolean }>('/api/notices', data);

// ─── Courses ─────────────────────────────────────────────────────────────────
export const fetchCourses = () =>
  apiGet<{ courses: Course[]; categories: CourseCategory[] }>('/api/courses');
export const updateCourses = (courses: Course[], categories: CourseCategory[]) =>
  apiPut<{ success: boolean }>('/api/courses', { courses, categories });

// ─── Faculty ─────────────────────────────────────────────────────────────────
export const fetchFaculty = () => apiGet<FacultyMember[]>('/api/faculty');
export const updateFaculty = (data: FacultyMember[]) => apiPut<{ success: boolean }>('/api/faculty', data);

// ─── Gallery ─────────────────────────────────────────────────────────────────
export const fetchGallery = () => apiGet<GalleryImage[]>('/api/gallery');
export const updateGallery = (data: GalleryImage[]) => apiPut<{ success: boolean }>('/api/gallery', data);

// ─── Important Dates ─────────────────────────────────────────────────────────
export const fetchImportantDates = () => apiGet<ImportantDate[]>('/api/important-dates');
export const updateImportantDates = (data: ImportantDate[]) =>
  apiPut<{ success: boolean }>('/api/important-dates', data);
