"use client";

import React from 'react';
import { XCircle, CheckCircle2, ArrowRight } from 'lucide-react';

const BeforeAfter: React.FC = () => {
  const before = [
    "Confusion with too many indicators",
    "Trading based on random tips",
    "Small profits, big losses",
    "No clear entry or exit plan"
  ];

  const after = [
    "Clarity with Price Action",
    "Independent decision making",
    "Controlled risk, consistent gains",
    "Rule-based trading system"
  ];

  return (
    <section className="section-spacing bg-white">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-8 md:mb-12">
          <div className="text-brand-gold text-[10px] font-bold uppercase tracking-widest mb-2">The Transformation</div>
          <h2 className="text-brand-navy text-2xl md:text-4xl">From Confusion to Clarity</h2>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
          <div className="bg-red-50/50 border border-red-100 p-6 rounded-2xl">
            <h3 className="text-red-600 font-bold text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
              <XCircle className="w-4 h-4" />
              Before Workshop
            </h3>
            <ul className="space-y-3">
              {before.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-[13px] md:text-sm text-slate-600 font-medium">
                  <span className="mt-1 w-1 h-1 rounded-full bg-red-400 flex-shrink-0"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden md:flex justify-center -mx-4 z-10">
            <div className="bg-brand-gold text-brand-navy p-2 rounded-full shadow-lg">
              <ArrowRight className="w-5 h-5" />
            </div>
          </div>

          <div className="bg-brand-navy border border-brand-gold/20 p-6 rounded-2xl shadow-xl">
            <h3 className="text-brand-gold font-bold text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              After Workshop
            </h3>
            <ul className="space-y-3">
              {after.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-[13px] md:text-sm text-white/80 font-medium">
                  <span className="mt-1 w-1 h-1 rounded-full bg-brand-gold flex-shrink-0"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;
