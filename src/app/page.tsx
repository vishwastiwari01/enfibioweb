'use client';

// Layout
import NavBar from '@/components/layout/NavBar';
import Footer from '@/components/layout/Footer';

// Showroom Core Components
import HeroShowroomCarousel from '@/components/showroom/HeroShowroomCarousel';
import ProjectCatalog from '@/components/showroom/ProjectCatalog';
import ImpactRibbon from '@/components/showroom/ImpactRibbon';

// Deep-Tech Interactive Visual Components
import HardwareShowcase from '@/components/sections/HardwareShowcase';
import AtmosphericShowcase from '@/components/sections/AtmosphericShowcase';

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

        {/* 3. Interactive Container Scroll Hardware Architecture (Aceternity 3D Tilt) */}
        <HardwareShowcase />

        {/* 4. Four-Pillar Value & Mission Ribbon */}
        <ImpactRibbon />

        {/* 5. Prototype Validation & Stats Strip */}
        <StatsSection />

        {/* 6. Procedural Cloud Shader Atmospheric Deep-Tech Banner */}
        <AtmosphericShowcase />

        {/* 7. What We Build — Capabilities, Research Domains & Purpose */}
        <CapabilitiesSection />

        {/* 8. Milestones, Incubation & Program Traction */}
        <TimelineSection />

        {/* 9. Engineering Leadership & Founders */}
        <FoundersSection />

        {/* 10. Meaningful Collaboration & Interactive Astronaut Social Card */}
        <ContactSection />
      </main>

      {/* 11. Premium 5-Column Brand Footer */}
      <Footer />
    </div>
  );
}
