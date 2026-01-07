"use client";

import React from 'react';

export default function FAQ() {
  const faqs = [
    { 
      question: "1. Who is this Masterclass for?", 
      answer: "This Masterclass is designed for beginners, aspiring traders, intermediate traders, working professionals, investors, homemakers and anyone who wants to trade confidently using rule-based strategies. No prior experience is required." 
    },
    { 
      question: "2. Do I need any prior knowledge of trading?", 
      answer: "No. The Masterclass starts from the basics and gradually moves into powerful technical analysis concepts, price action, and practical strategies suitable for beginners." 
    },
    { 
      question: "3. What will I learn in the Masterclass?", 
      answer: "You will learn: Price Action using Support & Resistance, Marking high-probability trading zones, Multiple Time Frame Analysis, Trend & Momentum Analysis, Risk-to-Reward Ratio, Candlestick & Chart Pattern Analysis, Technical Indicators, Trading Psychology, Intraday & Swing Trading Strategies." 
    },
    { 
      question: "4. Is this Masterclass live or recorded?", 
      answer: "It is a LIVE 2-hour virtual Masterclass, so you can interact and ask questions in real time." 
    },
    { 
      question: "5. What language will the session be conducted in?", 
      answer: "The Masterclass will be conducted in Hindi + English for easy understanding." 
    },
    { 
      question: "6. What is the duration of the Masterclass?", 
      answer: "The session is 2 hours long, packed with practical learning, strategies, and examples." 
    },
    { 
      question: "7. Will I get access to recordings?", 
      answer: "No, we expect you to be there and experience the learning in real-time." 
    },
    { 
      question: "8. Can I join if I have a full-time job?", 
      answer: "Absolutely. The Masterclass is ideal for working professionals looking to build a side income through structured, low-risk trading strategies." 
    },
    { 
      question: "9. What if I am trading but still facing losses?", 
      answer: "This Masterclass will help you identify the mistakes causing losses and teach you rule-based frameworks to trade with discipline and confidence." 
    }
  ];

  return (
    <section className="section-spacing bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-black text-[32px] md:text-[64px] font-black text-center mb-10 md:mb-16 uppercase leading-tight tracking-tighter">
          Frequently Asked Questions
        </h2>

        <div className="max-w-4xl mx-auto space-y-8 md:space-y-12">
          {faqs.map((faq, idx) => (
            <div key={idx} className="space-y-3 md:space-y-4">
              <h3 className="text-black font-black text-[18px] md:text-[24px] leading-tight">
                {faq.question}
              </h3>
              <p className="text-black/70 text-[14px] md:text-[18px] font-bold leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
