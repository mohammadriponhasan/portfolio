import React from 'react';
import type { ProjectCaseStudy } from '../../../types';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { AnimatedCounter } from '../../common/AnimatedCounter';

interface ProjectCardProps {
  project: ProjectCaseStudy;
  onOpenModal: (project: ProjectCaseStudy) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenModal }) => {
  return (
    <div className="flex flex-col rounded-2xl bg-[#111827]/80 border border-white/5 shadow-2xl backdrop-blur-xl overflow-hidden hover:border-slate-600 transition-all duration-500 ease-out group h-full">
      {/* Top accent line */}
      <div className="h-1 w-full bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:via-[#38BDF8]/60 transition-colors duration-500" />

      {/* Header */}
      <div className="p-7 sm:p-8 flex flex-col gap-4 bg-[#1e293b]/20 border-b border-white/5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full ${project.tagBg}`}>
            <span className={`w-2 h-2 rounded-full ${project.dotColor}`} />
            <span className={`text-[11px] font-bold ${project.tagColor} uppercase tracking-wider`}>
              {project.tagText}
            </span>
          </div>
          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
            {project.subTag}
          </span>
        </div>

        <h3 className="text-2xl font-bold text-white tracking-tight mt-1 group-hover:text-[#38BDF8] transition-colors">
          {project.title}
        </h3>

        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs sm:text-sm text-slate-400">
          <span>
            <strong className="text-slate-300">Role:</strong> {project.role}
          </span>
          <span>•</span>
          <span>
            <strong className="text-slate-300">
              {project.clients === 'Retail E-Commerce' || project.clients === 'Operations & Logistics'
                ? 'Domain:'
                : 'Clients:'}
            </strong>{' '}
            {project.clients}
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="p-7 sm:p-8 flex flex-col flex-1 gap-6 justify-between">
        <div className="flex flex-col gap-4">
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-light">
            {project.desc}
          </p>

          <div className="flex flex-col gap-2.5 pt-2">
            {project.bullets.map((bullet, bIdx) => (
              <div key={bIdx} className="flex items-start gap-3">
                <CheckCircle className={`${project.tagColor} shrink-0 mt-0.5`} size={17} />
                <span className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {bullet}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Metrics Grid & Modal Trigger */}
        <div className="pt-6 border-t border-white/5 flex flex-col gap-4">
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {project.metrics.map((metric, mIdx) => (
              <div
                key={mIdx}
                className="p-3.5 sm:p-4 rounded-xl bg-[#0B0F19] border border-white/5 flex flex-col gap-1"
              >
                <span className={`text-2xl sm:text-3xl font-bold tracking-tight ${metric.color}`}>
                  {metric.isText ? (
                    metric.suffix
                  ) : (
                    <>
                      {metric.prefix}
                      <AnimatedCounter endValue={metric.val} suffix={metric.suffix} />
                    </>
                  )}
                </span>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">
                  {metric.label}
                </span>
                <span className="text-[11px] text-slate-500">{metric.sub}</span>
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={() => onOpenModal(project)}
            className="w-full py-2.5 px-4 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-200 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 border border-white/10 group-hover:border-[#38BDF8]/30 transition-all"
          >
            <span>Inspect Architecture & Case Study</span>
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};
