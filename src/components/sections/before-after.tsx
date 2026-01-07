"use client";

import React from 'react';

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
        {/* Before Column */}
        <div className="bg-[#E5E5E5] px-6 md:px-20 py-12 md:py-24">
          <h2 className="text-black text-[40px] md:text-[80px] font-black leading-none mb-4 uppercase tracking-tighter">BEFORE</h2>
          <h3 className="text-black text-[18px] md:text-[32px] font-light leading-tight mb-10 md:mb-16 uppercase tracking-[0.2em]">STOCK MARKET TRADING MASTERCLASS</h3>
          
          <ul className="space-y-3 md:space-y-4">
            {beforePoints.map((point, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-black text-xl leading-none mt-1">•</span>
                <span className="text-black font-bold text-[14px] md:text-[18px] leading-snug">{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* After Column */}
        <div className="bg-brand-yellow px-6 md:px-20 py-12 md:py-24 relative">
          <h2 className="text-black text-[40px] md:text-[80px] font-black leading-none mb-4 uppercase tracking-tighter">AFTER</h2>
          <h3 className="text-black text-[18px] md:text-[32px] font-light leading-tight mb-10 md:mb-16 uppercase tracking-[0.2em]">STOCK MARKET TRADING MASTERCLASS</h3>
          
          <ul className="space-y-3 md:space-y-4">
            {afterPoints.map((point, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-black text-xl leading-none mt-1">•</span>
                <span className="text-black font-bold text-[14px] md:text-[18px] leading-snug">{point}</span>
              </li>
            ))}
          </ul>

          <div className="absolute bottom-10 right-10 opacity-20">
            <span className="text-black text-[64px] md:text-[120px] font-black italic">04</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;
