'use client';

export default function ProjectsSection() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="projects" className="py-[105px] relative overflow-hidden bg-white">
      <div className="container mx-auto w-[min(1180px,calc(100%-40px))]">
        
        <div className="reveal visible max-w-[680px] mb-10">
          <div className="eyebrow mb-4">Beyond one product</div>
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4 text-ink">
            Multiple directions.<br />One engineering mindset.
          </h2>
          <p className="lead">
            Our project portfolio is evolving. Each direction is presented
            according to its current stage of research, prototyping, or exploration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[18px]">
          
          <article className="border border-line rounded-[18px] p-[26px] bg-white min-h-[240px] flex flex-col reveal visible transition-shadow hover:shadow-[0_16px_35px_rgba(7,63,67,.06)]">
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

          <article className="border border-line rounded-[18px] p-[26px] bg-white min-h-[240px] flex flex-col reveal visible transition-shadow hover:shadow-[0_16px_35px_rgba(7,63,67,.06)]">
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

          <article className="border border-line rounded-[18px] p-[26px] bg-white min-h-[240px] flex flex-col reveal visible transition-shadow hover:shadow-[0_16px_35px_rgba(7,63,67,.06)]">
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

      </div>
    </section>
  );
}
