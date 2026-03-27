'use client';

import { useState, useEffect } from 'react';

const HUD_LINES = {
  topLeft: ['ENFIBIO MISSION CONTROL', 'NODE: PRIMARY', 'UPTIME: {uptime}'],
  topRight: ['LOCATION: HYD-IN-01', 'PROTOCOL: SECURE', 'BUILD: v0.9.1-alpha'],
  bottomLeft: ['STACK: NEXT.JS 15', 'ENGINE: R3F + THREE.JS', 'RUNTIME: TURBOPACK'],
  bottomRight: ['PROJECTS: 14', 'FOUNDERS: 3', 'LAYERS: EXEC · INTEL · EMB'],
};

export default function HudOverlay() {
  const [uptime, setUptime] = useState('00:00:00');

  useEffect(() => {
    const start = Date.now();
    const id = setInterval(() => {
      const elapsed = Math.floor((Date.now() - start) / 1000);
      const h = String(Math.floor(elapsed / 3600)).padStart(2, '0');
      const m = String(Math.floor((elapsed % 3600) / 60)).padStart(2, '0');
      const s = String(elapsed % 60).padStart(2, '0');
      setUptime(`${h}:${m}:${s}`);
    }, 1000);
    return () => clearInterval(id);
  }, []);

  const hudStyle: React.CSSProperties = {
    fontFamily: 'Share Tech Mono',
    fontSize: '9px',
    color: 'rgba(0,212,255,0.25)',
    lineHeight: 2,
    whiteSpace: 'nowrap',
    animation: 'hud-blink 8s ease-in-out infinite',
  };

  return (
    <div className="fixed inset-0 z-[100] pointer-events-none">
      {/* Scanline overlay */}
      <div className="scanline-overlay" />

      {/* Corner bracket SVGs */}
      <svg className="absolute top-3 left-3" width="32" height="32" viewBox="0 0 32 32" fill="none" style={{ opacity: 0.4 }}>
        <path d="M0 16 L0 0 L16 0" stroke="#00d4ff" strokeWidth="1.2" fill="none"/>
      </svg>
      <svg className="absolute top-3 right-3" width="32" height="32" viewBox="0 0 32 32" fill="none" style={{ opacity: 0.4 }}>
        <path d="M32 16 L32 0 L16 0" stroke="#00d4ff" strokeWidth="1.2" fill="none"/>
      </svg>
      <svg className="absolute bottom-8 left-3" width="32" height="32" viewBox="0 0 32 32" fill="none" style={{ opacity: 0.4 }}>
        <path d="M0 16 L0 32 L16 32" stroke="#00d4ff" strokeWidth="1.2" fill="none"/>
      </svg>
      <svg className="absolute bottom-8 right-3" width="32" height="32" viewBox="0 0 32 32" fill="none" style={{ opacity: 0.4 }}>
        <path d="M32 16 L32 32 L16 32" stroke="#00d4ff" strokeWidth="1.2" fill="none"/>
      </svg>

      {/* Top-left HUD */}
      <div className="absolute top-16 left-4 hidden lg:block" style={hudStyle}>
        {HUD_LINES.topLeft.map((line, i) => (
          <div key={i}>{line.replace('{uptime}', uptime)}</div>
        ))}
      </div>

      {/* Top-right HUD */}
      <div className="absolute top-16 right-4 hidden lg:block text-right" style={hudStyle}>
        {HUD_LINES.topRight.map((line, i) => (
          <div key={i}>{line}</div>
        ))}
      </div>

      {/* Bottom-left HUD */}
      <div className="absolute bottom-10 left-4 hidden lg:block" style={hudStyle}>
        {HUD_LINES.bottomLeft.map((line, i) => (
          <div key={i}>{line}</div>
        ))}
      </div>

      {/* Bottom-right HUD */}
      <div className="absolute bottom-10 right-4 hidden lg:block text-right" style={hudStyle}>
        {HUD_LINES.bottomRight.map((line, i) => (
          <div key={i}>{line}</div>
        ))}
      </div>
    </div>
  );
}
