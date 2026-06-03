'use client';

import React, { useState, useMemo } from 'react';
import { Certification } from '../types';
import { ExternalLink, Clock, DollarSign, Award, CheckCircle, Filter, RotateCcw } from 'lucide-react';
import { trackCertClick } from '@/utils/userStore';

interface CertificationSectionProps {
  certifications: Certification[];
  careerId: string;
}

export default function CertificationSection({ certifications, careerId }: CertificationSectionProps) {
  // Filter states
  const [freeOnly, setFreeOnly] = useState(false);
  const [certIncluded, setCertIncluded] = useState(false);
  const [beginnerFriendly, setBeginnerFriendly] = useState(false);
  const [selectedProvider, setSelectedProvider] = useState('All');
  const [selectedDuration, setSelectedDuration] = useState('All');

  // Track click handler
  const handleCertClick = (certTitle: string) => {
    trackCertClick(careerId, certTitle);
  };

  // Get all unique providers for the dropdown
  const providers = useMemo(() => {
    const list = certifications.map(c => c.provider.split(' via ')[0].split(' ')[0]); // simplified names
    return ['All', ...Array.from(new Set(list))];
  }, [certifications]);

  // Filtering Logic
  const filteredCerts = useMemo(() => {
    return certifications.filter(cert => {
      // 1. Free only filter
      if (freeOnly && !cert.isFree) return false;
      
      // 2. Certificate included filter
      if (certIncluded && !cert.hasCertificate) return false;
      
      // 3. Beginner friendly filter
      if (beginnerFriendly && cert.difficulty !== 'Beginner') return false;
      
      // 4. Provider filter
      if (selectedProvider !== 'All') {
        const cleanProvider = cert.provider.toLowerCase();
        const cleanQuery = selectedProvider.toLowerCase();
        if (!cleanProvider.includes(cleanQuery)) return false;
      }
      
      // 5. Duration filter
      if (selectedDuration !== 'All') {
        const dur = cert.duration.toLowerCase();
        const isShort = dur.includes('1-2') || dur.includes('1 ') || dur.includes('2 ') || dur.includes('weeks') || dur.includes('week');
        if (selectedDuration === 'short' && !isShort) return false;
        if (selectedDuration === 'long' && isShort) return false;
      }
      
      return true;
    });
  }, [certifications, freeOnly, certIncluded, beginnerFriendly, selectedProvider, selectedDuration]);

  const resetFilters = () => {
    setFreeOnly(false);
    setCertIncluded(false);
    setBeginnerFriendly(false);
    setSelectedProvider('All');
    setSelectedDuration('All');
  };

  const getDifficultyBadge = (diff: string) => {
    switch (diff) {
      case 'Beginner':
        return 'bg-teal-500/10 text-teal-400 border-teal-500/20';
      case 'Intermediate':
        return 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20';
      case 'Advanced':
        return 'bg-rose-500/10 text-rose-400 border-rose-500/20';
      default:
        return 'bg-slate-500/10 text-slate-400 border-slate-500/20';
    }
  };

  return (
    <div className="space-y-6">
      {/* Filtering Control Bar */}
      <div className="p-4 rounded-2xl bg-white/2 border border-white/5 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/5 pb-3">
          <div className="flex items-center space-x-2 text-xs font-semibold text-slate-300">
            <Filter className="h-4 w-4 text-indigo-400" />
            <span>Filter Course Recommendations</span>
          </div>
          {(freeOnly || certIncluded || beginnerFriendly || selectedProvider !== 'All' || selectedDuration !== 'All') && (
            <button
              onClick={resetFilters}
              className="flex items-center space-x-1 text-[10px] text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              <RotateCcw className="h-3 w-3" />
              <span>Reset Filters</span>
            </button>
          )}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          {/* Checkbox pills */}
          <div className="flex flex-wrap gap-2.5">
            {/* Free only toggle */}
            <button
              type="button"
              onClick={() => setFreeOnly(!freeOnly)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                freeOnly 
                  ? 'bg-teal-600/20 border-teal-500 text-teal-300 shadow-md shadow-teal-500/5' 
                  : 'bg-white/2 border-white/5 text-slate-400 hover:text-slate-200'
              }`}
            >
              Free Only
            </button>

            {/* Certificate toggle */}
            <button
              type="button"
              onClick={() => setCertIncluded(!certIncluded)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                certIncluded 
                  ? 'bg-indigo-600/20 border-indigo-500 text-indigo-300 shadow-md shadow-indigo-500/5' 
                  : 'bg-white/2 border-white/5 text-slate-400 hover:text-slate-200'
              }`}
            >
              Certificate Included
            </button>

            {/* Beginner friendly toggle */}
            <button
              type="button"
              onClick={() => setBeginnerFriendly(!beginnerFriendly)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                beginnerFriendly 
                  ? 'bg-indigo-600/20 border-indigo-500 text-indigo-300 shadow-md shadow-indigo-500/5' 
                  : 'bg-white/2 border-white/5 text-slate-400 hover:text-slate-200'
              }`}
            >
              Beginner Friendly
            </button>
          </div>

          {/* Selector dropdowns */}
          <div className="flex flex-wrap gap-3 w-full sm:w-auto">
            {/* Provider */}
            <div className="flex flex-col space-y-1 w-full sm:w-36">
              <span className="text-[9px] uppercase tracking-wider font-bold text-slate-500">Provider</span>
              <select
                value={selectedProvider}
                onChange={(e) => setSelectedProvider(e.target.value)}
                className="w-full px-2.5 py-1.5 rounded-xl bg-slate-900 border border-white/5 text-[11px] text-slate-300 focus:outline-none focus:ring-1 focus:ring-indigo-500"
              >
                {providers.map((prov, i) => (
                  <option key={i} value={prov}>{prov === 'All' ? 'All Platforms' : prov}</option>
                ))}
              </select>
            </div>

            {/* Duration */}
            <div className="flex flex-col space-y-1 w-full sm:w-36">
              <span className="text-[9px] uppercase tracking-wider font-bold text-slate-500">Duration</span>
              <select
                value={selectedDuration}
                onChange={(e) => setSelectedDuration(e.target.value)}
                className="w-full px-2.5 py-1.5 rounded-xl bg-slate-900 border border-white/5 text-[11px] text-slate-300 focus:outline-none focus:ring-1 focus:ring-indigo-500"
              >
                <option value="All">All Durations</option>
                <option value="short">Short (&le; 2 Months)</option>
                <option value="long">Long (&gt; 2 Months)</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Certification cards container */}
      {filteredCerts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredCerts.map((cert, index) => (
            <div 
              key={index} 
              className="rounded-2xl glass-panel p-6 sm:p-7 border-white/5 flex flex-col justify-between group hover:border-indigo-500/20 transition-all duration-200"
            >
              <div className="space-y-4">
                {/* Provider and Badges */}
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-400 bg-indigo-500/5 px-2.5 py-0.5 rounded-full border border-indigo-500/10">
                    {cert.provider}
                  </span>
                  <div className="flex items-center space-x-1.5">
                    {cert.isFree ? (
                      <span className="px-2 py-0.5 rounded bg-teal-500/10 text-teal-400 text-[9px] font-bold border border-teal-500/20">Free Course</span>
                    ) : (
                      <span className="px-2 py-0.5 rounded bg-slate-500/10 text-slate-400 text-[9px] font-bold border border-slate-500/20">Paid Option</span>
                    )}
                    {cert.hasCertificate && (
                      <span className="px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-400 text-[9px] font-bold border border-indigo-500/20">Cert Included</span>
                    )}
                  </div>
                </div>

                {/* Title */}
                <h3 className="heading-font text-base sm:text-md font-bold text-white group-hover:text-indigo-400 transition-colors">
                  {cert.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-slate-400 leading-relaxed">
                  {cert.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-2 py-2.5 border-y border-white/5 text-[10px]">
                  <div className="flex items-center space-x-1.5">
                    <Clock className="h-3.5 w-3.5 text-slate-500 flex-shrink-0" />
                    <div>
                      <span className="text-slate-500 block font-semibold text-[8px] uppercase">Duration</span>
                      <span className="font-bold text-slate-300">{cert.duration}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1.5">
                    <DollarSign className="h-3.5 w-3.5 text-slate-500 flex-shrink-0" />
                    <div>
                      <span className="text-slate-500 block font-semibold text-[8px] uppercase">Cost</span>
                      <span className="font-bold text-slate-300">{cert.cost}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1.5">
                    <Award className="h-3.5 w-3.5 text-slate-500 flex-shrink-0" />
                    <div>
                      <span className="text-slate-500 block font-semibold text-[8px] uppercase">Difficulty</span>
                      <span className={`font-bold ${cert.difficulty === 'Beginner' ? 'text-teal-400' : cert.difficulty === 'Intermediate' ? 'text-indigo-400' : 'text-rose-400'}`}>{cert.difficulty}</span>
                    </div>
                  </div>
                </div>

                {/* Why take it */}
                <div className="space-y-1">
                  <span className="text-[8px] uppercase tracking-wider text-slate-500 font-bold block">Why We Recommend It</span>
                  <div className="flex items-start space-x-2 text-[11px] text-slate-300 bg-slate-900/40 p-3 rounded-xl border border-white/5">
                    <CheckCircle className="h-3.5 w-3.5 text-teal-400 flex-shrink-0 mt-0.5" />
                    <p className="leading-relaxed italic text-slate-300">
                      {cert.whyTakeIt}
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 mt-5 border-t border-white/5">
                <a 
                  href={cert.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={() => handleCertClick(cert.title)}
                  className="w-full flex items-center justify-center space-x-2 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-indigo-600 text-xs font-semibold text-white border border-white/10 hover:border-transparent transition-all duration-200"
                >
                  <span>Explore Course Platform</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="p-8 text-center bg-white/2 border border-white/5 rounded-2xl max-w-md mx-auto space-y-3">
          <Award className="h-8 w-8 text-slate-500 mx-auto" />
          <div>
            <h4 className="text-xs font-bold text-white uppercase">No Courses Match Filters</h4>
            <p className="text-[11px] text-slate-500 leading-relaxed mt-1">
              Try checking other options or resetting your search settings.
            </p>
          </div>
          <button
            onClick={resetFilters}
            className="px-3.5 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs font-semibold text-slate-300 hover:text-white transition-colors cursor-pointer"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
}
