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
import ScrollExpandMedia from '@/components/ui/scroll-expand-media';

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

          {/* Scroll Expand Mission Briefing */}
          <ScrollExpandMedia
            mediaType="image"
            mediaSrc="/astra_carrier.png"
            bgImageSrc="/astra_drone.png"
            title="SYSTEM OPERATIONAL BRIEFING"
            date="EST. 2026"
            scrollToExpand="SCROLL TO EXPAND BRIEFING"
            textBlend={false}
          >
            <div className="max-w-4xl mx-auto py-12 text-slate-800">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
                <div>
                  <h3 className="text-xl font-bold font-display text-slate-900 mb-4">TACTICAL OPERATIONAL DOCTRINE</h3>
                  <p className="text-sm leading-relaxed text-slate-600 mb-6 font-sans">
                    Enfibio Technologies develops full-stack autonomous hardware and intelligence systems for contested tactical environments. Our core architecture focuses on multi-agent reinforcement learning (MARL) for swarm robotics, hardware-in-the-loop edge processing, and secure command mesh fabrics.
                  </p>
                  <div className="space-y-4">
                    <div className="flex gap-3">
                      <span className="text-blue-600 font-bold font-mono">01/</span>
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800">Decentralized Coordination</h4>
                        <p className="text-xs text-slate-500 mt-1 font-sans">UAV units negotiate flight paths and collision avoidance locally, rendering traditional jamming countermeasures ineffective.</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-blue-600 font-bold font-mono">02/</span>
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800">Frontier Edge Silicons</h4>
                        <p className="text-xs text-slate-500 mt-1 font-sans">Neuromorphic processors running custom RTOS perform signal geolocation and threat profiling under a 5W power envelope.</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white/40 border border-slate-200/60 p-6 rounded-2xl flex flex-col justify-between shadow-sm backdrop-blur-md">
                  <div>
                    <div className="text-[10px] font-mono tracking-widest text-blue-600 uppercase mb-2">Secured Network Status</div>
                    <h4 className="text-lg font-bold font-display text-slate-900 mb-2">SYSTEM AUDIT REPORT</h4>
                    <p className="text-xs text-slate-500 leading-relaxed mb-6 font-sans">
                      All nodes are synchronized with the primary command node (NODE: PRIMARY). PACE communication protocols are active, utilizing post-quantum cryptographic (PQC) routing.
                    </p>
                  </div>
                  <div className="border-t border-slate-200/80 pt-4 flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="text-[10px] font-mono text-slate-400">ENCRYPTION PROTOCOL</span>
                      <span className="text-xs font-bold text-slate-800 font-mono">AES-256 + NTRU-HRSS</span>
                    </div>
                    <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                  </div>
                </div>
              </div>
            </div>
          </ScrollExpandMedia>

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
