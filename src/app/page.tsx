'use client';

// Layout
import NavBar from '@/components/layout/NavBar';
import Footer from '@/components/layout/Footer';

// Showroom Core Components
import HeroShowroomCarousel from '@/components/showroom/HeroShowroomCarousel';
import ProjectCatalog from '@/components/showroom/ProjectCatalog';
import ImpactRibbon from '@/components/showroom/ImpactRibbon';

// Preserved & Integrated Company Sections
import StatsSection from '@/components/sections/StatsSection';
import CapabilitiesSection from '@/components/sections/CapabilitiesSection';
import TimelineSection from '@/components/sections/TimelineSection';
import FoundersSection from '@/components/sections/FoundersSection';
import ContactSection from '@/components/sections/ContactSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FAFCFB] text-ink flex flex-col selection:bg-teal-700/15">
      {/* Editorial Navigation */}
      <NavBar />

      <main className="w-full flex-1">
        {/* 1. Large Two-Project Interactive Hero Showcase (THAND.AI & Enfibio V2X) */}
        <HeroShowroomCarousel />

        {/* 2. E-Commerce Project Catalog with Filters & Search */}
        <ProjectCatalog />

        {/* 3. Four-Pillar Value & Mission Ribbon */}
        <ImpactRibbon />

        {/* 4. Prototype Validation & Stats Strip */}
        <StatsSection />

        {/* 5. What We Build — Capabilities, Research Domains & Purpose */}
        <CapabilitiesSection />

        {/* 6. Milestones, Incubation & Program Traction */}
        <TimelineSection />

        {/* 7. Engineering Leadership & Founders */}
        <FoundersSection />

        {/* 8. Meaningful Collaboration & Contact Inquiries */}
        <ContactSection />
      </main>

      {/* 9. Premium 5-Column Brand Footer */}
      <Footer />
    </div>
  );
}
