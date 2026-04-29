import fs from 'fs';
import path from 'path';

const dataDir = path.join(process.cwd(), 'data');

function readJSON<T>(filename: string): T {
  const filePath = path.join(dataDir, filename);
  const raw = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(raw) as T;
}

function writeJSON(filename: string, data: unknown): void {
  const filePath = path.join(dataDir, filename);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');
}

// ─── Shared ───────────────────────────────────────────────────────────────────

export interface BilingualText {
  en: string;
  hi: string;
}

// ─── Notices ──────────────────────────────────────────────────────────────────

export interface Notice {
  id: string;
  title: BilingualText;
  category: string;
  tag: 'important' | 'new' | 'exam' | 'event' | 'general';
  date: string;
  link?: string;
}

// ─── Courses ──────────────────────────────────────────────────────────────────

export interface Course {
  id: string;
  /** References a CourseCategory id */
  categoryId: string;
  short: string;
  name: BilingualText;
  duration: BilingualText;
  seats: number;
  eligible: BilingualText;
  badge: BilingualText;
  affiliation: string;
  annualFee: string;
  examFee: BilingualText;
  totalFee: string;
  description: BilingualText;
  highlights: BilingualText[];
  syllabusUrl?: string;
  order: number;
}

export interface CourseCategory {
  id: string;
  label: BilingualText;
  affil: string;
  icon: string;
  accent: string;
  bg: string;
  order: number;
}

// ─── Faculty ──────────────────────────────────────────────────────────────────

export interface FacultyMember {
  id: string;
  name: BilingualText;
  role: 'principal' | 'lecturer' | 'specialized';
  designation: BilingualText;
  qualifications?: string;
  specialization?: string;
  email?: string;
  photo?: string;
  order: number;
}

// ─── Gallery ──────────────────────────────────────────────────────────────────

export interface GalleryImage {
  id: string;
  /** Path relative to /public e.g. /images/gallery-01.jpeg */
  src: string;
  alt: BilingualText;
  caption: BilingualText;
  tag?: string;
  order: number;
}

// ─── Important Dates ──────────────────────────────────────────────────────────

export interface ImportantDate {
  id: string;
  month: BilingualText;
  day: string;
  title: BilingualText;
  description: BilingualText;
  highlight: boolean;
}

// ─── Site Settings (kept in snake_case to match existing settings.json) ───────

export interface SiteSettings {
  college: {
    name: string;
    short_name: string;
    tagline: string;
    established: number;
    location: string;
    phone: string;
    phone2: string;
    email: string;
    email2: string;
    website: string;
    nearest_railway: string;
    nearest_airport: string;
  };
  affiliations: { name: string; short: string; status: string }[];
  stats: { total_intake: number; faculty_count: number; programmes: number; area_acres: number };
  social: { facebook: string; instagram: string; youtube: string; twitter: string };
  hero: { badge: string; heading: string; subheading: string };
  ticker_text: string;
  admission_open: boolean;
}

// ─── Public getters ───────────────────────────────────────────────────────────

export const getNotices = () => readJSON<Notice[]>('notices.json');
export const getCourses = () => readJSON<Course[]>('courses.json');
export const getCourseCategories = () => readJSON<CourseCategory[]>('courseCategories.json');
export const getFaculty = () => readJSON<FacultyMember[]>('faculty.json');
export const getGallery = () => readJSON<GalleryImage[]>('gallery.json');
export const getImportantDates = () => readJSON<ImportantDate[]>('importantDates.json');
export const getSettings = () => readJSON<SiteSettings>('settings.json');

// ─── Admin setters (server-side only) ────────────────────────────────────────

export const saveNotices = (data: Notice[]) => writeJSON('notices.json', data);
export const saveCourses = (data: Course[]) => writeJSON('courses.json', data);
export const saveCourseCategories = (data: CourseCategory[]) => writeJSON('courseCategories.json', data);
export const saveFaculty = (data: FacultyMember[]) => writeJSON('faculty.json', data);
export const saveGallery = (data: GalleryImage[]) => writeJSON('gallery.json', data);
export const saveImportantDates = (data: ImportantDate[]) => writeJSON('importantDates.json', data);
export const saveSettings = (data: SiteSettings) => writeJSON('settings.json', data);
