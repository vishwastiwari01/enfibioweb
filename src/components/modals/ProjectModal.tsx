'use client';

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Project } from '@/types';

const CAT_COLOR: Record<string, string> = {
  defense:  'var(--amber)',
  intel:    'var(--cyan)',
  hardware: 'var(--green)',
  systems:  'var(--purple)',
};

export default function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const color = CAT_COLOR[project.cat];

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[600] flex items-center justify-center p-4"
        style={{ backdropFilter: 'blur(16px)', background: 'rgba(2,4,8,0.85)' }}
        onClick={e => { if (e.target === e.currentTarget) onClose(); }}
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 10 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 10 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-sm"
          style={{
            background: 'var(--bg-secondary)',
            border: `1px solid ${color}40`,
            boxShadow: `0 0 40px ${color}15`,
          }}
        >
          {/* Color accent top bar */}
          <div className="h-[2px] w-full" style={{ background: color }} />

          <div className="p-6">
            {/* Header */}
            <div className="flex items-start justify-between mb-6">
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-xs" style={{ fontFamily: 'Share Tech Mono', color: 'rgba(255,255,255,0.25)', fontSize: '9px' }}>
                    {project.id}
                  </span>
                  <span
                    className="text-xs px-2 py-0.5"
                    style={{ fontFamily: 'Share Tech Mono', fontSize: '8px', color, background: `${color}15`, border: `1px solid ${color}30` }}
                  >
                    {project.domain}
                  </span>
                </div>
                <h2 className="text-2xl font-black" style={{ fontFamily: 'Orbitron', color: 'rgba(255,255,255,0.95)' }}>
                  {project.title}
                </h2>
                <p className="text-sm opacity-50 mt-1">{project.subtitle}</p>
              </div>
              <button
                onClick={onClose}
                className="text-xs w-8 h-8 flex items-center justify-center rounded-sm cursor-pointer"
                style={{ fontFamily: 'Share Tech Mono', color: 'rgba(255,255,255,0.4)', border: '1px solid rgba(255,255,255,0.1)' }}
              >
                ✕
              </button>
            </div>

            {/* Description */}
            <div
              className="text-sm leading-relaxed mb-6 opacity-70"
              style={{ fontFamily: 'Barlow', borderLeft: `2px solid ${color}40`, paddingLeft: '12px' }}
            >
              {project.desc}
            </div>

            {/* Specs grid */}
            <div className="mb-6">
              <div className="section-header mb-3">SPECIFICATIONS</div>
              <div className="grid grid-cols-2 gap-3">
                {Object.entries(project.specs).map(([k, v]) => (
                  <div
                    key={k}
                    className="p-3 rounded-sm"
                    style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)' }}
                  >
                    <div className="text-xs opacity-40 mb-1" style={{ fontFamily: 'Share Tech Mono', fontSize: '8px' }}>
                      {k.toUpperCase()}
                    </div>
                    <div className="text-sm font-medium" style={{ fontFamily: 'Barlow Condensed', color }}>
                      {v}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tags */}
            <div>
              <div className="section-header mb-3">TAGS</div>
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-xs rounded-sm"
                    style={{
                      fontFamily: 'Share Tech Mono',
                      fontSize: '9px',
                      color: 'rgba(255,255,255,0.5)',
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.1)',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
