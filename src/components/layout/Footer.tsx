import React from 'react';
import { profileData } from '../../data/profile';
import { navLinks } from '../../data/navigation';
import { ShieldCheck, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onOpenResume: () => void;
}

const CURRENT_YEAR = new Date().getFullYear();

export const Footer: React.FC<FooterProps> = ({ onOpenResume }) => {
  return (
    <footer className="w-full bg-[#070A11] border-t border-white/5 py-16 relative overflow-hidden">
      {/* Subtle top glow */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-1 bg-gradient-to-r from-transparent via-[#38BDF8]/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-5 lg:px-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-white/5">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <span className="text-xl font-bold text-white tracking-tight">
                {profileData.fullName}
              </span>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#10B981]/10 border border-[#10B981]/20">
                <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] shadow-[0_0_8px_#10B981]" />
                <span className="text-[10px] font-bold text-[#10B981] tracking-wider uppercase">
                  {profileData.credentialsShort}
                </span>
              </div>
            </div>
            <p className="text-sm text-slate-400 font-medium">
              {profileData.primaryTitle} • Commercial Aviation & Enterprise Systems
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className="text-xs font-semibold text-slate-400 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={onOpenResume}
              className="text-xs font-semibold text-slate-400 hover:text-white transition-colors flex items-center gap-1"
            >
              Resume <ArrowUpRight size={13} />
            </button>
            <a
              href="#contact"
              className="text-xs font-bold text-[#38BDF8] hover:text-[#7dd3fc] transition-colors"
            >
              Contact Me
            </a>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-medium text-slate-500">
          <p>© {CURRENT_YEAR} {profileData.fullName}, PMP®, ISTQB®. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-slate-400">
              <ShieldCheck size={14} className="text-[#10B981]" />
              {profileData.pmpLicense}
            </span>
            <span>•</span>
            <span className="text-slate-400">{profileData.istqbLevel}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
