'use client';

import React, { useState } from 'react';
import { Star, MessageSquare, Send, CheckCircle2, AlertCircle } from 'lucide-react';

interface FeedbackCollectionProps {
  careerTitle?: string;
}

export default function FeedbackCollection({ careerTitle }: FeedbackCollectionProps) {
  const [rating, setRating] = useState<number>(0);
  const [hoverRating, setHoverRating] = useState<number>(0);
  const [suggestion, setSuggestion] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (rating === 0) {
      setError('Please select a star rating.');
      return;
    }
    
    setError('');
    // Mock API submit delay
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setRating(0);
    setSuggestion('');
    setEmail('');
    setIsSubmitted(false);
  };

  return (
    <section id="feedback-section" className="py-12 relative z-10">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="glass-panel p-6 sm:p-8 rounded-2xl border-white/5 relative overflow-hidden">
          {/* Accent lighting */}
          <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-cyan-500/5 rounded-full filter blur-3xl pointer-events-none" />
          <div className="absolute -top-20 -right-20 w-48 h-48 bg-violet-500/5 rounded-full filter blur-3xl pointer-events-none" />

          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="text-center space-y-2">
                <h3 className="heading-font text-lg sm:text-xl font-bold text-white flex items-center justify-center space-x-2">
                  <MessageSquare className="h-5 w-5 text-violet-400" />
                  <span>Help Us Improve MapFuture</span>
                </h3>
                <p className="text-xs text-slate-400 max-w-md mx-auto">
                  {careerTitle 
                    ? `How helpful is our ${careerTitle} roadmap? Your feedback directly guides our content updates.`
                    : "What career paths should we map out next? Let us know what features you want to see."
                  }
                </p>
              </div>

              {/* Star Rating Selection */}
              <div className="flex flex-col items-center space-y-2 pt-2">
                <span className="text-[10px] uppercase tracking-wider font-semibold text-slate-500">Rate this guide</span>
                <div className="flex items-center space-x-2">
                  {[1, 2, 3, 4, 5].map((star) => {
                    const isFilled = (hoverRating || rating) >= star;
                    return (
                      <button
                        key={star}
                        type="button"
                        onClick={() => {
                          setRating(star);
                          setError('');
                        }}
                        onMouseEnter={() => setHoverRating(star)}
                        onMouseLeave={() => setHoverRating(0)}
                        className="p-1 text-slate-600 hover:scale-125 focus:outline-none transition-transform"
                      >
                        <Star 
                          className={`h-7 w-7 transition-colors ${
                            isFilled 
                              ? 'text-amber-400 fill-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.6)]' 
                              : 'text-slate-700'
                          }`} 
                        />
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Suggestion Text Area */}
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-wider font-semibold text-slate-500 block">
                  {careerTitle 
                    ? "Suggestions for this roadmap (missing skills, outdated courses, etc.):" 
                    : "Which career path would you like to see next? (Or other feedback)"
                  }
                </label>
                <textarea
                  value={suggestion}
                  onChange={(e) => setSuggestion(e.target.value)}
                  placeholder={careerTitle 
                    ? "e.g., Please add a Python Pandas project, or update the PL-300 exam cost..."
                    : "e.g., Cloud Architect, Full Stack Developer, Product Manager..."
                  }
                  rows={4}
                  className="block w-full px-4 py-3 rounded-xl bg-white/2 border border-white/5 text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-violet-500 focus:border-violet-500 resize-none transition-all"
                  required
                />
              </div>

              {/* Email Input */}
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-wider font-semibold text-slate-500 block">
                  Email Address (Optional - if you want to be notified when we launch it)
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  className="block w-full px-4 py-3 rounded-xl bg-white/2 border border-white/5 text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-violet-500 focus:border-violet-500 transition-all"
                />
              </div>

              {error && (
                <div className="flex items-center space-x-2 text-xs text-rose-400 bg-rose-500/10 p-3 rounded-xl border border-rose-500/20">
                  <AlertCircle className="h-4 w-4" />
                  <span>{error}</span>
                </div>
              )}

              {/* Submit Button */}
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 hover:shadow-lg hover:shadow-violet-500/20 text-xs font-semibold text-white transition-all cursor-pointer"
                >
                  <span>Submit Feedback</span>
                  <Send className="h-3.5 w-3.5" />
                </button>
              </div>
            </form>
          ) : (
            <div className="text-center py-8 space-y-4">
              <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto animate-bounce">
                <CheckCircle2 className="h-8 w-8" />
              </div>
              <div className="space-y-1">
                <h3 className="heading-font text-lg font-bold text-white">Thank You for Your Feedback!</h3>
                <p className="text-xs text-slate-400 max-w-sm mx-auto leading-relaxed">
                  Your response has been captured. We review user submissions weekly to build the best career pathways for the community.
                </p>
              </div>
              <button
                type="button"
                onClick={handleReset}
                className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-white transition-colors"
              >
                Send Another Response
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
