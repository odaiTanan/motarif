import React, { useState } from "react";
import { Clock, Video, BookOpen } from "lucide-react";

export const TracksSection = () => {
  const [trackFilter, setTrackFilter] = useState<"all" | "tech" | "craft">(
    "all",
  );

  const courses = [
    {
      id: 1,
      title: "تطوير تطبيقات الويب الكاملة (Laravel + React)",
      category: "tech",
      type: "مباشر + فيديوهات مسجلة",
      instructor: "أ. محمد الكاسم",
      hours: "60 ساعة",
    },
    {
      id: 2,
      title: "احتراف البرمجة وهيكلة البيانات بلغة C#",
      category: "tech",
      type: "تفاعلي تزامني (Google Meet)",
      instructor: "د. سامر العلي",
      hours: "45 ساعة",
    },
    {
      id: 3,
      title: "مهنة الحلاقة وتصفيف الشعر الحديث",
      category: "craft",
      type: "نظري + تدريب ميداني ورشي",
      instructor: "الخبير يوسف الخالد",
      hours: "30 ساعة ميداني",
    },
    {
      id: 4,
      title: "صيانة اللوحات الإلكترونية والهواتف الذكية",
      category: "craft",
      type: "نظري + ورشة عمل حقيقية",
      instructor: "م. أحمد الشامي",
      hours: "40 ساعة",
    },
  ];

  return (
    <section id="tracks" className="border-b border-slate-800 py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-100">
            المسارات والكورسات المتاحة
          </h2>
          <p className="mt-2 text-slate-400">
            تصفح الكورسات التقنية والمهنية المتاحة للانضمام
          </p>

          <div className="mt-6 flex justify-center gap-3">
            <button
              onClick={() => setTrackFilter("all")}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
                trackFilter === "all"
                  ? "bg-slate-100 text-slate-900"
                  : "border border-slate-700 bg-slate-800/50 text-slate-300 hover:bg-slate-800"
              }`}
            >
              كافة المسارات
            </button>
            <button
              onClick={() => setTrackFilter("tech")}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
                trackFilter === "tech"
                  ? "bg-slate-100 text-slate-900"
                  : "border border-slate-700 bg-slate-800/50 text-slate-300 hover:bg-slate-800"
              }`}
            >
              التقنية والبرمجة
            </button>
            <button
              onClick={() => setTrackFilter("craft")}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
                trackFilter === "craft"
                  ? "bg-slate-100 text-slate-900"
                  : "border border-slate-700 bg-slate-800/50 text-slate-300 hover:bg-slate-800"
              }`}
            >
              الحرف والمهن اليدوية
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses
            .filter((t) => trackFilter === "all" || t.category === trackFilter)
            .map((course) => (
              <div
                key={course.id}
                className="rounded-2xl border border-slate-800 bg-slate-800/40 p-6 flex flex-col justify-between hover:border-slate-700 transition-all"
              >
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-xs font-semibold px-3 py-1 rounded-full border border-slate-700 bg-slate-800 text-slate-300">
                      {course.category === "tech" ? "قطاع تقني" : "قطاع مهني"}
                    </span>
                    <span className="text-xs text-slate-400 flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" /> {course.hours}
                    </span>
                  </div>
                  <h3 className="font-bold text-lg text-slate-100 mb-2">
                    {course.title}
                  </h3>
                  <p className="text-sm text-slate-400 mb-4">
                    المحاضر: {course.instructor}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-300">
                  <span className="flex items-center gap-1.5">
                    <Video className="h-4 w-4 text-slate-400" />
                    {course.type}
                  </span>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};
