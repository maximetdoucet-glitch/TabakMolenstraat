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
    <section className="relative flex min-h-[92dvh] w-full flex-col justify-between bg-[#fafaf8] p-6 pt-28">
      {/* Background Image - Higher Fidelity framing for Mobile */}
      <div className="absolute inset-0 z-0 overflow-hidden opacity-[0.25] grayscale">
        <Image
          src="/assets/category_staff_cigarettes.jpg"
          alt="Boutique Atmosphere"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Modern radial gradient for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#fafaf8] via-transparent to-[#fafaf8]" />
      </div>

      {/* Header Area */}
      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3 mb-6"
        >
          <span className="h-px w-8 bg-[#C46A2D]" />
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#C46A2D]">
            {tagline}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-6xl font-black uppercase leading-[0.8] tracking-tighter text-[#111]"
        >
          {title.split(' ')[0]}<br />
          <span className="text-transparent" style={{ WebkitTextStroke: "1px #111" }}>
            {title.split(' ').slice(1).join(' ')}
          </span>
        </motion.h1>
      </div>

      {/* Bottom Area - Anchor CTA for thumb ergonomics */}
      <div className="relative z-10 mt-auto">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-8 max-w-[280px] text-[13px] font-bold leading-relaxed tracking-widest text-[#555]"
        >
          {description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <ButtonColorful 
            label={ctaText}
            onClick={() => {
              const el = document.getElementById('location');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="w-full h-16 text-xs"
          />
        </motion.div>
      </div>

      {/* Aesthetic Accents */}
      <div className="absolute bottom-12 right-6 opacity-[0.05] pointer-events-none select-none">
         <span className="text-[120px] font-black leading-none tracking-tighter text-[#111]">EST 68</span>
      </div>
    </section>
  );
}
