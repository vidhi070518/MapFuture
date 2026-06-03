'use client';

import React, { useState, useMemo, useEffect } from 'react';
import Link from 'next/link';
import { Search, Briefcase, Code, Shield, DollarSign, TrendingUp, Clock, Brain, ArrowRight, Sparkles, HelpCircle } from 'lucide-react';
import { careers } from '../data/careers';
import { trackSearch } from '@/utils/userStore';

export default function SearchSystem() {
  const [searchQuery, setSearchQuery] = useState('');
  const [difficultyFilter, setDifficultyFilter] = useState('All');
  const [durationFilter, setDurationFilter] = useState('All');
  const [salaryFilter, setSalaryFilter] = useState('All');

  // Debounced Search Tracking to avoid storing intermediate keystrokes
  useEffect(() => {
    if (!searchQuery.trim() || searchQuery.trim().length < 3) return;
    const delayDebounceFn = setTimeout(() => {
      trackSearch(searchQuery);
    }, 1000);

    return () => clearTimeout(delayDebounceFn);
  }, [searchQuery]);

  // Filter logic
  const filteredCareers = useMemo(() => {
    return careers.filter((career) => {
      const query = searchQuery.toLowerCase().trim();
      const matchesQuery = 
        query === '' ||
        career.title.toLowerCase().includes(query) ||
        career.tagline.toLowerCase().includes(query) ||
        career.overview.toLowerCase().includes(query) ||
        career.skills.some((skill) => skill.name.toLowerCase().includes(query));

      const matchesDifficulty = 
        difficultyFilter === 'All' || 
        career.metrics.difficulty === difficultyFilter;

      let matchesDuration = true;
      if (durationFilter !== 'All') {
        const dur = career.metrics.duration.toLowerCase();
        if (durationFilter === 'short') {
          matchesDuration = dur.includes('4-6') || dur.includes('1-3') || dur.includes('3') || dur.includes('4') || dur.includes('5');
        } else if (durationFilter === 'medium') {
          matchesDuration = dur.includes('6-9') || dur.includes('6') || dur.includes('7') || dur.includes('8') || dur.includes('9');
        } else if (durationFilter === 'long') {
          matchesDuration = dur.includes('8-12') || dur.includes('12') || dur.includes('10') || dur.includes('11') || dur.includes('year');
        }
      }

      let matchesSalary = true;
      if (salaryFilter !== 'All') {
        const salaryNum = parseInt(career.metrics.avgSalary.replace(/[^0-9]/g, ''), 10);
        if (salaryFilter === '70k') {
          matchesSalary = salaryNum >= 70000;
        } else if (salaryFilter === '90k') {
          matchesSalary = salaryNum >= 90000;
        } else if (salaryFilter === '120k') {
          matchesSalary = salaryNum >= 120000;
        }
      }

      return matchesQuery && matchesDifficulty && matchesDuration && matchesSalary;
    });
  }, [searchQuery, difficultyFilter, durationFilter, salaryFilter]);

  const getCareerIcon = (id: string) => {
    switch (id) {
      case 'data-analyst':
        return <Briefcase className="h-5 w-5 text-teal-400" />;
      case 'ai-engineer':
        return <Code className="h-5 w-5 text-indigo-400" />;
      case 'cybersecurity-analyst':
        return <Shield className="h-5 w-5 text-indigo-400" />;
      default:
        return <Briefcase className="h-5 w-5 text-indigo-400" />;
    }
  };

  const getDifficultyColor = (diff: string) => {
    switch (diff) {
      case 'Easy':
        return 'bg-teal-500/10 text-teal-400 border-teal-500/20';
      case 'Medium':
        return 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20';
      case 'Hard':
        return 'bg-rose-500/10 text-rose-400 border-rose-500/20';
      default:
        return 'bg-slate-500/10 text-slate-400 border-slate-500/20';
    }
  };

  const clearFilters = () => {
    setSearchQuery('');
    setDifficultyFilter('All');
    setDurationFilter('All');
    setSalaryFilter('All');
  };

  return (
    <section id="search-section" className="py-12 sm:py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center space-y-3 mb-10">
          <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-slate-300">
            <Sparkles className="h-3.5 w-3.5 text-indigo-400" />
            <span>Interactive Learning Path Search</span>
          </div>
          <h2 className="heading-font text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Find Your Career Pathway
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 max-w-lg mx-auto">
            Enter a role or a technology skill to see estimated timelines, salaries, and step-by-step verified roadmaps.
          </p>
        </div>

        {/* Inputs and Filters */}
        <div className="max-w-4xl mx-auto space-y-5 mb-10">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-slate-500" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search e.g. SQL, Python, Networks, LLMs, Analyst..."
              className="block w-full pl-11 pr-4 py-3.5 rounded-xl bg-slate-900 border border-white/5 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500 glass-panel shadow-inner transition-all text-xs"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 right-0 pr-4 flex items-center text-[10px] text-slate-500 hover:text-slate-300"
              >
                Clear
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div>
              <select
                value={difficultyFilter}
                onChange={(e) => setDifficultyFilter(e.target.value)}
                className="block w-full px-3 py-2 rounded-xl bg-slate-900 border border-white/5 text-xs text-slate-300 focus:outline-none focus:ring-1 focus:ring-indigo-500"
              >
                <option value="All">All Difficulties</option>
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Hard">Hard</option>
              </select>
            </div>

            <div>
              <select
                value={durationFilter}
                onChange={(e) => setDurationFilter(e.target.value)}
                className="block w-full px-3 py-2 rounded-xl bg-slate-900 border border-white/5 text-xs text-slate-300 focus:outline-none focus:ring-1 focus:ring-indigo-500"
              >
                <option value="All">All Timelines</option>
                <option value="short">Short (&lt; 6 months)</option>
                <option value="medium">Medium (6-9 months)</option>
                <option value="long">Long (9+ months)</option>
              </select>
            </div>

            <div>
              <select
                value={salaryFilter}
                onChange={(e) => setSalaryFilter(e.target.value)}
                className="block w-full px-3 py-2 rounded-xl bg-slate-900 border border-white/5 text-xs text-slate-300 focus:outline-none focus:ring-1 focus:ring-indigo-500"
              >
                <option value="All">Any Salary</option>
                <option value="70k">$70,000+/yr</option>
                <option value="90k">$90,000+/yr</option>
                <option value="120k">$120,000+/yr</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results */}
        {filteredCareers.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {filteredCareers.map((career) => (
              <div 
                key={career.id} 
                className="rounded-2xl glass-panel glass-panel-hover flex flex-col justify-between overflow-hidden relative group p-5 border-white/5"
              >
                <div className="space-y-4">
                  {/* Icon & Difficulty */}
                  <div className="flex items-center justify-between">
                    <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 group-hover:border-indigo-500/20 transition-all shadow-sm">
                      {getCareerIcon(career.id)}
                    </div>
                    <span className={`px-2.5 py-0.5 rounded-full border text-[9px] font-semibold ${getDifficultyColor(career.metrics.difficulty)}`}>
                      {career.metrics.difficulty}
                    </span>
                  </div>

                  {/* Header text */}
                  <div>
                    <h3 className="heading-font text-base font-bold text-white group-hover:text-indigo-400 transition-colors">
                      {career.title}
                    </h3>
                    <p className="text-[10px] text-slate-400 font-medium italic mt-0.5">
                      &quot;{career.tagline}&quot;
                    </p>
                  </div>

                  <p className="text-xs text-slate-400 line-clamp-3 leading-relaxed">
                    {career.overview}
                  </p>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-2.5 pt-3 border-t border-white/5 text-[10px]">
                    <div className="flex items-center space-x-2">
                      <div className="p-1 rounded bg-white/5 text-slate-500">
                        <DollarSign className="h-3.5 w-3.5" />
                      </div>
                      <div>
                        <span className="text-[8px] uppercase tracking-wider text-slate-500 block font-semibold">Salary</span>
                        <span className="font-bold text-slate-300">{career.metrics.avgSalary}</span>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2">
                      <div className="p-1 rounded bg-white/5 text-slate-500">
                        <TrendingUp className="h-3.5 w-3.5" />
                      </div>
                      <div>
                        <span className="text-[8px] uppercase tracking-wider text-slate-500 block font-semibold">Growth</span>
                        <span className="font-bold text-slate-300 truncate block max-w-[80px]" title={career.metrics.jobGrowth}>
                          {career.metrics.jobGrowth.split(' ')[0]}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2">
                      <div className="p-1 rounded bg-white/5 text-slate-500">
                        <Clock className="h-3.5 w-3.5" />
                      </div>
                      <div>
                        <span className="text-[8px] uppercase tracking-wider text-slate-500 block font-semibold">Duration</span>
                        <span className="font-bold text-slate-300">{career.metrics.duration}</span>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2">
                      <div className="p-1 rounded bg-white/5 text-slate-500">
                        <Brain className="h-3.5 w-3.5" />
                      </div>
                      <div>
                        <span className="text-[8px] uppercase tracking-wider text-slate-500 block font-semibold">Ready Score</span>
                        <span className="font-bold text-slate-300">{career.confidenceMetrics.beginnerScore}/100</span>
                      </div>
                    </div>
                  </div>

                  {/* Skills badges */}
                  <div>
                    <span className="text-[8px] uppercase tracking-wider text-slate-500 font-bold block mb-1.5">Focus Skills</span>
                    <div className="flex flex-wrap gap-1">
                      {career.skills.slice(0, 3).map((skill, i) => (
                        <span 
                          key={i} 
                          className="px-2 py-0.5 rounded bg-white/5 text-[9px] text-slate-300 border border-white/5"
                        >
                          {skill.name.split(' (')[0]}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 mt-5 border-t border-white/5">
                  <Link 
                    href={`/careers/${career.id}`}
                    className="w-full flex items-center justify-center space-x-1.5 px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-xs font-semibold text-white shadow-md transition-all duration-200"
                  >
                    <span>View Learning Path</span>
                    <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* High-Fidelity Educational Empty State */
          <div className="max-w-lg mx-auto glass-panel p-6 sm:p-8 rounded-2xl border-white/5 space-y-5 text-center">
            <div className="w-11 h-11 rounded-full bg-white/5 flex items-center justify-center mx-auto text-slate-400">
              <HelpCircle className="h-5 w-5 text-indigo-400" />
            </div>
            <div className="space-y-2">
              <h3 className="heading-font text-base font-bold text-white">We Haven&apos;t Mapped That Role Yet</h3>
              <p className="text-xs text-slate-400 leading-relaxed max-w-sm mx-auto">
                No paths match your active filters. MapFuture focuses on verifying high-growth pathways rather than general lists.
              </p>
            </div>

            {/* Beginner Alternatives Guidance */}
            <div className="bg-slate-900/50 p-4 rounded-xl border border-white/5 space-y-3 text-left">
              <span className="text-[8px] uppercase tracking-wider text-slate-500 font-bold block">Suggested Beginner Guidance</span>
              <p className="text-[11px] text-slate-300 leading-relaxed">
                If you are new to coding, start with the <Link href="/careers/data-analyst" className="text-indigo-400 hover:underline font-semibold">Data Analyst Pathway</Link>. 
                Spreadsheet logic and SQL are highly accessible and require zero prior coding experience.
              </p>
              <div className="pt-1.5 border-t border-white/5 flex flex-wrap gap-1.5">
                <span className="text-[9px] text-slate-400 mr-1">Related keywords:</span>
                {['SQL', 'Python', 'Networking', 'LLMs', 'Analytics'].map((keyword) => (
                  <button
                    key={keyword}
                    onClick={() => setSearchQuery(keyword)}
                    className="px-2 py-0.5 rounded bg-white/5 text-[9px] text-slate-300 hover:bg-white/10 border border-white/5 transition-colors cursor-pointer"
                  >
                    {keyword}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-3 pt-2">
              <button 
                onClick={clearFilters}
                className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-semibold text-slate-300 hover:text-white transition-colors cursor-pointer"
              >
                Clear Search filters
              </button>
              <a 
                href="#feedback-section"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('feedback-section')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-xs font-semibold text-white transition-colors text-center cursor-pointer"
              >
                Propose a Career Pathway
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
