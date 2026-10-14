import React, { useRef } from 'react';
import { Award } from 'lucide-react';
import { educationData } from '../../../data/education';
import { SectionHeader } from '../../common/SectionHeader';
import { TiltCard } from '../../common/TiltCard';
import { gsap, useGSAP } from '../../../utils/gsap';

export const Education: React.FC = () => {
  const containerRef = useRef<HTMLElement | null>(null);

  useGSAP(() => {
    gsap.from('.education-header', {
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
        once: true
      }
    });

    gsap.from('.education-card', {
      scale: 0.95,
      y: 30,
      opacity: 0,
      duration: 0.9,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.education-card',
        start: 'top 85%',
        once: true
      }
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} id="education" className="w-full py-24 bg-[#0a0e18] relative">
      <div className="max-w-7xl mx-auto px-5 lg:px-12">
        <div className="education-header">
          <SectionHeader
            sectionNumber="Section 05"
            category="Academic Foundation"
            title="Education"
            subtitle="Comprehensive foundational education in systems analysis, mathematical logic, and computing architectures."
          />
        </div>

        <div className="grid grid-cols-1 gap-8">
          <div className="education-card">
            <TiltCard className="flex flex-col p-8 sm:p-10 rounded-2xl bg-[#111827]/80 border border-white/5 shadow-xl backdrop-blur-xl group hover:border-[#38BDF8]/40 transition-colors h-full">
              <div className="flex items-start justify-between mb-8">
                <div className="w-14 h-14 rounded-xl bg-[#38BDF8]/10 flex items-center justify-center text-[#38BDF8] group-hover:bg-[#38BDF8]/20 transition-colors">
                  <Award size={28} />
                </div>
                <span className="px-4 py-1.5 rounded-full bg-[#38BDF8]/10 border border-[#38BDF8]/20 text-[#38BDF8] text-[10px] font-bold uppercase tracking-wider">
                  {educationData.level}
                </span>
              </div>

              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-2">
                Undergraduate Degree // {educationData.period}
              </span>

              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 tracking-tight">
                {educationData.degree}
              </h3>

              <p className="text-base text-slate-300 mb-6 max-w-3xl leading-relaxed font-light">
                <strong className="text-white font-medium">{educationData.institution}</strong>. {educationData.description}
              </p>

              {/* Coursework Focus */}
              <div className="mb-8">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-3">
                  Foundational Engineering Disciplines
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  {educationData.focusAreas.map((area) => (
                    <div
                      key={area}
                      className="p-3 rounded-lg bg-slate-900/60 border border-white/5 text-xs text-slate-300 flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]" />
                      <span>{area}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Footer Note */}
              <div className="mt-auto pt-6 border-t border-white/5 flex flex-wrap items-center justify-between gap-4 text-xs font-medium text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#10B981]" />
                  <span className="text-slate-300">{educationData.relevanceToProduct}</span>
                </div>
                <span className="text-[11px] font-mono text-slate-500 uppercase">
                  {educationData.location}
                </span>
              </div>
            </TiltCard>
          </div>
        </div>
      </div>
    </section>
  );
};
