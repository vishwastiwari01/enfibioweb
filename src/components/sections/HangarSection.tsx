'use client';

import { useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import { ContainerScroll } from '@/components/ui/container-scroll-animation';

const HangarCanvas = dynamic(() => import('@/components/three/HangarCanvas'), {
  ssr: false,
  loading: () => (
    <div
      className="flex items-center justify-center w-full h-full"
      style={{ background: 'var(--surface-2)' }}
    >
      <span className="text-xs opacity-40 animate-pulse" style={{ fontFamily: 'var(--font-share-tech-mono), Share Tech Mono, monospace', color: 'var(--accent)' }}>
        ▸ LOADING HANGAR ASSETS...
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
    <section id="hangar" ref={sectionRef} className="relative z-10 py-4 px-6">
      <div className="max-w-6xl mx-auto">
        <ContainerScroll
          titleComponent={
            <div className="text-center mb-6">
              <div className="section-label inline-block">Visualization Module</div>
              <h2 className="section-title text-4xl md:text-5xl font-black tracking-tight" style={{ fontFamily: 'var(--font-orbitron), Syne, sans-serif' }}>
                PROJECT ASTRA HANGAR
              </h2>
              <p className="mt-4 text-sm text-slate-500 font-sans max-w-xl mx-auto leading-relaxed">
                Autonomous drone deployment system — Tactical Hangar View.
                Interact with the models below to inspect mechanical linkages and clearance envelopes.
              </p>
            </div>
          }
        >
          <div className="relative w-full h-full" style={{ background: 'var(--surface-3)', overflow: 'hidden' }}>
            {/* HUD Label */}
            <div className="absolute top-3 left-3 z-10" style={{ fontFamily: 'var(--font-share-tech-mono), Share Tech Mono, monospace', fontSize: '9px', color: 'var(--accent-2)', opacity: 0.7, letterSpacing: '0.1em' }}>
              PROJECT ASTRA — DEPLOYMENT VIEW
            </div>

            {/* Crosshair */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none">
              <svg width="60" height="60" viewBox="0 0 60 60" fill="none" style={{ opacity: 0.15 }}>
                <circle cx="30" cy="30" r="14" stroke="#2563eb" strokeWidth="0.5"/>
                <line x1="30" y1="0" x2="30" y2="14" stroke="#2563eb" strokeWidth="0.5"/>
                <line x1="30" y1="46" x2="30" y2="60" stroke="#2563eb" strokeWidth="0.5"/>
                <line x1="0" y1="30" x2="14" y2="30" stroke="#2563eb" strokeWidth="0.5"/>
                <line x1="46" y1="30" x2="60" y2="30" stroke="#2563eb" strokeWidth="0.5"/>
              </svg>
            </div>

            {/* Status indicators */}
            <div className="absolute bottom-3 left-3 z-10" style={{ fontFamily: 'var(--font-share-tech-mono), Share Tech Mono, monospace', fontSize: '8px', color: 'var(--text-muted)', opacity: 0.6 }}>
              <div>MARL NODES: 12 ACTIVE</div>
              <div>FORMATION: DELTA</div>
              <div>STATUS: NOMINAL</div>
            </div>

            <div className="absolute top-12 right-6 z-20 hidden md:block">
              <div style={{ fontFamily: 'var(--font-share-tech-mono), Share Tech Mono, monospace', background: 'var(--surface-3)', border: '1px solid var(--border)', borderRadius: '6px', padding: '14px 16px', backdropFilter: 'blur(10px)' }}>
                <div style={{ fontSize: '9px', color: 'var(--text-muted)', marginBottom: '10px', paddingBottom: '8px', borderBottom: '1px solid var(--border)', letterSpacing: '0.1em' }}>
                  DIAGNOSTICS
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', gap: '32px', fontSize: '9px', marginBottom: '6px' }}><span style={{ color: 'var(--text-muted)', marginRight: '8px' }}>PWR RESERVE</span><span style={{ color: '#2563eb' }}>94.2%</span></div>
                <div style={{ display: 'flex', justifyContent: 'space-between', gap: '32px', fontSize: '9px', marginBottom: '6px' }}><span style={{ color: 'var(--text-muted)', marginRight: '8px' }}>UPLINK</span><span style={{ color: 'var(--green)' }}>ENCRYPTED</span></div>
                <div style={{ display: 'flex', justifyContent: 'space-between', gap: '32px', fontSize: '9px', marginBottom: '6px' }}><span style={{ color: 'var(--text-muted)', marginRight: '8px' }}>PROPULSION</span><span style={{ color: '#2563eb' }}>4× ACTIVE</span></div>
                <div style={{ display: 'flex', justifyContent: 'space-between', gap: '32px', fontSize: '9px' }}><span style={{ color: 'var(--text-muted)', marginRight: '8px' }}>LATENCY</span><span style={{ color: 'var(--amber)' }}>12ms</span></div>
                
                <div className="mt-4 flex gap-1">
                  {Array.from({ length: 12 }).map((_, i) => (
                    <div 
                      key={i} 
                      className={`h-1 w-1 rounded-full ${i < 10 ? 'bg-[var(--cyan)] animate-pulse' : 'bg-[var(--border-mid)]'}`} 
                    />
                  ))}
                </div>
              </div>
            </div>

            <HangarCanvas />
          </div>
        </ContainerScroll>
      </div>
    </section>
  );
}
