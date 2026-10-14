import React, { useState, type FormEvent } from 'react';
import { Send, CheckCircle2, Loader2 } from 'lucide-react';
import { MagneticButton } from '../../common/MagneticButton';
import type { ContactFormData } from '../../../types';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
    urgency: 'priority'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate enterprise backend transmission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        urgency: 'priority'
      });

      // Clear alert after 7 seconds
      setTimeout(() => setSubmitted(false), 7000);
    }, 1200);
  };

  return (
    <div className="p-8 sm:p-10 rounded-3xl bg-[#111827]/90 border border-white/10 shadow-2xl backdrop-blur-2xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <h3 className="text-2xl font-bold text-white tracking-tight">
            Send an Executive Inquiry
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Fill out the form below to initiate discussion on technical PM roles or advisory mandates.
          </p>
        </div>
        <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#10B981]/10 border border-[#10B981]/20 text-[#10B981] text-[10px] font-bold uppercase tracking-wider shrink-0 w-fit">
          <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] shadow-[0_0_8px_#10B981]" />
          Available Immediately
        </span>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-xs font-bold text-slate-300 uppercase tracking-wider">
              Your Name / Title *
            </label>
            <input
              type="text"
              id="name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="e.g. Captain Elena Rostova, VP Flight Ops"
              className="w-full px-4 py-3.5 rounded-xl bg-[#0B0F19] border border-white/10 text-white placeholder:text-slate-600 focus:outline-none focus:border-[#7DD3FC] focus:ring-1 focus:ring-[#7DD3FC] text-sm transition-all"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-xs font-bold text-slate-300 uppercase tracking-wider">
              Business Email *
            </label>
            <input
              type="email"
              id="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="e.g. elena@airlinegroup.com"
              className="w-full px-4 py-3.5 rounded-xl bg-[#0B0F19] border border-white/10 text-white placeholder:text-slate-600 focus:outline-none focus:border-[#7DD3FC] focus:ring-1 focus:ring-[#7DD3FC] text-sm transition-all"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="subject" className="text-xs font-bold text-slate-300 uppercase tracking-wider">
            Inquiry Type / Role Description
          </label>
          <input
            type="text"
            id="subject"
            value={formData.subject}
            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
            placeholder="e.g. Technical Product Manager Role / Aviation Platform Architecture"
            className="w-full px-4 py-3.5 rounded-xl bg-[#0B0F19] border border-white/10 text-white placeholder:text-slate-600 focus:outline-none focus:border-[#7DD3FC] focus:ring-1 focus:ring-[#7DD3FC] text-sm transition-all"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="message" className="text-xs font-bold text-slate-300 uppercase tracking-wider">
            Mandate Details or Project Scope *
          </label>
          <textarea
            id="message"
            required
            rows={4}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            placeholder="Please detail your platform requirements, team topology, timeline, or leadership mandate..."
            className="w-full px-4 py-3.5 rounded-xl bg-[#0B0F19] border border-white/10 text-white placeholder:text-slate-600 focus:outline-none focus:border-[#7DD3FC] focus:ring-1 focus:ring-[#7DD3FC] text-sm transition-all resize-none"
          />
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-2">
          <span className="text-xs font-medium text-slate-500 uppercase tracking-widest">
            🔒 Confidentiality Assured
          </span>

          <MagneticButton
            type="submit"
            disabled={isSubmitting}
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#7DD3FC] hover:bg-[#BAE6FD] text-slate-950 font-bold text-sm shadow-[0_0_20px_rgba(125,211,252,0.25)] hover:shadow-[0_0_25px_rgba(125,211,252,0.45)] transition-all"
          >
            {isSubmitting ? (
              <>
                <Loader2 size={16} className="animate-spin" />
                <span>Transmitting...</span>
              </>
            ) : (
              <>
                <Send size={16} />
                <span>Transmit Inquiry</span>
              </>
            )}
          </MagneticButton>
        </div>

        {submitted && (
          <div className="p-4 rounded-xl bg-[#10B981]/10 border border-[#10B981]/30 text-[#10B981] text-xs sm:text-sm font-semibold flex items-center gap-3 animate-in fade-in">
            <CheckCircle2 size={20} className="shrink-0" />
            <span>
              Inquiry successfully received. Mohammad will review your mandate and follow up within 24 hours.
            </span>
          </div>
        )}
      </form>
    </div>
  );
};
