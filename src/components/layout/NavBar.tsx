'use client';

import { useState, useEffect, useRef } from 'react';

const NAV_ITEMS = [
  { id: 'hero',         label: 'Overview'  },
  { id: 'swarm',        label: 'Swarm'     },
  { id: 'projects',     label: 'Projects'  },
  { id: 'founders',     label: 'Team'      },
  { id: 'architecture', label: 'Stack'     },
  { id: 'timeline',     label: 'Timeline'  },
];

export default function NavBar() {
  const [activeId, setActiveId] = useState('hero');
  const [scrolled, setScrolled] = useState(false);
  const [uptime, setUptime] = useState('00:00:00');
  const startRef = useRef(Date.now());

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      const s = Math.floor((Date.now() - startRef.current) / 1000);
      const h = String(Math.floor(s / 3600)).padStart(2, '0');
      const m = String(Math.floor((s % 3600) / 60)).padStart(2, '0');
      const sec = String(s % 60).padStart(2, '0');
      setUptime(`${h}:${m}:${sec}`);
    }, 1000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const ids = NAV_ITEMS.map(n => n.id);
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) setActiveId(e.target.id); }),
      { threshold: 0.35 }
    );
    ids.forEach(id => { const el = document.getElementById(id); if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-[500] flex items-center justify-between px-6"
      style={{
        height: '60px',
        background: scrolled ? 'rgba(8,11,15,0.96)' : 'rgba(8,11,15,0.80)',
        backdropFilter: 'blur(16px)',
        borderBottom: `1px solid ${scrolled ? 'rgba(255,255,255,0.08)' : 'transparent'}`,
        transition: 'background 0.3s ease, border-color 0.3s ease',
      }}
    >
      {/* Logo */}
      <button
        onClick={() => scrollTo('hero')}
        className="flex items-center gap-3 cursor-pointer"
        style={{ background: 'none', border: 'none', padding: 0 }}
      >
        <span
          style={{
            fontFamily: 'Syne, sans-serif',
            fontWeight: 800,
            fontSize: '16px',
            letterSpacing: '-0.02em',
            color: '#fff',
          }}
        >
          ENFIBIO
        </span>
        <span
          style={{
            height: '16px',
            width: '1px',
            background: 'rgba(255,255,255,0.2)',
            display: 'block',
          }}
        />
        <span
          style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '10px',
            color: 'var(--text-muted)',
            letterSpacing: '0.06em',
          }}
        >
          TECHNOLOGIES
        </span>
      </button>

      {/* Nav items */}
      <div className="flex items-center gap-1">
        {NAV_ITEMS.map(item => {
          const isActive = activeId === item.id;
          return (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="relative px-3 py-1.5 text-xs cursor-pointer transition-colors duration-200 rounded"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 500,
                fontSize: '13px',
                color: isActive ? '#fff' : 'var(--text-muted)',
                background: 'none',
                border: 'none',
                letterSpacing: '0.01em',
              }}
            >
              {item.label}
              {isActive && (
                <span
                  className="absolute bottom-0 left-3 right-3 h-px"
                  style={{ background: 'var(--accent)', borderRadius: '1px' }}
                />
              )}
            </button>
          );
        })}
      </div>

      {/* Right — status */}
      <div className="hidden lg:flex items-center gap-3">
        <span
          className="w-1.5 h-1.5 rounded-full pulse-dot"
          style={{ background: 'var(--green)', boxShadow: '0 0 6px var(--green)' }}
        />
        <span
          style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '10px',
            color: 'var(--text-muted)',
            letterSpacing: '0.06em',
          }}
        >
          {uptime}
        </span>
      </div>
    </nav>
  );
}
