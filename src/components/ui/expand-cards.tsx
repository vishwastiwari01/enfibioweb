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
              <div className="flex items-center gap-3">
                <h3 className="text-white font-bold font-display text-2xl mb-1 truncate whitespace-nowrap">
                  {founder.name}
                </h3>
                {founder.linkedin && (
                  <a href={founder.linkedin} target="_blank" rel="noopener noreferrer" className="opacity-60 hover:opacity-100 transition-opacity" onClick={(e) => e.stopPropagation()}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-white">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                )}
              </div>
              
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
