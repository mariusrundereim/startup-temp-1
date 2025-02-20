"use client";

import HeroSection from "@/components/sections/Hero";
import TeamSection from "@/components/sections/Team";
import ServicesSection from "@/components/sections/Services";
import AboutSection from "@/components/sections/About";
import ContactSection from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <AboutSection />

      {/* Services Section */}
      <ServicesSection />

      {/* Team Section */}
      <TeamSection />

      {/* Contact Section */}
      <ContactSection />
    </main>
  );
}
