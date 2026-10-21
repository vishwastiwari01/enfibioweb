"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Play, 
  ArrowRight, 
  Box, 
  Radio, 
  Snowflake, 
  ShieldCheck, 
  Cpu, 
  Zap, 
  Sparkles,
  Layers,
  Activity,
  CheckCircle2,
  X
} from 'lucide-react';
import { PROJECTS } from '@/lib/data/projects';

export default function DeepTechHero() {
  const [activeTab, setActiveTab] = useState<'thandai' | 'v2x'>('thandai');
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const thandai = PROJECTS.find(p => p.slug === 'thandai') || PROJECTS[0];
  const v2x = PROJECTS.find(p => p.slug === 'enfibio-v2x') || PROJECTS[1];

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <section id="hero" className="relative w-full pt-8 pb-16 md:pt-12 md:pb-24 overflow-hidden bg-gradient-to-b from-[#FAFDFB] via-[#F4F9F7] to-[#FAFDFB] border-b border-line/60">
        {/* Subtle Background Engineering Grid */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-40"
          style={{
            backgroundImage: `
              radial-gradient(circle at 15% 20%, rgba(12, 119, 112, 0.05) 0%, transparent 45%),
              radial-gradient(circle at 85% 65%, rgba(14, 165, 233, 0.05) 0%, transparent 50%),
              linear-gradient(to right, rgba(24, 24, 27, 0.03) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(24, 24, 27, 0.03) 1px, transparent 1px)
            `,
            backgroundSize: '100% 100%, 100% 100%, 48px 48px, 48px 48px'
          }}
        />

        <div className="container mx-auto w-[min(1280px,calc(100%-40px))] relative z-10">
          
          {/* Top Hero Editorial & Credibility Header */}
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-10 md:mb-14">
            
            <div className="inline-flex items-center gap-2 mb-4 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200/80 text-teal-800 text-xs font-mono font-bold tracking-wider uppercase shadow-xs">
              <span className="flex h-2 w-2 rounded-full bg-teal-700 animate-pulse" />
              <span>SIIC IIT KANPUR INCUBATED • DEEP-TECH HARDWARE</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[4.2rem] font-black tracking-tight text-ink leading-[1.08] mb-5">
              Engineering Resilient Systems for <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-900 via-teal-800 to-cyan-700">
                Cold Chains & Autonomous Mobility
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-muted leading-relaxed max-w-2xl">
              Enfibio Technologies develops mission-critical deep-tech hardware engineered from first principles — eliminating chemical refrigerants with solid-state Peltier cryo and preventing roadway collisions with sub-10ms V2X telemetry.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3.5 mt-7">
              <button
                onClick={() => scrollTo('flagships')}
                className="btn btn-primary shadow-sm hover:shadow-md cursor-pointer"
              >
                Explore Flagships <ArrowRight size={16} />
              </button>

              <button
                onClick={() => setIsVideoModalOpen(true)}
                className="btn btn-secondary cursor-pointer"
              >
                <Play size={14} className="fill-teal-900 text-teal-900" /> Watch Prototype Video
              </button>

              <Link
                href="/projects/thandai#interactive"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-white hover:bg-surface border border-line text-xs font-bold text-ink shadow-xs transition-colors cursor-pointer"
              >
                <Box size={14} className="text-teal-800" />
                <span>Launch 3D Anatomy</span>
              </Link>
            </div>

            {/* Performance Indicators & Proof Points */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-10 pt-8 border-t border-line/70 w-full max-w-3xl">
              <div className="text-center p-3 rounded-2xl bg-white/70 border border-line/60 shadow-xs">
                <strong className="block text-2xl sm:text-3xl font-extrabold tracking-tight text-teal-900">
                  ~3°C
                </strong>
                <span className="text-xs text-muted font-medium">Observed Cryo Temp</span>
              </div>
              <div className="text-center p-3 rounded-2xl bg-white/70 border border-line/60 shadow-xs">
                <strong className="block text-2xl sm:text-3xl font-extrabold tracking-tight text-teal-900">
                  &lt; 10ms
                </strong>
                <span className="text-xs text-muted font-medium">V2X Mesh Latency</span>
              </div>
              <div className="text-center p-3 rounded-2xl bg-white/70 border border-line/60 shadow-xs">
                <strong className="block text-2xl sm:text-3xl font-extrabold tracking-tight text-teal-900">
                  DRDO
                </strong>
                <span className="text-xs text-muted font-medium">Dare to Dream Winner</span>
              </div>
              <div className="text-center p-3 rounded-2xl bg-white/70 border border-line/60 shadow-xs">
                <strong className="block text-2xl sm:text-3xl font-extrabold tracking-tight text-teal-900">
                  100%
                </strong>
                <span className="text-xs text-muted font-medium">Solid-State (No Freon)</span>
              </div>
            </div>

          </div>

          {/* Clean Dual-Console Interactive Spotlight (Replaces Clunky Swiping Carousel) */}
          <div className="w-full max-w-5xl mx-auto rounded-[32px] bg-white border border-line shadow-[0_20px_60px_rgba(8,54,57,0.08)] overflow-hidden">
            
            {/* Top Console Navigation Tabs */}
            <div className="p-3 sm:p-4 bg-surface/60 border-b border-line flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-muted px-2 hidden sm:inline">
                  SELECT TECHNOLOGY CONSOLE:
                </span>
                <div className="inline-flex p-1 rounded-xl bg-white border border-line shadow-xs">
                  <button
                    onClick={() => setActiveTab('thandai')}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      activeTab === 'thandai'
                        ? 'bg-teal-900 text-white shadow-xs'
                        : 'text-muted hover:text-ink'
                    }`}
                  >
                    <Snowflake size={14} />
                    <span>THAND.AI Solid-State Cryo</span>
                  </button>
                  <button
                    onClick={() => setActiveTab('v2x')}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      activeTab === 'v2x'
                        ? 'bg-teal-900 text-white shadow-xs'
                        : 'text-muted hover:text-ink'
                    }`}
                  >
                    <Radio size={14} />
                    <span>Enfibio V2X Connected Mesh</span>
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-[11px] font-mono font-bold text-teal-800 bg-teal-50 border border-teal-200 px-2.5 py-1 rounded-md">
                  {activeTab === 'thandai' ? 'FLAGSHIP · COLD CHAIN' : 'FEATURED · MOBILITY'}
                </span>
              </div>
            </div>

            {/* Active Console Panel */}
            <div className="p-6 sm:p-8 md:p-10">
              {activeTab === 'thandai' ? (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-in fade-in duration-300">
                  {/* Left Specs & Context */}
                  <div className="lg:col-span-5 flex flex-col justify-center space-y-4">
                    <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-teal-800">
                      <Snowflake size={14} className="text-teal-700" />
                      <span>Solid-State Cryo Technology</span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-extrabold text-ink tracking-tight">
                      THAND.AI Smart Portable Freezer
                    </h2>

                    <p className="text-xs sm:text-sm text-muted leading-relaxed">
                      AI-enabled portable refrigeration prototype engineered for agricultural produce, dairy preservation, and medical cold chains. Achieves reliable ~3°C holding using solid-state Peltier elements without toxic freon or fragile mechanical compressors.
                    </p>

                    {/* Technical Highlights */}
                    <div className="grid grid-cols-2 gap-2.5 pt-2 text-[11px] font-mono">
                      <div className="p-2.5 rounded-xl bg-surface border border-line">
                        <span className="text-muted block text-[10px]">Cooling Engine</span>
                        <strong className="text-ink text-xs">Solid-State Peltier</strong>
                      </div>
                      <div className="p-2.5 rounded-xl bg-surface border border-line">
                        <span className="text-muted block text-[10px]">Thermal Control</span>
                        <strong className="text-ink text-xs">AI PID Regulation</strong>
                      </div>
                      <div className="p-2.5 rounded-xl bg-surface border border-line">
                        <span className="text-muted block text-[10px]">Power Input</span>
                        <strong className="text-ink text-xs">Solar / DC / Battery</strong>
                      </div>
                      <div className="p-2.5 rounded-xl bg-surface border border-line">
                        <span className="text-muted block text-[10px]">Status</span>
                        <strong className="text-teal-800 text-xs">Ready for Pilots</strong>
                      </div>
                    </div>

                    {/* CTAs */}
                    <div className="flex flex-wrap items-center gap-3 pt-3">
                      <Link
                        href="/projects/thandai"
                        className="btn btn-primary btn-small text-xs py-2.5 px-4 shadow-sm"
                      >
                        <span>Explore THAND.AI Specs</span>
                        <ArrowRight size={14} />
                      </Link>
                      <Link
                        href="/projects/thandai#interactive"
                        className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-surface hover:bg-line/70 text-ink text-xs font-bold border border-line transition-all"
                      >
                        <Box size={14} className="text-teal-800" />
                        <span>Interactive 3D Anatomy</span>
                      </Link>
                    </div>
                  </div>

                  {/* Right Hardware Visual */}
                  <div className="lg:col-span-7 relative h-72 sm:h-96 w-full rounded-2xl overflow-hidden bg-gradient-to-b from-[#f8faf9] to-[#edf3f1] border border-line flex items-center justify-center p-6 group">
                    <Image
                      src="/thandai.png"
                      alt="THAND.AI Smart Portable Freezer 3D Assembly"
                      fill
                      priority
                      className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-lg border border-line text-[11px] font-mono text-ink flex items-center gap-2 shadow-xs">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      <span>Observed: ~3°C Cold Holding</span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-in fade-in duration-300">
                  {/* Left Specs & Context */}
                  <div className="lg:col-span-5 flex flex-col justify-center space-y-4">
                    <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-teal-800">
                      <Radio size={14} className="text-teal-700" />
                      <span>Cooperative Intelligence Platform</span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-extrabold text-ink tracking-tight">
                      Enfibio V2X Connected Roads
                    </h2>

                    <p className="text-xs sm:text-sm text-muted leading-relaxed">
                      Vehicle-to-everything (V2X) communication platform integrating low-latency telemetry with trained Edge AI models. Validated in high-fidelity autonomous simulations to prevent collisions beyond camera and LiDAR line of sight.
                    </p>

                    {/* Technical Highlights */}
                    <div className="grid grid-cols-2 gap-2.5 pt-2 text-[11px] font-mono">
                      <div className="p-2.5 rounded-xl bg-surface border border-line">
                        <span className="text-muted block text-[10px]">Mesh Latency</span>
                        <strong className="text-ink text-xs">&lt; 10 ms Telemetry</strong>
                      </div>
                      <div className="p-2.5 rounded-xl bg-surface border border-line">
                        <span className="text-muted block text-[10px]">Protocols</span>
                        <strong className="text-ink text-xs">V2V, V2I, V2P, V2D</strong>
                      </div>
                      <div className="p-2.5 rounded-xl bg-surface border border-line">
                        <span className="text-muted block text-[10px]">Spectrum</span>
                        <strong className="text-ink text-xs">5.9 GHz (TRAI 2026)</strong>
                      </div>
                      <div className="p-2.5 rounded-xl bg-surface border border-line">
                        <span className="text-muted block text-[10px]">Validation</span>
                        <strong className="text-teal-800 text-xs">Model Trained & Sim</strong>
                      </div>
                    </div>

                    {/* CTAs */}
                    <div className="flex flex-wrap items-center gap-3 pt-3">
                      <Link
                        href="/projects/enfibio-v2x"
                        className="btn btn-primary btn-small text-xs py-2.5 px-4 shadow-sm"
                      >
                        <span>Explore Enfibio V2X</span>
                        <ArrowRight size={14} />
                      </Link>
                      <Link
                        href="/projects/enfibio-v2x#interactive"
                        className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-surface hover:bg-line/70 text-ink text-xs font-bold border border-line transition-all"
                      >
                        <Box size={14} className="text-teal-800" />
                        <span>Launch 3D Simulation</span>
                      </Link>
                    </div>
                  </div>

                  {/* Right Hardware Visual (Using user's brand-new high-res V2X image!) */}
                  <div className="lg:col-span-7 relative h-72 sm:h-96 w-full rounded-2xl overflow-hidden bg-slate-900 border border-line flex items-center justify-center group shadow-md">
                    <Image
                      src="/assets/v2x_platform.jpg"
                      alt="Enfibio V2X Cooperative Road-Safety Connected Intelligence"
                      fill
                      priority
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute bottom-4 left-4 bg-slate-950/85 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/15 text-[11px] font-mono text-cyan-300 flex items-center gap-2 shadow-xs">
                      <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                      <span>Cooperative Road Telemetry Active</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

          </div>

        </div>
      </section>

      {/* Video Modal */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in">
          <div className="relative w-full max-w-4xl bg-black rounded-3xl overflow-hidden border border-white/20 shadow-2xl">
            <div className="p-4 flex items-center justify-between border-b border-white/10 bg-zinc-900 text-white">
              <span className="text-xs font-mono font-bold tracking-wider uppercase text-teal-400">
                THAND.AI Prototype Hardware Video
              </span>
              <button
                onClick={() => setIsVideoModalOpen(false)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <X size={16} />
              </button>
            </div>
            <div className="relative aspect-video w-full">
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
    </>
  );
}
