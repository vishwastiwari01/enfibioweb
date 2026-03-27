'use client';

import React, { useRef, useEffect } from "react";
import { Radar, IconContainer } from "@/components/ui/radar-effect";
import { 
  MonitorPlay, 
  Smartphone, 
  PenTool, 
  Wrench, 
  Server, 
  GitBranch, 
  Database 
} from "lucide-react";

export default function CapabilitiesSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible');
      }),
      { threshold: 0.1 }
    );
    el.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="capabilities" ref={sectionRef} className="relative z-10 py-24 select-none overflow-hidden" style={{ minHeight: '600px' }}>
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="fade-in mb-16 text-center">
          <div className="section-header inline-block mx-auto mb-2">◈ SYSTEM CAPABILITIES</div>
          <h2 className="section-title text-4xl mb-4 text-white">INTEGRATION RADAR</h2>
          <p className="max-w-2xl mx-auto text-sm opacity-60" style={{ fontFamily: 'Barlow' }}>
            Scanning active sectors for intelligence mapping, robust infrastructure, and deployed endpoints within the Enfibio ecosystem.
          </p>
        </div>

        <div className="fade-in fade-in-delay-1 relative flex h-[450px] w-full flex-col items-center justify-center space-y-4 overflow-hidden pt-8">
          
          {/* Row 1 */}
          <div className="mx-auto w-full max-w-4xl z-50">
            <div className="flex w-full items-center justify-center space-x-10 md:justify-between md:space-x-0 relative top-12">
              <IconContainer
                text="Swarm Intelligence"
                delay={0.2}
                icon={<MonitorPlay className="h-6 w-6 text-[var(--cyan)]" />}
              />
              <IconContainer
                delay={0.4}
                text="Autonomous Edge"
                icon={<Smartphone className="h-6 w-6 text-[var(--cyan)]" />}
              />
              <IconContainer
                text="Neuromorphic HW"
                delay={0.3}
                icon={<PenTool className="h-6 w-6 text-[var(--cyan)]" />}
              />
            </div>
          </div>
          
          {/* Row 2 */}
          <div className="mx-auto w-full max-w-[30rem] z-50">
            <div className="flex w-full items-center justify-center space-x-10 md:justify-between md:space-x-0 relative top-10">
              <IconContainer
                text="MARL Coordination"
                delay={0.5}
                icon={<Wrench className="h-6 w-6 text-[var(--cyan)]" />}
              />
              <IconContainer
                text="Tactical Telemetry"
                delay={0.8}
                icon={<Server className="h-6 w-6 text-[var(--cyan)]" />}
              />
            </div>
          </div>
          
          {/* Row 3 */}
          <div className="mx-auto w-full max-w-2xl z-50">
            <div className="flex w-full items-center justify-center space-x-10 md:justify-between md:space-x-0 relative top-8">
              <IconContainer
                delay={0.6}
                text="Threat Detection"
                icon={<GitBranch className="h-6 w-6 text-[var(--cyan)]" />}
              />
              <IconContainer
                delay={0.7}
                text="Sensor Fusion"
                icon={<Database className="h-6 w-6 text-[var(--cyan)]" />}
              />
            </div>
          </div>

          {/* Central Radar Sweep */}
          <Radar className="absolute bottom-1/2 translate-y-1/2 scale-150" />
          
          {/* Fade gradient base line */}
          <div className="absolute bottom-0 z-[41] h-[2px] w-full bg-gradient-to-r from-transparent via-[var(--cyan)] to-transparent opacity-20 shadow-[0_0_20px_var(--cyan)]" />
        </div>
      </div>
    </section>
  );
}
