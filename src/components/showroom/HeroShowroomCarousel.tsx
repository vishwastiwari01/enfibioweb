'use client';

import React, { useState, useEffect } from 'react';
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
  Layers,
  Sparkles
} from 'lucide-react';
import { PROJECTS } from '@/lib/data/projects';

export default function HeroShowroomCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

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
      subtitle: 'Cooperative Road-Safety and Intelligent Mobility',
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

  return (
    <section id="hero" className="relative w-full pt-6 pb-14 md:py-16 overflow-hidden bg-[#FAFCFB]">
      {/* Background Engineering Subtle Accents */}
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Hero Column: Editorial Typography */}
          <div className="lg:col-span-5 flex flex-col justify-center z-10">
            
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

          {/* Right Hero Column: Horizontally Sliding Carousel with Peek Effect */}
          <div 
            className="lg:col-span-7 relative"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
          >
            {/* Carousel Navigation Arrow Controls */}
            <div className="absolute -top-12 right-0 hidden sm:flex items-center gap-2 z-30">
              <button
                onClick={prevSlide}
                aria-label="Previous Project"
                className="w-9 h-9 rounded-full bg-white border border-line shadow-xs text-ink flex items-center justify-center hover:bg-surface hover:border-teal-700/40 transition-all"
              >
                <ChevronLeft size={16} />
              </button>

              <button
                onClick={nextSlide}
                aria-label="Next Project"
                className="w-9 h-9 rounded-full bg-white border border-line shadow-xs text-ink flex items-center justify-center hover:bg-surface hover:border-teal-700/40 transition-all"
              >
                <ChevronRight size={16} />
              </button>
            </div>

            {/* Sliding Track Wrapper with Peek Overflow */}
            <div className="relative overflow-visible lg:-mr-20 xl:-mr-32">
              <div 
                className="flex gap-6 transition-transform duration-500 ease-out"
                style={{
                  transform: `translateX(-${currentSlide * 92}%)`
                }}
              >
                {slides.map((slide, idx) => {
                  const isActive = idx === currentSlide;

                  return (
                    <div
                      key={slide.id}
                      className={`w-full lg:w-[90%] shrink-0 rounded-[28px] sm:rounded-[36px] bg-white border border-line/80 shadow-[0_22px_65px_rgba(8,54,57,0.08)] overflow-hidden transition-all duration-300 ${
                        isActive ? 'opacity-100 scale-100 ring-1 ring-teal-900/10' : 'opacity-65 hover:opacity-90 cursor-pointer scale-[0.98]'
                      }`}
                      onClick={() => !isActive && setCurrentSlide(idx)}
                    >
                      {/* Card Header Row */}
                      <div className="p-6 sm:p-7 pb-4 flex items-center justify-between border-b border-line/50">
                        <div className="flex items-center gap-3">
                          <span className="text-xs font-mono font-bold text-muted tracking-widest">
                            {slide.number}
                          </span>
                          <span className={`text-[10px] font-black tracking-wider uppercase px-2.5 py-1 rounded-full border ${slide.tagColor}`}>
                            {slide.tag}
                          </span>
                        </div>

                        <div className="flex items-center gap-1.5">
                          {slides.map((_, i) => (
                            <button
                              key={i}
                              onClick={(e) => {
                                e.stopPropagation();
                                setCurrentSlide(i);
                              }}
                              aria-label={`Go to slide ${i + 1}`}
                              className={`h-2 rounded-full transition-all duration-300 ${
                                i === currentSlide ? 'w-6 bg-teal-900' : 'w-2 bg-line hover:bg-muted'
                              }`}
                            />
                          ))}
                        </div>
                      </div>

                      {/* Card Body: Info + Visual */}
                      <div className="p-6 sm:p-7 pt-5 grid grid-cols-1 md:grid-cols-12 gap-6 items-center min-h-[360px] sm:min-h-[390px]">
                        
                        {/* Meta Info */}
                        <div className="md:col-span-6 flex flex-col justify-center">
                          <div className="flex items-center gap-2 mb-2 text-teal-800">
                            <slide.icon size={22} className="shrink-0" />
                            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-ink">
                              {slide.title}
                            </h2>
                          </div>

                          <p className="text-xs sm:text-sm font-semibold text-teal-900/80 mb-3">
                            {slide.subtitle}
                          </p>

                          <p className="text-xs sm:text-sm text-muted leading-relaxed mb-6">
                            {slide.description}
                          </p>

                          <div className="flex flex-wrap items-center gap-3">
                            <Link
                              href={`/projects/${slide.slug}`}
                              className="btn btn-primary btn-small text-xs py-2 px-4 shadow-sm"
                            >
                              Explore Project <ArrowRight size={14} />
                            </Link>

                            <Link
                              href={`/projects/${slide.slug}#interactive`}
                              className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-800 hover:text-teal-600 transition-colors px-2 py-2"
                            >
                              <Box size={14} /> View 3D Anatomy
                            </Link>
                          </div>
                        </div>

                        {/* Visual Stage */}
                        <div className="md:col-span-6 relative flex items-center justify-center p-2">
                          <div className="relative w-full aspect-square max-w-[310px] rounded-2xl bg-gradient-to-tr from-[#edf5f3] to-white border border-line/60 flex items-center justify-center p-4 overflow-hidden group">
                            
                            <div className="absolute inset-4 rounded-full border border-teal-700/10 animate-ping opacity-20 pointer-events-none" />

                            <Image
                              src={slide.image}
                              alt={slide.alt}
                              width={360}
                              height={360}
                              priority={idx === 0}
                              className="w-full h-full object-contain drop-shadow-md transition-transform duration-500 group-hover:scale-105"
                            />

                            <Link
                              href={`/projects/${slide.slug}#interactive`}
                              className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-md border border-line rounded-lg px-2.5 py-1 text-[11px] font-bold text-teal-900 shadow-sm flex items-center gap-1.5 hover:bg-teal-900 hover:text-white transition-all"
                            >
                              <Box size={12} />
                              3D Interactive
                            </Link>
                          </div>
                        </div>

                      </div>

                      {/* Card Footer: Verified Features */}
                      <div className="bg-[#f7faf9] border-t border-line/60 px-6 py-4 grid grid-cols-2 sm:grid-cols-4 gap-3 text-center sm:text-left">
                        {slide.features.map((feat, i) => (
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
                  );
                })}
              </div>
            </div>

            {/* Mobile Navigation Arrows (visible under the card on mobile) */}
            <div className="flex sm:hidden items-center justify-center gap-4 mt-4">
              <button
                onClick={prevSlide}
                aria-label="Previous Slide"
                className="w-9 h-9 rounded-full bg-white border border-line flex items-center justify-center text-ink shadow-xs"
              >
                <ChevronLeft size={16} />
              </button>
              <span className="text-xs font-mono font-bold text-muted">
                {currentSlide + 1} / {totalSlides}
              </span>
              <button
                onClick={nextSlide}
                aria-label="Next Slide"
                className="w-9 h-9 rounded-full bg-white border border-line flex items-center justify-center text-ink shadow-xs"
              >
                <ChevronRight size={16} />
              </button>
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
