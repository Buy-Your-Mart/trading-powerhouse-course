"use client";

import React from 'react';
import { ShieldCheck, Zap, TrendingUp, AlertCircle, ArrowRight } from 'lucide-react';

export default function WhyJoin() {
  const points = [
    {
      icon: ShieldCheck,
      title: "8 Years of Proven Results",
      desc: "Backed by 100+ successful traders and a framework trusted worldwide."
    },
    {
      icon: Zap,
      title: "Master Proven Strategies",
      desc: "Simple techniques that work even for complete beginners."
    },
    {
      icon: TrendingUp,
      title: "Wealth Building",
      desc: "Learn to build a sustainable income stream through structured trading."
    },
    {
      icon: AlertCircle,
      title: "Avoid Costly Mistakes",
      desc: "Master a disciplined, rule-based approach used by the best."
    }
  ];

  return (
    <section className="section-spacing bg-brand-navy relative overflow-hidden">
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-8 md:mb-12">
          <div className="text-brand-gold text-[10px] font-bold uppercase tracking-widest mb-2">Why Join Us</div>
          <h2 className="text-white text-2xl md:text-4xl">India's Most Practical Masterclass</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 max-w-4xl mx-auto">
          {points.map((point, idx) => (
            <div key={idx} className="bg-white/5 border border-white/10 p-5 rounded-xl flex items-start gap-4">
              <div className="w-10 h-10 bg-brand-gold/10 rounded-lg flex items-center justify-center flex-shrink-0 text-brand-gold">
                <point.icon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-white font-bold text-base mb-1">{point.title}</h3>
                <p className="text-white/50 text-xs leading-relaxed">{point.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 md:mt-12 p-6 md:p-10 bg-brand-gold/5 border border-brand-gold/20 rounded-2xl text-center max-w-4xl mx-auto">
          <p className="text-white text-lg md:text-xl font-bold italic mb-6 leading-relaxed">
            "Start Trading with Limited Capital & Zero Prior Experience."
          </p>
          <a 
            href="#register" 
            className="btn-primary"
          >
            RESERVE MY SPOT NOW
          </a>
        </div>
      </div>
    </section>
  );
}
