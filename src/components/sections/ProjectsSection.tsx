'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { PROJECTS } from '@/lib/data/projects';
import type { Project, Category } from '@/types';
import ProjectModal from '@/components/modals/ProjectModal';

const CATEGORIES = [
  { key: 'all',      label: 'All Projects' },
  { key: 'defense',  label: 'Defense'      },
  { key: 'intel',    label: 'Intelligence' },
  { key: 'hardware', label: 'Hardware'     },
  { key: 'systems',  label: 'Systems'      },
] as const;

const CAT_COLOR: Record<string, string> = {
  defense:  '#D97706',
  intel:    '#0D7A75',
  hardware: '#3C806C',
  systems:  '#7C3AED',
};

const CAT_BG: Record<string, string> = {
  defense:  'rgba(217,119,6,0.08)',
  intel:    'rgba(13,122,117,0.08)',
  hardware: 'rgba(60,128,108,0.08)',
  systems:  'rgba(124,58,237,0.08)',
};

const STATUS_MAP: Record<string, string> = {
  'PROJ-001': 'Active',
  'PROJ-002': 'In Dev',
  'PROJ-003': 'Active',
  'PROJ-004': 'In Dev',
  'PROJ-005': 'Active',
  'PROJ-006': 'In Dev',
  'PROJ-007': 'In Dev',
  'PROJ-008': 'Prototype',
  'PROJ-009': 'In Dev',
  'PROJ-010': 'Active',
  'PROJ-011': 'In Dev',
  'PROJ-012': 'Active',
  'PROJ-013': 'Prototype',
  'PROJ-014': 'In Dev',
};

const STATUS_STYLE: Record<string, { color: string; bg: string; border: string }> = {
  'Active':    { color: '#075E5A', bg: '#E1F2EB', border: '#C5D8D3' },
  'Prototype': { color: '#3C806C', bg: '#F0F6F4', border: '#DDE8E5' },
  'In Dev':    { color: '#D97706', bg: '#FEF3C7', border: '#FDE68A' },
};

function ProjectCard({ project, onOpen }: { project: Project; onOpen: (p: Project) => void }) {
  const color = CAT_COLOR[project.cat];
  const bg = CAT_BG[project.cat];
  const status = STATUS_MAP[project.id] ?? 'Active';
  const statusStyle = STATUS_STYLE[status] ?? STATUS_STYLE['Active'];

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
      className="group relative flex flex-col cursor-pointer rounded-xl overflow-hidden transition-all duration-200"
      style={{
        background: '#ffffff',
        border: '1px solid #DDE8E5',
        boxShadow: '0 1px 4px rgba(16,47,61,0.05)',
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLElement).style.borderColor = color;
        (e.currentTarget as HTMLElement).style.boxShadow = `0 8px 24px ${bg}`;
        (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLElement).style.borderColor = '#DDE8E5';
        (e.currentTarget as HTMLElement).style.boxShadow = '0 1px 4px rgba(16,47,61,0.05)';
        (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
      }}
    >
      {/* Subtle radial hover glow */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              300px circle at ${mouseX}px ${mouseY}px,
              ${color}08,
              transparent 80%
            )
          `,
          zIndex: 0,
        }}
      />

      {/* Category accent top strip */}
      <div className="h-[3px] w-full shrink-0" style={{ background: color }} />

      <div className="relative z-10 px-5 py-4 flex flex-col gap-3 flex-1">
        {/* Top row */}
        <div className="flex items-center justify-between">
          <span
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '10px',
              fontWeight: 600,
              color: color,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
            }}
          >
            {project.domain}
          </span>
          <span
            className="px-2 py-0.5 rounded-full"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '10px',
              fontWeight: 600,
              color: statusStyle.color,
              background: statusStyle.bg,
              border: `1px solid ${statusStyle.border}`,
            }}
          >
            {status}
          </span>
        </div>

        {/* Title block */}
        <div>
          <div
            style={{
              fontFamily: 'Syne, sans-serif',
              fontWeight: 700,
              fontSize: '15px',
              color: '#102F3D',
              marginBottom: '2px',
              lineHeight: 1.25,
            }}
          >
            {project.title}
          </div>
          <div
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '12px',
              color: '#9AAFBA',
              fontWeight: 400,
            }}
          >
            {project.subtitle}
          </div>
        </div>

        {/* Description */}
        <p
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '13px',
            color: '#647781',
            lineHeight: 1.6,
            flex: 1,
          }}
        >
          {project.desc.slice(0, 110)}...
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.tags.slice(0, 4).map(tag => (
            <span
              key={tag}
              className="px-2 py-0.5 rounded-full"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '10px',
                fontWeight: 500,
                color: '#647781',
                background: '#F0F6F4',
                border: '1px solid #DDE8E5',
              }}
            >
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
    <section
      id="projects"
      ref={sectionRef}
      style={{ background: '#FAFCFB', padding: '80px 0' }}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="fade-in mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="section-label">Other Projects</div>
            <h2
              className="section-title"
              style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', marginTop: '6px' }}
            >
              Building a Broader Impact
            </h2>
            <p
              className="mt-3"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '15px',
                color: '#647781',
                lineHeight: 1.7,
              }}
            >
              {filtered.length} active projects across Defense, Intelligence, Hardware, and Systems
            </p>
          </div>
        </div>

        {/* Category filter tabs */}
        <div className="fade-in fade-in-delay-1 flex flex-wrap gap-2 mb-8">
          {CATEGORIES.map(cat => {
            const isActive = activeCategory === cat.key;
            const color = cat.key === 'all' ? '#075E5A' : CAT_COLOR[cat.key];
            return (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className="px-4 py-2 rounded-full text-sm transition-all duration-200 cursor-pointer"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: isActive ? 600 : 500,
                  fontSize: '13px',
                  color: isActive ? '#fff' : '#647781',
                  background: isActive ? color : '#ffffff',
                  border: isActive ? `1px solid ${color}` : '1px solid #DDE8E5',
                  boxShadow: isActive ? `0 2px 8px ${color}30` : 'none',
                }}
              >
                {cat.label}
              </button>
            );
          })}
          <span
            className="ml-auto self-center"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '13px',
              color: '#9AAFBA',
              fontWeight: 500,
            }}
          >
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
