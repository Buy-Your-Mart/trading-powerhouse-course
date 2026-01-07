"use client";

import React from 'react';
import { Gift, FileText, Users, Calculator, MessageCircle } from 'lucide-react';

export default function Bonuses() {
  const bonuses = [
    { title: "Trading Blueprint (PDF)", desc: "Step-by-step setup guide.", icon: FileText },
    { title: "Private Community Access", desc: "Elite circle of traders.", icon: Users },
    { title: "Risk Calculator", desc: "Automate position sizing.", icon: Calculator },
    { title: "Live Q&A Session", desc: "Direct mentor answers.", icon: MessageCircle }
  ];

  return (
    <section className="section-spacing bg-white">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-8 md:mb-12">
          <div className="text-brand-gold text-[10px] font-bold uppercase tracking-widest mb-2 flex items-center justify-center gap-2">
            <Gift className="w-3 h-3" /> Fast Action Bonuses
          </div>
          <h2 className="text-brand-navy text-2xl md:text-4xl">₹40,000 Worth of Bonuses FREE</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-8">
          {bonuses.map((bonus, idx) => (
            <div key={idx} className="bg-slate-50 border border-slate-100 p-4 rounded-xl text-center group">
              <div className="w-10 h-10 bg-brand-gold/10 rounded-lg flex items-center justify-center mb-3 mx-auto text-brand-gold">
                <bonus.icon className="w-5 h-5" />
              </div>
              <h3 className="text-brand-navy font-bold text-[13px] md:text-base mb-1">{bonus.title}</h3>
              <p className="text-slate-500 text-[10px] md:text-xs leading-tight">{bonus.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-brand-navy p-6 md:p-10 rounded-2xl text-center max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="text-3xl md:text-5xl font-bold text-white tracking-tighter">₹299</span>
            <div className="text-left leading-none">
              <span className="block text-brand-gold/40 line-through text-[10px] md:text-xs font-bold">₹40,000+ VALUE</span>
              <span className="block text-brand-gold font-bold text-[10px] md:text-xs uppercase tracking-widest">Everything Included</span>
            </div>
          </div>
          <a href="#register" className="btn-primary w-full sm:w-auto">CLAIM ALL BONUSES NOW</a>
        </div>
      </div>
    </section>
  );
}
