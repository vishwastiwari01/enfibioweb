'use client';

import React, { useState } from 'react';
import { Mail, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import AstronautSocialCard from '@/components/ui/astronaut-social-card';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    interest: 'Research collaboration',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus('success');
      } else {
        setStatus('error');
        setErrorMessage(data.error || 'Failed to submit inquiry. Please try again.');
      }
    } catch {
      setStatus('error');
      setErrorMessage('Network connection error. Please try again or email us directly.');
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-surface relative overflow-hidden">
      <div className="container mx-auto w-[min(1280px,calc(100%-40px))] grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-14 items-start">
        
        {/* Left Column: Context, Direct Email & Interactive Astronaut Social Card */}
        <div className="reveal visible flex flex-col justify-between h-full">
          <div>
            <div className="eyebrow mb-4">Let's build what's next</div>
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4 text-ink">
              Open to meaningful collaboration.
            </h2>
            <p className="lead mb-4">
              We welcome conversations around incubation, research collaboration,
              strategic partnerships, grants, and technology development.
            </p>
            <p className="text-muted text-sm leading-relaxed mb-6">
              Use the form to share what you are interested in. We will review
              your message and connect through the appropriate channel.
            </p>

            <div className="p-5 rounded-2xl bg-white border border-line flex items-center gap-3.5 max-w-sm shadow-xs mb-8">
              <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-800 shrink-0">
                <Mail size={18} />
              </div>
              <div>
                <span className="block text-[11px] font-bold uppercase text-muted tracking-wider">Direct Email</span>
                <a
                  href="mailto:enfibiotechnologiespvtltd@gmail.com"
                  className="text-xs font-semibold text-teal-900 hover:text-teal-700 transition-colors"
                >
                  enfibiotechnologiespvtltd@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Interactive Astronaut Social Media Card */}
          <div className="pt-2 flex flex-col items-start">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-muted mb-3">
              Explore Our Digital Community
            </span>
            <div className="scale-90 origin-top-left sm:scale-100">
              <AstronautSocialCard
                heading="We're on Social Media"
                instagramUrl="https://www.instagram.com/enfibio_tech?igsh=MXMwdnRrMGhkNDA3aQ=="
                twitterUrl="https://x.com/Enfibio_Tech"
                discordUrl="https://discord.gg/KD8ba2uUpT"
              />
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Contact Form or Success State */}
        <div className="reveal visible bg-white border border-line rounded-[25px] p-6 sm:p-9 shadow-[0_16px_45px_rgba(7,63,67,.05)]">
          {status === 'success' ? (
            <div className="py-8 text-center animate-in fade-in">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 size={32} />
              </div>
              <h3 className="text-2xl font-bold text-ink mb-2">Inquiry Sent Successfully!</h3>
              <p className="text-sm text-muted max-w-md mx-auto mb-6">
                Thank you, <strong className="text-ink">{formData.name}</strong>. We have received your inquiry regarding{' '}
                <strong className="text-ink">{formData.interest}</strong> and will follow up at{' '}
                <strong className="text-ink">{formData.email}</strong> shortly.
              </p>
              <button
                onClick={() => {
                  setStatus('idle');
                  setFormData({
                    name: '',
                    email: '',
                    interest: 'Research collaboration',
                    message: ''
                  });
                }}
                className="btn btn-primary btn-small"
              >
                Send Another Inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-ink mb-1.5">
                  Your Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="e.g. Dr. Rajesh Sharma"
                  className="w-full px-4 py-3 rounded-xl border border-line bg-surface/50 text-ink text-sm focus:outline-hidden focus:ring-2 focus:ring-teal-700/20 focus:border-teal-700 transition-all placeholder:text-muted/60"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-ink mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="e.g. rajesh@iitb.ac.in or partner@firm.com"
                  className="w-full px-4 py-3 rounded-xl border border-line bg-surface/50 text-ink text-sm focus:outline-hidden focus:ring-2 focus:ring-teal-700/20 focus:border-teal-700 transition-all placeholder:text-muted/60"
                />
              </div>

              <div>
                <label htmlFor="interest" className="block text-xs font-bold uppercase tracking-wider text-ink mb-1.5">
                  Primary Area of Interest
                </label>
                <div className="relative">
                  <select
                    id="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-line bg-surface/50 text-ink text-sm focus:outline-hidden focus:ring-2 focus:ring-teal-700/20 focus:border-teal-700 transition-all appearance-none cursor-pointer"
                  >
                    <option value="Research collaboration">Research collaboration</option>
                    <option value="Strategic partnership">Strategic partnership</option>
                    <option value="Incubation & grants">Incubation & grants</option>
                    <option value="Product trial / pilot">Product trial / pilot</option>
                    <option value="General inquiry">General inquiry</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-muted text-xs">
                    ▼
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-ink mb-1.5">
                  Message Details
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="Share details about your research, partnership opportunity, or project inquiry..."
                  className="w-full px-4 py-3 rounded-xl border border-line bg-surface/50 text-ink text-sm focus:outline-hidden focus:ring-2 focus:ring-teal-700/20 focus:border-teal-700 transition-all placeholder:text-muted/60 resize-none"
                />
              </div>

              {status === 'error' && (
                <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-800 text-xs flex items-center gap-2">
                  <AlertCircle size={16} className="shrink-0 text-red-600" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full py-3.5 px-6 rounded-xl bg-teal-900 hover:bg-teal-800 text-white font-bold text-sm tracking-wide shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed mt-2"
              >
                {status === 'submitting' ? (
                  <>
                    <div className="w-4 h-4 rounded-full border-2 border-white/20 border-t-white animate-spin" />
                    <span>Sending Inquiry...</span>
                  </>
                ) : (
                  <>
                    <span>Submit Inquiry</span>
                    <Send size={15} />
                  </>
                )}
              </button>

              <p className="text-[11px] text-muted text-center pt-2">
                We respect your confidentiality. Messages are reviewed directly by the Enfibio engineering and founders office.
              </p>
            </form>
          )}
        </div>

      </div>
    </section>
  );
}
