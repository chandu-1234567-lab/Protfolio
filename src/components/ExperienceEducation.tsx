import React from 'react';
import { EDUCATION, TRAININGS, CERTIFICATIONS } from '../data/portfolioData';
import { GraduationCap, Award, BookOpen, MapPin, CheckCircle2 } from 'lucide-react';

export const ExperienceEducation: React.FC = () => {
  return (
    <section id="education" className="py-24 relative bg-gradient-to-b from-[#f0f4ff] via-[#faf5ff] to-[#f8faff]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-100 text-indigo-900 text-xs font-semibold mb-2">
            <span>Background & Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Education, Training & Certifications
          </h2>
          <p className="mt-2 text-slate-600 text-base">
            Academic achievements and professional training credentials.
          </p>
        </div>

        {/* Education Timeline */}
        <div className="mb-16">
          <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
            <GraduationCap className="w-5 h-5 text-indigo-600" />
            <span>Academic Background</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {EDUCATION.map((edu, idx) => {
              const cardBg = idx === 0
                ? 'bg-gradient-to-br from-blue-50/90 via-indigo-50/50 to-white border-blue-200/80'
                : idx === 1
                ? 'bg-gradient-to-br from-teal-50/90 via-emerald-50/50 to-white border-teal-200/80'
                : 'bg-gradient-to-br from-amber-50/90 via-orange-50/50 to-white border-amber-200/80';

              return (
                <div
                  key={edu.institution}
                  className={`p-6 rounded-3xl border ${cardBg} shadow-sm hover:shadow-md transition-all flex flex-col justify-between hover:-translate-y-1`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="text-xs font-bold text-indigo-700 px-2.5 py-1 rounded-lg bg-indigo-100/70 border border-indigo-200">
                        {edu.period}
                      </span>
                      <span className="text-xs font-extrabold text-emerald-800 px-2.5 py-1 rounded-lg bg-emerald-100/80 border border-emerald-200">
                        {edu.score}
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-slate-900 mb-1 leading-snug">
                      {edu.degree}
                    </h4>
                    <div className="text-xs font-semibold text-slate-600 mb-2">
                      {edu.institution}
                    </div>
                    <div className="flex items-center gap-1 text-xs text-slate-400 mb-4">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{edu.location}</span>
                    </div>

                    {edu.description && (
                      <p className="text-xs text-slate-600 leading-relaxed mb-4">
                        {edu.description}
                      </p>
                    )}
                  </div>

                  {edu.courses && (
                    <div className="pt-3 border-t border-slate-200/60 flex flex-wrap gap-1">
                      {edu.courses.map((course) => (
                        <span
                          key={course}
                          className="text-[10px] font-semibold px-2 py-0.5 rounded bg-white/80 text-slate-700 border border-slate-200"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Training & Certifications */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Training */}
          <div className="p-7 rounded-3xl bg-gradient-to-br from-indigo-50/90 via-purple-50/50 to-white border border-indigo-200/80 shadow-sm">
            <h3 className="text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-indigo-600" />
              <span>Specialized Training</span>
            </h3>

            {TRAININGS.map((tr) => (
              <div key={tr.program} className="space-y-3">
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-slate-900">
                      {tr.program}
                    </h4>
                    <span className="text-xs font-semibold text-indigo-600">
                      {tr.provider}
                    </span>
                  </div>
                  <span className="text-xs font-medium text-slate-500">
                    {tr.period}
                  </span>
                </div>

                <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                  {tr.points.map((pt, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="p-7 rounded-3xl bg-gradient-to-br from-teal-50/90 via-blue-50/50 to-white border border-teal-200/80 shadow-sm space-y-4">
            <h3 className="text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Award className="w-4 h-4 text-teal-600" />
              <span>Verified Certifications</span>
            </h3>

            <div className="space-y-4">
              {CERTIFICATIONS.map((cert) => (
                <div key={cert.title} className="p-4 rounded-2xl bg-white/90 border border-teal-200/80 shadow-2xs">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="text-sm font-bold text-slate-900">
                      {cert.title}
                    </h4>
                    <span className="text-xs font-semibold text-slate-500">{cert.date}</span>
                  </div>
                  <div className="text-xs font-semibold text-teal-700 mb-2">
                    {cert.issuer}
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {cert.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
