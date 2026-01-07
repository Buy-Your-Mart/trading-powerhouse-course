"use client";

import React from 'react';
import { Star, Quote, CheckCircle2 } from 'lucide-react';

export default function StudentSuccess() {
  return (
    <section className="section-spacing bg-white">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-8 md:mb-12">
          <div className="text-brand-gold text-[10px] font-bold uppercase tracking-widest mb-2">Student Success</div>
          <h2 className="text-brand-navy text-2xl md:text-4xl">Real Stories, Real Results</h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-slate-50 p-6 md:p-10 rounded-2xl border border-slate-100 relative overflow-hidden">
            <Quote className="absolute top-4 right-4 w-12 h-12 text-slate-200" />
            
            <div className="relative z-10 text-center md:text-left">
              <div className="flex justify-center md:justify-start text-brand-gold mb-4 gap-1">
                {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              
              <p className="text-brand-navy text-base md:text-lg font-semibold leading-relaxed italic mb-8">
                "Trading Powerhouse, under the guidance of Mrs. Leena Pimple, has been a great support. Her clear strategies, disciplined approach, and practical insights helped me trade with more confidence."
              </p>
              
              <div className="flex flex-col md:flex-row items-center gap-4">
                <div className="w-10 h-10 bg-brand-navy rounded-full flex items-center justify-center text-white font-bold text-sm">
                  MP
                </div>
                <div>
                  <h4 className="text-base font-bold text-brand-navy">Manas Pimple</h4>
                  <div className="flex items-center justify-center md:justify-start gap-2 text-brand-gold text-[10px] font-bold uppercase tracking-widest">
                    <CheckCircle2 className="w-3 h-3" /> Verified Student
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
