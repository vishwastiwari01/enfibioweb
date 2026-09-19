'use client';

import { useEffect, useRef } from 'react';
import { CheckCircle2, Circle, Clock } from 'lucide-react';

type MilestoneStatus = 'completed' | 'active' | 'upcoming';

const MILESTONES: {
  date: string;
  title: string;
  desc: string;
  status: MilestoneStatus;
}[] = [
  {
    date: '2024',
    title: 'Prototype Development',
    desc: 'First working THAND.AI prototype developed — portable freezer achieving 3°C in lab conditions.',
    status: 'completed',
  },
  {
    date: 'IIT Innovation',
    title: 'Showcase Participation',
    desc: 'Presented THAND.AI at an IIT-level innovation showcase, gaining peer and mentor feedback.',
    status: 'completed',
  },
  {
    date: 'AICTE AIPF',
    title: 'Productization Fellowship',
    desc: 'Selected for the AICTE All India Productization Fellowship, supporting hardware commercialisation.',
    status: 'completed',
  },
  {
    date: '2026 — Sept 26–27',
    title: 'IIT Bombay EUREKA',
    desc: "Participating in IIT Bombay's flagship startup competition — one of India's most prestigious.",
    status: 'active',
  },
  {
    date: 'PM-RKVY RAFTAAR',
    title: 'SIIC, IIT Kanpur',
    desc: 'Applied under PM-RKVY RAFTAAR scheme via SIIC — Startup Incubation and Innovation Cell, IIT Kanpur for incubation support and grants.',
    status: 'active',
  },
  {
    date: 'Next',
    title: 'Field Trials & Commercialisation',
    desc: 'Planned field testing with agricultural communities, followed by product refinement and commercialisation.',
    status: 'upcoming',
  },
];

const STATUS_STYLES: Record<MilestoneStatus, { dot: string; border: string; bg: string }> = {
  completed: { dot: '#075E5A',  border: '#075E5A',  bg: '#F0F6F4' },
  active:    { dot: '#3C806C',  border: '#3C806C',  bg: '#E1F2EB' },
  upcoming:  { dot: '#9AAFBA',  border: '#C5D8D3',  bg: '#F8FAFA' },
};

export default function TimelineSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.05 }
    );
    el.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="milestones"
      ref={sectionRef}
      style={{ background: '#ffffff', padding: '80px 0' }}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="fade-in mb-14">
          <div className="section-label">Milestones</div>
          <h2
            className="section-title"
            style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', marginTop: '6px' }}
          >
            Our Journey So Far
          </h2>
          <p
            className="mt-3"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '15px',
              color: '#647781',
              maxWidth: '480px',
              lineHeight: 1.7,
            }}
          >
            Key moments in the development of Enfibio Technologies, from first prototype to emerging incubation pathways.
          </p>
        </div>

        {/* Desktop horizontal timeline */}
        <div className="hidden lg:block fade-in fade-in-delay-1">
          {/* Connecting line */}
          <div className="relative mb-8">
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: 0,
                right: 0,
                height: '2px',
                background: 'linear-gradient(90deg, #075E5A 0%, #075E5A 66%, #C5D8D3 66%, #C5D8D3 100%)',
                transform: 'translateY(-50%)',
              }}
            />
            {/* Dots */}
            <div className="relative flex justify-between">
              {MILESTONES.map(m => {
                const s = STATUS_STYLES[m.status];
                return (
                  <div key={m.title} className="flex flex-col items-center">
                    <div
                      className="flex items-center justify-center rounded-full z-10 relative"
                      style={{
                        width: 18,
                        height: 18,
                        background: m.status === 'upcoming' ? '#ffffff' : s.dot,
                        border: `2px solid ${s.dot}`,
                        boxShadow: m.status !== 'upcoming' ? `0 0 0 4px ${s.bg}` : 'none',
                      }}
                    />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Labels */}
          <div className="grid grid-cols-6 gap-3">
            {MILESTONES.map(m => {
              const s = STATUS_STYLES[m.status];
              return (
                <div key={m.title} className="flex flex-col gap-1.5">
                  <div
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: 600,
                      fontSize: '11px',
                      color: s.dot,
                      letterSpacing: '0.04em',
                      textTransform: 'uppercase',
                    }}
                  >
                    {m.date}
                  </div>
                  <div
                    style={{
                      fontFamily: 'Syne, sans-serif',
                      fontWeight: 700,
                      fontSize: '13px',
                      color: '#102F3D',
                      lineHeight: 1.3,
                    }}
                  >
                    {m.title}
                  </div>
                  <p
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '12px',
                      color: '#647781',
                      lineHeight: 1.55,
                    }}
                  >
                    {m.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile vertical timeline */}
        <div className="lg:hidden flex flex-col gap-0 fade-in fade-in-delay-1">
          {MILESTONES.map((m, i) => {
            const s = STATUS_STYLES[m.status];
            const StatusIcon = m.status === 'completed' ? CheckCircle2 : m.status === 'active' ? Clock : Circle;
            return (
              <div key={m.title} className="flex gap-4">
                {/* Dot + line */}
                <div className="flex flex-col items-center">
                  <div
                    className="flex items-center justify-center rounded-full shrink-0"
                    style={{
                      width: 32,
                      height: 32,
                      background: s.bg,
                      border: `2px solid ${s.border}`,
                      marginTop: '2px',
                    }}
                  >
                    <StatusIcon size={14} color={s.dot} />
                  </div>
                  {i < MILESTONES.length - 1 && (
                    <div style={{ width: '2px', flex: 1, background: '#DDE8E5', minHeight: '32px', margin: '4px 0' }} />
                  )}
                </div>

                {/* Content */}
                <div className="pb-8 flex-1">
                  <div
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: 600,
                      fontSize: '11px',
                      color: s.dot,
                      textTransform: 'uppercase',
                      letterSpacing: '0.06em',
                      marginBottom: '4px',
                    }}
                  >
                    {m.date}
                  </div>
                  <div
                    style={{
                      fontFamily: 'Syne, sans-serif',
                      fontWeight: 700,
                      fontSize: '15px',
                      color: '#102F3D',
                      marginBottom: '4px',
                    }}
                  >
                    {m.title}
                  </div>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#647781', lineHeight: 1.6 }}>
                    {m.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
