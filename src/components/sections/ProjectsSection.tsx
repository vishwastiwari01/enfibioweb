'use client';

import { useState } from 'react';
import { PROJECTS } from '@/lib/data/projects';
import { ChevronDown, ExternalLink } from 'lucide-react';

export default function ProjectsSection() {
  const [isExpanded, setIsExpanded] = useState(false);

  // Map project code to available asset
  const imageMap: Record<string, string> = {
    'BHARATMAPS': '/assets/bharatmapspreview.jpeg',
    'FREEZER': '/thandaifinal.jpeg',
    'MEDGPT': '/assets/medgpt.png',
    'MINAR': '/assets/minar.png',
    'SAM': '/assets/SAM.jpeg',
    'HONEYPOT': '/assets/SAM.jpeg', // Honeypot doesn't have an explicit image, fallback
    'ASTRA': '/assets/astra_drone.png',
    'SIGINT': '/assets/signit.png',
    'FUNDRADAR': '/assets/fundradar.png',
    'AGRISWARM': '/assets/agriswarm_sim.mp4',
    'AWAAS': '/assets/awasdirect.png',
    'SMART-SEWAGE': '/assets/Smartflow.png',
    'LEARNMATE': '/assets/learnmate.png',
  };

  const priorityOrder = [
    'BHARATMAPS', 'FREEZER', 'MEDGPT', 'MINAR', 'SAM', 'HONEYPOT',
    'ASTRA', 'SIGINT', 'FUNDRADAR', 'AGRISWARM', 'AWAAS', 'SMART-SEWAGE', 'LEARNMATE'
  ];

  // Sort projects according to priorityOrder
  const sortedProjects = [...PROJECTS]
    .filter(p => priorityOrder.includes(p.code))
    .sort((a, b) => priorityOrder.indexOf(a.code) - priorityOrder.indexOf(b.code));

  // Top 3 are featured, rest are expandable
  const featuredProjects = sortedProjects.slice(0, 3);
  const otherProjects = sortedProjects.slice(3);

  const renderProjectCard = (project: typeof PROJECTS[0]) => {
    const assetUrl = imageMap[project.code];
    const isVideo = assetUrl?.endsWith('.mp4');

    return (
      <article key={project.id} className="border border-line rounded-[16px] overflow-hidden bg-[#fbfdfd] flex flex-col group hover:border-teal-700/30 transition-all hover:-translate-y-1 hover:shadow-[0_16px_35px_rgba(7,63,67,.06)]">
        {assetUrl ? (
          <div className="w-full h-[200px] relative bg-[#e8f1ef] border-b border-line overflow-hidden">
            {isVideo ? (
              <video src={assetUrl} autoPlay muted loop playsInline className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            ) : (
              <img src={assetUrl} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            )}
          </div>
        ) : (
           <div className="w-full h-[200px] relative bg-[#e8f1ef] border-b border-line flex items-center justify-center">
             <span className="text-teal-900/30 font-bold tracking-widest uppercase">{project.code}</span>
           </div>
        )}
        <div className="p-6 flex flex-col flex-1">
          <div className="flex justify-between items-start mb-3">
            <div className="text-teal-700 text-[0.65rem] tracking-[0.1em] font-bold uppercase">
              {project.domain}
            </div>
            <span className="text-[0.65rem] font-mono text-muted bg-white border border-line px-2 py-0.5 rounded-md">
              {project.specs.Status || 'Active Development'}
            </span>
          </div>
          
          <h3 className="text-[1.15rem] font-bold tracking-tight mb-1">{project.title}</h3>
          <p className="text-[0.8rem] text-teal-900 font-medium mb-3">{project.subtitle}</p>
          
          <p className="text-[0.85rem] text-muted leading-relaxed mb-5 flex-1">
            {project.desc}
          </p>

          <div className="mt-auto pt-4 border-t border-line/60 flex items-center justify-between">
            <button className="text-teal-800 font-extrabold text-[0.75rem] inline-flex items-center gap-1.5 hover:text-teal-600 transition-colors">
              Explore Project <ExternalLink size={14} />
            </button>
          </div>
        </div>
      </article>
    );
  };

  return (
    <section id="projects" className="py-16 md:py-24 relative overflow-hidden bg-white">
      <div className="container mx-auto w-[min(1180px,calc(100%-40px))]">
        
        <div className="reveal visible max-w-[680px] mb-12">
          <div className="eyebrow mb-4">Project Portfolio</div>
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4 text-ink">
            Featured Projects
          </h2>
          <p className="lead m-0">
            A selection of our active prototypes, deployed systems, and research platforms.
          </p>
        </div>

        {/* Featured Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10 reveal visible">
          {featuredProjects.map(renderProjectCard)}
        </div>

        {/* Expandable Other Projects Section */}
        <div className="border-t border-line pt-8 reveal visible">
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-2 font-bold text-ink hover:text-teal-800 transition-colors mx-auto"
          >
            {isExpanded ? 'Hide Full Portfolio' : 'Explore More Projects'}
            <ChevronDown size={18} className={`transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
          </button>

          <div 
            className={`grid transition-all duration-500 ease-in-out ${isExpanded ? 'grid-rows-[1fr] opacity-100 mt-10' : 'grid-rows-[0fr] opacity-0 mt-0 pointer-events-none'}`}
          >
            <div className="overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {otherProjects.map(renderProjectCard)}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
