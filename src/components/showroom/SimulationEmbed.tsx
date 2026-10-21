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
  minHeight = 'h-[680px] sm:h-[760px] lg:h-[840px]'
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
      style={isFullscreen ? { height: '100vh', width: '100vw' } : {}}
      className={`relative w-full rounded-2xl md:rounded-3xl border border-line bg-[#f6f5f0] overflow-hidden shadow-xl transition-all ${
        isFullscreen ? 'fixed inset-0 z-[9999] rounded-none border-none' : minHeight
      } ${className}`}
    >
      {/* Floating Top Header Badges */}
      <div className="absolute top-4 left-4 z-20 pointer-events-none flex items-center gap-2">
        <div className="pointer-events-auto flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-line shadow-sm text-xs font-bold text-ink">
          <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          <Box size={13} className="text-teal-800" />
          <span>Interactive 3D Anatomy</span>
        </div>
        <span className="pointer-events-auto text-[11px] font-mono px-2.5 py-1 rounded-full bg-white/80 backdrop-blur-md border border-line text-muted shadow-xs">
          {projectCode}
        </span>
      </div>

      {/* Floating Action Controls on Top Right */}
      <div className="absolute top-4 right-4 z-20 flex items-center gap-2">
        <span className="hidden lg:inline-flex items-center text-[11px] font-medium text-muted bg-white/80 backdrop-blur-md px-2.5 py-1 rounded-full border border-line shadow-xs">
          Rotate: Drag • Zoom: Scroll
        </span>

        <button
          onClick={reloadSimulation}
          className="w-8 h-8 rounded-full border border-line bg-white/90 backdrop-blur-md hover:bg-white text-ink flex items-center justify-center shadow-sm transition-colors cursor-pointer"
          title="Reload 3D Scene"
          aria-label="Reload Simulation"
        >
          <RefreshCw size={13} className={isLoading ? 'animate-spin' : ''} />
        </button>

        <a
          href={simulationUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-line bg-white/90 backdrop-blur-md hover:bg-white text-xs font-semibold text-ink shadow-sm transition-colors cursor-pointer"
          title="Open standalone experience in new tab"
        >
          <span>Standalone</span>
          <ExternalLink size={12} />
        </a>

        <button
          onClick={toggleFullscreen}
          className="w-8 h-8 rounded-full border border-teal-900 bg-teal-900 text-white hover:bg-teal-800 flex items-center justify-center shadow-sm transition-colors cursor-pointer"
          title={isFullscreen ? 'Exit Fullscreen' : 'View Fullscreen'}
          aria-label={isFullscreen ? 'Exit Fullscreen' : 'View Fullscreen'}
        >
          {isFullscreen ? <Minimize2 size={13} /> : <Maximize2 size={13} />}
        </button>
      </div>

      {/* Loading Overlay */}
      {isLoading && !hasError && (
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-[#f6f5f0] gap-4">
          <div className="relative w-12 h-12 flex items-center justify-center">
            <div className="absolute inset-0 rounded-full border-2 border-teal-200 animate-ping opacity-25" />
            <div className="w-10 h-10 rounded-full border-2 border-t-teal-700 border-teal-100 animate-spin" />
            <Box size={18} className="text-teal-800" />
          </div>
          <div className="text-center">
            <p className="text-sm font-bold text-ink">Rendering 3D System Anatomy</p>
            <p className="text-xs text-muted">Initializing WebGL shaders, CAD geometry & callout pins...</p>
          </div>
        </div>
      )}

      {/* Fallback Error Display */}
      {hasError && (
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-white p-6 text-center">
          <AlertCircle size={36} className="text-amber-600 mb-3" />
          <h4 className="text-base font-bold text-ink mb-1">Interactive Simulation Loading Paused</h4>
          <p className="text-xs text-muted max-w-md mb-4">
            The interactive WebGL simulation could not be rendered inside this frame. Launch it directly in standalone mode for the complete hardware experience.
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

      {/* The Iframe Filling the Container */}
      <iframe
        ref={iframeRef}
        src={simulationUrl}
        title={`${title} 3D Hardware Simulation`}
        className="w-full h-full border-none block bg-transparent"
        style={{ width: '100%', height: '100%' }}
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
