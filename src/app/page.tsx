'use client';

// Layout
import NavBar from '@/components/layout/NavBar';
import Footer from '@/components/layout/Footer';

// Sections
import HeroSection         from '@/components/sections/HeroSection';
import StatsSection        from '@/components/sections/StatsSection';
import CapabilitiesSection from '@/components/sections/CapabilitiesSection';
import HangarSection       from '@/components/sections/HangarSection';
import ProjectsSection     from '@/components/sections/ProjectsSection';
import TimelineSection     from '@/components/sections/TimelineSection';
import FoundersSection     from '@/components/sections/FoundersSection';
import ContactSection      from '@/components/sections/ContactSection';

export default function Home() {
  return (
    <>
      <NavBar />
      <main className="w-full relative">
        <HeroSection />
        <StatsSection />
        <CapabilitiesSection />
        <HangarSection />
        <ProjectsSection />
        <TimelineSection />
        <FoundersSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
