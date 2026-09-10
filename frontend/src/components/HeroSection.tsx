import React from "react";
import {
  ShieldCheck,
  ArrowLeft,
  MapPin,
  Laptop,
  Wrench,
  Users,
  BookOpen,
  Award,
} from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative overflow-hidden border-b border-slate-800 bg-slate-950 py-20 lg:py-32">
      {/* خلفية التدرج الضوئي */}
      <div className="absolute top-0 right-1/2 -z-10 h-[400px] w-[600px] translate-x-1/2 rounded-full bg-slate-800/30 blur-[120px]" />

      <div className="container mx-auto px-4 text-center">
        {/* الشارة العلوية */}
        <div className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/80 px-4 py-1.5 text-xs font-semibold text-slate-300 mb-8 shadow-sm">
          <ShieldCheck className="h-4 w-4 text-emerald-400" />
          <span>منصة التعليم الهجين الأولى: نظري + تطبيق ميداني حقيقي</span>
        </div>

        {/* العنوان الرئيسي */}
        <h1 className="mx-auto max-w-4xl text-4xl font-black tracking-tight text-slate-50 sm:text-6xl md:text-7xl leading-tight">
          جسرك المباشر من{" "}
          <span className="text-slate-400 bg-gradient-to-r from-slate-200 to-slate-400 bg-clip-text text-transparent">
            التعليم النظري
          </span>{" "}
          إلى <span className="text-white">التمكين المهني</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400 leading-relaxed">
          منظومة تعليمية متكاملة تربط بين المحاضرات الرقمية والتطبيق العملي
          المجدول للحرف والمهن والبرمجة.
        </p>

        {/* أزرار الإجراءات */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="#tracks"
            className="inline-flex items-center gap-2 rounded-xl bg-slate-100 px-7 py-3.5 text-base font-bold text-slate-950 shadow-lg hover:bg-white transition-all transform hover:-translate-y-0.5"
          >
            استكشف المسارات
            <ArrowLeft className="h-5 w-5" />
          </a>
          <a
            href="#practical"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900/80 px-7 py-3.5 text-base font-bold text-slate-200 hover:bg-slate-800 hover:border-slate-600 transition-all"
          >
            <MapPin className="h-5 w-5 text-slate-400" />
            التدريبات الميدانية المتاحة
          </a>
        </div>

        {/* البطاقات التعريفية */}
        <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-6 text-right sm:grid-cols-2">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-md backdrop-blur-md hover:border-slate-700 transition-all">
            <div className="flex items-start gap-4">
              <div className="rounded-xl border border-slate-700 bg-slate-800 p-3 text-slate-200">
                <Laptop className="h-7 w-7" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-100">
                  القطاع التقني والبرمجي
                </h3>
                <p className="mt-1 text-sm text-slate-400 leading-relaxed">
                  دورات وتطبيقات عملية شاملة في C#، Laravel، وReact مع مشاريع
                  حقيقية ومحاضرات Google Meet.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-md backdrop-blur-md hover:border-slate-700 transition-all">
            <div className="flex items-start gap-4">
              <div className="rounded-xl border border-slate-700 bg-slate-800 p-3 text-slate-200">
                <Wrench className="h-7 w-7" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-100">
                  القطاع المهني والحرفي
                </h3>
                <p className="mt-1 text-sm text-slate-400 leading-relaxed">
                  تعلم الحلاقة، صيانة الأجهزة، والحرف اليدوية عبر دروس نظرية
                  مرنة وتدريب ورشي ميداني مجدول.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* شريط الإحصائيات لإضافة ثراء بصري */}
        <div className="mx-auto mt-16 max-w-4xl rounded-2xl border border-slate-800 bg-slate-900/40 p-6 backdrop-blur-sm">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x md:divide-x-reverse divide-slate-800">
            <div className="p-2 text-center">
              <p className="text-2xl md:text-3xl font-extrabold text-slate-100">
                +1,200
              </p>
              <p className="text-xs text-slate-400 mt-1">طالب متدرب</p>
            </div>
            <div className="p-2 text-center">
              <p className="text-2xl md:text-3xl font-extrabold text-slate-100">
                +45
              </p>
              <p className="text-xs text-slate-400 mt-1">ورشة ميدانية</p>
            </div>
            <div className="p-2 text-center">
              <p className="text-2xl md:text-3xl font-extrabold text-slate-100">
                +18
              </p>
              <p className="text-xs text-slate-400 mt-1">مسار احترافي</p>
            </div>
            <div className="p-2 text-center">
              <p className="text-2xl md:text-3xl font-extrabold text-slate-100">
                94%
              </p>
              <p className="text-xs text-slate-400 mt-1">نسبة التوظيف</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
