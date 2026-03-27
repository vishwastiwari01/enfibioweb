'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { type TelemetryEntry } from '@/types';
import { TELEMETRY } from '@/lib/data/telemetry';

const TYPE_COLOR = {
  ok: 'var(--green)',
  warn: 'var(--amber)',
  err: 'var(--red)',
} as const;

const TYPE_LABEL = {
  ok: '●',
  warn: '▲',
  err: '✕',
} as const;

export default function MissionLog() {
  const [isOpen, setIsOpen] = useState(false);
  const [entries, setEntries] = useState<(TelemetryEntry & { ts: string })[]>([]);
  const listRef = useRef<HTMLDivElement>(null);

  const getTs = () => {
    const now = new Date();
    return `${String(now.getHours()).padStart(2,'0')}:${String(now.getMinutes()).padStart(2,'0')}:${String(now.getSeconds()).padStart(2,'0')}`;
  };

  // Seed initial entries
  useEffect(() => {
    const initial = TELEMETRY.slice(0, 5).map(t => ({ ...t, ts: getTs() }));
    setEntries(initial);
  }, []);

  // Auto-add entries
  useEffect(() => {
    let idx = 5;
    const id = setInterval(() => {
      const entry = TELEMETRY[idx % TELEMETRY.length];
      setEntries(prev => {
        const next = [{ ...entry, ts: getTs() }, ...prev].slice(0, 50);
        return next;
      });
      idx++;
    }, 2200);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      {/* Toggle button */}
      <button
        onClick={() => setIsOpen(o => !o)}
        className="fixed z-[400] cursor-pointer transition-all duration-200"
        style={{
          right: isOpen ? '284px' : '0px',
          top: '50%',
          transform: 'translateY(-50%)',
          background: 'rgba(6,12,20,0.95)',
          border: '1px solid rgba(0,212,255,0.15)',
          borderRight: isOpen ? '1px solid rgba(0,212,255,0.15)' : 'none',
          padding: '10px 6px',
          writingMode: 'vertical-rl',
          textOrientation: 'mixed',
          fontFamily: 'Share Tech Mono',
          fontSize: '9px',
          letterSpacing: '0.15em',
          color: 'rgba(0,212,255,0.5)',
          backdropFilter: 'blur(8px)',
          borderRadius: isOpen ? '4px 0 0 4px' : '4px 0 0 4px',
        }}
      >
        MISSION LOG
      </button>

      {/* Panel */}
      <motion.div
        initial={false}
        animate={{ x: isOpen ? 0 : 284 }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className="fixed right-0 top-[60px] bottom-[28px] z-[350] flex flex-col"
        style={{
          width: '284px',
          background: 'rgba(2,4,8,0.97)',
          borderLeft: '1px solid rgba(0,212,255,0.1)',
          backdropFilter: 'blur(16px)',
        }}
      >
        {/* Header */}
        <div
          className="flex items-center justify-between px-3 py-2 border-b"
          style={{ borderColor: 'rgba(0,212,255,0.1)' }}
        >
          <span className="text-xs tracking-widest" style={{ fontFamily: 'Share Tech Mono', color: 'var(--cyan)', opacity: 0.6 }}>
            ◈ MISSION LOG
          </span>
          <span className="text-xs" style={{ fontFamily: 'Share Tech Mono', color: 'rgba(255,255,255,0.3)' }}>
            {entries.length} entries
          </span>
        </div>

        {/* Entries */}
        <div ref={listRef} className="flex-1 overflow-y-auto flex flex-col gap-0">
          <AnimatePresence initial={false}>
            {entries.map((entry, i) => (
              <motion.div
                key={`${entry.node}-${entry.ts}-${i}`}
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="px-3 py-2 border-b"
                style={{ borderColor: 'rgba(0,212,255,0.04)' }}
              >
                <div className="flex items-center justify-between mb-0.5">
                  <div className="flex items-center gap-1.5">
                    <span style={{ color: TYPE_COLOR[entry.type], fontSize: '8px' }}>{TYPE_LABEL[entry.type]}</span>
                    <span
                      className="text-xs font-bold"
                      style={{ fontFamily: 'Share Tech Mono', color: TYPE_COLOR[entry.type], opacity: 0.9, fontSize: '9px' }}
                    >
                      {entry.node}
                    </span>
                  </div>
                  <span className="text-xs" style={{ fontFamily: 'Share Tech Mono', color: 'rgba(255,255,255,0.2)', fontSize: '8px' }}>
                    {entry.ts}
                  </span>
                </div>
                <div className="text-xs" style={{ fontFamily: 'Share Tech Mono', color: 'rgba(255,255,255,0.45)', fontSize: '9px', lineHeight: 1.5 }}>
                  {entry.msg}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Footer */}
        <div
          className="px-3 py-2 border-t"
          style={{ borderColor: 'rgba(0,212,255,0.1)' }}
        >
          <div
            className="text-xs flex items-center gap-1"
            style={{ fontFamily: 'Share Tech Mono', color: 'rgba(0,212,255,0.3)', fontSize: '8px' }}
          >
            <div className="w-1.5 h-1.5 rounded-full pulse-dot" style={{ background: 'var(--green)' }} />
            LIVE · UPDATE EVERY 2.2s
          </div>
        </div>
      </motion.div>
    </>
  );
}
