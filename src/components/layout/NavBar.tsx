'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Search, ArrowRight, Menu, X } from 'lucide-react';
import SearchModal from '@/components/showroom/SearchModal';

const NAV_LINKS = [
  { href: '/#flagships', label: 'Flagships' },
  { href: '/#hardware', label: 'Hardware' },
  { href: '/#capabilities', label: 'Capabilities' },
  { href: '/#milestones', label: 'Milestones' },
  { href: '/#founders', label: 'Founders' },
  { href: '/#contact', label: 'Contact' },
];

export default function NavBar() {
  const [activeSection, setActiveSection] = useState('flagships');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const pathname = usePathname();

  const isHome = pathname === '/';

  useEffect(() => {
    if (!isHome) return;

    const sections = ['hero', 'flagships', 'hardware', 'capabilities', 'milestones', 'founders', 'contact'];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setActiveSection(e.target.id);
          }
        });
      },
      { threshold: 0.15 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [isHome]);

  const scrollTo = (id: string) => {
    if (isHome) {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = `/#${id}`;
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header className="sticky top-0 z-[100] w-full bg-white/95 backdrop-blur-md border-b border-line/80">
        <div className="container mx-auto w-[min(1280px,calc(100%-40px))] h-[74px] flex items-center justify-between gap-6">
          
          {/* Brand Logo */}
          <Link
            href="/"
            className="flex items-center gap-3.5 group focus:outline-none"
          >
            <div className="relative w-9 h-9 rounded-xl bg-teal-950 flex items-center justify-center p-1.5 shadow-sm group-hover:scale-105 transition-transform">
              <img
                src="/logo.jpeg"
                alt="Enfibio Logo"
                className="w-full h-full object-contain rounded-lg"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-black tracking-tight text-ink uppercase leading-none">
                ENFIBIO
              </span>
              <span className="text-[9px] font-mono tracking-[0.25em] text-teal-800 leading-none mt-1">
                TECHNOLOGIES
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
            {NAV_LINKS.map((link) => {
              const targetId = link.href.replace('/#', '');
              const isActive = isHome && activeSection === targetId;

              return (
                <button
                  key={link.label}
                  onClick={() => scrollTo(targetId)}
                  className={`text-sm font-semibold relative py-1 transition-colors ${
                    isActive ? 'text-ink' : 'text-muted hover:text-ink'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-teal-900" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action Icons & Primary CTA */}
          <div className="flex items-center gap-3 sm:gap-4">
            
            {/* Search Trigger Button */}
            <button
              onClick={() => setSearchOpen(true)}
              className="w-9 h-9 rounded-full border border-line bg-surface hover:bg-line/70 flex items-center justify-center text-ink transition-colors cursor-pointer"
              title="Search Projects (Ctrl+K)"
              aria-label="Open Search"
            >
              <Search size={16} />
            </button>

            {/* Primary Action Button */}
            <button
              onClick={() => scrollTo('catalog')}
              className="hidden sm:inline-flex btn btn-primary btn-small text-xs py-2 px-4 shadow-sm"
            >
              Explore Projects <ArrowRight size={14} />
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden w-9 h-9 rounded-xl border border-line bg-white flex items-center justify-center text-ink"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            >
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>

          </div>

        </div>

        {/* Collapsible Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden absolute top-[74px] left-0 right-0 bg-white border-b border-line p-6 shadow-xl flex flex-col gap-4 animate-in slide-in-from-top-2">
            {NAV_LINKS.map((link) => {
              const targetId = link.href.replace('/#', '');
              return (
                <button
                  key={link.label}
                  onClick={() => scrollTo(targetId)}
                  className="text-left py-2 text-base font-bold text-ink border-b border-line/40 flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <ArrowRight size={14} className="text-muted" />
                </button>
              );
            })}
            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setSearchOpen(true);
                }}
                className="btn btn-secondary w-full justify-center text-xs py-2.5"
              >
                <Search size={14} /> Search Projects
              </button>
              <button
                onClick={() => scrollTo('catalog')}
                className="btn btn-primary w-full justify-center text-xs py-2.5"
              >
                Explore Projects →
              </button>
            </div>
          </nav>
        )}
      </header>

      {/* Global Search Modal */}
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
