'use client';

import React, { useState } from 'react';
import { PortfolioGuide } from '../types';
import { Sparkles, FileText, CheckSquare, Star, ExternalLink, Globe } from 'lucide-react';

interface PortfolioGuidanceProps {
  guide: PortfolioGuide;
}

export default function PortfolioGuidance({ guide }: PortfolioGuidanceProps) {
  // Local state to keep track of checked items in checklist
  const [checkedItems, setCheckedItems] = useState<Record<number, boolean>>({});

  const toggleCheck = (index: number) => {
    setCheckedItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  // Calculate percentage of checklist completed
  const totalItems = guide.checklist.length;
  const completedItems = Object.values(checkedItems).filter(Boolean).length;
  const completionPercentage = totalItems > 0 ? Math.round((completedItems / totalItems) * 100) : 0;

  return (
    <div className="space-y-8">
      {/* Portfolio Overview */}
      <div className="glass-panel p-6 sm:p-8 rounded-2xl border-white/5 relative overflow-hidden">
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-cyan-600/5 rounded-full filter blur-2xl pointer-events-none" />
        <h3 className="heading-font text-lg font-bold text-white flex items-center space-x-2 mb-3">
          <Sparkles className="h-5 w-5 text-cyan-400" />
          <span>Building Your Showcase</span>
        </h3>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
          {guide.overview}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Platform Guides */}
        <div className="space-y-6">
          <h3 className="heading-font text-sm font-bold uppercase tracking-wider text-slate-400 flex items-center space-x-2 border-b border-white/5 pb-2">
            <Globe className="h-4.5 w-4.5 text-violet-400" />
            <span>Target Showcase Platforms</span>
          </h3>

          <div className="space-y-4">
            {guide.platforms.map((platform, index) => (
              <div 
                key={index} 
                className="p-5 rounded-xl bg-white/2 border border-white/5 space-y-3 hover:border-violet-500/20 transition-all duration-300"
              >
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center space-x-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
                    <span>{platform.name}</span>
                  </h4>
                  <span className="text-[9px] text-slate-500 font-semibold">Recommended</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {platform.description}
                </p>
                <ul className="space-y-1.5 pl-1.5 pt-1 border-t border-white/5">
                  {platform.tips.map((tip, idx) => (
                    <li key={idx} className="flex items-start space-x-2 text-[11px] text-slate-300">
                      <Star className="h-3 w-3 text-violet-400 flex-shrink-0 mt-0.5" />
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Resume Tips & Checklist */}
        <div className="space-y-6">
          {/* Resume Tips */}
          <div className="space-y-4">
            <h3 className="heading-font text-sm font-bold uppercase tracking-wider text-slate-400 flex items-center space-x-2 border-b border-white/5 pb-2">
              <FileText className="h-4.5 w-4.5 text-cyan-400" />
              <span>Resume Customization Tips</span>
            </h3>
            <div className="p-5 rounded-xl bg-white/2 border border-white/5 space-y-3">
              <ul className="space-y-2.5">
                {guide.resumeTips.map((tip, index) => (
                  <li key={index} className="flex items-start space-x-3 text-xs text-slate-300">
                    <span className="w-5 h-5 rounded-full bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 font-bold text-[10px] flex-shrink-0 mt-0.5">
                      {index + 1}
                    </span>
                    <span className="leading-relaxed mt-0.5">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Checklist */}
          <div className="space-y-4">
            <h3 className="heading-font text-sm font-bold uppercase tracking-wider text-slate-400 flex items-center space-x-2 border-b border-white/5 pb-2">
              <CheckSquare className="h-4.5 w-4.5 text-emerald-400" />
              <span>Portfolio Readiness Checklist</span>
            </h3>
            <div className="p-5 rounded-xl bg-white/2 border border-white/5 space-y-4">
              {/* Progress bar */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-[10px] font-semibold text-slate-400">
                  <span>Progress to Ready</span>
                  <span className="text-white font-bold">{completionPercentage}%</span>
                </div>
                <div className="w-full h-1.5 rounded-full bg-white/5 overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-violet-500 to-cyan-400 transition-all duration-500" 
                    style={{ width: `${completionPercentage}%` }}
                  />
                </div>
              </div>

              {/* Items */}
              <div className="space-y-2">
                {guide.checklist.map((item, index) => {
                  const isChecked = !!checkedItems[index];
                  
                  return (
                    <button
                      key={index}
                      onClick={() => toggleCheck(index)}
                      className="w-full flex items-start space-x-3 p-2.5 rounded-lg hover:bg-white/5 text-left transition-colors focus:outline-none"
                    >
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => {}} // Controlled by parent button click
                        className="mt-0.5 rounded border-white/10 text-violet-500 focus:ring-violet-500 bg-slate-900 h-3.5 w-3.5 flex-shrink-0 cursor-pointer"
                      />
                      <span className={`text-xs transition-colors ${isChecked ? 'line-through text-slate-500' : 'text-slate-300'}`}>
                        {item}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
