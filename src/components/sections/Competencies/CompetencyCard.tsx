import React from 'react';
import { Rocket, ClipboardList, Plane, ShieldCheck, Brain, Database } from 'lucide-react';
import type { CompetencyCategory } from '../../../types';
import { TiltCard } from '../../common/TiltCard';

interface CompetencyCardProps {
  category: CompetencyCategory;
}

export const CompetencyCard: React.FC<CompetencyCardProps> = ({ category }) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'rocket':
        return <Rocket size={26} />;
      case 'clipboard':
        return <ClipboardList size={26} />;
      case 'plane':
        return <Plane size={26} />;
      case 'shield':
        return <ShieldCheck size={26} />;
      case 'brain':
        return <Brain size={26} />;
      default:
        return <Database size={26} />;
    }
  };

  return (
    <TiltCard
      className={`flex flex-col p-7 sm:p-8 rounded-2xl bg-[#111827]/80 border border-white/5 shadow-xl backdrop-blur-xl group ${category.borderColor} transition-colors h-full`}
    >
      <div className="flex items-center gap-4 mb-6">
        <div
          className={`w-14 h-14 rounded-xl ${category.accentBg} flex items-center justify-center ${category.accentColor} group-hover:scale-110 transition-transform duration-300`}
        >
          {getIcon(category.iconName)}
        </div>
        <div className="flex flex-col">
          <span className="text-xl font-bold text-white tracking-tight">{category.title}</span>
          <span className={`text-[11px] font-bold ${category.accentColor} uppercase tracking-wider mt-1`}>
            {category.subtitle}
          </span>
        </div>
      </div>

      <p className="text-sm text-slate-400 mb-6 leading-relaxed flex-grow">
        {category.description}
      </p>

      {/* Skills Pill Cloud */}
      <div className="flex flex-wrap gap-2 mb-6">
        {category.skills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1.5 rounded-lg bg-slate-800/60 border border-white/5 text-slate-200 text-xs font-medium hover:border-white/20 transition-colors"
          >
            {skill}
          </span>
        ))}
      </div>

      {/* Tools & Frameworks Footer */}
      <div className="pt-4 border-t border-white/5 flex flex-col gap-2">
        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
          Key Tooling & Stack
        </span>
        <div className="flex flex-wrap gap-1.5">
          {category.toolsAndFrameworks.map((tool) => (
            <span
              key={tool}
              className="text-[11px] font-mono text-slate-400 bg-slate-900/80 px-2 py-0.5 rounded border border-white/5"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </TiltCard>
  );
};
