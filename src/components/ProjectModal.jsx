import React from 'react';
import { X, ExternalLink, Sparkles, CheckCircle2, Calendar, Tag } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-fadeIn">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-950/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal Container */}
      <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-cyan-950/50 z-10 my-8 space-y-6">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-2 pr-8">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-cyan-950 border border-cyan-800 text-cyan-300 text-xs font-mono font-semibold">
              {project.category}
            </span>
            <span className="flex items-center gap-1 text-xs text-slate-400 font-mono">
              <Calendar className="w-3.5 h-3.5" />
              {project.year}
            </span>
          </div>

          <h3 className="text-2xl font-extrabold text-white">
            {project.title}
          </h3>
          <p className="text-sm font-medium text-cyan-400">
            {project.tagline}
          </p>
        </div>

        {/* Description */}
        <div className="space-y-3">
          <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">Overview</h4>
          <p className="text-slate-300 text-sm leading-relaxed">
            {project.longDescription || project.shortDescription}
          </p>
        </div>

        {/* Key Features */}
        <div className="space-y-3">
          <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span>Key Features & Innovations</span>
          </h4>
          <div className="space-y-2">
            {project.highlights.map((highlight, idx) => (
              <div key={idx} className="flex items-start gap-2.5 p-2.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
                <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <span className="text-xs text-slate-300 font-medium">{highlight}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="space-y-3">
          <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold flex items-center gap-1.5">
            <Tag className="w-4 h-4 text-cyan-400" />
            <span>Technologies Used</span>
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-lg text-xs font-semibold bg-cyan-950/80 text-cyan-300 border border-cyan-800"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Footer */}
        <div className="pt-4 border-t border-slate-800 flex items-center justify-between gap-4">
          <a
            href={project.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition-colors"
          >
            <GithubIcon className="w-4 h-4" />
            <span>View Source Code</span>
          </a>

          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-400 to-teal-400 text-slate-950 text-xs font-bold hover:opacity-90 transition-opacity"
          >
            Done
          </button>
        </div>

      </div>
    </div>
  );
}
