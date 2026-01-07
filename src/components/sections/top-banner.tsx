"use client";

import React from 'react';
import { Zap } from 'lucide-react';

const TopBanner: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-[1000] bg-white border-b border-slate-100 shadow-sm">
      <div className="bg-slate-900 py-2 md:py-2.5">
        <div className="container mx-auto px-4 flex justify-center items-center">
          <div className="inline-flex items-center gap-2 md:gap-4 max-w-full">
            <span className="flex items-center gap-1.5 bg-emerald-500 text-white px-2 md:px-3 py-0.5 md:py-1 rounded-full text-[10px] md:text-xs font-bold">
              <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse"></span>
              LIVE
            </span>
            <span className="text-[10px] md:text-sm font-medium text-slate-300 whitespace-nowrap overflow-hidden text-ellipsis">
              Stock Market Trading Masterclass 2026 | January 24, 2026
            </span>
          </div>
        </div>
      </div>

      <header className="py-2.5 md:py-3">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex-shrink-0">
            <img 
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/8e8d2229-4af9-4423-918e-4e2d30a6aef9/logo-1767825248382.png?width=8000&height=8000&resize=contain"
              alt="Trading Powerhouse Logo"
              width={220}
              height={55}
              className="h-8 md:h-12 w-auto object-contain"
            />
          </div>
          
          <div className="flex items-center gap-3 md:gap-6">
            <div className="hidden sm:flex flex-col items-end leading-none">
              <div className="flex items-center gap-1.5">
                <span className="text-slate-900 font-black text-xl md:text-2xl">₹299</span>
                <span className="text-xs text-slate-400 line-through">₹1999</span>
              </div>
              <span className="text-[9px] text-emerald-600 font-bold uppercase tracking-tight">85% OFF</span>
            </div>
            
            <a 
              href="#register" 
              className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 md:px-8 py-2 md:py-3 rounded-full font-bold text-[11px] md:text-sm transition-all hover:scale-105 flex items-center gap-1.5 shadow-lg shadow-emerald-500/20"
            >
              <Zap className="w-3.5 h-3.5 md:w-4 md:h-4" />
              <span>Join Now</span>
            </a>
          </div>
        </div>
      </header>
    </div>
  );
};

export default TopBanner;
