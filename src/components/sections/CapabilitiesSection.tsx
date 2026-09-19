'use client';

export default function CapabilitiesSection() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="about" className="py-[105px] relative overflow-hidden">
      <div className="container mx-auto w-[min(1180px,calc(100%-40px))] grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-[65px] items-center">
        
        {/* Left: Purpose Panel */}
        <div 
          className="reveal visible flex flex-col justify-end p-8 lg:p-11 min-h-[390px] lg:min-h-[440px] rounded-[28px] text-white shadow-[0_20px_60px_rgba(8,54,57,.10)]"
          style={{
            background: 'linear-gradient(140deg, rgba(7,63,67,.86), rgba(7,63,67,.46)), url("/banner.jpeg") center/cover'
          }}
        >
          <div className="eyebrow mb-4 !text-[#b9e2d8] before:bg-[#b9e2d8]">Our purpose</div>
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4 text-white">Technology for a more resilient planet.</h2>
          <p className="text-[#d2e6e3] mb-8 leading-relaxed">
            We work across disciplines to translate scientific thinking, engineering, and experimentation into practical solutions.
          </p>
          <button 
            onClick={() => scrollTo('contact')} 
            className="btn btn-secondary w-max bg-white/10 border-white/30 text-white hover:bg-white/20 hover:border-white"
          >
            Work With Us →
          </button>
        </div>

        {/* Right: Domains */}
        <div className="reveal visible">
          <div className="eyebrow mb-4">Who we are</div>
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4">Ideas become useful when they meet reality.</h2>
          <p className="lead mb-8">
            Enfibio is an emerging technology venture exploring products
            across AgriTech, intelligent hardware, AI systems, robotics,
            and nanobiotechnology.
          </p>

          <div id="research" className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <article className="border border-line rounded-[18px] p-6 bg-white transition-all duration-300 hover:-translate-y-1.5 hover:border-teal-700/40 hover:shadow-[0_16px_35px_rgba(7,63,67,.08)]">
              <div className="w-11 h-11 grid place-items-center rounded-xl bg-[#edf7f3] text-teal-800 text-xl mb-6">⌁</div>
              <h3 className="text-[1.3rem] font-bold tracking-tight mb-2">AgriTech & Climate</h3>
              <p className="text-[0.86rem] text-muted leading-relaxed m-0">Exploring cold-chain solutions, agricultural productivity, and sustainable systems.</p>
            </article>

            <article className="border border-line rounded-[18px] p-6 bg-white transition-all duration-300 hover:-translate-y-1.5 hover:border-teal-700/40 hover:shadow-[0_16px_35px_rgba(7,63,67,.08)]">
              <div className="w-11 h-11 grid place-items-center rounded-xl bg-[#edf7f3] text-teal-800 text-xl mb-6">▦</div>
              <h3 className="text-[1.3rem] font-bold tracking-tight mb-2">Intelligent Hardware</h3>
              <p className="text-[0.86rem] text-muted leading-relaxed m-0">Engineering systems, thermal management, sensing, and real-world devices.</p>
            </article>

            <article className="border border-line rounded-[18px] p-6 bg-white transition-all duration-300 hover:-translate-y-1.5 hover:border-teal-700/40 hover:shadow-[0_16px_35px_rgba(7,63,67,.08)]">
              <div className="w-11 h-11 grid place-items-center rounded-xl bg-[#edf7f3] text-teal-800 text-xl mb-6">⌘</div>
              <h3 className="text-[1.3rem] font-bold tracking-tight mb-2">AI Systems</h3>
              <p className="text-[0.86rem] text-muted leading-relaxed m-0">Building practical AI-enabled tools, automation, and intelligent workflows.</p>
            </article>

            <article className="border border-line rounded-[18px] p-6 bg-white transition-all duration-300 hover:-translate-y-1.5 hover:border-teal-700/40 hover:shadow-[0_16px_35px_rgba(7,63,67,.08)]">
              <div className="w-11 h-11 grid place-items-center rounded-xl bg-[#edf7f3] text-teal-800 text-xl mb-6">✧</div>
              <h3 className="text-[1.3rem] font-bold tracking-tight mb-2">Nanobiotechnology</h3>
              <p className="text-[0.86rem] text-muted leading-relaxed m-0">Exploring the intersection of biology, materials, and emerging technologies.</p>
            </article>
          </div>
        </div>

      </div>
    </section>
  );
}
