"use client";

import React, { useState, useEffect } from 'react';
import { Timer, Zap } from 'lucide-react';

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
    <div className="fixed bottom-0 left-0 right-0 z-[1000] bg-white border-t border-slate-200 px-4 py-3 md:py-4 shadow-[0_-10px_40px_rgba(0,0,0,0.1)]">
      <div className="container mx-auto flex items-center justify-between gap-4">
        <div className="flex flex-col leading-none">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-slate-900 font-black text-xl md:text-3xl">₹299</span>
            <span className="text-xs text-slate-400 line-through">₹1999</span>
          </div>
          <div className="flex items-center gap-1.5 text-[9px] md:text-[10px] text-emerald-600 font-bold uppercase tracking-wider">
            <Timer className="w-3 h-3 animate-pulse" />
            Limited Slots Available
          </div>
        </div>

        <a 
          href="#register" 
          className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-5 md:px-10 py-2.5 md:py-4 rounded-full font-bold text-[12px] md:text-base transition-all hover:scale-105 flex items-center gap-2 shadow-lg shadow-emerald-500/20"
        >
          <Zap className="w-4 h-4 md:w-5 md:h-5" />
          <span>Register Now</span>
        </a>
      </div>
    </div>
  );
}
