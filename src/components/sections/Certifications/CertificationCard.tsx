import React from 'react';
import type { CertificationItem } from '../../../types';
import { ShieldCheck, CheckCircle, Brain, Layers, ExternalLink } from 'lucide-react';
import { TiltCard } from '../../common/TiltCard';

interface CertificationCardProps {
  cert: CertificationItem;
}

export const CertificationCard: React.FC<CertificationCardProps> = ({ cert }) => {
  const getIcon = () => {
    switch (cert.iconType) {
      case 'shield':
        return <ShieldCheck size={28} />;
      case 'check':
        return <CheckCircle size={28} />;
      case 'brain':
        return <Brain size={28} />;
      default:
        return <Layers size={28} />;
    }
  };

  const getBorderColor = () => {
    switch (cert.iconType) {
      case 'shield':
        return 'group-hover:border-[#10B981]/50';
      case 'check':
        return 'group-hover:border-[#38BDF8]/50';
      case 'brain':
        return 'group-hover:border-blue-400/50';
      default:
        return 'group-hover:border-slate-500/50';
    }
  };

  return (
    <TiltCard
      className={`flex flex-col p-8 rounded-2xl bg-[#111827]/80 border border-white/5 shadow-xl backdrop-blur-xl group ${getBorderColor()} transition-colors h-full`}
    >
      <div className="flex items-start justify-between mb-8">
        <div
          className="w-14 h-14 rounded-xl flex items-center justify-center transition-colors group-hover:scale-105"
          style={{
            backgroundColor: `${cert.accentColor}15`,
            color: cert.accentColor
          }}
        >
          {getIcon()}
        </div>

        <span
          className="px-3.5 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider flex items-center gap-1.5 border"
          style={{
            backgroundColor: `${cert.accentColor}10`,
            color: cert.accentColor,
            borderColor: `${cert.accentColor}30`
          }}
        >
          {cert.status === 'Verified Active' && (
            <span
              className="w-1.5 h-1.5 rounded-full shadow-[0_0_8px_currentColor]"
              style={{ backgroundColor: cert.accentColor }}
            />
          )}
          {cert.status}
        </span>
      </div>

      <span className="text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-1.5">
        {cert.issuer}
      </span>

      <h3 className="text-xl font-bold text-white mb-3 tracking-tight group-hover:text-white transition-colors">
        {cert.title}
      </h3>

      <p className="text-sm text-slate-400 mb-6 flex-grow leading-relaxed">
        {cert.desc}
      </p>

      {/* Skills Pill Row */}
      <div className="flex flex-wrap gap-1.5 mb-6">
        {cert.skillsAcquired.map((skill) => (
          <span
            key={skill}
            className="text-[11px] px-2.5 py-1 rounded-md bg-slate-900 text-slate-300 border border-white/5"
          >
            {skill}
          </span>
        ))}
      </div>

      {/* Footer Info */}
      <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-bold text-slate-500 uppercase tracking-widest">
        <span>{cert.licenseNumber || cert.issueDate}</span>
        {cert.credentialUrl ? (
          <a
            href={cert.credentialUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 text-slate-400 hover:text-white transition-colors"
          >
            Verify <ExternalLink size={12} />
          </a>
        ) : (
          <span>Verified</span>
        )}
      </div>
    </TiltCard>
  );
};
