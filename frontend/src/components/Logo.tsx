import React from "react";
import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { FeaturesSection } from "../components/FeaturesSection";
import { TracksSection } from "../components/TracksSection";
import { PracticalSessionsSection } from "../components/PracticalSessionsSection";
import { InstructorsSection } from "../components/InstructorsSection";
import { TopStudentsSection } from "../components/TopStudentsSection";
import { CTASection } from "../components/CTASection";
import { Footer } from "../components/Footer";

export default function Home() {
  return (
    <div
      className="min-h-screen bg-[#0f172a] text-slate-100 font-sans antialiased selection:bg-slate-700 selection:text-white"
      dir="rtl"
    >
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <TracksSection />
        <PracticalSessionsSection />
        <InstructorsSection />
        <TopStudentsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
