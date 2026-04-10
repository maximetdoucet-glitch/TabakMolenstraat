'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useLanguage } from '@/components/language-provider';

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-[#fafaf8] py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-12 lg:gap-24">
          
          {/* Left Side: Content */}
          <div className="order-2 lg:order-1 lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="mb-6 flex items-center gap-3">
                <div className="h-px w-8 bg-[#C46A2D]" />
                <span className="text-[11px] font-black uppercase tracking-[0.2em] text-[#555]">
                  {t.hero.tagline}
                </span>
              </div>
              
              <h1 className="text-5xl font-black uppercase leading-[0.9] tracking-tighter text-[#111] sm:text-6xl lg:text-7xl xl:text-8xl">
                Tabak<br />
                <span className="text-[#C46A2D]">Molenstraat</span>
              </h1>
              
              <p className="mt-8 max-w-xl text-base font-bold leading-relaxed text-[#333] sm:text-lg">
                {t.hero.subtitle}
              </p>
              
              <div className="mt-12 flex flex-wrap gap-6">
                <a 
                  href="#location"
                  className="group relative flex h-14 items-center bg-[#111] px-10 text-[11px] font-black uppercase tracking-tight text-white transition-all duration-300 hover:bg-[#C46A2D]"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('location')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <span className="relative z-10">{t.hero.cta}</span>
                  <div className="absolute inset-0 h-full w-full scale-0 bg-[#C46A2D] transition-transform duration-300 group-hover:scale-100" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Image */}
          <div className="order-1 lg:order-2 lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="relative aspect-[4/5] w-full overflow-hidden rounded-[2.5rem] border border-[#111]/5 bg-[#f5f5f3] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.15)] ring-1 ring-foreground/5"
            >
              <Image
                src="/assets/category_staff_cigarettes.jpg"
                alt="Tabak Molenstraat Employee"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 40vw"
                priority
              />
              {/* Decorative framing element */}
              <div className="absolute inset-0 ring-1 ring-inset ring-black/5" />
            </motion.div>
            
            {/* Minimalist Caption */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-6 flex items-center gap-2"
            >
              <div className="h-1.5 w-1.5 rounded-full bg-[#C46A2D]" />
              <span className="text-[10px] font-black uppercase tracking-widest text-[#111]">
                Nijmegen Centrum — Est. 1968
              </span>
            </motion.div>
          </div>

        </div>
      </div>
      
      {/* Background Decor */}
      <div className="absolute -right-24 top-1/4 -z-10 h-96 w-96 rounded-full bg-[#C46A2D]/5 blur-[120px]" />
      <div className="absolute -left-24 bottom-1/4 -z-10 h-96 w-96 rounded-full bg-[#111]/5 blur-[120px]" />
    </section>
  );
}
