import React from 'react';
import { experiences } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin, CheckCircle2, Building2, Sparkles } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/60 text-cyan-300 text-xs font-semibold tracking-wider uppercase font-mono">
            <Briefcase className="w-3.5 h-3.5 text-cyan-400" />
            <span>Professional Exposure</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Industry <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-300">Experience</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-teal-400 rounded-full"></div>
          <p className="text-slate-400 text-sm max-w-xl">
            Practical experience gained through structured corporate web development internships and real-world project workflows.
          </p>
        </div>

        {/* Timeline List */}
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="relative pl-6 sm:pl-8 pb-8 border-l-2 border-slate-800 last:pb-0"
            >
              {/* Timeline Node Icon */}
              <div className="absolute -left-[17px] top-0 w-8 h-8 rounded-full bg-slate-950 border-2 border-cyan-500 flex items-center justify-center text-cyan-400 shadow-md shadow-cyan-500/20">
                <Briefcase className="w-4 h-4" />
              </div>

              {/* Main Card */}
              <div className="p-7 rounded-3xl bg-slate-900/60 border border-slate-800/90 backdrop-blur-xl hover:border-cyan-500/40 transition-all duration-300 shadow-xl space-y-4">
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-800">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="px-2.5 py-0.5 rounded-full bg-cyan-950 border border-cyan-800 text-cyan-300 text-[11px] font-mono font-semibold">
                        {exp.type}
                      </span>
                    </div>
                    <h3 className="text-xl font-extrabold text-white">
                      {exp.role}
                    </h3>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-300 font-semibold mt-1">
                      <span className="flex items-center gap-1.5 text-cyan-400">
                        <Building2 className="w-3.5 h-3.5" />
                        {exp.company}
                      </span>
                      <span className="flex items-center gap-1.5 text-slate-400">
                        <MapPin className="w-3.5 h-3.5" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-950/80 border border-slate-800 text-slate-300 text-xs font-mono self-start sm:self-center">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-slate-300 text-sm leading-relaxed">
                  {exp.description}
                </p>

                {/* Key Bullet Points */}
                <div className="space-y-2.5 pt-2">
                  <h4 className="text-xs font-mono uppercase text-slate-400 font-semibold tracking-wider">
                    Key Contributions & Learnings:
                  </h4>
                  <div className="space-y-2">
                    {exp.keyPoints.map((point, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
