'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import {
  Snowflake,
  Box,
  Layers,
  Zap,
  Settings,
  Leaf,
  Play,
  ArrowRight,
  Thermometer,
  Briefcase,
  Sprout,
  Mountain,
  Pill,
  Truck,
  Sparkles,
  CheckCircle2,
} from 'lucide-react';

const BottleIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 2h6v3H9z" />
    <path d="M10 5v2a3 3 0 0 1-.88 2.12L8 10.24A4 4 0 0 0 7 13v7a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-7a4 4 0 0 0-1-2.76l-1.12-1.12A3 3 0 0 1 14 7V5" />
  </svg>
);

const CanisterIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <ellipse cx="12" cy="5" rx="8" ry="3" />
    <path d="M4 5v14c0 1.66 3.58 3 8 3s8-1.34 8-3V5" />
    <path d="M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3" />
  </svg>
);

const FEATURES = [
  {
    icon: Snowflake,
    title: 'Efficient Cooling',
    desc: 'Achieved 3°C in prototype with optimized thermal design.',
  },
  {
    icon: Box,
    title: 'Portable Design',
    desc: 'Compact, lightweight and suitable for field use.',
  },
  {
    icon: Layers,
    title: 'Thermal Insulation',
    desc: 'High-quality insulation for better temperature retention.',
  },
  {
    icon: Zap,
    title: 'Power Optimization',
    desc: 'Designed for low-power operation and battery compatibility.',
  },
  {
    icon: Settings,
    title: 'Scalable Prototype',
    desc: '5L prototype with scope for higher capacities.',
  },
  {
    icon: Leaf,
    title: 'Multiple Applications',
    desc: 'Agriculture, dairy, medicines and rural supply chains.',
  },
];

const SECTOR_PILLS = [
  { icon: Leaf,       label: 'Agriculture' },
  { icon: Pill,       label: 'Medicines'   },
  { icon: BottleIcon, label: 'Dairy'       },
  { icon: Truck,      label: 'Rural Logistics' },
];

