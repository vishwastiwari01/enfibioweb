"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ContainerScroll } from '@/components/ui/container-scroll-animation';
import { Box, Radio, Snowflake, ShieldCheck, Cpu, Zap, ArrowRight, ExternalLink, Sparkles } from 'lucide-react';

export default function HardwareShowcase() {
  const [activeTab, setActiveTab] = useState<'thandai' | 'v2x'>('thandai');

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#FAFCFB] via-[#F3F7F6] to-[#FAFCFB] border-y border-line/60">
      <ContainerScroll
        titleComponent={
          <div className="flex flex-col items-center justify-center px-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200/80 text-teal-800 text-xs font-mono font-bold uppercase tracking-wider mb-4 shadow-xs">
              <Sparkles size={13} className="text-teal-700 animate-pulse" />
              <span>Interactive Hardware Architecture</span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-ink tracking-tight text-center leading-[1.15]">
              Precision Hardware Meets <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-800 via-teal-700 to-cyan-700">
                Autonomous Simulations
              </span>
            </h2>

            <p className="mt-4 text-sm sm:text-base text-muted max-w-2xl text-center leading-relaxed">
              Explore our multi-layer CAD assemblies and Edge AI telemetry systems built for zero-downtime reliability and life-saving resilience.
            </p>

            {/* Quick Switcher Controls */}
            <div className="mt-6 inline-flex p-1 rounded-xl bg-white border border-line shadow-xs">
              <button
                onClick={() => setActiveTab('thandai')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  activeTab === 'thandai'
                    ? 'bg-teal-900 text-white shadow-xs'
                    : 'text-muted hover:text-ink'
                }`}
              >
                <Snowflake size={14} />
                <span>THAND.AI Portable Cryo</span>
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
                <span>Enfibio V2X Mesh</span>
              </button>
            </div>
          </div>
        }
      >
        {/* Cockpit Card Interior */}
        <div className="h-full w-full bg-[#0d161a] text-white p-4 sm:p-6 md:p-8 flex flex-col justify-between relative overflow-hidden rounded-xl">
          {/* Subtle Cyber Grid Background */}
          <div
            className="absolute inset-0 pointer-events-none opacity-20"
            style={{
              backgroundImage: `linear-gradient(#14b8a6 1px, transparent 1px), linear-gradient(90deg, #14b8a6 1px, transparent 1px)`,
              backgroundSize: '36px 36px',
            }}
          />

          {/* Top Telemetry Header */}
          <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
            <div className="flex items-center gap-2.5">
              <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-mono tracking-wider uppercase text-teal-300 font-bold">
                {activeTab === 'thandai' ? 'SYSTEM ANATOMY: THAND-AI-REV2' : 'SYSTEM ANATOMY: ENFIBIO-V2X-EDGE'}
              </span>
            </div>

            <div className="flex items-center gap-2 text-[11px] font-mono text-white/70">
              <span className="px-2 py-0.5 rounded bg-white/10 border border-white/15">
                {activeTab === 'thandai' ? 'PELTIER THERMOELECTRIC' : 'DSRC & C-V2X 5.9GHz'}
              </span>
              <span className="px-2 py-0.5 rounded bg-teal-500/20 text-teal-300 border border-teal-500/30">
                ACTIVE
              </span>
            </div>
          </div>

          {/* Main Visual & Technical Specs Split */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-6 my-auto items-center py-4">
            {/* Visual Hardware Preview */}
            <div className="md:col-span-7 relative h-56 sm:h-72 md:h-80 w-full rounded-xl overflow-hidden bg-black/40 border border-white/10 flex items-center justify-center group">
              <Image
                src={activeTab === 'thandai' ? '/thandai.png' : '/assets/v2x_platform.jpg'}
                alt={activeTab === 'thandai' ? 'THAND.AI 3D Model' : 'Enfibio V2X Hardware'}
                fill
                className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-3 left-3 bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 text-[11px] font-mono text-teal-300 flex items-center gap-2">
                <Box size={13} />
                <span>Interactive 3D Cad Geometry</span>
              </div>
            </div>

            {/* Spec Readout & Action Card */}
            <div className="md:col-span-5 flex flex-col justify-center space-y-4">
              <div>
                <span className="text-[11px] font-mono uppercase text-teal-400 tracking-wider">
                  {activeTab === 'thandai' ? 'Cold-Chain Technology' : 'Autonomous Road Safety'}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                  {activeTab === 'thandai' ? 'Smart Solid-State Freezer' : 'Cooperative Road-Safety Platform'}
                </h3>
                <p className="text-xs sm:text-sm text-white/75 mt-2 leading-relaxed">
                  {activeTab === 'thandai'
                    ? 'AI-regulated solid-state cooling providing ultra-stable sub-zero temperatures for remote medicine, vaccines, and biologics.'
                    : 'Model-trained vehicular telemetry sharing trajectory data with sub-10ms packet delivery to prevent unseen multi-vehicle collisions.'}
                </p>
              </div>

              {/* Specs Pills */}
              <div className="grid grid-cols-2 gap-2 text-[11px] font-mono">
                {activeTab === 'thandai' ? (
                  <>
                    <div className="p-2.5 rounded-lg bg-white/5 border border-white/10">
                      <span className="text-white/50 block text-[10px]">Cooling Range</span>
                      <strong className="text-teal-300 text-xs">-10°C to +8°C</strong>
                    </div>
                    <div className="p-2.5 rounded-lg bg-white/5 border border-white/10">
                      <span className="text-white/50 block text-[10px]">AI Regulation</span>
                      <strong className="text-teal-300 text-xs">Dynamic Duty Cycle</strong>
                    </div>
                    <div className="p-2.5 rounded-lg bg-white/5 border border-white/10">
                      <span className="text-white/50 block text-[10px]">Power Sources</span>
                      <strong className="text-teal-300 text-xs">Solar / DC / Grid</strong>
                    </div>
                    <div className="p-2.5 rounded-lg bg-white/5 border border-white/10">
                      <span className="text-white/50 block text-[10px]">Status</span>
                      <strong className="text-teal-300 text-xs">Ready for Pilots</strong>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="p-2.5 rounded-lg bg-white/5 border border-white/10">
                      <span className="text-white/50 block text-[10px]">Mesh Latency</span>
                      <strong className="text-teal-300 text-xs">&lt; 10 ms Telemetry</strong>
                    </div>
                    <div className="p-2.5 rounded-lg bg-white/5 border border-white/10">
                      <span className="text-white/50 block text-[10px]">Spectrum</span>
                      <strong className="text-teal-300 text-xs">TRAI 2026 Band</strong>
                    </div>
                    <div className="p-2.5 rounded-lg bg-white/5 border border-white/10">
                      <span className="text-white/50 block text-[10px]">Standards</span>
                      <strong className="text-teal-300 text-xs">AIS-230 / 189 / 190</strong>
                    </div>
                    <div className="p-2.5 rounded-lg bg-white/5 border border-white/10">
                      <span className="text-white/50 block text-[10px]">Validation</span>
                      <strong className="text-teal-300 text-xs">Autonomous Sim</strong>
                    </div>
                  </>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link
                  href={activeTab === 'thandai' ? '/projects/thandai' : '/projects/enfibio-v2x'}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-teal-500 hover:bg-teal-400 text-black text-xs font-bold transition-all shadow-md cursor-pointer"
                >
                  <Box size={14} />
                  <span>Launch 3D Simulation</span>
                  <ArrowRight size={13} />
                </Link>
                <Link
                  href="#catalog"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-lg bg-white/10 hover:bg-white/15 text-white text-xs font-semibold border border-white/15 transition-all cursor-pointer"
                >
                  <span>All Projects</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom Cockpit Status Bar */}
          <div className="relative z-10 flex flex-wrap items-center justify-between text-[11px] font-mono text-white/50 border-t border-white/10 pt-3">
            <span>ENFIBIO DEEP-TECH SYSTEMS • BENGALURU, INDIA</span>
            <span className="text-teal-300">SCROLL DOWN TO DOCK HARDWARE CHASSIS</span>
          </div>
        </div>
      </ContainerScroll>
    </section>
  );
}
