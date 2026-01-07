"use client";

import React, { useState, useEffect } from 'react';
import { Timer, ArrowRight } from 'lucide-react';

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
    <div className="fixed bottom-0 left-0 right-0 z-[1000] bg-brand-navy border-t border-brand-gold/30 px-4 py-2.5 md:py-3.5 shadow-2xl animate-in slide-in-from-bottom-full duration-300">
      <div className="container mx-auto flex items-center justify-between gap-4">
        <div className="flex flex-col leading-none">
          <div className="flex items-center gap-2 mb-0.5">
            <span className="text-white font-black text-xl md:text-2xl">₹299</span>
            <span className="text-[10px] md:text-xs text-white/30 line-through">₹5,996</span>
          </div>
          <div className="flex items-center gap-1 text-[8px] md:text-[9px] text-brand-gold font-black uppercase tracking-tight">
            <Timer className="w-2.5 h-2.5" />
            FINAL SLOTS FILLING FAST
          </div>
        </div>

        <a 
          href="#register" 
          className="bg-brand-gold text-brand-navy px-6 md:px-10 py-2.5 md:py-3.5 rounded-lg font-black text-[12px] md:text-sm transition-all hover:scale-[1.02] active:scale-95 flex items-center gap-2 shadow-gold"
        >
          <span className="uppercase tracking-tight">Register Now</span>
          <ArrowRight className="w-4 h-4 stroke-[3]" />
        </a>
      </div>
    </div>
  );
}
