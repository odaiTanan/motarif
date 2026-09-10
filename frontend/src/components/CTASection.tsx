import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="py-20 text-center bg-gradient-to-t from-[#1e293b]/40 to-[#0f172a]">
      <div className="container mx-auto px-4 max-w-2xl">
        <h2 className="text-3xl font-extrabold text-slate-100">
          جاهز لبدء رحلتك المهنية؟
        </h2>
        <p className="mt-4 text-slate-400">
          انضم اليوم إلى منصة محترف واكتسب المهارات العملية والنظرية التي تؤهلك
          لسوق العمل المحلي والإقليمي.
        </p>
        <div className="mt-8">
          <Link
            to="/login"
            className="inline-flex items-center gap-2 rounded-lg bg-slate-100 px-8 py-3.5 text-base font-bold text-slate-900 shadow-lg hover:bg-slate-200 transition-all"
          >
            تسجيل الدخول / إنشاء حساب
            <ArrowLeft className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};
