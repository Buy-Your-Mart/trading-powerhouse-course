"use client";

import React from 'react';
import { Check } from 'lucide-react';

export default function WhyJoin() {
  const points = [
    {
      title: "Backed by 100+ Successful Traders & 8 Years of Proven Results",
      desc: "This masterclass follows a powerful learning framework trusted by traders worldwide — designed to deliver real, practical, and repeatable trading success"
    },
    {
      title: "Master Proven Trading Strategies from an Industry Expert",
      desc: "Learn the same time-tested strategies used to train thousands of profitable traders. Discover simple yet powerful techniques that work even if you're a complete beginner."
    },
    {
      title: "Turn Trading Into a Long-Term Wealth-Building Skill",
      desc: "Go beyond short-term profits — learn how to build a sustainable income stream through structured trading. Master chart patterns, technical indicators, and price action to confidently spot high-potential stocks."
    },
    {
      title: "Start Trading with Limited Capital & Zero Prior Experience",
      desc: "You don't need a big investment to begin. Learn smart, low-risk strategies to grow your portfolio steadily. Understand how to manage risk, control losses, and maximize returns using real-world techniques."
    },
    {
      title: "Avoid Costly Mistakes That Keep Most Traders Stuck",
      desc: "Most traders lose money because of emotions, guesswork, and inconsistent strategies. Learn how to avoid these common traps and apply a disciplined, rule-based approach used by the world's most successful traders."
    }
  ];

  return (
    <section className="section-spacing bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-black text-[32px] md:text-[64px] font-black text-center mb-10 md:mb-16 uppercase leading-[1.1] tracking-tighter max-w-5xl mx-auto">
          Why You Can't Afford to <span className="text-brand-red">Miss</span> This Exclusive Stock Market Masterclass
        </h2>

        <div className="max-w-5xl mx-auto space-y-4 md:space-y-6">
          {points.map((point, idx) => (
            <div key={idx} className="bg-brand-yellow rounded-[24px] md:rounded-full px-6 md:px-12 py-6 md:py-8 border-2 border-brand-yellow hover:bg-white transition-all group">
              <div className="flex items-start gap-4">
                <div className="bg-black rounded-full p-1.5 flex-shrink-0 mt-1">
                  <Check className="w-3 h-3 md:w-5 md:h-5 text-brand-yellow" strokeWidth={4} />
                </div>
                <div>
                  <h3 className="text-black font-black text-[16px] md:text-[22px] leading-tight mb-2 uppercase tracking-tight group-hover:text-brand-red transition-colors">
                    {point.title}
                  </h3>
                  <p className="text-black/70 text-[14px] md:text-[18px] font-bold leading-relaxed">
                    {point.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
