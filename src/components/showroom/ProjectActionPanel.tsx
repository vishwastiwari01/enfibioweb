'use client';

import React, { useState } from 'react';
import { Factory, Stethoscope, CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';

interface ProjectActionPanelProps {
  projectSlug: string;
  projectTitle: string;
}

export default function ProjectActionPanel({ projectSlug, projectTitle }: ProjectActionPanelProps) {
  const [email, setEmail] = useState('');
  const [org, setOrg] = useState('');
  const [useCase, setUseCase] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const isThandai = projectSlug === 'thandai';
  const isV2X = projectSlug === 'enfibio-v2x';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
    }, 800);
  };

  return (
    <div className="bg-white rounded-3xl border border-line p-6 sm:p-8 shadow-sm">
      {isThandai ? (
        <>
          <div className="mb-6">
            <span className="text-[10px] font-extrabold tracking-widest uppercase text-teal-800 block mb-1">
              Field Validation & Pilot Cohort
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-ink tracking-tight mb-2">
              Early Field Validation & Testing
            </h3>
            <p className="text-xs sm:text-sm text-muted">
              We are actively conducting research trials and preparing early-access field deployments.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8">
            <div className="p-4 rounded-2xl bg-surface border border-line flex items-start gap-3">
              <Factory size={20} className="text-teal-800 shrink-0 mt-0.5" />
              <div>
                <strong className="block text-xs font-bold text-ink mb-0.5">Dairy & Agriculture</strong>
                <p className="text-[11px] text-muted m-0 leading-snug">
                  Pilot dairy farms ready in Hyderabad; active engagement with FPO collectives.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-surface border border-line flex items-start gap-3">
              <Stethoscope size={20} className="text-teal-800 shrink-0 mt-0.5" />
              <div>
                <strong className="block text-xs font-bold text-ink mb-0.5">Medical & Cold Chain</strong>
                <p className="text-[11px] text-muted m-0 leading-snug">
                  Customer validation ongoing for vaccine transport, biologicals, and fisheries.
                </p>
              </div>
            </div>
          </div>
        </>
      ) : isV2X ? (
        <div className="mb-6">
          <span className="text-[10px] font-extrabold tracking-widest uppercase text-teal-800 block mb-1">
            Institutional Collaboration
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-ink tracking-tight mb-2">
            Automotive Fleet & Infrastructure Pilots
          </h3>
          <p className="text-xs sm:text-sm text-muted">
            Open to smart city transport authorities, fleet operators, and autonomous vehicle researchers.
          </p>
        </div>
      ) : (
        <div className="mb-6">
          <span className="text-[10px] font-extrabold tracking-widest uppercase text-teal-800 block mb-1">
            Technology Engagement
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-ink tracking-tight mb-2">
            Inquire About {projectTitle}
          </h3>
          <p className="text-xs sm:text-sm text-muted">
            Discuss customized deployment, licensing, joint grant proposals, or technical briefs.
          </p>
        </div>
      )}

      {/* Form or Success State */}
      {status === 'success' ? (
        <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center">
          <CheckCircle2 size={32} className="text-emerald-700 mx-auto mb-2" />
          <h4 className="text-base font-bold text-ink mb-1">Interest Received</h4>
          <p className="text-xs text-muted max-w-md mx-auto">
            Thank you for reaching out regarding {projectTitle}. Our engineering team will review your application and contact you at <strong className="text-ink">{email}</strong>.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="grid gap-3.5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div>
              <label className="block text-[11px] font-bold text-ink mb-1">Work Email *</label>
              <input
                type="email"
                required
                placeholder="name@organization.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-line bg-surface text-xs text-ink focus:outline-none focus:border-teal-700 focus:bg-white"
              />
            </div>

            <div>
              <label className="block text-[11px] font-bold text-ink mb-1">Organization / Entity *</label>
              <input
                type="text"
                required
                placeholder="e.g. Dairy Collective / Transport Lab / Hospital"
                value={org}
                onChange={(e) => setOrg(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-line bg-surface text-xs text-ink focus:outline-none focus:border-teal-700 focus:bg-white"
              />
            </div>
          </div>

          <div>
            <label className="block text-[11px] font-bold text-ink mb-1">Proposed Pilot or Application Details</label>
            <input
              type="text"
              placeholder="Tell us about your target application, volume, or operating environment..."
              value={useCase}
              onChange={(e) => setUseCase(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-line bg-surface text-xs text-ink focus:outline-none focus:border-teal-700 focus:bg-white"
            />
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2">
            <span className="text-[11px] text-muted flex items-center gap-1.5">
              <ShieldCheck size={14} className="text-teal-800" />
              Verified early-access & research engagement
            </span>

            <button
              type="submit"
              disabled={status === 'submitting'}
              className="btn btn-primary btn-small text-xs py-2.5 px-6 shadow-sm self-start sm:self-auto"
            >
              {status === 'submitting' ? 'Submitting...' : 'Express Pilot Interest →'}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
