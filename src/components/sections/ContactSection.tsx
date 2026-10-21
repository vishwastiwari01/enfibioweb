'use client';

import React, { useState } from 'react';
import { Mail, Send, CheckCircle2, AlertCircle } from 'lucide-react';

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
        
        {/* Left Column: Context & Direct Contact */}
        <div className="reveal visible">
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

          <div className="p-5 rounded-2xl bg-white border border-line flex items-center gap-3.5 max-w-sm">
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
                  setFormData({ name: '', email: '', interest: 'Research collaboration', message: '' });
                  setStatus('idle');
                }}
                className="btn btn-secondary btn-small text-xs"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
                
                <div className="grid gap-1.5">
                  <label htmlFor="name" className="text-xs font-bold text-teal-950">Name *</label>
                  <input 
                    id="name" 
                    required 
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full border border-line rounded-xl px-3.5 py-3 text-xs text-ink bg-[#fbfdfd] outline-none transition-all focus:border-teal-500 focus:bg-white focus:shadow-[0_0_0_3px_rgba(38,166,154,.12)]" 
                  />
                </div>
                
                <div className="grid gap-1.5">
                  <label htmlFor="email" className="text-xs font-bold text-teal-950">Email *</label>
                  <input 
                    id="email" 
                    type="email" 
                    required 
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border border-line rounded-xl px-3.5 py-3 text-xs text-ink bg-[#fbfdfd] outline-none transition-all focus:border-teal-500 focus:bg-white focus:shadow-[0_0_0_3px_rgba(38,166,154,.12)]" 
                  />
                </div>
                
                <div className="grid gap-1.5 md:col-span-2">
                  <label htmlFor="interest" className="text-xs font-bold text-teal-950">I'm interested in *</label>
                  <select 
                    id="interest" 
                    required
                    value={formData.interest}
                    onChange={handleChange}
                    className="w-full border border-line rounded-xl px-3.5 py-3 text-xs text-ink bg-[#fbfdfd] outline-none transition-all focus:border-teal-500 focus:bg-white focus:shadow-[0_0_0_3px_rgba(38,166,154,.12)] cursor-pointer"
                  >
                    <option value="Research collaboration">Research collaboration</option>
                    <option value="Incubation & grants">Incubation & grants</option>
                    <option value="THAND.AI pilot trial">THAND.AI pilot trial</option>
                    <option value="Enfibio V2X fleet integration">Enfibio V2X fleet integration</option>
                    <option value="Strategic partnership">Strategic partnership</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                
                <div className="grid gap-1.5 md:col-span-2">
                  <label htmlFor="message" className="text-xs font-bold text-teal-950">Message *</label>
                  <textarea 
                    id="message" 
                    required 
                    placeholder="Tell us about your team, use case, or how you would like to connect..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full border border-line rounded-xl px-3.5 py-3 text-xs text-ink bg-[#fbfdfd] outline-none transition-all focus:border-teal-500 focus:bg-white focus:shadow-[0_0_0_3px_rgba(38,166,154,.12)] resize-y min-h-[120px]"
                  />
                </div>

              </div>

              {status === 'error' && (
                <div className="mb-4 p-3 rounded-xl bg-red-50 border border-red-200 text-xs text-red-800 flex items-center gap-2">
                  <AlertCircle size={15} className="shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <button 
                type="submit" 
                disabled={status === 'submitting'}
                className="btn btn-primary"
              >
                {status === 'submitting' ? (
                  <span>Sending Inquiry...</span>
                ) : (
                  <>
                    <span>Send Inquiry</span>
                    <Send size={14} />
                  </>
                )}
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  );
}
