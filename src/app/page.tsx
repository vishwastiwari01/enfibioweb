'use client';

import { useState, useEffect } from 'react';
import { PROJECTS } from '@/lib/data/projects';
import { LinkPreview } from '@/components/ui/link-preview';
import { WordsPullUp } from '@/components/ui/words-pull-up';
import { FoundersExpandCards } from '@/components/ui/expand-cards';
import { FOUNDERS } from '@/lib/data/founders';
import Head from 'next/head';

export default function Home() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [previewMedia, setPreviewMedia] = useState<{type: 'video'|'image', src: string} | null>(null);

  // Animation observer for reveal effect
  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add('visible');
      });
    }, { threshold: 0.07 });
    
    document.querySelectorAll('.reveal').forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [activeFilter]);

  const filteredProjects = activeFilter === 'all'
    ? PROJECTS
    : PROJECTS.filter(p => p.cat === activeFilter || p.domain.toLowerCase().includes(activeFilter));

  const getProjectUrl = (code: string) => {
    if (code === 'HONEYPOT') return 'https://cyber-rakshak-frontend.vercel.app';
    if (code === 'MEDGPT') return 'https://medgpt-website.vercel.app';
    if (code === 'MINAR') return 'https://minar-theta.vercel.app';
    if (code === 'AWAAS') return 'https://awaasdirect.vercel.app';
    if (code === 'SMART-SEWAGE') return 'https://smart-sewage-system-rytr.vercel.app/login';
    if (code === 'LEARNMATE') return 'https://learnmate-nextjs.vercel.app';
    if (code === 'TWINSPACE') return 'https://idex-aditi-4-0.vercel.app';
    if (code === 'FUNDRADAR') return 'https://fundradar-swart.vercel.app';
    return null;
  };

  const getProjectImage = (code: string) => {
    if (code === 'SAM') return '/assets/SAM.jpeg';
    if (code === 'MEDGPT') return '/assets/medgpt.png';
    if (code === 'SIGINT') return '/assets/signit.png';
    if (code === 'MINAR') return '/assets/minar.png';
    if (code === 'AWAAS') return '/assets/awasdirect.png';
    if (code === 'SMART-SEWAGE') return '/assets/Smartflow.png';
    if (code === 'LEARNMATE') return '/assets/learnmate.png';
    if (code === 'FUNDRADAR') return '/assets/fundradar.png';
    if (code === 'FREEZER') return '/assets/smartportablefreezer.jpeg';
    if (code === 'ASTRA') return '/assets/swarm.jpeg';
    if (code === 'AIROS') return '/assets/disaster reponse drone.jpeg';
    if (code === 'TWINSPACE') return '/assets/autonomoustruck.png';
    if (code === 'BHARATMAPS') return '/assets/bharatmapspreview.jpeg';
    return null;
  };

  const getProjectVideo = (code: string) => {
    if (code === 'BHARATMAPS') return '/assets/bharatmaps.mp4';
    if (code === 'AGRISWARM') return '/assets/agriswarm_sim.mp4';
    return null;
  };

  return (
    <>
      <Head>
        <title>Enfibio Technologies — Autonomous Intelligence Systems</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      {/* TICKER */}
      <div className="ticker-wrap">
        <div className="ticker-track">
          {[...Array(2)].map((_, i) => (
            <div key={i} style={{ display: 'flex' }}>
              <span className="ticker-item"><span className="ticker-dot">◆</span> <strong className="font-bold">ASTRA-04</strong>: Signal stable · Formation delta active</span>
              <span className="ticker-item"><span className="ticker-dot">◆</span> <strong className="font-bold">SIGINT-01</strong>: Spectrum sweep 2.4–5.8GHz complete</span>
              <span className="ticker-item"><span className="ticker-dot">◆</span> <strong className="font-bold">EMITTER-02</strong>: Weak contact · CEP 18m · Refining</span>
              <span className="ticker-item"><span className="ticker-dot">◆</span> <strong className="font-bold">MEDGPT-SRV</strong>: Clinical DB sync · 99.7% uptime</span>
              <span className="ticker-item"><span className="ticker-dot">◆</span> <strong className="font-bold">OPENCLAW-A1</strong>: Task complete · Memory persisted</span>
              <span className="ticker-item"><span className="ticker-dot">◆</span> <strong className="font-bold">HONEYPOT-03</strong>: Probe detected · Profiling initiated</span>
              <span className="ticker-item"><span className="ticker-dot">◆</span> <strong className="font-bold">SAM-CORE</strong>: Autonomous code review completed · Vibe coding active</span>
              <span className="ticker-item"><span className="ticker-dot">◆</span> <strong className="font-bold">CHIP-DEV</strong>: Power draw 4.2W · Within envelope</span>
              <span className="ticker-item"><span className="ticker-dot">◆</span> <strong className="font-bold">AIROS-01</strong>: Sensor fusion nominal · 6DOF locked</span>
              <span className="ticker-item"><span className="ticker-dot">◆</span> <strong className="font-bold">C2-NODE-07</strong>: Link degraded · Rerouting via mesh</span>
              <span className="ticker-item"><span className="ticker-dot">◆</span> <strong className="font-bold">ISR-FUSE</strong>: 3 sources merged · Confidence 0.91</span>
              <span className="ticker-item"><span className="ticker-dot">◆</span> <strong className="font-bold">EDGE-NODE</strong>: GPU load 45% · Latency 12ms</span>
              <span className="ticker-item"><span className="ticker-dot">◆</span> <strong className="font-bold">TWINSPACE</strong>: Sim epoch 2847 complete · Loss 0.003</span>
              <span className="ticker-item"><span className="ticker-dot">◆</span> <strong className="font-bold">HELI-GLIDE</strong>: Autorotation model calibrated</span>
              <span className="ticker-item"><span className="ticker-dot">◆</span> <strong className="font-bold">FREEZER-02</strong>: Temp spike +1.2°C · Compensating</span>
            </div>
          ))}
        </div>
      </div>

      {/* HEADER */}
      <header>
        <a href="#" className="logo font-bold">Enfibio Technologies<span className="logo-dot">.</span></a>
        <nav>
          <a href="#mission" className="navlink font-semibold">Mission</a>
          <a href="#founders" className="navlink font-semibold">The Founders</a>
          <a href="#projects" className="navlink font-semibold">Project Board</a>
          <a href="#capabilities" className="navlink font-semibold">Capabilities</a>
          <a href="mailto:enfibiotechnologiespvtltd@gmail.com" className="nav-contact font-bold">enfibiotechnologiespvtltd@gmail.com</a>
        </nav>
      </header>

      {/* HERO */}
      <section className="hero" id="mission">
        <div>
          <div className="hero-kicker font-bold">Hyderabad, India &nbsp;·&nbsp; Est. 2026</div>
          <h1 className="font-bold">
            <WordsPullUp text="Building the " className="inline-block" />
            <em className="font-bold"><WordsPullUp text="Intelligence Layer" className="inline-block" /></em>
            <WordsPullUp text=" of the Real World." className="inline-block" />
          </h1>
          <p className="hero-sub font-medium">Architecting decentralized autonomy for contested domains. We design and deploy multi-agent drone swarms, real-time command-and-control mesh networks, and custom neuromorphic silicon to power next-generation operational intelligence.</p>
          <div className="hero-actions">
            <button className="btn-primary" onClick={() => document.getElementById('projects')?.scrollIntoView({behavior:'smooth'})}>Access Portfolio Directory</button>
            <button className="btn-secondary" onClick={() => document.getElementById('capabilities')?.scrollIntoView({behavior:'smooth'})}>Our Capabilities</button>
          </div>
        </div>
        <div>
          <div className="capability-tags font-semibold">
            <div className="cap-tag">Decentralized Swarm Intelligence</div>
            <div className="cap-tag">Multi-Agent Reinforcement Learning</div>
            <div className="cap-tag">Hardware-in-the-Loop Edge Inference</div>
            <div className="cap-tag">Post-Quantum Cryptographic C2 Mesh</div>
            <div className="cap-tag">Frontier Neuromorphic Processing</div>
          </div>
          <div className="hero-stats font-semibold">
            <div className="stat-item"><div className="stat-num font-bold">36<span className="stat-unit font-bold">×</span></div><div className="stat-lbl font-bold">Swarm Nodes</div></div>
            <div className="stat-item"><div className="stat-num font-bold">14</div><div className="stat-lbl font-bold">Active Projects</div></div>
            <div className="stat-item"><div className="stat-num font-bold">12<span className="stat-unit font-bold">ms</span></div><div className="stat-lbl font-bold">Mesh Latency</div></div>
            <div className="stat-item"><div className="stat-num font-bold">4.2<span className="stat-unit font-bold">W</span></div><div className="stat-lbl font-bold">Per-Node Draw</div></div>
          </div>
        </div>
      </section>

      <section className="section" id="founders">
        <div className="sec-eyebrow font-bold">The Architecture Team</div>
        <h2 className="font-bold">Founders</h2>
        <p className="sec-desc font-medium">Three builders, three layers. Together they cover every dimension of autonomous intelligence — from silicon to swarm to insight.</p>
        <div className="mt-8 founders-grid">
          {FOUNDERS.map((founder, idx) => (
            <div key={idx} className="founder-card reveal" style={{ borderTop: `4px solid ${founder.color}` }}>
              <div className="founder-badge font-bold" style={{ color: founder.color, backgroundColor: `${founder.color}15`, border: `1px solid ${founder.color}30` }}>
                {founder.layer}
              </div>
              
              <div className="flex items-center gap-3">
                <div className="founder-name font-bold" style={{ fontSize: '1.5rem', marginBottom: 0 }}>
                  {founder.name}
                </div>
                {founder.linkedin && (
                  <a href={founder.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                )}
              </div>
              
              <div className="founder-role font-bold mt-1 text-slate-300">{founder.role}</div>
              <div className="founder-ethos font-semibold italic opacity-80 mt-4 border-l-2 pl-3" style={{ borderColor: founder.color }}>{founder.ethos}</div>
              
              <div className="mt-5 text-sm font-medium text-slate-400 leading-relaxed">
                <span className="text-slate-200">Specialty:</span> {founder.specialty}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECT BOARD */}
      <section className="section" id="projects">
        <div className="sec-eyebrow font-bold">The VC Directory Matrix</div>
        <h2 className="font-bold">Project Board</h2>
        <p className="sec-desc font-medium">Hover any project for the full technical matrix. Fourteen active projects across defense intelligence, AI systems, frontier hardware, and systems platforms.</p>
        
        <div className="proj-filters font-bold">
          <button className={`pf-btn font-bold ${activeFilter === 'all' ? 'active' : ''}`} onClick={() => setActiveFilter('all')}>All ({PROJECTS.length})</button>
          <button className={`pf-btn font-bold ${activeFilter === 'defense' ? 'active' : ''}`} onClick={() => setActiveFilter('defense')}>Defense</button>
          <button className={`pf-btn font-bold ${activeFilter === 'intel' ? 'active' : ''}`} onClick={() => setActiveFilter('intel')}>AI Intelligence</button>
          <button className={`pf-btn font-bold ${activeFilter === 'hardware' ? 'active' : ''}`} onClick={() => setActiveFilter('hardware')}>Hardware</button>
          <button className={`pf-btn font-bold ${activeFilter === 'systems' ? 'active' : ''}`} onClick={() => setActiveFilter('systems')}>Systems</button>
        </div>

        <div className="proj-grid" id="projGrid">
          {filteredProjects.map((proj, i) => {
            const isWide = i === 0 || i === 4;
            const url = getProjectUrl(proj.code);

            const cardContent = (
              <div className={`proj-card reveal ${isWide ? 'wide' : ''}`} data-cat={proj.cat} key={proj.id}>
                {getProjectVideo(proj.code) ? (
                  <div className="w-full relative overflow-hidden" style={{ height: isWide ? '200px' : '160px' }}>
                    <video src={getProjectVideo(proj.code)!} autoPlay loop muted playsInline className="w-full h-full object-cover opacity-90 transition-all duration-300 group-hover:opacity-100" />
                    <div className="absolute inset-0 bg-slate-900/30 mix-blend-multiply"></div>
                    <span className="absolute bottom-2 left-3 text-white/40 font-bold text-2xl tracking-widest uppercase">{proj.code}</span>
                  </div>
                ) : getProjectImage(proj.code) ? (
                  <div className="w-full relative overflow-hidden" style={{ height: isWide ? '200px' : '160px' }}>
                    <img src={getProjectImage(proj.code)!} alt={proj.title} className="w-full h-full object-cover opacity-90 transition-all duration-300 group-hover:opacity-100" />
                    <div className="absolute inset-0 bg-slate-900/30 mix-blend-multiply"></div>
                    <span className="absolute bottom-2 left-3 text-white/40 font-bold text-2xl tracking-widest uppercase">{proj.code}</span>
                  </div>
                ) : (
                  <div className="w-full bg-slate-800 flex items-center justify-center overflow-hidden relative" style={{ height: isWide ? '200px' : '160px' }}>
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-800 opacity-90"></div>
                    <span className="relative text-white/20 font-bold text-4xl tracking-widest uppercase">{proj.code}</span>
                  </div>
                )}
                
                  {proj.code === 'BHARATMAPS' && (
                    <div className="absolute top-4 right-4 z-20">
                      <div className="bg-yellow-500/20 backdrop-blur-md border border-yellow-500/50 text-yellow-400 px-3 py-1.5 rounded-full flex items-center gap-2 shadow-[0_0_15px_rgba(234,179,8,0.3)]">
                        <img src="/assets/drdo.jfif" alt="DRDO" className="w-5 h-5 rounded-full object-cover" />
                        <span className="text-[10px] font-bold tracking-widest uppercase">Dare to Dream Winner</span>
                      </div>
                    </div>
                  )}

                  <div className="proj-meta">
                  <div className="proj-id font-bold">{proj.id}</div>
                  <div className="proj-name font-bold">{proj.title}</div>
                  <div className="proj-desc font-medium">{proj.desc}</div>
                  <div className="proj-tags font-semibold">
                    {proj.tags.slice(0, 3).map((t, idx) => (
                      <span className="ptag font-bold" key={idx}>{t}</span>
                    ))}
                  </div>
                </div>

                <div className="proj-overlay">
                  <div className="ov-id font-bold">{proj.id} // {proj.code}</div>
                  <div className="ov-name font-bold">{proj.title}</div>
                  <div className="ov-grid font-medium">
                    {Object.entries(proj.specs).map(([key, val]) => (
                      <div className="ov-row" key={key}>
                        <div className="ov-key font-bold">{key}</div>
                        <div className="ov-val font-semibold">{val}</div>
                      </div>
                    ))}
                  </div>
                  <div className={`ov-status font-bold ${proj.cat === 'defense' ? 'proto' : 'active'}`}>
                    <span className="ov-dot"></span> STATUS: {proj.specs.Status || 'ACTIVE'}
                  </div>
                  
                  {url && (
                    <div className="mt-4">
                      <span className="inline-block bg-accent text-white px-3 py-1 text-xs font-bold uppercase tracking-widest rounded-sm border border-accent">
                        [INITIATE LIVE DEMO]
                      </span>
                    </div>
                  )}
                </div>
              </div>
            );

            if (url) {
              const staticImage = getProjectImage(proj.code);
              if (staticImage) {
                return (
                  <LinkPreview key={proj.id} url={url} isStatic={true} imageSrc={staticImage} className="block cursor-pointer">
                    {cardContent}
                  </LinkPreview>
                );
              }
              return (
                <LinkPreview key={proj.id} url={url} className="block cursor-pointer">
                  {cardContent}
                </LinkPreview>
              );
            }

            return (
              <div key={proj.id} className="cursor-pointer" onClick={() => {
                const vid = getProjectVideo(proj.code);
                if (vid) setPreviewMedia({ type: 'video', src: vid });
                else {
                  const img = getProjectImage(proj.code);
                  if (img) setPreviewMedia({ type: 'image', src: img });
                }
              }}>
                {cardContent}
              </div>
            );
          })}
        </div>
      </section>

      {/* CAPABILITIES TABLE */}
      <section className="section" id="capabilities">
        <div className="sec-eyebrow font-bold">System Architecture</div>
        <h2 className="font-bold">Core Capabilities</h2>
        <table className="cap-table">
          <tbody>
            <tr className="reveal">
              <td className="font-bold">Autonomous Swarm Control</td>
              <td className="font-bold"><span className="cap-num font-bold">01</span>A.I.</td>
              <td className="font-medium">Multi-agent reinforcement learning (MARL) for decentralized coordination of heterogeneous UAV and UGV fleets in GPS-denied environments.</td>
            </tr>
            <tr className="reveal">
              <td className="font-bold">Neuromorphic Edge Inference</td>
              <td className="font-bold"><span className="cap-num font-bold">02</span>H.W.</td>
              <td className="font-medium">Custom silicon design for ultra-low-power spiking neural networks, enabling complex decision-making on battery-constrained tactical nodes.</td>
            </tr>
            <tr className="reveal">
              <td className="font-bold">Resilient C2 Mesh Networks</td>
              <td className="font-bold"><span className="cap-num font-bold">03</span>N.W.</td>
              <td className="font-medium">Post-quantum encrypted, delay-tolerant networking algorithms that maintain command integrity across dynamically shifting operational topologies.</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="foot-top">
          <div>
            <div className="foot-brand font-bold">Enfibio Technologies<span>.</span></div>
            <p className="foot-tagline font-medium">Architecting decentralized autonomy for contested domains.</p>
            <a href="mailto:enfibiotechnologiespvtltd@gmail.com" className="foot-email font-bold">enfibiotechnologiespvtltd@gmail.com</a>
          </div>
          <div>
            <div className="foot-col-head font-bold">Platform</div>
            <ul className="foot-links font-medium">
              <li><a href="#mission" className="font-semibold">Mission</a></li>
              <li><a href="#projects" className="font-semibold">Project Directory</a></li>
              <li><a href="#capabilities" className="font-semibold">Core Capabilities</a></li>
              <li><a href="#founders" className="font-semibold">The Architecture Team</a></li>
            </ul>
          </div>
          <div>
            <div className="foot-col-head font-bold">Live Deployments</div>
            <ul className="foot-links font-medium">
              <li>
                <LinkPreview url="https://minar-theta.vercel.app" className="hover:text-white font-semibold transition-colors">
                  Minar E-commerce<span className="blive font-bold">Live</span>
                </LinkPreview>
              </li>
              <li>
                <LinkPreview url="https://awaasdirect.vercel.app" className="hover:text-white font-semibold transition-colors">
                  Awaas Direct<span className="blive font-bold">Live</span>
                </LinkPreview>
              </li>
              <li>
                <LinkPreview url="https://learnmate-nextjs.vercel.app" className="hover:text-white font-semibold transition-colors">
                  Learnmate<span className="blive font-bold">Live</span>
                </LinkPreview>
              </li>
              <li>
                <LinkPreview url="https://smart-sewage-system-rytr.vercel.app/login" className="hover:text-white font-semibold transition-colors">
                  Smart Sewage Sys<span className="blive font-bold">Live</span>
                </LinkPreview>
              </li>
            </ul>
          </div>
          <div>
            <div className="foot-col-head font-bold">Network</div>
            <ul className="foot-links font-medium">
              <li>
                <LinkPreview url="https://x.com/Enfibio_Tech" className="hover:text-white font-semibold transition-colors">
                  X (Twitter)
                </LinkPreview>
              </li>
              <li>
                <LinkPreview url="https://www.youtube.com/@Enfibio_tech" className="hover:text-white font-semibold transition-colors">
                  YouTube
                </LinkPreview>
              </li>
              <li>
                <LinkPreview url="https://github.com/enfibiotech" className="hover:text-white font-semibold transition-colors">
                  GitHub (Enfibio)
                </LinkPreview>
              </li>
              <li>
                <LinkPreview url="https://github.com/vishwastiwari01" className="hover:text-white font-semibold transition-colors">
                  GitHub (Vishwas)
                </LinkPreview>
              </li>
              <li>
                <LinkPreview url="https://www.instagram.com/enfibio_tech?igsh=MXMwdnRrMGhkNDA3aQ==" className="hover:text-white font-semibold transition-colors">
                  Instagram
                </LinkPreview>
              </li>
            </ul>
          </div>
        </div>
        <div className="foot-bottom">
          <div className="foot-copy font-bold">© 2026 ENFIBIO SYSTEMS. ALL RIGHTS RESERVED.</div>
          <div className="foot-status font-bold"><div className="sdot"></div> SYSTEM NOMINAL</div>
        </div>
      </footer>

      {/* PHONE PREVIEW MODAL */}
      {previewMedia && (
        <div 
          className="fixed inset-0 z-[999] flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm transition-all"
          onClick={() => setPreviewMedia(null)}
        >
          <div 
            className="relative bg-black rounded-[40px] border-[8px] border-slate-800 shadow-2xl overflow-hidden shadow-[0_0_50px_rgba(0,150,255,0.2)]"
            style={{ width: '320px', height: '650px' }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Phone Notch */}
            <div className="absolute top-0 inset-x-0 h-6 bg-slate-800 rounded-b-3xl mx-auto w-32 z-10"></div>
            
            <div className="w-full h-full bg-slate-950 flex flex-col pt-8">
              <div className="px-4 py-2 flex items-center justify-between text-xs text-slate-400 font-semibold border-b border-slate-800/50">
                <span>9:41</span>
                <div className="flex gap-1.5 items-center">
                  <div className="w-3 h-3 rounded-full border border-slate-500"></div>
                  <div className="w-3 h-3 bg-slate-500 rounded-sm"></div>
                </div>
              </div>
              
              <div className="flex-1 w-full flex items-center justify-center bg-slate-950 relative overflow-hidden">
                {previewMedia.type === 'video' ? (
                  <video src={previewMedia.src} autoPlay loop muted playsInline className="w-full h-full object-contain" />
                ) : (
                  <img src={previewMedia.src} alt="Preview" className="w-full h-full object-contain" />
                )}
                
                {/* Close Button on Screen */}
                <button 
                  className="absolute bottom-6 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-6 py-2 rounded-full font-semibold backdrop-blur-md transition-colors"
                  onClick={() => setPreviewMedia(null)}
                >
                  Close Preview
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
