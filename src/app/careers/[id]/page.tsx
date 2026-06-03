'use client';

import React, { useState, useEffect, use } from 'react';
import Link from 'next/link';
import { careers } from '@/data/careers';
import RoadmapVisualizer from '@/components/RoadmapVisualizer';
import SkillProgress from '@/components/SkillProgress';
import CertificationSection from '@/components/CertificationSection';
import ProjectSection from '@/components/ProjectSection';
import PortfolioGuidance from '@/components/PortfolioGuidance';
import FeedbackCollection from '@/components/FeedbackCollection';
import { 
  ArrowLeft, DollarSign, TrendingUp, Clock, Brain, 
  Map, Target, Award, Code, Compass, ArrowUpRight, CheckCircle2,
  Bookmark, ShieldAlert, Sparkles, Smile, ShieldCheck, Heart, UserCheck, AlertTriangle
} from 'lucide-react';
import { 
  isBookmarked, toggleBookmark, trackPageVisit, 
  setPreferredLearningPath, getUserIntent 
} from '@/utils/userStore';

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function CareerPage({ params }: PageProps) {
  const { id } = use(params);
  const career = careers.find((c) => c.id === id);
  
  const [activeTab, setActiveTab] = useState<'roadmap' | 'whychoose' | 'skills' | 'certifications' | 'projects' | 'nextsteps'>('roadmap');
  const [bookmarked, setBookmarked] = useState(false);
  const [preferredPath, setPreferredPath] = useState('self-paced');

  // Track page visit and hydrate bookmarks/intent on mount
  useEffect(() => {
    if (career) {
      trackPageVisit(career.id);
      setBookmarked(isBookmarked(career.id));
      setPreferredPath(getUserIntent().preferredLearningPath);
    }
  }, [career]);

  const handleBookmarkToggle = () => {
    if (!career) return;
    const isAdded = toggleBookmark(career.id);
    setBookmarked(isAdded);
  };

  const handlePathChange = (path: string) => {
    setPreferredLearningPath(path);
    setPreferredPath(path);
  };

  if (!career) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center p-8 space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-indigo-400">
          <Compass className="h-8 w-8" />
        </div>
        <div className="space-y-2">
          <h2 className="heading-font text-2xl font-bold text-white">Roadmap Not Found</h2>
          <p className="text-xs text-slate-400 max-w-sm">
            We haven&apos;t mapped this career pathway yet. Submit a suggestion below and our team will get on it!
          </p>
        </div>
        <Link 
          href="/" 
          className="px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-xs font-semibold text-white transition-colors"
        >
          Go Back Home
        </Link>
      </div>
    );
  }

  // Get brand colors
  const getBrandColors = () => {
    switch (career.id) {
      case 'data-analyst':
        return {
          glow: 'bg-teal-500/5',
          text: 'text-teal-400',
          border: 'border-teal-500/20',
          accent: 'teal'
        };
      case 'ai-engineer':
        return {
          glow: 'bg-indigo-500/5',
          text: 'text-indigo-400',
          border: 'border-indigo-500/20',
          accent: 'indigo'
        };
      case 'cybersecurity-analyst':
        return {
          glow: 'bg-indigo-500/5',
          text: 'text-indigo-400',
          border: 'border-indigo-500/20',
          accent: 'indigo'
        };
      default:
        return {
          glow: 'bg-indigo-500/5',
          text: 'text-indigo-400',
          border: 'border-indigo-500/20',
          accent: 'indigo'
        };
    }
  };

  const colors = getBrandColors();

  return (
    <div className="relative pb-16">
      {/* Background soft glow */}
      <div className={`absolute top-0 right-1/4 w-96 h-96 ${colors.glow} rounded-full filter blur-3xl pointer-events-none`} />
      
      {/* Page Header */}
      <section className="relative pt-8 pb-6 sm:pt-12 border-b border-white/5 bg-slate-950/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
          
          {/* Top Row: Back link & Bookmark Action */}
          <div className="flex items-center justify-between">
            <Link 
              href="/" 
              className="inline-flex items-center space-x-2 text-xs font-semibold text-slate-400 hover:text-white transition-colors group"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to search</span>
            </Link>

            <button
              onClick={handleBookmarkToggle}
              className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-xl border text-xs font-semibold transition-all cursor-pointer ${
                bookmarked
                  ? 'bg-indigo-600/10 border-indigo-500 text-indigo-400 shadow-md shadow-indigo-500/5'
                  : 'bg-white/2 border-white/5 text-slate-400 hover:text-slate-200'
              }`}
            >
              <Bookmark className={`h-3.5 w-3.5 ${bookmarked ? 'fill-indigo-400' : ''}`} />
              <span>{bookmarked ? 'Saved to Dashboard' : 'Bookmark Path'}</span>
            </button>
          </div>

          {/* Title & Overview Dashboard */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            <div className="lg:col-span-7 space-y-3">
              <span className={`text-[9px] font-bold uppercase tracking-wider ${colors.text} bg-white/5 border ${colors.border} px-2.5 py-0.5 rounded-full`}>
                Curated Career Guide
              </span>
              <h1 className="heading-font text-2xl sm:text-3xl font-extrabold tracking-tight text-white mt-1">
                {career.title} Roadmap
              </h1>
              <p className="text-xs sm:text-sm text-slate-300 italic font-medium">
                &quot;{career.tagline}&quot;
              </p>
              <p className="text-xs text-slate-400 leading-relaxed max-w-2xl">
                {career.overview}
              </p>
            </div>

            {/* Quick Metrics Bar */}
            <div className="lg:col-span-5 rounded-2xl glass-panel p-4 border-white/5 space-y-3 shadow-inner">
              <div className="grid grid-cols-2 gap-3 text-[10px]">
                <div className="flex items-center space-x-2">
                  <div className="p-1.5 rounded-lg bg-white/5 text-slate-500">
                    <DollarSign className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="text-[8px] uppercase tracking-wider text-slate-500 block font-semibold">Avg Salary</span>
                    <span className="font-bold text-white text-xs">{career.metrics.avgSalary}</span>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <div className="p-1.5 rounded-lg bg-white/5 text-slate-500">
                    <TrendingUp className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="text-[8px] uppercase tracking-wider text-slate-500 block font-semibold">Job Growth</span>
                    <span className="font-bold text-white text-xs truncate block max-w-[120px]" title={career.metrics.jobGrowth}>
                      {career.metrics.jobGrowth.split(' ')[0]}
                    </span>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <div className="p-1.5 rounded-lg bg-white/5 text-slate-500">
                    <Clock className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="text-[8px] uppercase tracking-wider text-slate-500 block font-semibold">Study Time</span>
                    <span className="font-bold text-white text-xs">{career.metrics.duration}</span>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <div className="p-1.5 rounded-lg bg-white/5 text-slate-500">
                    <Brain className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="text-[8px] uppercase tracking-wider text-slate-500 block font-semibold">Difficulty</span>
                    <span className="font-bold text-white text-xs">{career.metrics.difficulty}</span>
                  </div>
                </div>
              </div>

              {/* Weekly Preference Select */}
              <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[10px]">
                <span className="text-slate-500 font-semibold">Learning Preference:</span>
                <div className="flex gap-1">
                  {['self-paced', 'hands-on'].map((path) => (
                    <button
                      key={path}
                      onClick={() => handlePathChange(path)}
                      className={`px-2 py-0.5 rounded text-[9px] font-bold border transition-colors cursor-pointer capitalize ${
                        preferredPath === path
                          ? 'bg-indigo-600/10 border-indigo-500 text-indigo-400'
                          : 'bg-white/2 border-white/5 text-slate-400 hover:text-slate-300'
                      }`}
                    >
                      {path}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Tabs Selector Navigation Bar */}
      <div className="sticky top-16 z-30 bg-slate-950/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-8 overflow-x-auto py-3.5 -mb-px justify-start lg:justify-center scrollbar-none">
            {/* Roadmap */}
            <button
              onClick={() => setActiveTab('roadmap')}
              className={`flex items-center space-x-1.5 pb-1 text-xs font-semibold uppercase tracking-wider border-b-2 transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'roadmap'
                  ? 'border-indigo-500 text-indigo-400'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              <Map className="h-4 w-4" />
              <span>Learning Roadmap</span>
            </button>

            {/* Why Choose */}
            <button
              onClick={() => setActiveTab('whychoose')}
              className={`flex items-center space-x-1.5 pb-1 text-xs font-semibold uppercase tracking-wider border-b-2 transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'whychoose'
                  ? 'border-indigo-500 text-indigo-400'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              <Smile className="h-4 w-4" />
              <span>Why Choose This Career?</span>
            </button>

            {/* Required Skills */}
            <button
              onClick={() => setActiveTab('skills')}
              className={`flex items-center space-x-1.5 pb-1 text-xs font-semibold uppercase tracking-wider border-b-2 transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'skills'
                  ? 'border-indigo-500 text-indigo-400'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              <Target className="h-4 w-4" />
              <span>Required Skills</span>
            </button>

            {/* Verified Courses */}
            <button
              onClick={() => setActiveTab('certifications')}
              className={`flex items-center space-x-1.5 pb-1 text-xs font-semibold uppercase tracking-wider border-b-2 transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'certifications'
                  ? 'border-indigo-500 text-indigo-400'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              <Award className="h-4 w-4" />
              <span>Verified Courses</span>
            </button>

            {/* Projects & Portfolio */}
            <button
              onClick={() => setActiveTab('projects')}
              className={`flex items-center space-x-1.5 pb-1 text-xs font-semibold uppercase tracking-wider border-b-2 transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'projects'
                  ? 'border-indigo-500 text-indigo-400'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              <Code className="h-4 w-4" />
              <span>Projects & Portfolio</span>
            </button>

            {/* Next Steps */}
            <button
              onClick={() => setActiveTab('nextsteps')}
              className={`flex items-center space-x-1.5 pb-1 text-xs font-semibold uppercase tracking-wider border-b-2 transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'nextsteps'
                  ? 'border-indigo-500 text-indigo-400'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              <ArrowUpRight className="h-4 w-4" />
              <span>Next Steps</span>
            </button>
          </nav>
        </div>
      </div>

      {/* Dynamic Tab Body Content */}
      <section className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ROADMAP TAB */}
        {activeTab === 'roadmap' && (
          <div className="space-y-8">
            
            {/* Top Grid: Mentor advice & Beginner Indicators */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              
              {/* Beginner Confidence Indicators */}
              <div className="lg:col-span-5 p-5 rounded-2xl bg-white/2 border border-white/5 space-y-4">
                <h3 className="heading-font text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center space-x-1.5">
                  <ShieldCheck className="h-4.5 w-4.5 text-teal-400" />
                  <span>Beginner Confidence Dashboard</span>
                </h3>
                
                {/* Confidence Bar */}
                <div className="space-y-1">
                  <div className="flex justify-between text-[10px] font-semibold text-slate-400">
                    <span>Beginner-Friendly Score</span>
                    <span className="text-teal-400 font-bold">{career.confidenceMetrics.beginnerScore}/100</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-white/5 overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-teal-400 to-indigo-500" 
                      style={{ width: `${career.confidenceMetrics.beginnerScore}%` }}
                    />
                  </div>
                </div>

                <div className="space-y-3 pt-2 text-xs">
                  <div>
                    <span className="text-slate-500 block font-semibold text-[9px] uppercase">Average Learning Curve</span>
                    <p className="text-slate-300 mt-0.5 leading-relaxed">{career.confidenceMetrics.learningCurveDescription}</p>
                  </div>
                  <div>
                    <span className="text-slate-500 block font-semibold text-[9px] uppercase">Recommended Prior Knowledge</span>
                    <p className="text-slate-300 mt-0.5 font-bold">{career.confidenceMetrics.recommendedPriorKnowledge}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-2 pt-1">
                    <div>
                      <span className="text-slate-500 block font-semibold text-[9px] uppercase">Weekly Commitment</span>
                      <p className="text-slate-300 mt-0.5 font-bold">{career.confidenceMetrics.suggestedWeeklyCommitment}</p>
                    </div>
                    <div>
                      <span className="text-slate-500 block font-semibold text-[9px] uppercase">Time to Job-Ready</span>
                      <p className="text-slate-300 mt-0.5 font-bold">{career.confidenceMetrics.timeToJobReady}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mentor advice card */}
              <div className="lg:col-span-7 p-5 rounded-2xl bg-white/2 border border-white/5 space-y-4">
                <h3 className="heading-font text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center space-x-1.5">
                  <UserCheck className="h-4.5 w-4.5 text-indigo-400" />
                  <span>Mentor Career Guide</span>
                </h3>

                <div className="space-y-3 text-xs leading-relaxed">
                  <div>
                    <span className="text-slate-500 block font-semibold text-[9px] uppercase">Suggested Starting Point</span>
                    <p className="text-slate-300 font-bold mt-0.5">{career.guidance.startingPoint}</p>
                  </div>
                  
                  <div>
                    <span className="text-slate-500 block font-semibold text-[9px] uppercase">Recommended Order</span>
                    <div className="flex flex-wrap gap-1.5 mt-1">
                      {career.guidance.learningOrder.map((step, idx) => (
                        <span key={idx} className="px-2 py-0.5 rounded bg-white/5 border border-white/5 text-[10px] text-slate-300">
                          {step}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <span className="text-slate-500 block font-semibold text-[9px] uppercase">Beginner Advice</span>
                    <p className="text-slate-400 mt-0.5">{career.guidance.beginnerAdvice}</p>
                  </div>
                </div>
              </div>

            </div>

            {/* Common mistakes bar */}
            <div className="p-4 rounded-xl bg-rose-500/5 border border-rose-500/10 flex items-start space-x-3 text-xs">
              <AlertTriangle className="h-5 w-5 text-rose-400 flex-shrink-0 mt-0.5" />
              <div className="space-y-1.5">
                <span className="text-rose-400 font-bold uppercase text-[9px] tracking-wider block">Common Mistakes to Avoid</span>
                <ul className="list-disc list-inside space-y-1 text-slate-300">
                  {career.guidance.commonMistakes.map((mistake, idx) => (
                    <li key={idx} className="leading-relaxed">{mistake}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Main timeline */}
            <div className="space-y-4 pt-4 border-t border-white/5">
              <div className="max-w-xl">
                <h3 className="heading-font text-lg font-bold text-white">Chronological Pathway</h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  Follow these step-by-step phases. Select a phase on the left to see tasks and milestones.
                </p>
              </div>
              <RoadmapVisualizer steps={career.roadmap} />
            </div>

            {/* Quote banner */}
            <div className="p-5 rounded-2xl bg-indigo-600/5 border border-indigo-500/10 text-center text-xs italic text-indigo-300 max-w-2xl mx-auto">
              &quot;{career.guidance.motivationalQuote}&quot;
            </div>

          </div>
        )}

        {/* WHY CHOOSE THIS CAREER TAB */}
        {activeTab === 'whychoose' && (
          <div className="space-y-8 max-w-4xl mx-auto">
            <div className="text-center space-y-2 mb-6">
              <h2 className="heading-font text-xl sm:text-2xl font-bold text-white">Is {career.title} Right For You?</h2>
              <p className="text-xs text-slate-400">
                Aligning your interest and lifestyle expectations is crucial before committing to study.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Who enjoys this */}
              <div className="p-5 rounded-2xl bg-white/2 border border-white/5 space-y-3.5">
                <h3 className="heading-font text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center space-x-2 border-b border-white/5 pb-2">
                  <Heart className="h-4 w-4 text-indigo-400" />
                  <span>Who Enjoys This Field?</span>
                </h3>
                <ul className="space-y-2.5 text-xs text-slate-300 leading-relaxed">
                  {career.whyChooseThisCareer.whoEnjoysThis.map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-1.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Personality Fit */}
              <div className="p-5 rounded-2xl bg-white/2 border border-white/5 space-y-3.5">
                <h3 className="heading-font text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center space-x-2 border-b border-white/5 pb-2">
                  <UserCheck className="h-4 w-4 text-teal-400" />
                  <span>Personality & Work Style Fit</span>
                </h3>
                <div className="flex flex-wrap gap-2 pt-1">
                  {career.whyChooseThisCareer.personalityFit.map((trait, idx) => (
                    <span key={idx} className="px-3 py-1 rounded-xl bg-white/5 border border-white/5 text-xs text-slate-200">
                      {trait}
                    </span>
                  ))}
                </div>
                <p className="text-xs text-slate-400 leading-relaxed pt-2">
                  These traits are typical of professionals who thrive in this environment.
                </p>
              </div>

              {/* Industry outlook */}
              <div className="p-5 rounded-2xl bg-white/2 border border-white/5 space-y-2">
                <span className="text-slate-500 font-semibold text-[8px] uppercase tracking-wider block">Industry Outlook</span>
                <h4 className="text-xs font-bold text-white uppercase">Growth & Market Demand</h4>
                <p className="text-xs text-slate-300 leading-relaxed mt-1">
                  {career.whyChooseThisCareer.industryOutlook}
                </p>
              </div>

              {/* Remote work */}
              <div className="p-5 rounded-2xl bg-white/2 border border-white/5 space-y-2">
                <span className="text-slate-500 font-semibold text-[8px] uppercase tracking-wider block">Work Flexibility</span>
                <h4 className="text-xs font-bold text-white uppercase">Remote Work Opportunities</h4>
                <p className="text-xs text-slate-300 leading-relaxed mt-1">
                  {career.whyChooseThisCareer.remoteOpportunities}
                </p>
              </div>
            </div>

            {/* Motivation points */}
            <div className="p-6 rounded-2xl bg-white/2 border border-white/5 space-y-4">
              <h3 className="heading-font text-xs font-bold uppercase tracking-wider text-slate-400 border-b border-white/5 pb-2">
                Common Motivations for Choosing This Track
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {career.whyChooseThisCareer.commonMotivations.map((mot, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-slate-900/60 border border-white/5 text-xs text-slate-300 leading-relaxed">
                    {mot}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* SKILLS TAB */}
        {activeTab === 'skills' && (
          <div className="space-y-4">
            <div className="max-w-xl mb-6">
              <h2 className="heading-font text-xl font-bold text-white">Required Skills</h2>
              <p className="text-xs text-slate-400 mt-0.5">
                Competencies grouped by category. Click a skill card to view detailed definitions.
              </p>
            </div>
            <SkillProgress skills={career.skills} />
          </div>
        )}

        {/* VERIFIED COURSES TAB */}
        {activeTab === 'certifications' && (
          <div className="space-y-4">
            <div className="max-w-xl mb-6">
              <h2 className="heading-font text-xl font-bold text-white">Verified Certifications</h2>
              <p className="text-xs text-slate-400 mt-0.5">
                We indexed industry-recognized credentials. Filter by cost, platform, or difficulty.
              </p>
            </div>
            <CertificationSection certifications={career.certifications} careerId={career.id} />
          </div>
        )}

        {/* PROJECTS TAB */}
        {activeTab === 'projects' && (
          <div className="space-y-10">
            <div className="space-y-4">
              <div className="max-w-xl">
                <h2 className="heading-font text-xl font-bold text-white">Portfolio-Worthy Projects</h2>
                <p className="text-xs text-slate-400 mt-0.5">
                  Click a project to expand for step-by-step instructions.
                </p>
              </div>
              <ProjectSection projects={career.projects} />
            </div>

            <div className="pt-6 border-t border-white/5">
              <PortfolioGuidance guide={career.portfolioGuidance} />
            </div>
          </div>
        )}

        {/* NEXT STEPS TAB */}
        {activeTab === 'nextsteps' && (
          <div className="space-y-8 max-w-4xl mx-auto">
            <div className="text-center space-y-2 mb-6">
              <h2 className="heading-font text-xl font-bold text-white">Landing Your First Role</h2>
              <p className="text-xs text-slate-400">
                You have the roadmap, certifications, and projects. Here is how you execute the final job hunt.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Job Search */}
              <div className="p-5 rounded-2xl bg-white/2 border border-white/5 space-y-3">
                <h3 className="heading-font text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center space-x-2">
                  <Compass className="h-4 w-4 text-indigo-400" />
                  <span>Job Search Advice</span>
                </h3>
                <ul className="space-y-2 text-xs text-slate-300">
                  {career.nextSteps.jobSearchTips.map((tip, i) => (
                    <li key={i} className="flex items-start space-x-2">
                      <span className="w-1 h-1 rounded-full bg-indigo-400 mt-1.5 flex-shrink-0" />
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Networking */}
              <div className="p-5 rounded-2xl bg-white/2 border border-white/5 space-y-3">
                <h3 className="heading-font text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center space-x-2">
                  <ArrowUpRight className="h-4 w-4 text-teal-400" />
                  <span>Networking Advice</span>
                </h3>
                <ul className="space-y-2 text-xs text-slate-300">
                  {career.nextSteps.networkingTips.map((tip, i) => (
                    <li key={i} className="flex items-start space-x-2">
                      <span className="w-1 h-1 rounded-full bg-teal-400 mt-1.5 flex-shrink-0" />
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Interview Prep */}
              <div className="p-5 rounded-2xl bg-white/2 border border-white/5 space-y-3">
                <h3 className="heading-font text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center space-x-2">
                  <CheckCircle2 className="h-4 w-4 text-teal-400" />
                  <span>Interview Prep</span>
                </h3>
                <ul className="space-y-2 text-xs text-slate-300">
                  {career.nextSteps.interviewPrep.map((tip, i) => (
                    <li key={i} className="flex items-start space-x-2">
                      <span className="w-1 h-1 rounded-full bg-teal-400 mt-1.5 flex-shrink-0" />
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Dynamic Feedback specifically for this career track */}
      <div className="border-t border-white/5 mt-8">
        <FeedbackCollection careerTitle={career.title} />
      </div>
    </div>
  );
}
