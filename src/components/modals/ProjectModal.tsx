'use client';

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Project } from '@/types';

const CAT_COLOR: Record<string, string> = {
  defense:  '#D97706',
  intel:    '#0D7A75',
  hardware: '#3C806C',
  systems:  '#7C3AED',
};

export default function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const color = CAT_COLOR[project.cat] ?? '#075E5A';

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
        style={{ backdropFilter: 'blur(20px)', background: 'rgba(16,47,61,0.45)' }}
        onClick={e => { if (e.target === e.currentTarget) onClose(); }}
      >
        <motion.div
          initial={{ scale: 0.96, opacity: 0, y: 12 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.96, opacity: 0, y: 12 }}
          transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-2xl max-h-[88vh] overflow-y-auto rounded-2xl"
          style={{
            background: '#ffffff',
            border: `1px solid ${color}30`,
            boxShadow: `0 24px 64px rgba(16,47,61,0.16), 0 0 0 1px ${color}15`,
          }}
        >
          {/* Color accent top bar */}
          <div className="h-[3px] w-full rounded-t-2xl" style={{ background: color }} />

          <div className="p-6">
            {/* Header */}
            <div className="flex items-start justify-between mb-6">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span
                    className="px-2.5 py-1 rounded-full"
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '10px',
                      fontWeight: 600,
                      color,
                      background: `${color}12`,
                      border: `1px solid ${color}30`,
                      letterSpacing: '0.05em',
                      textTransform: 'uppercase',
                    }}
                  >
                    {project.domain}
                  </span>
                  <span
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '10px',
                      color: '#9AAFBA',
                      letterSpacing: '0.04em',
                    }}
                  >
                    {project.id}
                  </span>
                </div>
                <h2
                  style={{
                    fontFamily: 'Syne, sans-serif',
                    fontWeight: 800,
                    fontSize: '26px',
                    color: '#102F3D',
                    letterSpacing: '-0.02em',
                    lineHeight: 1.1,
                  }}
                >
                  {project.title}
                </h2>
                <p
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '14px',
                    color: '#647781',
                    marginTop: '4px',
                  }}
                >
                  {project.subtitle}
                </p>
              </div>
              <button
                onClick={onClose}
                className="flex items-center justify-center rounded-xl transition-all duration-200 cursor-pointer shrink-0 mt-1"
                style={{
                  width: 36,
                  height: 36,
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '16px',
                  color: '#647781',
                  background: '#F0F6F4',
                  border: '1px solid #DDE8E5',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.background = '#102F3D';
                  (e.currentTarget as HTMLElement).style.color = '#ffffff';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.background = '#F0F6F4';
                  (e.currentTarget as HTMLElement).style.color = '#647781';
                }}
              >
                ✕
              </button>
            </div>

            {/* Description */}
            <div
              className="text-sm leading-relaxed mb-6 p-4 rounded-xl"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '14px',
                color: '#647781',
                lineHeight: 1.75,
                borderLeft: `3px solid ${color}`,
                paddingLeft: '16px',
                background: `${color}06`,
                border: `1px solid ${color}15`,
                borderLeftWidth: '3px',
              }}
            >
              {project.desc}
            </div>

            {/* Specs grid */}
            <div className="mb-6">
              <div
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '11px',
                  fontWeight: 600,
                  color: '#075E5A',
                  letterSpacing: '0.10em',
                  textTransform: 'uppercase',
                  marginBottom: '12px',
                }}
              >
                Specifications
              </div>
              <div className="grid grid-cols-2 gap-3">
                {Object.entries(project.specs).map(([k, v]) => (
                  <div
                    key={k}
                    className="p-3 rounded-xl"
                    style={{
                      background: '#F0F6F4',
                      border: '1px solid #DDE8E5',
                    }}
                  >
                    <div
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '10px',
                        fontWeight: 600,
                        color: '#9AAFBA',
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        marginBottom: '4px',
                      }}
                    >
                      {k}
                    </div>
                    <div
                      style={{
                        fontFamily: 'Syne, sans-serif',
                        fontWeight: 600,
                        fontSize: '13px',
                        color,
                      }}
                    >
                      {v}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tags */}
            <div>
              <div
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '11px',
                  fontWeight: 600,
                  color: '#075E5A',
                  letterSpacing: '0.10em',
                  textTransform: 'uppercase',
                  marginBottom: '10px',
                }}
              >
                Tags
              </div>
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full"
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '12px',
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
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
