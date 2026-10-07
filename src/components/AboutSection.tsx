import React from 'react';
import { Activity, Database, BarChart3, Terminal } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const points = [
    {
      label: "Real-Time Streaming",
      desc: "Apache Kafka, MinIO, Python",
      icon: Activity,
      color: "from-blue-50 to-indigo-50 border-blue-200 text-blue-800"
    },
    {
      label: "Cloud Warehousing",
      desc: "Snowflake, dbt, SQL Modeling",
      icon: Database,
      color: "from-indigo-50 to-purple-50 border-indigo-200 text-indigo-800"
    },
    {
      label: "Workflow Automation",
      desc: "Apache Airflow, Docker, CI/CD",
      icon: Terminal,
      color: "from-teal-50 to-emerald-50 border-teal-200 text-teal-800"
    },
    {
      label: "Business Intelligence",
      desc: "Power BI, KPI Visualizations",
      icon: BarChart3,
      color: "from-amber-50 to-orange-50 border-amber-200 text-amber-900"
    }
  ];

  return (
    <section id="about" className="py-16 bg-gradient-to-b from-transparent via-indigo-50/40 to-transparent">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-white/90 via-indigo-50/40 to-blue-50/50 border border-indigo-200/80 shadow-sm">
          {/* Section Pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 text-indigo-900 text-xs font-semibold mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-600"></span>
            <span>About Me</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-4">
            Passionate about data systems that scale reliably.
          </h2>

          <p className="text-slate-700 text-sm sm:text-base leading-relaxed max-w-3xl mb-8">
            I am a Computer Science & Engineering undergraduate at Lovely Professional University focused on <strong>Data Engineering</strong>. I enjoy taking raw, high-throughput event data and engineering robust streaming pipelines with <strong>Apache Kafka</strong>, modeling clean analytical schemas with <strong>Snowflake & dbt</strong>, and delivering intuitive decision dashboards in <strong>Power BI</strong>.
          </p>

          {/* 4 Compact Capability Pills */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {points.map((pt, i) => {
              const Icon = pt.icon;
              return (
                <div
                  key={i}
                  className={`p-3.5 rounded-2xl bg-gradient-to-br ${pt.color} border shadow-2xs`}
                >
                  <Icon className="w-4 h-4 mb-2 opacity-80" />
                  <div className="text-xs font-bold leading-tight mb-0.5">
                    {pt.label}
                  </div>
                  <div className="text-[11px] text-slate-600 font-medium">
                    {pt.desc}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
