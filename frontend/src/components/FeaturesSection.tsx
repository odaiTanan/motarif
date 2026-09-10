import React from "react";
import { UserCheck, Video, CalendarCheck, ShieldCheck } from "lucide-react";

export const FeaturesSection = () => {
  return (
    <section
      id="about"
      className="border-b border-slate-800 py-20 bg-[#0b132b]/40"
    >
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-slate-100">
            منظومة إدارية وتعليمية متكاملة
          </h2>
          <p className="mt-2 text-slate-400">
            نظام يربط بين الإدارة والمحاضرين والطلاب لضمان بيئة تعليمية مرنة
            وعالية الجودة
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="rounded-2xl border border-slate-800 bg-slate-800/30 p-6 text-right transition-all hover:border-slate-700">
            <div className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-200 mb-4 font-bold">
              <UserCheck className="h-6 w-6 text-slate-300" />
            </div>
            <h3 className="text-xl font-bold text-slate-100 mb-2">
              إسناد وتصنيف ذكي
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              تتيح للإدارة ضبط الجودة، تصنيف المهن المتاحة، وتعيين المحاضرين
              المناسبين لكل مادة أو ورشة عمل.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-800/30 p-6 text-right transition-all hover:border-slate-700">
            <div className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-200 mb-4 font-bold">
              <Video className="h-6 w-6 text-slate-300" />
            </div>
            <h3 className="text-xl font-bold text-slate-100 mb-2">
              إدارة المحتوى المزدوج
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              دمج المحاضرات المسجلة غير التزامنية مع روابط المحاضرات المباشرة
              (Google Meet) ومسجل حضور ذكي للطلاب.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-800/30 p-6 text-right transition-all hover:border-slate-700">
            <div className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-200 mb-4 font-bold">
              <CalendarCheck className="h-6 w-6 text-slate-300" />
            </div>
            <h3 className="text-xl font-bold text-slate-100 mb-2">
              جدولة مكانية وزمانية
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              أدوات للمحاضرين لتحديد أماكن ومواعيد التدريب الميداني للحرف والمهن
              لتظهر مباشرة في لوحات تحكم الطلاب.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
