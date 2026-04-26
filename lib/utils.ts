import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { format } from 'date-fns';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(dateStr: string) {
  try {
    return format(new Date(dateStr), 'd MMM yyyy');
  } catch {
    return dateStr;
  }
}

export function tagColor(tag: string) {
  switch (tag) {
    case 'important': return 'bg-red-50 text-red-700 border-red-100';
    case 'new':       return 'bg-blue-50 text-blue-700 border-blue-100';
    case 'exam':      return 'bg-amber-50 text-amber-700 border-amber-100';
    case 'event':     return 'bg-green-50 text-green-700 border-green-100';
    default:          return 'bg-gray-100 text-gray-600 border-gray-200';
  }
}

export function courseColor(color: string) {
  switch (color) {
    case 'blue':   return { pill: 'bg-blue-50 text-blue-800', border: 'border-blue-200' };
    case 'teal':   return { pill: 'bg-teal-50 text-teal-800', border: 'border-teal-200' };
    case 'amber':  return { pill: 'bg-amber-50 text-amber-800', border: 'border-amber-200' };
    case 'purple': return { pill: 'bg-purple-50 text-purple-800', border: 'border-purple-200' };
    default:       return { pill: 'bg-gray-100 text-gray-700', border: 'border-gray-200' };
  }
}
