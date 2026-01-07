"use client";

import React from 'react';
import TopBanner from '@/components/sections/top-banner';
import Hero from '@/components/sections/hero';
import TargetAudience from '@/components/sections/target-audience';
import BeforeAfter from '@/components/sections/before-after';
import WhyJoin from '@/components/sections/why-join';
import Mentors from '@/components/sections/mentors';
import Bonuses from '@/components/sections/bonuses';
import StudentSuccess from '@/components/sections/student-success';
import FAQ from '@/components/sections/faq';
import Footer from '@/components/sections/footer';
import StickyRegistration from '@/components/sections/sticky-registration';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <TopBanner />
      <div className="pt-[76px] md:pt-[92px]">
        <Hero />
        <TargetAudience />
        <BeforeAfter />
        <WhyJoin />
        <Mentors />
        <Bonuses />
        <StudentSuccess />
        <FAQ />
      </div>
      <Footer />
      <StickyRegistration />
    </main>
  );
}
