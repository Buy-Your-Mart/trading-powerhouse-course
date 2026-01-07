"use client";

import React from 'react';
import Image from 'next/image';
import { Calendar, Clock, Zap } from 'lucide-react';

const TopBanner: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-[1000] bg-white border-b border-gray-100 shadow-sm">
      {/* Top Notice Bar */}
      <div className="bg-brand-yellow py-2 md:py-3">
        <div className="container mx-auto px-4 flex justify-center items-center">
          <div className="inline-flex items-center bg-white rounded-full px-3 md:px-6 py-1 md:py-2 gap-2 md:gap-4 shadow-sm max-w-full">
            <span className="flex items-center gap-1.5 bg-brand-red text-white px-2 md:px-3 py-0.5 md:py-1 rounded-full text-[10px] md:text-xs font-black">
              <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse"></span>
              LIVE
            </span>
            <span className="text-[10px] md:text-sm font-black text-black whitespace-nowrap overflow-hidden text-ellipsis">
              Stock Market Trading Masterclass 2026 | January 24, 2026
            </span>
          </div>
        </div>
      </div>

      {/* Logo & CTA Row */}
      <header className="py-3 md:py-4">
        <div className="container mx-auto px-4 flex items-center justify-between">
            <div className="flex-shrink-0">
              <Image 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/8e8d2229-4af9-4423-918e-4e2d30a6aef9/logo-1767825248382.png?width=8000&height=8000&resize=contain"
                alt="Trading Powerhouse Logo"
                width={220}
                height={55}
                className="h-12 md:h-20 w-auto object-contain transition-transform hover:scale-105"
                priority
              />
            </div>
          
          <div className="flex items-center gap-3 md:gap-6">
            <div className="hidden sm:flex flex-col items-end leading-none">
              <div className="flex items-center gap-1.5">
                <span className="text-black font-black text-xl md:text-3xl">₹299</span>
                <span className="text-[10px] md:text-xs text-gray-400 line-through">₹5,996</span>
              </div>
              <span className="text-[8px] md:text-[10px] text-brand-red font-black uppercase tracking-tighter bg-brand-red/10 px-1.5 py-0.5 rounded mt-1">95% OFF</span>
            </div>
            
            <a 
              href="#register" 
              className="bg-brand-red text-white px-5 md:px-10 py-2.5 md:py-4 rounded-full font-black text-[12px] md:text-base transition-all hover:scale-[1.05] active:scale-95 flex items-center gap-2 shadow-lg shadow-brand-red/20 uppercase"
            >
              <Zap className="w-3.5 h-3.5 md:w-5 md:h-5 fill-white" />
              <span>Join Now</span>
            </a>
          </div>
        </div>
      </header>
    </div>
  );
};

export default TopBanner;
