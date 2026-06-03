'use client';

import React from 'react';
import Link from 'next/link';
import { Compass, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-slate-950/80 backdrop-blur-sm z-10">
      {/* Decorative top border grid line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 sm:gap-12">
          {/* Brand Col */}
          <div className="md:col-span-1 space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="p-1.5 rounded-lg bg-gradient-to-tr from-violet-600 to-cyan-500 text-white">
                <Compass className="h-5 w-5" />
              </div>
              <span className="heading-font text-lg font-bold text-white tracking-tight">
                Map<span className="gradient-text-purple-cyan font-extrabold">Future</span>
              </span>
            </Link>
            <p className="text-xs text-slate-400 leading-relaxed max-w-xs">
              Stop searching. Start progressing. Discover exact paths from where you are today to the career you want tomorrow.
            </p>
            <div className="flex space-x-3 pt-2">
              <a href="#" className="p-2 rounded-lg bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 transition-colors" aria-label="Twitter">
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg>
              </a>
              <a href="#" className="p-2 rounded-lg bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 transition-colors" aria-label="LinkedIn">
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
              </a>
              <a href="#" className="p-2 rounded-lg bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 transition-colors" aria-label="GitHub">
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
              </a>
            </div>
          </div>

          {/* Careers Col */}
          <div className="space-y-4">
            <h3 className="heading-font text-xs font-semibold text-white uppercase tracking-wider">
              Careers
            </h3>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <Link href="/careers/data-analyst" className="hover:text-violet-400 transition-colors">
                  Data Analyst
                </Link>
              </li>
              <li>
                <Link href="/careers/ai-engineer" className="hover:text-violet-400 transition-colors">
                  AI Engineer
                </Link>
              </li>
              <li>
                <Link href="/careers/cybersecurity-analyst" className="hover:text-violet-400 transition-colors">
                  Cybersecurity Analyst
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources Col */}
          <div className="space-y-4">
            <h3 className="heading-font text-xs font-semibold text-white uppercase tracking-wider">
              Resources
            </h3>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <Link href="/#search-section" className="hover:text-violet-400 transition-colors">
                  Roadmap Search
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-violet-400 transition-colors">
                  Verified Certifications
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-violet-400 transition-colors">
                  Portfolio Projects
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-violet-400 transition-colors">
                  Next Steps Guide
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Col */}
          <div className="space-y-4">
            <h3 className="heading-font text-xs font-semibold text-white uppercase tracking-wider">
              Stay Updated
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Get notified when we release new career roadmaps and verified courses.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-3.5 py-2 text-xs rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-violet-500 focus:border-violet-500"
              />
              <button
                type="submit"
                className="px-3.5 py-2 text-xs font-semibold rounded-xl bg-violet-600 hover:bg-violet-500 text-white shadow-lg shadow-violet-600/10 transition-colors"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] text-slate-500">
          <p>© {new Date().getFullYear()} MapFuture. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms of Service</a>
            <a href="#" className="hover:underline font-semibold text-slate-400">MVP Release v1.0</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
