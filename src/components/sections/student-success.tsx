"use client";

import React from 'react';
import { Star, Quote } from 'lucide-react';

export default function StudentSuccess() {
  return (
    <section className="py-16 md:py-24 bg-emerald-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block bg-emerald-500 text-white text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full mb-6">
              Success Story
            </span>
            <h2 className="text-slate-900 text-[28px] md:text-[48px] font-black leading-tight tracking-tight">
              What Our Students Say
            </h2>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-10 lg:gap-16">
            <div className="w-full md:w-1/3 flex justify-center">
              <div className="relative w-full max-w-[300px] aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/8e8d2229-4af9-4423-918e-4e2d30a6aef9/mentor2-1767825248382.png?width=8000&height=8000&resize=contain"
                  alt="Manas Pimple"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

            <div className="w-full md:w-2/3">
              <div className="bg-white rounded-3xl p-8 md:p-10 shadow-lg border border-emerald-100 relative">
                <Quote className="absolute top-6 right-6 w-12 h-12 text-emerald-100" />
                
                <div className="mb-6">
                  <h3 className="text-slate-900 text-2xl md:text-3xl font-black mb-1">Manas Pimple</h3>
                  <p className="text-slate-500 font-medium text-sm uppercase tracking-wider">Mumbai, Maharashtra</p>
                </div>
                
                <p className="text-slate-700 text-base md:text-lg leading-relaxed mb-6 relative z-10">
                  Trading Powerhouse, under the guidance of Mrs. Leena Pimple, has been a great support in my stock trading journey. Her clear strategies, disciplined approach, and practical market insights helped me trade with more confidence and consistency. The guidance is simple, structured, and focused on long-term success. Highly recommended for anyone serious about swing trading.
                </p>
                
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
