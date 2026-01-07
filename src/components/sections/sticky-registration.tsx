"use client";

import React, { useState, useEffect } from 'react';
import { Timer, ArrowRight, Zap } from 'lucide-react';

export default function StickyRegistration() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[1000] bg-white border-t-4 border-brand-yellow px-4 py-3 md:py-5 shadow-[0_-10px_40px_rgba(0,0,0,0.1)] animate-in slide-in-from-bottom-full duration-300">
      <div className="container mx-auto flex items-center justify-between gap-4">
        <div className="flex flex-col leading-none">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-black font-black text-2xl md:text-4xl">₹299</span>
            <span className="text-[11px] md:text-sm text-gray-400 line-through">₹5,996</span>
          </div>
          <div className="flex items-center gap-1.5 text-[9px] md:text-[11px] text-brand-red font-black uppercase tracking-widest">
            <Timer className="w-3 h-3 animate-pulse" />
            FINAL 12 SLOTS FILLING FAST
          </div>
        </div>

        <a 
          href="#register" 
          className="bg-brand-red text-white px-6 md:px-14 py-3 md:py-5 rounded-full font-black text-[13px] md:text-xl transition-all hover:scale-[1.05] active:scale-95 flex items-center gap-2 shadow-xl shadow-brand-red/20 uppercase"
        >
          <Zap className="w-4 h-4 md:w-6 md:h-6 fill-white" />
          <span>Register Now</span>
        </a>
      </div>
    </div>
  );
}
