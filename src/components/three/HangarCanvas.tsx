'use client';

import React, { useEffect, useState } from 'react';

const BATTLE_DRONE_URL =
  'https://sketchfab.com/models/e104b7ce3d014152af703ac9d30e6eaa/embed' +
  '?autostart=1&ui_theme=dark&ui_animations=0&ui_infos=0&ui_stop=0' +
  '&ui_inspector=0&ui_watermark=0&ui_watermark_link=0&ui_ar=0' +
  '&ui_help=0&ui_settings=0&ui_vr=0&ui_fullscreen=0&ui_annotations=0' +
  '&camera=0&transparent=1';

const SPY_DRONE_URL =
  'https://sketchfab.com/models/cba87a0ba2c54be6a429440f39daeb1b/embed' +
  '?autostart=1&ui_theme=dark&ui_animations=1&ui_infos=0&ui_stop=0' +
  '&ui_inspector=0&ui_watermark=0&ui_watermark_link=0&ui_ar=0' +
  '&ui_help=0&ui_settings=0&ui_vr=0&ui_fullscreen=0&ui_annotations=0' +
  '&camera=0&transparent=1';

function ModelPane({
  src,
  label,
  sublabel,
  badge,
  badgeColor,
}: {
  src: string;
  label: string;
  sublabel: string;
  badge: string;
  badgeColor: string;
}) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative flex-1 min-w-0" style={{ background: 'var(--bg)' }}>
      {/* Model label */}
      <div
        className="absolute top-3 left-3 z-10 text-[9px] tracking-widest pointer-events-none"
        style={{ fontFamily: 'Share Tech Mono, monospace', color: badgeColor }}
      >
        <div className="opacity-80 mb-0.5">{label}</div>
        <div className="opacity-40 text-[var(--text-muted)]">{sublabel}</div>
      </div>

      {/* Status badge */}
      <div
        className="absolute top-3 right-3 z-10 px-2 py-0.5 text-[8px] tracking-widest border"
        style={{
          fontFamily: 'Share Tech Mono, monospace',
          color: badgeColor,
          borderColor: `${badgeColor}40`,
          background: `${badgeColor}10`,
        }}
      >
        ● {badge}
      </div>

      {/* Loading placeholder */}
      {!loaded && (
        <div
          className="absolute inset-0 flex items-center justify-center z-20"
          style={{
            background: 'var(--bg)',
            fontFamily: 'Share Tech Mono, monospace',
            color: badgeColor,
            fontSize: '9px',
            letterSpacing: '0.2em',
            opacity: 0.5,
          }}
        >
          ▸ LOADING...
        </div>
      )}

      <iframe
        title={label}
        src={src}
        allow="autoplay; fullscreen; xr-spatial-tracking"
        style={{
          width: '100%',
          height: '100%',
          border: 'none',
          display: 'block',
          opacity: loaded ? 1 : 0,
          transition: 'opacity 0.8s ease',
        }}
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
}

/* Animated SVG trajectory connector */
function LaunchTrajectory() {
  return (
    <div
      className="relative flex-shrink-0 flex flex-col items-center justify-center"
      style={{ width: '64px', background: 'var(--bg)' }}
    >
      {/* Vertical divider line */}
      <div
        className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-px"
        style={{ background: 'linear-gradient(to bottom, transparent, rgba(37,99,235,0.25), transparent)' }}
      />

      {/* Arrow & label */}
      <div className="relative flex flex-col items-center gap-2">
        <svg width="32" height="60" viewBox="0 0 32 60" fill="none">
          {/* Dashed trajectory curve */}
          <path
            d="M 28 5 Q 16 30 4 55"
            stroke="#2563eb"
            strokeWidth="1"
            strokeDasharray="3 3"
            opacity="0.5"
          >
            <animate attributeName="stroke-dashoffset" from="0" to="-100" dur="2s" repeatCount="indefinite" />
          </path>
          {/* Arrowhead */}
          <polygon points="4,55 0,46 8,48" fill="#2563eb" opacity="0.7" />
          {/* Drone dot travelling */}
          <circle r="2.5" fill="#16a34a" opacity="0.9">
            <animateMotion dur="2s" repeatCount="indefinite">
              <mpath href="#traj" />
            </animateMotion>
          </circle>
          <path id="traj" d="M 28 5 Q 16 30 4 55" fill="none" />
        </svg>

        <div
          className="text-[7px] tracking-widest text-center"
          style={{ fontFamily: 'Share Tech Mono, monospace', color: '#2563eb', opacity: 0.8 }}
        >
          DEPLOY
          <br />
          SEQ
        </div>
      </div>
    </div>
  );
}

export default function HangarCanvas() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <div
      style={{
        height: '500px',
        background: 'var(--bg)',
        borderRadius: '4px',
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Top bar */}
      <div
        className="flex-shrink-0 flex items-center justify-between px-4 py-2 border-b"
        style={{
          borderColor: 'var(--border)',
          fontFamily: 'Share Tech Mono, monospace',
          background: 'var(--bg)',
        }}
      >
        <span className="text-[9px] tracking-widest" style={{ color: '#2563eb', opacity: 0.8 }}>
          ◈ DEPLOYMENT SEQUENCE — LAUNCH AUTHORISED
        </span>
        <div className="flex items-center gap-3">
          {['CARRIER', 'PAYLOAD', 'LINK'].map((s, i) => (
            <span key={s} className="flex items-center gap-1 text-[8px]" style={{ color: i === 2 ? 'var(--green)' : 'var(--primary)', opacity: 0.8 }}>
              <span
                className="inline-block w-1.5 h-1.5 rounded-full"
                style={{ background: i === 2 ? 'var(--green)' : 'var(--primary)', boxShadow: `0 0 4px ${i === 2 ? 'var(--green)' : 'var(--primary)'}` }}
              />
              {s}
            </span>
          ))}
        </div>
      </div>

      {/* Main pane row */}
      <div className="flex flex-1 min-h-0">
        <ModelPane
          src={SPY_DRONE_URL}
          label="CARRIER CLASS — SPY DRONE"
          sublabel="LAUNCH PLATFORM // ACTIVE"
          badge="ARMED"
          badgeColor="#ff9900"
        />

        <LaunchTrajectory />

        <ModelPane
          src={BATTLE_DRONE_URL}
          label="PAYLOAD — BATTLE DRONE"
          sublabel="AUTONOMOUS ASSAULT UNIT"
          badge="IN FLIGHT"
          badgeColor="#00d4ff"
        />
      </div>
    </div>
  );
}
