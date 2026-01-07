"use client";

import React from 'react';
import Image from 'next/image';
import { Calendar, Clock, Zap } from 'lucide-react';

const TopBanner: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-[1000]">
      <div className="bg-brand-navy border-b border-brand-gold/30 shadow-lg">
        {/* Desktop Top Bar */}
        <div className="hidden md:block bg-black/30 py-1.5">
          <div className="container mx-auto px-4 flex justify-between items-center text-[10px] uppercase tracking-widest font-bold text-white/80">
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-1.5 text-brand-gold">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-gold animate-pulse"></span>
                LIVE INTENSIVE WORKSHOP
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3 h-3 text-brand-gold" />
                January 24, 2026
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3 h-3 text-brand-gold" />
                10:30 AM IST
              </span>
            </div>
            <div className="text-brand-gold font-black">Limited Seats: Final 12 Slots Left</div>
          </div>
        </div>

          {/* Main Header */}
          <header className="py-2.5 md:py-4">
            <div className="container mx-auto px-4 flex items-center justify-between gap-4">
              <div className="flex-shrink-0">
                <Image 
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/8e8d2229-4af9-4423-918e-4e2d30a6aef9/logo-1767825248382.png?width=8000&height=8000&resize=contain"
                  alt="Trading Powerhouse Logo"
                  width={180}
                  height={45}
                  className="h-10 md:h-14 w-auto brightness-0 invert"
                  priority
                />
              </div>
              
              <div className="flex items-center gap-2.5 md:gap-6">
                <div className="flex flex-col items-end leading-none">
                  <div className="flex items-center gap-1.5">
                    <span className="text-white font-black text-xl md:text-3xl">₹299</span>
                    <span className="text-[10px] md:text-xs text-white/40 line-through">₹5,996</span>
                  </div>
                  <span className="text-[7px] md:text-[10px] text-brand-gold font-black tracking-tighter bg-brand-gold/20 px-1.5 py-0.5 rounded mt-1 uppercase">95% OFF Today</span>
                </div>
                
                <a 
                  href="#register" 
                  className="bg-brand-gold text-brand-navy px-4 md:px-8 py-2.5 md:py-3.5 rounded-lg font-black text-[11px] md:text-sm transition-all hover:scale-[1.02] active:scale-95 flex items-center gap-2 shadow-gold"
                >
                  <Zap className="w-3.5 h-3.5 md:w-4 md:h-4 fill-brand-navy" />
                  <span className="uppercase tracking-tight">Join Now</span>
                </a>
              </div>
            </div>
          </header>

        {/* Mobile Info Bar - Single Row, Minimalist */}
        <div className="md:hidden bg-black/40 py-1.5 border-t border-white/5 overflow-hidden whitespace-nowrap">
          <div className="container px-4 flex items-center justify-center gap-3 text-[8px] font-bold text-white/80 uppercase tracking-tighter">
            <span className="text-brand-gold flex items-center gap-1">
              <span className="h-1 w-1 rounded-full bg-brand-gold"></span>
              LIVE JAN 24
            </span>
            <span className="w-[1px] h-2 bg-white/20"></span>
            <span className="flex items-center gap-1">
              <Clock className="w-2.5 h-2.5 text-brand-gold" />
              10:30 AM IST
            </span>
            <span className="w-[1px] h-2 bg-white/20"></span>
            <span className="text-brand-gold">LIMITED SLOTS</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBanner;
