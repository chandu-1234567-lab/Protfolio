import React from 'react';
import { PROJECTS } from '../data/portfolioData';
import { Github, CheckCircle2, ArrowUpRight } from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-24 relative bg-gradient-to-b from-[#f8faff] via-[#f5f3ff] to-[#f0fdf4]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-100/80 border border-indigo-200 text-indigo-900 text-xs font-semibold mb-2">
            <span>Featured Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Data Engineering & Analytics Projects
          </h2>
          <p className="mt-2 text-slate-600 text-base max-w-2xl">
            Production-grade pipelines, cloud data warehousing, and interactive analytics dashboards.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-16">
          {PROJECTS.map((project, idx) => {
            const isSpotify = project.id === 'spotify-pipeline';
            const cardGradient = isSpotify
              ? 'bg-gradient-to-br from-emerald-50/90 via-teal-50/50 to-white border-emerald-200/90'
              : 'bg-gradient-to-br from-blue-50/90 via-indigo-50/50 to-white border-blue-200/90';

            return (
              <div
                key={project.id}
                className={`rounded-3xl border ${cardGradient} overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                  {/* Project Image Preview */}
                  <div className="lg:col-span-6 bg-slate-950/5 border-b lg:border-b-0 lg:border-r border-slate-200/60 flex items-center justify-center p-4 sm:p-6 overflow-hidden group">
                    <div className="relative w-full rounded-2xl overflow-hidden border border-slate-200 shadow-md transition-transform duration-300 group-hover:scale-[1.02]">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-auto object-cover max-h-[380px]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
                      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white font-medium bg-slate-950/75 backdrop-blur-sm px-3.5 py-2 rounded-xl">
                        <span>Dashboard & Pipeline Analytics</span>
                        <span className="text-teal-300 font-semibold">Live Preview</span>
                      </div>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="lg:col-span-6 p-6 sm:p-8 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className={`text-xs font-bold px-3 py-1 rounded-full border ${project.badgeColor}`}>
                          {project.category}
                        </span>
                        <span className="text-xs font-medium text-slate-500">
                          {project.period}
                        </span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-1 leading-snug">
                        {project.title}
                      </h3>
                      <p className="text-xs sm:text-sm font-semibold text-indigo-600 mb-4">
                        {project.subtitle}
                      </p>

                      <p className="text-slate-600 text-sm leading-relaxed mb-5">
                        {project.summary}
                      </p>

                      {/* Key Accomplishments */}
                      <div className="space-y-2 mb-6">
                        <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                          Key Deliverables:
                        </div>
                        <ul className="space-y-2">
                          {project.bulletPoints.map((point, pIdx) => (
                            <li key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Tech Stack */}
                      <div className="mb-6">
                        <div className="flex flex-wrap gap-1.5">
                          {project.techStack.map((tech) => (
                            <span
                              key={tech}
                              className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-white/90 text-slate-700 border border-slate-200/80 shadow-xs"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Action Button */}
                    <div className="pt-4 border-t border-slate-200/60 flex items-center justify-between">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-indigo-900 text-white text-xs font-bold shadow-sm transition-all group"
                      >
                        <Github className="w-4 h-4 text-white" />
                        <span>View GitHub Repository</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-white" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
