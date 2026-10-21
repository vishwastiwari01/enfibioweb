"use client";

import React, { useState, useMemo, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { X, Search, SlidersHorizontal, ArrowRight, ExternalLink, Box, Sparkles, Tag } from 'lucide-react';
import { PROJECTS, CATEGORIES } from '@/lib/data/projects';
import type { Project } from '@/types';

interface AllProjectsModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialCategory?: string;
}

export default function AllProjectsModal({
  isOpen,
  onClose,
  initialCategory = 'All Projects',
}: AllProjectsModalProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Lock body scroll when modal is open & handle ESC key
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const filteredProjects = useMemo(() => {
    return PROJECTS.filter((project) => {
      // Category matching
      const matchesCategory =
        selectedCategory === 'All Projects' ||
        project.category === selectedCategory ||
        project.tags.some(tag => tag.toLowerCase() === selectedCategory.toLowerCase()) ||
        (selectedCategory === 'AgriTech' && (project.category === 'AgriTech' || project.cat === 'agritech' || project.domain.includes('AGRITECH'))) ||
        (selectedCategory === 'Cold Chain' && (project.category === 'Cold Chain' || project.cat === 'coldchain' || project.domain.includes('COLD CHAIN'))) ||
        (selectedCategory === 'Mobility' && (project.category === 'Mobility' || project.cat === 'mobility' || project.domain.includes('MOBILITY'))) ||
        (selectedCategory === 'HealthTech' && (project.category === 'HealthTech' || project.cat === 'healthtech' || project.domain.includes('HEALTH'))) ||
        (selectedCategory === 'AI & IoT' && (project.category === 'AI & IoT' || project.cat === 'intel' || project.tags.includes('IoT') || project.tags.includes('Edge AI')));

      // Search query matching
      const query = searchQuery.trim().toLowerCase();
      if (!query) return matchesCategory;

      return (
        matchesCategory &&
        (project.title.toLowerCase().includes(query) ||
          project.subtitle.toLowerCase().includes(query) ||
          project.desc.toLowerCase().includes(query) ||
          project.code.toLowerCase().includes(query) ||
          project.domain.toLowerCase().includes(query) ||
          project.tags.some(t => t.toLowerCase().includes(query)))
      );
    });
  }, [selectedCategory, searchQuery]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-3 sm:p-6 md:p-8 animate-in fade-in duration-200">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-slate-950/75 backdrop-blur-md cursor-pointer transition-opacity"
      />

      {/* Modal Dialog Content Container */}
      <div className="relative z-10 w-full max-w-6xl max-h-[92vh] flex flex-col bg-white rounded-3xl border border-line shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
        {/* Top Header */}
        <div className="p-5 sm:p-6 md:p-8 border-b border-line bg-gradient-to-b from-surface to-white">
          <div className="flex items-start justify-between gap-4 mb-5">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200/80 text-teal-800 text-xs font-mono font-bold uppercase tracking-wider mb-2">
                <Sparkles size={12} className="text-teal-700" />
                <span>Enfibio R&D Repository</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-ink tracking-tight">
                All Engineering Projects & Initiatives
              </h2>
              <p className="text-xs sm:text-sm text-muted mt-1 max-w-2xl">
                Browse our complete portfolio of patent-pending technologies, defense-awarded emergency systems, and applied research across AgriTech, Mobility, and Edge AI.
              </p>
            </div>

            <button
              onClick={onClose}
              className="w-10 h-10 rounded-full border border-line bg-white hover:bg-surface text-ink flex items-center justify-center shadow-xs transition-colors cursor-pointer shrink-0"
              aria-label="Close Modal"
            >
              <X size={18} />
            </button>
          </div>

          {/* Search & Filter Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2">
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted" />
              <input
                type="text"
                placeholder="Search by keyword, technology, or tag..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 rounded-xl text-xs bg-white border border-line focus:outline-hidden focus:border-teal-700 focus:ring-2 focus:ring-teal-700/15 text-ink transition-all shadow-xs"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] font-bold text-muted hover:text-ink"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Quick Count Badge */}
            <span className="text-[11px] font-mono font-bold text-muted bg-surface px-3 py-2 rounded-xl border border-line self-start sm:self-auto">
              Showing {filteredProjects.length} of {PROJECTS.length} Projects
            </span>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pt-3.5 scrollbar-none">
            {CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                    isActive
                      ? 'bg-teal-900 text-white shadow-xs'
                      : 'bg-white hover:bg-surface text-ink/80 border border-line'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Scrollable Project Cards Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 md:p-8 bg-surface/40">
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredProjects.map((project) => (
                <ProjectModalCard key={project.id} project={project} onNavigate={onClose} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 px-4 bg-white rounded-2xl border border-dashed border-line">
              <SlidersHorizontal size={32} className="mx-auto text-muted mb-3 opacity-50" />
              <h3 className="text-base font-bold text-ink mb-1">No matching projects found</h3>
              <p className="text-xs text-muted max-w-sm mx-auto mb-4">
                We couldn&apos;t find any project matching &quot;{searchQuery}&quot; in {selectedCategory}.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('All Projects');
                  setSearchQuery('');
                }}
                className="btn btn-secondary btn-small text-xs"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>

        {/* Modal Bottom Footer */}
        <div className="p-4 px-6 sm:px-8 border-t border-line bg-white flex flex-wrap items-center justify-between gap-3 text-xs text-muted">
          <span className="font-mono">ENFIBIO TECHNOLOGIES • PROJECT REPOSITORY</span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-surface hover:bg-line/70 text-ink font-semibold transition-colors cursor-pointer"
          >
            Close Catalog
          </button>
        </div>
      </div>
    </div>
  );
}

function ProjectModalCard({ project, onNavigate }: { project: Project; onNavigate: () => void }) {
  const isVideo = project.image?.endsWith('.mp4') || false;
  const imageSrc = project.image || '/logo.jpeg';
  const isFlagship = project.badge === 'FLAGSHIP' || project.badge === 'DRDO WINNER';

  return (
    <div className="group rounded-2xl border border-line bg-white hover:border-teal-700/40 hover:shadow-lg transition-all duration-300 flex flex-col justify-between overflow-hidden">
      <div>
        {/* Media Preview */}
        <div className="relative h-44 w-full bg-[#f8faf9] overflow-hidden border-b border-line/60">
          {isVideo ? (
            <video
              src={imageSrc}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <Image
              src={imageSrc}
              alt={project.title}
              fill
              className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
            />
          )}

          {/* Badge */}
          <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5">
            <span
              className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full border shadow-xs ${
                project.badge === 'DRDO WINNER'
                  ? 'bg-amber-50 text-amber-900 border-amber-200'
                  : project.badge === 'FLAGSHIP'
                  ? 'bg-emerald-50 text-emerald-900 border-emerald-200'
                  : 'bg-white/90 backdrop-blur-md text-ink border-line'
              }`}
            >
              {project.badge || project.category}
            </span>
          </div>

          {project.simulationUrl && (
            <div className="absolute bottom-2.5 right-2.5 px-2 py-0.5 rounded-md bg-teal-900/90 text-white text-[10px] font-mono flex items-center gap-1 shadow-xs">
              <Box size={10} />
              <span>3D Sim</span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-4 sm:p-5">
          <div className="text-[10px] font-mono font-bold text-teal-800 uppercase tracking-wider mb-1">
            {project.domain}
          </div>
          <h4 className="text-base font-bold text-ink group-hover:text-teal-900 transition-colors">
            {project.title}
          </h4>
          <p className="text-xs text-muted line-clamp-2 mt-1.5 leading-relaxed">
            {project.desc}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1 mt-3">
            {project.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-surface text-muted border border-line/60"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Card Action Footer */}
      <div className="p-4 pt-0">
        <Link
          href={`/projects/${project.slug}`}
          onClick={onNavigate}
          className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-surface hover:bg-teal-900 hover:text-white text-xs font-bold text-ink transition-all border border-line hover:border-teal-900 cursor-pointer"
        >
          <span>View Project Details</span>
          <ArrowRight size={13} />
        </Link>
      </div>
    </div>
  );
}
