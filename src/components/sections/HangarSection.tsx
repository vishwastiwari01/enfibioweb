'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { CheckCircle2, Factory, Stethoscope, Fish } from 'lucide-react';

export default function HangarSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    const section = sectionRef.current;
    if (!video || !section) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      });
    }, { threshold: 0.1 });

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="products" ref={sectionRef} className="py-16 md:py-24 bg-surface relative overflow-hidden">
      <div className="container mx-auto w-[min(1180px,calc(100%-40px))] grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-[45px] items-center">
        
        {/* Left: Text & Features */}
        <div className="reveal visible order-2 lg:order-1">
          <div className="eyebrow mb-4">Featured product</div>
          <h2 className="text-[clamp(2.2rem,4vw,4rem)] font-bold tracking-tight mb-2">THAND.AI</h2>
          <h3 className="text-[1.3rem] font-bold tracking-tight mb-6">Smart Portable Freezer</h3>
          <p className="lead mb-6 text-[0.95rem] md:text-base">
            An engineering prototype exploring portable, temperature-controlled
            storage for agriculture, food preservation, and other
            temperature-sensitive applications.
          </p>

          <div className="grid gap-3 my-7">
            <div className="flex gap-3 items-start py-3.5 border-b border-line">
              <span className="text-teal-700 font-black">01</span>
              <p className="m-0 text-[0.88rem] text-ink">Insulated outer shell and aluminium inner chamber.</p>
            </div>
            <div className="flex gap-3 items-start py-3.5 border-b border-line">
              <span className="text-teal-700 font-black">02</span>
              <p className="m-0 text-[0.88rem] text-ink">Peltier-based thermal management approach.</p>
            </div>
            <div className="flex gap-3 items-start py-3.5 border-b border-line">
              <span className="text-teal-700 font-black">03</span>
              <p className="m-0 text-[0.88rem] text-ink">Temperature monitoring and control electronics.</p>
            </div>
          </div>

          {/* Validation & Traction Cards */}
          <div className="mb-8">
            <h4 className="text-[0.85rem] font-bold text-teal-950 uppercase tracking-wider mb-4">Traction & Validation</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="bg-white border border-line rounded-xl p-4 flex gap-3 items-start">
                <Factory size={18} className="text-teal-700 shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-[0.85rem] leading-tight mb-1">Dairy & Agriculture</strong>
                  <p className="text-[0.75rem] text-muted leading-snug m-0">Pilot dairy farms ready in Hyderabad; active contact with local FPOs.</p>
                </div>
              </div>
              <div className="bg-white border border-line rounded-xl p-4 flex gap-3 items-start">
                <Stethoscope size={18} className="text-teal-700 shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-[0.85rem] leading-tight mb-1">Medical & Fisheries</strong>
                  <p className="text-[0.75rem] text-muted leading-snug m-0">Customer validation ongoing for vaccine transport and fisheries.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <button onClick={() => scrollTo('contact')} className="btn btn-primary">
              Discuss Collaboration →
            </button>
            <span className="inline-flex items-center gap-2 text-[0.8rem] font-bold text-teal-800 bg-[#e1f2eb] px-3 py-1.5 rounded-lg border border-teal-700/20">
              <CheckCircle2 size={14} /> Waitlist Coming Soon
            </span>
          </div>
        </div>

        {/* Right: Gallery Grid */}
        <div className="grid grid-cols-2 gap-3.5 lg:grid-cols-[1.2fr_0.8fr] reveal visible order-1 lg:order-2">
          
          {/* Main Video Figure */}
          <figure className="m-0 rounded-[20px] overflow-hidden bg-[#e8f1ef] border border-line col-span-2 sm:col-span-1 sm:row-span-2 min-h-[280px] lg:min-h-[365px] relative group">
            <video 
              ref={videoRef}
              src="/thandaiexplode.mp4" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              muted 
              loop 
              playsInline
            />
          </figure>

          {/* Top small figure */}
          <figure className="m-0 rounded-[20px] overflow-hidden bg-[#e8f1ef] border border-line min-h-[175px] relative group">
            <Image 
              src="/thandaiback.png" 
              alt="THAND.AI back technical view"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </figure>

          {/* Bottom small figure */}
          <figure className="m-0 rounded-[20px] overflow-hidden bg-[#e8f1ef] border border-line min-h-[175px] relative group">
            <Image 
              src="/thandaifinal.jpeg" 
              alt="THAND.AI final commercial vision"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </figure>
          
        </div>

      </div>
    </section>
  );
}
