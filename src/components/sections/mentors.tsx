"use client";

import React from 'react';

const Mentors: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <span className="inline-block bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full mb-6">
              Your Guides
            </span>
            <h2 className="text-white text-[32px] md:text-[56px] font-black leading-tight tracking-tight">
              Meet Your Mentors
            </h2>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
            <div className="w-full lg:w-2/5 flex justify-center">
              <div className="relative w-full max-w-[400px] aspect-square rounded-3xl overflow-hidden shadow-2xl border-4 border-emerald-500/30">
                <img 
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/8e8d2229-4af9-4423-918e-4e2d30a6aef9/mentor1-1767825248382.png?width=8000&height=8000&resize=contain"
                  alt="Leena & Ajay Pimple"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

            <div className="w-full lg:w-3/5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                  <h3 className="text-emerald-400 font-black text-xl md:text-2xl mb-4">Leena Pimple</h3>
                  <p className="text-slate-300 text-sm md:text-[15px] leading-relaxed mb-4">
                    20+ years in enterprise consulting, global solution architecture, and leadership — including key roles at IBM. Alumna of Narsee Monjee College and JBIMS. Active trader since 2018, full-time since 2023.
                  </p>
                  <p className="text-slate-400 text-sm leading-relaxed mb-4">
                    Her approach blends technical analysis, market psychology, and structured decision-making.
                  </p>
                  <div className="pt-4 border-t border-white/10">
                    <p className="text-emerald-400 font-bold text-xs uppercase tracking-wider mb-2">Credentials</p>
                    <p className="text-slate-500 text-xs leading-relaxed">
                      OTA (Online Trading Academy) • Sharekhan Education • Learn Price Action Trading (LPAT) • GANN Theory
                    </p>
                  </div>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                  <h3 className="text-amber-400 font-black text-xl md:text-2xl mb-4">Ajay Pimple</h3>
                  <p className="text-slate-300 text-sm md:text-[15px] leading-relaxed mb-4">
                    Seasoned trading mentor with 5+ years of teaching experience. Known for simplifying complex concepts and delivering practical, results-driven strategies. Trained hundreds of traders.
                  </p>
                  <p className="text-slate-400 text-sm leading-relaxed mb-4">
                    26+ years of corporate leadership in global sales and marketing. Alumnus of VJTI, JBIMS, and IIM Ahmedabad.
                  </p>
                  <div className="pt-4 border-t border-white/10">
                    <p className="text-amber-400 font-bold text-xs uppercase tracking-wider mb-2">Certifications</p>
                    <p className="text-slate-500 text-xs leading-relaxed">
                      NISM-Series-VIII: Equity Derivatives • NISM-Series-V-A: Mutual Fund Distribution
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mentors;
