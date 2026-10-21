'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, Box, Play, ExternalLink } from 'lucide-react';
import type { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const isVideo = project.video && (project.slug === 'agriswarm' || !project.image);
  const mediaUrl = project.image || project.video || '/assets/autonomoustruck.png';

  const badgeStyles: Record<string, string> = {
    'FLAGSHIP': 'bg-teal-900 text-white',
    'FEATURED': 'bg-[#0284c7] text-white',
    'DRDO WINNER': 'bg-amber-600 text-white',
    'LIVE DEMO': 'bg-emerald-600 text-white',
    'LIVE': 'bg-emerald-600 text-white',
    'EDGE AI': 'bg-indigo-600 text-white',
    'SIMULATION': 'bg-purple-600 text-white',
    'ACTIVE R&D': 'bg-teal-800 text-white',
    'RAG AI': 'bg-sky-700 text-white',
  };

  const badgeClass = project.badge && badgeStyles[project.badge] 
    ? badgeStyles[project.badge] 
    : 'bg-teal-900 text-white';

  return (
    <article className="group relative flex flex-col bg-white border border-line rounded-[22px] overflow-hidden shadow-[0_4px_20px_rgba(8,54,57,0.03)] hover:shadow-[0_16px_40px_rgba(8,54,57,0.08)] hover:-translate-y-1.5 transition-all duration-300">
      
      {/* Top Visual Area */}
      <div className="relative w-full h-[200px] sm:h-[210px] bg-gradient-to-b from-[#f3f7f6] to-[#eaf2f0] border-b border-line overflow-hidden">
        {project.badge && (
          <div className="absolute top-3.5 left-3.5 z-10">
            <span className={`text-[10px] font-black tracking-wider uppercase px-2.5 py-1 rounded-full shadow-sm ${badgeClass}`}>
              {project.badge}
            </span>
          </div>
        )}

        {project.simulationUrl && (
          <div className="absolute top-3.5 right-3.5 z-10">
            <span className="inline-flex items-center gap-1 text-[10px] font-bold tracking-tight bg-white/95 backdrop-blur-sm text-teal-900 border border-line px-2 py-0.5 rounded-full shadow-xs">
              <Box size={10} /> 3D
            </span>
          </div>
        )}

        {isVideo ? (
          <video
            src={mediaUrl}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="relative w-full h-full p-3 flex items-center justify-center">
            <img
              src={mediaUrl}
              alt={project.title}
              className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
          </div>
        )}
      </div>

      {/* Card Content */}
      <div className="p-5 sm:p-6 flex flex-col flex-1">
        
        {/* Category / Domain Breadcrumb */}
        <div className="flex items-center justify-between gap-2 mb-2">
          <span className="text-[10px] font-extrabold tracking-widest uppercase text-teal-800">
            {project.domain}
          </span>
          <span className="text-[10px] font-mono text-muted bg-surface border border-line px-1.5 py-0.5 rounded">
            {project.code}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-ink tracking-tight mb-1 group-hover:text-teal-900 transition-colors">
          <Link href={`/projects/${project.slug}`} className="focus:outline-none">
            {project.title}
          </Link>
        </h3>

        {/* Subtitle */}
        <p className="text-xs font-semibold text-teal-900/80 mb-2">
          {project.subtitle}
        </p>

        {/* Description */}
        <p className="text-xs text-muted leading-relaxed line-clamp-2 mb-4 flex-1">
          {project.desc}
        </p>

        {/* Specs highlights */}
        {project.specs && Object.keys(project.specs).length > 0 && (
          <div className="pt-3 border-t border-line/60 grid grid-cols-2 gap-2 mb-4">
            {Object.entries(project.specs).slice(0, 2).map(([k, v]) => (
              <div key={k} className="overflow-hidden">
                <span className="block text-[9px] uppercase font-bold text-muted tracking-wider">{k}</span>
                <span className="block text-[11px] font-semibold text-ink truncate" title={v}>
                  {v}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Bottom Actions Row */}
        <div className="mt-auto pt-2 flex items-center justify-between">
          <Link
            href={`/projects/${project.slug}`}
            className="text-xs font-bold text-teal-900 hover:text-teal-700 transition-colors inline-flex items-center gap-1"
          >
            Explore Project
          </Link>

          <Link
            href={`/projects/${project.slug}`}
            aria-label={`View ${project.title} details`}
            className="w-8 h-8 rounded-full border border-line bg-white flex items-center justify-center text-ink group-hover:bg-teal-900 group-hover:text-white group-hover:border-teal-900 transition-all duration-200"
          >
            <ArrowUpRight size={15} />
          </Link>
        </div>

      </div>

    </article>
  );
}
