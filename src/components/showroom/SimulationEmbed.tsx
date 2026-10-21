'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Maximize2, Minimize2, ExternalLink, RefreshCw, Box, AlertCircle, Smartphone } from 'lucide-react';

interface SimulationEmbedProps {
  simulationUrl: string;
  title: string;
  projectCode: string;
  className?: string;
}

export default function SimulationEmbed({
  simulationUrl,
  title,
  projectCode,
  className = '',
}: SimulationEmbedProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [hasError, setHasError] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // Sync fullscreen change with browser fullscreen change
  useEffect(() => {
    const handleFullscreenChange = () => {
      const isNowFullscreen = !!document.fullscreenElement;
      setIsFullscreen(isNowFullscreen);

      // Trigger resize inside iframe so Three.js adapts immediately
      setTimeout(() => {
        if (iframeRef.current?.contentWindow) {
          iframeRef.current.contentWindow.dispatchEvent(new Event('resize'));
        }
      }, 150);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  const toggleFullscreen = async () => {
    if (!containerRef.current) return;

    try {
      if (!document.fullscreenElement) {
        if (containerRef.current.requestFullscreen) {
          await containerRef.current.requestFullscreen();
        } else if ((containerRef.current as any).webkitRequestFullscreen) {
          await (containerRef.current as any).webkitRequestFullscreen();
        }
      } else {
        if (document.exitFullscreen) {
          await document.exitFullscreen();
        } else if ((document as any).webkitExitFullscreen) {
          await (document as any).webkitExitFullscreen();
        }
      }
    } catch {
      // CSS fullscreen fallback
      setIsFullscreen(!isFullscreen);
      setTimeout(() => {
        if (iframeRef.current?.contentWindow) {
          iframeRef.current.contentWindow.dispatchEvent(new Event('resize'));
        }
      }, 150);
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
      style={{
        position: isFullscreen ? 'fixed' : 'relative',
        top: isFullscreen ? 0 : undefined,
        left: isFullscreen ? 0 : undefined,
        width: isFullscreen ? '100vw' : '100%',
        height: isFullscreen ? '100vh' : undefined,
        zIndex: isFullscreen ? 99999 : undefined,
      }}
      className={`w-full rounded-2xl md:rounded-3xl border border-line bg-[#f6f5f0] overflow-hidden shadow-xl transition-all ${
        isFullscreen
          ? 'fixed inset-0 rounded-none border-none'
          : 'h-[540px] sm:h-[650px] md:h-[760px] lg:h-[820px]'
      } ${className}`}
    >
      {/* Floating Top Header Badges */}
      <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-20 pointer-events-none flex items-center gap-2">
        <div className="pointer-events-auto flex items-center gap-1.5 sm:gap-2 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-line shadow-xs text-[11px] sm:text-xs font-bold text-ink">
          <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          <Box size={13} className="text-teal-800" />
          <span>3D Hardware Anatomy</span>
        </div>
        <span className="hidden sm:inline-block pointer-events-auto text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/90 backdrop-blur-md border border-line text-muted">
          {projectCode}
        </span>
      </div>

      {/* Floating Action Controls on Top Right */}
      <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 flex items-center gap-1.5 sm:gap-2">
        <span className="hidden xl:inline-flex items-center text-[11px] font-medium text-muted bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full border border-line shadow-xs">
          Drag: Rotate • Scroll: Zoom
        </span>

        <button
          onClick={reloadSimulation}
          className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-line bg-white/95 backdrop-blur-md hover:bg-white text-ink flex items-center justify-center shadow-xs transition-colors cursor-pointer"
          title="Reload 3D Scene"
          aria-label="Reload Simulation"
        >
          <RefreshCw size={12} className={isLoading ? 'animate-spin' : ''} />
        </button>

        <a
          href={simulationUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full border border-line bg-white/95 backdrop-blur-md hover:bg-white text-[11px] sm:text-xs font-semibold text-ink shadow-xs transition-colors cursor-pointer"
          title="Open standalone experience in new tab"
        >
          <span>Standalone</span>
          <ExternalLink size={11} />
        </a>

        {/* Primary Fullscreen Action */}
        <button
          onClick={toggleFullscreen}
          className="inline-flex items-center gap-1.5 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full border border-teal-900 bg-teal-900 text-white hover:bg-teal-800 shadow-md transition-all cursor-pointer text-xs font-bold"
          title={isFullscreen ? 'Exit Fullscreen' : 'View Fullscreen'}
          aria-label={isFullscreen ? 'Exit Fullscreen' : 'View Fullscreen'}
        >
          {isFullscreen ? <Minimize2 size={13} /> : <Maximize2 size={13} />}
          <span className="hidden sm:inline">{isFullscreen ? 'Exit' : 'Fullscreen'}</span>
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
          <div className="text-center px-4">
            <p className="text-sm font-bold text-ink">Rendering 3D System Anatomy</p>
            <p className="text-xs text-muted">Loading CAD geometry, shaders & telemetry...</p>
          </div>
        </div>
      )}

      {/* Fallback Error Display */}
      {hasError && (
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-white p-6 text-center">
          <AlertCircle size={36} className="text-amber-600 mb-3" />
          <h4 className="text-base font-bold text-ink mb-1">Interactive Simulation Loading Paused</h4>
          <p className="text-xs text-muted max-w-md mb-4">
            The interactive WebGL simulation could not be rendered inside this frame. Launch it directly in standalone mode.
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

      {/* Absolutely Sized Iframe Stretching 100% of Container */}
      <iframe
        ref={iframeRef}
        src={simulationUrl}
        title={`${title} 3D Hardware Simulation`}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          border: 'none',
          display: 'block',
          background: 'transparent',
        }}
        allow="accelerometer; autoplay; camera; encrypted-media; gyroscope; picture-in-picture; fullscreen"
        loading="lazy"
        onLoad={() => {
          setIsLoading(false);
          // Trigger resize on iframe window once loaded so Three.js measures container accurately
          setTimeout(() => {
            if (iframeRef.current?.contentWindow) {
              iframeRef.current.contentWindow.dispatchEvent(new Event('resize'));
            }
          }, 100);
        }}
        onError={() => {
          setIsLoading(false);
          setHasError(true);
        }}
      />
    </div>
  );
}
