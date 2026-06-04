'use client';

import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Brain, Cpu, Code, Globe } from 'lucide-react';
import RadialOrbitalTimeline from '@/components/ui/radial-orbital-timeline';

const TIMELINE_DATA = [
  { id: 1, title: 'Enfibio Founded', date: '2026 Q1', category: 'Origin', icon: Shield,
    content: 'Three engineers unite: Execution, Intelligence, and Embedded layers aligned.', status: 'completed' as const, energy: 100, relatedIds: [2] },
  { id: 2, title: 'Project ASTRA', date: '2026 Q2', category: 'Defense', icon: Zap,
    content: 'Heterogeneous drone swarm prototype. First MARL behavior demonstrated.', status: 'completed' as const, energy: 90, relatedIds: [1, 3] },
  { id: 3, title: 'MedGPT Alpha', date: '2026 Q3', category: 'Intelligence', icon: Brain,
    content: 'Clinical RAG system deployed. Decision-grade medical intelligence online.', status: 'completed' as const, energy: 80, relatedIds: [2, 4] },
  { id: 4, title: 'Post-Silicon Chip', date: '2026 Q4', category: 'Hardware', icon: Cpu,
    content: 'Neuromorphic architecture designed. <5W envelope for edge inference.', status: 'in-progress' as const, energy: 55, relatedIds: [3, 5] },
  { id: 5, title: 'Air OS v1.0', date: '2027 Q1', category: 'Systems', icon: Code,
    content: 'Full aerial OS. RTOS + Linux hybrid with sensor fusion middleware.', status: 'in-progress' as const, energy: 35, relatedIds: [4, 6] },
  { id: 6, title: 'Global Deployment', date: '2027 Q2', category: 'Mission', icon: Globe,
    content: 'Enfibio ecosystem deployed at scale. Intelligence layer of the real world.', status: 'pending' as const, energy: 10, relatedIds: [5] },
];

export default function TimelineSection() {
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
    <section id="timeline" ref={sectionRef} className="relative z-10 py-24 select-none overflow-hidden" style={{ minHeight: '800px' }}>
      
      {/* Background styling for timeline */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(circle at 50% 50%, rgba(0,212,255,0.03) 0%, transparent 70%)'
      }} />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="fade-in mb-16 text-center">
          <div className="section-header inline-block mx-auto mb-2">◈ STRATEGIC ROADMAP</div>
          <h2 className="section-title text-4xl mb-4 text-[var(--text)]">MISSION TIMELINE</h2>
          <p className="max-w-2xl mx-auto text-sm opacity-60" style={{ fontFamily: 'Barlow' }}>
            Tracking operational milestones combining Defense, Hardware, and Intelligence systems.
            Nodes represent critical phase transitions in the Enfibio ecosystem.
          </p>
        </div>

        <div className="fade-in fade-in-delay-1 -mx-6 md:mx-0">
          <RadialOrbitalTimeline timelineData={TIMELINE_DATA} />
        </div>
      </div>
    </section>
  );
}
