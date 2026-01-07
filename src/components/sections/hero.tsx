"use client";

import React from 'react';
import { CheckCircle2, Star, ArrowRight, Zap, TrendingUp, Users } from 'lucide-react';

export default function Hero() {
  const learningPoints = [
    "Adapt trades to trends & volatility",
    "Avoid common beginner mistakes",
    "Price Action (Support & Resistance)",
    "Mark High S&R Zones",
    "Multiple Time Frame Analysis",
    "Trend Analysis using S/R",
    "Risk-to-Reward Ratio",
    "Candlestick Patterns & Meanings",
    "Master Major Chart Patterns",
    "Essential Technical Indicators",
    "Build a Profitable Portfolio",
    "Simple yet powerful strategies"
  ];

  return (
    <section className="relative bg-brand-navy pt-6 md:pt-14 pb-8 md:pb-16 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '20px 20px' }}></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full bg-brand-gold/5 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-6 md:mb-12">
          <div className="inline-flex items-center gap-2 bg-brand-gold/10 border border-brand-gold/20 text-brand-gold px-3 py-1 rounded-full text-[10px] md:text-xs font-black uppercase tracking-widest mb-3 md:mb-5">
            <Zap className="w-3.5 h-3.5 fill-brand-gold" />
            LIVE 2-Hour Virtual Masterclass
          </div>
          
          <h1 className="text-white text-[32px] md:text-[72px] font-black leading-[1] mb-3 md:mb-5 tracking-tight uppercase">
            Stock Market <br className="hidden md:block" />
            <span className="text-brand-gold">Mastery 2026</span>
          </h1>
          
          <p className="text-[13px] md:text-xl text-white/80 font-medium mb-5 md:mb-8 leading-relaxed max-w-2xl mx-auto">
            Master professional strategies from India’s leading mentors, <span className="text-brand-gold font-bold">Leena & Ajay Pimple</span>. Start trading with institutional clarity.
          </p>

          <div className="flex flex-col items-center gap-3 md:gap-5">
            <a 
              href="#register" 
              className="w-full sm:w-auto bg-brand-gold text-brand-navy px-10 py-4 md:px-14 md:py-6 rounded-xl font-black text-base md:text-2xl shadow-gold transition-all hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2.5 uppercase"
            >
              Secure Your Spot Now
              <ArrowRight className="w-5 h-5 md:w-6 md:h-6 stroke-[3]" />
            </a>
            
            <div className="flex items-center gap-3 md:gap-4 text-white/50 font-black text-[9px] md:text-[11px] uppercase tracking-widest">
              <div className="flex items-center gap-1.5">
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-2.5 h-2.5 md:w-3 md:h-3 fill-brand-gold text-brand-gold" />)}
                </div>
                <span className="text-white/80">4.9/5 RATING</span>
              </div>
              <span className="h-3 w-px bg-white/20"></span>
              <div className="flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5 text-brand-gold" />
                <span className="text-white/80">15,000+ STUDENTS</span>
              </div>
            </div>
          </div>
        </div>

        {/* Compact Blueprint Card */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-white/[0.02] backdrop-blur-xl rounded-2xl p-4 md:p-10 border border-white/10 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-brand-gold/50"></div>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-4 md:mb-8 pb-3 md:pb-6 border-b border-white/5">
              <div>
                <div className="text-[9px] md:text-[10px] font-black text-brand-gold uppercase tracking-[0.25em] mb-0.5 flex items-center gap-2">
                  <TrendingUp className="w-3 h-3" />
                  INSTITUTIONAL CURRICULUM
                </div>
                <h2 className="text-lg md:text-3xl font-black text-white uppercase tracking-tight">12 Pillars of Mastery</h2>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-3">
              {learningPoints.map((point, i) => (
                <div key={i} className="flex items-center gap-2.5 bg-white/[0.03] p-2.5 md:p-3.5 rounded-lg border border-white/5 transition-all hover:bg-white/[0.05] hover:border-brand-gold/30 group">
                  <CheckCircle2 className="w-4 h-4 text-brand-gold flex-shrink-0 transition-transform group-hover:scale-110" />
                  <span className="text-[12px] md:text-[13px] font-bold text-white/90 leading-tight uppercase tracking-tight">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
