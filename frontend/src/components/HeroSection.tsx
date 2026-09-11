import React from "react";
import {
  ShieldCheck,
  ArrowLeft,
  MapPin,
  Laptop,
  Wrench,
  CheckCircle2,
} from "lucide-react";
import { motion } from "framer-motion";

export const HeroSection = () => {
  return (
    <section className="relative overflow-hidden border-b border-ink-200/60 bg-white pt-12 pb-24 lg:pt-20 lg:pb-32 text-ink-900">
      {/* خلفية ثابتة وناعمة متوافقة مع الثيم الفاتح */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-60" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex flex-col items-center text-center">
          {/* الشارة العلوية */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-50 px-4 py-1.5 text-xs font-semibold text-blue-600 backdrop-blur-md shadow-sm mb-8"
          >
            <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-ping" />
            <ShieldCheck className="h-4 w-4 text-blue-600" />
            <span className="text-center">
              منصة التعليم الهجين الأولى: نظري + تطبيق ميداني حقيقي
            </span>
          </motion.div>

          {/* العنوان الرئيسي (لون واحد ثابت بدون تدرج) */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mx-auto max-w-5xl text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-ink-900 leading-[1.2]"
          >
            جسرك المباشر من التعليم النظري إلى التمكين المهني
          </motion.h1>

          {/* الوصف */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-sm sm:text-base lg:text-lg text-ink-500 leading-relaxed px-2"
          >
            منظومة تعليمية متكاملة تربط بين المحاضرات الرقمية والتطبيق العملي
            المجدول للحرف والمهن والبرمجة.
          </motion.p>

          {/* أزرار الإجراءات */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-col sm:flex-row justify-center gap-4 w-full sm:w-auto px-4 sm:px-0"
          >
            <a
              href="#tracks"
              className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl bg-blue-600 px-8 py-4 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition-all hover:bg-blue-700 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>استكشف المسارات</span>
              <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
            </a>

            <a
              href="#practical"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-ink-200/60 bg-ink-50 px-7 py-4 text-sm font-bold text-ink-700 backdrop-blur-md transition-all hover:bg-ink-100 hover:border-ink-300 hover:text-ink-900"
            >
              <MapPin className="h-4 w-4 text-blue-600" />
              <span>التدريبات الميدانية المتاحة</span>
            </a>
          </motion.div>

          {/* بطاقة العرض البصرية */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative mx-auto mt-14 w-full max-w-5xl rounded-3xl border border-ink-200/60 bg-ink-50 p-3 sm:p-4 shadow-xl backdrop-blur-xl"
          >
            <div className="relative overflow-hidden rounded-2xl border border-ink-200/65 bg-white p-5 sm:p-8 md:p-10 shadow-sm">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-right">
                <div className="space-y-4 max-w-lg">
                  <div className="inline-flex items-center gap-2 rounded-lg bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-600 border border-emerald-500/20">
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                    <span>نظام التعليم المتزامن (Hybrid Learning)</span>
                  </div>
                  <h3 className="text-lg sm:text-2xl font-bold text-ink-900">
                    تدرّب أونلاين، ثم طبّق في ورشاتنا ومختبراتنا الشريكة
                  </h3>
                  <p className="text-xs sm:text-sm text-ink-500 leading-relaxed">
                    نضمن لك اكتساب الخبرة الحقيقية عبر جدول زمني مرن يجمع بين
                    المحاضرات المباشرة والتطبيق الميداني المباشر بإشراف نخبة من
                    الخبراء.
                  </p>
                </div>

                <div className="relative w-full md:w-auto flex flex-col gap-3 min-w-[260px]">
                  <div className="flex items-center gap-3 rounded-xl border border-ink-200/60 bg-ink-50 p-3.5 shadow-sm">
                    <div className="rounded-lg bg-blue-50 p-2 text-blue-600 border border-blue-500/20">
                      <Laptop className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-ink-900">
                        جلسة زوم المباشرة
                      </div>
                      <div className="text-[10px] text-ink-400">
                        اليوم الساعة 06:00 مساءً
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 rounded-xl border border-ink-200/60 bg-ink-50 p-3.5 shadow-sm md:translate-x-2">
                    <div className="rounded-lg bg-blue-50 p-2 text-blue-600 border border-blue-500/20">
                      <Wrench className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-ink-900">
                        التطبيق الميداني - دمشق
                      </div>
                      <div className="text-[10px] text-ink-400">
                        السبت القادم - ورشة الحلاقة والصيانة
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* القطاعات المتاحة */}
          <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-6 text-right sm:grid-cols-2 w-full">
            <motion.div
              whileHover={{ y: -4 }}
              className="group rounded-2xl border border-ink-200/60 bg-ink-50 p-6 shadow-sm backdrop-blur-md hover:border-ink-300 hover:bg-white transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="rounded-xl border border-ink-200/60 bg-white p-3 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                  <Laptop className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-ink-900 group-hover:text-blue-600 transition-colors">
                    القطاع التقني والبرمجي
                  </h3>
                  <p className="mt-1.5 text-xs sm:text-sm text-ink-500 leading-relaxed">
                    دورات وتطبيقات عملية شاملة في C#، Laravel، وReact مع مشاريع
                    حقيقية ومحاضرات Google Meet.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -4 }}
              className="group rounded-2xl border border-ink-200/60 bg-ink-50 p-6 shadow-sm backdrop-blur-md hover:border-ink-300 hover:bg-white transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="rounded-xl border border-ink-200/60 bg-white p-3 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                  <Wrench className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-ink-900 group-hover:text-blue-600 transition-colors">
                    القطاع المهني والحرفي
                  </h3>
                  <p className="mt-1.5 text-xs sm:text-sm text-ink-500 leading-relaxed">
                    تعلم الحلاقة، صيانة الأجهزة، والحرف اليدوية عبر دروس نظرية
                    مرنة وتدريب ورشي ميداني مجدول.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* شريط الإحصائيات (ألوان موحدة وثابتة متوافقة مع الـ Navbar) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mx-auto mt-12 w-full max-w-5xl rounded-2xl border border-ink-200/60 bg-ink-50 p-6 shadow-sm backdrop-blur-md"
          >
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x md:divide-x-reverse divide-ink-200/60">
              <div className="p-2 text-center">
                <p className="text-2xl sm:text-3xl md:text-4xl font-black text-ink-900">
                  +1,200
                </p>
                <p className="text-xs font-semibold text-ink-500 mt-1">
                  طالب متدرب
                </p>
              </div>
              <div className="p-2 text-center pt-4 md:pt-2">
                <p className="text-2xl sm:text-3xl md:text-4xl font-black text-blue-600">
                  +45
                </p>
                <p className="text-xs font-semibold text-ink-500 mt-1">
                  ورشة ميدانية
                </p>
              </div>
              <div className="p-2 text-center">
                <p className="text-2xl sm:text-3xl md:text-4xl font-black text-ink-900">
                  +18
                </p>
                <p className="text-xs font-semibold text-ink-500 mt-1">
                  مسار احترافي
                </p>
              </div>
              <div className="p-2 text-center pt-4 md:pt-2">
                <p className="text-2xl sm:text-3xl md:text-4xl font-black text-emerald-600">
                  94%
                </p>
                <p className="text-xs font-semibold text-ink-500 mt-1">
                  نسبة التوظيف والتمكين
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
