"use client";

import React from 'react';
import { Check, Shield, TrendingUp, Lightbulb, Wallet, AlertTriangle } from 'lucide-react';

export default function WhyJoin() {
  const points = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Backed by 100+ Successful Traders & 8 Years of Proven Results",
      desc: "This masterclass follows a powerful learning framework trusted by traders worldwide — designed to deliver real, practical, and repeatable trading success.",
      color: "emerald"
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Master Proven Trading Strategies from an Industry Expert",
      desc: "Learn the same time-tested strategies used to train thousands of profitable traders. Discover simple yet powerful techniques that work even if you're a complete beginner.",
      color: "blue"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Turn Trading Into a Long-Term Wealth-Building Skill",
      desc: "Go beyond short-term profits — learn how to build a sustainable income stream through structured trading. Master chart patterns, technical indicators, and price action.",
      color: "violet"
    },
    {
      icon: <Wallet className="w-6 h-6" />,
      title: "Start Trading with Limited Capital & Zero Prior Experience",
      desc: "You don't need a big investment to begin. Learn smart, low-risk strategies to grow your portfolio steadily. Understand how to manage risk and maximize returns.",
      color: "amber"
    },
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      title: "Avoid Costly Mistakes That Keep Most Traders Stuck",
      desc: "Most traders lose money because of emotions, guesswork, and inconsistent strategies. Learn how to avoid these common traps and apply a disciplined, rule-based approach.",
      color: "rose"
    }
  ];

  const colorClasses: Record<string, { bg: string; border: string; icon: string; iconBg: string }> = {
    emerald: { bg: "bg-emerald-50", border: "border-emerald-200", icon: "text-emerald-600", iconBg: "bg-emerald-100" },
    blue: { bg: "bg-blue-50", border: "border-blue-200", icon: "text-blue-600", iconBg: "bg-blue-100" },
    violet: { bg: "bg-violet-50", border: "border-violet-200", icon: "text-violet-600", iconBg: "bg-violet-100" },
    amber: { bg: "bg-amber-50", border: "border-amber-200", icon: "text-amber-600", iconBg: "bg-amber-100" },
    rose: { bg: "bg-rose-50", border: "border-rose-200", icon: "text-rose-600", iconBg: "bg-rose-100" },
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block bg-rose-500 text-white text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full mb-6">
            Don't Miss Out
          </span>
          <h2 className="text-slate-900 text-[28px] md:text-[48px] font-black leading-tight tracking-tight max-w-4xl mx-auto">
            Why You Can't Afford to <span className="text-rose-500">Miss</span> This Exclusive Masterclass
          </h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-4 md:space-y-5">
          {points.map((point, idx) => {
            const colors = colorClasses[point.color];
            return (
              <div 
                key={idx} 
                className={`${colors.bg} ${colors.border} border-2 rounded-2xl p-5 md:p-6 hover:shadow-lg transition-all`}
              >
                <div className="flex items-start gap-4">
                  <div className={`${colors.iconBg} ${colors.icon} rounded-xl p-3 flex-shrink-0`}>
                    {point.icon}
                  </div>
                  <div>
                    <h3 className="text-slate-900 font-black text-base md:text-lg mb-2">
                      {point.title}
                    </h3>
                    <p className="text-slate-600 text-sm md:text-[15px] leading-relaxed">
                      {point.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
