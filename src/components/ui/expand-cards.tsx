'use client';

import { useState } from "react";
import { FOUNDERS } from "@/lib/data/founders";

export const FoundersExpandCards = () => {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const getWidth = (index: number) =>
    index === expandedIndex ? "28rem" : "6rem";

  return (
    <div className="w-full flex items-center justify-center py-6 transition-all duration-300 ease-in-out">
      <div className="flex w-full items-center justify-center gap-4">
        {FOUNDERS.map((founder, idx) => (
          <div
            key={idx}
            className={`relative cursor-pointer overflow-hidden rounded-2xl transition-all duration-500 ease-in-out border`}
            style={{
              width: getWidth(idx),
              height: "420px",
              borderColor: expandedIndex === idx ? founder.color : 'rgba(255,255,255,0.1)',
            }}
            onMouseEnter={() => setExpandedIndex(idx)}
            onClick={() => setExpandedIndex(idx)}
          >
            <div className="absolute inset-0">
              <img
                className="w-full h-full object-cover opacity-80"
                src={founder.avatar}
                alt={founder.name}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent"></div>
            </div>
            
            <div className="absolute inset-0 flex flex-col justify-end p-6">
              <div className="flex items-center gap-3 mb-2">
                <span className="font-bold text-sm tracking-widest uppercase px-2 py-1 rounded-sm" style={{ backgroundColor: `${founder.color}20`, color: founder.color, border: `1px solid ${founder.color}40` }}>
                  {founder.layer}
                </span>
              </div>
              <h3 className="text-white font-bold font-display text-2xl mb-1 truncate whitespace-nowrap">
                {founder.name}
              </h3>
              
              <div className={`transition-all duration-500 overflow-hidden ${expandedIndex === idx ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}>
                <p className="text-white/80 font-semibold mb-3 text-sm">{founder.role}</p>
                <div className="text-white/60 font-medium italic mb-3 text-sm border-l-2 pl-3" style={{ borderColor: founder.color }}>
                  {founder.ethos}
                </div>
                <div className="text-white/50 text-xs font-semibold leading-relaxed">
                  <span className="text-white/70">Specialty:</span> {founder.specialty}
                </div>
              </div>
            </div>
            
            {/* When collapsed, show vertical text */}
            <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${expandedIndex === idx ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
               <h3 className="text-white font-bold tracking-widest text-lg whitespace-nowrap transform -rotate-90">
                 {founder.name.split(' ')[0]}
               </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
