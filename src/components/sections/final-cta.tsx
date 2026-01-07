"use client";

import React from 'react';
import { Zap, Timer, Star } from 'lucide-react';

const FinalCTA: React.FC = () => {
  return (
    <section className="section-spacing bg-black overflow-hidden relative">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-yellow rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-brand-red rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-brand-red/20 border border-brand-red/30 px-6 py-2 rounded-full mb-8">
            <Timer className="w-5 h-5 text-brand-red animate-pulse" />
            <span className="text-brand-red font-black text-sm uppercase tracking-widest">Limited Slots Available</span>
          </div>

          <h2 className="text-white text-[36px] md:text-[72px] font-black leading-tight mb-6 uppercase tracking-tight">
            Seats are limited. <br /> 
            <span className="text-brand-yellow">This live session will not be repeated.</span>
          </h2>

          <p className="text-gray-400 text-lg md:text-2xl font-bold mb-12 max-w-2xl mx-auto">
            Take the first step towards financial independence with India's most trusted trading mentors.
          </p>

          <div className="flex flex-col items-center gap-8">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-brand-red to-brand-yellow rounded-full blur opacity-40 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <a 
                href="#register" 
                className="btn-primary relative text-xl md:text-4xl px-12 md:px-24 py-6 md:py-10"
              >
                Book Your Spot @ ₹299/-
              </a>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-black bg-gray-800 flex items-center justify-center overflow-hidden">
                      <img src={`https://i.pravatar.cc/100?u=${i}`} alt="user" className="w-full h-full object-cover opacity-80" />
                    </div>
                  ))}
                </div>
                <div className="text-left">
                  <div className="flex items-center gap-1">
                    {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 fill-brand-yellow text-brand-yellow" />)}
                  </div>
                  <div className="text-white font-black text-xs uppercase tracking-tighter">15,000+ Students Joined</div>
                </div>
              </div>

              <div className="h-10 w-px bg-white/10 hidden md:block"></div>

              <div className="flex items-center gap-4">
                <div className="flex flex-col items-end leading-none">
                  <span className="text-white/40 text-xs line-through">₹5,996</span>
                  <span className="text-brand-yellow font-black text-2xl md:text-3xl">₹299</span>
                </div>
                <a href="#register" className="text-white font-black uppercase tracking-widest text-sm border-b-2 border-brand-yellow pb-1 hover:text-brand-yellow transition-colors">Register Now</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
