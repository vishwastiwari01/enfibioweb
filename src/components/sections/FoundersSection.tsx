'use client';

import { Mail } from 'lucide-react';

const LinkedInIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
  </svg>
);

const FOUNDERS = [
  {
    initials: 'VT',
    name: 'Vishwas Tiwari',
    role: 'Co-Founder',
    focus: 'AI Systems & Product Development',
    linkedin: 'https://linkedin.com/in/vishwastiwari',
  },
  {
    initials: 'SP',
    name: 'Shardul Pande',
    role: 'Co-Founder',
    focus: 'AI & Data Systems',
    linkedin: 'https://linkedin.com/in/shardulpande',
  },
  {
    initials: 'RG',
    name: 'Raj Goel',
    role: 'Co-Founder',
    focus: 'Embedded Systems & Robotics',
    linkedin: 'https://linkedin.com/in/rajgoel',
  },
];

export default function FoundersSection() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="team" className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto w-[min(1180px,calc(100%-40px))]">
        
        <div className="reveal visible mb-[55px]">
          <div className="eyebrow mb-4">Our Team</div>
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-2 text-ink">Engineers. Builders. Problem Solvers.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 reveal visible items-center">
          
          {FOUNDERS.map(founder => (
            <div key={founder.name} className="flex items-center gap-4 group">
              <div className="w-[64px] h-[64px] shrink-0 rounded-full bg-teal-900 text-white grid place-items-center font-bold text-xl">
                {founder.initials}
              </div>
              <div className="flex flex-col">
                <strong className="text-[1.05rem] font-bold text-ink leading-tight">{founder.name}</strong>
                <span className="text-[0.78rem] text-muted leading-tight mb-1">{founder.role}</span>
                <span className="text-[0.72rem] text-teal-700 leading-tight mb-2">{founder.focus}</span>
                <a 
                  href={founder.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-7 h-7 rounded-md bg-surface text-teal-800 grid place-items-center transition-colors group-hover:bg-teal-900 group-hover:text-white"
                >
                  <LinkedInIcon />
                </a>
              </div>
            </div>
          ))}

          {/* CTA panel */}
          <div className="flex flex-col p-6 rounded-[18px] bg-teal-950 text-white lg:ml-auto w-full lg:max-w-sm">
            <h3 className="text-lg font-bold mb-2">Let's Build What's Next</h3>
            <p className="text-[#b4d0ce] text-[0.8rem] mb-5">
              We're open to incubation, research collaboration, industry partnerships and funding opportunities.
            </p>
            <button onClick={() => scrollTo('contact')} className="btn btn-primary self-start min-h-[40px] px-5 py-2 text-[0.8rem]">
              Get in Touch →
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
