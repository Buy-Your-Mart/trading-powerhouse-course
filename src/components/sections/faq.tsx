"use client";

import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  const faqs = [
    { 
      question: "Who is this Masterclass for?", 
      answer: "This Masterclass is designed for beginners, aspiring traders, intermediate traders, working professionals, investors, homemakers and anyone who wants to trade confidently using rule-based strategies. No prior experience is required." 
    },
    { 
      question: "Do I need any prior knowledge of trading?", 
      answer: "No. The Masterclass starts from the basics and gradually moves into powerful technical analysis concepts, price action, and practical strategies suitable for beginners." 
    },
    { 
      question: "What will I learn in the Masterclass?", 
      answer: "You will learn: Price Action using Support & Resistance, Marking high-probability trading zones, Multiple Time Frame Analysis, Trend & Momentum Analysis, Risk-to-Reward Ratio, Candlestick & Chart Pattern Analysis, Technical Indicators, Trading Psychology, Intraday & Swing Trading Strategies." 
    },
    { 
      question: "Is this Masterclass live or recorded?", 
      answer: "It is a LIVE 2-hour virtual Masterclass, so you can interact and ask questions in real time." 
    },
    { 
      question: "What language will the session be conducted in?", 
      answer: "The Masterclass will be conducted in Hindi + English for easy understanding." 
    },
    { 
      question: "What is the duration of the Masterclass?", 
      answer: "The session is 2 hours long, packed with practical learning, strategies, and examples." 
    },
    { 
      question: "Will I get access to recordings?", 
      answer: "No, we expect you to be there and experience the learning in real-time." 
    },
    { 
      question: "Can I join if I have a full-time job?", 
      answer: "Absolutely. The Masterclass is ideal for working professionals looking to build a side income through structured, low-risk trading strategies." 
    },
    { 
      question: "What if I am trading but still facing losses?", 
      answer: "This Masterclass will help you identify the mistakes causing losses and teach you rule-based frameworks to trade with discipline and confidence." 
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block bg-slate-900 text-white text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full mb-6">
            Got Questions?
          </span>
          <h2 className="text-slate-900 text-[28px] md:text-[48px] font-black leading-tight tracking-tight">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className={`border rounded-2xl overflow-hidden transition-all ${openIndex === idx ? 'border-emerald-200 bg-emerald-50' : 'border-slate-200 bg-white'}`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between p-5 md:p-6 text-left"
              >
                <span className="text-slate-900 font-bold text-[15px] md:text-lg pr-4">
                  {idx + 1}. {faq.question}
                </span>
                <div className={`flex-shrink-0 rounded-full p-1 ${openIndex === idx ? 'bg-emerald-500 text-white' : 'bg-slate-100 text-slate-500'}`}>
                  {openIndex === idx ? (
                    <ChevronUp className="w-5 h-5" />
                  ) : (
                    <ChevronDown className="w-5 h-5" />
                  )}
                </div>
              </button>
              {openIndex === idx && (
                <div className="px-5 md:px-6 pb-5 md:pb-6">
                  <p className="text-slate-600 text-sm md:text-[15px] leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
