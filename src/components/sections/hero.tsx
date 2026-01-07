"use client";

import React from 'react';
import { Star, Zap, Users, TrendingUp } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-brand-yellow pt-10 md:pt-20 pb-16 md:pb-32 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-black/5 -skew-x-12 translate-x-1/2"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-black text-brand-yellow px-4 md:px-6 py-2 rounded-full mb-8 animate-bounce">
            <Zap className="w-4 h-4 md:w-5 md:h-5 fill-brand-yellow" />
            <span className="text-[10px] md:text-sm font-black uppercase tracking-widest">Live Masterclass • Jan 24, 2026</span>
          </div>

          <h1 className="text-black text-[38px] md:text-[90px] font-black leading-[0.9] mb-8 tracking-tighter uppercase max-w-5xl mx-auto">
            Start trading with <br className="hidden md:block" />
            <span className="text-brand-red bg-white px-4 inline-block -rotate-1">clarity</span> and <br className="hidden md:block" />
            <span className="text-brand-red underline decoration-8 underline-offset-8">confidence</span>
          </h1>
          
          <p className="text-black/80 font-bold text-lg md:text-3xl max-w-3xl mx-auto mb-12 leading-tight">
            Discover winning trading strategies from India's renowned stock market mentors — without prior knowledge or large investments.
          </p>
          
          <div className="flex flex-col items-center gap-6 md:gap-8">
            <div className="relative group">
              <div className="absolute -inset-1 bg-brand-red rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              <a 
                href="#register" 
                className="btn-primary relative w-full sm:w-auto text-xl md:text-4xl px-10 md:px-20 py-6 md:py-10 shadow-2xl"
              >
                Book Now @ Just ₹299
              </a>
            </div>
            
            <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12 text-black font-black text-xs md:text-base uppercase tracking-widest">
              <div className="flex items-center gap-3 bg-white/40 px-4 py-2 rounded-full">
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-4 h-4 fill-black text-black" />)}
                </div>
                <span>4.9/5 RATING</span>
              </div>
              
              <div className="flex items-center gap-3 bg-white/40 px-4 py-2 rounded-full">
                <Users className="w-5 h-5 text-black" />
                <span>15,000+ SUCCESSFUL STUDENTS</span>
              </div>

              <div className="flex items-center gap-3 bg-white/40 px-4 py-2 rounded-full">
                <TrendingUp className="w-5 h-5 text-black" />
                <span>95% POSITIVE OUTCOME</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
