"use client";

import React from 'react';
import { UserCheck, Briefcase, GraduationCap, Coffee, TrendingDown, Target, Home, Wallet } from 'lucide-react';

const TargetAudience: React.FC = () => {
  const audiences = [
    { title: "Complete Beginners", desc: "Start with a solid foundation. No prior market knowledge needed.", icon: <UserCheck className="w-5 h-5" /> },
    { title: "Working Professionals", desc: "Learn to trade without quitting your job or missing work hours.", icon: <Briefcase className="w-5 h-5" /> },
    { title: "Students", desc: "Build a high-income skill early and secure your financial future.", icon: <GraduationCap className="w-5 h-5" /> },
    { title: "Retired Individuals", desc: "Generate a consistent secondary income from home.", icon: <Coffee className="w-5 h-5" /> },
    { title: "Traders Facing Losses", desc: "Fix mistakes and stop losing money with proven frameworks.", icon: <TrendingDown className="w-5 h-5" /> },
    { title: "Lacking Consistency", desc: "Transform random trades into a predictable system.", icon: <Target className="w-5 h-5" /> },
    { title: "Homemakers", desc: "Grow wealth while managing your household.", icon: <Home className="w-5 h-5" /> },
    { title: "Alternate Income Seekers", desc: "Anyone looking to build a reliable second source of revenue.", icon: <Wallet className="w-5 h-5" /> }
  ];

  return (
    <section className="section-spacing bg-brand-navy">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-8 md:mb-12">
          <div className="text-brand-gold text-[10px] font-bold uppercase tracking-widest mb-2">Who This Is For</div>
          <h2 className="text-white text-2xl md:text-4xl">Designed for Every Aspiration</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {audiences.map((audience, i) => (
            <div key={i} className="bg-white/[0.03] border border-white/10 p-4 md:p-6 rounded-xl hover:bg-white/[0.05] transition-all">
              <div className="w-10 h-10 rounded-lg bg-brand-gold/10 flex items-center justify-center text-brand-gold mb-3">
                {audience.icon}
              </div>
              <h3 className="text-white font-bold text-sm md:text-base mb-1.5">{audience.title}</h3>
              <p className="text-white/50 text-[11px] md:text-xs leading-relaxed">{audience.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;
