'use client';

import { useEffect, useRef } from 'react';
import { Mail } from 'lucide-react';

const LinkedInIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
  </svg>
);

const FOUNDERS = [
  {
    initials: 'VT',
    name: 'Vishwas Tiwari',
    role: 'Co-Founder',
    focus: 'AI Systems & Product Development',
    specialty: 'Autonomous AI agents, edge AI deployment, product strategy, and real-world AI systems.',
    linkedin: 'https://linkedin.com/in/vishwastiwari',
    email: 'vishwas@enfibio.me',
  },
  {
    initials: 'SP',
    name: 'Shardul Pande',
    role: 'Co-Founder',
    focus: 'AI & Data Systems',
    specialty: 'Machine learning pipelines, RAG architectures, data engineering, and interpretable AI.',
    linkedin: 'https://linkedin.com/in/shardulpande',
    email: 'shardul@enfibio.me',
  },
  {
    initials: 'RG',
    name: 'Raj Goel',
    role: 'Co-Founder',
    focus: 'Embedded Systems & Robotics',
    specialty: 'ROS2, real-time sensor interfacing, embedded hardware, and robotics middleware.',
    linkedin: 'https://linkedin.com/in/rajgoel',
    email: 'raj@enfibio.me',
  },
];

export default function FoundersSection() {
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
      id="founders"
      ref={sectionRef}
      style={{ background: '#F0F6F4', padding: '80px 0' }}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="fade-in mb-12">
          <div className="section-label">Our Team</div>
          <h2
            className="section-title"
            style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', marginTop: '6px' }}
          >
            Built by a Passionate Team
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
            Three engineers. Three disciplines. One mission — engineering technology for real-world impact.
          </p>
        </div>

        {/* Main grid: 3 founder cards + 1 CTA panel */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 fade-in fade-in-delay-1">
          {FOUNDERS.map(founder => (
            <div
              key={founder.name}
              className="flex flex-col p-6 rounded-xl transition-all duration-200"
              style={{
                background: '#ffffff',
                border: '1px solid #DDE8E5',
                boxShadow: '0 1px 4px rgba(16,47,61,0.05)',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 20px rgba(7,94,90,0.10)';
                (e.currentTarget as HTMLElement).style.borderColor = '#075E5A';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.boxShadow = '0 1px 4px rgba(16,47,61,0.05)';
                (e.currentTarget as HTMLElement).style.borderColor = '#DDE8E5';
              }}
            >
              {/* Avatar with initials */}
              <div
                className="flex items-center justify-center rounded-full mb-5 shrink-0"
                style={{
                  width: 64,
                  height: 64,
                  background: 'linear-gradient(135deg, #075E5A 0%, #3C806C 100%)',
                  fontFamily: 'Syne, sans-serif',
                  fontWeight: 800,
                  fontSize: '20px',
                  color: '#ffffff',
                  letterSpacing: '-0.02em',
                }}
              >
                {founder.initials}
              </div>

              {/* Name & role */}
              <div
                style={{
                  fontFamily: 'Syne, sans-serif',
                  fontWeight: 700,
                  fontSize: '16px',
                  color: '#102F3D',
                  marginBottom: '2px',
                }}
              >
                {founder.name}
              </div>
              <div
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 600,
                  fontSize: '12px',
                  color: '#075E5A',
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                  marginBottom: '2px',
                }}
              >
                {founder.role}
              </div>
              <div
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '13px',
                  color: '#3C806C',
                  fontWeight: 500,
                  marginBottom: '12px',
                }}
              >
                {founder.focus}
              </div>

              {/* Specialty */}
              <p
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '13px',
                  color: '#647781',
                  lineHeight: 1.65,
                  flex: 1,
                  marginBottom: '16px',
                }}
              >
                {founder.specialty}
              </p>

              {/* Actions */}
              <div
                className="flex items-center gap-2 pt-4"
                style={{ borderTop: '1px solid #DDE8E5' }}
              >
                <a
                  href={founder.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${founder.name} on LinkedIn`}
                  className="flex items-center gap-1.5 rounded-lg px-3 py-1.5 transition-all duration-200"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '12px',
                    fontWeight: 600,
                    color: '#075E5A',
                    background: '#F0F6F4',
                    border: '1px solid #DDE8E5',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.background = '#075E5A';
                    (e.currentTarget as HTMLElement).style.color = '#ffffff';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.background = '#F0F6F4';
                    (e.currentTarget as HTMLElement).style.color = '#075E5A';
                  }}
                >
                  <LinkedInIcon />
                  LinkedIn
                </a>
                <a
                  href={`mailto:${founder.email}`}
                  aria-label={`Email ${founder.name}`}
                  className="flex items-center justify-center rounded-lg transition-all duration-200"
                  style={{
                    width: 32,
                    height: 32,
                    background: '#F0F6F4',
                    border: '1px solid #DDE8E5',
                    color: '#647781',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.background = '#075E5A';
                    (e.currentTarget as HTMLElement).style.color = '#ffffff';
                    (e.currentTarget as HTMLElement).style.borderColor = '#075E5A';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.background = '#F0F6F4';
                    (e.currentTarget as HTMLElement).style.color = '#647781';
                    (e.currentTarget as HTMLElement).style.borderColor = '#DDE8E5';
                  }}
                >
                  <Mail size={13} />
                </a>
              </div>
            </div>
          ))}

          {/* CTA panel */}
          <div
            className="flex flex-col justify-between p-6 rounded-xl"
            style={{
              background: 'linear-gradient(135deg, #075E5A 0%, #064B48 100%)',
              border: '1px solid #064B48',
              boxShadow: '0 4px 20px rgba(7,94,90,0.20)',
            }}
          >
            <div>
              <div
                style={{
                  fontFamily: 'Syne, sans-serif',
                  fontWeight: 800,
                  fontSize: '22px',
                  color: '#ffffff',
                  lineHeight: 1.2,
                  marginBottom: '12px',
                  letterSpacing: '-0.02em',
                }}
              >
                Let&apos;s Build What&apos;s Next
              </div>
              <p
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '13px',
                  color: 'rgba(255,255,255,0.72)',
                  lineHeight: 1.65,
                  marginBottom: '24px',
                }}
              >
                We are open to incubation opportunities, research collaboration, industry partnerships,
                and conversations around technology development.
              </p>
            </div>
            <button
              onClick={() => scrollTo('contact')}
              className="inline-flex items-center justify-center gap-2 rounded-lg transition-all duration-200"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 600,
                fontSize: '14px',
                padding: '10px 20px',
                background: '#ffffff',
                color: '#075E5A',
                border: 'none',
                cursor: 'pointer',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.background = '#E1F2EB';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.background = '#ffffff';
              }}
            >
              Get in Touch
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
