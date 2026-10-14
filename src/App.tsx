import { useState } from 'react';
import { SmoothScrollProvider } from './context/SmoothScroll';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero/Hero';
import { About } from './components/sections/About/About';
import { Competencies } from './components/sections/Competencies/Competencies';
import { Projects } from './components/sections/Projects/Projects';
import { Experience } from './components/sections/Experience/Experience';
import { Education } from './components/sections/Education/Education';
import { Certifications } from './components/sections/Certifications/Certifications';
import { Contact } from './components/sections/Contact/Contact';
import { Footer } from './components/layout/Footer';
import { ResumeModal } from './components/sections/Resume/ResumeModal';
import { ScrollToTop } from './components/common/ScrollToTop';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <SmoothScrollProvider>
      <div className="min-h-screen bg-[#0B0F19] text-slate-200 font-sans antialiased selection:bg-[#38BDF8]/30 selection:text-white relative">
        <Navbar onOpenResume={() => setIsResumeOpen(true)} />

        <main id="main-content">
          <Hero onOpenResume={() => setIsResumeOpen(true)} />
          <About />
          <Competencies />
          <Projects />
          <Experience />
          <Education />
          <Certifications />
          <Contact />
        </main>

        <Footer onOpenResume={() => setIsResumeOpen(true)} />

        {/* Floating Scroll Progress & Top Button */}
        <ScrollToTop />

        {/* Executive Resume Modal */}
        <ResumeModal
          isOpen={isResumeOpen}
          onClose={() => setIsResumeOpen(false)}
        />
      </div>
    </SmoothScrollProvider>
  );
}