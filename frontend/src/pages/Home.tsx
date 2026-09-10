import React from "react";
// استدعاء المكونات بالأقواس المعقوفة لأن التصدير تم عبر export const
import { Navbar } from "../components/Navbar"; // أو Header إذا كان اسم ملفك Header.tsx
import { HeroSection } from "../components/HeroSection";
import { PracticalSessionsSection } from "../components/PracticalSessionsSection";
import { TopStudentsSection } from "../components/TopStudentsSection";
import { Footer } from "../components/Footer";
import { TestimonialsSection } from "../components/TestimonialsSection";
import { PartnersSection } from "../components/PartnersSection";
import { FeaturesSection } from "../components/FeaturesSection";
import { TracksSection } from "../components/TracksSection";
import { InstructorsSection } from "../components/InstructorsSection";
import { CTASection } from "../components/CTASection";

export default function Home() {
  return (
    <div
      className="min-h-screen bg-neutral-950 text-neutral-100 font-sans antialiased"
      dir="rtl"
    >
      <Navbar />
      <main>
        <HeroSection />
        <PartnersSection />
        <FeaturesSection />
        <TracksSection />
        <PracticalSessionsSection />
        <InstructorsSection />
        <TopStudentsSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
