"use client";

import React from 'react';
import { Mail, Instagram, Facebook, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 pt-12 pb-24 md:pb-12 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          <div className="md:col-span-1">
            <img 
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/8e8d2229-4af9-4423-918e-4e2d30a6aef9/logo-1767825248382.png?width=8000&height=8000&resize=contain"
              alt="Trading Powerhouse"
              width={160}
              height={50}
              className="h-10 md:h-12 w-auto brightness-0 invert mb-4"
            />
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Empowering traders with institutional logic and disciplined risk management. Join the elite group of profitable traders.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-bold mb-4 uppercase tracking-wider text-emerald-400">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2 text-slate-400 text-sm">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
              <a href="#" className="hover:text-white transition-colors">Refund Policy</a>
              <a href="#" className="hover:text-white transition-colors">Contact Us</a>
            </div>
          </div>

          <div className="flex flex-col items-start md:items-end">
            <h4 className="text-sm font-bold mb-4 uppercase tracking-wider text-emerald-400">Connect With Us</h4>
            <div className="flex items-center gap-3 mb-4">
              <a href="#" className="bg-slate-800 p-2 rounded-full text-slate-400 hover:bg-emerald-500 hover:text-white transition-all"><Instagram className="w-4 h-4" /></a>
              <a href="#" className="bg-slate-800 p-2 rounded-full text-slate-400 hover:bg-emerald-500 hover:text-white transition-all"><Facebook className="w-4 h-4" /></a>
              <a href="#" className="bg-slate-800 p-2 rounded-full text-slate-400 hover:bg-emerald-500 hover:text-white transition-all"><Youtube className="w-4 h-4" /></a>
            </div>
            <div className="flex items-center gap-2 text-slate-400 text-sm">
              <Mail className="w-4 h-4 text-emerald-400" />
              support@tradingpowerhouse.in
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 text-center">
          <p className="text-slate-500 text-xs mb-3 max-w-2xl mx-auto leading-relaxed">
            Stock Market investments are subject to market risks. Please read all relevant documents before investing. We do not provide tips or guaranteed returns.
          </p>
          <p className="text-slate-600 text-xs">
            © 2026 Trading Powerhouse. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
