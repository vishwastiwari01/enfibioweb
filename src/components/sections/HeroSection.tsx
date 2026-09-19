'use client';

import Image from 'next/image';
import { Lightbulb, Wrench, Handshake, Globe, Play, ArrowRight, Check } from 'lucide-react';

const PILLARS = [
  {
    icon: Lightbulb,
    title: 'Innovate',
    desc: 'AT THE INTERSECTION OF SCIENCE & SOCIETY',
  },
  {
    icon: Wrench,
    title: 'Build',
    desc: 'TANGIBLE, REAL-WORLD PRODUCTS',
  },
  {
    icon: Handshake,
    title: 'Collaborate',
    desc: 'WITH INDUSTRY, ACADEMIA & GOVERNMENT',
  },
  {
    icon: Globe,
    title: 'Create Impact',
    desc: 'FOR BHARAT AND BEYOND',
  },
];

const QUICK_FEATURES = [
  'Efficient Cooling',
  'Portable Design',
  'Thermal Insulation',
  'Low Power Operation',
  'Multiple Applications',
];

export default function HeroSection() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="hero"
      className="relative overflow-hidden"
      style={{
        paddingTop: '64px',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Background: banner image with soft natural light gradient */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/banner.jpeg"
          alt="Enfibio background"
          fill
          className="object-cover"
          style={{ objectPosition: 'center' }}
          priority
        />
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, rgba(250,252,251,0.94) 0%, rgba(240,246,244,0.88) 45%, rgba(250,252,251,0.65) 100%)',
          }}
        />
      </div>

      {/* Main hero content */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="max-w-6xl mx-auto w-full px-6 lg:px-10 py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

            {/* Left column: 7 Cols */}
            <div className="lg:col-span-7 flex flex-col">
              {/* Eyebrow label */}
              <div
                className="inline-flex items-center gap-2 mb-5 self-start px-3.5 py-1.5 rounded-full"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '11px',
                  fontWeight: 700,
                  letterSpacing: '0.12em',
                  color: '#075E5A',
                  background: 'rgba(7,94,90,0.08)',
                  border: '1px solid rgba(7,94,90,0.18)',
                  textTransform: 'uppercase',
                }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full pulse-dot"
                  style={{ background: '#075E5A' }}
                />
                Engineering a Resilient Tomorrow
              </div>

              {/* Main Headline */}
              <h1
                className="mb-5 leading-[1.06]"
                style={{
                  fontFamily: 'Syne, sans-serif',
                  fontWeight: 800,
                  fontSize: 'clamp(2.6rem, 5.2vw, 4.4rem)',
                  color: '#102F3D',
                  letterSpacing: '-0.03em',
                }}
              >
                Real Problems.
                <br />
                Practical <span style={{ color: '#075E5A' }}>Solutions.</span>
              </h1>

              {/* Description */}
              <p
                className="mb-8 leading-relaxed"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '16px',
                  color: '#647781',
                  maxWidth: '520px',
                  lineHeight: 1.7,
                }}
              >
                Enfibio Technologies develops intelligent hardware, AI systems and
                emerging technologies to build a more resilient, self-reliant and sustainable future.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-3 mb-10">
                <button
                  onClick={() => scrollTo('product')}
                  className="btn-primary"
                  style={{ padding: '12px 24px', fontSize: '14px' }}
                >
                  Explore Our Products
                  <ArrowRight size={15} />
                </button>
                <button
                  onClick={() => scrollTo('about')}
                  className="btn-ghost"
                  style={{ padding: '12px 22px', fontSize: '14px' }}
                >
                  <Play size={14} className="fill-current text-[#075E5A]" />
                  Watch Our Story
                </button>
              </div>

              {/* 4 Pillars Under CTA */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-[#DDE8E5]">
                {PILLARS.map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="flex flex-col gap-1.5">
                    <div className="flex items-center gap-2">
                      <div
                        className="flex items-center justify-center rounded-lg"
                        style={{ width: 28, height: 28, background: '#F0F6F4', color: '#075E5A' }}
                      >
                        <Icon size={15} />
                      </div>
                      <span
                        style={{
                          fontFamily: 'Syne, sans-serif',
                          fontWeight: 700,
                          fontSize: '13px',
                          color: '#102F3D',
                        }}
                      >
                        {title}
                      </span>
                    </div>
                    <p
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '9.5px',
                        fontWeight: 600,
                        color: '#9AAFBA',
                        lineHeight: 1.35,
                        letterSpacing: '0.04em',
                      }}
                    >
                      {desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right column: 5 Cols — Prototype with Floating Feature Card */}
            <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
              {/* Product Photograph Container */}
              <div
                className="relative rounded-2xl overflow-hidden w-full max-w-[460px]"
                style={{
                  aspectRatio: '4/3',
                  boxShadow: '0 24px 60px rgba(16,47,61,0.14), 0 4px 16px rgba(16,47,61,0.06)',
                  border: '1px solid rgba(7,94,90,0.15)',
                  background: '#ffffff',
                }}
              >
                <Image
                  src="/thandai.png"
                  alt="THAND.AI Smart Portable Freezer Prototype"
                  fill
                  className="object-cover"
                  priority
                />

                {/* Italic handwriting caption */}
                <div
                  className="absolute top-3 left-4 pointer-events-none"
                  style={{
                    fontFamily: 'Syne, sans-serif',
                    fontStyle: 'italic',
                    fontSize: '13px',
                    color: '#ffffff',
                    textShadow: '0 1px 4px rgba(0,0,0,0.5)',
                    fontWeight: 600,
                  }}
                >
                  Cooler Harvests.
                  <br />
                  Brighter Futures.
                </div>
              </div>

              {/* Floating THAND.AI Card overlaying top right */}
              <div
                className="hidden sm:flex flex-col p-4 rounded-xl z-20 absolute -top-4 -right-2 md:right-2"
                style={{
                  width: '210px',
                  background: 'rgba(255,255,255,0.96)',
                  backdropFilter: 'blur(16px)',
                  border: '1px solid #DDE8E5',
                  boxShadow: '0 12px 32px rgba(16,47,61,0.12)',
                }}
              >
                <div
                  style={{
                    fontFamily: 'Syne, sans-serif',
                    fontWeight: 800,
                    fontSize: '15px',
                    color: '#075E5A',
                    lineHeight: 1.1,
                  }}
                >
                  THAND.AI
                </div>
                <div
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '11px',
                    color: '#647781',
                    marginBottom: '8px',
                  }}
                >
                  Smart Portable Freezer
                </div>

                <div
                  className="inline-flex items-center gap-1.5 self-start px-2 py-0.5 rounded-full mb-3"
                  style={{
                    background: '#E1F2EB',
                    fontSize: '9.5px',
                    fontWeight: 600,
                    color: '#075E5A',
                  }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#075E5A]" />
                  Prototype Stage
                </div>

                <div className="flex flex-col gap-1.5 mb-3">
                  {QUICK_FEATURES.map(f => (
                    <div key={f} className="flex items-center gap-1.5 text-[10.5px] text-[#102F3D]">
                      <Check size={11} color="#075E5A" className="shrink-0" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => scrollTo('product')}
                  className="w-full py-1.5 rounded-lg text-center font-semibold text-xs transition-all duration-200"
                  style={{
                    background: '#075E5A',
                    color: '#ffffff',
                    border: 'none',
                    cursor: 'pointer',
                  }}
                >
                  Learn More →
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
