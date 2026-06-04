'use client';

import { useState } from 'react';

// Layout Components
import Loader from '@/components/layout/Loader';
import NavBar from '@/components/layout/NavBar';
import Footer from '@/components/layout/Footer';
import HudOverlay from '@/components/layout/HudOverlay';
import MissionLog from '@/components/layout/MissionLog';
import Ticker from '@/components/layout/Ticker';

// Section Components
import HeroSection from '@/components/sections/HeroSection';
import StatsSection from '@/components/sections/StatsSection';
import HangarSection from '@/components/sections/HangarSection';
import SwarmSection from '@/components/sections/SwarmSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import CapabilitiesSection from '@/components/sections/CapabilitiesSection';
import FoundersSection from '@/components/sections/FoundersSection';
import TimelineSection from '@/components/sections/TimelineSection';
import ArchitectureSection from '@/components/sections/ArchitectureSection';
import EarbudShowcase from '@/components/ui/spatial-product-showcase';

export default function Home() {
  const [loaderComplete, setLoaderComplete] = useState(false);

  return (
    <>
      {/* Boot sequence cover */}
      <Loader onComplete={() => setLoaderComplete(true)} />

      {/* Main interface rendered underneath */}
      <div
        className="transition-opacity duration-1000 delay-300 relative w-full h-full flex flex-col"
        style={{ opacity: loaderComplete ? 1 : 0, pointerEvents: loaderComplete ? 'auto' : 'none' }}
      >
        {/* Fixed overlays */}
        <NavBar />
        <HudOverlay />
        <MissionLog />
        <Ticker />

        {/* Scrollable sections */}
        <main className="flex-1 w-full relative z-10 pt-[60px] pb-[28px]">
          <HeroSection />
          <StatsSection />

          <HangarSection />
          <EarbudShowcase />
          <SwarmSection />
          <ProjectsSection />
          <CapabilitiesSection />
          <FoundersSection />
          <TimelineSection />
          <ArchitectureSection />
        </main>

        <Footer />
      </div>
    </>
  );
}
