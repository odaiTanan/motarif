import React, { useState, useEffect } from "react";
import {
  LogIn,
  Menu,
  X,
  BookOpen,
  GraduationCap,
  Users,
  Award,
  Info,
  Search,
  ChevronDown,
  Bell,
  Sparkles,
  Code,
  Cpu,
  Database,
  User,
  LayoutDashboard,
  LogOut,
  Settings,
  ArrowRight,
  Clock,
  BellOff,
  Scissors, // تم استيراد أيقونة المقص لتناسب كورس الحلاقة
} from "lucide-react";
import { Link } from "react-router-dom";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import logo from "../assets/logo.png";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("#about");

  // حالة فتح وإغلاق قائمة المسارات التعليمية بالضغط
  const [isTracksOpen, setIsTracksOpen] = useState(false);
  const [isProfileHovered, setIsProfileHovered] = useState(false);

  // حالات خاصة بنظام البحث
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // حالات خاصة بنظام الإشعارات
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [notifications, setNotifications] = useState([]);

  // حالة اختبارية لتسجيل الدخول
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  // تتبع حركة التمرير
  const { scrollY } = useScroll();
  const { scrollYProgress } = useScroll();

  const headerBg = useTransform(
    scrollY,
    [0, 50],
    ["rgba(255, 255, 255, 0.95)", "rgba(255, 255, 255, 0.95)"],
  );

  const headerShadow = useTransform(
    scrollY,
    [0, 50],
    ["0 1px 2px 0 rgba(0, 0, 0, 0.02)", "0 4px 6px -1px rgba(0, 0, 0, 0.05)"],
  );

  // إغلاق النوافذ عند الضغط على Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsSearchOpen(false);
        setIsNotificationsOpen(false);
        setIsTracksOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const navLinks = [
    { name: "عن المنصة", href: "#about", icon: Info },
    {
      name: "المسارات التعليمية",
      href: "#tracks",
      icon: BookOpen,
      hasDropdown: true,
    },
    { name: "التدريب الميداني", href: "#practical", icon: GraduationCap },
    { name: "الكوادر التدريسية", href: "#instructors", icon: Users },
    { name: "الطلاب المتميزون", href: "#top-students", icon: Award },
  ];

  // تم تحديث العناصر لإضافة كورس حلاقة الرجال وتصفيف الشعر
  const trackItems = [
    {
      title: "أساسيات تطوير الويب",
      desc: "HTML, CSS, JavaScript",
      icon: Code,
      color: "text-blue-500",
    },
    {
      title: "تحليل البيانات بلغة Python",
      desc: "Pandas, NumPy, Analysis",
      icon: Cpu,
      color: "text-blue-500",
    },
    {
      title: "التصميم الرقمي للمبتدئين",
      desc: "UI/UX Foundations",
      icon: Database,
      color: "text-blue-500",
    },
    {
      title: "إدارة المشاريع التقنية",
      desc: "Agile, Scrum Methodologies",
      icon: Sparkles,
      color: "text-blue-500",
    },
    {
      title: "حلاقة الرجال وتصفيف الشعر",
      desc: "Haircut & Styling Foundations",
      icon: Scissors,
      color: "text-blue-500",
    },
  ];

  const searchResults = [
    {
      title: "مسار تطوير واجهات المستخدم (React)",
      type: "مسار تعليمي",
      href: "#tracks",
    },
    {
      title: "أساسيات الذكاء الاصطناعي وتعلم Machine Learning",
      type: "كورس",
      href: "#tracks",
    },
    {
      title: "حلاقة الرجال وتصفيف الشعر",
      type: "كورس",
      href: "#tracks",
    },
    {
      title: "البرنامج الشامل للتدريب الميداني للبرمجيات",
      type: "تدريب",
      href: "#practical",
    },
    {
      title: "دليل الطالب المتميز وكيفية الانضمام",
      type: "دليل",
      href: "#top-students",
    },
  ].filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const hasUnread = notifications.some((n) => n.unread);

  return (
    <>
      <motion.header
        style={{ backgroundColor: headerBg, boxShadow: headerShadow }}
        className="sticky top-0 z-50 border-b border-ink-200/60 backdrop-blur-md transition-colors"
      >
        <div className="container mx-auto flex h-20 items-center justify-between px-4 sm:px-6 lg:px-12">
          {/* اللوجو */}
          <Link
            to="/"
            className="group flex items-center gap-3.5 transition-all"
          >
            <div className="relative flex h-14 w-14 sm:h-15 sm:w-15 items-center justify-center overflow-hidden rounded-2xl p-2 shadow-inner bg-ink-50 border border-ink-200/60">
              <div className="absolute -inset-1 rounded-2xl bg-blue-600 opacity-0 blur-md transition-all duration-500 group-hover:opacity-35 group-hover:blur-lg" />
              <img
                src={logo}
                alt="شعار محترف"
                className="relative z-10 h-12 sm:h-13 w-auto object-contain transition-transform duration-300 group-hover:scale-110"
              />
              <span className="absolute inset-0 z-20 -translate-x-full bg-gradient-to-r from-transparent via-blue-500/10 to-transparent transition-transform duration-1000 ease-in-out group-hover:translate-x-full" />
            </div>

            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-extrabold tracking-tight text-ink-900 transition-colors duration-300 group-hover:text-blue-600">
                مُحترف
              </span>
              <span className="text-[9px] sm:text-[10px] font-medium tracking-widest text-ink-400">
                PLATFORM
              </span>
            </div>
          </Link>

          {/* روابط التنقل الرئيسية */}
          <nav className="hidden lg:flex items-center gap-1 rounded-2xl border border-ink-200/60 bg-ink-50/70 p-1.5 shadow-sm backdrop-blur-md relative">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = activeTab === link.href;

              if (link.hasDropdown) {
                return (
                  <div key={link.name} className="relative">
                    <button
                      onClick={() => {
                        setIsTracksOpen(!isTracksOpen);
                        setIsProfileHovered(false);
                      }}
                      className={`group relative flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-semibold transition-colors duration-300 ${
                        isTracksOpen
                          ? "bg-white border border-ink-200/60 text-ink-900 shadow-sm"
                          : "text-ink-500 hover:text-ink-900"
                      }`}
                    >
                      <Icon className="h-3.5 w-3.5 text-blue-600" />
                      <span>{link.name}</span>
                      <ChevronDown
                        className={`h-3.5 w-3.5 transition-transform duration-300 ${
                          isTracksOpen
                            ? "rotate-180 text-blue-600"
                            : "text-ink-400"
                        }`}
                      />
                    </button>

                    {/* القائمة المنسدلة للكورسات المتاحة */}
                    <AnimatePresence>
                      {isTracksOpen && (
                        <>
                          <div
                            className="fixed inset-0 z-40"
                            onClick={() => setIsTracksOpen(false)}
                          />
                          <motion.div
                            initial={{ opacity: 0, y: 12, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 8, scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full right-0 mt-2 w-72 rounded-2xl border border-ink-200/80 bg-white p-3 shadow-2xl backdrop-blur-xl z-50 text-right"
                          >
                            <div className="flex flex-col gap-1">
                              <div className="px-3 py-1.5 border-b border-ink-100 mb-1">
                                <span className="text-[11px] font-bold text-ink-400">
                                  الكورسات المتاحة حالياً
                                </span>
                              </div>
                              {trackItems.map((item) => (
                                <a
                                  key={item.title}
                                  href="#tracks"
                                  onClick={() => setIsTracksOpen(false)}
                                  className="flex items-center gap-3 rounded-xl p-2.5 hover:bg-blue-50/60 transition-colors group/item"
                                >
                                  <div className="rounded-lg bg-ink-50 p-2 border border-ink-200/60 group-hover/item:border-blue-500/30">
                                    <item.icon
                                      className={`h-4 w-4 ${item.color}`}
                                    />
                                  </div>
                                  <div>
                                    <h4 className="text-xs font-bold text-ink-900 group-hover/item:text-blue-600">
                                      {item.title}
                                    </h4>
                                    <p className="text-[10px] text-ink-400">
                                      {item.desc}
                                    </p>
                                  </div>
                                </a>
                              ))}
                            </div>
                          </motion.div>
                        </>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => {
                    setActiveTab(link.href);
                    setIsTracksOpen(false);
                  }}
                  className={`group relative flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-semibold transition-colors duration-300 ${
                    isActive
                      ? "text-ink-900"
                      : "text-ink-500 hover:text-ink-900"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeTabBackground"
                      className="absolute inset-0 z-0 rounded-xl bg-white border border-ink-200/60 shadow-sm"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                  <Icon
                    className={`relative z-10 h-3.5 w-3.5 ${
                      isActive ? "text-blue-600" : "text-ink-400"
                    }`}
                  />
                  <span className="relative z-10">{link.name}</span>
                </a>
              );
            })}
          </nav>

          {/* عناصر الإجراءات */}
          <div className="flex items-center gap-3">
            {/* زر الإشعارات */}
            <div className="relative flex justify-center">
              <button
                onClick={() => {
                  setIsNotificationsOpen(!isNotificationsOpen);
                  setIsProfileHovered(false);
                  setIsTracksOpen(false);
                }}
                className={`relative p-2 rounded-xl border border-ink-200/60 bg-ink-50 text-ink-600 hover:text-ink-900 transition-all hover:bg-ink-100 ${
                  isNotificationsOpen
                    ? "bg-ink-100 border-ink-300 text-blue-600"
                    : ""
                }`}
              >
                <Bell className="h-4 w-4" />
                {hasUnread && (
                  <>
                    <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-blue-600 animate-ping" />
                    <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-blue-600" />
                  </>
                )}
              </button>

              <AnimatePresence>
                {isNotificationsOpen && (
                  <>
                    <div
                      className="fixed inset-0 z-40"
                      onClick={() => setIsNotificationsOpen(false)}
                    />
                    <motion.div
                      initial={{ opacity: 0, y: 12, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-80 sm:w-96 rounded-2xl border border-ink-200/80 bg-white p-4 shadow-2xl backdrop-blur-xl z-50 text-right"
                    >
                      <div className="flex items-center justify-between pb-3 border-b border-ink-100 mb-3">
                        <div className="flex items-center gap-2">
                          <h3 className="text-xs font-bold text-ink-900">
                            الإشعارات
                          </h3>
                          {notifications.length > 0 && (
                            <span className="rounded-full bg-blue-100 px-2 py-0.5 text-[10px] font-semibold text-blue-600">
                              {notifications.length}
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="flex flex-col gap-2 max-h-80 overflow-y-auto pr-1">
                        {notifications.length > 0 ? (
                          notifications.map((notif: any) => (
                            <div
                              key={notif.id}
                              className={`flex flex-col gap-1.5 rounded-xl p-3 transition-all border ${
                                notif.unread
                                  ? "bg-blue-50/60 border-blue-200/60 shadow-2xs"
                                  : "bg-white border-ink-100 hover:bg-ink-50/60"
                              }`}
                            >
                              <div className="flex items-center justify-between">
                                <span className="text-xs font-bold text-ink-900">
                                  {notif.title}
                                </span>
                                <span className="flex items-center gap-1 text-[10px] text-ink-400 font-medium">
                                  <Clock className="h-3 w-3" />
                                  {notif.time}
                                </span>
                              </div>
                              <p className="text-[11px] text-ink-600 leading-relaxed">
                                {notif.desc}
                              </p>
                            </div>
                          ))
                        ) : (
                          <div className="py-10 px-4 text-center flex flex-col items-center justify-center gap-2.5">
                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-ink-50 border border-ink-200/60 text-ink-400">
                              <BellOff className="h-5 w-5" />
                            </div>
                            <div className="flex flex-col gap-1">
                              <h4 className="text-xs font-bold text-ink-800">
                                لا توجد إشعارات جديدة
                              </h4>
                              <p className="text-[11px] text-ink-400 max-w-[220px] leading-relaxed mx-auto">
                                سنقوم بإعلامك فور توفر أي تحديثات أو أنشطة جديدة
                                تخص حسابك.
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>

            {/* زر البحث */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="hidden xl:flex items-center gap-2 rounded-xl border border-ink-200/60 bg-ink-50 px-3.5 py-2 text-xs text-ink-500 hover:border-blue-400 hover:text-ink-900 transition-all hover:bg-ink-100 group shadow-2xs"
            >
              <Search className="h-3.5 w-3.5 text-ink-400 group-hover:text-blue-600 transition-colors" />
              <span>بحث...</span>
            </button>

            {/* حالة المستخدم */}
            {isLoggedIn ? (
              <div
                className="relative"
                onMouseEnter={() => setIsProfileHovered(true)}
                onMouseLeave={() => setIsProfileHovered(false)}
              >
                <button className="flex items-center gap-2.5 rounded-xl border border-ink-200/60 bg-ink-50 p-1.5 pl-3 transition-all hover:border-ink-300 hover:bg-ink-100">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-600 text-xs font-bold text-white shadow-sm shadow-blue-600/20">
                    A
                  </div>
                  <span className="text-xs font-semibold text-ink-900">
                    أحمد المحترف
                  </span>
                  <ChevronDown
                    className={`h-3.5 w-3.5 text-ink-400 transition-transform duration-300 ${isProfileHovered ? "rotate-180" : ""}`}
                  />
                </button>

                <AnimatePresence>
                  {isProfileHovered && (
                    <motion.div
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-48 rounded-2xl border border-ink-200/60 bg-white p-2 shadow-xl backdrop-blur-xl z-50 text-right"
                    >
                      <div className="flex flex-col gap-1">
                        <Link
                          to="/dashboard"
                          className="flex items-center gap-2.5 rounded-xl px-3 py-2 text-xs font-medium text-ink-700 hover:bg-ink-50 hover:text-ink-900 transition-colors"
                        >
                          <LayoutDashboard className="h-3.5 w-3.5 text-blue-600" />
                          <span>لوحة التحكم</span>
                        </Link>
                        <Link
                          to="/profile"
                          className="flex items-center gap-2.5 rounded-xl px-3 py-2 text-xs font-medium text-ink-700 hover:bg-ink-50 hover:text-ink-900 transition-colors"
                        >
                          <User className="h-3.5 w-3.5 text-blue-600" />
                          <span>الملف الشخصي</span>
                        </Link>
                        <Link
                          to="/settings"
                          className="flex items-center gap-2.5 rounded-xl px-3 py-2 text-xs font-medium text-ink-700 hover:bg-ink-50 hover:text-ink-900 transition-colors"
                        >
                          <Settings className="h-3.5 w-3.5 text-blue-600" />
                          <span>الإعدادات</span>
                        </Link>
                        <div className="my-1 h-[1px] bg-ink-100" />
                        <button
                          onClick={() => setIsLoggedIn(false)}
                          className="flex w-full items-center gap-2.5 rounded-xl px-3 py-2 text-xs font-medium text-red-600 hover:bg-red-50 transition-colors"
                        >
                          <LogOut className="h-3.5 w-3.5" />
                          <span>تسجيل الخروج</span>
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.96 }}
              >
                <Link
                  to="/login"
                  className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-blue-600 p-[1px] font-semibold text-white shadow-md shadow-blue-600/20 transition-all hover:bg-blue-700"
                >
                  <span className="flex items-center gap-2 rounded-[11px] bg-blue-600 px-4 py-2 text-xs transition-colors duration-300 group-hover:bg-blue-700">
                    <LogIn className="h-4 w-4 text-white transition-colors" />
                    <span>تسجيل الدخول</span>
                  </span>
                </Link>
              </motion.div>
            )}

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex lg:hidden items-center justify-center rounded-xl border border-ink-200/60 bg-ink-50 p-2 text-ink-700 hover:text-ink-900 hover:bg-ink-100"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* خط التقدم الضوئي */}
        <motion.div
          className="h-[2px] bg-blue-600 origin-right"
          style={{ scaleX: scrollYProgress }}
        />

        {/* قائمة الموبايل */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden overflow-hidden border-t border-ink-200/60 bg-white/95 px-6 py-4 backdrop-blur-xl shadow-lg text-right"
            >
              <nav className="flex flex-col gap-2">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-ink-700 hover:bg-ink-50 hover:text-ink-900 transition-colors"
                  >
                    <link.icon className="h-4 w-4 text-blue-600" />
                    <span>{link.name}</span>
                  </motion.a>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* نافذة البحث المنبثقة */}
      <AnimatePresence>
        {isSearchOpen && (
          <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsSearchOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="relative w-full max-w-xl rounded-2xl bg-white border border-ink-200 shadow-2xl overflow-hidden z-10 text-right"
            >
              <div className="flex items-center px-4 py-3 border-b border-ink-100 gap-3">
                <Search className="h-5 w-5 text-blue-600" />
                <input
                  type="text"
                  autoFocus
                  placeholder="ابحث عن مسار، كورس، أو محتوى..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-transparent text-sm text-ink-900 placeholder:text-ink-400 focus:outline-none text-right"
                />
                <button
                  onClick={() => setIsSearchOpen(false)}
                  className="rounded-lg p-1 text-ink-400 hover:bg-ink-50 hover:text-ink-700 transition-colors text-xs font-mono border border-ink-200"
                >
                  ESC
                </button>
              </div>

              <div className="max-h-80 overflow-y-auto p-2">
                {searchResults.length > 0 ? (
                  <div className="flex flex-col gap-1">
                    <span className="px-3 py-1 text-[11px] font-semibold text-ink-400">
                      النتائج المقترحة
                    </span>
                    {searchResults.map((result, idx) => (
                      <a
                        key={idx}
                        href={result.href}
                        onClick={() => setIsSearchOpen(false)}
                        className="flex items-center justify-between rounded-xl px-3 py-2.5 text-xs text-ink-700 hover:bg-blue-50 hover:text-blue-600 transition-colors group"
                      >
                        <div className="flex items-center gap-2">
                          <span className="font-bold">{result.title}</span>
                          <span className="rounded-md bg-ink-100 px-2 py-0.5 text-[10px] text-ink-500 group-hover:bg-blue-100 group-hover:text-blue-700">
                            {result.type}
                          </span>
                        </div>
                        <ArrowRight className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 transition-opacity rotate-180" />
                      </a>
                    ))}
                  </div>
                ) : (
                  <div className="py-8 text-center text-xs text-ink-400">
                    لا توجد نتائج مطابقة لـ "{searchQuery}"
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
