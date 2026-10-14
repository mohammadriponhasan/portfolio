import React, { useRef } from 'react';
import { Layers, Mail, FileText } from 'lucide-react';
import { profileData } from '../../../data/profile';
import { MagneticButton } from '../../common/MagneticButton';
import { HeroMetrics } from './HeroMetrics';
import { gsap, useGSAP } from '../../../utils/gsap';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const containerRef = useRef<HTMLElement | null>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.from('.hero-badge', {
      y: 20,
      opacity: 0,
      duration: 0.6
    })
      .from('.hero-title', {
        y: 35,
        opacity: 0,
        duration: 0.8
      }, '-=0.4')
      .from('.hero-subtitle', {
        y: 25,
        opacity: 0,
        duration: 0.7
      }, '-=0.5')
      .from('.hero-desc', {
        y: 20,
        opacity: 0,
        duration: 0.7
      }, '-=0.5')
      .from('.hero-actions', {
        y: 20,
        opacity: 0,
        duration: 0.6
      }, '-=0.4')
      .from('.hero-metrics', {
        y: 30,
        opacity: 0,
        duration: 0.8
      }, '-=0.3');
  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      className="relative w-full overflow-hidden bg-[#0B0F19] pt-32 pb-20 lg:pb-32 lg:pt-44"
    >
      {/* Ambient Luminous Effects */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#38BDF8]/10 rounded-full blur-[140px]" />
      <div className="pointer-events-none absolute top-1/2 -right-40 w-[500px] h-[400px] bg-[#10B981]/5 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-5 lg:px-12 relative z-10">
        {/* Availability Badge */}
        <div className="hero-badge flex items-center justify-start mb-8">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-800/80 border border-white/10 shadow-[0_0_24px_rgba(56,189,248,0.12)] backdrop-blur-md">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#10B981] shadow-[0_0_8px_#10B981]" />
            </span>
            <span className="text-[11px] font-bold text-[#10B981] tracking-widest uppercase">
              ⚡ {profileData.statusBadge}
            </span>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-8 flex flex-col gap-6">
            <h1 className="hero-title text-4xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tighter leading-[1.08]">
              {profileData.fullName}
            </h1>

            <h2 className="hero-subtitle text-xl sm:text-2xl lg:text-3xl font-semibold text-[#38BDF8] tracking-tight">
              {profileData.primaryTitle}
              <span className="text-slate-400 font-normal ml-0 sm:ml-3 block sm:inline mt-2 sm:mt-0 text-lg sm:text-2xl">
                | PMP® & ISTQB® Certified
              </span>
            </h2>

            <p className="hero-desc text-base sm:text-lg lg:text-xl text-slate-300 max-w-2xl leading-relaxed">
              7+ years of proven leadership owning end-to-end delivery of complex, mission-critical web ecosystems across enterprise aviation, multi-tenant fleet operations, and high-scale commerce.
            </p>
          </div>

          <div className="hero-actions lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-4">
            <MagneticButton
              href="#products"
              className="w-full px-6 py-4 rounded-xl bg-[#7DD3FC] hover:bg-[#BAE6FD] text-slate-950 font-bold text-base sm:text-lg shadow-[0_0_30px_rgba(125,211,252,0.25)] hover:shadow-[0_0_35px_rgba(125,211,252,0.45)] transition-all"
            >
              <Layers size={20} />
              View Featured Products
            </MagneticButton>

            <div className="flex gap-3 w-full">
              <a
                href="#contact"
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-slate-800/90 text-slate-200 font-semibold text-sm hover:bg-slate-700 hover:text-white transition-colors border border-white/10"
              >
                <Mail size={16} />
                Contact Me
              </a>
              <button
                type="button"
                onClick={onOpenResume}
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-slate-800/90 text-[#7DD3FC] font-semibold text-sm hover:bg-slate-700 transition-colors border border-white/10"
              >
                <FileText size={16} />
                <span>Resume</span>
              </button>
            </div>
          </div>
        </div>

        {/* Key Metrics Grid */}
        <div className="hero-metrics">
          <HeroMetrics />
        </div>
      </div>
    </section>
  );
};
