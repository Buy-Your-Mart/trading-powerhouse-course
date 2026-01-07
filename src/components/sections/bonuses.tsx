"use client";

import React from 'react';
import { Gift, FileText, Users, Calculator, MessageCircle, Zap } from 'lucide-react';

export default function Bonuses() {
  const bonuses = [
    { title: "Trading Blueprint (PDF)", desc: "Step-by-step setup guide for 2026 markets.", icon: FileText, color: "emerald" },
    { title: "Private Community Access", desc: "Join our elite circle of 15,000+ traders.", icon: Users, color: "blue" },
    { title: "Risk Calculator", desc: "Automate your position sizing instantly.", icon: Calculator, color: "violet" },
    { title: "Live Q&A Session", desc: "Get direct answers from Leena & Ajay.", icon: MessageCircle, color: "amber" }
  ];

  const colorClasses: Record<string, { bg: string; icon: string }> = {
    emerald: { bg: "bg-emerald-500", icon: "text-white" },
    blue: { bg: "bg-blue-500", icon: "text-white" },
    violet: { bg: "bg-violet-500", icon: "text-white" },
    amber: { bg: "bg-amber-500", icon: "text-white" },
  };

  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2 bg-emerald-500 text-white px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
            <Gift className="w-4 h-4" /> Fast Action Bonuses
          </div>
          <h2 className="text-slate-900 text-[28px] md:text-[48px] font-black leading-tight tracking-tight">
            ₹40,000 Worth of <span className="text-emerald-500">Bonuses FREE</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16 max-w-5xl mx-auto">
          {bonuses.map((bonus, idx) => {
            const colors = colorClasses[bonus.color];
            return (
              <div key={idx} className="bg-white border border-slate-200 p-6 rounded-2xl text-center group hover:shadow-lg transition-all">
                <div className={`w-14 h-14 ${colors.bg} rounded-2xl flex items-center justify-center mb-5 mx-auto ${colors.icon} shadow-lg group-hover:scale-110 transition-transform`}>
                  <bonus.icon className="w-7 h-7" />
                </div>
                <h3 className="text-slate-900 font-black text-base mb-2">{bonus.title}</h3>
                <p className="text-slate-500 text-sm leading-snug">{bonus.desc}</p>
              </div>
            );
          })}
        </div>

        <div className="bg-slate-900 p-8 md:p-14 rounded-3xl text-center max-w-3xl mx-auto relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/10 blur-3xl rounded-full"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-amber-500/10 blur-3xl rounded-full"></div>
          
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-8">
              <span className="text-5xl md:text-7xl font-black text-white tracking-tighter">₹299</span>
              <div className="text-left leading-tight">
                <span className="block text-slate-500 line-through text-base font-bold">₹40,000+ VALUE</span>
                <span className="block text-emerald-400 font-black text-lg uppercase tracking-wider">Everything Included</span>
              </div>
            </div>
            
            <a 
              href="#register" 
              className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-black text-lg md:text-xl px-10 md:px-14 py-4 md:py-5 rounded-full shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 transition-all hover:scale-105"
            >
              <Zap className="w-5 h-5" />
              Claim All Bonuses Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
