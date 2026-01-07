"use client";

import React, { useState } from 'react';
import { Plus, Minus, MessageCircle, ArrowRight } from 'lucide-react';

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-slate-100 last:border-0 py-4">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between text-left group gap-4"
      >
        <span className={`text-sm md:text-base font-bold transition-colors ${isOpen ? 'text-brand-gold' : 'text-brand-navy'}`}>
          {question}
        </span>
        <div className={`flex-shrink-0 w-6 h-6 rounded-md flex items-center justify-center transition-all ${isOpen ? 'bg-brand-gold text-brand-navy' : 'bg-slate-50 text-slate-400'}`}>
          {isOpen ? <Minus className="w-3 h-3" /> : <Plus className="w-3 h-3" />}
        </div>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100 mt-3' : 'max-h-0 opacity-0'}`}>
        <p className="text-slate-500 text-xs md:text-sm leading-relaxed pl-2 border-l-2 border-brand-gold/20">
          {answer}
        </p>
      </div>
    </div>
  );
};

export default function FAQ() {
  const faqs = [
    { question: "Who is this Masterclass for?", answer: "Designed for beginners, aspiring traders, professionals, and homemakers looking for rule-based strategies." },
    { question: "Do I need prior knowledge?", answer: "No. We start from the absolute basics and move to advanced technical concepts." },
    { question: "Is this session live?", answer: "Yes, it is a LIVE 2-hour interactive virtual session." },
    { question: "What language is used?", answer: "The session is conducted in a mix of Hindi + English for clarity." },
    { question: "Will I get recordings?", answer: "No, this is a real-time live experience to ensure maximum focus." },
    { question: "Do I need large capital?", answer: "No. You can start with small, risk-managed capital as you learn." }
  ];

  return (
    <section className="section-spacing bg-white">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          <div>
            <div className="text-brand-gold text-[10px] font-bold uppercase tracking-widest mb-2">FAQ</div>
            <h2 className="text-brand-navy text-2xl md:text-4xl mb-4 leading-tight">Got Questions? <br className="hidden md:block" /> We Have Answers</h2>
            <p className="text-slate-500 text-sm mb-6 max-w-sm">Everything you need to know about the Masterclass before you dive in.</p>
            
            <div className="bg-brand-navy p-6 rounded-2xl text-white">
              <MessageCircle className="w-8 h-8 text-brand-gold mb-4" />
              <h3 className="text-base font-bold mb-2">Still Have Doubts?</h3>
              <p className="text-slate-400 text-xs mb-6">Our team is ready to clear any doubts before you join.</p>
              <a href="#register" className="btn-primary w-full text-sm py-3 px-4">Contact Support</a>
            </div>
          </div>
          
          <div className="bg-slate-50 rounded-2xl p-6 md:p-8 border border-slate-100">
            <div className="divide-y divide-slate-100">
              {faqs.map((faq, idx) => (
                <FAQItem key={idx} {...faq} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
