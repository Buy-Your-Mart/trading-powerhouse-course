"use client";

import React from 'react';
import Image from 'next/image';
import { Star } from 'lucide-react';

export default function StudentSuccess() {
  return (
    <section className="section-spacing bg-brand-yellow">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-10 lg:gap-20">
            {/* Student Image */}
            <div className="w-full md:w-1/3 flex justify-center">
              <div className="relative w-full max-w-[400px] aspect-[3/4] rounded-[2rem] overflow-hidden shadow-2xl bg-white/20">
                <Image 
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/8e8d2229-4af9-4423-918e-4e2d30a6aef9/mentor2-1767825248382.png?width=8000&height=8000&resize=contain"
                  alt="Manas Pimple"
                  fill
                  className="object-cover object-top"
                />
              </div>
            </div>

            {/* Testimonial Text */}
            <div className="w-full md:w-2/3">
              <div className="mb-6 md:mb-10">
                <h2 className="text-black text-[40px] md:text-[80px] font-black uppercase leading-none tracking-tighter mb-2">
                  MANAS PIMPLE
                </h2>
                <h3 className="text-black text-[20px] md:text-[36px] font-light uppercase tracking-[0.1em]">
                  MUMBAI, MAHARASHTRA
                </h3>
              </div>
              
              <div className="max-w-xl">
                <p className="text-black font-bold text-[16px] md:text-[22px] leading-relaxed mb-8">
                  Trading Powerhouse, under the guidance of Mrs. Leena Pimple, has been a great support in my stock trading journey. Her clear strategies, disciplined approach, and practical market insights helped me trade with more confidence and consistency. The guidance is simple, structured, and focused on long-term success. Highly recommended for anyone serious about swing trading.
                </p>
                
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-6 h-6 fill-black text-black" />)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
