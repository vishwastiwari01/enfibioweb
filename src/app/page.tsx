'use client';

// Layout
import NavBar from '@/components/layout/NavBar';
import Footer from '@/components/layout/Footer';

// Sections — in display order
import HeroSection         from '@/components/sections/HeroSection';
import StatsSection        from '@/components/sections/StatsSection';
import HangarSection       from '@/components/sections/HangarSection';
import ApplicationsSection from '@/components/sections/ApplicationsSection';
import CapabilitiesSection from '@/components/sections/CapabilitiesSection';
import BharatBannerSection from '@/components/sections/BharatBannerSection';
import ProjectsSection     from '@/components/sections/ProjectsSection';
import TimelineSection     from '@/components/sections/TimelineSection';
import FoundersSection     from '@/components/sections/FoundersSection';

export default function Home() {
  return (
    <>
      <NavBar />

      <main className="w-full relative" style={{ paddingTop: '64px' }}>
        {/* 1. Hero: Real Problems. Practical Solutions. */}
        <HeroSection />

        {/* 2. From Lab Ideas to Lasting Impact */}
        <StatsSection />

        {/* 3. Featured Product: THAND.AI with Prototype & Commercial Vision */}
        <HangarSection />

        {/* 4. Applications Across Industries: Vaccines, FMCG, Dairy, Horticulture */}
        <ApplicationsSection />

        {/* 5. Technology Domains: AgriTech, Hardware, AI, Nanotech */}
        <CapabilitiesSection />

        {/* 6. Built for Bharat & Beyond Banner */}
        <BharatBannerSection />

        {/* 7. Other Projects portfolio */}
        <ProjectsSection />

        {/* 8. Milestones: SIIC IIT Kanpur, PM-RKVY RAFTAAR, Eureka */}
        <TimelineSection />

        {/* 9. Founders: Vishwas, Shardul, Raj + Let's Build What's Next */}
        <FoundersSection />

        {/* Anchor targets */}
        <div id="contact" />
        <div id="about"   />
        <div id="careers" />
      </main>

      <Footer />
    </>
  );
}
