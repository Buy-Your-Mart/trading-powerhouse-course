"use client";

import React from 'react';
import { Check } from 'lucide-react';

const TargetAudience: React.FC = () => {
  const audiences = [
    { 
      title: "BEGINNERS IN TRADING", 
      desc: "Start your trading journey the right way — even if you have zero prior experience. Learn when to enter, exit, and manage trades with clarity" 
    },
    { 
      title: "STRUGGLE TO PICK STOCKS", 
      desc: "If you find it hard to identify good trades or often enter at the wrong time, this masterclass will give you a step-by-step framework for accurate decision-making" 
    },
    { 
      title: "SECOND INCOME", 
      desc: "Learn how to generate a reliable second income stream through structured, low-risk trading — even with a busy schedule" 
    },
    { 
      title: "WEALTH CREATION", 
      desc: "Discover powerful strategies to grow your portfolio sustainably and build long-term wealth" 
    },
    { 
      title: "ASPIRING TRADERS", 
      desc: "Build a strong foundation in price action, market structure, and technical indicators to trade confidently in any market condition" 
    },
    { 
      title: "TRADERS FACING LOSSES", 
      desc: "Identify why you're losing money, fix common mistakes, and start trading with a rule-based approach" 
    },
    { 
      title: "FINANCIAL INDEPENDENCE", 
      desc: "If you are ready to replace old beliefs, take action, and build a disciplined trading system — this program is designed to guide you all the way" 
    }
  ];

  return (
    <section className="section-spacing bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-black text-[32px] md:text-[64px] font-black text-center mb-10 md:mb-20 uppercase leading-none tracking-tighter">
          Who Is This Stock Market <br /> Masterclass Program For?
        </h2>
  
        <div className="max-w-5xl mx-auto space-y-4 md:space-y-6">
          {audiences.map((audience, i) => (
            <div key={i} className="flex flex-col md:flex-row md:items-center gap-2 md:gap-0 group">
              <div className="bg-brand-yellow rounded-full px-6 md:px-8 py-3 md:py-4 flex items-center gap-3 w-full md:w-[400px] flex-shrink-0 z-10 border-2 border-brand-yellow group-hover:bg-white transition-colors duration-300">
                <div className="bg-black rounded-full p-1 flex-shrink-0">
                  <Check className="w-3 h-3 md:w-4 md:h-4 text-brand-yellow" strokeWidth={4} />
                </div>
                <span className="text-black font-black text-[14px] md:text-[18px] tracking-tight whitespace-nowrap">{audience.title}</span>
              </div>
              <div className="bg-white border-2 border-brand-yellow rounded-full -mt-2 md:mt-0 md:-ml-8 pl-6 md:pl-16 pr-8 py-4 md:py-4 w-full text-[13px] md:text-[16px] font-bold text-black/80 leading-snug">
                {audience.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;
