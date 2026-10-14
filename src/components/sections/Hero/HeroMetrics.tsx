import React from 'react';
import { AnimatedCounter } from '../../common/AnimatedCounter';

export const HeroMetrics: React.FC = () => {
  return (
    <div className="mt-12 sm:mt-20 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 p-4 sm:p-8 rounded-2xl bg-[#111827]/70 border border-white/10 backdrop-blur-xl shadow-2xl relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#38BDF8]/5 via-transparent to-[#10B981]/5 pointer-events-none" />

      {/* Metric 1 */}
      <div className="flex flex-col gap-1.5 sm:gap-2 p-1.5 sm:p-2 relative z-10 border-r border-white/5">
        <span className="text-[10px] sm:text-[11px] font-bold text-slate-400 uppercase tracking-widest">
          Leadership Tenure
        </span>
        <div className="flex items-baseline gap-1">
          <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#38BDF8] tracking-tight">
            <AnimatedCounter endValue={7} suffix="+" />
          </span>
          <span className="text-sm sm:text-base lg:text-lg font-semibold text-slate-200">Years</span>
        </div>
        <p className="text-[11px] sm:text-xs text-slate-500 leading-snug">
          Owning full lifecycle software products from 0 to scale
        </p>
      </div>

      {/* Metric 2 */}
      <div className="flex flex-col gap-1.5 sm:gap-2 p-1.5 sm:p-2 relative z-10 lg:border-r lg:border-white/5">
        <span className="text-[10px] sm:text-[11px] font-bold text-slate-400 uppercase tracking-widest">
          Aviation Systems
        </span>
        <div className="flex items-baseline gap-1">
          <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#10B981] tracking-tight">
            <AnimatedCounter endValue={4} />
          </span>
          <span className="text-sm sm:text-base lg:text-lg font-semibold text-slate-200">Shipped</span>
        </div>
        <p className="text-[11px] sm:text-xs text-slate-500 leading-snug">
          ICAO Doc 9859 compliant safety & medical suites
        </p>
      </div>

      {/* Metric 3 */}
      <div className="flex flex-col gap-1.5 sm:gap-2 p-1.5 sm:p-2 relative z-10 border-r border-white/5">
        <span className="text-[10px] sm:text-[11px] font-bold text-slate-400 uppercase tracking-widest">
          Efficiency Gained
        </span>
        <div className="flex items-baseline gap-1">
          <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
            <AnimatedCounter endValue={90} suffix="%+" />
          </span>
        </div>
        <p className="text-[11px] sm:text-xs text-slate-500 leading-snug">
          Workflow automation & paperless flight audit shift
        </p>
      </div>

      {/* Metric 4 */}
      <div className="flex flex-col gap-1.5 sm:gap-2 p-1.5 sm:p-2 relative z-10">
        <span className="text-[10px] sm:text-[11px] font-bold text-slate-400 uppercase tracking-widest">
          Audit Rigor
        </span>
        <div className="flex items-baseline gap-1">
          <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#10B981] tracking-tight">
            0
          </span>
          <span className="text-sm sm:text-base lg:text-lg font-semibold text-slate-200">Findings</span>
        </div>
        <p className="text-[11px] sm:text-xs text-slate-500 leading-snug">
          Flawless ISO & regulatory civil aviation clearance
        </p>
      </div>
    </div>
  );
};
