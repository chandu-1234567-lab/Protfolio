import React from 'react';
import { SKILL_GROUPS } from '../data/portfolioData';
import { Database, Code2, BarChart3, Terminal } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const getIcon = (cat: string) => {
    if (cat.includes('Data Engineering')) return Database;
    if (cat.includes('Programming')) return Code2;
    if (cat.includes('Analytics')) return BarChart3;
    return Terminal;
  };

  const getCardStyle = (idx: number) => {
    switch (idx) {
      case 0: // Data Engineering
        return {
          gradient: "bg-gradient-to-br from-blue-50/90 via-indigo-50/60 to-white",
          border: "border-blue-200/80",
          iconBg: "bg-blue-100 text-blue-700",
          titleColor: "text-blue-950",
          pill: "bg-white/90 text-blue-900 border-blue-200 hover:bg-blue-100/70"
        };
      case 1: // Programming & DB
        return {
          gradient: "bg-gradient-to-br from-indigo-50/90 via-purple-50/60 to-white",
          border: "border-indigo-200/80",
          iconBg: "bg-indigo-100 text-indigo-700",
          titleColor: "text-indigo-950",
          pill: "bg-white/90 text-indigo-900 border-indigo-200 hover:bg-indigo-100/70"
        };
      case 2: // Analytics & BI
        return {
          gradient: "bg-gradient-to-br from-teal-50/90 via-emerald-50/60 to-white",
          border: "border-teal-200/80",
          iconBg: "bg-teal-100 text-teal-700",
          titleColor: "text-teal-950",
          pill: "bg-white/90 text-teal-900 border-teal-200 hover:bg-teal-100/70"
        };
      default: // DevOps
        return {
          gradient: "bg-gradient-to-br from-slate-100/90 via-slate-50 to-white",
          border: "border-slate-300/80",
          iconBg: "bg-slate-200 text-slate-700",
          titleColor: "text-slate-900",
          pill: "bg-white/90 text-slate-800 border-slate-200 hover:bg-slate-100"
        };
    }
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-[#f0fdf4] via-[#f8faff] to-[#f0f4ff] border-y border-slate-200/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-semibold mb-2">
            <span>Skill Matrix</span>
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Technical Proficiency & Stack
          </h2>
          <p className="mt-2 text-slate-600 text-sm sm:text-base">
            Tools, technologies, and frameworks I use for building data solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SKILL_GROUPS.map((group, idx) => {
            const Icon = getIcon(group.category);
            const style = getCardStyle(idx);
            return (
              <div
                key={group.category}
                className={`p-6 sm:p-7 rounded-2xl ${style.gradient} border ${style.border} shadow-sm hover:shadow-md transition-all hover:-translate-y-1`}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-10 h-10 rounded-xl ${style.iconBg} flex items-center justify-center shadow-xs`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className={`text-lg font-bold ${style.titleColor}`}>
                    {group.category}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`text-xs sm:text-sm font-semibold px-3.5 py-1.5 rounded-xl border shadow-2xs transition-colors ${style.pill}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
