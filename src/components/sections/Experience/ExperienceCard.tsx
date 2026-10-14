import React from 'react';
import type { ExperienceRole } from '../../../types';
import { ChevronRight } from 'lucide-react';

interface ExperienceCardProps {
  role: ExperienceRole;
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({ role }) => {
  return (
    <div className="p-7 sm:p-8 rounded-2xl bg-[#111827]/80 border border-white/5 shadow-xl backdrop-blur-xl hover:border-slate-700 transition-colors">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <span className={`text-[11px] font-bold ${role.tagColor} uppercase tracking-widest`}>
            {role.period} // {role.type}
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-white mt-1.5 tracking-tight">
            {role.title}
          </h3>
          <p className="text-base sm:text-lg font-medium text-blue-400 mt-0.5">
            {role.company}
          </p>
        </div>

        {role.isActive && (
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800 border border-white/5 w-fit">
            <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse shadow-[0_0_8px_#10B981]" />
            <span className="text-[10px] font-bold text-white tracking-wider uppercase">
              Active Leadership Role
            </span>
          </div>
        )}
      </div>

      {/* Summary */}
      <p className="text-sm sm:text-base text-slate-300 mb-6 leading-relaxed font-light">
        {role.summary}
      </p>

      {/* Responsibilities */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-4 border-t border-white/5 text-xs sm:text-sm text-slate-400">
        {role.responsibilities.map((resp, rIdx) => (
          <div key={rIdx} className="flex items-start gap-2.5">
            <ChevronRight className={`${role.tagColor} shrink-0 mt-0.5`} size={16} />
            <span className="leading-relaxed">{resp}</span>
          </div>
        ))}
      </div>

      {/* Deliverables / Tech Stack Badges */}
      <div className="mt-6 pt-4 border-t border-white/5 flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-1.5">
          <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mr-1">
            Stack:
          </span>
          {role.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-md bg-slate-800/80 text-[11px] font-mono text-slate-300 border border-white/5"
            >
              {tech}
            </span>
          ))}
        </div>
        <span className="text-[11px] font-medium text-slate-500">
          📍 {role.location}
        </span>
      </div>
    </div>
  );
};
