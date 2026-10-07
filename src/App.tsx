import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { ExperienceEducation } from './components/ExperienceEducation';
import { ContactSection } from './components/ContactSection';
import { ResumeModal } from './components/ResumeModal';

const App: React.FC = () => {
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#f6f8fb] text-slate-800 antialiased selection:bg-indigo-600 selection:text-white">
      {/* Navbar */}
      <Navbar onOpenResume={() => setResumeOpen(true)} />

      <main>
        {/* Hero Section */}
        <Hero onOpenResume={() => setResumeOpen(true)} />

        {/* Short & Impactful About Me */}
        <AboutSection />

        {/* Featured Projects with Visuals */}
        <ProjectsSection />

        {/* Skills Matrix */}
        <SkillsSection />

        {/* Education, Training & Certifications */}
        <ExperienceEducation />

        {/* Contact Section */}
        <ContactSection />
      </main>

      {/* Resume Modal */}
      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />
    </div>
  );
};

export default App;
