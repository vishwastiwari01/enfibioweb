'use client';

import { useEffect, useRef } from 'react';

const STATS = [
  { num: '14', label: 'Active Projects' },
  { num: '3',  label: 'Unified Layers' },
  { num: '∞',  label: 'Swarm Nodes' },
  { num: '01', label: 'Mission: Real World' },
];

export default function StatsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible');
      }),
      { threshold: 0.2 }
    );
    el.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative z-10 py-8" style={{ marginBottom: '0' }}>
      <div
        className="grid grid-cols-2 md:grid-cols-4"
        style={{ borderTop: '1px solid rgba(0,212,255,0.1)', borderBottom: '1px solid rgba(0,212,255,0.1)' }}
      >
        {STATS.map((stat, i) => (
          <div
            key={i}
            className="fade-in flex flex-col items-center justify-center py-8 px-4 relative"
            style={{
              borderRight: i < 3 ? '1px solid rgba(0,212,255,0.08)' : 'none',
              transitionDelay: `${i * 0.1}s`,
            }}
          >
            <div
              className="text-4xl font-black glow-cyan mb-1"
              style={{ fontFamily: 'Orbitron', color: 'var(--cyan)' }}
            >
              {stat.num}
            </div>
            <div
              className="text-xs tracking-widest opacity-50 text-center"
              style={{ fontFamily: 'Share Tech Mono', fontSize: '9px' }}
            >
              {stat.label.toUpperCase()}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
