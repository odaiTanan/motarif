import React from "react";
import { Building, Star, CheckCircle2 } from "lucide-react";

export const TopStudentsSection = () => {
  return (
    <section
      id="top-students"
      className="border-b border-slate-800 py-20 bg-[#0b132b]/40"
    >
      <div className="container mx-auto px-4 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-800 px-3 py-1 text-xs text-slate-300 mb-4">
          <Building className="h-4 w-4" />
          <span>فرص للشركات وأصحاب الأعمال</span>
        </div>
        <h2 className="text-3xl font-bold text-slate-100">
          معرض الطلاب المتميزين
        </h2>
        <p className="mt-2 text-slate-400 max-w-xl mx-auto">
          نبرز كفاءات خريجينا المتميزين لسهولة توظيفهم واستثمارهم من قبل
          القطاعات والشركات
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {[
            {
              name: "أحمد الخالد",
              role: "Full-Stack Developer (React/Laravel)",
              track: "القطاع التقني",
              rating: "5.0",
            },
            {
              name: "عمر السالم",
              role: "فني صيانة إلكترونيات ودارات",
              track: "القطاع المهني",
              rating: "4.9",
            },
            {
              name: "محمود العلي",
              role: "مطور برمجيات C# و.NET",
              track: "القطاع التقني",
              rating: "5.0",
            },
          ].map((student, i) => (
            <div
              key={i}
              className="rounded-2xl border border-slate-800 bg-slate-800/50 p-6 text-right relative flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-center mb-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-100 font-bold">
                    {student.name[0]}
                  </div>
                  <div className="flex items-center gap-1 text-amber-400 text-sm font-bold bg-slate-800 px-2.5 py-1 rounded-full border border-slate-700">
                    <Star className="h-4 w-4 fill-amber-400" />
                    {student.rating}
                  </div>
                </div>
                <h3 className="font-bold text-slate-100 text-lg">
                  {student.name}
                </h3>
                <p className="text-sm text-slate-300 font-medium mt-0.5">
                  {student.role}
                </p>
                <p className="text-xs text-slate-400 mt-2">{student.track}</p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-emerald-400 font-semibold">
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="h-4 w-4" /> متاح للطلب والتوظيف
                </span>
                <button className="text-slate-300 hover:text-slate-100 underline">
                  عرض السيرة
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
