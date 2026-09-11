import React, { useState, useEffect } from "react";
import {
  Clock,
  Video,
  ArrowLeft,
  Sparkles,
  Code2,
  Wrench,
  UserCheck,
  X,
  CheckCircle2,
  Loader2,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { fetchCourses, enrollStudent, CourseRecord } from "../api/management"; // استيراد الدالة الأصلية الموجودة بالـ API

export const TracksSection = () => {
  const [trackFilter, setTrackFilter] = useState<"all" | "technical" | "craft">(
    "all",
  );
  const [courses, setCourses] = useState<CourseRecord[]>([]);
  const [loading, setLoading] = useState(true);

  // حالات نافذة الانضمام والتسجيل المتوافقة مع الـ API (تتطلب student_id)
  const [selectedCourse, setSelectedCourse] = useState<CourseRecord | null>(
    null,
  );
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [studentId, setStudentId] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const filterTabs = [
    { id: "all", label: "كافة المسارات" },
    { id: "technical", label: "التقنية والبرمجة" },
    { id: "craft", label: "الحرف والمهن اليدوية" },
  ];

  useEffect(() => {
    const loadCourses = async () => {
      try {
        setLoading(true);
        const response = await fetchCourses();
        setCourses(response.data || []);
      } catch (error) {
        console.error("خطأ في جلب الكورسات:", error);
      } finally {
        setLoading(false);
      }
    };

    loadCourses();
  }, []);

  // دالة الإرسال المتوافقة مع دالة enrollStudent الأصلية في الـ API
  const handleEnrollSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedCourse) return;

    try {
      setIsSubmitting(true);
      setErrorMessage("");

      // تمرير الـ course.id والـ student_id المطابق للـ API الأصلي
      await enrollStudent(selectedCourse.id, Number(studentId));

      setIsSubmitting(false);
      setIsSuccess(true);

      // إغلاق النافذة بعد ثانيتين وتصفية الحقول
      setTimeout(() => {
        setIsSuccess(false);
        setSelectedCourse(null);
        setStudentId("");
      }, 2000);
    } catch (error: any) {
      console.error("خطأ أثناء التسجيل:", error);
      setIsSubmitting(false);
      setErrorMessage(
        error.response?.data?.message ||
          "حدث خطأ أثناء محاولة الانضمام للمسار، يرجى المحاولة لاحقاً.",
      );
    }
  };

  const filteredCourses = courses.filter(
    (c) => trackFilter === "all" || c.course_type === trackFilter,
  );

  return (
    <section
      id="tracks"
      dir="rtl"
      className="relative overflow-hidden border-b border-ink-200/60 bg-white py-20 lg:py-28 text-ink-900"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-60 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-50 px-3.5 py-1 text-xs font-semibold text-blue-600 mb-4 shadow-sm"
          >
            <Sparkles className="h-3.5 w-3.5 text-blue-600" />
            <span>مسارات تعليمية متخصصة</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-ink-900 leading-tight"
          >
            المسارات والكورسات{" "}
            <span className="text-blue-600">المتاحة حالياً</span>
          </motion.h2>

          <div className="mt-8 flex flex-wrap justify-center gap-2 rounded-2xl border border-ink-200/80 bg-ink-50 p-1.5 max-w-fit mx-auto shadow-sm">
            {filterTabs.map((tab) => {
              const isActive = trackFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() =>
                    setTrackFilter(tab.id as "all" | "technical" | "craft")
                  }
                  className={`relative rounded-xl px-5 py-2.5 text-xs font-bold transition-colors duration-300 ${
                    isActive ? "text-white" : "text-ink-600 hover:text-ink-900"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeFilterBg"
                      className="absolute inset-0 z-0 rounded-xl bg-blue-600 shadow-md shadow-blue-600/25"
                    />
                  )}
                  <span className="relative z-10">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {loading ? (
          <div className="text-center text-ink-500 py-16 text-sm font-semibold">
            جاري تحميل المسارات والكورسات...
          </div>
        ) : filteredCourses.length === 0 ? (
          <div className="text-center text-ink-400 py-16 text-sm">
            لا توجد مسارات متاحة ضمن هذا التصنيف حالياً.
          </div>
        ) : (
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredCourses.map((course) => {
                const isTech = course.course_type === "technical";
                const CategoryIcon = isTech ? Code2 : Wrench;
                const tagColor = isTech
                  ? "bg-blue-50 text-blue-600 border-blue-500/20"
                  : "bg-amber-50 text-amber-600 border-amber-500/20";

                return (
                  <motion.div
                    key={course.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    whileHover={{ y: -4 }}
                    className="group relative flex flex-col justify-between rounded-2xl border border-ink-200/60 bg-ink-50 p-6 transition-all duration-300 hover:bg-white hover:shadow-xl"
                  >
                    <div>
                      <div className="flex justify-between items-center mb-5">
                        <span
                          className={`inline-flex items-center gap-1.5 text-[11px] font-bold px-3 py-1 rounded-full border ${tagColor}`}
                        >
                          <CategoryIcon className="h-3 w-3" />
                          {isTech ? "قطاع تقني" : "قطاع مهني"}
                        </span>
                        <span className="text-[11px] font-medium text-ink-500 flex items-center gap-1 border border-ink-200/60 bg-white px-2.5 py-1 rounded-lg shadow-sm">
                          <Clock className="h-3 w-3 text-blue-600" />
                          {course.max_students
                            ? `${course.max_students} مقعد`
                            : "متاح"}
                        </span>
                      </div>

                      <h3 className="font-bold text-base sm:text-lg text-ink-900 group-hover:text-blue-600 transition-colors mb-2 leading-snug">
                        {course.title}
                      </h3>

                      <div className="flex items-center gap-2 text-xs text-ink-500 mb-6">
                        <UserCheck className="h-3.5 w-3.5 text-ink-400" />
                        <span>{course.instructor?.name || "محاضر معتمد"}</span>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-ink-200/60 flex flex-col gap-3">
                      <div className="flex items-center gap-2 text-[11px] font-semibold text-ink-700">
                        <Video className="h-3.5 w-3.5 text-blue-600 shrink-0" />
                        <span className="truncate">
                          المستوى: {course.level}
                        </span>
                      </div>

                      <button
                        onClick={() => setSelectedCourse(course)}
                        className="mt-1 flex items-center justify-center gap-2 rounded-xl border border-ink-200 bg-white py-2.5 text-xs font-bold text-ink-800 transition-all hover:border-blue-600 hover:bg-blue-600 hover:text-white group/btn shadow-sm cursor-pointer"
                      >
                        <span>الانضمام للمسار</span>
                        <ArrowLeft className="h-3.5 w-3.5 transition-transform duration-300 group-hover/btn:-translate-x-1" />
                      </button>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        )}
      </div>

      {/* نافذة التسجيل المنبثقة */}
      <AnimatePresence>
        {selectedCourse && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => !isSubmitting && setSelectedCourse(null)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-md rounded-2xl bg-white border border-ink-200 p-6 shadow-2xl z-10 text-right"
            >
              <div className="flex items-center justify-between pb-4 border-b border-ink-100 mb-4">
                <h3 className="text-base font-bold text-ink-900">
                  الانضمام إلى المسار التعليمي
                </h3>
                <button
                  onClick={() => !isSubmitting && setSelectedCourse(null)}
                  className="rounded-lg p-1 text-ink-400 hover:bg-ink-50 hover:text-ink-700 transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {isSuccess ? (
                <div className="py-8 text-center flex flex-col items-center justify-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                    <CheckCircle2 className="h-6 w-6" />
                  </div>
                  <h4 className="text-sm font-bold text-ink-900">
                    تم تسجيل طلب انضمامك بنجاح!
                  </h4>
                  <p className="text-xs text-ink-500">
                    تم ربط الطالب بالمسار في قاعدة البيانات بنجاح.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleEnrollSubmit}
                  className="flex flex-col gap-4"
                >
                  <div>
                    <span className="block text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1.5 rounded-xl border border-blue-500/20 mb-4">
                      {selectedCourse.title}
                    </span>

                    {errorMessage && (
                      <div className="mb-3 rounded-xl bg-red-50 p-3 text-xs text-red-600 border border-red-200">
                        {errorMessage}
                      </div>
                    )}

                    <label className="block text-xs font-semibold text-ink-700 mb-1.5">
                      معرف الطالب (Student ID)
                    </label>
                    <input
                      type="number"
                      required
                      placeholder="أدخل رقم تعريف الطالب (مثال: 1)"
                      value={studentId}
                      onChange={(e) => setStudentId(e.target.value)}
                      className="w-full rounded-xl border border-ink-200 bg-ink-50/50 px-3.5 py-2.5 text-xs text-ink-900 focus:bg-white focus:border-blue-600 focus:outline-none transition-all"
                    />
                  </div>

                  <div className="flex items-center justify-end gap-2.5 mt-4 pt-4 border-t border-ink-100">
                    <button
                      type="button"
                      disabled={isSubmitting}
                      onClick={() => setSelectedCourse(null)}
                      className="rounded-xl px-4 py-2 text-xs font-bold text-ink-600 hover:bg-ink-100 transition-colors"
                    >
                      إلغاء
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-2 text-xs font-bold text-white hover:bg-blue-700 transition-colors disabled:opacity-50"
                    >
                      {isSubmitting && (
                        <Loader2 className="h-3.5 w-3.5 animate-spin" />
                      )}
                      <span>تأكيد الانضمام</span>
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
