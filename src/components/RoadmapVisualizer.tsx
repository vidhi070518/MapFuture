'use client';

import React, { useState } from 'react';
import { RoadmapStep } from '../types';
import { Calendar, Target, Award, Code, CheckCircle, ChevronRight, Layers } from 'lucide-react';

interface RoadmapVisualizerProps {
  steps: RoadmapStep[];
}

export default function RoadmapVisualizer({ steps }: RoadmapVisualizerProps) {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const currentStep = steps[activeStepIndex];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      {/* Sidebar Timeline navigation */}
      <div className="lg:col-span-4 space-y-3">
        <h3 className="heading-font text-xs font-semibold uppercase tracking-wider text-slate-500 mb-4 px-2 flex items-center space-x-2">
          <Layers className="h-4 w-4 text-violet-400" />
          <span>Timeline Phases</span>
        </h3>
        
        <div className="relative border-l border-white/10 ml-4 pl-6 space-y-4">
          {steps.map((step, index) => {
            const isActive = index === activeStepIndex;
            const isCompleted = index < activeStepIndex;
            
            return (
              <button
                key={index}
                onClick={() => setActiveStepIndex(index)}
                className="w-full text-left focus:outline-none relative group"
              >
                {/* Timeline node dot */}
                <span className={`absolute -left-[31px] top-3.5 w-4 h-4 rounded-full border transition-all duration-300 ${
                  isActive 
                    ? 'bg-violet-500 border-violet-400 scale-125 shadow-[0_0_10px_#8b5cf6]' 
                    : isCompleted
                      ? 'bg-cyan-500 border-cyan-400'
                      : 'bg-slate-900 border-white/20 group-hover:border-violet-500/50'
                }`} />

                {/* Card navigation button */}
                <div className={`p-4 rounded-xl transition-all duration-300 ${
                  isActive 
                    ? 'bg-white/5 border border-white/10 shadow-lg shadow-black/10' 
                    : 'bg-transparent border border-transparent hover:bg-white/2'
                }`}>
                  <div className="flex items-center justify-between">
                    <span className={`text-[10px] font-bold uppercase tracking-wider ${
                      isActive ? 'text-violet-400' : 'text-slate-500'
                    }`}>
                      {step.phase}
                    </span>
                    <span className="flex items-center text-[10px] text-slate-400">
                      <Calendar className="h-3 w-3 mr-1" />
                      {step.duration}
                    </span>
                  </div>
                  <h4 className={`text-sm font-bold mt-1 transition-colors ${
                    isActive ? 'text-white' : 'text-slate-400 group-hover:text-slate-200'
                  }`}>
                    {step.title}
                  </h4>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Details Panel */}
      <div className="lg:col-span-8">
        <div className="glass-panel p-6 sm:p-8 rounded-2xl border-white/5 shadow-2xl relative overflow-hidden space-y-6">
          {/* Subtle ambient light */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-violet-600/10 rounded-full filter blur-2xl pointer-events-none" />

          {/* Phase Title Header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-white/5 pb-4 gap-2">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-violet-400 bg-violet-500/10 px-2.5 py-1 rounded-full">
                {currentStep.phase}
              </span>
              <h3 className="heading-font text-xl sm:text-2xl font-bold text-white mt-2">
                {currentStep.title}
              </h3>
            </div>
            <div className="flex items-center text-xs font-semibold text-slate-400 self-start sm:self-center">
              <Calendar className="h-4 w-4 mr-1.5 text-slate-500" />
              <span>Target Duration: </span>
              <span className="text-white ml-1">{currentStep.duration}</span>
            </div>
          </div>

          {/* Phase Description */}
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {currentStep.description}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Skills section */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center space-x-2">
                <Target className="h-4 w-4 text-violet-400" />
                <span>Skills to Master</span>
              </h4>
              <ul className="space-y-2">
                {currentStep.skillsToLearn.map((skill, index) => (
                  <li key={index} className="flex items-start space-x-2 text-xs text-slate-300">
                    <CheckCircle className="h-3.5 w-3.5 text-violet-400 mt-0.5 flex-shrink-0" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Projects section */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center space-x-2">
                <Code className="h-4 w-4 text-cyan-400" />
                <span>Practice Projects</span>
              </h4>
              <ul className="space-y-2">
                {currentStep.projectsToBuild.map((project, index) => (
                  <li key={index} className="flex items-start space-x-2 text-xs text-slate-300">
                    <ChevronRight className="h-3.5 w-3.5 text-cyan-400 mt-0.5 flex-shrink-0" />
                    <span>{project}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Milestones check */}
          <div className="bg-white/2 border border-white/5 rounded-xl p-4 sm:p-5 mt-6">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center space-x-2 mb-3">
              <Award className="h-4 w-4 text-cyan-400" />
              <span>Gatekeeper Milestones</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {currentStep.milestones.map((milestone, index) => (
                <div key={index} className="flex items-center space-x-2.5 p-2 rounded-lg bg-white/2 border border-white/5 text-[11px] text-slate-200">
                  <div className="w-5 h-5 rounded-full bg-cyan-500/10 flex items-center justify-center text-cyan-400 font-bold text-[10px]">
                    {index + 1}
                  </div>
                  <span>{milestone}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
