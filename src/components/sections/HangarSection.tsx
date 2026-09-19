'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';

export default function HangarSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    const section = sectionRef.current;
    if (!video || !section) return;

    // Optional: Scroll-driven video playback (scrubbing based on scroll position)
    // We'll just play/pause based on intersection for smoother performance.
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
    <section id="products" ref={sectionRef} className="py-[105px] bg-surface relative overflow-hidden">
      <div className="container mx-auto w-[min(1180px,calc(100%-40px))] grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-[45px] items-center">
        
        {/* Left: Text & Features */}
        <div className="reveal visible">
          <div className="eyebrow mb-4">Featured product</div>
          <h2 className="text-[clamp(2.2rem,4vw,4rem)] font-bold tracking-tight mb-2">THAND.AI</h2>
          <h3 className="text-[1.3rem] font-bold tracking-tight mb-6">Smart Portable Freezer</h3>
          <p className="lead mb-6">
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
            <div className="flex gap-3 items-start py-3.5 border-b border-line">
              <span className="text-teal-700 font-black">04</span>
              <p className="m-0 text-[0.88rem] text-ink">Prototype-focused development and iterative testing.</p>
            </div>
          </div>

          <button onClick={() => scrollTo('contact')} className="btn btn-primary mt-4">
            Discuss Collaboration →
          </button>
        </div>

        {/* Right: Gallery Grid */}
        <div className="grid grid-cols-2 gap-3.5 lg:grid-cols-[1.2fr_0.8fr] reveal visible">
          
          {/* Main Video Figure */}
          <figure className="m-0 rounded-[20px] overflow-hidden bg-[#e8f1ef] border border-line col-span-2 sm:col-span-1 sm:row-span-2 min-h-[280px] lg:min-h-[365px] relative">
            <video 
              ref={videoRef}
              src="/thandaiexplode.mp4" 
              className="absolute inset-0 w-full h-full object-cover"
              muted 
              loop 
              playsInline
            />
          </figure>

          {/* Top small figure */}
          <figure className="m-0 rounded-[20px] overflow-hidden bg-[#e8f1ef] border border-line min-h-[175px] relative">
            <Image 
              src="/thandaiback.png" 
              alt="THAND.AI back technical view"
              fill
              className="object-cover"
            />
          </figure>

          {/* Bottom small figure */}
          <figure className="m-0 rounded-[20px] overflow-hidden bg-[#e8f1ef] border border-line min-h-[175px] relative">
            <Image 
              src="/thandaifinal.jpeg" 
              alt="THAND.AI final commercial vision"
              fill
              className="object-cover"
            />
          </figure>
          
        </div>

      </div>
    </section>
  );
}
