import React from "react";
import { GraduationCap, Mail, Phone, MapPin, Send } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-slate-400 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          {/* عمود التعريف بالمنصة */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-800 border border-slate-700 text-slate-100 shadow-inner">
                <GraduationCap className="h-6 w-6" />
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-100">
                منصة محترف
              </span>
            </div>
            <p className="text-sm leading-relaxed text-slate-400 max-w-sm">
              المنصة الأولى المخصصة لتمكين الكوادر وتجهيزها لسوق العمل من خلال
              الجمع بين المحاضرات النظريّة التفاعلية والتدريبات الميدانية
              الورشية.
            </p>

            {/* هنا تم وضع أزرار التواصل الاجتماعي بـ SVG */}
            <div className="flex gap-3 pt-2">
              {/* X / Twitter */}
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-800 bg-slate-900 text-slate-300 hover:border-slate-700 hover:text-slate-100 transition-all"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-800 bg-slate-900 text-slate-300 hover:border-slate-700 hover:text-slate-100 transition-all"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.7a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z" />
                </svg>
              </a>

              {/* GitHub */}
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-800 bg-slate-900 text-slate-300 hover:border-slate-700 hover:text-slate-100 transition-all"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* عمود روابط سريعة */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-slate-100 uppercase tracking-wider">
              روابط السريعة
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#about"
                  className="hover:text-slate-100 transition-colors"
                >
                  عن المنصة
                </a>
              </li>
              <li>
                <a
                  href="#tracks"
                  className="hover:text-slate-100 transition-colors"
                >
                  المسارات التعليمية
                </a>
              </li>
              <li>
                <a
                  href="#practical"
                  className="hover:text-slate-100 transition-colors"
                >
                  التدريب الميداني
                </a>
              </li>
              <li>
                <a
                  href="#instructors"
                  className="hover:text-slate-100 transition-colors"
                >
                  الكوادر التدريسية
                </a>
              </li>
              <li>
                <a
                  href="#top-students"
                  className="hover:text-slate-100 transition-colors"
                >
                  الطلاب المتميزون
                </a>
              </li>
            </ul>
          </div>

          {/* عمود المسارات */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-slate-100 uppercase tracking-wider">
              المسارات المتاحة
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-slate-100 transition-colors">
                  تطوير الويب (Laravel & React)
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-slate-100 transition-colors">
                  برمجة الأنظمة بلغة C#
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-slate-100 transition-colors">
                  صيانة اللوحات الإلكترونية
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-slate-100 transition-colors">
                  فن الحلاقة والتصفيف
                </a>
              </li>
            </ul>
          </div>

          {/* عمود التواصل */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-slate-100 uppercase tracking-wider">
              تواصل معنا
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li className="flex items-center gap-2 text-slate-400">
                <MapPin className="h-4 w-4 text-slate-500 shrink-0" />
                <span>المركز الرئيسي - القاعة A</span>
              </li>
              <li className="flex items-center gap-2 text-slate-400">
                <Mail className="h-4 w-4 text-slate-500 shrink-0" />
                <span>info@muhtarif.com</span>
              </li>
              <li className="flex items-center gap-2 text-slate-400">
                <Phone className="h-4 w-4 text-slate-500 shrink-0" />
                <span dir="ltr">+963 900 000 000</span>
              </li>
            </ul>
          </div>
        </div>

        {/* الحقوق */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} منصة محترف. جميع الحقوق محفوظة.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-400 transition-colors">
              سياسة الخصوصية
            </a>
            <a href="#" className="hover:text-slate-400 transition-colors">
              شروط الخدمة
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
