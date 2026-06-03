'use client';

import React, { useState, useEffect } from 'react';
import SearchSystem from '@/components/SearchSystem';
import FeedbackCollection from '@/components/FeedbackCollection';
import { 
  Compass, Sparkles, Map, Target, Award, Code, CheckCircle, 
  ChevronRight, Users, Heart, Bookmark, Mail, Star 
} from 'lucide-react';
import Link from 'next/link';
import { careers } from '@/data/careers';
import { 
  getBookmarks, toggleBookmark, submitWaitlistEmail, 
  getWaitlistEmails, getUserInterests, toggleUserInterest 
} from '@/utils/userStore';

export default function Home() {
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>([]);
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [email, setEmail] = useState('');
  const [waitlistSuccess, setWaitlistSuccess] = useState(false);
  const [waitlistError, setWaitlistError] = useState('');

  // Hydrate bookmarks and interests from localStorage on mount
  useEffect(() => {
    setBookmarkedIds(getBookmarks());
    setSelectedInterests(getUserInterests());
  }, []);

  const handleToggleBookmark = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    toggleBookmark(id);
    setBookmarkedIds(getBookmarks());
  };

  const handleToggleInterest = (interest: string) => {
    toggleUserInterest(interest);
    setSelectedInterests(getUserInterests());
  };

  const handleWaitlistSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !email.includes('@')) {
      setWaitlistError('Please enter a valid email address.');
      return;
    }
    const success = submitWaitlistEmail(email.trim());
    if (success) {
      setWaitlistSuccess(true);
      setWaitlistError('');
      setEmail('');
    } else {
      setWaitlistError('This email is already on our waitlist!');
    }
  };

  // Find careers matching the bookmarks
  const savedCareers = careers.filter(c => bookmarkedIds.includes(c.id));

  // Defined interest tag list
  const interestTags = ['SQL', 'Python', 'Networking', 'LLMs', 'Machine Learning', 'Databases', 'Cloud Security', 'Data Viz'];

  return (
    <div className="relative overflow-hidden min-h-screen">
      {/* Decorative subtle background glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-600/5 rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute top-[30%] right-[-10%] w-[50%] h-[50%] bg-teal-500/5 rounded-full filter blur-[120px] pointer-events-none" />

      {/* Hero Section */}
      <section className="relative pt-16 pb-12 sm:pt-24 sm:pb-16 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              {/* Trust Signal Badge */}
              <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-300 shadow-sm">
                <Sparkles className="h-3.5 w-3.5 text-indigo-400" />
                <span className="font-semibold text-slate-300">Created for Students & Career Changers</span>
              </div>

              {/* Main Headline */}
              <h1 className="heading-font text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
                Map your path from student<br />
                to <span className="gradient-text-indigo-teal font-black">tech professional.</span>
              </h1>

              {/* Sub-headline */}
              <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Discover the exact learning roadmaps, verified course recommendations, and portfolio-worthy projects 
                to help you land your first job. Stop searching. Start progressing.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-2">
                <a 
                  href="#search-section"
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 shadow-md font-bold text-xs text-white transition-all text-center cursor-pointer"
                >
                  Explore Learning Paths
                </a>
                <a 
                  href="#waitlist-section"
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-slate-300 transition-colors text-center cursor-pointer"
                >
                  Join the Waitlist
                </a>
              </div>

              {/* Trust badges */}
              <div className="pt-5 border-t border-white/5 flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-2 text-[11px] text-slate-400 font-medium">
                <span className="flex items-center"><CheckCircle className="h-4 w-4 text-teal-500 mr-1.5" /> 3 Curated Career Paths</span>
                <span className="flex items-center"><CheckCircle className="h-4 w-4 text-teal-500 mr-1.5" /> 9 Verified Courses Indexed</span>
                <span className="flex items-center"><CheckCircle className="h-4 w-4 text-teal-500 mr-1.5" /> 6 Step-by-Step Projects</span>
              </div>
            </div>

            {/* Right Static Demonstration Panel */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="w-full max-w-sm rounded-2xl glass-panel p-5 border-white/5 shadow-xl relative overflow-hidden">
                <div className="flex items-center justify-between border-b border-white/5 pb-3 mb-5">
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Mentorship Roadmap Preview</span>
                  <span className="text-[9px] text-teal-400 bg-teal-500/10 px-2 py-0.5 rounded-full border border-teal-500/10 font-bold">100% Free</span>
                </div>

                <div className="space-y-4 ml-2">
                  <div className="relative pl-6 border-l-2 border-indigo-500/30">
                    <span className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-teal-500 border border-slate-950" />
                    <div className="text-[9px] uppercase tracking-wider text-slate-500 font-semibold">Step 1: SQL Foundations</div>
                    <div className="text-xs font-bold text-white mt-0.5">DVD Rental Cohort Queries</div>
                  </div>

                  <div className="relative pl-6 border-l-2 border-indigo-500/30">
                    <span className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-indigo-500 border border-slate-950" />
                    <div className="text-[9px] uppercase tracking-wider text-indigo-400 font-bold">Step 2: Practical Scripts</div>
                    <div className="text-xs font-bold text-white mt-0.5">Automated Auth Log Parser</div>
                  </div>

                  <div className="relative pl-6">
                    <span className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-slate-800 border border-slate-950" />
                    <div className="text-[9px] uppercase tracking-wider text-slate-500 font-semibold">Step 3: Document RAG Engine</div>
                    <div className="text-xs font-bold text-slate-400 mt-0.5">Parent-Child Node Splitting</div>
                  </div>
                </div>

                <div className="mt-5 p-3 rounded-xl bg-indigo-600/5 border border-indigo-500/10 text-center">
                  <span className="text-[10px] text-indigo-300 font-semibold">
                    Step-by-Step Curriculum Focus
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dynamic Saved Roadmaps & Interests Selector */}
      {(savedCareers.length > 0 || interestTags.length > 0) && (
        <section className="py-6 border-y border-white/5 bg-slate-950/20 z-10 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Bookmarked careers column */}
              <div className="lg:col-span-6 space-y-3">
                <h3 className="heading-font text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center space-x-1.5">
                  <Bookmark className="h-4 w-4 text-indigo-400" />
                  <span>Your Saved Roadmaps ({savedCareers.length})</span>
                </h3>
                {savedCareers.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {savedCareers.map(c => (
                      <Link 
                        key={c.id}
                        href={`/careers/${c.id}`}
                        className="p-3 rounded-xl bg-white/2 border border-white/5 hover:border-indigo-500/30 hover:bg-white/4 flex items-center justify-between transition-all group"
                      >
                        <div>
                          <span className="text-xs font-bold text-white group-hover:text-indigo-400 transition-colors">{c.title}</span>
                          <span className="text-[9px] text-slate-500 block">{c.metrics.duration} ({c.metrics.difficulty})</span>
                        </div>
                        <button
                          onClick={(e) => handleToggleBookmark(c.id, e)}
                          className="p-1 rounded bg-white/5 text-slate-400 hover:text-rose-400 transition-colors"
                          title="Remove bookmark"
                        >
                          <Bookmark className="h-3 w-3 fill-indigo-400 text-indigo-400" />
                        </button>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <p className="text-[11px] text-slate-500 italic">
                    Bookmarked careers will show up here for quick study resume.
                  </p>
                )}
              </div>

              {/* Interest selection tags */}
              <div className="lg:col-span-6 space-y-3">
                <h3 className="heading-font text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center space-x-1.5">
                  <Heart className="h-4 w-4 text-teal-400" />
                  <span>Personalize Your Interests</span>
                </h3>
                <p className="text-[11px] text-slate-500 leading-relaxed">
                  Select key concepts to log your profile interests. This tracks your preferences for future personalized recommendations.
                </p>
                <div className="flex flex-wrap gap-2 pt-1">
                  {interestTags.map((tag) => {
                    const isActive = selectedInterests.includes(tag);
                    return (
                      <button
                        key={tag}
                        onClick={() => handleToggleInterest(tag)}
                        className={`px-3 py-1 rounded-xl text-[10px] font-semibold border transition-all cursor-pointer ${
                          isActive 
                            ? 'bg-teal-600/10 border-teal-500 text-teal-300' 
                            : 'bg-white/2 border-white/5 text-slate-400 hover:text-slate-300'
                        }`}
                      >
                        {tag}
                      </button>
                    );
                  })}
                </div>
              </div>

            </div>
          </div>
        </section>
      )}

      {/* Main Career Search & Selection System */}
      <SearchSystem />

      {/* Trust & Motivator Cards */}
      <section className="py-16 border-t border-white/5 relative z-10 bg-slate-950/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3 mb-12">
            <span className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold text-teal-400">
              Clear Educational Philosophy
            </span>
            <h2 className="heading-font text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Curated to Reduce Overwhelm
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 max-w-lg mx-auto">
              MapFuture simplifies tech pathways by providing structured timelines, verified materials, and clear directions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Benefit 1 */}
            <div className="p-5 rounded-2xl bg-white/2 border border-white/5 space-y-3">
              <div className="p-2.5 rounded-xl bg-indigo-600/10 text-indigo-400 w-fit">
                <Map className="h-5 w-5" />
              </div>
              <h3 className="heading-font text-sm font-bold text-white">1. Progressive Timeline</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                We break complex curricula down into chronological, digestible phases. You always know exactly what to study today and what steps lie ahead tomorrow.
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="p-5 rounded-2xl bg-white/2 border border-white/5 space-y-3">
              <div className="p-2.5 rounded-xl bg-teal-500/10 text-teal-400 w-fit">
                <Award className="h-5 w-5" />
              </div>
              <h3 className="heading-font text-sm font-bold text-white">2. Low-Cost Course Indexes</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Skip predatory bootcamps. We research and verify online course certifications that carry authentic value in HR screens without costing a fortune.
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="p-5 rounded-2xl bg-white/2 border border-white/5 space-y-3">
              <div className="p-2.5 rounded-xl bg-teal-500/10 text-teal-400 w-fit">
                <Code className="h-5 w-5" />
              </div>
              <h3 className="heading-font text-sm font-bold text-white">3. Portfolio Case Studies</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Learn by doing. We design step-by-step documentation guides for practical tools (SQL aggregates, malware investigation logs, RAG APIs) to prove your skills.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Non-Aggressive, Trustworthy Email Capture Section */}
      <section id="waitlist-section" className="py-12 border-t border-white/5 relative z-10">
        <div className="max-w-xl mx-auto px-4 sm:px-6">
          <div className="glass-panel p-6 sm:p-8 rounded-2xl border-white/5 text-center space-y-5">
            <div className="w-10 h-10 rounded-full bg-indigo-500/10 text-indigo-400 flex items-center justify-center mx-auto">
              <Mail className="h-5 w-5" />
            </div>
            
            <div className="space-y-2">
              <h3 className="heading-font text-lg font-bold text-white">Join the MapFuture Community</h3>
              <p className="text-xs text-slate-400 leading-relaxed max-w-sm mx-auto">
                Get notified when we map new high-growth pathways (e.g. Cloud Solutions, Full-Stack developer). 
                No aggressive marketing, spam, or sales pitches. Just curriculum updates.
              </p>
            </div>

            {!waitlistSuccess ? (
              <form onSubmit={handleWaitlistSubmit} className="space-y-3">
                <div className="flex flex-col sm:flex-row gap-2 max-w-sm mx-auto">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setWaitlistError('');
                    }}
                    placeholder="Enter your email address"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-white/5 text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                    required
                  />
                  <button
                    type="submit"
                    className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-xs font-bold text-white shadow-md transition-colors cursor-pointer whitespace-nowrap"
                  >
                    Join Waitlist
                  </button>
                </div>
                {waitlistError && (
                  <p className="text-[10px] text-rose-400 text-center font-medium">{waitlistError}</p>
                )}
              </form>
            ) : (
              <div className="p-3 bg-teal-500/10 border border-teal-500/20 rounded-xl text-teal-300 text-xs font-semibold inline-flex items-center space-x-2">
                <CheckCircle className="h-4 w-4" />
                <span>You have been added to the waitlist successfully!</span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Homepage General Suggestions Widget */}
      <FeedbackCollection />
    </div>
  );
}
