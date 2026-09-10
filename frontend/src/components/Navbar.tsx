import React from "react";
import { GraduationCap, LogIn } from "lucide-react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-[#0f172a]/90 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-800 border border-slate-700 text-slate-200 shadow-inner">
            <GraduationCap className="h-6 w-6 text-slate-100" />
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-100">
            منصة محترف
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <a href="#about" className="transition-colors hover:text-slate-100">
            عن المنصة
          </a>
          <a href="#tracks" className="transition-colors hover:text-slate-100">
            المسارات التعليمية
          </a>
          <a
            href="#practical"
            className="transition-colors hover:text-slate-100"
          >
            التدريب الميداني
          </a>
          <a
            href="#instructors"
            className="transition-colors hover:text-slate-100"
          >
            الكوادر التدريسية
          </a>
          <a
            href="#top-students"
            className="transition-colors hover:text-slate-100"
          >
            الطلاب المتميزون
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/login"
            className="inline-flex items-center gap-2 rounded-lg bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-900 shadow hover:bg-slate-200 transition-all"
          >
            <LogIn className="h-4 w-4" />
            تسجيل الدخول
          </Link>
        </div>
      </div>
    </header>
  );
};
