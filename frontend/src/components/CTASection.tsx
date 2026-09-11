import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export const CTASection = () => {
  return (
    <section
      dir="rtl"
      className="relative bg-white border-t border-ink-200/60 overflow-hidden py-24 lg:py-32 text-ink-900"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-60 pointer-events-none" />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(59,130,246,0.08),rgba(255,255,255,0))]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-[380px] w-[600px] rounded-full bg-cyan-500/5 blur-[180px] pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-12 text-center max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-50 px-4 py-1.5 text-xs font-semibold text-cyan-600 backdrop-blur-md mb-6 shadow-sm"
        >
          <Sparkles className="h-4 w-4 text-cyan-600" />
          <span>خطوتك الأولى نحو التميز المهني</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-ink-900 leading-tight"
        >
          جاهز لبدء رحلتك{" "}
          <span className="text-blue-600">المهنية والتطبيقية؟</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-sm sm:text-base lg:text-lg text-ink-500 leading-relaxed max-w-2xl mx-auto"
        >
          انضم اليوم إلى منصة محترف واكتسب المهارات العملية والنظرية التي تؤهلك
          للمنافسة في سوق العمل المحلي والإقليمي بثقة.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            to="/login"
            className="group relative inline-flex w-full sm:w-auto items-center justify-center gap-2.5 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 px-8 py-4 text-sm font-bold text-white shadow-xl shadow-blue-500/20 transition-all duration-300 hover:shadow-blue-500/30 hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>تسجيل الدخول / إنشاء حساب</span>
            <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
          </Link>

          <a
            href="#courses"
            className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-2xl border border-ink-200 bg-ink-50 px-7 py-4 text-sm font-bold text-ink-800 backdrop-blur-xl transition-all duration-300 hover:border-blue-600 hover:bg-white hover:text-blue-600 shadow-sm"
          >
            <span>استكشف المسارات المتاحة</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
