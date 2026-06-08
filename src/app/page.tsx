'use client';

import { useState, useEffect } from 'react';
import { PROJECTS } from '@/lib/data/projects';
import { LinkPreview } from '@/components/ui/link-preview';
import { WordsPullUp } from '@/components/ui/words-pull-up';
import Head from 'next/head';

export default function Home() {
  const [activeFilter, setActiveFilter] = useState('all');

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
    if (code === 'BHARATMAPS') return 'https://idex-aditi-4-0.vercel.app';
    return null;
  };

  const getProjectImage = (code: string) => {
    if (code === 'HONEYPOT') return '/assets/SAM.jpeg';
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
        <title>Enfibio — Autonomous Intelligence Systems</title>
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
        <a href="#" className="logo font-bold">Enfibio<span className="logo-dot">.</span></a>
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

      {/* FOUNDERS */}
      <section className="section" id="founders">
        <div className="sec-eyebrow font-bold">The Architecture Team</div>
        <h2 className="font-bold">Founders</h2>
        <p className="sec-desc font-medium">Three builders, three layers. Together they cover every dimension of autonomous intelligence — from silicon to swarm to insight.</p>
        <div className="founders-grid">
          <div className="founder-card reveal">
            <div className="founder-badge badge-exec font-bold">Execution Layer</div>
            <div className="founder-name font-bold">
              <LinkPreview url="https://portfolio-jade-psi-53.vercel.app" isStatic={true} imageSrc="/assets/vishwas.png" className="hover:text-accent transition-colors">
                Vishwas Tiwari
              </LinkPreview>
            </div>
            <div className="founder-role font-bold">Co-Founder · AI Systems Architect</div>
            <div className="founder-ethos font-semibold">"AI that DOES, not just AI that responds."</div>
            <ul className="founder-specs font-medium">
              <li>Autonomous AI Agents</li><li>Edge AI Deployment</li>
              <li>Defense Simulation</li><li>Real-World AI Autonomy</li>
            </ul>
          </div>
          <div className="founder-card reveal">
            <div className="founder-badge badge-intel font-bold">Intelligence Layer</div>
            <div className="founder-name font-bold">Shardul Pande</div>
            <div className="founder-role font-bold">Co-Founder · AI &amp; Data Systems Engineer</div>
            <div className="founder-ethos font-semibold">"Answering not just what, but why."</div>
            <ul className="founder-specs font-medium">
              <li>RAG Architectures</li><li>Machine Learning Pipelines</li>
              <li>Decision-Grade Outputs</li><li>Interpretable AI</li>
            </ul>
          </div>
          <div className="founder-card reveal">
            <div className="founder-badge badge-embed font-bold">Embedded Layer</div>
            <div className="founder-name font-bold">Raj Goel</div>
            <div className="founder-role font-bold">Co-Founder · Embedded Systems &amp; Robotics</div>
            <div className="founder-ethos font-semibold">"Bringing intelligence into physical systems."</div>
            <ul className="founder-specs font-medium">
              <li>ROS2 &amp; Real-Time Sensor Interfacing</li><li>Edge Computing</li>
              <li>Robotics Middleware</li><li>Hardware-in-the-Loop Systems</li>
            </ul>
          </div>
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

            return cardContent;
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
            <div className="foot-brand font-bold">Enfibio<span>.</span></div>
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
    </>
  );
}
