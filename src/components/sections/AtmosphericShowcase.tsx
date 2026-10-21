"use client";

import React from 'react';
import Link from 'next/link';
import { CloudShader } from '@/components/ui/cloud-shader';
import { Radio, Snowflake, Shield, ArrowRight, Zap, Sparkles } from 'lucide-react';

export default function AtmosphericShowcase() {
  return (
    <section className="relative w-full h-[540px] sm:h-[580px] md:h-[640px] overflow-hidden border-y border-line">
      {/* Interactive WebGL Cloud Shader Canvas */}
      <CloudShader
        className="h-full w-full"
        speed={0.85}
        count={5}
        cloudColor="#f0fbf9"
        skyTopColor="#062b2e"
        skyBottomColor="#0f4d53"
      >
        {/* Glassmorphic Content Overlay */}
        <div className="container mx-auto px-4 sm:px-6 w-full max-w-6xl py-12 flex flex-col items-center justify-center text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-white text-xs font-mono font-bold tracking-wider uppercase mb-5 shadow-sm">
            <Sparkles size={13} className="text-teal-300 animate-pulse" />
            <span>Terrestrial & Atmospheric Resilience</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight max-w-4xl leading-[1.12] drop-shadow-md">
            Engineering Systems Built for <br />
            <span className="text-teal-200">
              Uncompromising Reliability
            </span>
          </h2>

          <p className="mt-4 text-sm sm:text-base md:text-lg text-white/90 max-w-2xl leading-relaxed drop-shadow">
            From connected vehicle safety across unpredictable roadways to solar-powered cryo-preservation in extreme off-grid terrains, Enfibio delivers deep-tech solutions with real-world impact.
          </p>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mt-8 w-full max-w-3xl">
            <div className="p-3.5 sm:p-4 rounded-xl bg-black/35 backdrop-blur-md border border-white/15 text-left">
              <div className="flex items-center gap-2 text-teal-300 mb-1">
                <Radio size={16} />
                <span className="text-[11px] font-mono uppercase font-bold tracking-wider">&lt; 10ms Telemetry</span>
              </div>
              <p className="text-xs text-white/80">Cooperative mesh alerts vehicles before optical sensors or human reaction.</p>
            </div>

            <div className="p-3.5 sm:p-4 rounded-xl bg-black/35 backdrop-blur-md border border-white/15 text-left">
              <div className="flex items-center gap-2 text-teal-300 mb-1">
                <Snowflake size={16} />
                <span className="text-[11px] font-mono uppercase font-bold tracking-wider">Zero Freon Cryo</span>
              </div>
              <p className="text-xs text-white/80">Thermoelectric solid-state cooling eliminating chemical refrigerant leaks.</p>
            </div>

            <div className="p-3.5 sm:p-4 rounded-xl bg-black/35 backdrop-blur-md border border-white/15 text-left">
              <div className="flex items-center gap-2 text-teal-300 mb-1">
                <Shield size={16} />
                <span className="text-[11px] font-mono uppercase font-bold tracking-wider">Edge Inference</span>
              </div>
              <p className="text-xs text-white/80">Autonomous decision-making independent of cellular cloud backhauls.</p>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
            <Link
              href="#catalog"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-teal-950 text-xs sm:text-sm font-bold hover:bg-teal-50 transition-all shadow-lg hover:shadow-xl cursor-pointer"
            >
              <span>Explore Project Showroom</span>
              <ArrowRight size={14} />
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-black/30 backdrop-blur-md border border-white/25 text-white text-xs sm:text-sm font-semibold hover:bg-black/50 transition-all cursor-pointer"
            >
              <span>Partner With Us</span>
            </Link>
          </div>
        </div>
      </CloudShader>
    </section>
  );
}
