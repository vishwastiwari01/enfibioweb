'use client';

import { useEffect, useRef } from 'react';
import { Syringe, Milk, ShoppingBag, Sprout, ShieldCheck, ArrowRight } from 'lucide-react';

const APPLICATIONS = [
  {
    icon: Syringe,
    title: 'Vaccines & Clinical Healthcare',
    badge: 'Healthcare & Pharma',
    color: '#075E5A',
    bg: '#E1F2EB',
    tagline: 'Remote Immunization & Biological Cold Chain',
    points: [
      'Preserves temperature-sensitive vaccines (2°C–8°C) without relying on unstable power grids.',
      'Supports rural primary healthcare centres (PHCs), mobile medical camps, and pulse polio drives.',
      'Enables secure last-mile transit for insulin, plasma, diagnostic reagents, and blood samples.',
    ],
  },
  {
    icon: Milk,
    title: 'Dairy & Farm-Gate Milk Chilling',
    badge: 'Dairy & Livestock',
    color: '#3C806C',
    bg: '#F0F6F4',
    tagline: 'Preventing Spoilage at the Point of Milking',
    points: [
      'Instant temperature drop after milking inhibits bacterial growth before collection trucks arrive.',
      'Prevents curdling, quality downgrades, and distress sales by smallholder dairy farmers.',
      'Portable footprint fits effortlessly on motorbikes, bicycles, and rural supply vehicles.',
    ],
  },
  {
    icon: ShoppingBag,
    title: 'FMCG & Perishable Goods Retail',
    badge: 'FMCG & Quick Commerce',
    color: '#0D7A75',
    bg: '#E1F2EB',
    tagline: 'Last-Mile Micro-Distribution & D2C Delivery',
    points: [
      'Decentralized cold storage for artisanal foods, chocolates, dairy desserts, and probiotics.',
      'Eliminates the prohibitive cost of running heavy refrigerated reefer vans for small batch deliveries.',
      'Maintains unbroken cold-chain compliance from fulfillment dark-store to doorstep.',
    ],
  },
  {
    icon: Sprout,
    title: 'High-Value Horticulture & Floriculture',
    badge: 'AgriTech & Exports',
    color: '#075E5A',
    bg: '#F0F6F4',
    tagline: 'Field-to-Market Freshness & Shelf-Life Extension',
    points: [
      'Immediately extracts field heat from exotic berries, culinary herbs, mushrooms, and organic vegetables.',
      'Preserves export-grade cut flowers and high-value medicinal flora for premium urban markets.',
      'Helps small farmers avoid distress post-harvest selling during market gluts.',
    ],
  },
  {
    icon: ShieldCheck,
    title: 'Defense, Relief & Field Research',
    badge: 'Remote & Off-Grid',
    color: '#102F3D',
    bg: '#E1F2EB',
    tagline: 'Ruggedized Cold Storage for Extreme Conditions',
    points: [
      'Deployable for disaster management teams, border posts, and humanitarian relief missions.',
      'Low power draw allows seamless operation on portable solar panels and 12V vehicular batteries.',
      'Engineered to withstand vibrations, dust, and rugged field transport conditions.',
    ],
  },
];

