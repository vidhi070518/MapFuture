'use client';

import React, { useState } from 'react';
import { Skill } from '../types';
import { Star, ChevronDown, ChevronUp, BookOpen, Settings, Users, Lightbulb } from 'lucide-react';

interface SkillProgressProps {
  skills: Skill[];
}

export default function SkillProgress({ skills }: SkillProgressProps) {
  const [expandedSkill, setExpandedSkill] = useState<string | null>(null);

  const toggleSkill = (name: string) => {
    if (expandedSkill === name) {
      setExpandedSkill(null);
    } else {
      setExpandedSkill(name);
    }
  };

  // Group skills by category
  const categories = {
    Technical: skills.filter((s) => s.category === 'Technical'),
    Tool: skills.filter((s) => s.category === 'Tool'),
    Foundational: skills.filter((s) => s.category === 'Foundational'),
    Soft: skills.filter((s) => s.category === 'Soft'),
  };

  // Render stars representing importance level
  const renderStars = (rating: number) => {
    return (
      <div className="flex space-x-0.5">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-3 w-3 ${
              i < rating 
                ? 'text-amber-400 fill-amber-400 drop-shadow-[0_0_2px_rgba(251,191,36,0.5)]' 
                : 'text-slate-600'
            }`}
          />
        ))}
      </div>
    );
  };

  const getCategoryIcon = (cat: string) => {
    switch (cat) {
      case 'Technical':
        return <BookOpen className="h-4 w-4 text-violet-400" />;
      case 'Tool':
        return <Settings className="h-4 w-4 text-cyan-400" />;
      case 'Foundational':
        return <Lightbulb className="h-4 w-4 text-emerald-400" />;
      case 'Soft':
        return <Users className="h-4 w-4 text-rose-400" />;
      default:
        return <BookOpen className="h-4 w-4 text-slate-400" />;
    }
  };

  const getLevelBadge = (level: string) => {
    switch (level) {
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
    <div className="space-y-8">
      {Object.entries(categories).map(([categoryName, categorySkills]) => {
        if (categorySkills.length === 0) return null;

        return (
          <div key={categoryName} className="space-y-3">
            <h4 className="heading-font text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center space-x-2 border-b border-white/5 pb-2">
              {getCategoryIcon(categoryName)}
              <span>{categoryName === 'Tool' ? 'Tools & Platforms' : `${categoryName} Skills`}</span>
            </h4>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {categorySkills.map((skill) => {
                const isExpanded = expandedSkill === skill.name;
                
                return (
                  <div 
                    key={skill.name}
                    className={`rounded-xl border transition-all duration-300 ${
                      isExpanded 
                        ? 'bg-slate-900/90 border-violet-500/30 shadow-lg shadow-violet-500/5' 
                        : 'bg-white/2 border-white/5 hover:border-white/10 hover:bg-white/4'
                    }`}
                  >
                    <button
                      onClick={() => toggleSkill(skill.name)}
                      className="w-full flex items-center justify-between p-4 focus:outline-none"
                    >
                      <div className="flex flex-col items-start space-y-1 text-left">
                        <span className="text-xs font-bold text-white">{skill.name}</span>
                        <div className="flex items-center space-x-2 mt-1">
                          <span className={`px-2 py-0.5 rounded text-[9px] font-semibold border ${getLevelBadge(skill.level)}`}>
                            {skill.level}
                          </span>
                          {renderStars(skill.importance)}
                        </div>
                      </div>
                      <div className="p-1 rounded bg-white/5 text-slate-400 group-hover:text-white">
                        {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                      </div>
                    </button>

                    {isExpanded && (
                      <div className="px-4 pb-4 pt-2 border-t border-white/5 text-xs text-slate-300 leading-relaxed bg-black/20 rounded-b-xl">
                        <p>{skill.description}</p>
                        <div className="mt-2.5 pt-2.5 border-t border-white/5 flex items-center justify-between text-[10px] text-slate-400">
                          <span>Required Proficiency: <strong className="text-slate-200">{skill.level}</strong></span>
                          <span>Importance: <strong className="text-slate-200">{skill.importance}/5</strong></span>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
