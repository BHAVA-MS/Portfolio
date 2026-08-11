import React from 'react';
import { skillCategories } from '../data/portfolioData';
import { Code2, Layout, Server, Database, Wrench, CheckCircle } from 'lucide-react';

const iconMap = {
  Code2: Code2,
  Layout: Layout,
  Server: Server,
  Database: Database,
  Wrench: Wrench
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 relative">
      {/* Glow background */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/60 text-cyan-300 text-xs font-semibold tracking-wider uppercase font-mono">
            <Code2 className="w-3.5 h-3.5 text-cyan-400" />
            <span>Tech Stack & Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-300">Skills</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-teal-400 rounded-full"></div>
          <p className="text-slate-400 text-sm max-w-xl">
            A comprehensive overview of programming languages, frameworks, database systems, and software engineering tools in my toolkit.
          </p>
        </div>

        {/* Skill Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => {
            const IconComponent = iconMap[category.icon] || Code2;
            return (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800/90 backdrop-blur-xl hover:border-cyan-500/40 transition-all duration-300 shadow-xl hover:-translate-y-1 group"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-800">
                  <div className="p-3 rounded-2xl bg-cyan-950/80 border border-cyan-800 text-cyan-400 group-hover:scale-110 transition-transform">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {category.title}
                    </h3>
                    <span className="text-xs font-mono text-slate-400">{category.skills.length} competencies</span>
                  </div>
                </div>

                {/* Skills Tags List */}
                <div className="flex flex-wrap gap-2.5">
                  {category.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-950/70 border border-slate-800 hover:border-slate-700 transition-colors"
                    >
                      <CheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span className="text-sm font-semibold text-slate-200">{skill.name}</span>
                      {skill.level && (
                        <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800">
                          {skill.level}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
