"use client";

import React from 'react';
import { Gift, FileText, Users, Calculator, MessageCircle, Zap } from 'lucide-react';

export default function Bonuses() {
  const bonuses = [
    { title: "Trading Blueprint (PDF)", desc: "Step-by-step setup guide for 2026 markets.", icon: FileText },
    { title: "Private Community Access", desc: "Join our elite circle of 15,000+ traders.", icon: Users },
    { title: "Risk Calculator", desc: "Automate your position sizing instantly.", icon: Calculator },
    { title: "Live Q&A Session", desc: "Get direct answers from Leena & Ajay.", icon: MessageCircle }
  ];

  return (
    <section className="section-spacing bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-10 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-brand-yellow px-4 py-1.5 rounded-full text-black text-xs md:text-sm font-black uppercase tracking-widest mb-4">
            <Gift className="w-4 h-4" /> Fast Action Bonuses
          </div>
          <h2 className="text-black text-[32px] md:text-[64px] font-black uppercase leading-tight tracking-tighter">
            ₹40,000 Worth of <br /> <span className="text-brand-red">Bonuses FREE</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-20">
          {bonuses.map((bonus, idx) => (
            <div key={idx} className="bg-brand-yellow/5 border-2 border-brand-yellow/20 p-6 md:p-8 rounded-[2rem] text-center group hover:border-brand-yellow transition-all">
              <div className="w-14 h-14 bg-brand-yellow rounded-2xl flex items-center justify-center mb-6 mx-auto text-black shadow-lg shadow-brand-yellow/20 group-hover:scale-110 transition-transform">
                <bonus.icon className="w-7 h-7" />
              </div>
              <h3 className="text-black font-black text-lg md:text-xl mb-2 uppercase tracking-tight">{bonus.title}</h3>
              <p className="text-black/60 font-bold text-sm leading-snug">{bonus.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-black p-8 md:p-16 rounded-[2.5rem] text-center max-w-4xl mx-auto relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-brand-red/10 blur-3xl rounded-full"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-brand-yellow/10 blur-3xl rounded-full"></div>
          
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-10">
              <span className="text-5xl md:text-8xl font-black text-white tracking-tighter">₹299</span>
              <div className="text-left leading-tight">
                <span className="block text-white/40 line-through text-base md:text-xl font-black">₹40,000+ VALUE</span>
                <span className="block text-brand-yellow font-black text-lg md:text-2xl uppercase tracking-widest">Everything Included</span>
              </div>
            </div>
            
            <a 
              href="#register" 
              className="btn-primary w-full sm:w-auto text-xl md:text-3xl px-10 md:px-20 py-5 md:py-8"
            >
              <Zap className="w-6 h-6 md:w-8 md:h-8 fill-white" />
              Claim All Bonuses Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
