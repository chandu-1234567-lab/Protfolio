import React from 'react';
import { PERSONAL_INFO, PROJECTS, SKILL_GROUPS, EDUCATION, TRAININGS, CERTIFICATIONS } from '../data/portfolioData';
import { X, Printer } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
      <div className="relative w-full max-w-3xl max-h-[90vh] bg-white border border-slate-300 rounded-2xl shadow-2xl flex flex-col overflow-hidden text-slate-800">
        {/* Modal Header */}
        <div className="p-4 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
          <div className="text-xs font-bold text-slate-700">
            Resume Preview • {PERSONAL_INFO.name}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-xs font-bold text-white transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-500 hover:text-slate-800 hover:bg-slate-200 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Printable Resume Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-xs sm:text-sm">
          {/* Header */}
          <div className="text-center border-b border-slate-200 pb-5 space-y-1">
            <h2 className="text-2xl font-bold text-slate-900">
              {PERSONAL_INFO.name}
            </h2>
            <div className="text-xs text-slate-500">
              {PERSONAL_INFO.location}
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-slate-600 pt-1 font-medium">
              <span>{PERSONAL_INFO.phone}</span>
              <span>•</span>
              <a href={`mailto:${PERSONAL_INFO.email}`} className="text-blue-600 hover:underline">
                {PERSONAL_INFO.email}
              </a>
              <span>•</span>
              <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">
                {PERSONAL_INFO.linkedinUsername}
              </a>
              <span>•</span>
              <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">
                {PERSONAL_INFO.githubUsername}
              </a>
            </div>
          </div>

          {/* Projects */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-blue-700 border-b border-slate-200 pb-1">
              Projects
            </h3>
            {PROJECTS.map((proj) => (
              <div key={proj.id} className="space-y-1">
                <div className="flex items-start justify-between font-bold text-slate-900">
                  <span>{proj.title}</span>
                  <span className="text-xs font-medium text-slate-500">{proj.period}</span>
                </div>
                <ul className="list-disc list-inside space-y-1 text-slate-700 text-xs pl-1">
                  {proj.bulletPoints.map((bp, i) => (
                    <li key={i}>{bp}</li>
                  ))}
                </ul>
                <div className="text-xs text-slate-500 pt-0.5">
                  GitHub: <a href={proj.githubUrl} target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">{proj.githubUrl}</a>
                </div>
              </div>
            ))}
          </div>

          {/* Training */}
          <div className="space-y-2.5">
            <h3 className="text-xs font-bold uppercase tracking-wider text-blue-700 border-b border-slate-200 pb-1">
              Training
            </h3>
            {TRAININGS.map((tr) => (
              <div key={tr.program} className="space-y-1">
                <div className="flex items-start justify-between font-bold text-slate-900">
                  <span>{tr.program} | {tr.provider}</span>
                  <span className="text-xs font-medium text-slate-500">{tr.period}</span>
                </div>
                <ul className="list-disc list-inside space-y-1 text-slate-700 text-xs pl-1">
                  {tr.points.map((pt, i) => (
                    <li key={i}>{pt}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Certificates */}
          <div className="space-y-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-blue-700 border-b border-slate-200 pb-1">
              Certificates
            </h3>
            <div className="space-y-1.5 text-xs text-slate-700">
              {CERTIFICATIONS.map((cert) => (
                <div key={cert.title} className="flex items-start justify-between">
                  <div>
                    <strong className="text-slate-900">{cert.title}</strong> — {cert.description}
                  </div>
                  <span className="text-slate-500 ml-3 shrink-0">{cert.date}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div className="space-y-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-blue-700 border-b border-slate-200 pb-1">
              Technical Skills
            </h3>
            <div className="space-y-1.5 text-xs text-slate-700">
              {SKILL_GROUPS.map((g) => (
                <div key={g.category}>
                  <strong className="text-slate-900">{g.category}:</strong> {g.skills.join(', ')}
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="space-y-2.5">
            <h3 className="text-xs font-bold uppercase tracking-wider text-blue-700 border-b border-slate-200 pb-1">
              Education
            </h3>
            {EDUCATION.map((edu) => (
              <div key={edu.institution} className="flex items-start justify-between text-xs">
                <div>
                  <div className="font-bold text-slate-900">{edu.institution}</div>
                  <div className="text-slate-600">{edu.degree} — <span className="text-emerald-700 font-bold">{edu.score}</span></div>
                </div>
                <div className="text-right text-slate-500">
                  <div>{edu.period}</div>
                  <div>{edu.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
