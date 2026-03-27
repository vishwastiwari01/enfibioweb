'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { PROJECTS } from '@/lib/data/projects';
import type { Project, Category } from '@/types';
import ProjectModal from '@/components/modals/ProjectModal';

const CATEGORIES = [
  { key: 'all',      label: 'All Nodes' },
  { key: 'defense',  label: 'Defense'   },
  { key: 'intel',    label: 'Intelligence' },
  { key: 'hardware', label: 'Hardware'  },
  { key: 'systems',  label: 'Systems'   },
] as const;

const CAT_COLOR: Record<string, string> = {
  defense:  'var(--amber)',
  intel:    'var(--cyan)',
  hardware: 'var(--green)',
  systems:  'var(--purple)',
};

const STATUS_MAP: Record<string, string> = {
  'PROJ-001': 'ACTIVE',
  'PROJ-002': 'IN DEV',
  'PROJ-003': 'ACTIVE',
  'PROJ-004': 'IN DEV',
  'PROJ-005': 'ACTIVE',
  'PROJ-006': 'IN DEV',
  'PROJ-007': 'IN DEV',
  'PROJ-008': 'IN DEV',
  'PROJ-009': 'IN DEV',
  'PROJ-010': 'ACTIVE',
  'PROJ-011': 'IN DEV',
  'PROJ-012': 'ACTIVE',
  'PROJ-013': 'PROTOTYPE',
  'PROJ-014': 'IN DEV',
};

function ProjectCard({ project, onOpen }: { project: Project; onOpen: (p: Project) => void }) {
  const color = CAT_COLOR[project.cat];
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      onMouseMove={handleMouseMove}
      onClick={() => onOpen(project)}
      className="group relative flex flex-col cursor-pointer rounded-sm overflow-hidden"
      style={{
        background: 'var(--bg-secondary)',
        border: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-sm opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              400px circle at ${mouseX}px ${mouseY}px,
              ${color}15,
              transparent 80%
            )
          `,
          border: `1px solid ${color}40`,
          zIndex: 10
        }}
      />
      {/* Category accent bar */}
      <div className="absolute left-0 top-0 bottom-0 w-[3px]" style={{ background: color }} />

      <div className="pl-4 pr-4 pt-4 pb-4 flex flex-col gap-3 flex-1">
        {/* Top row */}
        <div className="flex items-center justify-between">
          <span className="text-xs" style={{ fontFamily: 'Share Tech Mono', color: 'rgba(255,255,255,0.25)', fontSize: '9px' }}>
            {project.id}
          </span>
          <span
            className="text-xs px-2 py-0.5 rounded-sm"
            style={{
              fontFamily: 'Share Tech Mono',
              fontSize: '8px',
              color,
              background: `${color}15`,
              border: `1px solid ${color}30`,
            }}
          >
            {STATUS_MAP[project.id] ?? 'ACTIVE'}
          </span>
        </div>

        {/* Code */}
          <div>
          <div className="text-xs mb-0.5 opacity-40" style={{ fontFamily: 'JetBrains Mono, monospace', color, fontSize: '9px' }}>
            {project.domain}
          </div>
          <div className="text-base font-bold leading-tight" style={{ fontFamily: 'Syne, sans-serif', color: 'rgba(255,255,255,0.9)' }}>
            {project.title}
          </div>
          <div className="text-xs opacity-50 mt-0.5" style={{ fontFamily: 'Inter, sans-serif' }}>
            {project.subtitle}
          </div>
        </div>

        {/* Description */}
        <p className="text-xs opacity-60 leading-relaxed flex-1" style={{ fontFamily: 'Barlow', fontSize: '12px' }}>
          {project.desc.slice(0, 110)}...
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1">
          {project.tags.slice(0, 4).map(tag => (
            <span key={tag} className="text-xs px-1.5 py-0.5 rounded"
              style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '9px', color: 'var(--text-muted)', background: 'var(--surface-2)', border: '1px solid var(--border)' }}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const filtered = activeCategory === 'all'
    ? PROJECTS
    : PROJECTS.filter(p => p.cat === activeCategory);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible');
      }),
      { threshold: 0.05 }
    );
    el.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="relative z-10 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="fade-in mb-10">
          <div className="section-label">Mission Database</div>
          <h2 className="section-title" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)' }}>Projects</h2>
          <p style={{ marginTop: '10px', color: 'var(--text-muted)', fontFamily: 'Inter, sans-serif', fontSize: '14px' }}>
            14 active projects across Defense, Intelligence, Hardware, and Systems layers
          </p>
        </div>

        {/* Category tabs */}
        <div className="fade-in fade-in-delay-1 flex flex-wrap gap-2 mb-8">
          {CATEGORIES.map(cat => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className="px-4 py-1.5 text-xs tracking-wide transition-all duration-200 rounded-full cursor-pointer"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 500,
                fontSize: '12px',
                color: activeCategory === cat.key ? '#fff' : 'var(--text-muted)',
                background: activeCategory === cat.key ? 'var(--accent)' : 'var(--surface-2)',
                border: activeCategory === cat.key ? '1px solid var(--accent)' : '1px solid var(--border)',
              }}
            >
              {cat.label}
            </button>
          ))}
          <span className="ml-auto text-xs self-center" style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', color: 'var(--text-dim)' }}>
            {filtered.length} total
          </span>
        </div>

        {/* Cards grid */}
        <div
          className="fade-in fade-in-delay-2 grid gap-4"
          style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))' }}
        >
          {filtered.map(project => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpen={setSelectedProject}
            />
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
