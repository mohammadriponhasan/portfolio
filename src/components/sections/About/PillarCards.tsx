import React from 'react';
import { Gauge, ShieldCheck, Handshake } from 'lucide-react';
import { profileData } from '../../../data/profile';

export const PillarCards: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'gauge':
        return <Gauge className="text-[#38BDF8] mb-2" size={24} />;
      case 'shield':
        return <ShieldCheck className="text-[#10B981] mb-2" size={24} />;
      case 'handshake':
        return <Handshake className="text-blue-400 mb-2" size={24} />;
      default:
        return null;
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
      {profileData.pillars.map((pillar, idx) => (
        <div
          key={idx}
          className="p-5 rounded-xl bg-[#111827]/80 border border-white/5 flex flex-col gap-2 hover:border-slate-700 transition-colors"
        >
          {getIcon(pillar.icon)}
          <span className="text-base font-semibold text-white">{pillar.title}</span>
          <span className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
            {pillar.description}
          </span>
        </div>
      ))}
    </div>
  );
};
