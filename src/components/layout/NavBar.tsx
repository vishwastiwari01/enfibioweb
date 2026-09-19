'use client';

import { useState, useEffect } from 'react';

const NAV_ITEMS = [
  { id: 'hero',       label: 'Home'       },
  { id: 'about',      label: 'About'      },
  { id: 'products',   label: 'Products'   },
  { id: 'research',   label: 'Research'   },
  { id: 'milestones', label: 'Milestones' },
  { id: 'contact',    label: 'Contact'    },
];

export default function NavBar() {
  const [activeId, setActiveId] = useState('hero');
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const ids = NAV_ITEMS.map(n => n.id);
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) setActiveId(e.target.id);
        });
      },
      { threshold: 0.1 }
    );
    ids.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  };

  return (
    <header className="sticky top-0 z-[100] bg-white/92 backdrop-blur-[18px] border-b border-[#dfe9e8]/85">
      <div className="container mx-auto w-[min(1180px,calc(100%-40px))] min-h-[76px] flex items-center justify-between gap-[25px]">
        
        {/* Brand */}
        <button 
          onClick={() => scrollTo('hero')} 
          className="inline-flex items-center gap-2.5 font-black tracking-tight text-teal-950"
        >
          <span className="w-[35px] h-[35px] border-2 border-teal-900 rounded-[12px_12px_12px_3px] grid place-items-center text-[1.1rem] -rotate-12">
            E
          </span>
          <span className="leading-none text-left">
            <strong className="block text-[1.05rem]">enfibio</strong>
            <small className="block text-[0.43rem] tracking-[0.24em] mt-1 text-muted">TECHNOLOGIES</small>
          </span>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-[26px]" aria-label="Primary navigation">
          {NAV_ITEMS.map(item => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`text-[0.83rem] font-bold relative transition-colors ${
                activeId === item.id ? 'text-[#456166]' : 'text-[#456166]'
              } after:content-[''] after:absolute after:left-0 after:right-0 after:-bottom-2 after:h-0.5 after:bg-teal-700 after:origin-left after:transition-transform after:duration-250 ${
                activeId === item.id ? 'after:scale-x-100' : 'after:scale-x-0 hover:after:scale-x-100'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* CTA & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <button 
            onClick={() => scrollTo('contact')}
            className="hidden md:inline-flex btn btn-primary btn-small min-h-[40px] px-[15px] text-[0.8rem]"
          >
            Partner With Us →
          </button>
          
          <button 
            className="md:hidden w-[42px] h-[42px] border border-line bg-white rounded-xl text-lg flex items-center justify-center cursor-pointer"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close navigation' : 'Open navigation'}
          >
            {mobileOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      {mobileOpen && (
        <nav className="md:hidden absolute left-3 right-3 top-[70px] p-[22px] bg-white border border-line rounded-[18px] shadow-[0_20px_60px_rgba(8,54,57,.10)] flex flex-col items-stretch">
          {NAV_ITEMS.map(item => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="text-left py-2 text-[0.83rem] font-bold text-[#456166]"
            >
              {item.label}
            </button>
          ))}
        </nav>
      )}
    </header>
  );
}
