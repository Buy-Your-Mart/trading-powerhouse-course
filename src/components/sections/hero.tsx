"use client";

import React from 'react';
import { CheckCircle2, Star, ArrowRight, Zap, TrendingUp, Users } from 'lucide-react';

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
    <section className="relative bg-brand-yellow pt-10 md:pt-16 pb-12 md:pb-24">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center mb-8 md:mb-16">
          <p className="text-black font-black text-xs md:text-xl uppercase tracking-widest mb-4 md:mb-6">
            Discover <span className="underline decoration-brand-red decoration-2 underline-offset-4">winning trading strategies</span> from India's renowned stock market mentors, Leena & Ajay Pimple
          </p>
          
          <h1 className="text-black text-[36px] md:text-[80px] font-black leading-[1] mb-6 md:mb-10 tracking-tighter uppercase max-w-4xl mx-auto">
            Start trading with <span className="text-brand-red">clarity</span> and <span className="text-brand-red">confidence</span>, without needing prior knowledge
          </h1>
          
          <div className="flex flex-col items-center gap-4 md:gap-6">
            <a 
              href="#register" 
              className="btn-primary w-full sm:w-auto text-xl md:text-3xl px-8 md:px-16 py-5 md:py-8"
            >
              Secure Your Spot Now @ ₹299/-
            </a>
            
            <div className="flex items-center gap-4 text-black/60 font-black text-[10px] md:text-xs uppercase tracking-widest">
              <div className="flex items-center gap-1.5">
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-2.5 h-2.5 md:w-3.5 h-3.5 fill-black text-black" />)}
                </div>
                <span className="text-black font-black">4.9/5 RATING</span>
              </div>
              <span className="h-3 w-px bg-black/20"></span>
              <div className="flex items-center gap-1.5 font-black">
                <Users className="w-4 h-4 text-black" />
                <span>15,000+ STUDENTS</span>
              </div>
            </div>
          </div>
        </div>

        {/* Webinar Outline Card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-[24px] md:rounded-[40px] p-6 md:p-14 shadow-2xl relative overflow-hidden border-b-8 border-brand-red">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 md:mb-12">
              <div>
                <h2 className="text-2xl md:text-4xl font-black text-black uppercase tracking-tight mb-2">Webinar Outline</h2>
                <div className="text-[12px] md:text-sm font-black text-brand-red uppercase tracking-widest flex items-center gap-2">
                  <Zap className="w-4 h-4 fill-brand-red" />
                  What we'll cover in the webinar:
                </div>
              </div>
              <div className="bg-brand-yellow/20 px-4 py-2 rounded-full border border-brand-yellow/50">
                <span className="text-xs md:text-sm font-black text-black">EXCLUSIVE 2026 CURRICULUM</span>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5">
              {learningPoints.map((point, i) => (
                <div key={i} className="flex items-start gap-3 group">
                  <div className="mt-1 bg-black rounded-full p-1 transition-transform group-hover:scale-110">
                    <CheckCircle2 className="w-3 h-3 md:w-4 md:h-4 text-brand-yellow" strokeWidth={3} />
                  </div>
                  <span className="text-[14px] md:text-[16px] font-bold text-black/80 leading-snug">{point}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 md:mt-14 pt-8 md:pt-10 border-t border-gray-100 text-center">
              <div className="inline-flex flex-col md:flex-row items-center gap-4 md:gap-8">
                <div className="flex items-center gap-4">
                  <span className="bg-brand-red text-white px-4 py-1.5 rounded-full text-sm md:text-base font-black">BOOK NOW</span>
                  <span className="text-3xl md:text-5xl font-black text-black">@ Just 299/-</span>
                </div>
                <p className="text-[10px] md:text-xs font-black text-black/40 uppercase tracking-widest">
                  *Limited Slots for January 24th Session
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
