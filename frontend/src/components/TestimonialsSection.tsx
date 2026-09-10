import React from "react";
import { Star, Quote } from "lucide-react";

export const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "سامر المصري",
      track: "مسار تطوير الويب (Laravel & React)",
      text: "الدمج بين الدروس النظرية والورش التطبيقية المباشرة اختصر عليّ شهور من التخبيص. المنصة رتبت لي الخطة بشكل ممتاز.",
      rating: 5,
    },
    {
      name: "خالد العبدالله",
      track: "مسار صيانة الأجهزة الإلكترونية",
      text: "التدريب الميداني في الورشة الحقيقية كان نقطة التحول، التطبيق العملي أمام المدرب أتاح لي فتح ورشتي الخاصة بثقة.",
      rating: 5,
    },
    {
      name: "عمر الحسين",
      track: "مسار البرمجة بلغة C#",
      text: "الربط عبر Google Meet والحصول على مراجعة دقيقة للكود من المحاضر جعل التجربة التعليمية احترافية للغاية.",
      rating: 5,
    },
  ];

  return (
    <section className="border-b border-slate-800 bg-slate-950 py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-slate-100">
            قصص نجاح وآراء طلابنا
          </h2>
          <p className="mt-2 text-slate-400">
            تجارب حقيقية لطلاب خاضوا التدريب النظري والميداني عبر منصة محترف
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="relative rounded-2xl border border-slate-800 bg-slate-900/40 p-6 flex flex-col justify-between hover:border-slate-700 transition-all"
            >
              <Quote className="absolute top-4 left-4 h-8 w-8 text-slate-800/60" />
              <div>
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-slate-300 leading-relaxed italic mb-6">
                  "{item.text}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800/80">
                <h4 className="font-bold text-slate-100 text-sm">
                  {item.name}
                </h4>
                <p className="text-xs text-slate-500 mt-0.5">{item.track}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
