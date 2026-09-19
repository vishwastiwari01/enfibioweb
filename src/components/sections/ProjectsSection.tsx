'use client';

import { useState } from 'react';
import { PROJECTS } from '@/lib/data/projects';
import { ChevronDown, ExternalLink } from 'lucide-react';

export default function ProjectsSection() {
  const [isExpanded, setIsExpanded] = useState(false);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  // Filter out the ones requested by user
  const otherProjects = PROJECTS.filter(p => !['TWINSPACE', 'AIROS', 'FREEZER'].includes(p.code));

  return (
    <section id="projects" className="py-16 md:py-24 relative overflow-hidden bg-white">
      <div className="container mx-auto w-[min(1180px,calc(100%-40px))]">
        
        <div className="reveal visible max-w-[680px] mb-12">
          <div className="eyebrow mb-4">Beyond one product</div>
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4 text-ink">
            Multiple directions.<br />One engineering mindset.
          </h2>
          <p className="lead m-0">
            Our project portfolio is evolving. Each direction is presented
            according to its current stage of research, prototyping, or exploration.
          </p>
        </div>

        {/* The 3 Core Directions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          
          <article className="border border-line rounded-[18px] p-7 bg-white min-h-[240px] flex flex-col reveal visible transition-all hover:-translate-y-1 hover:border-teal-700/30 hover:shadow-[0_16px_35px_rgba(7,63,67,.06)]">
            <div className="text-teal-700 text-[0.68rem] tracking-[0.12em] font-black uppercase mb-6">
              AgriTech · Flagship
            </div>
            <h3 className="text-xl font-bold tracking-tight mb-3">THAND.AI</h3>
            <p className="text-[0.86rem] text-muted leading-relaxed">
              Portable temperature-controlled storage prototype for practical cold-chain applications.
            </p>
            <button onClick={() => scrollTo('products')} className="mt-auto text-teal-800 font-extrabold text-[0.82rem] text-left hover:text-teal-600 transition-colors">
              View product →
            </button>
          </article>

          <article className="border border-line rounded-[18px] p-7 bg-white min-h-[240px] flex flex-col reveal visible transition-all hover:-translate-y-1 hover:border-teal-700/30 hover:shadow-[0_16px_35px_rgba(7,63,67,.06)]">
            <div className="text-teal-700 text-[0.68rem] tracking-[0.12em] font-black uppercase mb-6">
              Intelligent Hardware
            </div>
            <h3 className="text-xl font-bold tracking-tight mb-3">Embedded Systems</h3>
            <p className="text-[0.86rem] text-muted leading-relaxed">
              Exploring sensor-driven systems, thermal engineering, and connected hardware.
            </p>
            <button onClick={() => scrollTo('contact')} className="mt-auto text-teal-800 font-extrabold text-[0.82rem] text-left hover:text-teal-600 transition-colors">
              Discuss research →
            </button>
          </article>

          <article className="border border-line rounded-[18px] p-7 bg-white min-h-[240px] flex flex-col reveal visible transition-all hover:-translate-y-1 hover:border-teal-700/30 hover:shadow-[0_16px_35px_rgba(7,63,67,.06)]">
            <div className="text-teal-700 text-[0.68rem] tracking-[0.12em] font-black uppercase mb-6">
              AI & Emerging Tech
            </div>
            <h3 className="text-xl font-bold tracking-tight mb-3">Applied Intelligence</h3>
            <p className="text-[0.86rem] text-muted leading-relaxed">
              Developing practical AI tools and technology concepts for real-world workflows.
            </p>
            <button onClick={() => scrollTo('contact')} className="mt-auto text-teal-800 font-extrabold text-[0.82rem] text-left hover:text-teal-600 transition-colors">
              Connect with us →
            </button>
          </article>
        </div>

        {/* Expandable Other Projects Section */}
        <div className="border-t border-line pt-8 reveal visible">
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-2 font-bold text-ink hover:text-teal-800 transition-colors mx-auto"
          >
            {isExpanded ? 'Hide Full Portfolio' : 'View Full Portfolio'}
            <ChevronDown size={18} className={`transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
          </button>

          <div 
            className={`grid transition-all duration-500 ease-in-out ${isExpanded ? 'grid-rows-[1fr] opacity-100 mt-10' : 'grid-rows-[0fr] opacity-0 mt-0 pointer-events-none'}`}
          >
            <div className="overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {otherProjects.map(project => {
                  
                  // Map project code to available asset
                  const imageMap: Record<string, string> = {
                    'MINAR': '/assets/minar.png',
                    'AWAAS': '/assets/awasdirect.png',
                    'SMART-SEWAGE': '/assets/Smartflow.png',
                    'LEARNMATE': '/assets/learnmate.png',
                    'FUNDRADAR': '/assets/fundradar.png',
                    'SAM': '/assets/SAM.jpeg',
                    'SIGINT': '/assets/signit.png',
                    'MEDGPT': '/assets/medgpt.png',
                  };
                  const imageUrl = imageMap[project.code];

                  return (
                    <article key={project.id} className="border border-line rounded-[16px] overflow-hidden bg-[#fbfdfd] flex flex-col group hover:border-teal-700/30 transition-colors shadow-sm">
                      {imageUrl && (
                        <div className="w-full h-[180px] relative bg-[#e8f1ef] border-b border-line overflow-hidden">
                          <img src={imageUrl} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                        </div>
                      )}
                      <div className="p-6 flex flex-col flex-1">
                        <div className="flex justify-between items-start mb-3">
                          <div className="text-teal-700 text-[0.65rem] tracking-[0.1em] font-bold uppercase">
                            {project.domain}
                          </div>
                          <span className="text-[0.65rem] font-mono text-muted bg-white border border-line px-2 py-0.5 rounded-md">
                            {project.code}
                          </span>
                        </div>
                        
                        <h3 className="text-[1.15rem] font-bold tracking-tight mb-1">{project.title}</h3>
                        <p className="text-[0.8rem] text-teal-900 font-medium mb-3">{project.subtitle}</p>
                        
                        <p className="text-[0.85rem] text-muted leading-relaxed mb-5 flex-1">
                          {project.desc}
                        </p>

                        <div className="mt-auto pt-4 border-t border-line/60 grid grid-cols-2 gap-y-2 gap-x-4">
                          {Object.entries(project.specs).slice(0,2).map(([k, v]) => (
                            <div key={k}>
                              <span className="block text-[0.65rem] text-muted uppercase font-bold tracking-wide">{k}</span>
                              <span className="block text-[0.75rem] font-medium text-ink truncate" title={v as string}>{v as string}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
