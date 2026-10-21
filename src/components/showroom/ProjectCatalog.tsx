'use client';

import React, { useState, useMemo } from 'react';
import { Search, SlidersHorizontal, ArrowRight } from 'lucide-react';
import { PROJECTS, CATEGORIES } from '@/lib/data/projects';
import ProjectCard from './ProjectCard';

export default function ProjectCatalog() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All Projects');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredProjects = useMemo(() => {
    return PROJECTS.filter((project) => {
      // Category check
      const matchesCategory =
        selectedCategory === 'All Projects' ||
        project.category === selectedCategory ||
        project.tags.some(tag => tag.toLowerCase() === selectedCategory.toLowerCase()) ||
        (selectedCategory === 'AgriTech' && (project.category === 'AgriTech' || project.cat === 'agritech' || project.domain.includes('AGRITECH'))) ||
        (selectedCategory === 'Cold Chain' && (project.category === 'Cold Chain' || project.cat === 'coldchain' || project.domain.includes('COLD CHAIN'))) ||
        (selectedCategory === 'Mobility' && (project.category === 'Mobility' || project.cat === 'mobility' || project.domain.includes('MOBILITY'))) ||
        (selectedCategory === 'HealthTech' && (project.category === 'HealthTech' || project.cat === 'healthtech' || project.domain.includes('HEALTH'))) ||
        (selectedCategory === 'AI & IoT' && (project.category === 'AI & IoT' || project.cat === 'intel' || project.tags.includes('IoT') || project.tags.includes('Edge AI')));

      // Search query check
      const query = searchQuery.trim().toLowerCase();
      if (!query) return matchesCategory;

      const matchesSearch =
        project.title.toLowerCase().includes(query) ||
        project.subtitle.toLowerCase().includes(query) ||
        project.desc.toLowerCase().includes(query) ||
        project.code.toLowerCase().includes(query) ||
        project.domain.toLowerCase().includes(query) ||
        project.tags.some(t => t.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="catalog" className="py-16 md:py-24 bg-white relative">
      <div className="container mx-auto w-[min(1280px,calc(100%-40px))]">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <div className="eyebrow mb-3">Technology Storefront</div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-ink">
              Discover our projects
            </h2>
            <p className="text-sm sm:text-base text-muted mt-2 max-w-xl">
              Explore our portfolio of innovation across AgriTech, Mobility, HealthTech, and Systems Architecture.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs font-mono font-bold text-muted bg-surface px-3 py-1.5 rounded-full border border-line">
              Showing {filteredProjects.length} of {PROJECTS.length} Projects
            </span>
          </div>
        </div>

        {/* Filter Controls Row */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-10 pb-6 border-b border-line/70">
          
          {/* Category Chips */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
            {CATEGORIES.slice(0, 6).map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-teal-900 text-white shadow-sm scale-105'
                      : 'bg-surface hover:bg-line/70 text-ink/80 border border-line/80'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative w-full lg:w-72">
            <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted" />
            <input
              type="text"
              placeholder="Search projects by keyword, tech, domain..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-full text-xs bg-surface border border-line focus:outline-none focus:border-teal-700 focus:bg-white text-ink transition-all"
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

        </div>

        {/* Project Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 px-4 bg-surface rounded-3xl border border-dashed border-line">
            <SlidersHorizontal size={32} className="mx-auto text-muted mb-3 opacity-50" />
            <h3 className="text-base font-bold text-ink mb-1">No matching projects found</h3>
            <p className="text-xs text-muted max-w-sm mx-auto mb-4">
              We couldn't find any projects matching &quot;{searchQuery}&quot; in {selectedCategory}. Try resetting your search filters.
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
    </section>
  );
}
