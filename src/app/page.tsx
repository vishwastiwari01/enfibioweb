'use client';

// Layout
import NavBar from '@/components/layout/NavBar';
import Footer from '@/components/layout/Footer';

// Showroom Core Components
import DeepTechHero from '@/components/showroom/DeepTechHero';
import ProjectCatalog from '@/components/showroom/ProjectCatalog';
import ImpactRibbon from '@/components/showroom/ImpactRibbon';

// Deep-Tech Interactive Visual Components
import HardwareShowcase from '@/components/sections/HardwareShowcase';

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
        {/* 1. High-Impact Deep-Tech Hero with Clean Interactive Console */}
        <DeepTechHero />

        {/* 2. Flagship Spotlight & Interactive R&D Project Explorer Card */}
        <ProjectCatalog />

        {/* 3. Interactive Container Scroll Hardware Architecture (Aceternity 3D Tilt) */}
        <HardwareShowcase />

        {/* 4. Four-Pillar Value & Mission Ribbon */}
        <ImpactRibbon />

        {/* 5. Prototype Validation & Stats Strip */}
        <StatsSection />

        {/* 6. What We Build — Capabilities, Research Domains & Purpose */}
        <CapabilitiesSection />

        {/* 7. Milestones, Incubation & Program Traction */}
        <TimelineSection />

        {/* 8. Engineering Leadership & Founders */}
        <FoundersSection />

        {/* 9. Meaningful Collaboration & Institutional Contact Channels */}
        <ContactSection />
      </main>

      {/* 10. Premium 5-Column Brand Footer */}
      <Footer />
    </div>
  );
}
