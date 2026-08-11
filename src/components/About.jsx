import React from 'react';
import { education, personalInfo } from '../data/portfolioData';
import { GraduationCap, Award, BookOpen, Calendar, MapPin, CheckCircle2, User, Sparkles } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 relative bg-slate-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/60 text-cyan-300 text-xs font-semibold tracking-wider uppercase font-mono">
            <User className="w-3.5 h-3.5 text-cyan-400" />
            <span>Background & Education</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-300">Me</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-teal-400 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Personal Narrative & Philosophy */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-7 rounded-3xl bg-slate-900/60 border border-slate-800/90 backdrop-blur-xl space-y-5 shadow-xl">
              <h3 className="text-xl font-bold text-white flex items-center gap-2.5">
                <Sparkles className="w-5 h-5 text-cyan-400" />
                <span>Passionate Engineer & Learner</span>
              </h3>

              <p className="text-slate-300 text-sm leading-relaxed">
                I am a Computer Science Engineering student at <strong className="text-white">Dr. N.G.P. Institute of Technology</strong> with a strong foundation in full-stack web architectures, algorithmic problem solving, and emerging AI technologies.
              </p>

              <p className="text-slate-300 text-sm leading-relaxed">
                My academic journey is complemented by hands-on project creation—ranging from AI-driven study recommendation platforms to high-performance MERN URL shorteners. I thrive on converting conceptual ideas into clean, user-centric web applications.
              </p>

              {/* Core Attributes */}
              <div className="pt-2 border-t border-slate-800/80 space-y-2.5">
                <h4 className="text-xs font-mono uppercase text-slate-400 font-semibold tracking-wider">Key Pillars:</h4>
                <div className="grid grid-cols-2 gap-2 text-xs font-medium text-slate-200">
                  <div className="flex items-center gap-2 p-2 rounded-xl bg-slate-950/50 border border-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Full-Stack Web Dev</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 rounded-xl bg-slate-950/50 border border-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                    <span>AI API Integration</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 rounded-xl bg-slate-950/50 border border-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" />
                    <span>Data Structures</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 rounded-xl bg-slate-950/50 border border-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Problem Solving</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Education Timeline Cards */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-xl font-bold text-white flex items-center gap-2.5 pl-1">
              <GraduationCap className="w-6 h-6 text-cyan-400" />
              <span>Academic Timeline</span>
            </h3>

            <div className="space-y-5">
              {education.map((item) => (
                <div
                  key={item.id}
                  className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800/90 backdrop-blur-xl hover:border-cyan-500/40 transition-all duration-300 shadow-xl group"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                    <div>
                      <span className="text-xs font-mono text-cyan-400 uppercase tracking-wide font-semibold">
                        {item.period}
                      </span>
                      <h4 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors mt-0.5">
                        {item.degree}
                      </h4>
                    </div>

                    <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-cyan-950/80 border border-cyan-800 text-cyan-300 text-xs font-extrabold self-start sm:self-center shadow-inner">
                      <Award className="w-4 h-4 text-teal-400" />
                      <span>{item.scoreLabel}: {item.score}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-xs text-slate-400 mb-3 font-medium">
                    <span className="flex items-center gap-1">
                      <BookOpen className="w-3.5 h-3.5 text-slate-400" />
                      {item.institution}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      {item.location}
                    </span>
                  </div>

                  <p className="text-slate-300 text-sm leading-relaxed mb-4">
                    {item.description}
                  </p>

                  {/* Highlights Tags */}
                  <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-800/80">
                    {item.highlights.map((hl, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-950/70 text-slate-300 border border-slate-800"
                      >
                        {hl}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