export default function ApplicationsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.05 }
    );
    el.querySelectorAll('.fade-in').forEach(item => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="applications"
      ref={sectionRef}
      style={{
        background: '#FAFCFB',
        padding: '85px 0',
        borderTop: '1px solid #DDE8E5',
      }}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-10">

        {/* Section Header */}
        <div className="fade-in mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="section-label" style={{ color: '#075E5A' }}>
              Real Problems. Practical Solutions.
            </div>
            <h2
              className="section-title"
              style={{
                fontSize: 'clamp(2rem, 3.8vw, 2.8rem)',
                color: '#102F3D',
                marginTop: '6px',
              }}
            >
              Applications Across Industries
            </h2>
            <p
              className="mt-3 leading-relaxed"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '15.5px',
                color: '#647781',
                maxWidth: '620px',
              }}
            >
              From remote immunization camps to rural milk collection and FMCG distribution,
              THAND.AI delivers dependable, off-grid cooling wherever cold chain infrastructure is critical.
            </p>
          </div>

          <button
            onClick={() => scrollTo('contact')}
            className="shrink-0 inline-flex items-center gap-2 text-sm font-semibold cursor-pointer"
            style={{
              color: '#075E5A',
              background: 'none',
              border: 'none',
              padding: 0,
            }}
          >
            Discuss Industry Pilot
            <ArrowRight size={15} />
          </button>
        </div>

        {/* Applications Grid: 2 columns on tablet, 3 on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 fade-in fade-in-delay-1">
          {APPLICATIONS.map((app, idx) => {
            const Icon = app.icon;
            return (
              <div
                key={app.title}
                className="flex flex-col p-6 rounded-2xl transition-all duration-200 group"
                style={{
                  background: '#ffffff',
                  border: '1px solid #DDE8E5',
                  boxShadow: '0 2px 8px rgba(16,47,61,0.04)',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = app.color;
                  (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 24px rgba(7,94,90,0.08)';
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = '#DDE8E5';
                  (e.currentTarget as HTMLElement).style.boxShadow = '0 2px 8px rgba(16,47,61,0.04)';
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                }}
              >
                {/* Card Top: Icon + Sector Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div
                    className="flex items-center justify-center rounded-xl transition-transform duration-200 group-hover:scale-105"
                    style={{
                      width: 44,
                      height: 44,
                      background: app.bg,
                      color: app.color,
                      border: `1px solid ${app.color}20`,
                    }}
                  >
                    <Icon size={22} />
                  </div>
                  <span
                    className="px-2.5 py-1 rounded-full text-[10.5px] font-semibold"
                    style={{
                      background: app.bg,
                      color: app.color,
                      border: `1px solid ${app.color}25`,
                      letterSpacing: '0.04em',
                    }}
                  >
                    {app.badge}
                  </span>
                </div>

                {/* Title & Tagline */}
                <h3
                  style={{
                    fontFamily: 'Syne, sans-serif',
                    fontWeight: 700,
                    fontSize: '17px',
                    color: '#102F3D',
                    marginBottom: '4px',
                    lineHeight: 1.3,
                  }}
                >
                  {app.title}
                </h3>
                <div
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '12px',
                    fontWeight: 600,
                    color: '#3C806C',
                    marginBottom: '14px',
                  }}
                >
                  {app.tagline}
                </div>

                {/* Key Points */}
                <ul className="flex flex-col gap-2 flex-1 mb-4">
                  {app.points.map((pt, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-xs leading-relaxed"
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        color: '#647781',
                      }}
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0"
                        style={{ background: app.color }}
                      />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>

                {/* Card footer CTA link */}
                <div
                  className="pt-3 border-t border-[#F0F6F4] flex items-center justify-between text-xs font-semibold"
                  style={{ color: app.color }}
                >
                  <span>Inquire for Deployment</span>
                  <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            );
          })}

          {/* 6th Card: Custom Solution / Partnership Tile */}
          <div
            className="flex flex-col justify-between p-6 rounded-2xl text-white"
            style={{
              background: 'linear-gradient(135deg, #075E5A 0%, #064B48 100%)',
              border: '1px solid #064B48',
              boxShadow: '0 8px 24px rgba(7,94,90,0.18)',
            }}
          >
            <div>
              <span
                className="inline-block px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase mb-4"
                style={{ background: 'rgba(255,255,255,0.15)', color: '#ffffff' }}
              >
                Custom Integration
              </span>
              <h3
                style={{
                  fontFamily: 'Syne, sans-serif',
                  fontWeight: 800,
                  fontSize: '20px',
                  lineHeight: 1.25,
                  marginBottom: '10px',
                }}
              >
                Have a Specific Cold-Chain Challenge?
              </h3>
              <p
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '13px',
                  color: 'rgba(255,255,255,0.78)',
                  lineHeight: 1.6,
                }}
              >
                We customize chamber geometry, payload volume, telemetry sensors, and power systems
                for enterprise partners, cooperatives, and health missions.
              </p>
            </div>

            <div className="pt-6">
              <button
                onClick={() => scrollTo('contact')}
                className="w-full py-2.5 px-4 rounded-xl font-semibold text-xs transition-all duration-200 cursor-pointer flex items-center justify-center gap-2"
                style={{
                  background: '#ffffff',
                  color: '#075E5A',
                  border: 'none',
                }}
              >
                Schedule Technical Briefing
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
