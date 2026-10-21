"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Box, 
  ArrowRight, 
  ExternalLink, 
  Sparkles, 
  Layers, 
  ShieldCheck, 
  Snowflake, 
  Radio, 
  Award,
  Grid
} from 'lucide-react';
import { PROJECTS } from '@/lib/data/projects';
import AllProjectsModal from './AllProjectsModal';

export default function ProjectCatalog() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const thandai = PROJECTS.find(p => p.slug === 'thandai') || PROJECTS[0];
  const v2x = PROJECTS.find(p => p.slug === 'enfibio-v2x') || PROJECTS[1];
  const bharatmaps = PROJECTS.find(p => p.slug === 'bharatmaps') || PROJECTS[2];

  // Secondary projects for preview badges
  const secondaryProjects = PROJECTS.filter(
    p => p.slug !== 'thandai' && p.slug !== 'enfibio-v2x' && p.slug !== 'bharatmaps'
  );

  return (
    <>
      <section id="flagships" className="py-16 md:py-24 bg-white relative">
        <div className="container mx-auto w-[min(1280px,calc(100%-40px))]">
          
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="eyebrow mb-3">Core Technology Spotlight</div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-ink">
                Flagship Innovations & Systems
              </h2>
              <p className="text-sm sm:text-base text-muted mt-2 max-w-2xl leading-relaxed">
                Mission-critical breakthroughs built from first principles: Solid-state portable cold chains, autonomous V2X safety networks, and defense-recognized emergency routing.
              </p>
            </div>

            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-surface hover:bg-teal-50 border border-line hover:border-teal-300 text-teal-900 text-xs font-bold transition-all shadow-xs cursor-pointer self-start md:self-auto shrink-0"
            >
              <Grid size={14} className="text-teal-700" />
              <span>Browse All {PROJECTS.length} Projects</span>
              <ArrowRight size={13} />
            </button>
          </div>

          {/* 4-Card Curated Grid (3 Core Flagships + 1 Interactive Explorer Card) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* 1. THAND.AI */}
            <div className="rounded-3xl border border-line bg-surface/40 hover:bg-white hover:border-teal-700/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group">
              <div>
                <div className="relative h-52 w-full bg-white p-4 flex items-center justify-center border-b border-line/60 overflow-hidden">
                  <Image
                    src="/thandai.png"
                    alt="THAND.AI Smart Portable Freezer"
                    fill
                    className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-full bg-emerald-50 text-teal-900 border border-teal-200 shadow-xs">
                      FLAGSHIP · COLD CHAIN
                    </span>
                  </div>
                  <div className="absolute bottom-3 right-3 px-2 py-0.5 rounded-md bg-teal-900/90 text-white text-[10px] font-mono flex items-center gap-1 shadow-xs">
                    <Box size={10} />
                    <span>3D Anatomy</span>
                  </div>
                </div>

                <div className="p-5 sm:p-6">
                  <div className="text-[10px] font-mono font-bold text-teal-800 uppercase tracking-wider mb-1">
                    Thermoelectric Cryo-Preservation
                  </div>
                  <h3 className="text-xl font-bold text-ink group-hover:text-teal-900 transition-colors">
                    {thandai.title}
                  </h3>
                  <p className="text-xs text-muted mt-2 leading-relaxed line-clamp-3">
                    AI-enabled solid-state portable refrigeration prototype engineered for agricultural produce, dairy preservation, and medical cold chains without freon.
                  </p>

                  <div className="grid grid-cols-2 gap-2 mt-4 text-[11px] font-mono">
                    <div className="p-2 rounded-lg bg-white border border-line/70">
                      <span className="text-muted block text-[10px]">Observed</span>
                      <strong className="text-ink">~3°C Cooling</strong>
                    </div>
                    <div className="p-2 rounded-lg bg-white border border-line/70">
                      <span className="text-muted block text-[10px]">Architecture</span>
                      <strong className="text-ink">Solid Peltier</strong>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-5 sm:p-6 pt-0">
                <Link
                  href="/projects/thandai"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-teal-900 hover:bg-teal-800 text-white text-xs font-bold transition-all shadow-xs cursor-pointer"
                >
                  <span>Explore THAND.AI</span>
                  <ArrowRight size={13} />
                </Link>
              </div>
            </div>

            {/* 2. Enfibio V2X */}
            <div className="rounded-3xl border border-line bg-surface/40 hover:bg-white hover:border-teal-700/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group">
              <div>
                <div className="relative h-52 w-full bg-white p-4 flex items-center justify-center border-b border-line/60 overflow-hidden">
                  <Image
                    src="/assets/v2x_platform.jpg"
                    alt="Enfibio V2X AI Platform"
                    fill
                    className="object-contain p-3 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-full bg-cyan-50 text-cyan-900 border border-cyan-200 shadow-xs">
                      FEATURED · MOBILITY
                    </span>
                  </div>
                  <div className="absolute bottom-3 right-3 px-2 py-0.5 rounded-md bg-teal-900/90 text-white text-[10px] font-mono flex items-center gap-1 shadow-xs">
                    <Box size={10} />
                    <span>3D Sim</span>
                  </div>
                </div>

                <div className="p-5 sm:p-6">
                  <div className="text-[10px] font-mono font-bold text-teal-800 uppercase tracking-wider mb-1">
                    Cooperative Vehicle Intelligence
                  </div>
                  <h3 className="text-xl font-bold text-ink group-hover:text-teal-900 transition-colors">
                    {v2x.title}
                  </h3>
                  <p className="text-xs text-muted mt-2 leading-relaxed line-clamp-3">
                    Cooperative road-safety intelligence platform with completed model training and autonomous simulations for real-time hazard prevention beyond optical line of sight.
                  </p>

                  <div className="grid grid-cols-2 gap-2 mt-4 text-[11px] font-mono">
                    <div className="p-2 rounded-lg bg-white border border-line/70">
                      <span className="text-muted block text-[10px]">Latency</span>
                      <strong className="text-ink">&lt; 10 ms Mesh</strong>
                    </div>
                    <div className="p-2 rounded-lg bg-white border border-line/70">
                      <span className="text-muted block text-[10px]">Validation</span>
                      <strong className="text-ink">Autonomous Sim</strong>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-5 sm:p-6 pt-0">
                <Link
                  href="/projects/enfibio-v2x"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-teal-900 hover:bg-teal-800 text-white text-xs font-bold transition-all shadow-xs cursor-pointer"
                >
                  <span>Explore Enfibio V2X</span>
                  <ArrowRight size={13} />
                </Link>
              </div>
            </div>

            {/* 3. BharatMaps */}
            <div className="rounded-3xl border border-line bg-surface/40 hover:bg-white hover:border-teal-700/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group">
              <div>
                <div className="relative h-52 w-full bg-white p-4 flex items-center justify-center border-b border-line/60 overflow-hidden">
                  <Image
                    src="/assets/bharatmapspreview.jpeg"
                    alt="BharatMaps DRDO Citation"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-full bg-amber-50 text-amber-900 border border-amber-200 shadow-xs">
                      DRDO WINNER · DEFENSE
                    </span>
                  </div>
                </div>

                <div className="p-5 sm:p-6">
                  <div className="text-[10px] font-mono font-bold text-teal-800 uppercase tracking-wider mb-1">
                    Defense Emergency Comms
                  </div>
                  <h3 className="text-xl font-bold text-ink group-hover:text-teal-900 transition-colors">
                    {bharatmaps.title}
                  </h3>
                  <p className="text-xs text-muted mt-2 leading-relaxed line-clamp-3">
                    Offline-first emergency communication and navigation platform awarded by DRDO in the Dare to Dream challenge for zero-cloud disaster connectivity.
                  </p>

                  <div className="grid grid-cols-2 gap-2 mt-4 text-[11px] font-mono">
                    <div className="p-2 rounded-lg bg-white border border-line/70">
                      <span className="text-muted block text-[10px]">Award</span>
                      <strong className="text-ink">DRDO Winner</strong>
                    </div>
                    <div className="p-2 rounded-lg bg-white border border-line/70">
                      <span className="text-muted block text-[10px]">Operation</span>
                      <strong className="text-ink">100% Offline</strong>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-5 sm:p-6 pt-0">
                <Link
                  href="/projects/bharatmaps"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-teal-900 hover:bg-teal-800 text-white text-xs font-bold transition-all shadow-xs cursor-pointer"
                >
                  <span>Explore BharatMaps</span>
                  <ArrowRight size={13} />
                </Link>
              </div>
            </div>

            {/* 4. THE INTERACTIVE "EXPLORE OTHER PROJECTS" CARD */}
            <div
              onClick={() => setIsModalOpen(true)}
              className="rounded-3xl border-2 border-dashed border-teal-800/30 bg-gradient-to-br from-teal-950 via-[#0a2528] to-[#04191c] text-white p-6 sm:p-7 flex flex-col justify-between relative overflow-hidden group cursor-pointer hover:border-teal-500/60 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* Background Glow */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-teal-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-teal-500/20 transition-all duration-500" />
              
              <div className="relative z-10">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-teal-500/20 text-teal-300 border border-teal-500/30 text-[10px] font-mono font-bold tracking-wider uppercase mb-5">
                  <Sparkles size={11} className="text-teal-300 animate-pulse" />
                  <span>R&D REPOSITORY</span>
                </div>

                <h3 className="text-2xl font-bold text-white tracking-tight leading-snug">
                  Explore Other R&D Projects
                </h3>

                <p className="text-xs text-white/75 mt-2.5 leading-relaxed">
                  Discover our wider catalog of {secondaryProjects.length}+ active research programs across autonomous agriculture, robotics, and edge intelligence.
                </p>

                {/* Preview Thumbnail Pills of Other Projects */}
                <div className="mt-5 space-y-2">
                  <div className="p-2 rounded-xl bg-white/10 border border-white/10 flex items-center justify-between text-xs">
                    <span className="font-semibold text-white/90">Agri Swarm System</span>
                    <span className="text-[10px] font-mono text-teal-300">Robotics</span>
                  </div>
                  <div className="p-2 rounded-xl bg-white/10 border border-white/10 flex items-center justify-between text-xs">
                    <span className="font-semibold text-white/90">HydroSense Soil Radar</span>
                    <span className="text-[10px] font-mono text-teal-300">AgriTech</span>
                  </div>
                  <div className="p-2 rounded-xl bg-white/10 border border-white/10 flex items-center justify-between text-xs">
                    <span className="font-semibold text-white/90">BioPulse Health Monitor</span>
                    <span className="text-[10px] font-mono text-teal-300">HealthTech</span>
                  </div>
                </div>
              </div>

              {/* Bottom Interactive Trigger */}
              <div className="relative z-10 pt-6">
                <div className="w-full py-3 px-4 rounded-xl bg-teal-400 group-hover:bg-teal-300 text-teal-950 text-xs font-bold transition-all flex items-center justify-between shadow-md">
                  <span>Browse Full Catalog</span>
                  <div className="w-6 h-6 rounded-full bg-teal-950/15 flex items-center justify-center">
                    <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Interactive All Projects Modal */}
      <AllProjectsModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
