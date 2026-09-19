'use client';

import { useEffect, useRef } from 'react';
import { Sprout, Cpu, Network, FlaskConical } from 'lucide-react';

const DOMAINS = [
  {
    icon: Sprout,
    title: 'AgriTech & Climate',
    desc: 'Cold-chain solutions, agricultural productivity, and resource-conscious engineering for a more sustainable food system.',
  },
  {
    icon: Cpu,
    title: 'Intelligent Hardware',
    desc: 'Embedded systems, thermal engineering, sensors, and real-world product development from prototype to production.',
  },
  {
    icon: Network,
    title: 'AI & Autonomous Systems',
    desc: 'AI-driven tools, intelligent automation, and autonomous technology research for next-generation applications.',
  },
  {
    icon: FlaskConical,
    title: 'Nanobiotechnology',
    desc: 'Emerging research at the intersection of biology, materials, and intelligent systems — exploring tomorrow\'s frontiers.',
  },
];

export default function CapabilitiesSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.08 }
    );
    el.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="technology"
      ref={sectionRef}
      style={{ background: '#F0F6F4', padding: '80px 0' }}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        {/* Header row */}
        <div className="fade-in flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <div className="section-label">Our Technology Domains</div>
            <h2
              className="section-title"
              style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', marginTop: '6px' }}
            >
              One Company. Multiple Frontiers.
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
              We explore and develop technologies across interconnected domains,
              combining engineering, intelligent systems, and applied research.
            </p>
          </div>
          <button
            onClick={() => scrollTo('projects')}
            className="shrink-0 inline-flex items-center gap-1.5 text-sm font-semibold"
            style={{
              fontFamily: 'Inter, sans-serif',
              color: '#075E5A',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '0',
              textDecoration: 'none',
            }}
          >
            Explore Our Research
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
              <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 fade-in fade-in-delay-1">
          {DOMAINS.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group flex flex-col gap-4 p-6 rounded-xl transition-all duration-200"
              style={{
                background: '#ffffff',
                border: '1px solid #DDE8E5',
                boxShadow: '0 1px 4px rgba(16,47,61,0.05)',
                cursor: 'default',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.borderColor = '#075E5A';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 20px rgba(7,94,90,0.10)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.borderColor = '#DDE8E5';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 1px 4px rgba(16,47,61,0.05)';
              }}
            >
              <div
                className="flex items-center justify-center rounded-xl"
                style={{
                  width: 44,
                  height: 44,
                  background: '#F0F6F4',
                  border: '1px solid #DDE8E5',
                }}
              >
                <Icon size={20} color="#075E5A" />
              </div>
              <div>
                <div
                  style={{
                    fontFamily: 'Syne, sans-serif',
                    fontWeight: 700,
                    fontSize: '15px',
                    color: '#102F3D',
                    marginBottom: '8px',
                  }}
                >
                  {title}
                </div>
                <p
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '13px',
                    color: '#647781',
                    lineHeight: 1.65,
                  }}
                >
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
