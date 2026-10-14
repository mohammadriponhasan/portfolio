import React, { useRef } from 'react';
import { experienceData } from '../../../data/experience';
import { SectionHeader } from '../../common/SectionHeader';
import { ExperienceCard } from './ExperienceCard';
import { gsap, useGSAP } from '../../../utils/gsap';

export const Experience: React.FC = () => {
  const containerRef = useRef<HTMLElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    // Header reveal
    gsap.from('.experience-header', {
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

    // Timeline fill scrub animation
    if (trackRef.current) {
      gsap.to('.timeline-track-fill', {
        scaleY: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: trackRef.current,
          start: 'top 65%',
          end: 'bottom 75%',
          scrub: 0.5
        }
      });
    }

    // Role cards reveal - animates the card without displacing the timeline node
    const cards = gsap.utils.toArray<HTMLElement>('.timeline-card');
    cards.forEach((card) => {
      gsap.from(card, {
        x: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
          once: true
        }
      });
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} id="experience" className="w-full py-24 bg-[#0B0F19] relative">
      <div className="max-w-7xl mx-auto px-5 lg:px-12">
        <div className="experience-header">
          <SectionHeader
            sectionNumber="Section 04"
            category="Career Trajectory"
            title="Professional Experience"
            subtitle="Progressive technical leadership spanning enterprise software houses, digital marketplaces, and industrial automation engineering."
          />
        </div>

        <div className="relative flex flex-col gap-12" ref={trackRef}>
          {/* Vertical Spine Track - Centered within w-8 / sm:w-10 column */}
          <div className="absolute left-0 top-6 bottom-6 w-8 sm:w-10 flex justify-center pointer-events-none">
            <div className="w-1 h-full bg-slate-800 rounded-full relative overflow-hidden">
              {/* Progress Line - Nested 100% inside base line, impossible to disalign */}
              <div
                className="timeline-track-fill w-full h-full bg-gradient-to-b from-[#38BDF8] via-[#10B981] to-blue-500 rounded-full origin-top scale-y-0 will-change-transform"
              />
            </div>
          </div>

          {experienceData.map((role, idx) => (
            <div
              key={role.id}
              className="timeline-item relative flex items-start gap-4 sm:gap-6"
            >
              {/* Milestone Node Column - Identical w-8 / sm:w-10 width, perfectly centered */}
              <div className="flex flex-col items-center shrink-0 w-8 sm:w-10 pt-3 z-10">
                <div
                  className={`w-6 h-6 rounded-full bg-[#0B0F19] border-4 transition-all duration-300 ${
                    idx === 0
                      ? 'border-[#38BDF8] shadow-[0_0_15px_rgba(56,189,248,0.4)]'
                      : idx === 1
                      ? 'border-[#10B981] shadow-[0_0_15px_rgba(16,185,129,0.4)]'
                      : 'border-slate-600'
                  }`}
                />
              </div>

              {/* Timeline Card - Flexes in right column */}
              <div className="timeline-card flex-1 min-w-0">
                <ExperienceCard role={role} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
