'use client';

import React from 'react';
import { Leaf, Globe, Cpu, ShieldCheck, ArrowRight } from 'lucide-react';

export default function ImpactRibbon() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const pillars = [
    {
      icon: Leaf,
      title: 'Sustainable Technology',
      desc: 'Environmentally-conscious engineering'
    },
    {
      icon: Globe,
      title: 'Real-World Impact',
      desc: 'Proven through ground prototypes'
    },
    {
      icon: Cpu,
      title: 'AI-Powered Innovation',
      desc: 'Predictive thermal & edge inference'
    },
    {
      icon: ShieldCheck,
      title: 'Built for a Resilient Tomorrow',
      desc: 'Mission-critical hardware durability'
    }
  ];

  return (
    <section className="py-8 bg-[#f5f9f8] border-y border-line/80">
      <div className="container mx-auto w-[min(1280px,calc(100%-40px))]">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 items-center">
          
          {pillars.map((p, idx) => (
            <div key={idx} className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white border border-line flex items-center justify-center text-teal-800 shadow-xs shrink-0">
                <p.icon size={18} />
              </div>
              <div>
                <strong className="block text-xs font-bold text-ink leading-tight">
                  {p.title}
                </strong>
                <span className="text-[10px] text-muted hidden sm:block leading-tight">
                  {p.desc}
                </span>
              </div>
            </div>
          ))}

          {/* Action button */}
          <div className="col-span-2 sm:col-span-1 lg:col-span-1 flex justify-start lg:justify-end">
            <button
              onClick={() => scrollTo('about')}
              className="btn btn-secondary btn-small text-xs py-2 px-4 w-full sm:w-auto"
            >
              Our Mission <ArrowRight size={13} />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
