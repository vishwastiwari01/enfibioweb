'use client';

import { useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';

const HangarCanvas = dynamic(() => import('@/components/three/HangarCanvas'), {
  ssr: false,
  loading: () => (
    <div
      className="flex items-center justify-center"
      style={{ height: '420px', background: 'var(--bg-secondary)', border: '1px solid rgba(0,212,255,0.1)' }}
    >
      <span className="text-xs opacity-40" style={{ fontFamily: 'Share Tech Mono', color: 'var(--cyan)' }}>
        LOADING HANGAR...
      </span>
    </div>
  ),
});

export default function HangarSection() {
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
    <section id="hangar" ref={sectionRef} className="relative z-10 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="fade-in mb-8">
          <div className="section-label">Visualization Module</div>
          <h2 className="section-title" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)' }}>PROJECT ASTRA</h2>
          <p style={{ marginTop: '10px', color: 'var(--text-muted)', fontFamily: 'Inter, sans-serif', fontSize: '14px' }}>
            Heterogeneous Swarm UAV System — Deployment View
          </p>
        </div>

        {/* 3D Canvas */}
        <div className="fade-in fade-in-delay-1 relative" style={{ border: '1px solid rgba(0,212,255,0.1)' }}>
          {/* HUD Label */}
          <div className="absolute top-3 left-3 z-10" style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '9px', color: 'var(--accent-2)', opacity: 0.5, letterSpacing: '0.1em' }}>
            PROJECT ASTRA — DEPLOYMENT VIEW
          </div>

          {/* Crosshair */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none">
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" style={{ opacity: 0.12 }}>
              <circle cx="30" cy="30" r="14" stroke="#00d4ff" strokeWidth="0.5"/>
              <line x1="30" y1="0" x2="30" y2="14" stroke="#00d4ff" strokeWidth="0.5"/>
              <line x1="30" y1="46" x2="30" y2="60" stroke="#00d4ff" strokeWidth="0.5"/>
              <line x1="0" y1="30" x2="14" y2="30" stroke="#00d4ff" strokeWidth="0.5"/>
              <line x1="46" y1="30" x2="60" y2="30" stroke="#00d4ff" strokeWidth="0.5"/>
            </svg>
          </div>

          {/* Status indicators */}
          <div className="absolute bottom-3 left-3 z-10" style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '8px', color: 'var(--text-muted)', opacity: 0.5 }}>
            <div>MARL NODES: 12 ACTIVE</div>
            <div>FORMATION: DELTA</div>
            <div>STATUS: NOMINAL</div>
          </div>

          <div className="absolute top-12 right-6 z-20 hidden md:block">
            <div style={{ fontFamily: 'JetBrains Mono, monospace', background: 'rgba(13,17,23,0.85)', border: '1px solid var(--border)', borderRadius: '6px', padding: '14px 16px', backdropFilter: 'blur(10px)' }}>
              <div style={{ fontSize: '9px', color: 'var(--text-muted)', marginBottom: '10px', paddingBottom: '8px', borderBottom: '1px solid var(--border)', letterSpacing: '0.1em' }}>
                DIAGNOSTICS
              </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', gap: '32px', fontSize: '9px', marginBottom: '6px' }}><span style={{ color: 'var(--text-muted)' }}>PWR RESERVE</span><span style={{ color: 'var(--accent-2)' }}>94.2%</span></div>
                <div style={{ display: 'flex', justifyContent: 'space-between', gap: '32px', fontSize: '9px', marginBottom: '6px' }}><span style={{ color: 'var(--text-muted)' }}>UPLINK</span><span style={{ color: 'var(--green)' }}>ENCRYPTED</span></div>
                <div style={{ display: 'flex', justifyContent: 'space-between', gap: '32px', fontSize: '9px', marginBottom: '6px' }}><span style={{ color: 'var(--text-muted)' }}>PROPULSION</span><span style={{ color: 'var(--accent-2)' }}>4× ACTIVE</span></div>
                <div style={{ display: 'flex', justifyContent: 'space-between', gap: '32px', fontSize: '9px' }}><span style={{ color: 'var(--text-muted)' }}>LATENCY</span><span style={{ color: 'var(--amber)' }}>12ms</span></div>
              
              <div className="mt-4 flex gap-1">
                {Array.from({ length: 12 }).map((_, i) => (
                  <div 
                    key={i} 
                    className={`h-1 w-1 rounded-full ${i < 10 ? 'bg-[var(--cyan)] animate-pulse' : 'bg-white/10'}`} 
                  />
                ))}
              </div>
            </div>
          </div>

          <HangarCanvas />
        </div>
      </div>
    </section>
  );
}
