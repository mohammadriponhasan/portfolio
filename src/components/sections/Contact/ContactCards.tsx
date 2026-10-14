import React from 'react';
import { Mail, Phone, MapPin, Share2, ChevronRight, Copy, Check } from 'lucide-react';
import { profileData } from '../../../data/profile';
import { useCopyToClipboard } from '../../../hooks/useCopyToClipboard';

export const ContactCards: React.FC = () => {
  const { copied, copy } = useCopyToClipboard();

  return (
    <div className="flex flex-col gap-5">
      {/* Email Card */}
      <div className="p-6 rounded-2xl bg-[#111827]/80 border border-white/5 shadow-xl backdrop-blur-xl flex items-center justify-between hover:bg-[#1e293b]/70 hover:border-white/10 transition-all group">
        <a
          href={`mailto:${profileData.email}`}
          className="flex items-center gap-5 min-w-0 flex-1 focus:outline-none"
        >
          <div className="w-14 h-14 rounded-xl bg-[#38BDF8]/10 flex items-center justify-center text-[#38BDF8] shrink-0 group-hover:scale-110 transition-transform">
            <Mail size={24} />
          </div>
          <div className="flex flex-col min-w-0">
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-0.5">
              Primary Executive Email
            </span>
            <span className="text-base sm:text-lg font-bold text-white truncate group-hover:text-[#38BDF8] transition-colors">
              {profileData.email}
            </span>
            <span className="text-xs text-slate-400 mt-0.5">
              Direct inbox • Prompt response guaranteed
            </span>
          </div>
        </a>
        <button
          type="button"
          onClick={() => copy(profileData.email)}
          className="p-2.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors ml-2 shrink-0 border border-white/5"
          title="Copy email to clipboard"
          aria-label="Copy email address"
        >
          {copied ? <Check size={16} className="text-[#10B981]" /> : <Copy size={16} />}
        </button>
      </div>

      {/* Phone Card */}
      <a
        href={`tel:${profileData.phone}`}
        className="p-6 rounded-2xl bg-[#111827]/80 border border-white/5 shadow-xl backdrop-blur-xl flex items-center gap-5 hover:bg-[#1e293b]/70 hover:border-white/10 transition-all group"
      >
        <div className="w-14 h-14 rounded-xl bg-[#10B981]/10 flex items-center justify-center text-[#10B981] shrink-0 group-hover:scale-110 transition-transform">
          <Phone size={24} />
        </div>
        <div className="flex flex-col min-w-0">
          <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-0.5">
            Direct Phone & WhatsApp
          </span>
          <span className="text-base sm:text-lg font-bold text-white truncate group-hover:text-[#10B981] transition-colors">
            {profileData.phoneFormatted}
          </span>
          <span className="text-xs text-slate-400 mt-0.5">
            Available during business hours (UTC+6)
          </span>
        </div>
      </a>

      {/* Location Card */}
      <div className="p-6 rounded-2xl bg-[#111827]/80 border border-white/5 shadow-xl backdrop-blur-xl flex items-center gap-5">
        <div className="w-14 h-14 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 shrink-0">
          <MapPin size={24} />
        </div>
        <div className="flex flex-col min-w-0">
          <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-0.5">
            Primary Base & Mobility
          </span>
          <span className="text-base sm:text-lg font-bold text-white">
            {profileData.location}
          </span>
          <span className="text-xs text-slate-400 mt-0.5">
            Open to remote & hybrid international leadership roles
          </span>
        </div>
      </div>

      {/* LinkedIn Profile Card */}
      <a
        href={profileData.linkedInUrl}
        target="_blank"
        rel="noreferrer"
        className="p-6 rounded-2xl bg-[#111827]/80 border border-white/5 shadow-xl backdrop-blur-xl flex items-center justify-between hover:bg-[#1e293b]/70 hover:border-white/10 transition-all group"
      >
        <div className="flex items-center gap-5">
          <div className="w-14 h-14 rounded-xl bg-slate-800 flex items-center justify-center text-slate-200 shrink-0 group-hover:bg-[#0077B5]/20 group-hover:text-[#0077B5] transition-colors">
            <Share2 size={24} />
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-0.5">
              Professional Network
            </span>
            <span className="text-base sm:text-lg font-bold text-white group-hover:text-[#38BDF8] transition-colors">
              LinkedIn Profile
            </span>
            <span className="text-xs text-slate-400 mt-0.5">
              Connect & review recommendations
            </span>
          </div>
        </div>
        <ChevronRight
          className="text-slate-500 group-hover:text-[#38BDF8] transition-colors"
          size={24}
        />
      </a>
    </div>
  );
};
