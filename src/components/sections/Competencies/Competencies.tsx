import React, { useState, useRef } from 'react';
import { competencyCategories } from '../../../data/competencies';
import { SectionHeader } from '../../common/SectionHeader';
import { CompetencyCard } from './CompetencyCard';
import { gsap, useGSAP } from '../../../utils/gsap';

export const Competencies: React.FC = () => {
  const containerRef = useRef<HTMLElement | null>(null);
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  const filteredCategories = selectedFilter === 'all'
    ? competencyCategories
    : competencyCategories.filter(cat => cat.id === selectedFilter);

  // Initial scroll reveal for header - runs ONCE on scroll into view
  useGSAP(() => {
    gsap.from('.competencies-header', {
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
  }, { scope: containerRef });

  return (
    <section ref={containerRef} id="competencies" className="w-full py-24 bg-[#0B0F19] relative">
      <div className="max-w-7xl mx-auto px-5 lg:px-12">
        <div className="competencies-header">
          <SectionHeader
            sectionNumber="Section 02"
            category="Functional Expertise"
            title="Core Competencies & Toolkit"
            subtitle="A battle-tested hybrid of structured project management frameworks, product discovery strategies, and domain-level systems understanding."
            align="between"
            rightElement={
              <div className="flex flex-wrap items-center gap-2">
                <button
                  type="button"
                  onClick={() => setSelectedFilter('all')}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer border ${
                    selectedFilter === 'all'
                      ? 'bg-[#7DD3FC] text-slate-950 border-[#7DD3FC] shadow-[0_0_15px_rgba(125,211,252,0.25)]'
                      : 'bg-[#111827] text-slate-400 border-white/5 hover:text-white'
                  }`}
                >
                  All Focus Areas
                </button>
                {competencyCategories.map((cat) => (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setSelectedFilter(cat.id)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer border ${
                      selectedFilter === cat.id
                        ? 'bg-[#7DD3FC] text-slate-950 border-[#7DD3FC] shadow-[0_0_15px_rgba(125,211,252,0.25)]'
                        : 'bg-[#111827] text-slate-400 border-white/5 hover:text-white'
                    }`}
                  >
                    {cat.id === 'agile-delivery' ? 'Agile Delivery' : cat.id === 'product-discovery' ? 'Product Discovery' : 'Technical & Domain'}
                  </button>
                ))}
              </div>
            }
          />
        </div>

        <div className="competency-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCategories.map((category) => (
            <div key={category.id} className="competency-card">
              <CompetencyCard category={category} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
