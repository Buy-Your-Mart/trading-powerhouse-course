"use client";

import React from 'react';
import { CheckCircle2, Star, Zap, Users, PlayCircle } from 'lucide-react';

export default function Hero() {
  const learningPoints = [
    "Adapt trades to trends & volatility",
    "Avoid common trading mistakes",
    "Discover simple yet powerful strategies",
    "Understand Price Action using S&R",
    "Mark High Support & Resistance Zones",
    "Master Multiple Time Frame Analysis",
    "Perform Trend Analysis using S/R",
    "Risk-to-Reward Ratio in decision-making",
    "Decode powerful Candlestick Patterns",
    "Study major Chart Patterns",
    "Explore essential Technical Indicators",
    "Learn for Intraday & Swing Trading"
  ];

  return (
    <section className="relative bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 pt-10 md:pt-16 pb-12 md:pb-24 overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center mb-8 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full px-4 py-2 mb-6">
            <span className="flex items-center gap-1.5 text-emerald-400 text-xs font-bold uppercase tracking-wider">
              <PlayCircle className="w-4 h-4" />
              Live Masterclass
            </span>
            <span className="text-slate-400 text-xs">•</span>
            <span className="text-slate-300 text-xs font-medium">January 24, 2026</span>
          </div>
          
          <p className="text-slate-300 font-bold text-sm md:text-xl mb-4 md:mb-6 max-w-3xl mx-auto">
            Discover <span className="text-amber-400 font-black">winning trading strategies</span> from India's renowned stock market mentors, Leena & Ajay Pimple
          </p>
          
          <h1 className="text-white text-[32px] md:text-[72px] font-black leading-[1.05] mb-6 md:mb-10 tracking-tight max-w-4xl mx-auto">
            Start trading with <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">clarity</span> and <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-300">confidence</span>
          </h1>
          
          <p className="text-slate-400 text-base md:text-lg mb-8 max-w-2xl mx-auto">
            Without needing prior knowledge or large investments
          </p>
          
          <div className="flex flex-col items-center gap-4 md:gap-6">
            <a 
              href="#register" 
              className="group relative bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-black text-lg md:text-2xl px-8 md:px-14 py-4 md:py-6 rounded-full shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 transition-all hover:scale-105"
            >
              <span className="relative z-10">Secure Your Spot @ ₹299</span>
            </a>
            
            <div className="flex items-center gap-4 text-slate-400 font-bold text-[10px] md:text-xs uppercase tracking-widest">
              <div className="flex items-center gap-1.5">
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />)}
                </div>
                <span className="text-slate-300">4.9/5</span>
              </div>
              <span className="h-3 w-px bg-slate-600"></span>
              <div className="flex items-center gap-1.5">
                <Users className="w-4 h-4 text-emerald-400" />
                <span>15,000+ Students</span>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-[24px] md:rounded-[32px] p-6 md:p-12">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 md:mb-10">
              <div>
                <h2 className="text-2xl md:text-3xl font-black text-white mb-2">Webinar Outline</h2>
                <div className="text-sm font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-2">
                  <Zap className="w-4 h-4" />
                  What you'll learn
                </div>
              </div>
              <div className="bg-amber-500/10 border border-amber-500/30 px-4 py-2 rounded-full">
                <span className="text-xs font-black text-amber-400 uppercase tracking-wider">2026 Curriculum</span>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
              {learningPoints.map((point, i) => (
                <div key={i} className="flex items-start gap-3 group p-3 rounded-xl hover:bg-white/5 transition-colors">
                  <div className="mt-0.5 bg-emerald-500/20 rounded-full p-1">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" strokeWidth={3} />
                  </div>
                  <span className="text-[14px] md:text-[15px] font-medium text-slate-300 leading-snug">{point}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <span className="bg-emerald-500 text-white px-4 py-1.5 rounded-full text-sm font-black uppercase">Book Now</span>
                <span className="text-3xl md:text-4xl font-black text-white">₹299</span>
                <span className="text-slate-500 line-through text-lg">₹1999</span>
              </div>
              <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                Limited Slots • January 24th Session
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
