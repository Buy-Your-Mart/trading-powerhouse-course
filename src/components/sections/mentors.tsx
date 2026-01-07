"use client";

import React from 'react';
import { Star } from 'lucide-react';

const Mentors: React.FC = () => {
  const mentors = [
    {
      name: "Leena Pimple",
      role: "Price Action Expert",
      desc: "20+ years of corporate experience (Ex-IBM), mastering complex market structures.",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/8e8d2229-4af9-4423-918e-4e2d30a6aef9/mentor1-1767825248382.png?width=8000&height=8000&resize=contain"
    },
    {
      name: "Ajay Pimple",
      role: "Trading Psychologist",
      desc: "IIM Ahmedabad & JBIMS Alumnus with 15+ years of market battle-testing.",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/8e8d2229-4af9-4423-918e-4e2d30a6aef9/mentor2-1767825248382.png?width=8000&height=8000&resize=contain"
    }
  ];

  return (
    <section className="section-spacing bg-slate-50">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-8 md:mb-12">
          <div className="text-brand-gold text-[10px] font-bold uppercase tracking-widest mb-2">The Mentors</div>
          <h2 className="text-brand-navy text-2xl md:text-4xl">Learn from Industry Titans</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {mentors.map((mentor, i) => (
            <div key={i} className="bg-white border border-slate-100 p-6 rounded-2xl flex flex-col items-center text-center shadow-sm">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden mb-4 border-4 border-brand-gold/10">
                <img src={mentor.image} alt={mentor.name} className="w-full h-full object-cover" />
              </div>
              <div className="inline-block bg-brand-navy text-brand-gold px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider mb-2">
                {mentor.role}
              </div>
              <h3 className="text-xl font-bold text-brand-navy mb-2">{mentor.name}</h3>
              <p className="text-slate-500 text-xs leading-relaxed">
                {mentor.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mentors;
