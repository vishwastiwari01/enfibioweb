'use client';

import { useRef, useEffect } from 'react';
import dynamic from 'next/dynamic';

const CinematicSwarm = dynamic(
  () => import('@/components/three/CinematicSwarm'),
  {
    ssr: false,
    loading: () => (
      <div
        style={{
          height: '600px',
          background: '#020a12',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: '1px solid rgba(0,212,255,0.08)',
        }}
      >
        <span
          style={{
            fontFamily: 'Share Tech Mono, monospace',
            color: '#00d4ff',
            fontSize: '11px',
            letterSpacing: '0.2em',
            opacity: 0.5,
          }}
        >
          ▸ INITIALISING SWARM ENGINE...
        </span>
      </div>
    ),
  }
);

export default function SwarmSection() {
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
    <section
      id="swarm"
      ref={sectionRef}
      className="relative z-10 py-16 px-6"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="fade-in mb-8">
          <div className="section-label">Autonomous Systems</div>
          <h2 className="section-title" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)' }}>Swarm Intelligence</h2>
          <p style={{ marginTop: '10px', color: 'var(--text-muted)', fontFamily: 'Inter, sans-serif', fontSize: '14px', maxWidth: '480px' }}>
            36-node heterogeneous UAV swarm with MARL-based formation control
            and distributed mesh communication. Real-time tactical reconfiguration
            in under 80ms.
          </p>
        </div>

        {/* Formation pills */}
        <div className="fade-in fade-in-delay-1 flex flex-wrap gap-2 mb-6">
          {[
            { label: 'Grid Array',       color: 'var(--accent-2)' },
            { label: 'V-Strike Vector',  color: 'var(--amber)'    },
            { label: 'Orbital Sentinel', color: 'var(--purple)'   },
            { label: 'Adaptive Cluster', color: 'var(--green)'    },
          ].map(f => (
            <span key={f.label} className="px-3 py-1 text-xs rounded-full border"
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500, fontSize: '11px', color: f.color, borderColor: `${f.color}40`, background: `${f.color}08` }}>
              {f.label}
            </span>
          ))}
        </div>

        {/* Canvas wrapper */}
        <div
          className="fade-in fade-in-delay-2 relative"
          style={{ border: '1px solid rgba(0,212,255,0.12)', borderRadius: '2px' }}
        >
          <CinematicSwarm />
        </div>

        {/* Stats row */}
        <div className="fade-in fade-in-delay-3 grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          {[
            { label: 'Drone Nodes',    value: '36',    unit: 'Active'       },
            { label: 'Mesh Links',     value: '72',    unit: 'Real-time'    },
            { label: 'Response Time',  value: '80ms',  unit: 'Reconfig'     },
            { label: 'AI Ops/sec',     value: '1,842', unit: 'Decisions'    },
          ].map(stat => (
            <div key={stat.label} className="glass-card p-4">
              <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', color: 'var(--text-dim)', letterSpacing: '0.06em', marginBottom: '6px' }}>{stat.label.toUpperCase()}</div>
              <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '22px', color: 'var(--accent-2)' }}>{stat.value}</div>
              <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '9px', color: 'var(--text-dim)', marginTop: '4px', letterSpacing: '0.06em' }}>{stat.unit.toUpperCase()}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
