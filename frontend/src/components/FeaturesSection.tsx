import React, { useState } from "react";
import {
  UserCheck,
  Video,
  CalendarCheck,
  ShieldCheck,
  ArrowRight,
  X,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface FeatureDetail {
  title: string;
  subtitle: string;
  description: string;
  points: string[];
  icon: any;
  accentColor: string;
}

export const FeaturesSection = () => {
  const [selectedFeature, setSelectedFeature] = useState<FeatureDetail | null>(
    null,
  );

  const features = [
    {
      icon: UserCheck,
      title: "إسناد وتصنيف ذكي",
      description:
        "تتيح للإدارة ضبط الجودة، تصنيف المهن المتاحة، وتعيين المحاضرين المناسبين لكل مادة أو ورشة عمل بإجراءات مؤتمتة.",
      subtitle: "نظام إدارة الموارد والكوادر البشرية",
      points: [
        "توزيع المهام بناءً على التخصص وخبرة المدرس المعتمدة.",
        "مراقبة الجودة وتقييم الأداء عبر لوحات تحكم الإدارة.",
        "أتمتة عملية ربط المواد الدراسية بالورشات الحرفية المناسبة.",
      ],
      accentColor: "text-blue-600",
      iconColor: "text-blue-600",
    },
    {
      icon: Video,
      title: "إدارة المحتوى المزدوج",
      description:
        "دمج المحاضرات المسجلة غير التزامنية مع روابط المحاضرات المباشرة (Google Meet) ومسجل حضور تلقائي ودقيق للطلاب.",
      subtitle: "منظومة التعليم الهجين المتكاملة",
      points: [
        "مكتبة مرنة للمقاطع المسجلة والمستندات التعليمية.",
        "بث مباشر تفاعلي عبر تكامل تام مع Google Meet.",
        "نظام ذكي لرصد حضور وانخراط الطلاب لحظياً أثناء الجلسة.",
      ],
      accentColor: "text-blue-600",
      iconColor: "text-blue-600",
    },
    {
      icon: CalendarCheck,
      title: "جدولة مكانية وزمانية",
      description:
        "أدوات متقدمة للمحاضرين لتحديد أماكن ومواعيد التدريب الميداني للحرف والمهن لتظهر فوراً في لوحة تحكم الطالب المخصص.",
      subtitle: "الجدولة الذكية للورش الميدانية",
      points: [
        "تحديد القاعات والورش الميدانية بدقة على الخريطة والجدول.",
        "تحديثات فورية للمواعيد وتنبيهات للطلاب المشتركين.",
        "إدارة سعة القاعات ونسب الحجز والمقاعد المتاحة آلياً.",
      ],
      accentColor: "text-blue-600",
      iconColor: "text-blue-600",
    },
  ];

  return (
    <section
      id="about"
      dir="rtl"
      className="relative overflow-hidden border-b border-ink-200/60 bg-white py-20 lg:py-28 text-ink-900"
    >
      {/* خلفية ثابتة وناعمة متوافقة مع الثيم الفاتح */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-60 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        {/* الهيدر العلوي */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-50 px-3.5 py-1 text-xs font-semibold text-blue-600 backdrop-blur-md mb-4 shadow-sm"
          >
            <ShieldCheck className="h-3.5 w-3.5 text-blue-600" />
            <span>بنية تحتية متطورة</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-ink-900 leading-tight"
          >
            منظومة إدارية وتعليمية{" "}
            <span className="text-blue-600">متكاملة وحقيقية</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-sm sm:text-base text-ink-500 leading-relaxed"
          >
            بيئة تفاعلية تربط بين الإدارة والمحاضرين والطلاب لضمان أعلى مستويات
            الجودة والتحصيل العملي.
          </motion.p>
        </div>

        {/* شبكة الكروت الاحترافية (الثيم الفاتح المتناسق) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                whileHover={{ y: -4 }}
                onClick={() => setSelectedFeature(feature)}
                className="group relative overflow-hidden rounded-2xl border border-ink-200/60 bg-ink-50 p-8 text-right shadow-sm backdrop-blur-md hover:border-ink-300 hover:bg-white hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                {/* الحاوية العلوية للأيقونة */}
                <div className="relative mb-6 flex h-14 w-14 items-center justify-center rounded-xl border border-ink-200/60 bg-white p-3.5 text-blue-600 shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600">
                  <Icon className="h-7 w-7 transition-colors" />
                </div>

                {/* العنوان */}
                <h3 className="text-xl font-bold text-ink-900 group-hover:text-blue-600 transition-colors mb-3">
                  {feature.title}
                </h3>

                {/* الوصف */}
                <p className="text-xs sm:text-sm text-ink-500 leading-relaxed">
                  {feature.description}
                </p>

                {/* خط الديكور السفلي مع تفعيل النقر */}
                <div className="mt-8 pt-4 border-t border-ink-200/60 flex items-center justify-between text-xs font-semibold text-ink-400 group-hover:text-ink-900 transition-colors">
                  <span>المزيد من التفاصيل</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1.5 text-blue-600" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* نافذة التفاصيل المنبثقة (Modal) بالتصميم الفاتح النظيف */}
      <AnimatePresence>
        {selectedFeature && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-ink-950/40 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-ink-200 bg-white p-6 sm:p-8 text-right shadow-2xl"
            >
              {/* زر الإغلاق */}
              <button
                onClick={() => setSelectedFeature(null)}
                className="absolute top-5 left-5 flex h-9 w-9 items-center justify-center rounded-full border border-ink-200 bg-ink-50 text-ink-600 hover:bg-ink-100 hover:text-ink-900 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>

              {/* رأس النافذة */}
              <div className="flex items-center gap-4 mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 border border-blue-500/20 text-blue-600">
                  <selectedFeature.icon className="h-6 w-6" />
                </div>
                <div>
                  <span className="text-[11px] font-semibold text-blue-600 uppercase tracking-wider">
                    {selectedFeature.subtitle}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-ink-900">
                    {selectedFeature.title}
                  </h3>
                </div>
              </div>

              {/* وصف تفصيلي */}
              <p className="text-sm text-ink-500 leading-relaxed mb-6">
                {selectedFeature.description}
              </p>

              {/* النقاط الرئيسية أو الخصائص */}
              <div className="space-y-3 mb-8 bg-ink-50 p-4 rounded-2xl border border-ink-200/60">
                <h4 className="text-xs font-bold text-ink-800 flex items-center gap-1.5 mb-2">
                  <Sparkles className="h-3.5 w-3.5 text-blue-600" />
                  أبرز مزايا وقدرات النظام:
                </h4>
                {selectedFeature.points.map((point, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-2.5 text-xs sm:text-sm text-ink-700"
                  >
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>

              {/* زر إغلاق أسفل النافذة */}
              <button
                onClick={() => setSelectedFeature(null)}
                className="w-full rounded-xl bg-blue-600 py-3 text-sm font-bold text-white shadow-lg shadow-blue-600/20 hover:bg-blue-700 transition-colors"
              >
                فهمت، شكراً
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
