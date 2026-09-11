import React from "react";
import {
  MapPin,
  Calendar,
  Users,
  Video,
  Sparkles,
  ArrowLeft,
} from "lucide-react";
import { motion } from "framer-motion";

export const PracticalSessionsSection = () => {
  const sessions = [
    {
      id: 1,
      title: "تطبيق عملي: صيانة الشاشات",
      type: "ميداني",
      location: "ورشة المركز الميداني - القاعة B",
      time: "السبت - 10:00 صباحاً",
      seatsLeft: 5,
      totalSeats: 15,
      isOnline: false,
      accentColor: "from-amber-500 to-orange-500",
      badgeStyle: "bg-amber-50 text-amber-600 border-amber-500/20",
      borderGlow: "hover:border-amber-500/50",
    },
    {
      id: 2,
      title: "تطبيق قصات الشعر والتصفيف",
      type: "ميداني",
      location: "صالون التدريب المعتمد",
      time: "الأحد - 02:00 ظهراً",
      seatsLeft: 3,
      totalSeats: 12,
      isOnline: false,
      accentColor: "from-emerald-500 to-teal-500",
      badgeStyle: "bg-emerald-50 text-emerald-600 border-emerald-500/20",
      borderGlow: "hover:border-emerald-500/50",
    },
    {
      id: 3,
      title: "جلسة ربط المشروع بـ Laravel API",
      type: "تفاعلي أونلاين",
      location: "رابط Google Meet المباشر",
      time: "الجمعة - 05:00 مساءً",
      seatsLeft: null, // مفتوح
      totalSeats: null,
      isOnline: true,
      accentColor: "from-blue-500 to-indigo-500",
      badgeStyle: "bg-blue-50 text-blue-600 border-blue-500/20",
      borderGlow: "hover:border-blue-500/50",
    },
  ];

  return (
    <section
      id="practical"
      dir="rtl"
      className="relative overflow-hidden border-b border-ink-200/60 bg-white py-20 lg:py-28 text-ink-900"
    >
      {/* خلفية شبكية ناعمة متوافقة مع الثيم الفاتح */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-60 pointer-events-none" />

      {/* خلفية إضاءة ناعمة وخفيفة */}
      <div className="absolute top-1/2 right-1/4 -z-10 h-96 w-96 rounded-full bg-cyan-500/5 blur-[140px] pointer-events-none" />

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
            <span>نظام الجدولة المكانية والزمانية</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-ink-900 leading-tight"
          >
            التدريبات الميدانية{" "}
            <span className="text-blue-600">والجلسات القادمة</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-3 text-sm sm:text-base text-ink-500 max-w-xl mx-auto leading-relaxed"
          >
            جلسات وورشات عمل مباشرة يتم تحديد جدولها الجغرافي والزماني بدقة عبر
            لوحات تحكم المحاضرين.
          </motion.p>
        </div>

        {/* شبكة الكروت بالثيم الفاتح */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {sessions.map((session, idx) => {
            const seatsPercent =
              session.seatsLeft && session.totalSeats
                ? ((session.totalSeats - session.seatsLeft) /
                    session.totalSeats) *
                  100
                : 100;

            return (
              <motion.div
                key={session.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                whileHover={{ y: -4 }}
                className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-ink-200/60 bg-ink-50 p-7 backdrop-blur-xl transition-all duration-300 hover:bg-white hover:shadow-xl ${session.borderGlow}`}
              >
                {/* الخط الجانبي المضيء */}
                <div
                  className={`absolute right-0 top-0 bottom-0 w-1.5 bg-gradient-to-b ${session.accentColor} opacity-75 group-hover:opacity-100 transition-opacity`}
                />

                <div>
                  {/* الرأس: العنوان والشارة */}
                  <div className="flex justify-between items-start gap-3 mb-5">
                    <h3 className="font-bold text-lg sm:text-xl text-ink-900 group-hover:text-blue-600 transition-colors leading-snug">
                      {session.title}
                    </h3>

                    <span
                      className={`inline-flex shrink-0 items-center text-[11px] font-bold px-3 py-1 rounded-full border ${session.badgeStyle}`}
                    >
                      {session.type}
                    </span>
                  </div>

                  {/* التفاصيل المعمارية للجلسة */}
                  <div className="space-y-3.5 text-xs sm:text-sm text-ink-500 mb-6">
                    <div className="flex items-center gap-3 text-ink-700">
                      <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-white border border-ink-200/60 shrink-0 shadow-sm">
                        {session.isOnline ? (
                          <Video className="h-4 w-4 text-blue-600" />
                        ) : (
                          <MapPin className="h-4 w-4 text-amber-600" />
                        )}
                      </div>
                      <span className="truncate">{session.location}</span>
                    </div>

                    <div className="flex items-center gap-3 text-ink-700">
                      <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-white border border-ink-200/60 shrink-0 shadow-sm">
                        <Calendar className="h-4 w-4 text-indigo-600" />
                      </div>
                      <span>{session.time}</span>
                    </div>

                    <div className="flex items-center gap-3 text-ink-700">
                      <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-white border border-ink-200/60 shrink-0 shadow-sm">
                        <Users className="h-4 w-4 text-emerald-600" />
                      </div>
                      <span>
                        {session.seatsLeft !== null
                          ? `المتبقي: ${session.seatsLeft} مقاعد فقط`
                          : "متاح لكافة طلاب المسار"}
                      </span>
                    </div>
                  </div>

                  {/* شريط المقاعد المتبقية في حال كان ميدانياً */}
                  {session.seatsLeft !== null && (
                    <div className="mb-6 space-y-1.5">
                      <div className="flex justify-between text-[11px] text-ink-500 font-medium">
                        <span>نسبة الحجز</span>
                        <span className="text-amber-600 font-bold">
                          {Math.round(seatsPercent)}%
                        </span>
                      </div>
                      <div className="h-1.5 w-full rounded-full bg-ink-200/80 overflow-hidden">
                        <div
                          className={`h-full rounded-full bg-gradient-to-r ${session.accentColor} transition-all duration-500`}
                          style={{ width: `${seatsPercent}%` }}
                        />
                      </div>
                    </div>
                  )}
                </div>

                {/* زر الإجراء السفلي */}
                <div className="pt-4 border-t border-ink-200/60">
                  <button className="w-full flex items-center justify-center gap-2 rounded-xl border border-ink-200 bg-white py-2.5 text-xs font-bold text-ink-800 transition-all hover:border-blue-600 hover:bg-blue-600 hover:text-white group/btn shadow-sm">
                    <span>حجز مقعد الجلسة</span>
                    <ArrowLeft className="h-3.5 w-3.5 transition-transform duration-300 group-hover/btn:-translate-x-1" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
