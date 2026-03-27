'use client';

import { useEffect, useRef } from 'react';
import { FOUNDERS } from '@/lib/data/founders';
import { PostCard } from '@/components/ui/post-card';

export default function FoundersSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1 }
    );
    el.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="founders" ref={sectionRef} className="relative z-10 py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="fade-in mb-14">
          <div className="section-label">Founding Team</div>
          <h2 className="section-title" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)' }}>
            The People Behind Enfibio
          </h2>
          <p style={{ marginTop: '12px', color: 'var(--text-muted)', fontFamily: 'Inter, sans-serif', fontSize: '15px', maxWidth: '480px' }}>
            Three engineers. Three disciplines. One mission.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 fade-in fade-in-delay-1">
          {FOUNDERS.map((founder) => (
            <PostCard key={founder.name} founder={founder} />
          ))}
        </div>
      </div>
    </section>
  );
}
