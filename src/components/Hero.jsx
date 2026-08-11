import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { Mail, Phone, ArrowRight, Sparkles, Code, Brain, Award, ChevronDown } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden min-h-screen flex flex-col justify-center">
      {/* Dynamic Background Effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none -z-10 animate-pulse-slow"></div>
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-40 -z-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Text Content */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-800/60 text-cyan-300 text-xs font-semibold tracking-wide backdrop-blur-md shadow-sm">
              <span className="w-2 h-2 rounded-full bg-teal-400 animate-ping"></span>
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>Available for Full Stack & AI Projects</span>
            </div>

            {/* Title & Name */}
            <div className="space-y-2">
              <h2 className="text-slate-400 text-lg sm:text-xl font-medium tracking-wide">
                Hello, I'm
              </h2>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight">
                <span className="bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent">
                  {personalInfo.name}
                </span>
              </h1>
              <p className="text-lg sm:text-2xl font-semibold bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-400 bg-clip-text text-transparent pt-1">
                {personalInfo.title}
              </p>
            </div>

            {/* Short Bio */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
              {personalInfo.bio}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 via-teal-400 to-teal-300 hover:from-cyan-300 hover:to-teal-200 transition-all duration-200 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 transition-all duration-200 shadow-md hover:-translate-y-0.5"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4 pt-4 border-t border-slate-800/80 w-full max-w-md">
              <span className="text-xs uppercase tracking-wider text-slate-400 font-mono font-medium">
                Connect:
              </span>
              
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-900/80 text-slate-300 hover:text-cyan-400 hover:bg-slate-800 border border-slate-800 transition-all duration-200 hover:scale-110"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-5 h-5" />
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-900/80 text-slate-300 hover:text-cyan-400 hover:bg-slate-800 border border-slate-800 transition-all duration-200 hover:scale-110"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2.5 rounded-xl bg-slate-900/80 text-slate-300 hover:text-cyan-400 hover:bg-slate-800 border border-slate-800 transition-all duration-200 hover:scale-110"
                aria-label="Send Email"
              >
                <Mail className="w-5 h-5" />
              </a>

              <a
                href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                className="p-2.5 rounded-xl bg-slate-900/80 text-slate-300 hover:text-cyan-400 hover:bg-slate-800 border border-slate-800 transition-all duration-200 hover:scale-110"
                aria-label="Call Phone"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right Column: Visual Avatar & Stats Grid Card */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            
            {/* Visual Glassmorphic Profile Feature Box */}
            <div className="relative w-full max-w-md p-6 rounded-3xl bg-slate-900/70 border border-slate-800 backdrop-blur-xl shadow-2xl shadow-cyan-950/30">
              
              {/* Glow Pill Decorator */}
              <div className="absolute -top-3 right-6 px-3 py-1 bg-gradient-to-r from-cyan-500 to-indigo-500 text-slate-950 text-xs font-bold rounded-full shadow-md">
                CSE Student
              </div>

              {/* Profile Avatar Graphic Card */}
              <div className="flex items-center gap-4 mb-6 pb-6 border-b border-slate-800">
                <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-tr from-cyan-500 via-teal-400 to-indigo-600 p-[2px] shadow-lg shadow-cyan-500/20">
                  <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center text-cyan-300 font-extrabold text-2xl font-mono">
                    BS
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">{personalInfo.name}</h3>
                  <p className="text-xs text-cyan-400 font-medium">B.E. Computer Science & Engineering</p>
                  <p className="text-xs text-slate-400 mt-0.5">Dr. N.G.P Institute of Technology</p>
                </div>
              </div>

              {/* Stat Grid */}
              <div className="grid grid-cols-2 gap-3">
                {personalInfo.stats.map((stat, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-2xl bg-slate-950/60 border border-slate-800/80 hover:border-cyan-500/40 transition-all duration-200 group"
                  >
                    <span className="text-2xl font-extrabold text-white group-hover:text-cyan-300 transition-colors">
                      {stat.value}
                    </span>
                    <h4 className="text-xs font-semibold text-slate-300 mt-0.5">{stat.label}</h4>
                    <p className="text-[11px] text-slate-400 mt-0.5">{stat.subtext}</p>
                  </div>
                ))}
              </div>

              {/* Skill Highlights Pills */}
              <div className="mt-5 pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-2">
                <span className="text-[11px] text-slate-400 font-mono">Core:</span>
                {['Java', 'Python', 'React', 'Node.js', 'MySQL', 'AI Integration'].map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-800/60 text-slate-300 border border-slate-700/50"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>

        {/* Scroll Down Indicator */}
        <div className="mt-16 flex justify-center">
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-xs font-mono text-slate-400 hover:text-cyan-400 transition-colors group"
          >
            <span>SCROLL DOWN</span>
            <ChevronDown className="w-4 h-4 animate-bounce text-cyan-400" />
          </a>
        </div>

      </div>
    </section>
  );
}
