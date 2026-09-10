import React from "react";
import { UserCheck } from "lucide-react";

export const InstructorsSection = () => {
  const instructors = [
    {
      name: "أ. محمد الكاسم",
      title: "مطور ويب خبرة (Laravel & React)",
      type: "مسار التقنية",
    },
    {
      name: "د. سامر العلي",
      title: "استشاري أنظمة وC# Specialist",
      type: "مسار البرمجة",
    },
    {
      name: "م. أحمد الشامي",
      title: "خبير صيانة أجهزة إلكترونية",
      type: "مسار الصيانة",
    },
    {
      name: "الخبير يوسف الخالد",
      title: "مدرب حلاقة وتصفيف مهني",
      type: "المسار المهني",
    },
  ];

  return (
    <section id="instructors" className="border-b border-slate-800 py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-slate-100">
          الكوادر التدريسية والخبراء
        </h2>
        <p className="mt-2 text-slate-400 max-w-xl mx-auto">
          نخبة من الأساتذة والمهنيين المعتمدين لتوجيه الطلاب نظرياً وميدانياً
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {instructors.map((inst, index) => (
            <div
              key={index}
              className="rounded-2xl border border-slate-800 bg-slate-800/30 p-6 text-center hover:border-slate-700 transition-all"
            >
              <div className="w-20 h-20 rounded-full border border-slate-700 bg-slate-800 mx-auto flex items-center justify-center text-xl font-bold text-slate-200 mb-4 shadow-inner">
                {inst.name[0]}
              </div>
              <h3 className="font-bold text-slate-100 text-lg">{inst.name}</h3>
              <p className="text-xs text-slate-400 mt-1">{inst.title}</p>
              <span className="inline-block mt-3 px-3 py-1 rounded-full text-xs font-semibold border border-slate-700 bg-slate-800/80 text-slate-300">
                {inst.type}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
