'use client';

import { TICKER_ITEMS } from '@/lib/data/telemetry';

const colorMap = {
  up: 'var(--green)',
  warn: 'var(--amber)',
  err: 'var(--red)',
} as const;

const items = [...TICKER_ITEMS, ...TICKER_ITEMS]; // duplicate for seamless loop

export default function Ticker() {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-[300] flex items-center overflow-hidden"
      style={{
        height: '28px',
        background: 'rgba(2,4,8,0.95)',
        borderTop: '1px solid rgba(0,212,255,0.1)',
      }}
    >
      {/* Label */}
      <div
        className="flex-shrink-0 px-3 border-r text-xs font-bold tracking-widest"
        style={{
          fontFamily: 'Share Tech Mono',
          color: 'var(--amber)',
          borderColor: 'rgba(255,170,0,0.2)',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        TELEMETRY
      </div>

      {/* Scrolling content */}
      <div className="relative flex-1 overflow-hidden h-full flex items-center">
        <div
          className="flex gap-8 items-center whitespace-nowrap"
          style={{
            animation: 'tickerScroll 40s linear infinite',
          }}
        >
          {items.map((item, i) => (
            <span
              key={i}
              className="text-xs tracking-wider flex items-center gap-2"
              style={{
                fontFamily: 'Share Tech Mono',
                color: colorMap[item.cls],
                opacity: item.cls === 'err' ? 1 : item.cls === 'warn' ? 0.85 : 0.7,
              }}
            >
              <span style={{ color: 'rgba(0,212,255,0.2)' }}>◈</span>
              {item.text}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
