'use client';

import Image from 'next/image';
import { Play } from 'lucide-react';

export default function HeroSection() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="hero" className="hero min-h-[75vh] md:min-h-0 grid items-center py-24 md:py-32 relative isolate overflow-hidden">
      {/* Background Engineering Grid */}
      <div 
        className="absolute inset-0 -z-20 pointer-events-none"
        style={{
          background: `
            linear-gradient(rgba(7,63,67,.045) 1px, transparent 1px),
            linear-gradient(90deg, rgba(7,63,67,.045) 1px, transparent 1px)
          `,
          backgroundSize: '54px 54px',
          WebkitMaskImage: 'linear-gradient(to right, black, transparent 82%)',
          maskImage: 'linear-gradient(to right, black, transparent 82%)',
        }}
      />
      {/* Green glow radial gradient */}
      <div 
        className="absolute -z-10 rounded-full pointer-events-none"
        style={{
          width: '620px',
          height: '620px',
          right: '-280px',
          top: '40px',
          background: 'radial-gradient(circle, rgba(112,197,107,.20), transparent 67%)',
        }}
      />

      <div className="container grid grid-cols-1 lg:grid-cols-[1.02fr_0.98fr] items-center gap-14 mx-auto w-[min(1180px,calc(100%-40px))]">
        {/* Left Column Copy */}
        <div className="reveal visible max-w-[720px]">
          <div className="eyebrow mb-6">Engineering a resilient tomorrow</div>
          
          <h1 className="text-[clamp(2.8rem,7vw,6.2rem)] font-bold tracking-tight text-ink mb-6">
            Real Problems.<br />
            <span className="text-teal-700">Practical Solutions.</span>
          </h1>
          
          <p className="lead">
            Enfibio Technologies develops intelligent hardware, AI systems,
            and emerging technologies to build practical solutions for a
            more resilient future.
          </p>

          <div className="flex flex-wrap gap-3 mt-8">
            <button onClick={() => scrollTo('products')} className="btn btn-primary">
              Explore Our Products →
            </button>
            <button onClick={() => scrollTo('about')} className="btn btn-secondary">
              <Play size={14} className="fill-current" /> Watch Our Story
            </button>
          </div>

          <div className="flex items-center gap-2 mt-6 text-[0.78rem] text-muted">
            <span 
              className="w-2 h-2 rounded-full bg-green" 
              style={{ boxShadow: '0 0 0 5px rgba(112,197,107,.13)' }}
            />
            Building, testing, and learning through real prototypes.
          </div>
        </div>

        {/* Right Column Product Stage */}
        <div className="product-stage relative min-h-[380px] lg:min-h-[500px] grid place-items-center max-w-[650px] w-full mx-auto reveal visible">
          {/* Orbit Animation */}
          <div 
            className="absolute w-[310px] h-[310px] lg:w-[440px] lg:h-[440px] border border-dashed border-teal-700/25 rounded-full animate-[orbit_35s_linear_infinite]"
            aria-hidden="true"
          >
            <div className="absolute top-[30px] left-[50px] lg:top-[40px] lg:left-[80px] w-2 h-2 rounded-full bg-teal-700" />
            <div className="absolute bottom-[45px] right-[30px] lg:bottom-[65px] lg:right-[45px] w-2 h-2 rounded-full bg-green" />
          </div>

          {/* Main Product Frame */}
          <div 
            className="relative w-full max-w-[560px] min-h-[300px] lg:min-h-[370px] grid place-items-center border border-line rounded-[34px] overflow-hidden"
            style={{
              background: 'linear-gradient(145deg, #fff, #f0f7f5)',
              boxShadow: 'var(--shadow)'
            }}
          >
            <div className="absolute top-5 left-6 text-[0.65rem] tracking-[0.15em] text-teal-700 font-black">
              THAND.AI / PROTOTYPE
            </div>
            
            <div className="relative z-10 w-[92%] transition-transform duration-500 ease-out hover:-translate-y-2 hover:scale-[1.025]">
              <Image
                src="/thandai.png"
                alt="THAND.AI portable freezer prototype with exposed internal chamber and cooling assembly"
                width={600}
                height={500}
                className="w-full max-h-[430px] object-contain drop-shadow-[0_25px_24px_rgba(7,63,67,.13)]"
                priority
              />
            </div>
          </div>

          {/* Floating Cards */}
          <div 
            className="absolute z-20 right-0 top-10 lg:-right-3 lg:top-[70px] bg-white/95 backdrop-blur-[14px] border border-line rounded-2xl px-4 py-3 shadow-[0_18px_40px_rgba(7,63,67,.12)] animate-[float_6s_ease-in-out_infinite]"
          >
            <strong className="block text-xl text-teal-900 leading-tight">Prototype</strong>
            <small className="text-[0.7rem] text-muted">Current development stage</small>
          </div>

          <div 
            className="absolute z-20 left-0 bottom-6 lg:-left-3 lg:bottom-[60px] bg-white/95 backdrop-blur-[14px] border border-line rounded-2xl px-4 py-3 shadow-[0_18px_40px_rgba(7,63,67,.12)] animate-[float_6s_ease-in-out_infinite]"
            style={{ animationDelay: '-2s' }}
          >
            <strong className="block text-xl text-teal-900 leading-tight">THAND.AI</strong>
            <small className="text-[0.7rem] text-muted">Smart portable freezer</small>
          </div>
        </div>

      </div>
    </section>
  );
}
