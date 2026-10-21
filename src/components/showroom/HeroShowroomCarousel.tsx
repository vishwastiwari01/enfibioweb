'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  ChevronLeft, 
  ChevronRight, 
  Play, 
  ArrowRight, 
  Box, 
  Radio, 
  Snowflake, 
  Thermometer, 
  ShieldCheck, 
  Cpu, 
  Leaf, 
  Zap, 
  Layers 
} from 'lucide-react';
import { PROJECTS } from '@/lib/data/projects';

export default function HeroShowroomCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const thandai = PROJECTS.find(p => p.slug === 'thandai') || PROJECTS[0];
  const v2x = PROJECTS.find(p => p.slug === 'enfibio-v2x') || PROJECTS[1];

  const slides = [
    {
      id: 'thandai',
      number: '01 / 02',
      tag: 'FLAGSHIP PROJECT',
      tagColor: 'bg-emerald-50 text-teal-800 border-teal-200',
      icon: Snowflake,
      title: 'THAND.AI',
      subtitle: 'Smart Portable Freezer',
      description: 'AI-enabled, thermoelectric cooling for a stronger, resilient cold chain.',
      image: '/thandai.png',
      alt: 'THAND.AI Smart Portable Freezer 3D Assembly',
      slug: thandai.slug,
      features: [
        { icon: Snowflake, label: 'Thermoelectric Cooling' },
        { icon: Thermometer, label: 'AI Temperature Control' },
        { icon: ShieldCheck, label: 'Portable & Rugged Design' },
        { icon: Leaf, label: 'Clean & Sustainable Operation' }
      ]
    },
    {
      id: 'v2x',
      number: '02 / 02',
      tag: 'FEATURED PROJECT',
      tagColor: 'bg-cyan-50 text-cyan-800 border-cyan-200',
      icon: Radio,
      title: 'Enfibio V2X',
      subtitle: 'Cooperative Road-Safety & Mobility',
      description: 'Vehicle-to-vehicle communication and AI systems for safer, smarter roads.',
      image: '/assets/autonomoustruck.png',
      alt: 'Enfibio V2X Autonomous Connected Fleet',
      slug: v2x.slug,
      features: [
        { icon: Radio, label: 'DSRC & C-V2X Mesh' },
        { icon: Zap, label: 'Sub-10ms Latency' },
        { icon: Layers, label: 'Non-Line-Of-Sight Warning' },
        { icon: Cpu, label: 'Decentralized Edge Inference' }
      ]
    }
  ];

  const totalSlides = slides.length;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Touch Swipe handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const currentTouch = e.targetTouches[0].clientX;
    const diff = touchStart - currentTouch;

    if (diff > 50) {
      nextSlide();
      setTouchStart(null);
    } else if (diff < -50) {
      prevSlide();
      setTouchStart(null);
    }
  };

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const active = slides[currentSlide];

  return (
    <section id="hero" className="relative w-full pt-8 pb-16 md:py-16 overflow-hidden bg-[#FAFCFB]">
      {/* Background Engineering Accent Lines */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: `
            radial-gradient(circle at 10% 20%, rgba(12, 119, 112, 0.04) 0%, transparent 40%),
            radial-gradient(circle at 90% 70%, rgba(112, 197, 107, 0.05) 0%, transparent 45%)
          `
        }}
      />

      <div className="container mx-auto w-[min(1280px,calc(100%-40px))]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Hero Column: Editorial Typography */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            
            <div className="inline-flex items-center gap-2 mb-4 text-[11px] font-extrabold tracking-[0.2em] uppercase text-teal-800">
              <span className="w-2 h-2 rounded-full bg-teal-700 animate-pulse" />
              Engineering a Better Tomorrow
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[4.2rem] font-bold tracking-tight text-ink leading-[1.05] mb-5">
              Real<br />
              <span className="text-teal-900">Technology.</span><br />
              Real Impact.
            </h1>

            <p className="text-base sm:text-lg text-muted leading-relaxed mb-8 max-w-lg">
              Innovative engineering solutions for food security, safer mobility, and a more resilient world.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 mb-10">
              <button
                onClick={() => scrollTo('catalog')}
                className="btn btn-primary"
              >
                Explore Projects <ArrowRight size={16} />
              </button>

              <button
                onClick={() => setIsVideoModalOpen(true)}
                className="btn btn-secondary"
              >
                <Play size={14} className="fill-teal-900 text-teal-900" /> Watch Video
              </button>
            </div>

            {/* Metrics Ticker */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-line/80 max-w-md">
              <div>
                <strong className="block text-2xl sm:text-3xl font-bold tracking-tight text-ink">
                  2+
                </strong>
                <span className="text-xs text-muted font-medium">Flagship Projects</span>
              </div>
              <div className="border-l border-line/80 pl-4">
                <strong className="block text-2xl sm:text-3xl font-bold tracking-tight text-ink">
                  3
                </strong>
                <span className="text-xs text-muted font-medium">Focus Areas</span>
              </div>
              <div className="border-l border-line/80 pl-4">
                <strong className="block text-2xl sm:text-3xl font-bold tracking-tight text-ink">
                  1
                </strong>
                <span className="text-xs text-muted font-medium">Core Mission</span>
              </div>
            </div>

          </div>

          {/* Right Hero Column: Large Horizontally Swipeable Showroom Card */}
          <div 
            className="lg:col-span-7 relative"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
          >
            {/* Carousel Navigation Arrow Controls */}
            <button
              onClick={prevSlide}
              aria-label="Previous Project"
              className="absolute -left-3 sm:-left-5 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-white/95 border border-line shadow-md text-ink flex items-center justify-center hover:bg-surface hover:scale-105 active:scale-95 transition-all"
            >
              <ChevronLeft size={20} />
            </button>

            <button
              onClick={nextSlide}
              aria-label="Next Project"
              className="absolute -right-3 sm:-right-5 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-white/95 border border-line shadow-md text-ink flex items-center justify-center hover:bg-surface hover:scale-105 active:scale-95 transition-all"
            >
              <ChevronRight size={20} />
            </button>

            {/* The Main Showcase Card Container */}
            <div className="relative rounded-[28px] sm:rounded-[36px] bg-white border border-line/80 shadow-[0_22px_65px_rgba(8,54,57,0.08)] overflow-hidden transition-all duration-500">
              
              {/* Card Header Row */}
              <div className="p-6 sm:p-8 pb-4 flex items-center justify-between border-b border-line/50">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono font-bold text-muted tracking-widest">
                    {active.number}
                  </span>
                  <span className={`text-[10px] font-black tracking-wider uppercase px-2.5 py-1 rounded-full border ${active.tagColor}`}>
                    {active.tag}
                  </span>
                </div>

                <div className="flex items-center gap-1.5">
                  {slides.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentSlide(idx)}
                      aria-label={`Go to slide ${idx + 1}`}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        idx === currentSlide ? 'w-6 bg-teal-900' : 'w-2 bg-line hover:bg-muted'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Card Body: Info + Large Visual Area */}
              <div className="p-6 sm:p-8 pt-5 grid grid-cols-1 md:grid-cols-12 gap-6 items-center min-h-[380px] sm:min-h-[420px]">
                
                {/* Left Meta Description */}
                <div className="md:col-span-6 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-2 text-teal-800">
                    <active.icon size={22} className="shrink-0" />
                    <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-ink">
                      {active.title}
                    </h2>
                  </div>

                  <p className="text-sm font-semibold text-teal-900/80 mb-3">
                    {active.subtitle}
                  </p>

                  <p className="text-xs sm:text-sm text-muted leading-relaxed mb-6">
                    {active.description}
                  </p>

                  <div className="flex flex-wrap items-center gap-3">
                    <Link
                      href={`/projects/${active.slug}`}
                      className="btn btn-primary btn-small text-xs py-2 px-4 shadow-sm"
                    >
                      Explore Project <ArrowRight size={14} />
                    </Link>

                    <Link
                      href={`/projects/${active.slug}#interactive`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-800 hover:text-teal-600 transition-colors px-2 py-2"
                    >
                      <Box size={14} /> View 3D Anatomy
                    </Link>
                  </div>
                </div>

                {/* Right Interactive/Image Showcase Stage */}
                <div className="md:col-span-6 relative flex items-center justify-center p-2">
                  <div className="relative w-full aspect-square max-w-[320px] rounded-2xl bg-gradient-to-tr from-[#edf5f3] to-white border border-line/60 flex items-center justify-center p-4 overflow-hidden group">
                    
                    {/* Subtle Radar/Orbit Pulse */}
                    <div className="absolute inset-4 rounded-full border border-teal-700/10 animate-ping opacity-20 pointer-events-none" />

                    <Image
                      src={active.image}
                      alt={active.alt}
                      width={380}
                      height={380}
                      priority
                      className="w-full h-full object-contain drop-shadow-md transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* Interactive 3D Badge Overlay */}
                    <Link
                      href={`/projects/${active.slug}#interactive`}
                      className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-md border border-line rounded-lg px-2.5 py-1 text-[11px] font-bold text-teal-900 shadow-sm flex items-center gap-1.5 hover:bg-teal-900 hover:text-white transition-all"
                    >
                      <Box size={12} />
                      3D Interactive
                    </Link>
                  </div>
                </div>

              </div>

              {/* Card Footer: Key Verified Features Strip */}
              <div className="bg-[#f7faf9] border-t border-line/60 px-6 py-4 grid grid-cols-2 sm:grid-cols-4 gap-3 text-center sm:text-left">
                {active.features.map((feat, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-white border border-line flex items-center justify-center text-teal-800 shrink-0">
                      <feat.icon size={13} />
                    </div>
                    <span className="text-[11px] font-semibold text-ink/80 leading-tight">
                      {feat.label}
                    </span>
                  </div>
                ))}
              </div>

            </div>

          </div>

        </div>
      </div>

      {/* Video Modal */}
      {isVideoModalOpen && (
        <div 
          className="fixed inset-0 z-[200] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in"
          onClick={() => setIsVideoModalOpen(false)}
        >
          <div 
            className="relative w-full max-w-3xl bg-white rounded-2xl overflow-hidden shadow-2xl border border-line"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-line bg-surface">
              <span className="text-sm font-bold text-ink">Enfibio Technologies • Engineering Preview</span>
              <button 
                onClick={() => setIsVideoModalOpen(false)}
                className="w-7 h-7 rounded-full bg-white border border-line flex items-center justify-center text-xs font-bold hover:bg-line text-ink"
              >
                ✕
              </button>
            </div>
            <div className="aspect-video w-full bg-black">
              <video 
                src="/thandaiexplode.mp4" 
                controls 
                autoPlay 
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
