"use client";

import React from 'react';
import { Check, Users, TrendingUp, Wallet, Target, BookOpen, AlertTriangle, Gem } from 'lucide-react';

const TargetAudience: React.FC = () => {
  const audiences = [
    { 
      icon: <BookOpen className="w-5 h-5" />,
      title: "Beginners in Trading", 
      desc: "Start your trading journey the right way — even if you have zero prior experience. Learn when to enter, exit, and manage trades with clarity.",
      color: "emerald"
    },
    { 
      icon: <Target className="w-5 h-5" />,
      title: "Struggle to Pick Stocks", 
      desc: "If you find it hard to identify good trades or often enter at the wrong time, this masterclass will give you a step-by-step framework for accurate decision-making.",
      color: "blue"
    },
    { 
      icon: <Wallet className="w-5 h-5" />,
      title: "Second Income Seekers", 
      desc: "Learn how to generate a reliable second income stream through structured, low-risk trading — even with a busy schedule.",
      color: "violet"
    },
    { 
      icon: <TrendingUp className="w-5 h-5" />,
      title: "Wealth Creation Focused", 
      desc: "Discover powerful strategies to grow your portfolio sustainably and build long-term wealth.",
      color: "amber"
    },
    { 
      icon: <Users className="w-5 h-5" />,
      title: "Aspiring Traders", 
      desc: "Build a strong foundation in price action, market structure, and technical indicators to trade confidently in any market condition.",
      color: "rose"
    },
    { 
      icon: <AlertTriangle className="w-5 h-5" />,
      title: "Traders Facing Losses", 
      desc: "Identify why you're losing money, fix common mistakes, and start trading with a rule-based approach.",
      color: "orange"
    },
    { 
      icon: <Gem className="w-5 h-5" />,
      title: "Financial Independence", 
      desc: "If you are ready to replace old beliefs, take action, and build a disciplined trading system — this program is designed to guide you all the way.",
      color: "teal"
    }
  ];

  const colorClasses: Record<string, { bg: string; border: string; icon: string; text: string }> = {
    emerald: { bg: "bg-emerald-50", border: "border-emerald-200", icon: "bg-emerald-500 text-white", text: "text-emerald-700" },
    blue: { bg: "bg-blue-50", border: "border-blue-200", icon: "bg-blue-500 text-white", text: "text-blue-700" },
    violet: { bg: "bg-violet-50", border: "border-violet-200", icon: "bg-violet-500 text-white", text: "text-violet-700" },
    amber: { bg: "bg-amber-50", border: "border-amber-200", icon: "bg-amber-500 text-white", text: "text-amber-700" },
    rose: { bg: "bg-rose-50", border: "border-rose-200", icon: "bg-rose-500 text-white", text: "text-rose-700" },
    orange: { bg: "bg-orange-50", border: "border-orange-200", icon: "bg-orange-500 text-white", text: "text-orange-700" },
    teal: { bg: "bg-teal-50", border: "border-teal-200", icon: "bg-teal-500 text-white", text: "text-teal-700" },
  };

  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block bg-slate-900 text-white text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full mb-6">
            Is This For You?
          </span>
          <h2 className="text-slate-900 text-[28px] md:text-[52px] font-black leading-tight tracking-tight max-w-3xl mx-auto">
            Who Is This Stock Market Masterclass For?
          </h2>
        </div>
  
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {audiences.map((audience, i) => {
            const colors = colorClasses[audience.color];
            return (
              <div 
                key={i} 
                className={`${colors.bg} ${colors.border} border-2 rounded-2xl p-5 md:p-6 hover:shadow-lg transition-all duration-300 group`}
              >
                <div className="flex items-start gap-4">
                  <div className={`${colors.icon} rounded-xl p-2.5 flex-shrink-0 group-hover:scale-110 transition-transform`}>
                    {audience.icon}
                  </div>
                  <div>
                    <h3 className={`${colors.text} font-black text-base md:text-lg mb-2`}>
                      {audience.title}
                    </h3>
                    <p className="text-slate-600 text-sm md:text-[15px] leading-relaxed">
                      {audience.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <a 
            href="#register" 
            className="inline-flex items-center gap-2 bg-slate-900 text-white font-bold text-base px-8 py-4 rounded-full hover:bg-slate-800 transition-colors"
          >
            <Check className="w-5 h-5" />
            Yes, This Is For Me!
          </a>
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;
