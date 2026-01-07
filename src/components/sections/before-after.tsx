"use client";

import React from 'react';
import { X, Check } from 'lucide-react';

const BeforeAfter: React.FC = () => {
  const beforePoints = [
    "Struggling to understand stock market basics",
    "Unsure when to buy or sell stocks",
    "Fear of losing money due to lack of knowledge",
    "No clear strategy for consistent profits",
    "Confused about Price Action, Support & Resistance",
    "Unable to mark key zones or identify trends",
    "No understanding of Multiple Time Frame Analysis",
    "Unsure how to interpret candlestick patterns",
    "Finding chart patterns complicated",
    "Overwhelmed by technical indicators",
    "Not confident in selecting the right stocks",
    "No structure for intraday or swing trading",
    "Lack of psychological discipline while trading"
  ];

  const afterPoints = [
    "Confident in reading charts using Price Action & S/R",
    "Able to mark High Support and Resistance Zones",
    "Comfortable using Multiple Time Frame Analysis",
    "Clear understanding of Trend Analysis using S/R",
    "Skillful in applying Risk-to-Reward Ratio",
    "Capable of analyzing strong candlestick signals",
    "Able to identify and trade powerful chart patterns",
    "Know how to use key Technical Indicators effectively",
    "Improved trading psychology and emotional control",
    "Learn practical, real-market Trading Strategies",
    "Master execution techniques for Intraday & Swing",
    "Confident in stock selection using StockEdge",
    "Know how to choose stocks for long-term investing",
    "Trade with a structured, rule-based approach"
  ];

  return (
    <section className="bg-white overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="bg-slate-100 px-6 md:px-16 py-12 md:py-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-rose-500 rounded-full p-2">
              <X className="w-5 h-5 text-white" strokeWidth={3} />
            </div>
            <h2 className="text-slate-900 text-[32px] md:text-[48px] font-black leading-none uppercase tracking-tight">Before</h2>
          </div>
          <p className="text-slate-500 text-sm font-bold uppercase tracking-wider mb-8">Without the Masterclass</p>
          
          <ul className="space-y-3">
            {beforePoints.map((point, i) => (
              <li key={i} className="flex items-start gap-3 p-3 bg-white/60 rounded-xl">
                <span className="text-rose-500 text-lg mt-0.5">•</span>
                <span className="text-slate-700 font-medium text-[14px] md:text-[15px] leading-snug">{point}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-emerald-50 px-6 md:px-16 py-12 md:py-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-emerald-500 rounded-full p-2">
              <Check className="w-5 h-5 text-white" strokeWidth={3} />
            </div>
            <h2 className="text-slate-900 text-[32px] md:text-[48px] font-black leading-none uppercase tracking-tight">After</h2>
          </div>
          <p className="text-emerald-600 text-sm font-bold uppercase tracking-wider mb-8">After the Masterclass</p>
          
          <ul className="space-y-3">
            {afterPoints.map((point, i) => (
              <li key={i} className="flex items-start gap-3 p-3 bg-white/60 rounded-xl">
                <span className="text-emerald-500 text-lg mt-0.5">✓</span>
                <span className="text-slate-700 font-medium text-[14px] md:text-[15px] leading-snug">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;
