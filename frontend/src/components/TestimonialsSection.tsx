import React from "react";
import { Star, Quote, Sparkles, MessageSquareHeart } from "lucide-react";
import { motion } from "framer-motion";

export const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "سامر المصري",
      track: "مسار تطوير الويب (Laravel & React)",
      text: "الدمج بين الدروس النظرية والورش التطبيقية المباشرة اختصر عليّ شهور من التخبيص. المنصة رتبت لي الخطة بشكل ممتاز.",
      rating: 5,
      gradient: "from-cyan-500 to-blue-600",
      glowColor: "hover:border-cyan-500/50",
    },
    {
      name: "خالد العبدالله",
      track: "مسار صيانة الأجهزة الإلكترونية",
      text: "التدريب الميداني في الورشة الحقيقية كان نقطة التحول، التطبيق العملي أمام المدرب أتاح لي فتح ورشتي الخاصة بثقة.",
      rating: 5,
      gradient: "from-amber-500 to-orange-600",
      glowColor: "hover:border-amber-500/50",
    },
    {
      name: "عمر الحسين",
      track: "مسار البرمجة بلغة C#",
      text: "الربط عبر Google Meet والحصول على مراجعة دقيقة للكود من المحاضر جعل التجربة التعليمية احترافية للغاية.",
      rating: 5,
      gradient: "from-indigo-500 to-purple-600",
      glowColor: "hover:border-indigo-500/50",
    },
  ];

  return (
    <section
      id="testimonials"
      dir="rtl"
      className="relative overflow-hidden border-b border-ink-200/60 bg-white py-20 lg:py-28 text-ink-900"
    >
      {/* خلفية شبكية ناعمة متوافقة مع الثيم الفاتح */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-60 pointer-events-none" />

      {/* خلفية الإضاءة الهادئة والناعمة */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-[400px] w-[500px] rounded-full bg-cyan-600/5 blur-[160px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        {/* العنوان والترويسة */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-50 px-3.5 py-1 text-xs font-semibold text-cyan-600 backdrop-blur-md mb-4 shadow-sm"
          >
            <Sparkles className="h-3.5 w-3.5 text-cyan-600" />
            <span>ثقة خريجينا وتجاربهم</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-ink-900 leading-tight"
          >
            قصص نجاح <span className="text-blue-600">وآراء طلابنا</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-3 text-sm sm:text-base text-ink-500 max-w-xl mx-auto leading-relaxed"
          >
            تارب واقعية لطلاب خاضوا رحلة التأسيس النظري والتطبيق الميداني وصنعوا
            مسarهم المهني.
          </motion.p>
        </div>

        {/* شبكة التقييمات */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((item, idx) => {
            const firstLetter = item.name[0];

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                whileHover={{ y: -4 }}
                className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-ink-200/60 bg-ink-50 p-7 backdrop-blur-xl transition-all duration-300 hover:bg-white hover:shadow-xl ${item.glowColor}`}
              >
                {/* اقتباس خلفي شفاف ومتناسق */}
                <Quote className="absolute top-6 left-6 h-16 w-16 text-ink-200/50 group-hover:text-ink-200 transition-colors pointer-events-none -rotate-12" />

                <div className="relative z-10">
                  {/* النجوم والتقييم */}
                  <div className="flex items-center gap-1 text-amber-500 mb-5">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-amber-500 text-amber-500"
                      />
                    ))}
                  </div>

                  {/* نص الاقتباس */}
                  <p className="text-sm sm:text-base text-ink-600 leading-relaxed font-normal mb-8 min-h-[72px]">
                    "{item.text}"
                  </p>
                </div>

                {/* معلومات الطالب */}
                <div className="relative z-10 pt-5 border-t border-ink-200/60 flex items-center gap-3.5">
                  <div
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${item.gradient} text-base font-bold text-white shadow-md`}
                  >
                    {firstLetter}
                  </div>

                  <div>
                    <h3 className="font-bold text-ink-900 text-sm group-hover:text-blue-600 transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-xs text-ink-500 font-medium mt-0.5">
                      {item.track}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
