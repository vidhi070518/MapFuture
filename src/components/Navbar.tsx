'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Compass, Menu, X, ChevronDown, Award, Briefcase, MessageSquare, GraduationCap } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const pathname = usePathname();

  // Scroll event listener to add blur background when page is scrolled
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on navigation
  useEffect(() => {
    setIsOpen(false);
    setDropdownOpen(false);
  }, [pathname]);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-slate-950/80 backdrop-blur-md border-b border-white/5 shadow-lg shadow-black/20' 
        : 'bg-transparent border-b border-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="p-2 rounded-xl bg-gradient-to-tr from-violet-600 to-cyan-500 text-white shadow-md shadow-violet-500/10 group-hover:shadow-cyan-500/20 transition-all duration-300">
                <Compass className="h-6 w-6 group-hover:rotate-45 transition-transform duration-500" />
              </div>
              <span className="heading-font text-xl font-bold tracking-tight text-white">
                Map<span className="gradient-text-purple-cyan font-extrabold">Future</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <Link 
              href="/" 
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                pathname === '/' ? 'text-violet-400' : 'text-slate-300 hover:text-white'
              }`}
            >
              Home
            </Link>

            {/* Careers Dropdown */}
            <div className="relative">
              <button
                onClick={toggleDropdown}
                onMouseEnter={() => setDropdownOpen(true)}
                className="flex items-center space-x-1 px-4 py-2 rounded-lg text-sm font-medium text-slate-300 hover:text-white transition-colors focus:outline-none"
              >
                <span>Careers</span>
                <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {dropdownOpen && (
                <div 
                  className="absolute left-0 mt-2 w-64 rounded-xl glass-panel p-2 shadow-2xl border-white/10 z-50"
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <Link
                    href="/careers/data-analyst"
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/5 transition-colors"
                  >
                    <div className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-400">
                      <Briefcase className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-white">Data Analyst</div>
                      <div className="text-[10px] text-slate-400">Guide decisions with data</div>
                    </div>
                  </Link>

                  <Link
                    href="/careers/ai-engineer"
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/5 transition-colors"
                  >
                    <div className="p-1.5 rounded-lg bg-violet-500/10 text-violet-400">
                      <GraduationCap className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-white">AI Engineer</div>
                      <div className="text-[10px] text-slate-400">Build intelligent agent systems</div>
                    </div>
                  </Link>

                  <Link
                    href="/careers/cybersecurity-analyst"
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/5 transition-colors"
                  >
                    <div className="p-1.5 rounded-lg bg-cyan-500/10 text-cyan-400">
                      <Award className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-white">Cybersecurity Analyst</div>
                      <div className="text-[10px] text-slate-400">Defend systems and networks</div>
                    </div>
                  </Link>
                </div>
              )}
            </div>

            <a 
              href="#feedback-section" 
              onClick={(e) => {
                // Smooth scroll to feedback
                if (pathname === '/') {
                  e.preventDefault();
                  document.getElementById('feedback-section')?.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="px-4 py-2 rounded-lg text-sm font-medium text-slate-300 hover:text-white transition-colors"
            >
              Feedback
            </a>
          </nav>

          {/* Action Button */}
          <div className="hidden md:flex items-center">
            <Link 
              href="/#search-section"
              className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-xs font-semibold text-white rounded-xl group bg-gradient-to-br from-purple-600 to-cyan-500 group-hover:from-purple-600 group-hover:to-cyan-500 hover:text-white focus:ring-2 focus:outline-none focus:ring-purple-800 transition-all duration-300 mt-2"
            >
              <span className="relative px-4 py-2 transition-all ease-in duration-75 bg-slate-950 rounded-lg group-hover:bg-opacity-0">
                Explore Roadmaps
              </span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/5 focus:outline-none transition-colors"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 pointer-events-none overflow-hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-950 border-b border-white/5">
          <Link
            href="/"
            className="block px-3 py-2 rounded-lg text-base font-medium text-slate-300 hover:text-white hover:bg-white/5"
          >
            Home
          </Link>
          
          <div className="px-3 py-2 text-xs font-semibold text-slate-500 uppercase tracking-wider">
            Careers
          </div>
          <Link
            href="/careers/data-analyst"
            className="flex items-center space-x-3 px-6 py-2 rounded-lg text-base font-medium text-slate-300 hover:text-white hover:bg-white/5"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>Data Analyst</span>
          </Link>
          <Link
            href="/careers/ai-engineer"
            className="flex items-center space-x-3 px-6 py-2 rounded-lg text-base font-medium text-slate-300 hover:text-white hover:bg-white/5"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
            <span>AI Engineer</span>
          </Link>
          <Link
            href="/careers/cybersecurity-analyst"
            className="flex items-center space-x-3 px-6 py-2 rounded-lg text-base font-medium text-slate-300 hover:text-white hover:bg-white/5"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span>Cybersecurity Analyst</span>
          </Link>

          <a
            href="#feedback-section"
            onClick={(e) => {
              setIsOpen(false);
              if (pathname === '/') {
                e.preventDefault();
                document.getElementById('feedback-section')?.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="block px-3 py-2 rounded-lg text-base font-medium text-slate-300 hover:text-white hover:bg-white/5"
          >
            Feedback
          </a>
          
          <div className="pt-4 pb-2 px-3">
            <Link
              href="/#search-section"
              className="block w-full text-center px-4 py-2.5 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 text-sm font-semibold text-white hover:shadow-lg hover:shadow-violet-500/20 transition-all duration-300"
            >
              Explore Roadmaps
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
