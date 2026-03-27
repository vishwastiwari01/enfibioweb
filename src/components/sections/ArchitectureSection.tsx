'use client';

import { useEffect, useRef } from 'react';

const LAYERS = [
  {
    num: '01', tag: 'Execution Layer', title: 'Autonomous Deployment',
    accentColor: 'var(--amber)',
    owner: 'VISHWAS TIWARI · AI SYSTEMS ARCHITECT',
    desc: 'AI that DOES, not just AI that responds. Real-time agents, edge deployment, defense simulation.',
    caps: ['Autonomous AI Agents', 'Edge AI Inference', 'Defense Simulation', 'Real-world Autonomy', 'Swarm Coordination'],
  },
  {
    num: '02', tag: 'Intelligence Layer', title: 'Decision-Grade Outputs',
    accentColor: 'var(--cyan)',
    owner: 'SHARDUL PANDE · DATA SYSTEMS ENGINEER',
    desc: 'Answering not just what, but why. RAG architectures, ML pipelines, interpretable AI.',
    caps: ['RAG Architectures', 'ML Pipelines', 'Interpretable AI', 'Decision Systems', 'Signal Processing'],
  },
  {
    num: '03', tag: 'Embedded Layer', title: 'Physical Intelligence',
    accentColor: 'var(--green)',
    owner: 'RAJ GOEL · EMBEDDED SYSTEMS ENGINEER',
    desc: 'Bringing intelligence into physical systems. ROS2, real-time sensors, robotics middleware.',
    caps: ['ROS2 Middleware', 'Real-time Sensors', 'Edge Computing', 'Robotics Control', 'Custom Silicon'],
  },
];

export default function ArchitectureSection() {
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
    <section id="architecture" ref={sectionRef} className="relative z-10 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="fade-in mb-10">
          <div className="section-header">◈ SYSTEM ARCHITECTURE</div>
          <h2 className="section-title text-3xl">THREE-LAYER STACK</h2>
          <p className="text-sm opacity-50 mt-2" style={{ fontFamily: 'Barlow' }}>
            The complete technology stack powering the Enfibio mission.
          </p>
        </div>

        {/* Layers grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {LAYERS.map((layer, i) => (
            <div
              key={layer.num}
              className="fade-in relative overflow-hidden rounded-sm p-6 flex flex-col gap-4"
              style={{
                background: 'var(--bg-secondary)',
                borderTop: `2px solid ${layer.accentColor}`,
                border: '1px solid rgba(0,212,255,0.06)',
                transitionDelay: `${i * 0.15}s`,
              }}
            >
              {/* Decorative large number */}
              <div
                className="absolute top-3 right-4 text-8xl font-black opacity-[0.04]"
                style={{ fontFamily: 'Orbitron', color: layer.accentColor }}
              >
                {layer.num}
              </div>

              {/* Number + tag */}
              <div>
                <div
                  className="text-xs mb-1 font-bold"
                  style={{ fontFamily: 'Share Tech Mono', fontSize: '9px', color: layer.accentColor }}
                >
                  LAYER {layer.num}
                </div>
                <div
                  className="text-xs mb-2 opacity-50"
                  style={{ fontFamily: 'Share Tech Mono', fontSize: '9px', color: layer.accentColor }}
                >
                  {layer.tag.toUpperCase()}
                </div>
                <h3
                  className="text-lg font-black"
                  style={{ fontFamily: 'Orbitron', color: 'rgba(255,255,255,0.9)' }}
                >
                  {layer.title}
                </h3>
              </div>

               {/* Owner + Status Indicator */}
              <div className="flex justify-between items-center mt-auto border-t border-white/5 pt-3">
                <div
                  className="text-xs opacity-30"
                  style={{ fontFamily: 'Share Tech Mono', fontSize: '8px' }}
                >
                  {layer.owner}
                </div>
                <div className="flex items-center gap-1.5 h-full">
                  <div className="w-1 h-1 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-[8px] text-[var(--cyan)] opacity-40 uppercase tracking-tighter" style={{ fontFamily: 'Share Tech Mono' }}>
                    SECURED
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm opacity-60 leading-relaxed" style={{ fontFamily: 'Barlow' }}>
                {layer.desc}
              </p>

              {/* Capabilities */}
              <div className="space-y-2">
                <div
                  className="text-xs opacity-30 mb-2"
                  style={{ fontFamily: 'Share Tech Mono', fontSize: '8px' }}
                >
                  CAPABILITIES
                </div>
                {layer.caps.map(cap => (
                  <div key={cap} className="flex items-center gap-2">
                    <div
                      className="w-1 h-1 rounded-full flex-shrink-0"
                      style={{ background: layer.accentColor }}
                    />
                    <span
                      className="text-xs"
                      style={{ fontFamily: 'Share Tech Mono', color: 'rgba(255,255,255,0.55)', fontSize: '10px' }}
                    >
                      {cap}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
