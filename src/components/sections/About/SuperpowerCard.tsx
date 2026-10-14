import React from 'react';
import { Brain } from 'lucide-react';
import { profileData } from '../../../data/profile';

export const SuperpowerCard: React.FC = () => {
  return (
    <div className="p-6 sm:p-8 rounded-2xl bg-[#1e293b]/50 border border-white/10 shadow-xl relative overflow-hidden mt-4">
      <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#38BDF8]" />
      <div className="flex flex-col gap-3 pl-2 sm:pl-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-[#38BDF8]/10 flex items-center justify-center text-[#38BDF8] shrink-0">
            <Brain size={24} />
          </div>
          <span className="text-base sm:text-lg font-bold text-white tracking-tight">
            {profileData.coreSuperpower.title}
          </span>
        </div>
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
          {profileData.coreSuperpower.description}
        </p>
      </div>
    </div>
  );
};
