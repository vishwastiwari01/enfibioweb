'use client';

export default function ContactSection() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Backend configuration required. Please configure your .env.local with Supabase or Email provider credentials.");
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-surface relative overflow-hidden">
      <div className="container mx-auto w-[min(1180px,calc(100%-40px))] grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-[55px] items-start">
        
        <div className="reveal visible">
          <div className="eyebrow mb-4">Let's build what's next</div>
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4 text-ink">Open to meaningful collaboration.</h2>
          <p className="lead mb-4">
            We welcome conversations around incubation, research collaboration,
            strategic partnerships, grants, and technology development.
          </p>
          <p className="text-muted">
            Use the form to share what you are interested in. We will review
            your message and connect through the appropriate channel.
          </p>
        </div>

        <form 
          onSubmit={handleSubmit}
          className="reveal visible bg-white border border-line rounded-[25px] p-[30px] shadow-[0_16px_45px_rgba(7,63,67,.05)]"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[15px] mb-5">
            
            <div className="grid gap-[7px]">
              <label htmlFor="name" className="text-[0.78rem] font-bold text-teal-950">Name *</label>
              <input 
                id="name" 
                required 
                placeholder="Your name"
                className="w-full border border-line rounded-xl px-3 py-3 text-ink bg-[#fbfdfd] outline-none transition-all focus:border-teal-500 focus:shadow-[0_0_0_4px_rgba(38,166,154,.12)]" 
              />
            </div>
            
            <div className="grid gap-[7px]">
              <label htmlFor="email" className="text-[0.78rem] font-bold text-teal-950">Email *</label>
              <input 
                id="email" 
                type="email" 
                required 
                placeholder="you@example.com"
                className="w-full border border-line rounded-xl px-3 py-3 text-ink bg-[#fbfdfd] outline-none transition-all focus:border-teal-500 focus:shadow-[0_0_0_4px_rgba(38,166,154,.12)]" 
              />
            </div>
            
            <div className="grid gap-[7px] md:col-span-2">
              <label htmlFor="interest" className="text-[0.78rem] font-bold text-teal-950">I'm interested in *</label>
              <select 
                id="interest" 
                required
                className="w-full border border-line rounded-xl px-3 py-3 text-ink bg-[#fbfdfd] outline-none transition-all focus:border-teal-500 focus:shadow-[0_0_0_4px_rgba(38,166,154,.12)]"
              >
                <option value="">Select an option</option>
                <option>Incubation</option>
                <option>Research collaboration</option>
                <option>Strategic partnership</option>
                <option>Product updates</option>
                <option>Grant / funding discussion</option>
                <option>Other</option>
              </select>
            </div>
            
            <div className="grid gap-[7px] md:col-span-2">
              <label htmlFor="message" className="text-[0.78rem] font-bold text-teal-950">Message *</label>
              <textarea 
                id="message" 
                required 
                placeholder="Tell us how you would like to connect..."
                className="w-full border border-line rounded-xl px-3 py-3 text-ink bg-[#fbfdfd] outline-none transition-all focus:border-teal-500 focus:shadow-[0_0_0_4px_rgba(38,166,154,.12)] resize-y min-h-[120px]"
              />
            </div>

          </div>

          <button type="submit" disabled className="btn btn-primary opacity-50 cursor-not-allowed">
            Send Inquiry →
          </button>

          <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded-lg">
            <p className="text-[0.75rem] text-amber-800 m-0 leading-relaxed font-medium">
              Backend Configuration Required:<br/>
              Please configure <code className="bg-amber-100 px-1 py-0.5 rounded text-amber-900">NEXT_PUBLIC_SUPABASE_URL</code> and <code className="bg-amber-100 px-1 py-0.5 rounded text-amber-900">NEXT_PUBLIC_SUPABASE_ANON_KEY</code> in your <code className="bg-amber-100 px-1 py-0.5 rounded text-amber-900">.env.local</code> to enable contact submissions.
            </p>
          </div>
        </form>

      </div>
    </section>
  );
}
