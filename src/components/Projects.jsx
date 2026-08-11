import React, { useState } from 'react';
import { projects } from '../data/portfolioData';
import ProjectModal from './ProjectModal';
import { FolderGit2, ArrowUpRight, Sparkles, CheckCircle2, Calendar } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-20 relative bg-slate-950/60">
      {/* Background glow */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-[140px] pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/60 text-cyan-300 text-xs font-semibold tracking-wider uppercase font-mono">
            <FolderGit2 className="w-3.5 h-3.5 text-cyan-400" />
            <span>Portfolio Highlights</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-300">Projects</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-teal-400 rounded-full"></div>
          <p className="text-slate-400 text-sm max-w-xl">
            Key software projects showcasing full-stack web development, MERN architecture, dynamic URL management, and AI API integration.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="flex flex-col justify-between p-7 rounded-3xl bg-slate-900/60 border border-slate-800/90 backdrop-blur-xl hover:border-cyan-500/40 transition-all duration-300 shadow-xl hover:-translate-y-1 group relative overflow-hidden"
            >
              {/* Card Top Pill & Year */}
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-2">
                  <span className="px-3 py-1 rounded-full bg-cyan-950/90 border border-cyan-800/80 text-cyan-300 text-xs font-mono font-semibold">
                    {project.category}
                  </span>
                  <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {project.year}
                  </span>
                </div>

                {/* Title & Tagline */}
                <div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs font-semibold text-cyan-400 mt-1">
                    {project.tagline}
                  </p>
                </div>

                {/* Short Description */}
                <p className="text-slate-300 text-sm leading-relaxed">
                  {project.shortDescription}
                </p>

                {/* Highlights List */}
                <div className="space-y-2 pt-2">
                  {project.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Bottom: Tech Stack Tags & Actions */}
              <div className="mt-8 pt-5 border-t border-slate-800/80 space-y-4">
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-lg text-xs font-mono bg-slate-950/80 text-cyan-300 border border-slate-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center justify-between gap-3 pt-1">
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-white hover:underline transition-colors"
                  >
                    <GithubIcon className="w-4 h-4 text-slate-400" />
                    <span>View Repository</span>
                  </a>

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-800 hover:bg-cyan-950 hover:border-cyan-700 border border-slate-700 text-xs font-semibold text-slate-200 hover:text-cyan-300 transition-all"
                  >
                    <span>Details</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
