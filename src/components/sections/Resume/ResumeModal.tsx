import React from 'react';
import { Modal } from '../../common/Modal';
import { profileData } from '../../../data/profile';
import { experienceData } from '../../../data/experience';
import { certificationsData } from '../../../data/certifications';
import { educationData } from '../../../data/education';
import { competencyCategories } from '../../../data/competencies';
import { Printer, Mail, Phone, MapPin, ShieldCheck } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      maxWidth="4xl"
      title={
        <div className="flex items-center gap-3">
          <span>Executive Curriculum Vitae</span>
          <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#10B981]/10 text-[#10B981] font-bold border border-[#10B981]/20">
            Verified PMP® & ISTQB®
          </span>
        </div>
      }
      subtitle="Complete professional dossier, certifications, and enterprise deliverables"
    >
      <div className="flex flex-col gap-8 text-slate-200 print:text-black">
        {/* Actions Bar */}
        <div className="flex items-center justify-between p-4 rounded-xl bg-slate-900/60 border border-white/5 print:hidden">
          <div className="text-xs text-slate-400">
            Press <kbd className="px-1.5 py-0.5 bg-slate-800 rounded border border-white/10 text-white">Ctrl+P</kbd> or click to print / save as PDF
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold flex items-center gap-2 border border-white/10 transition-colors"
            >
              <Printer size={15} />
              Print / Save PDF
            </button>
            <a
              href={`mailto:${profileData.email}?subject=Executive Interview / Technical PM Inquiry`}
              className="px-4 py-2 rounded-lg bg-[#7DD3FC] hover:bg-[#BAE6FD] text-slate-950 text-xs font-bold flex items-center gap-2 transition-all shadow-[0_0_15px_rgba(125,211,252,0.25)]"
            >
              <Mail size={15} />
              Email Candidate
            </a>
          </div>
        </div>

        {/* Resume Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start gap-6 pb-6 border-b border-white/10">
          <div>
            <h1 className="text-3xl font-bold text-white tracking-tight">{profileData.fullName}</h1>
            <h2 className="text-lg font-semibold text-[#38BDF8] mt-1">{profileData.primaryTitle}</h2>
            <p className="text-sm text-slate-400 mt-1">{profileData.secondaryTitle}</p>
          </div>
          <div className="flex flex-col gap-1.5 text-xs text-slate-400">
            <span className="flex items-center gap-2">
              <Mail size={13} className="text-[#38BDF8]" /> {profileData.email}
            </span>
            <span className="flex items-center gap-2">
              <Phone size={13} className="text-[#10B981]" /> {profileData.phoneFormatted}
            </span>
            <span className="flex items-center gap-2">
              <MapPin size={13} className="text-blue-400" /> {profileData.location}
            </span>
            <span className="flex items-center gap-2">
              <ShieldCheck size={13} className="text-[#10B981]" /> PMP® #4465221 | ISTQB® CTFL v4.0
            </span>
          </div>
        </div>

        {/* Executive Summary */}
        <div>
          <h3 className="text-sm font-bold text-[#38BDF8] uppercase tracking-widest mb-3">Executive Summary</h3>
          <p className="text-sm text-slate-300 leading-relaxed">
            {profileData.executiveSummary.join(' ')}
          </p>
        </div>

        {/* Core Competencies Grid */}
        <div>
          <h3 className="text-sm font-bold text-[#38BDF8] uppercase tracking-widest mb-3">Key Competencies & Toolkit</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {competencyCategories.map((cat) => (
              <div key={cat.id} className="p-3.5 rounded-xl bg-slate-900/60 border border-white/5">
                <span className="text-xs font-bold text-white block mb-2">{cat.title}</span>
                <ul className="text-xs text-slate-400 space-y-1">
                  {cat.skills.slice(0, 5).map((skill, sIdx) => (
                    <li key={sIdx} className="flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-[#38BDF8]" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Professional Experience */}
        <div>
          <h3 className="text-sm font-bold text-[#38BDF8] uppercase tracking-widest mb-4">Professional Experience</h3>
          <div className="space-y-6">
            {experienceData.map((role) => (
              <div key={role.id} className="p-4 rounded-xl bg-slate-900/40 border border-white/5 space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <div>
                    <h4 className="text-base font-bold text-white">{role.title}</h4>
                    <span className="text-xs font-semibold text-blue-400">{role.company}</span>
                  </div>
                  <span className="text-xs font-bold text-slate-400">{role.period}</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">{role.summary}</p>
                <div className="space-y-1.5">
                  {role.responsibilities.slice(0, 4).map((resp, rIdx) => (
                    <div key={rIdx} className="flex items-start gap-2 text-xs text-slate-400">
                      <span className="text-[#38BDF8] mt-0.5">•</span>
                      <span>{resp}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications & Education */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-sm font-bold text-[#10B981] uppercase tracking-widest mb-3">Verified Certifications</h3>
            <div className="space-y-3">
              {certificationsData.map((cert) => (
                <div key={cert.id} className="p-3 rounded-lg bg-slate-900/40 border border-white/5">
                  <span className="text-xs font-bold text-white block">{cert.title}</span>
                  <span className="text-[11px] text-slate-400 block">{cert.issuer} • {cert.issueDate}</span>
                  {cert.licenseNumber && (
                    <span className="text-[10px] text-[#10B981] font-mono mt-0.5 block">{cert.licenseNumber}</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold text-blue-400 uppercase tracking-widest mb-3">Education</h3>
            <div className="p-3.5 rounded-lg bg-slate-900/40 border border-white/5">
              <span className="text-xs font-bold text-white block">{educationData.degree}</span>
              <span className="text-[11px] text-slate-400 block mt-1">{educationData.institution}</span>
              <span className="text-[10px] font-mono text-slate-500 block mt-1">{educationData.period} • {educationData.location}</span>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">{educationData.relevanceToProduct}</p>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};
