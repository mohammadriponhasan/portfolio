import React, { useRef } from 'react';
import { ExternalLink } from 'lucide-react';
import { profileData } from '../../../data/profile';
import { SectionHeader } from '../../common/SectionHeader';
import { SuperpowerCard } from './SuperpowerCard';
import { PillarCards } from './PillarCards';
import { gsap, useGSAP } from '../../../utils/gsap';

export const About: React.FC = () => {
  const containerRef = useRef<HTMLElement | null>(null);

  useGSAP(() => {
    gsap.from('.about-header', {
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

    gsap.from('.about-portrait', {
      x: -40,
      opacity: 0,
      duration: 0.9,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.about-portrait',
        start: 'top 80%',
        once: true
      }
    });

    gsap.from('.about-content', {
      x: 40,
      opacity: 0,
      duration: 0.9,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.about-content',
        start: 'top 80%',
        once: true
      }
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} id="about" className="w-full py-24 bg-[#0a0e18] relative">
      <div className="max-w-7xl mx-auto px-5 lg:px-12">
        <div className="about-header">
          <SectionHeader
            sectionNumber="Section 01"
            category="Executive Profile"
            title="Architecting High-Trust Platforms at the Intersection of Engineering & Global Compliance."
            subtitle="Engineering-grounded Technical Product Manager specializing in taking data-intensive systems from ambiguity to bulletproof certification."
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Portrait & Quick Metadata */}
          <div className="about-portrait lg:col-span-5 flex flex-col gap-6">
            <div className="relative group rounded-2xl overflow-hidden bg-[#111827] p-2 border border-white/10 shadow-2xl">
              <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-slate-800">
                <img
                  src={profileData.avatarUrl}
                  alt={profileData.fullName}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-transparent to-transparent opacity-90" />

                {/* Floating Badge */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between p-4 rounded-xl bg-[#0B0F19]/85 backdrop-blur-md border border-white/10 shadow-xl">
                  <div className="flex items-center gap-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#10B981] shadow-[0_0_8px_#10B981]" />
                    <div className="flex flex-col">
                      <span className="text-[11px] font-bold text-white uppercase tracking-wider">
                        Technical Product Leader
                      </span>
                      <span className="text-xs text-slate-400">Aviation & Enterprise SDLC</span>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-[#38BDF8]/10 text-[#38BDF8] text-[10px] font-bold uppercase tracking-wider">
                    Dhaka, BD
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Metadata Card */}
            <div className="flex flex-col gap-3 p-6 rounded-2xl bg-[#111827]/60 border border-white/5 backdrop-blur-md">
              <div className="flex items-center justify-between py-1.5 border-b border-white/5 text-sm">
                <span className="text-slate-400">Direct Email</span>
                <a
                  href={`mailto:${profileData.email}`}
                  className="text-[#38BDF8] hover:text-[#7dd3fc] font-medium transition-colors"
                >
                  {profileData.email}
                </a>
              </div>

              <div className="flex items-center justify-between py-1.5 border-b border-white/5 text-sm">
                <span className="text-slate-400">Location</span>
                <span className="text-slate-200 font-medium">Baridhara, Gulshan, Dhaka</span>
              </div>

              <div className="flex items-center justify-between py-1.5 border-b border-white/5 text-sm">
                <span className="text-slate-400">LinkedIn</span>
                <a
                  href={profileData.linkedInUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#38BDF8] hover:text-[#7dd3fc] font-medium transition-colors flex items-center gap-1"
                >
                  View Profile <ExternalLink size={13} />
                </a>
              </div>

              <div className="flex items-center justify-between py-1.5 text-sm">
                <span className="text-slate-400">Core Verification</span>
                <span className="text-[11px] font-bold text-[#10B981] tracking-widest">
                  PMP® #4465221 | ISTQB®
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Executive Narrative */}
          <div className="about-content lg:col-span-7 flex flex-col gap-6">
            <div className="flex flex-col gap-5 text-base sm:text-lg text-slate-300 leading-relaxed font-light">
              <p>
                {profileData.executiveSummary[0]}
              </p>
              <p>
                My primary focus over the last several years has centered on highly regulated industries—specifically commercial aviation safety. I have driven the multi-year lifecycle of enterprise platforms such as <strong className="text-white font-medium">AvioSMS, AvioFDMA</strong>, and <strong className="text-white font-medium">Aviation Medical Record (AMR)</strong>, ensuring continuous alignment with strict international standards including <strong className="text-white font-semibold">ICAO Annex 6, ICAO Doc 9859</strong>, and civil aviation authority mandates.
              </p>
            </div>

            {/* Core Superpower Callout */}
            <SuperpowerCard />

            {/* Strategic Pillars */}
            <PillarCards />
          </div>
        </div>
      </div>
    </section>
  );
};