export default function HangarSection() {
  const [viewMode, setViewMode] = useState<'prototype' | 'commercial'>('prototype');
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.05 }
    );
    el.querySelectorAll('.fade-in').forEach(item => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="product"
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #FFFFFF 0%, #F5FAF8 50%, #FFFFFF 100%)',
        padding: '90px 0 70px',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* 3-Column Split: Left Details | Center Visual | Right Features */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center mb-16">

          {/* LEFT COLUMN: 4 Cols */}
          <div className="lg:col-span-4 flex flex-col fade-in">
            {/* Featured product badge */}
            <div className="inline-flex items-center gap-2 self-start px-3.5 py-1.5 rounded-full mb-5"
              style={{
                background: '#E1F2EB',
                border: '1px solid rgba(7,94,90,0.15)',
              }}
            >
              <span className="w-2 h-2 rounded-full" style={{ background: '#075E5A' }} />
              <span
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '11px',
                  fontWeight: 700,
                  color: '#075E5A',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                }}
              >
                Featured Product
              </span>
            </div>

            {/* Giant Title */}
            <h2
              className="leading-none mb-2"
              style={{
                fontFamily: 'Syne, sans-serif',
                fontWeight: 800,
                fontSize: 'clamp(2.8rem, 4.5vw, 4rem)',
                color: '#075E5A',
                letterSpacing: '-0.03em',
              }}
            >
              THAND.AI
            </h2>

            {/* Subtitle */}
            <p
              className="mb-5"
              style={{
                fontFamily: 'Syne, sans-serif',
                fontWeight: 700,
                fontSize: '22px',
                color: '#102F3D',
                letterSpacing: '-0.01em',
              }}
            >
              Smart Portable Freezer
            </p>

            {/* Description */}
            <p
              className="mb-8 leading-relaxed"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '14.5px',
                color: '#647781',
                lineHeight: 1.7,
              }}
            >
              An intelligent, portable refrigeration system designed to preserve
              agricultural produce and other temperature-sensitive materials,
              enabling a more resilient and decentralized cold chain.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 mb-8">
              <button
                onClick={() => scrollTo('contact')}
                className="btn-primary"
                style={{ padding: '11px 22px', fontSize: '14px' }}
              >
                View Product Details
                <ArrowRight size={15} />
              </button>
              <button
                onClick={() => scrollTo('contact')}
                className="btn-ghost"
                style={{ padding: '11px 20px', fontSize: '14px' }}
              >
                <Play size={14} className="fill-current" />
                Watch Demo
              </button>
            </div>

            {/* Application sector pills */}
            <div className="grid grid-cols-4 gap-2 pt-2 pb-6 border-b border-[#DDE8E5]">
              {SECTOR_PILLS.map(({ icon: Icon, label }) => (
                <div key={label} className="flex flex-col items-center text-center gap-1.5">
                  <div
                    className="flex items-center justify-center rounded-lg"
                    style={{
                      width: 34,
                      height: 34,
                      background: '#F0F6F4',
                      color: '#075E5A',
                    }}
                  >
                    <Icon size={16} />
                  </div>
                  <span
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '11px',
                      fontWeight: 500,
                      color: '#647781',
                    }}
                  >
                    {label}
                  </span>
                </div>
              ))}
            </div>

            {/* Quote callout */}
            <div
              className="mt-6 flex items-start gap-3 p-4 rounded-xl"
              style={{
                background: 'rgba(225,242,235,0.4)',
                borderLeft: '3px solid #075E5A',
              }}
            >
              <span
                style={{
                  fontFamily: 'Syne, sans-serif',
                  fontSize: '28px',
                  lineHeight: '1',
                  color: '#075E5A',
                  fontWeight: 700,
                }}
              >
                “
              </span>
              <p
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontStyle: 'italic',
                  fontSize: '13.5px',
                  color: '#3C806C',
                  fontWeight: 600,
                  lineHeight: 1.5,
                }}
              >
                Practical technology
                <br />
                for stronger communities.
              </p>
            </div>
          </div>

          {/* CENTER COLUMN: Visual Showcase (4 Cols) */}
          <div className="lg:col-span-4 relative flex flex-col items-center justify-center fade-in fade-in-delay-1">
            {/* Soft Radial Ambient Aura */}
            <div
              className="absolute inset-0 pointer-events-none rounded-full"
              style={{
                background: 'radial-gradient(circle at 50% 50%, rgba(225,242,235,0.85) 0%, rgba(240,246,244,0.4) 50%, transparent 75%)',
                transform: 'scale(1.25)',
                zIndex: 0,
              }}
            />

            {/* View Switcher: Lab Prototype vs Commercial Vision */}
            <div
              className="relative z-20 flex items-center gap-1.5 p-1 rounded-full mb-4"
              style={{
                background: '#F0F6F4',
                border: '1px solid #DDE8E5',
                boxShadow: '0 2px 6px rgba(16,47,61,0.04)',
              }}
            >
              <button
                type="button"
                onClick={() => setViewMode('prototype')}
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer"
                style={{
                  background: viewMode === 'prototype' ? '#075E5A' : 'transparent',
                  color: viewMode === 'prototype' ? '#ffffff' : '#647781',
                  boxShadow: viewMode === 'prototype' ? '0 2px 8px rgba(7,94,90,0.25)' : 'none',
                  border: 'none',
                }}
              >
                <CheckCircle2 size={13} />
                Working Prototype
              </button>

              <button
                type="button"
                onClick={() => setViewMode('commercial')}
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer"
                style={{
                  background: viewMode === 'commercial' ? '#075E5A' : 'transparent',
                  color: viewMode === 'commercial' ? '#ffffff' : '#647781',
                  boxShadow: viewMode === 'commercial' ? '0 2px 8px rgba(7,94,90,0.25)' : 'none',
                  border: 'none',
                }}
              >
                <Sparkles size={13} />
                Commercial Vision
              </button>
            </div>

            {/* Main Product Container */}
            <div className="relative z-10 w-full flex flex-col items-center">
              {/* Product Photograph */}
              <div
                className="relative rounded-2xl overflow-hidden w-full transition-all duration-300"
                style={{
                  aspectRatio: '1/1',
                  maxHeight: '430px',
                  boxShadow: '0 20px 50px rgba(16,47,61,0.12), 0 4px 12px rgba(16,47,61,0.06)',
                  border: '1px solid #DDE8E5',
                  background: '#ffffff',
                }}
              >
                <Image
                  src={viewMode === 'prototype' ? '/thandai.png' : '/thandaifinal.jpeg'}
                  alt={viewMode === 'prototype' ? 'THAND.AI Working Prototype' : 'THAND.AI Post-Commercialization Product'}
                  fill
                  className="object-contain p-2 transition-opacity duration-300"
                  priority
                />
              </div>

              {/* Callout badge 1 (Top right) */}
              <div
                className="absolute -top-3 -right-2 md:right-0 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-xl border border-[#DDE8E5] shadow-md z-20"
                style={{
                  boxShadow: '0 4px 16px rgba(16,47,61,0.08)',
                }}
              >
                <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', fontWeight: 700, color: '#102F3D' }}>
                  {viewMode === 'prototype' ? 'Compact Design' : 'Sleek Ergonomics'}
                </div>
                <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '10px', color: '#647781' }}>
                  {viewMode === 'prototype' ? 'High Performance' : 'Commercial Unit'}
                </div>
              </div>

              {/* Callout badge 2 (Bottom left) */}
              <div
                className="absolute -bottom-4 -left-2 md:left-0 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-xl border border-[#DDE8E5] shadow-md z-20"
                style={{
                  boxShadow: '0 4px 16px rgba(16,47,61,0.08)',
                }}
              >
                <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', fontWeight: 700, color: '#075E5A' }}>
                  {viewMode === 'prototype' ? 'Rugged. Portable. Field-Ready.' : 'Industrial Production Roadmap'}
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: 6 Feature Cards (4 Cols) */}
          <div className="lg:col-span-4 flex flex-col fade-in fade-in-delay-2">
            {/* Top Right Label Header */}
            <div className="flex flex-col items-end mb-6 text-right">
              <div className="w-14 h-[2px] bg-[#3C806C] mb-2" />
              <div
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '11px',
                  fontWeight: 700,
                  letterSpacing: '0.16em',
                  color: '#3C806C',
                  textTransform: 'uppercase',
                  lineHeight: 1.4,
                }}
              >
                Colder Harvests
              </div>
              <div
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '11px',
                  fontWeight: 700,
                  letterSpacing: '0.16em',
                  color: '#3C806C',
                  textTransform: 'uppercase',
                  lineHeight: 1.4,
                }}
              >
                Brighter Futures
              </div>
            </div>

            {/* 6 Features List */}
            <div className="flex flex-col gap-4">
              {FEATURES.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex items-start gap-3.5 group">
                  <div
                    className="flex items-center justify-center rounded-full shrink-0 transition-transform duration-200 group-hover:scale-105"
                    style={{
                      width: 38,
                      height: 38,
                      background: '#E1F2EB',
                      border: '1px solid rgba(7,94,90,0.15)',
                      color: '#075E5A',
                    }}
                  >
                    <Icon size={17} />
                  </div>
                  <div>
                    <h3
                      style={{
                        fontFamily: 'Syne, sans-serif',
                        fontWeight: 700,
                        fontSize: '14.5px',
                        color: '#102F3D',
                        marginBottom: '2px',
                      }}
                    >
                      {title}
                    </h3>
                    <p
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '12.5px',
                        color: '#647781',
                        lineHeight: 1.5,
                      }}
                    >
                      {desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* BOTTOM METRIC STRIP: Full Width Rounded Card */}
        <div
          className="rounded-2xl p-6 lg:p-7 shadow-sm border border-[#DDE8E5] fade-in"
          style={{
            background: 'linear-gradient(90deg, #F0F6F4 0%, #FAFCFB 100%)',
          }}
        >
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 items-center">

            {/* Metric 1: 3°C */}
            <div className="flex items-center gap-3">
              <div
                className="flex items-center justify-center rounded-xl shrink-0"
                style={{ width: 42, height: 42, background: '#ffffff', color: '#075E5A', border: '1px solid #DDE8E5' }}
              >
                <Thermometer size={20} />
              </div>
              <div>
                <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '19px', color: '#102F3D' }}>
                  3°C
                </div>
                <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', color: '#647781' }}>
                  Achieved in prototype
                </div>
              </div>
            </div>

            {/* Metric 2: 5 Liters */}
            <div className="flex items-center gap-3">
              <div
                className="flex items-center justify-center rounded-xl shrink-0"
                style={{ width: 42, height: 42, background: '#ffffff', color: '#075E5A', border: '1px solid #DDE8E5' }}
              >
                <CanisterIcon />
              </div>
              <div>
                <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '19px', color: '#102F3D' }}>
                  5 Liters
                </div>
                <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', color: '#647781' }}>
                  Prototype capacity
                </div>
              </div>
            </div>

            {/* Metric 3: Portable */}
            <div className="flex items-center gap-3">
              <div
                className="flex items-center justify-center rounded-xl shrink-0"
                style={{ width: 42, height: 42, background: '#ffffff', color: '#075E5A', border: '1px solid #DDE8E5' }}
              >
                <Briefcase size={20} />
              </div>
              <div>
                <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '19px', color: '#102F3D' }}>
                  Portable
                </div>
                <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', color: '#647781' }}>
                  Field-ready design
                </div>
              </div>
            </div>

            {/* Metric 4: Multi-sector */}
            <div className="flex items-center gap-3">
              <div
                className="flex items-center justify-center rounded-xl shrink-0"
                style={{ width: 42, height: 42, background: '#ffffff', color: '#075E5A', border: '1px solid #DDE8E5' }}
              >
                <Sprout size={20} />
              </div>
              <div>
                <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '19px', color: '#102F3D' }}>
                  Multi-sector
                </div>
                <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', color: '#647781' }}>
                  Agriculture, dairy, medicines
                </div>
              </div>
            </div>

            {/* Metric 5: Engineered For Tomorrow */}
            <div className="flex items-center gap-3 md:border-l md:border-[#DDE8E5] md:pl-6 col-span-2 md:col-span-1">
              <div
                className="flex items-center justify-center rounded-xl shrink-0"
                style={{ width: 42, height: 42, background: '#E1F2EB', color: '#075E5A', border: '1px solid rgba(7,94,90,0.15)' }}
              >
                <Mountain size={20} />
              </div>
              <div>
                <div
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '10.5px',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    color: '#075E5A',
                    textTransform: 'uppercase',
                    lineHeight: 1.3,
                  }}
                >
                  Engineered
                  <br />
                  For A Resilient
                  <br />
                  Tomorrow
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
