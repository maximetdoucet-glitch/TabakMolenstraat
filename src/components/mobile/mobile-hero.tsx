'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ButtonColorful } from '@/components/ui/button-colorful';
import { cn } from '@/lib/utils';

interface MobileHeroProps {
  tagline: string;
  title: string;
  description: string;
  ctaText: string;
}

export function MobileHero({ tagline, title, description, ctaText }: MobileHeroProps) {
  return (
    <section className="relative flex min-h-[100dvh] w-full flex-col items-center justify-between bg-[#fafaf8] px-6 pb-20 pt-16 text-center overflow-hidden">
      {/* Background Image - Higher Fidelity framing for Mobile */}
      <div className="absolute inset-0 z-0 overflow-hidden opacity-[0.25] grayscale">
        <Image
          src="/assets/category_staff_cigarettes.jpg"
          alt="Boutique Atmosphere"
          fill
          className="object-cover object-top"
          priority
        />
        {/* Modern radial gradient for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-[#fafaf8]" />
      </div>

      {/* Header Area - Brought Up even higher */}
      <div className="relative z-10 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-3 mb-5"
        >
          <span className="h-px w-6 bg-[#C46A2D]" />
          <span className="text-[8px] font-black uppercase tracking-[0.4em] text-[#C46A2D]">
            {tagline}
          </span>
          <span className="h-px w-6 bg-[#C46A2D]" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="w-full text-[9vw] font-black uppercase leading-[0.8] tracking-tighter text-[#111] whitespace-nowrap"
        >
          {title.split(' ')[0]}<br />
          <span className="text-transparent" style={{ WebkitTextStroke: "1px #111" }}>
            {title.split(' ').slice(1).join(' ')}
          </span>
        </motion.h1>
      </div>

      {/* Extreme Bottom Area - Anchored at the absolute bottom reach */}
      <div className="relative z-10 flex flex-col items-center mt-auto">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-8 max-w-[240px] text-[10px] font-bold leading-relaxed tracking-[0.2em] text-[#666]"
        >
          {description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="w-full max-w-[280px]"
        >
          <ButtonColorful 
            label={ctaText}
            onClick={() => {
              const el = document.getElementById('location');
              if (el) {
                const offset = 80;
                const bodyRect = document.body.getBoundingClientRect().top;
                const elementRect = el.getBoundingClientRect().top;
                const elementPosition = elementRect - bodyRect;
                const offsetPosition = elementPosition - offset;
                window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
              }
            }}
            className="w-full h-14 text-[9px]"
          />
        </motion.div>
      </div>

      {/* Aesthetic Accents - Subtler scaling */}
      <div className="absolute bottom-32 right-[-20px] opacity-[0.02] pointer-events-none select-none rotate-90">
         <span className="text-[80px] font-black leading-none tracking-tighter text-[#111]">EST 68</span>
      </div>
    </section>
  );
}
