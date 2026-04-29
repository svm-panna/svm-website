import { getServerSession } from 'next-auth';
import Link from 'next/link';
import { Bell, BookOpen, Users, ArrowRight, Globe } from 'lucide-react';
import { authOptions } from '@/lib/auth';
import { getNotices, getCourses, getFaculty, getSettings } from '@/lib/data';

export default async function AdminDashboard() {
  const session = await getServerSession(authOptions);
  const notices = getNotices();
  const courses = getCourses();
  const faculty = getFaculty();
  const settings = getSettings();

  const stats = [
    { label: 'Notices', value: notices.length, icon: Bell, href: '/admin/notices', color: 'bg-blue-50 text-blue-600' },
    { label: 'Courses', value: courses.length, icon: BookOpen, href: '/admin/courses', color: 'bg-teal-50 text-teal-600' },
    { label: 'Faculty', value: faculty.length, icon: Users, href: '/admin/faculty', color: 'bg-purple-50 text-purple-600' },
    { label: 'Total intake', value: settings.stats.total_intake, icon: Globe, href: '/admin/settings', color: 'bg-amber-50 text-amber-600' },
  ];

  return (
    <div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((s) => (
          <Link key={s.label} href={s.href} className="bg-white border border-gray-100 rounded-xl p-4 hover:shadow-sm transition-shadow">
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center mb-3 ${s.color}`}>
              <s.icon size={16} />
            </div>
            <div className="text-2xl font-semibold text-gray-900">{s.value}</div>
            <div className="text-xs text-gray-500 mt-0.5">{s.label}</div>
          </Link>
        ))}
      </div>

      {/* Recent notices */}
      <div className="bg-white border border-gray-100 rounded-xl p-5 mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-sm font-semibold text-gray-900">Recent notices</h2>
          <Link href="/admin/notices" className="text-xs text-brand-600 hover:underline flex items-center gap-1">
            Manage <ArrowRight size={12} />
          </Link>
        </div>
        <div className="space-y-2">
          {notices.slice(0, 4).map((n) => (
            <div key={n.id} className="flex items-center justify-between py-2 border-b border-gray-50 last:border-0">
              <p className="text-xs text-gray-700 truncate flex-1 mr-4">{typeof n.title === 'string' ? n.title : n.title.en}</p>
              <span className="text-xs text-gray-400 flex-shrink-0">{n.date}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Quick actions */}
      <div className="bg-white border border-gray-100 rounded-xl p-5">
        <h2 className="text-sm font-semibold text-gray-900 mb-4">Quick actions</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {[
            { href: '/admin/notices', label: 'Add notice', icon: Bell },
            { href: '/admin/courses', label: 'Edit courses', icon: BookOpen },
            { href: '/admin/faculty', label: 'Manage faculty', icon: Users },
            { href: '/admin/settings', label: 'Site settings', icon: Globe },
          ].map((a) => (
            <Link key={a.href} href={a.href} className="flex items-center gap-2 p-3 border border-gray-100 rounded-lg text-xs text-gray-700 hover:border-brand-200 hover:text-brand-600 transition-colors">
              <a.icon size={14} /> {a.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
