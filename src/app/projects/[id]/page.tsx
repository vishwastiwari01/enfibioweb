import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ArrowLeft, 
  ExternalLink, 
  Box, 
  Layers, 
  Cpu, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowUpRight,
  Sparkles,
  ChevronRight
} from 'lucide-react';
import { PROJECTS, getProjectBySlug } from '@/lib/data/projects';
import NavBar from '@/components/layout/NavBar';
import Footer from '@/components/layout/Footer';
import SimulationEmbed from '@/components/showroom/SimulationEmbed';
import ProjectCard from '@/components/showroom/ProjectCard';
import ProjectActionPanel from '@/components/showroom/ProjectActionPanel';

interface PageProps {
  params: Promise<{ id: string }> | { id: string };
}

export function generateStaticParams() {
  return PROJECTS.map((p) => ({
    id: p.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const resolvedParams = await Promise.resolve(params);
  const project = getProjectBySlug(resolvedParams.id);

  if (!project) {
    return {
      title: 'Project Not Found | Enfibio Technologies',
    };
  }

  return {
    title: `${project.title} — ${project.subtitle} | Enfibio Technologies`,
    description: project.desc,
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const resolvedParams = await Promise.resolve(params);
  const project = getProjectBySlug(resolvedParams.id);

  if (!project) {
    notFound();
  }

  // Related projects in the same category or adjacent
  const relatedProjects = PROJECTS.filter(
    (p) => p.slug !== project.slug && (p.category === project.category || p.cat === project.cat)
  ).slice(0, 3);

  // If not enough related in category, pick other featured
  const fallbackRelated = relatedProjects.length < 3
    ? [
        ...relatedProjects,
        ...PROJECTS.filter((p) => p.slug !== project.slug && !relatedProjects.includes(p))
      ].slice(0, 3)
    : relatedProjects;

  return (
    <div className="min-h-screen bg-[#fafcfb] text-ink flex flex-col">
      <NavBar />

      <main className="flex-1">
        {/* Breadcrumb Header Bar */}
        <section className="bg-white border-b border-line py-4">
          <div className="container mx-auto w-[min(1280px,calc(100%-40px))] flex items-center justify-between">
            <nav className="flex items-center gap-2 text-xs text-muted" aria-label="Breadcrumbs">
              <Link href="/" className="hover:text-ink transition-colors">
                Home
              </Link>
              <ChevronRight size={12} />
              <Link href="/#catalog" className="hover:text-ink transition-colors">
                Projects
              </Link>
              <ChevronRight size={12} />
              <span className="text-teal-900 font-semibold">{project.category}</span>
              <ChevronRight size={12} />
              <span className="text-ink font-bold">{project.title}</span>
            </nav>

            <Link
              href="/#catalog"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-800 hover:text-teal-600 transition-colors"
            >
              <ArrowLeft size={13} /> Back to Storefront
            </Link>
          </div>
        </section>

        {/* Project Hero Section */}
        <section className="py-12 md:py-16 bg-gradient-to-b from-white to-[#f5f9f8] border-b border-line">
          <div className="container mx-auto w-[min(1280px,calc(100%-40px))]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Left Column: Hero Meta */}
              <div className="lg:col-span-7">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-teal-50 border border-teal-200 text-teal-900">
                    {project.code}
                  </span>
                  {project.badge && (
                    <span className="text-[11px] font-black tracking-wider uppercase px-3 py-1 rounded-full bg-teal-900 text-white">
                      {project.badge}
                    </span>
                  )}
                  <span className="text-xs font-extrabold uppercase tracking-widest text-teal-700">
                    {project.domain}
                  </span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-ink mb-3 leading-[1.08]">
                  {project.title}
                </h1>

                <p className="text-lg sm:text-xl font-semibold text-teal-900 mb-6">
                  {project.subtitle}
                </p>

                <p className="text-base text-muted leading-relaxed mb-8 max-w-2xl">
                  {project.overview || project.desc}
                </p>

                {/* Primary Action Buttons */}
                <div className="flex flex-wrap items-center gap-4">
                  {project.simulationUrl && (
                    <a
                      href="#interactive"
                      className="btn btn-primary"
                    >
                      <Box size={16} /> Interactive 3D Anatomy
                    </a>
                  )}

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary"
                    >
                      Visit Live Platform <ExternalLink size={14} />
                    </a>
                  )}

                  <a
                    href="#pilot-interest"
                    className="btn btn-secondary"
                  >
                    Discuss Deployment / R&D →
                  </a>
                </div>
              </div>

              {/* Right Column: Hero Visual Showcase */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-full aspect-square max-w-[440px] rounded-3xl bg-white border border-line shadow-lg flex items-center justify-center p-6 overflow-hidden">
                  {project.video && !project.image ? (
                    <video
                      src={project.video}
                      controls
                      autoPlay
                      muted
                      loop
                      className="w-full h-full object-cover rounded-2xl"
                    />
                  ) : (
                    <img
                      src={project.image || '/thandai.png'}
                      alt={project.title}
                      className="w-full h-full object-contain drop-shadow-md"
                    />
                  )}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Interactive 3D Simulation Experience (if available) */}
        {project.simulationUrl && (
          <section id="interactive" className="py-16 bg-white border-b border-line">
            <div className="container mx-auto w-[min(1280px,calc(100%-40px))]">
              <div className="max-w-2xl mb-8">
                <div className="eyebrow mb-2">Live Simulation</div>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-ink mb-2">
                  Interactive 3D System Anatomy
                </h2>
                <p className="text-sm text-muted">
                  Rotate the 3D model, zoom in on mechanical subsystems, inspect sensor layers, and examine the internal hardware layout.
                </p>
              </div>

              {/* Simulation Embed Component */}
              <SimulationEmbed
                simulationUrl={project.simulationUrl}
                title={project.title}
                projectCode={project.code}
              />
            </div>
          </section>
        )}

        {/* Problem & Solution Engineering Deep-Dive */}
        <section className="py-16 bg-[#fbfdfd] border-b border-line">
          <div className="container mx-auto w-[min(1280px,calc(100%-40px))]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              
              {/* Problem Statement Card */}
              <div className="bg-white rounded-3xl border border-line p-8 shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 border border-amber-200 flex items-center justify-center font-bold mb-5">
                  !
                </div>
                <h3 className="text-xl font-bold text-ink tracking-tight mb-3">
                  The Problem Being Solved
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  {project.problem ||
                    'Conventional commercial approaches struggle in resource-constrained environments, leading to single points of failure, excessive power consumption, and degraded operational reliability.'}
                </p>
              </div>

              {/* Solution Card */}
              <div className="bg-white rounded-3xl border border-line p-8 shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-800 border border-teal-200 flex items-center justify-center font-bold mb-5">
                  ✓
                </div>
                <h3 className="text-xl font-bold text-ink tracking-tight mb-3">
                  Our Engineering Solution
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  {project.solution ||
                    'By pairing specialized embedded hardware with real-time autonomous intelligence, this architecture achieves robust performance without depending on fragile external infrastructure.'}
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* Technology & Key Features */}
        {project.features && project.features.length > 0 && (
          <section className="py-16 bg-white border-b border-line">
            <div className="container mx-auto w-[min(1280px,calc(100%-40px))]">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                
                <div className="lg:col-span-5">
                  <div className="eyebrow mb-2">Technical Capabilities</div>
                  <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-ink mb-4">
                    Engineered for Rigorous Real-World Demands
                  </h2>
                  <p className="text-sm text-muted leading-relaxed mb-6">
                    Every subsystem is verified through physical testbenches, simulation runs, and hardware iterations before field deployment.
                  </p>

                  {/* Specifications Card */}
                  <div className="bg-surface rounded-2xl border border-line p-5">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-teal-900 mb-3 border-b border-line pb-2">
                      Verified Specifications
                    </h4>
                    <div className="grid grid-cols-2 gap-3">
                      {Object.entries(project.specs).map(([key, val]) => (
                        <div key={key}>
                          <span className="block text-[10px] font-bold uppercase text-muted tracking-wide">
                            {key}
                          </span>
                          <span className="block text-xs font-semibold text-ink">
                            {val}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-7 flex flex-col justify-center">
                  <div className="grid gap-3.5">
                    {project.features.map((feat, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3.5 p-4 rounded-2xl bg-[#fafcfb] border border-line hover:border-teal-700/30 transition-all"
                      >
                        <CheckCircle2 size={18} className="text-teal-700 shrink-0 mt-0.5" />
                        <span className="text-sm font-semibold text-ink leading-snug">
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </section>
        )}

        {/* Pilot Testing & Engagement Action Section */}
        <section id="pilot-interest" className="py-16 bg-[#f4f8f7] border-b border-line">
          <div className="container mx-auto w-[min(1280px,calc(100%-40px))] max-w-4xl">
            <ProjectActionPanel projectSlug={project.slug} projectTitle={project.title} />
          </div>
        </section>

        {/* Media Gallery (if additional images/video exist) */}
        {project.gallery && project.gallery.length > 0 && (
          <section className="py-16 bg-[#f8faf9] border-b border-line">
            <div className="container mx-auto w-[min(1280px,calc(100%-40px))]">
              <div className="eyebrow mb-2">Media & CAD Gallery</div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-ink mb-8">
                System Visuals & Hardware Iterations
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {project.gallery.map((imgUrl, i) => (
                  <div
                    key={i}
                    className="relative rounded-2xl overflow-hidden bg-white border border-line h-64 shadow-xs flex items-center justify-center p-4 group"
                  >
                    <img
                      src={imgUrl}
                      alt={`${project.title} gallery asset ${i + 1}`}
                      className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Related Projects */}
        <section className="py-16 bg-white border-b border-line">
          <div className="container mx-auto w-[min(1280px,calc(100%-40px))]">
            <div className="flex items-center justify-between mb-8">
              <div>
                <div className="eyebrow mb-2">Related Work</div>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-ink">
                  More Technologies to Explore
                </h2>
              </div>

              <Link
                href="/#catalog"
                className="text-xs font-bold text-teal-800 hover:text-teal-600 transition-colors inline-flex items-center gap-1"
              >
                View Complete Portfolio <ArrowUpRight size={14} />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {fallbackRelated.map((p) => (
                <ProjectCard key={p.id} project={p} />
              ))}
            </div>
          </div>
        </section>

        {/* Collaboration CTA Section */}
        <section className="py-16 bg-[#062f32] text-white relative overflow-hidden">
          <div className="container mx-auto w-[min(1180px,calc(100%-40px))] text-center max-w-2xl">
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-teal-300 block mb-3">
              Partnership & Deployment
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
              Interested in {project.title}?
            </h2>
            <p className="text-sm text-[#b4d0ce] mb-8 leading-relaxed">
              We collaborate with research institutions, agricultural collectives, corporate partners, and defense stakeholders on pilot testing, field trials, and co-development.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/#contact"
                className="btn btn-primary bg-teal-500 hover:bg-teal-400 text-teal-950 font-bold"
              >
                Inquire About Collaboration →
              </Link>
              <Link
                href="/"
                className="btn btn-secondary bg-white/10 text-white border-white/20 hover:bg-white/20 hover:border-white"
              >
                Back to Homepage
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
