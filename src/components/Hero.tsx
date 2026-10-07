import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Mail, Phone, MapPin, Copy, Check, ArrowRight, FileText, Database, Code2 } from 'lucide-react';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const [copiedType, setCopiedType] = useState<string | null>(null);

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2000);
  };

  return (
    <section id="home" className="pt-32 pb-16 md:pt-40 md:pb-24 relative bg-mesh-canvas overflow-hidden">
      {/* Aesthetic Ambient Colored Glow Orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-indigo-200/50 to-blue-200/30 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-40 right-10 w-96 h-96 bg-gradient-to-bl from-purple-200/40 via-pink-100/30 to-teal-100/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-emerald-100/80 to-teal-100/80 border border-emerald-300/60 text-emerald-900 text-xs font-semibold mb-6 shadow-sm backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span>{PERSONAL_INFO.availability}</span>
        </div>

        {/* Main Heading with Rich Gradient */}
        <div className="space-y-3 mb-6">
          <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-indigo-600 to-purple-600">Chandra Sekhar Sriram</span>
          </h1>
          <p className="text-xl sm:text-2xl font-bold text-slate-700">
            {PERSONAL_INFO.role}
          </p>
        </div>

        {/* Humanized Tagline */}
        <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-3xl mb-8 font-normal">
          {PERSONAL_INFO.tagline}
        </p>

        {/* Action CTAs */}
        <div className="flex flex-wrap items-center gap-3.5 mb-10">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold text-sm shadow-md shadow-indigo-500/25 hover:shadow-lg hover:shadow-indigo-500/35 transition-all"
          >
            <span>View Projects</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/90 hover:bg-white text-slate-800 font-semibold text-sm border border-indigo-200/80 shadow-sm transition-all"
          >
            <span>Get in Touch</span>
          </a>

          <button
            onClick={onOpenResume}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-slate-100 to-indigo-50 hover:from-slate-200 hover:to-indigo-100 text-slate-700 font-semibold text-sm border border-slate-200 transition-all"
          >
            <FileText className="w-4 h-4 text-slate-600" />
            <span>View Resume</span>
          </button>
        </div>

        {/* Contact Quick Pills with Instant Copy */}
        <div className="flex flex-wrap items-center gap-3 pt-6 border-t border-indigo-100">
          <div className="flex items-center gap-1.5 text-xs font-medium text-slate-500 mr-2">
            <MapPin className="w-4 h-4 text-indigo-500" />
            <span>Vijayawada, India</span>
          </div>

          {/* Email button */}
          <button
            onClick={() => handleCopy(PERSONAL_INFO.email, 'email')}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/90 hover:bg-blue-50 text-xs font-medium text-slate-700 hover:text-blue-700 border border-blue-200/70 transition-all shadow-sm group"
            title="Click to copy email"
          >
            <Mail className="w-3.5 h-3.5 text-blue-500 group-hover:text-blue-600" />
            <span>{PERSONAL_INFO.email}</span>
            {copiedType === 'email' ? (
              <Check className="w-3.5 h-3.5 text-emerald-600 animate-bounce" />
            ) : (
              <Copy className="w-3 h-3 text-slate-400 group-hover:text-blue-500 opacity-60" />
            )}
          </button>

          {/* Phone button */}
          <button
            onClick={() => handleCopy(PERSONAL_INFO.rawPhone, 'phone')}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/90 hover:bg-indigo-50 text-xs font-medium text-slate-700 hover:text-indigo-700 border border-indigo-200/70 transition-all shadow-sm group"
            title="Click to copy phone number"
          >
            <Phone className="w-3.5 h-3.5 text-indigo-500 group-hover:text-indigo-600" />
            <span>{PERSONAL_INFO.phone}</span>
            {copiedType === 'phone' ? (
              <Check className="w-3.5 h-3.5 text-emerald-600 animate-bounce" />
            ) : (
              <Copy className="w-3 h-3 text-slate-400 group-hover:text-indigo-500 opacity-60" />
            )}
          </button>
        </div>

        {/* Aesthetic Tinted Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
          {/* Card 1: Blue Tint */}
          <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-50/90 to-indigo-50/70 border border-blue-200/80 shadow-sm text-center transition-transform hover:-translate-y-1">
            <div className="text-xs text-blue-700 font-semibold mb-1">
              Core Specialty
            </div>
            <div className="text-base sm:text-lg font-bold text-slate-900">
              Data Engineering
            </div>
          </div>

          {/* Card 2: Indigo Tint */}
          <div className="p-4 rounded-2xl bg-gradient-to-br from-indigo-50/90 to-purple-50/70 border border-indigo-200/80 shadow-sm text-center transition-transform hover:-translate-y-1">
            <div className="text-xs text-indigo-700 font-semibold mb-1">
              Real-Time Stack
            </div>
            <div className="text-base sm:text-lg font-bold text-slate-900">
              Kafka, Snowflake, dbt
            </div>
          </div>

          {/* Card 3: Teal Tint */}
          <div className="p-4 rounded-2xl bg-gradient-to-br from-teal-50/90 to-emerald-50/70 border border-teal-200/80 shadow-sm text-center transition-transform hover:-translate-y-1">
            <div className="text-xs text-teal-700 font-semibold mb-1">
              12th Standard
            </div>
            <div className="text-base sm:text-lg font-bold text-slate-900">
              94.4%
            </div>
          </div>

          {/* Card 4: Amber/Warm Tint */}
          <div className="p-4 rounded-2xl bg-gradient-to-br from-amber-50/90 to-orange-50/70 border border-amber-200/80 shadow-sm text-center transition-transform hover:-translate-y-1">
            <div className="text-xs text-amber-800 font-semibold mb-1">
              10th Standard
            </div>
            <div className="text-base sm:text-lg font-bold text-slate-900">
              100% (10.0 GPA)
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
