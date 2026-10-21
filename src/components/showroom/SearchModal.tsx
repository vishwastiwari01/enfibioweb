'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Search, X, ArrowUpRight, Box } from 'lucide-react';
import { PROJECTS } from '@/lib/data/projects';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const results = query.trim()
    ? PROJECTS.filter(
        (p) =>
          p.title.toLowerCase().includes(query.toLowerCase()) ||
          p.subtitle.toLowerCase().includes(query.toLowerCase()) ||
          p.code.toLowerCase().includes(query.toLowerCase()) ||
          p.desc.toLowerCase().includes(query.toLowerCase()) ||
          p.tags.some((t) => t.toLowerCase().includes(query.toLowerCase()))
      )
    : PROJECTS.slice(0, 5);

  return (
    <div
      className="fixed inset-0 z-[300] bg-black/60 backdrop-blur-sm flex items-start justify-center pt-16 sm:pt-24 px-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-line overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Header */}
        <div className="flex items-center px-4 py-3.5 border-b border-line bg-surface">
          <Search size={18} className="text-teal-800 shrink-0 mr-3" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search projects, technologies, hardware..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-sm font-medium text-ink placeholder:text-muted focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 rounded-md text-muted hover:text-ink mr-2 text-xs font-bold"
            >
              Clear
            </button>
          )}
          <button
            onClick={onClose}
            className="w-7 h-7 rounded-full bg-white border border-line flex items-center justify-center text-muted hover:text-ink transition-colors"
          >
            <X size={14} />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-[380px] overflow-y-auto p-2 divide-y divide-line/40">
          <div className="px-3 py-1.5 text-[11px] font-bold text-muted uppercase tracking-wider">
            {query.trim() ? `Search Results (${results.length})` : 'Featured Innovations'}
          </div>

          {results.length > 0 ? (
            results.map((project) => (
              <Link
                key={project.id}
                href={`/projects/${project.slug}`}
                onClick={onClose}
                className="flex items-center justify-between p-3 rounded-xl hover:bg-surface transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-800 font-bold text-xs shrink-0">
                    {project.code.slice(0, 3)}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <strong className="text-sm font-bold text-ink group-hover:text-teal-900 transition-colors">
                        {project.title}
                      </strong>
                      {project.simulationUrl && (
                        <span className="text-[9px] font-bold px-1.5 py-0.2 rounded bg-surface border border-line text-teal-800 inline-flex items-center gap-0.5">
                          <Box size={9} /> 3D
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-muted truncate max-w-xs sm:max-w-md">
                      {project.subtitle}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="hidden sm:inline-block text-[10px] font-mono text-muted bg-white border border-line px-2 py-0.5 rounded">
                    {project.category}
                  </span>
                  <ArrowUpRight size={15} className="text-muted group-hover:text-teal-900 transition-colors" />
                </div>
              </Link>
            ))
          ) : (
            <div className="py-8 text-center text-xs text-muted">
              No matching projects found for &quot;{query}&quot;.
            </div>
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="px-4 py-2 bg-surface border-t border-line flex items-center justify-between text-[11px] text-muted">
          <span>Navigate with arrow keys</span>
          <span>ESC to close</span>
        </div>
      </div>
    </div>
  );
}
