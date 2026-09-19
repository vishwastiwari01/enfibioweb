'use client';

export default function TimelineSection() {
  return (
    <section id="milestones" className="py-[105px] bg-surface relative overflow-hidden">
      <div className="container mx-auto w-[min(1180px,calc(100%-40px))]">
        
        <div className="reveal visible mb-[55px]">
          <div className="eyebrow mb-4">Our journey</div>
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4 text-ink">From experiments to impact.</h2>
          <p className="lead m-0 text-muted">Add verified dates and descriptions as your milestones are confirmed.</p>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-7 lg:gap-[18px] relative">
          
          {/* Horizontal Line for Desktop */}
          <div className="hidden lg:block absolute top-[14px] left-0 right-0 h-px bg-line" />

          {/* Item 1 */}
          <article className="relative lg:pt-[45px] pl-[30px] lg:pl-0 reveal visible">
            <span className="absolute top-[3px] left-[2px] lg:top-[8px] lg:left-0 w-[13px] h-[13px] border-[3px] border-white bg-teal-700 rounded-full shadow-[0_0_0_1px_#0c7770]" />
            <time className="block text-teal-700 text-[0.72rem] font-black tracking-[0.08em] mb-2 uppercase">2024–25</time>
            <h3 className="text-base font-bold tracking-tight mb-1 text-ink">Prototype development</h3>
            <p className="text-[0.8rem] text-muted m-0">Early engineering and product experimentation.</p>
          </article>

          {/* Item 2 */}
          <article className="relative lg:pt-[45px] pl-[30px] lg:pl-0 reveal visible">
            <span className="absolute top-[3px] left-[2px] lg:top-[8px] lg:left-0 w-[13px] h-[13px] border-[3px] border-white bg-teal-700 rounded-full shadow-[0_0_0_1px_#0c7770]" />
            <time className="block text-teal-700 text-[0.72rem] font-black tracking-[0.08em] mb-2 uppercase">Showcase</time>
            <h3 className="text-base font-bold tracking-tight mb-1 text-ink">IIT Innovation</h3>
            <p className="text-[0.8rem] text-muted m-0">Prototype showcase and feedback collection.</p>
          </article>

          {/* Item 3 */}
          <article className="relative lg:pt-[45px] pl-[30px] lg:pl-0 reveal visible">
            <span className="absolute top-[3px] left-[2px] lg:top-[8px] lg:left-0 w-[13px] h-[13px] border-[3px] border-white bg-teal-700 rounded-full shadow-[0_0_0_1px_#0c7770]" />
            <time className="block text-teal-700 text-[0.72rem] font-black tracking-[0.08em] mb-2 uppercase">Fellowship</time>
            <h3 className="text-base font-bold tracking-tight mb-1 text-ink">AICTE AIPF</h3>
            <p className="text-[0.8rem] text-muted m-0">Productization-focused exposure and learning.</p>
          </article>

          {/* Item 4 */}
          <article className="relative lg:pt-[45px] pl-[30px] lg:pl-0 reveal visible">
            <span className="absolute top-[3px] left-[2px] lg:top-[8px] lg:left-0 w-[13px] h-[13px] border-[3px] border-white bg-teal-700 rounded-full shadow-[0_0_0_1px_#0c7770]" />
            <time className="block text-teal-700 text-[0.72rem] font-black tracking-[0.08em] mb-2 uppercase">Upcoming</time>
            <h3 className="text-base font-bold tracking-tight mb-1 text-ink">IIT Bombay Eureka</h3>
            <p className="text-[0.8rem] text-muted m-0">Scheduled participation; update status after the event.</p>
          </article>

          {/* Item 5 */}
          <article className="relative lg:pt-[45px] pl-[30px] lg:pl-0 reveal visible">
            <span className="absolute top-[3px] left-[2px] lg:top-[8px] lg:left-0 w-[13px] h-[13px] border-[3px] border-white bg-teal-700 rounded-full shadow-[0_0_0_1px_#0c7770]" />
            <time className="block text-teal-700 text-[0.72rem] font-black tracking-[0.08em] mb-2 uppercase">RKVY</time>
            <h3 className="text-base font-bold tracking-tight mb-1 text-ink">Incubation pathway</h3>
            <p className="text-[0.8rem] text-muted m-0">Engagement with SIIC Kanpur and grant-related opportunities.</p>
          </article>

        </div>

      </div>
    </section>
  );
}
