import React, { useEffect, useState } from "react";
import {
  Building,
  Star,
  CheckCircle2,
  ExternalLink,
  Briefcase,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";
import { fetchUsers, User } from "../api/users"; // استدعاء دالة جلب المستخدمين

export const TopStudentsSection = () => {
  const [topStudents, setTopStudents] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadStudents = async () => {
      try {
        setLoading(true);
        // جلب المستخدمين الذين لديهم دور طالب ('student')
        const students = await fetchUsers("student");

        // يمكنك تصفية الطلاب المتميزين أو أخذ أول عدة طلاب للمرض
        setTopStudents(students);
      } catch (error) {
        console.error("خطأ في جلب الطلاب المتميزين:", error);
      } finally {
        setLoading(false);
      }
    };

    loadStudents();
  }, []);

  return (
    <section
      id="top-students"
      dir="rtl"
      className="relative overflow-hidden border-b border-ink-200/60 bg-white py-20 lg:py-28 text-ink-900"
    >
      {/* خلفية شبكية ناعمة متوافقة مع الثيم الفاتح */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-60 pointer-events-none" />

      {/* إضاءات خلفية محيطية ناعمة */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -z-10 h-96 w-96 rounded-full bg-blue-600/5 blur-[160px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        {/* الهيدر العلوي */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-50 px-3.5 py-1 text-xs font-semibold text-blue-600 backdrop-blur-md mb-4 shadow-sm"
          >
            <Sparkles className="h-3.5 w-3.5 text-blue-600" />
            <span>فرص الاستثمار البرمجي والمهني للشركات</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-ink-900 leading-tight"
          >
            معرض الطلاب{" "}
            <span className="text-blue-600">والمتفوقين أكاديمياً</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-3 text-sm sm:text-base text-ink-500 max-w-xl mx-auto leading-relaxed"
          >
            نبرز أفضل الكفاءات والمهارات التي تم تأهيلها واختبارها ميدانياً
            لسهولة استقطابهم من قبل قطاعات الأعمال.
          </motion.p>
        </div>

        {/* حالة التحميل */}
        {loading ? (
          <div className="text-center text-ink-500 py-10 text-sm font-semibold">
            جاري تحميل الكفاءات والطلاب...
          </div>
        ) : topStudents.length === 0 ? (
          <div className="text-center text-ink-400 py-10 text-sm">
            لا يوجد طلاب متميزون لعرضهم حالياً.
          </div>
        ) : (
          /* شبكة الطلاب */
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {topStudents.map((student, idx) => {
              const firstLetter = student.name ? student.name[0] : "S";

              return (
                <motion.div
                  key={student.id || idx}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  whileHover={{ y: -4 }}
                  className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-ink-200/60 bg-ink-50 p-7 backdrop-blur-xl transition-all duration-300 hover:bg-white hover:shadow-xl hover:border-blue-500/50"
                >
                  <div>
                    {/* الرأس: الأفاتار، التقييم وشارة المسار */}
                    <div className="flex justify-between items-start mb-5">
                      <div className="relative">
                        {student.avatar_url ? (
                          <img
                            src={student.avatar_url}
                            alt={student.name}
                            className="h-14 w-14 rounded-2xl object-cover shadow-sm border border-ink-200/60"
                          />
                        ) : (
                          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 text-xl font-black text-white shadow-md">
                            {firstLetter}
                          </div>
                        )}
                        <span className="absolute -bottom-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500 ring-4 ring-white">
                          <CheckCircle2 className="h-3 w-3 text-white" />
                        </span>
                      </div>

                      <div className="flex items-center gap-1.5 rounded-full border border-amber-500/20 bg-amber-50 px-3 py-1 text-xs font-bold text-amber-600">
                        <Star className="h-3.5 w-3.5 fill-amber-500 text-amber-500" />
                        <span>5.0</span>
                      </div>
                    </div>

                    {/* تفاصيل الطالب واللقب المهني */}
                    <div className="mb-4">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-lg sm:text-xl font-bold text-ink-900 group-hover:text-blue-600 transition-colors">
                          {student.name}
                        </h3>
                        <span className="inline-block text-[10px] font-bold px-2.5 py-0.5 rounded-full border bg-blue-50 text-blue-600 border-blue-500/20">
                          {student.specialty || "طالب مميز"}
                        </span>
                      </div>

                      <p className="text-xs sm:text-sm text-ink-500 font-medium leading-relaxed line-clamp-2">
                        {student.bio || "متدرب في المنصة البرمجية"}
                      </p>
                    </div>

                    {/* إحصائية الإنجازات */}
                    <div className="flex items-center gap-2 text-xs text-ink-700 mb-6 bg-white border border-ink-200/60 p-2.5 rounded-xl shadow-sm">
                      <Briefcase className="h-3.5 w-3.5 text-blue-600 shrink-0" />
                      <span>
                        {student.academic_id
                          ? `الرقم الأكاديمي: ${student.academic_id}`
                          : "مسار تفاعلي معتمد"}
                      </span>
                    </div>
                  </div>

                  {/* الجزء السفلي: حالة التوظيف وأحداث الإجراء */}
                  <div className="pt-4 border-t border-ink-200/60 flex items-center justify-between gap-3">
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-emerald-600">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                      </span>
                      متاح للتوظيف
                    </span>

                    <button className="flex items-center gap-1.5 rounded-xl border border-ink-200 bg-white px-3.5 py-2 text-xs font-bold text-ink-800 transition-all hover:border-blue-600 hover:bg-blue-600 hover:text-white group/btn shadow-sm">
                      <span>عرض السيرة</span>
                      <ExternalLink className="h-3 w-3 transition-transform duration-300 group-hover/btn:scale-110" />
                    </button>
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
