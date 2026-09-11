import React, { useState, useEffect } from "react";
import { Award, GraduationCap, ArrowLeft, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // استيراد Link للتوجيه
import {
  fetchCourseInstructors,
  CourseInstructorRecord,
} from "../api/management";

export const InstructorsSection = () => {
  const [instructors, setInstructors] = useState<CourseInstructorRecord[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadInstructors = async () => {
      try {
        setLoading(true);
        const data = await fetchCourseInstructors();
        setInstructors(data || []);
      } catch (error) {
        console.error("خطأ في جلب المدرسين:", error);
      } finally {
        setLoading(false);
      }
    };

    loadInstructors();
  }, []);

  return (
    <section
      id="instructors"
      dir="rtl"
      className="relative overflow-hidden border-b border-ink-200/60 bg-white py-20 lg:py-28 text-ink-900"
    >
      {/* خلفية شبكية ناعمة متوافقة مع الثيم الفاتح */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-60 pointer-events-none" />

      {/* خلفيات إضاءة خفيفة وناعمة */}
      <div className="absolute top-1/4 right-10 -z-10 h-96 w-96 rounded-full bg-indigo-600/5 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 -z-10 h-80 w-80 rounded-full bg-blue-600/5 blur-[130px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        {/* الهيدر العلوي */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-50 px-3.5 py-1 text-xs font-semibold text-indigo-600 backdrop-blur-md mb-4 shadow-sm"
          >
            <Sparkles className="h-3.5 w-3.5 text-indigo-600" />
            <span>نخبة الخبراء والمدربين</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-ink-900 leading-tight"
          >
            الكوادر التدريسية{" "}
            <span className="text-blue-600">والخبراء المعتمدون</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-3 text-sm sm:text-base text-ink-500 max-w-xl mx-auto leading-relaxed"
          >
            فريق من الأساتذة والمهنيين لقيادة التطبيق العلمي والميداني ونقل
            الخبرة الحقيقية.
          </motion.p>
        </div>

        {loading ? (
          <div className="text-center text-ink-500 py-16 text-sm font-semibold">
            جاري تحميل الكوادر التدريسية...
          </div>
        ) : instructors.length === 0 ? (
          <div className="text-center text-ink-400 py-16 text-sm">
            لا يوجد مدرسون متاحون لعرضهم حالياً.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {instructors.map((inst, index) => {
              const nameInitial =
                inst.name.replace(/^(أ\.|د\.|م\.|الخبير)\s*/, "")[0] || "م";
              const gradients = [
                "from-blue-600 to-cyan-500",
                "from-indigo-600 to-purple-500",
                "from-emerald-600 to-teal-500",
                "from-amber-600 to-orange-500",
              ];
              const randomGradient = gradients[index % gradients.length];

              return (
                <motion.div
                  key={inst.id}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.12 }}
                  whileHover={{ y: -4 }}
                  className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-ink-200/60 bg-ink-50 p-7 text-center backdrop-blur-xl transition-all duration-300 hover:bg-white hover:shadow-xl hover:border-blue-500/50"
                >
                  <div className="absolute top-0 right-0 left-0 h-24 bg-gradient-to-b from-blue-500/5 to-transparent pointer-events-none" />

                  <div>
                    <div className="flex justify-between items-center mb-6">
                      <span className="inline-flex items-center gap-1 text-[11px] font-bold px-3 py-1 rounded-full border bg-indigo-50 text-indigo-600 border-indigo-500/20">
                        مدرس معتمد
                      </span>

                      <span className="text-[11px] font-semibold text-ink-500 flex items-center gap-1">
                        <Award className="h-3.5 w-3.5 text-amber-500" />
                        خبرة معتمدة
                      </span>
                    </div>

                    <div className="relative mx-auto mb-5 h-20 w-20">
                      {inst.avatar_url ? (
                        <img
                          src={inst.avatar_url}
                          alt={inst.name}
                          className="h-full w-full rounded-2xl object-cover shadow-sm border border-ink-200/60"
                        />
                      ) : (
                        <div
                          className={`flex h-full w-full items-center justify-center rounded-2xl bg-gradient-to-br ${randomGradient} text-2xl font-black text-white shadow-md transition-transform duration-300 group-hover:scale-105`}
                        >
                          {nameInitial}
                        </div>
                      )}
                      <div className="absolute -inset-1 -z-10 rounded-2xl bg-gradient-to-tr from-blue-500 to-indigo-500 opacity-0 blur transition-opacity duration-300 group-hover:opacity-20" />
                    </div>

                    <h3 className="text-lg font-bold text-ink-900 group-hover:text-blue-600 transition-colors">
                      {inst.name}
                    </h3>

                    <p className="mt-1.5 text-xs text-ink-500 leading-relaxed min-h-[36px]">
                      {inst.email}
                    </p>
                  </div>

                  {/* زر الملف الشخصي */}
                  <div className="mt-6 pt-4 border-t border-ink-200/60">
                    <Link
                      to={`/instructors/${inst.id}`}
                      className="w-full flex items-center justify-center gap-2 rounded-xl border border-ink-200 bg-white py-2.5 text-xs font-bold text-ink-800 transition-all hover:border-blue-600 hover:bg-blue-600 hover:text-white group/btn shadow-sm"
                    >
                      <span>الملف الشخصي</span>
                      <ArrowLeft className="h-3.5 w-3.5 transition-transform duration-300 group-hover/btn:-translate-x-1" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};
