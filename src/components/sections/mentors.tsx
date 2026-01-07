"use client";

import React from 'react';
import Image from 'next/image';

const Mentors: React.FC = () => {
  return (
    <section className="section-spacing bg-brand-yellow">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
            {/* Mentors Image */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <div className="relative w-full max-w-[500px] aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl">
                <Image 
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/8e8d2229-4af9-4423-918e-4e2d30a6aef9/mentor1-1767825248382.png?width=8000&height=8000&resize=contain"
                  alt="Leena & Ajay Pimple"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Mentors Text */}
            <div className="w-full lg:w-1/2">
              <h2 className="text-black text-[36px] md:text-[64px] font-black mb-6 md:mb-10 uppercase leading-tight tracking-tighter">
                Meet Your Mentors
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
                <div className="space-y-4">
                  <h3 className="text-black font-black text-xl md:text-2xl uppercase">Leena Pimple</h3>
                  <p className="text-black font-bold text-[14px] md:text-[16px] leading-relaxed">
                    Leena brings over 20 years of experience in enterprise consulting, global solution architecture, and leadership — including key roles at IBM. An alumna of Narsee Monjee College and JBIMS, she transitioned her analytical expertise into financial markets, actively trading since 2018 and full-time since 2023.
                  </p>
                  <p className="text-black/60 font-bold text-[12px] md:text-[14px] leading-relaxed">
                    OTA (Online Trading Academy), Sharekhan Education <br />
                    Learn Price Action Trading (LPAT) <br />
                    GANN Theory
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-black font-black text-xl md:text-2xl uppercase">Ajay Pimple</h3>
                  <p className="text-black font-bold text-[14px] md:text-[16px] leading-relaxed">
                    Ajay is a seasoned trading mentor with 5+ years of teaching experience, known for simplifying complex concepts and delivering practical, results-driven strategies. He has trained hundreds of beginner and intermediate traders through structured, easy-to-apply trading systems.
                  </p>
                  <p className="text-black/60 font-bold text-[12px] md:text-[14px] leading-relaxed">
                    With 26+ years of corporate leadership in global sales and marketing, Ajay brings a unique blend of strategic thinking and market insight. He is an alumnus of VJTI, JBIMS, and IIM Ahmedabad.
                  </p>
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
