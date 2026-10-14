import React, { useRef } from 'react';
import { Quote } from 'lucide-react';
import { profileData } from '../../../data/profile';
import { SectionHeader } from '../../common/SectionHeader';
import { ContactCards } from './ContactCards';
import { ContactForm } from './ContactForm';
import { gsap, useGSAP } from '../../../utils/gsap';

export const Contact: React.FC = () => {
  const containerRef = useRef<HTMLElement | null>(null);

  useGSAP(() => {
    gsap.from('.contact-header', {
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

    gsap.from('.contact-cards', {
      x: -40,
      opacity: 0,
      duration: 0.85,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.contact-cards',
        start: 'top 85%',
        once: true
      }
    });

    gsap.from('.contact-form-wrapper', {
      x: 40,
      opacity: 0,
      duration: 0.85,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.contact-form-wrapper',
        start: 'top 85%',
        once: true
      }
    });

    gsap.from('.contact-quote', {
      y: 20,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.contact-quote',
        start: 'top 90%',
        once: true
      }
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} id="contact" className="w-full py-24 bg-[#0a0e18] relative overflow-hidden">
      {/* Background radial glow */}
      <div className="pointer-events-none absolute -bottom-40 left-1/3 w-[800px] h-[500px] bg-[#38BDF8]/5 rounded-full blur-[150px]" />

      <div className="max-w-7xl mx-auto px-5 lg:px-12 relative z-10">
        <div className="contact-header">
          <SectionHeader
            sectionNumber="Section 07"
            category="Direct Engagement"
            title="Let’s Discuss Your Next Strategic Platform"
            subtitle="Whether you are modernizing high-compliance industrial software, scaling enterprise aviation systems, or require battle-tested Agile delivery leadership, I am ready to engage."
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Left Column: Direct Communication Channels */}
          <div className="contact-cards lg:col-span-5 h-full">
            <ContactCards />
          </div>

          {/* Right Column: Interactive Form */}
          <div className="contact-form-wrapper lg:col-span-7 h-full">
            <ContactForm />
          </div>
        </div>

        {/* Signature Quote */}
        <div className="contact-quote mt-20 pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-6">
            <div className="w-14 h-14 rounded-full bg-[#38BDF8]/10 flex items-center justify-center text-[#38BDF8] shrink-0">
              <Quote size={24} />
            </div>
            <p className="text-base sm:text-lg text-slate-300 italic max-w-2xl font-light">
              "{profileData.executiveQuote.quote}"
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 text-[11px] font-bold text-slate-500 uppercase tracking-widest shrink-0">
            <span>{profileData.executiveQuote.author}</span>
            <span>•</span>
            <span className="text-[#38BDF8]">{profileData.executiveQuote.credential}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
