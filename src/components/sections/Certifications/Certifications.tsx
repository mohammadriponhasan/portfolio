import React, { useRef } from 'react';
import { certificationsData } from '../../../data/certifications';
import { SectionHeader } from '../../common/SectionHeader';
import { CertificationCard } from './CertificationCard';
import { gsap, useGSAP } from '../../../utils/gsap';

export const Certifications: React.FC = () => {
  const containerRef = useRef<HTMLElement | null>(null);

  useGSAP(() => {
    gsap.from('.certifications-header', {
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

    gsap.from('.certification-card-item', {
      scale: 0.95,
      y: 35,
      opacity: 0,
      duration: 0.85,
      stagger: 0.15,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.certifications-grid',
        start: 'top 85%',
        once: true
      }
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} id="certifications" className="w-full py-24 bg-[#0B0F19] relative">
      <div className="max-w-7xl mx-auto px-5 lg:px-12">
        <div className="certifications-header">
          <SectionHeader
            sectionNumber="Section 06"
            category="Verified Credentials"
            title="Professional Certifications"
            subtitle="Internationally recognized governance, quality engineering, and digital product management credentials."
          />
        </div>

        <div className="certifications-grid grid grid-cols-1 md:grid-cols-2 gap-8">
          {certificationsData.map((cert) => (
            <div key={cert.id} className="certification-card-item">
              <CertificationCard cert={cert} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
