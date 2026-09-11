import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";
import logo from "../assets/logo.png"; // تأكد من مطابقة مسار استيراد الشعار حسب مكان الملف

export const Footer = () => {
  return (
    <footer
      dir="rtl"
      className="relative overflow-hidden border-t border-ink-200/60 bg-white text-ink-600 pt-20 pb-10"
    >
      {/* خلفية شبكية ناعمة متوافقة مع الثيم الفاتح */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-60 pointer-events-none" />

      {/* خلفيات الإضاءة الهادئة والناعمة */}
      <div className="absolute top-0 right-1/3 -z-10 h-72 w-72 rounded-full bg-cyan-600/5 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 -z-10 h-80 w-80 rounded-full bg-blue-600/5 blur-[160px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12 pb-16 border-b border-ink-200/60">
          {/* العمود الأول: التعريف والاشتراك البريدي */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <div className="relative flex h-11 w-11 items-center justify-center rounded-2xl bg-ink-50 border border-ink-200/60 overflow-hidden shadow-sm">
                <img
                  src={logo}
                  alt="شعار منصة محترف"
                  className="h-7 w-7 object-contain"
                />
                <div className="absolute -inset-0.5 rounded-2xl bg-cyan-500 opacity-5 blur-sm" />
              </div>
              <span className="text-2xl font-black tracking-tight text-ink-900">
                منصة <span className="text-blue-600">محترف</span>
              </span>
            </div>

            <p className="text-sm leading-relaxed text-ink-500 max-w-sm">
              المنصة الأولى المخصصة لتمكين الكوادر وتأهيلها لسوق العمل الميداني
              والتقني من خلال الجمع بين المحاضرات النظرية والورشات التطبيقية
              المباشرة.
            </p>

            {/* النموذج البريدي المصغر */}
            <div className="space-y-2.5 pt-2">
              <span className="text-xs font-bold text-ink-800 flex items-center gap-1.5">
                <Sparkles className="h-3.5 w-3.5 text-cyan-600" />
                اشترك لنشرة الفرص والورش الميدانية
              </span>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="flex items-center gap-2 max-w-md"
              >
                <div className="relative flex-1">
                  <input
                    type="email"
                    placeholder="أدخل بريدك الإلكتروني..."
                    className="w-full rounded-xl border border-ink-200 bg-ink-50 py-2.5 px-4 text-xs text-ink-900 placeholder-ink-400 transition-all focus:border-blue-600 focus:bg-white focus:outline-none focus:ring-1 focus:ring-blue-600/30 shadow-sm"
                  />
                </div>
                <button
                  type="submit"
                  className="flex shrink-0 items-center justify-center gap-1.5 rounded-xl bg-blue-600 px-4 py-2.5 text-xs font-bold text-white transition-all hover:bg-blue-700 hover:shadow-md hover:shadow-blue-500/20 active:scale-95"
                >
                  <span>اشتراك</span>
                  <Send className="h-3.5 w-3.5" />
                </button>
              </form>
            </div>

            {/* أزرار التواصل الاجتماعي */}
            <div className="flex items-center gap-2.5 pt-2">
              {/* X / Twitter */}
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-ink-200/60 bg-ink-50 text-ink-600 transition-all hover:border-blue-600 hover:bg-white hover:text-blue-600 shadow-sm"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-ink-200/60 bg-ink-50 text-ink-600 transition-all hover:border-blue-600 hover:bg-white hover:text-blue-600 shadow-sm"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.7a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z" />
                </svg>
              </a>

              {/* GitHub */}
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-ink-200/60 bg-ink-50 text-ink-600 transition-all hover:border-blue-600 hover:bg-white hover:text-blue-600 shadow-sm"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* العمود الثاني: روابط سريعة */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-ink-900 border-b border-ink-200/60 pb-2">
              روابط سريعة
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {[
                { label: "عن المنصة", href: "#about" },
                { label: "المسارات التعليمية", href: "#tracks" },
                { label: "التدريب الميداني", href: "#practical" },
                { label: "الكوادر التدريسية", href: "#instructors" },
                { label: "الطلاب المتميزون", href: "#top-students" },
              ].map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-1 text-ink-600 transition-colors hover:text-blue-600"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="h-3 w-3 opacity-0 transition-all duration-200 group-hover:opacity-100 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* العمود الثالث: المسارات */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-ink-900 border-b border-ink-200/60 pb-2">
              المسارات المتاحة
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {[
                "تطوير الويب (Laravel & React)",
                "برمجة الأنظمة بلغة C#",
                "صيانة اللوحات الإلكترونية",
                "فن الحلاقة والتصفيف",
              ].map((track, idx) => (
                <li key={idx}>
                  <a
                    href="#tracks"
                    className="text-ink-600 transition-colors hover:text-blue-600"
                  >
                    {track}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* العمود الرابع: معلومات التواصل */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-ink-900 border-b border-ink-200/60 pb-2">
              تواصل معنا
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm">
              <li className="flex items-start gap-3 text-ink-600">
                <MapPin className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
                <span>المركز الرئيسي - ورشة التدريب الميداني (القاعة A)</span>
              </li>
              <li className="flex items-center gap-3 text-ink-600">
                <Mail className="h-4 w-4 text-blue-600 shrink-0" />
                <span className="font-mono text-ink-800">
                  info@muhtarif.com
                </span>
              </li>
              <li className="flex items-center gap-3 text-ink-600">
                <Phone className="h-4 w-4 text-blue-600 shrink-0" />
                <span dir="ltr" className="font-mono text-ink-800">
                  +963 900 000 000
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* الجزء السفلي: الحقوق وحالة النظام */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-ink-500">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>جميع الخوادم وجدول الميدان يعمل بكفاءة</span>
          </div>

          <p>© {new Date().getFullYear()} منصة محترف. جميع الحقوق محفوظة.</p>

          <div className="flex gap-6">
            <a href="#" className="hover:text-blue-600 transition-colors">
              سياسة الخصوصية
            </a>
            <a href="#" className="hover:text-blue-600 transition-colors">
              شروط الخدمة
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
