import React from 'react';
import { Modal } from '../../common/Modal';
import type { ProjectCaseStudy } from '../../../types';
import { CheckCircle, AlertTriangle, ShieldCheck, Cpu, ArrowRight } from 'lucide-react';
import { AnimatedCounter } from '../../common/AnimatedCounter';

interface ProjectModalProps {
  project: ProjectCaseStudy | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  if (!project) return null;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      maxWidth="4xl"
      title={
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center gap-2">
            <span className={`w-2 h-2 rounded-full ${project.dotColor}`} />
            <span className={`text-xs font-bold ${project.tagColor} uppercase tracking-wider`}>
              {project.tagText} // {project.subTag}
            </span>
          </div>
          <span className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            {project.title}
          </span>
        </div>
      }
      subtitle={`Role: ${project.role} | Clients: ${project.clients} | Timeline: ${project.period}`}
    >
      <div className="space-y-8 text-slate-300">
        {/* Executive Overview */}
        <div className="p-5 rounded-2xl bg-slate-900/60 border border-white/5 space-y-2">
          <h4 className="text-xs font-bold text-[#38BDF8] uppercase tracking-widest">
            Executive Summary & Mandate
          </h4>
          <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
            {project.overview}
          </p>
        </div>

        {/* Live Metrics Grid */}
        <div>
          <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">
            Production Verified Outcomes
          </h4>
          <div className="grid grid-cols-2 gap-4">
            {project.metrics.map((metric, idx) => (
              <div
                key={idx}
                className="p-4 sm:p-5 rounded-xl bg-[#0B0F19] border border-white/5 flex flex-col gap-1"
              >
                <span className={`text-3xl sm:text-4xl font-bold tracking-tight ${metric.color}`}>
                  {metric.isText ? (
                    metric.suffix
                  ) : (
                    <>
                      {metric.prefix}
                      <AnimatedCounter endValue={metric.val} suffix={metric.suffix} />
                    </>
                  )}
                </span>
                <span className="text-xs font-bold text-white uppercase tracking-wider mt-1">
                  {metric.label}
                </span>
                <span className="text-xs text-slate-500">{metric.sub}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Challenges & Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Challenges */}
          <div className="p-5 rounded-2xl bg-slate-900/40 border border-white/5 space-y-3">
            <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
              <AlertTriangle size={18} />
              <span>Operational & Compliance Challenges</span>
            </div>
            <ul className="space-y-2.5">
              {project.challenges.map((chal, cIdx) => (
                <li key={cIdx} className="text-xs sm:text-sm text-slate-400 leading-relaxed flex items-start gap-2">
                  <span className="text-amber-400 mt-1">•</span>
                  <span>{chal}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div className="p-5 rounded-2xl bg-slate-900/40 border border-white/5 space-y-3">
            <div className="flex items-center gap-2 text-[#10B981] font-bold text-sm">
              <CheckCircle size={18} />
              <span>Architectural & Product Solutions</span>
            </div>
            <ul className="space-y-2.5">
              {project.solutions.map((sol, sIdx) => (
                <li key={sIdx} className="text-xs sm:text-sm text-slate-300 leading-relaxed flex items-start gap-2">
                  <span className="text-[#10B981] mt-1">•</span>
                  <span>{sol}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Architectural Highlights & Regulatory Standards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
              <Cpu size={15} className="text-[#38BDF8]" />
              System Architecture & Data Flows
            </h4>
            <div className="space-y-2">
              {project.architectureHighlights.map((arch, aIdx) => (
                <div key={aIdx} className="p-3 rounded-lg bg-slate-900/50 border border-white/5 text-xs text-slate-300 leading-relaxed">
                  {arch}
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
              <ShieldCheck size={15} className="text-[#10B981]" />
              Statutory & Quality Governance
            </h4>
            <div className="space-y-2">
              {project.regulatoryStandards.map((reg, rIdx) => (
                <div key={rIdx} className="p-3 rounded-lg bg-slate-900/50 border border-white/5 text-xs font-medium text-slate-300 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                  <span>{reg}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tech Stack Chips */}
        <div>
          <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">
            Implemented Tech Stack & Tooling
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 rounded-lg bg-slate-800 text-xs font-mono text-slate-200 border border-white/5"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom CTA in Modal */}
        <div className="pt-4 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xs text-slate-400">
            Interested in deploying similar high-compliance platforms?
          </span>
          <a
            href="#contact"
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-[#7DD3FC] hover:bg-[#BAE6FD] text-slate-950 font-bold text-xs uppercase tracking-wider flex items-center gap-2 transition-all shadow-[0_0_15px_rgba(125,211,252,0.25)]"
          >
            <span>Inquire About Strategic Roles</span>
            <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </Modal>
  );
};
