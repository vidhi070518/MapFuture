'use client';

import React, { useState } from 'react';
import { CareerProject } from '../types';
import { ChevronDown, ChevronUp, Clock, BarChart, Code, CheckSquare, Sparkles } from 'lucide-react';

interface ProjectSectionProps {
  projects: CareerProject[];
}

export default function ProjectSection({ projects }: ProjectSectionProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const getDifficultyBadge = (diff: string) => {
    switch (diff) {
      case 'Beginner':
        return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20';
      case 'Intermediate':
        return 'bg-violet-500/10 text-violet-400 border-violet-500/20';
      case 'Advanced':
        return 'bg-rose-500/10 text-rose-400 border-rose-500/20';
      default:
        return 'bg-slate-500/10 text-slate-400 border-slate-500/20';
    }
  };

  return (
    <div className="space-y-6">
      {projects.map((project, index) => {
        const isExpanded = expandedIndex === index;
        
        return (
          <div 
            key={index} 
            className={`rounded-2xl border transition-all duration-300 ${
              isExpanded 
                ? 'bg-slate-900 border-violet-500/30 shadow-2xl' 
                : 'bg-white/2 border-white/5 hover:border-white/10 hover:bg-white/4'
            }`}
          >
            {/* Header Accordion Button */}
            <button
              onClick={() => toggleExpand(index)}
              className="w-full flex flex-col sm:flex-row sm:items-center sm:justify-between p-6 focus:outline-none text-left gap-4"
            >
              <div className="space-y-2 flex-grow">
                <div className="flex items-center space-x-2.5">
                  <span className={`px-2.5 py-0.5 rounded-full border text-[10px] font-semibold ${getDifficultyBadge(project.difficulty)}`}>
                    {project.difficulty}
                  </span>
                  <span className="flex items-center text-[10px] text-slate-400">
                    <Clock className="h-3.5 w-3.5 mr-1 text-slate-500" />
                    {project.duration}
                  </span>
                </div>
                <h3 className="heading-font text-lg font-bold text-white transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed max-w-3xl">
                  {project.description}
                </p>
                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5 pt-1.5">
                  {project.techStack.map((tech, i) => (
                    <span 
                      key={i} 
                      className="px-2 py-0.5 rounded bg-white/5 border border-white/5 text-[9px] font-medium text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="self-end sm:self-center flex-shrink-0 flex items-center justify-center p-2 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-white transition-colors">
                {isExpanded ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
              </div>
            </button>

            {/* Expanded Content Details */}
            {isExpanded && (
              <div className="border-t border-white/5 p-6 sm:p-8 bg-black/20 rounded-b-2xl space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Key Features */}
                  <div className="space-y-3">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center space-x-2">
                      <Sparkles className="h-4 w-4 text-violet-400" />
                      <span>Key Project Features</span>
                    </h4>
                    <ul className="space-y-2">
                      {project.keyFeatures.map((feat, i) => (
                        <li key={i} className="flex items-start space-x-2.5 text-xs text-slate-300">
                          <span className="w-1.5 h-1.5 rounded-full bg-violet-400 mt-1.5 flex-shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Expected Deliverable */}
                  <div className="space-y-3">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center space-x-2">
                      <BarChart className="h-4 w-4 text-cyan-400" />
                      <span>Expected Final Deliverable</span>
                    </h4>
                    <div className="p-4 rounded-xl bg-white/2 border border-white/5 text-xs text-slate-300 italic leading-relaxed">
                      {project.deliverable}
                    </div>
                  </div>
                </div>

                {/* Step-by-Step implementation Guide */}
                <div className="space-y-4 pt-4 border-t border-white/5">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center space-x-2">
                    <CheckSquare className="h-4 w-4 text-cyan-400" />
                    <span>Step-by-Step Implementation Guide</span>
                  </h4>
                  <div className="space-y-3 ml-2">
                    {project.stepByStep.map((step, i) => (
                      <div key={i} className="flex items-start space-x-3 text-xs">
                        <span className="w-5 h-5 rounded-full bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400 font-bold text-[10px] flex-shrink-0 mt-0.5">
                          {i + 1}
                        </span>
                        <p className="text-slate-300 leading-relaxed mt-0.5">
                          {step}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
