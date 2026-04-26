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

// Types
export interface Notice {
  id: string;
  title: string;
  category: string;
  tag: 'important' | 'new' | 'exam' | 'event' | 'general';
  date: string;
  link?: string;
}

export interface Course {
  id: string;
  name: string;
  short: string;
  duration: string;
  seats: number;
  level: string;
  type: string;
  eligibility: string;
  syllabus_url?: string;
  description: string;
  color: string;
}

export interface FacultyMember {
  id: string;
  name: string;
  designation: string;
  qualifications: string;
  specialization: string;
  email: string;
  photo: string;
  order: number;
}

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

// Public getters
export const getNotices = () => readJSON<Notice[]>('notices.json');
export const getCourses = () => readJSON<Course[]>('courses.json');
export const getFaculty = () => readJSON<FacultyMember[]>('faculty.json');
export const getSettings = () => readJSON<SiteSettings>('settings.json');

// Admin setters (server-side only)
export const saveNotices = (data: Notice[]) => writeJSON('notices.json', data);
export const saveCourses = (data: Course[]) => writeJSON('courses.json', data);
export const saveFaculty = (data: FacultyMember[]) => writeJSON('faculty.json', data);
export const saveSettings = (data: SiteSettings) => writeJSON('settings.json', data);
