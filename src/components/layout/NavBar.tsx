'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

const NAV_ITEMS = [
  { id: 'hero',       label: 'Home'       },
  { id: 'about',      label: 'About'      },
  { id: 'product',    label: 'Products'   },
  { id: 'technology', label: 'Research'   },
  { id: 'milestones', label: 'Milestones' },
  { id: 'careers',    label: 'Careers'    },
  { id: 'contact',    label: 'Contact'    },
];

export default function NavBar() {
  const [scrolled, setScrolled]   = useState(false);
  const [activeId, setActiveId]   = useState('hero');
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const ids = NAV_ITEMS.map(n => n.id);
    const observer = new IntersectionObserver(
      entries =>
        entries.forEach(e => { if (e.isIntersecting) setActiveId(e.target.id); }),
      { threshold: 0.3 }
    );
    ids.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMobileOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  };

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-[500] flex items-center justify-between px-6 lg:px-10"
        style={{
          height: '64px',
          background: scrolled ? 'rgba(250,252,251,0.97)' : 'rgba(250,252,251,0.92)',
          backdropFilter: 'blur(16px)',
          borderBottom: `1px solid ${scrolled ? '#DDE8E5' : 'transparent'}`,
          transition: 'background 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease',
          boxShadow: scrolled ? '0 1px 12px rgba(16,47,61,0.06)' : 'none',
        }}
      >
        {/* Logo */}
        <button
          onClick={() => scrollTo('hero')}
          className="flex items-center gap-2 cursor-pointer shrink-0"
          style={{ background: 'none', border: 'none', padding: 0 }}
          aria-label="Enfibio Technologies — go to top"
        >
          <Image
            src="/logo.jpeg"
            alt="Enfibio Technologies"
            width={120}
            height={36}
            className="object-contain"
            style={{ height: '36px', width: 'auto' }}
            priority
          />
        </button>

        {/* Desktop nav items */}
        <div className="hidden md:flex items-center gap-0.5">
          {NAV_ITEMS.map(item => {
            const isActive = activeId === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="relative px-3.5 py-2 text-sm cursor-pointer rounded-md transition-colors duration-200"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: isActive ? 600 : 500,
                  fontSize: '14px',
                  color: isActive ? '#075E5A' : '#647781',
                  background: 'none',
                  border: 'none',
                  letterSpacing: '0.01em',
                }}
              >
                {item.label}
                {isActive && (
                  <span
                    className="absolute bottom-0.5 left-3.5 right-3.5 h-[2px] rounded-full"
                    style={{ background: '#075E5A' }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center">
          <button
            onClick={() => scrollTo('contact')}
            className="btn-primary text-sm"
            style={{ padding: '9px 20px', fontSize: '13px', borderRadius: '8px' }}
          >
            Partner With Us
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
              <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden p-2 rounded-lg cursor-pointer"
          style={{ background: 'none', border: 'none', color: '#102F3D' }}
          onClick={() => setMobileOpen(o => !o)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-[499]"
          style={{ top: '64px' }}
          onClick={() => setMobileOpen(false)}
        >
          <div
            className="absolute left-0 right-0 top-0 flex flex-col"
            style={{
              background: 'rgba(250,252,251,0.98)',
              backdropFilter: 'blur(20px)',
              borderBottom: '1px solid #DDE8E5',
              boxShadow: '0 8px 32px rgba(16,47,61,0.10)',
              padding: '8px 16px 20px',
            }}
            onClick={e => e.stopPropagation()}
          >
            {NAV_ITEMS.map(item => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '15px',
                  color: activeId === item.id ? '#075E5A' : '#102F3D',
                  background: activeId === item.id ? 'rgba(7,94,90,0.06)' : 'none',
                  border: 'none',
                  cursor: 'pointer',
                  fontWeight: activeId === item.id ? 600 : 400,
                }}
              >
                {item.label}
              </button>
            ))}
            <div style={{ margin: '8px 16px 0' }}>
              <button
                onClick={() => scrollTo('contact')}
                className="btn-primary w-full justify-center"
                style={{ fontSize: '14px' }}
              >
                Partner With Us →
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
