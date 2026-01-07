"use client";

import React from 'react';
import Image from 'next/image';
import { Mail, Phone, Instagram, Facebook, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-navy pt-8 pb-20 md:pb-8 text-white border-t border-brand-gold/20">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="md:col-span-1">
            <Image 
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/8e8d2229-4af9-4423-918e-4e2d30a6aef9/logo-1767825248382.png?width=8000&height=8000&resize=contain"
              alt="Trading Powerhouse"
              width={160}
              height={50}
              className="h-10 md:h-12 w-auto brightness-0 invert mb-3"
            />
            <p className="text-white/40 text-[10px] md:text-xs leading-relaxed max-w-xs uppercase font-bold tracking-tight">
              Empowering traders with institutional logic and disciplined risk management. Join the elite 1% of profitable traders.
            </p>
          </div>

          <div>
            <h4 className="text-[11px] md:text-sm font-black mb-3 uppercase tracking-widest text-brand-gold">Quick Links</h4>
            <div className="grid grid-cols-2 gap-1.5 text-white/60 text-[10px] md:text-xs font-bold uppercase">
              <a href="#" className="hover:text-brand-gold transition-colors">Privacy</a>
              <a href="#" className="hover:text-brand-gold transition-colors">Terms</a>
              <a href="#" className="hover:text-brand-gold transition-colors">Refunds</a>
              <a href="#" className="hover:text-brand-gold transition-colors">Contact</a>
            </div>
          </div>

          <div className="flex flex-col items-start md:items-end">
            <h4 className="text-[11px] md:text-sm font-black mb-3 uppercase tracking-widest text-brand-gold">Connect</h4>
            <div className="flex items-center gap-3 mb-3">
              <a href="#" className="text-white/40 hover:text-brand-gold transition-all"><Instagram className="w-4 h-4" /></a>
              <a href="#" className="text-white/40 hover:text-brand-gold transition-all"><Facebook className="w-4 h-4" /></a>
              <a href="#" className="text-white/40 hover:text-brand-gold transition-all"><Youtube className="w-4 h-4" /></a>
            </div>
            <div className="flex items-center gap-2 text-white/40 text-[9px] font-black uppercase tracking-tight">
              <Mail className="w-3 h-3 text-brand-gold" />
              support@tradingpowerhouse.in
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-white/5 text-center">
          <p className="text-white/20 text-[8px] md:text-[9px] uppercase tracking-widest mb-2 max-w-2xl mx-auto font-bold">
            Stock Market investment are subject to market risks. Please read all relevant documents before investing.
          </p>
          <p className="text-white/40 text-[9px] md:text-[10px] font-black uppercase tracking-tighter">
            © 2026 Trading Powerhouse. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
