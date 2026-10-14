import React, { useState, useRef } from 'react';
import { projectsData } from '../../../data/projects';
import type { ProjectCaseStudy } from '../../../types';
import { SectionHeader } from '../../common/SectionHeader';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';
import { gsap, useGSAP } from '../../../utils/gsap';

export const Projects: React.FC = () => {
  const containerRef = useRef<HTMLElement | null>(null);
  const [selectedProject, setSelectedProject] = useState<ProjectCaseStudy | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filter, setFilter] = useState<'all' | 'aviation' | 'compliance' | 'ecommerce' | 'fleet'>('all');

  const handleOpenModal = (project: ProjectCaseStudy) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const filteredProjects = filter === 'all'
    ? projectsData
    : projectsData.filter((p) => p.category === filter);

  // Initial scroll reveal for header - runs ONCE on scroll into view
  useGSAP(() => {
    gsap.from('.projects-header', {
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
    <section ref={containerRef} id="products" className="w-full py-24 bg-[#0a0e18] relative">
      <div className="max-w-7xl mx-auto px-5 lg:px-12">
        <div className="projects-header">
          <SectionHeader
            sectionNumber="Section 03"
            category="Flagship Case Studies"
            title="Featured Products & Verified Impact"
            subtitle="Real enterprise systems shipped into active production, handling mission-critical data for commercial airlines and high-volume digital users."
            align="between"
            rightElement={
              <div className="flex flex-wrap items-center gap-2">
                <button
                  type="button"
                  onClick={() => setFilter('all')}
                  className={`px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer border ${
                    filter === 'all'
                      ? 'bg-[#10B981] text-slate-950 border-[#10B981]'
                      : 'bg-[#111827] text-slate-400 border-white/5 hover:text-white'
                  }`}
                >
                  All Projects
                </button>
                <button
                  type="button"
                  onClick={() => setFilter('aviation')}
                  className={`px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer border ${
                    filter === 'aviation'
                      ? 'bg-[#10B981] text-slate-950 border-[#10B981]'
                      : 'bg-[#111827] text-slate-400 border-white/5 hover:text-white'
                  }`}
                >
                  Aviation Safety
                </button>
                <button
                  type="button"
                  onClick={() => setFilter('compliance')}
                  className={`px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer border ${
                    filter === 'compliance'
                      ? 'bg-[#10B981] text-slate-950 border-[#10B981]'
                      : 'bg-[#111827] text-slate-400 border-white/5 hover:text-white'
                  }`}
                >
                  Aeromedical
                </button>
                <button
                  type="button"
                  onClick={() => setFilter('ecommerce')}
                  className={`px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer border ${
                    filter === 'ecommerce'
                      ? 'bg-[#10B981] text-slate-950 border-[#10B981]'
                      : 'bg-[#111827] text-slate-400 border-white/5 hover:text-white'
                  }`}
                >
                  E-Commerce
                </button>
                <button
                  type="button"
                  onClick={() => setFilter('fleet')}
                  className={`px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer border ${
                    filter === 'fleet'
                      ? 'bg-[#10B981] text-slate-950 border-[#10B981]'
                      : 'bg-[#111827] text-slate-400 border-white/5 hover:text-white'
                  }`}
                >
                  Fleet & Ground
                </button>
              </div>
            }
          />
        </div>

        <div className="projects-grid grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card-item">
              <ProjectCard project={project} onOpenModal={handleOpenModal} />
            </div>
          ))}
        </div>
      </div>

      {/* Deep Dive Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  );
};
