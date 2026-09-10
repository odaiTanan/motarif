import { NavLink } from 'react-router-dom'
import { LayoutDashboard, BookOpen, GraduationCap, Users, LogOut } from 'lucide-react'

import { useAuth } from '../../hooks/useAuth'
import { useLogout } from '../../hooks/useLogout'

const navItems = [
  { to: '/dashboard', label: 'الرئيسية', icon: LayoutDashboard, end: true },
  { to: '/dashboard/courses', label: 'الكورسات', icon: BookOpen },
  { to: '/dashboard/students', label: 'الطلاب', icon: GraduationCap },
  { to: '/dashboard/teachers', label: 'المدرسين', icon: Users },
]

export default function AdminSidebar() {
  const { user } = useAuth()
  const logoutMutation = useLogout()
  const isTeacher = user?.roles?.some((role) => role.name.toLowerCase() === 'teacher')
  const isStudent = user?.roles?.some((role) => role.name.toLowerCase() === 'student')
  const visibleNavItems = isTeacher
    ? [{ to: '/dashboard', label: 'الرئيسية', icon: LayoutDashboard, end: true }, { to: '/dashboard/my-courses', label: 'كورساتي', icon: BookOpen }]
    : isStudent
      ? [{ to: '/dashboard', label: 'الرئيسية', icon: LayoutDashboard, end: true }, { to: '/dashboard/student-courses', label: 'كورساتي', icon: BookOpen }]
    : navItems

  return (
    <aside className="sticky top-0 flex h-screen w-72 shrink-0 flex-col border-l border-slate-200 bg-white text-slate-900 shadow-[0_0_28px_rgba(15,23,42,0.06)]">
      {/* Logo / Brand */}
      <div className="flex items-center gap-3 px-6 py-7">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-600 shadow-lg shadow-blue-600/20">
          <span className="text-lg font-black text-white">ن</span>
        </div>
        <div>
          <p className="text-base font-bold tracking-tight">نجيز</p>
          <p className="text-xs text-slate-500">منصة الأكاديمية</p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="mt-2 flex-1 px-4">
        <p className="px-3 pb-3 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-slate-400">القائمة</p>
        <ul className="space-y-1.5">
          {visibleNavItems.map((item) => {
            const Icon = item.icon
            return (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.end}
                  className={({ isActive }) =>
                    `group relative flex items-center gap-3 rounded-xl border px-4 py-3 text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? 'border-blue-100 bg-blue-50 text-blue-700'
                        : 'border-transparent text-slate-500 hover:border-slate-200 hover:bg-slate-50 hover:text-slate-900'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {isActive && (
                        <span className="absolute right-0 top-1/2 h-6 w-1 -translate-y-1/2 rounded-l-full bg-blue-600" />
                      )}
                      <Icon
                        size={20}
                        className={`shrink-0 transition-transform duration-300 group-hover:scale-110 ${
                          isActive ? 'text-blue-600' : 'text-slate-400'
                        }`}
                      />
                      <span>{item.label}</span>
                    </>
                  )}
                </NavLink>
              </li>
            )
          })}
        </ul>
      </nav>

      {/* User card + logout */}
      <div className="p-4">
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
              {user?.name?.charAt(0) ?? '؟'}
            </div>
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold text-slate-900">{user?.name ?? 'زائر'}</p>
              <p className="truncate text-xs text-slate-500">{user?.roles?.map((r) => r.name).join(', ') ?? 'بدون دور'}</p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => logoutMutation.mutate()}
            disabled={logoutMutation.isPending}
            className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-xs font-semibold text-slate-600 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700 disabled:opacity-50"
          >
            <LogOut size={15} />
            {logoutMutation.isPending ? 'جاري الخروج...' : 'تسجيل الخروج'}
          </button>
        </div>
      </div>
    </aside>
  )
}
