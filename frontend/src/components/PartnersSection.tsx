import React from "react";
import {
  Building2,
  Award,
  CheckCircle2,
  ShieldCheck,
  Cpu,
  Wrench,
} from "lucide-react";
import { motion } from "framer-motion";

export const PartnersSection = () => {
  const partners = [
    {
      name: "مركز التدريب المهني",
      category: "اعتماد حرفي وميداني",
      icon: Wrench,
      color: "text-blue-600",
      bgGlow: "group-hover:border-blue-500/30",
    },
    {
      name: "مؤسسة التقنية العالية",
      category: "شريك حلول برمجية",
      icon: Cpu,
      color: "text-blue-600",
      bgGlow: "group-hover:border-blue-500/30",
    },
    {
      name: "أكاديمية التطوير الرقمي",
      category: "تدريب تطبيقي مباشر",
      icon: Building2,
      color: "text-blue-600",
      bgGlow: "group-hover:border-blue-500/30",
    },
    {
      name: "جمعية الحرفيين المعتمدة",
      category: "شهادات مهنية موثوقة",
      icon: Award,
      color: "text-blue-600",
      bgGlow: "group-hover:border-blue-500/30",
    },
  ];

  return (
    <section className="relative overflow-hidden border-b border-ink-200/60 bg-white py-16 lg:py-20 text-ink-900">
      {/* خلفية منقطة هادئة ومتناسقة مع الثيم الفاتح */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-60" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        {/* العنوان الفرعي مع الشارة */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-50 px-3.5 py-1 text-[11px] font-semibold text-blue-600 shadow-sm mb-3">
            <ShieldCheck className="h-3.5 w-3.5 text-blue-600" />
            <span>شبكة الشركاء المعتمدين</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold text-ink-900 tracking-tight">
            شراكات استراتيجية واعتمادات ميدانية حقيقية
          </h3>
          <p className="mt-2 text-xs sm:text-sm text-ink-500 max-w-xl">
            نعمل يداً بيد مع كبرى المؤسسات والجهات الحرفية والتقنية لتوفير بيئة
            تدريبية موثوقة وفرص عمل حقيقية.
          </p>
        </div>

        {/* شبكة البطاقات المتقدمة */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {partners.map((partner, idx) => {
            const Icon = partner.icon;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                whileHover={{ y: -4 }}
                className={`group relative flex flex-col items-center justify-center rounded-2xl border border-ink-200/60 bg-ink-50 p-6 text-center backdrop-blur-xl transition-all duration-300 hover:bg-white hover:shadow-xl hover:shadow-blue-950/5 ${partner.bgGlow}`}
              >
                {/* الأيقونة بحاوية متألقة */}
                <div className="relative mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-ink-200/60 bg-white p-3 shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:border-blue-500/30">
                  <Icon
                    className={`h-7 w-7 ${partner.color} transition-colors`}
                  />
                  <span className="absolute inset-0 rounded-2xl bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* الاسم والتصنيف */}
                <h4 className="text-sm font-bold text-ink-900 transition-colors group-hover:text-blue-600">
                  {partner.name}
                </h4>

                <span className="mt-2 inline-flex items-center gap-1.5 rounded-lg border border-ink-200/60 bg-white px-2.5 py-1 text-[11px] font-medium text-ink-600 shadow-2xs">
                  <CheckCircle2 className="h-3 w-3 text-emerald-600" />
                  {partner.category}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
