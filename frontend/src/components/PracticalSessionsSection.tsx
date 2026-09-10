import React from "react";
import { MapPin, Calendar, Users, Video } from "lucide-react";

export const PracticalSessionsSection = () => {
  return (
    <section
      id="practical"
      className="border-b border-slate-800 py-20 bg-[#0b132b]/30"
    >
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
            نظام الجدولة المكانية والزمانية
          </span>
          <h2 className="text-3xl font-bold text-slate-100 mt-1">
            التدريبات الميدانية القادمة
          </h2>
          <p className="mt-2 text-slate-400">
            جلسات وورشات عمل مباشرة يتم تحديد مكانها وموعدها من المحاضرين
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-slate-800 bg-slate-800/60 p-6 shadow-sm border-r-4 border-r-slate-400">
            <div className="flex justify-between items-start mb-3">
              <h3 className="font-bold text-slate-100">
                تطبيق عملي: صيانة الشاشات
              </h3>
              <span className="text-xs px-2.5 py-1 rounded bg-slate-700 text-slate-200">
                ميداني
              </span>
            </div>
            <div className="space-y-2 text-sm text-slate-300">
              <p className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-slate-400" /> ورشة المركز
                الميداني - القاعة B
              </p>
              <p className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-slate-400" /> السبت - 10:00
                صباحاً
              </p>
              <p className="flex items-center gap-2">
                <Users className="h-4 w-4 text-slate-400" /> المتبقي: 5 مقاعد
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-800/60 p-6 shadow-sm border-r-4 border-r-slate-400">
            <div className="flex justify-between items-start mb-3">
              <h3 className="font-bold text-slate-100">
                تطبيق قصات الشعر والتصفيف
              </h3>
              <span className="text-xs px-2.5 py-1 rounded bg-slate-700 text-slate-200">
                ميداني
              </span>
            </div>
            <div className="space-y-2 text-sm text-slate-300">
              <p className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-slate-400" /> صالون التدريب
                المعتمد
              </p>
              <p className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-slate-400" /> الأحد - 02:00
                ظهراً
              </p>
              <p className="flex items-center gap-2">
                <Users className="h-4 w-4 text-slate-400" /> المتبقي: 3 مقاعد
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-800/60 p-6 shadow-sm border-r-4 border-r-slate-400">
            <div className="flex justify-between items-start mb-3">
              <h3 className="font-bold text-slate-100">
                جلسة ربط المشروع بـ Laravel API
              </h3>
              <span className="text-xs px-2.5 py-1 rounded bg-slate-700 text-slate-200">
                تفاعلي أونلاين
              </span>
            </div>
            <div className="space-y-2 text-sm text-slate-300">
              <p className="flex items-center gap-2">
                <Video className="h-4 w-4 text-slate-400" /> رابط Google Meet
                المباشر
              </p>
              <p className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-slate-400" /> الجمعة - 05:00
                مساءً
              </p>
              <p className="flex items-center gap-2">
                <Users className="h-4 w-4 text-slate-400" /> متاح لكافة طلاب
                المسار
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
