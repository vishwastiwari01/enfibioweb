'use client';

import React, { useState, useRef } from 'react';
import { Maximize2, Minimize2, ExternalLink, RefreshCw, Box, AlertCircle } from 'lucide-react';

interface SimulationEmbedProps {
  simulationUrl: string;
  title: string;
  projectCode: string;
  className?: string;
  minHeight?: string;
}

export default function SimulationEmbed({
  simulationUrl,
  title,
  projectCode,
  className = '',
  minHeight = 'min-h-[560px]'
}: SimulationEmbedProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [hasError, setHasError] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const toggleFullscreen = async () => {
    if (!containerRef.current) return;

    try {
      if (!document.fullscreenElement) {
        await containerRef.current.requestFullscreen();
        setIsFullscreen(true);
      } else {
        await document.exitFullscreen();
        setIsFullscreen(false);
      }
    } catch {
      // Fallback to internal CSS toggle
      setIsFullscreen(!isFullscreen);
    }
  };

  const reloadSimulation = () => {
    setIsLoading(true);
    setHasError(false);
    if (iframeRef.current) {
      iframeRef.current.src = simulationUrl;
    }
  };

  return (
    <div
      ref={containerRef}
      className={`relative w-full rounded-2xl md:rounded-3xl border border-line bg-[#f5f7f6] overflow-hidden shadow-lg transition-all ${
        isFullscreen ? 'fixed inset-0 z-[9999] rounded-none border-none' : minHeight
      } ${className}`}
    >
      {/* Top Simulation Toolbar */}
      <div className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-4 py-3 bg-white/90 backdrop-blur-md border-b border-line/80">
        <div className="flex items-center gap-2.5">
          <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
          <div className="flex items-center gap-2">
            <Box size={16} className="text-teal-800" />
            <span className="text-xs font-bold text-ink tracking-tight uppercase">
              Interactive 3D Hardware Anatomy
            </span>
          </div>
          <span className="hidden sm:inline-block text-[11px] font-mono px-2 py-0.5 rounded bg-surface border border-line text-muted">
            {projectCode}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="hidden md:inline-block text-[11px] text-muted mr-2">
            Drag to rotate • Scroll to zoom
          </span>

          <button
            onClick={reloadSimulation}
            className="p-1.5 rounded-lg border border-line bg-white hover:bg-surface text-ink transition-colors"
            title="Reload 3D Scene"
            aria-label="Reload Simulation"
          >
            <RefreshCw size={14} className={isLoading ? 'animate-spin' : ''} />
          </button>

          <a
            href={simulationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-line bg-white hover:bg-surface text-xs font-semibold text-ink transition-colors"
            title="Open standalone experience in full window"
          >
            <span className="hidden sm:inline">Standalone</span>
            <ExternalLink size={13} />
          </a>

          <button
            onClick={toggleFullscreen}
            className="p-1.5 rounded-lg border border-line bg-teal-900 text-white hover:bg-teal-800 transition-colors"
            title={isFullscreen ? 'Exit Fullscreen' : 'View Fullscreen'}
            aria-label={isFullscreen ? 'Exit Fullscreen' : 'View Fullscreen'}
          >
            {isFullscreen ? <Minimize2 size={14} /> : <Maximize2 size={14} />}
          </button>
        </div>
      </div>

      {/* Loading Overlay */}
      {isLoading && !hasError && (
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-[#f8faf9] gap-4">
          <div className="relative w-12 h-12 flex items-center justify-center">
            <div className="absolute inset-0 rounded-full border-2 border-teal-200 animate-ping opacity-25" />
            <div className="w-10 h-10 rounded-full border-2 border-t-teal-700 border-teal-100 animate-spin" />
            <Box size={18} className="text-teal-800" />
          </div>
          <div className="text-center">
            <p className="text-sm font-bold text-ink">Initializing 3D Anatomy Engine</p>
            <p className="text-xs text-muted">Loading procedural CAD layers, shaders & telemetry...</p>
          </div>
        </div>
      )}

      {/* Fallback Error Display */}
      {hasError && (
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-white p-6 text-center">
          <AlertCircle size={36} className="text-amber-600 mb-3" />
          <h4 className="text-base font-bold text-ink mb-1">Interactive Simulation Loading Paused</h4>
          <p className="text-xs text-muted max-w-md mb-4">
            The interactive WebGL simulation could not be embedded directly in this context. You can still inspect it in full standalone mode.
          </p>
          <a
            href={simulationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-small text-xs"
          >
            Launch Standalone 3D Experience <ExternalLink size={13} />
          </a>
        </div>
      )}

      {/* Embedded Iframe */}
      <iframe
        ref={iframeRef}
        src={simulationUrl}
        title={`${title} 3D Hardware Simulation`}
        className="w-full h-full pt-12 border-none bg-transparent"
        allow="accelerometer; autoplay; camera; encrypted-media; gyroscope; picture-in-picture; fullscreen"
        loading="lazy"
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setIsLoading(false);
          setHasError(true);
        }}
      />
    </div>
  );
}
