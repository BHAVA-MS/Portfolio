import React from 'react';
import { achievements } from '../data/portfolioData';
import { Award, Trophy, Presentation, ShieldCheck, Calendar, Building, Sparkles } from 'lucide-react';

const typeIconMap = {
  Hackathon: Trophy,
  Symposium: Presentation,
  Certification: ShieldCheck
};

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 relative bg-slate-950/60">
      {/* Background glow */}
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/60 text-cyan-300 text-xs font-semibold tracking-wider uppercase font-mono">
            <Trophy className="w-3.5 h-3.5 text-cyan-400" />
            <span>Honors & Certifications</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Achievements & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-300">Participations</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-teal-400 rounded-full"></div>
          <p className="text-slate-400 text-sm max-w-xl">
            Recognitions from national hackathons, technical symposium paper presentations, and professional NPTEL certification.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {achievements.map((item) => {
            const IconComp = typeIconMap[item.type] || Award;
            return (
              <div
                key={item.id}
                className="flex flex-col justify-between p-7 rounded-3xl bg-slate-900/60 border border-slate-800/90 backdrop-blur-xl hover:border-cyan-500/40 transition-all duration-300 shadow-xl hover:-translate-y-1 group"
              >
                <div className="space-y-4">
                  {/* Top Badge & Date */}
                  <div className="flex items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/90 border border-cyan-800 text-cyan-300 text-xs font-mono font-semibold">
                      <Sparkles className="w-3 h-3 text-cyan-400" />
                      {item.badgeText}
                    </span>
                    <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {item.date}
                    </span>
                  </div>

                  {/* Icon & Title */}
                  <div className="flex items-start gap-3 pt-2">
                    <div className="p-3 rounded-2xl bg-slate-950 border border-slate-800 text-cyan-400 group-hover:scale-110 transition-transform shrink-0">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-xs text-slate-400 font-medium flex items-center gap-1 mt-1">
                        <Building className="w-3 h-3 text-slate-500 shrink-0" />
                        {item.institution}
                      </p>
                    </div>
                  </div>

                  {/* Sub Project Title */}
                  {item.projectTitle && (
                    <div className="px-3 py-1.5 rounded-xl bg-slate-950/70 border border-slate-800/80 text-xs font-mono text-cyan-300">
                      Focus: {item.projectTitle}
                    </div>
                  )}

                  {/* Description */}
                  <p className="text-slate-300 text-xs leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Event Footer */}
                <div className="mt-6 pt-4 border-t border-slate-800/80">
                  <span className="text-[11px] font-mono text-slate-400 block truncate">
                    {item.event}
                  </span>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
