import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { navLinks } from '../../data/navigation';
import { profileData } from '../../data/profile';
import { MagneticButton } from '../common/MagneticButton';
import { useActiveSection } from '../../hooks/useActiveSection';

interface NavbarProps {
  onOpenResume?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const sectionIds = navLinks.map((link) => link.id);
  const activeSection = useActiveSection(sectionIds, 150);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when ESC pressed
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? 'bg-[#0B0F19]/85 backdrop-blur-xl border-b border-white/5 shadow-lg py-2.5'
          : 'bg-transparent border-b border-transparent py-3 sm:py-4'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between gap-3 transition-all duration-300">
        {/* Brand identity & credentials */}
        <div className="flex items-center gap-2 sm:gap-4 min-w-0">
          <div className="flex flex-col min-w-0">
            <a
              href="#"
              className="text-lg sm:text-xl font-bold text-slate-50 tracking-tight hover:text-[#7DD3FC] transition-colors truncate"
            >
              {profileData.preferredName}
            </a>
            <div className="flex items-center gap-1.5 sm:gap-2 mt-0.5 min-w-0">
              <span className="text-[10px] sm:text-[11px] font-semibold tracking-wider text-slate-400 uppercase truncate">
                Technical Product Manager
              </span>
              <span className="text-slate-600 text-xs shrink-0">•</span>
              <div className="inline-flex items-center gap-1 sm:gap-1.5 px-1.5 sm:px-2 py-0.5 rounded-full bg-slate-800/80 border border-white/5 shrink-0">
                <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] shadow-[0_0_8px_#10B981]" />
                <span className="text-[9px] sm:text-[10px] font-bold text-[#10B981] uppercase tracking-wider whitespace-nowrap">
                  {profileData.credentialsShort}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-1 bg-slate-900/50 p-1 rounded-xl border border-white/5 shrink-0">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                className={`px-3.5 py-1.5 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${isActive
                    ? 'text-white bg-slate-800'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800'
                  }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Action button */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <MagneticButton
            href="#contact"
            className="hidden md:inline-flex px-4 py-2 sm:px-5 sm:py-2.5 rounded-lg bg-[#7DD3FC] hover:bg-[#BAE6FD] text-slate-950 font-semibold text-xs sm:text-sm shadow-[0_0_20px_rgba(125,211,252,0.3)] hover:shadow-[0_0_25px_rgba(125,211,252,0.5)] transition-all"
          >
            Contact Me
          </MagneticButton>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="xl:hidden p-2 rounded-lg bg-slate-800/70 border border-white/10 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors focus:outline-none shrink-0"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden absolute top-full left-0 right-0 w-full bg-[#0B0F19]/95 backdrop-blur-2xl border-b border-white/10 p-5 flex flex-col gap-2 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-3 rounded-xl text-sm font-semibold transition-colors flex items-center justify-between ${isActive
                    ? 'text-white bg-slate-800/90 border border-white/5 shadow-inner'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                  }`}
              >
                <span>{link.name}</span>
                {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#7DD3FC]" />}
              </a>
            );
          })}

          <div className="pt-3 mt-2 border-t border-white/10 flex flex-col gap-2.5">
            {onOpenResume && (
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="w-full px-4 py-3 rounded-xl text-sm font-bold text-slate-200 bg-slate-800/60 border border-white/5 hover:bg-slate-700/80 hover:text-white transition-colors"
              >
                View Executive Resume
              </button>
            )}
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center px-4 py-3 rounded-xl bg-[#7DD3FC] hover:bg-[#BAE6FD] text-slate-950 font-bold text-sm shadow-[0_0_20px_rgba(125,211,252,0.3)] transition-all"
            >
              Contact Me
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
