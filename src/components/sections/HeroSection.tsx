'use client';

import { useEffect, useRef, useState } from 'react';
import { PromptingIsAllYouNeed } from '@/components/ui/animated-hero-section';

const TAGLINES = [
  'Defense Intelligence',
  'AI Swarm Systems',
  'Autonomous Operations',
  'Frontier Hardware',
  'Execution at Scale',
];

export default function HeroSection() {
  const [taglineIdx, setTaglineIdx] = useState(0);
  const [fading, setFading] = useState(false);

  // Cycle taglines with a soft fade
  useEffect(() => {
    const id = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setTaglineIdx(i => (i + 1) % TAGLINES.length);
        setFading(false);
      }, 350);
    }, 3500);
    return () => clearInterval(id);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ paddingTop: '60px' }}
    >
      {/* Abstract gradient background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 80% 60% at 20% 50%, rgba(37,99,235,0.07) 0%, transparent 60%),
            radial-gradient(ellipse 60% 50% at 80% 30%, rgba(14,165,233,0.05) 0%, transparent 55%),
            radial-gradient(ellipse 100% 80% at 50% 100%, rgba(37,99,235,0.04) 0%, transparent 60%)
          `,
        }}
      />

      {/* Interactive Pong Background */}
      <div className="absolute inset-0 z-0">
        <PromptingIsAllYouNeed />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Eyebrow label */}
        <div
          className="inline-flex items-center gap-2 mb-8 px-3 py-1.5 rounded-full border"
          style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '11px',
            letterSpacing: '0.1em',
            color: 'var(--accent-2)',
            borderColor: 'rgba(14,165,233,0.2)',
            background: 'rgba(14,165,233,0.05)',
          }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full"
            style={{ background: 'var(--green)', boxShadow: '0 0 6px var(--green)' }}
          />
          ENFIBIO TECHNOLOGIES · EST. 2026
        </div>

        {/* Main headline */}
        <h1
          className="mb-6 leading-[1.05] tracking-tight"
          style={{
            fontFamily: 'Syne, sans-serif',
            fontWeight: 800,
            fontSize: 'clamp(2.6rem, 6vw, 5rem)',
            color: 'var(--text)',
            letterSpacing: '-0.03em',
          }}
        >
          Building the Intelligence
          <br />
          <span style={{ color: 'var(--accent)' }}>Layer of the Real World.</span>
        </h1>

        {/* Animated tagline */}
        <p
          className="mb-3 text-lg"
          style={{
            fontFamily: 'Inter, sans-serif',
            color: 'var(--text-muted)',
            transition: 'opacity 0.35s ease',
            opacity: fading ? 0 : 1,
            minHeight: '1.8em',
          }}
        >
          {TAGLINES[taglineIdx]}
        </p>

        <p
          className="mb-12 max-w-xl mx-auto text-sm leading-relaxed"
          style={{ fontFamily: 'Inter, sans-serif', color: 'var(--text-muted)', fontSize: '14px' }}
        >
          We build autonomous drone swarms, AI-driven defense systems, and frontier hardware
          for tomorrow's operational environment.
        </p>

        {/* CTA row */}
        <div className="flex flex-wrap gap-3 justify-center">
          <button
            onClick={() => scrollTo('projects')}
            className="btn-primary"
          >
            View Projects
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            onClick={() => scrollTo('founders')}
            className="btn-ghost"
          >
            Meet the Team
          </button>
        </div>
      </div>

      {/* Scroll hint */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-25"
        style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '9px', color: 'var(--text-muted)' }}
      >
        <span className="tracking-widest uppercase">Scroll</span>
        <div
          style={{
            width: '1px',
            height: '32px',
            background: 'linear-gradient(to bottom, var(--text-muted), transparent)',
          }}
        />
      </div>
    </section>
  );
}
