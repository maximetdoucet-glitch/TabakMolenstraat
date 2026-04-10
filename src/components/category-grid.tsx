'use client';

import React from 'react';
import { useLanguage } from '@/components/language-provider';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export function CategoryGrid({ hideHeader = false }: { hideHeader?: boolean }) {
  const { t, language } = useLanguage();

  const categories = [
    {
      id: 'sigaretten',
      index: '01',
      title: t.categories.sigaretten.title,
      desc: t.categories.sigaretten.desc,
    },
    {
      id: 'vapes',
      index: '02',
      title: t.categories.vapes.title,
      desc: t.categories.vapes.desc,
    },
    {
      id: 'tabak',
      index: '03',
      title: t.categories.tabak.title,
      desc: t.categories.tabak.desc,
    },
    {
      id: 'accessoires',
      index: '04',
      title: t.categories.accessoires.title,
      desc: t.categories.accessoires.desc,
    },
  ];

  // Parent container variants for staggered children
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 25
      } 
    },
  };

  return (
    <section id="collection" className="bg-[#fafaf8] py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-8">
        {!hideHeader && (
          <div className="mb-20 flex flex-col items-start border-l-4 border-[#C46A2D] pl-8">
            <span className="text-[11px] font-black uppercase tracking-[0.4em] text-[#555]">
              {t.categories.title}
            </span>
            <h2 className="mt-4 text-4xl font-black uppercase leading-[0.85] tracking-tighter text-[#111] sm:text-5xl lg:text-6xl">
              {t.categories.gridTitle}
            </h2>
          </div>
        )}

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {categories.map((category) => (
            <motion.div
              key={category.id}
              variants={itemVariants}
              className="h-full"
            >
              <a 
                href={`/assortiment#${category.id}`} 
                className="group relative block h-full select-none focus:outline-none"
              >
                <div className="relative flex h-full min-h-[340px] flex-col overflow-hidden border border-[#111]/5 bg-white p-6 sm:p-10 transition-all duration-700 hover:border-[#C46A2D]/40 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)]">
                  
                  {/* Category Index - Large Outlined Numeral */}
                  <div className="absolute top-0 right-0 z-0 p-4 select-none pointer-events-none opacity-[0.03] transition-all duration-700 group-hover:opacity-[0.06] group-hover:scale-110">
                    <span 
                      className="text-[120px] sm:text-[180px] font-black leading-none text-transparent"
                      style={{ WebkitTextStroke: "1px #111" }}
                    >
                      {category.index}
                    </span>
                  </div>

                  {/* Content Stack */}
                  <div className="relative z-10 flex h-full flex-col items-center text-center">
                    <div className="mb-6 sm:mb-8 flex items-center justify-center gap-4 w-full">
                      <div className="h-px grow bg-[#C46A2D]/10 transition-all duration-500 group-hover:bg-[#C46A2D]/20" />
                      <span className="text-[8px] sm:text-[9px] font-black uppercase tracking-[0.4em] text-[#C46A2D] whitespace-nowrap">
                        Retail_{category.index}
                      </span>
                      <div className="h-px grow bg-[#C46A2D]/10 transition-all duration-500 group-hover:bg-[#C46A2D]/20" />
                    </div>

                    <h3 className="mb-4 sm:mb-6 text-xl font-black uppercase leading-tight tracking-tight text-[#111] sm:text-2xl">
                      {category.title}
                    </h3>

                    <p className="max-w-[240px] text-[11px] sm:text-[12px] font-bold leading-relaxed text-[#555] transition-colors group-hover:text-[#111]">
                      {category.desc}
                    </p>

                    <div className="mt-auto pt-8 sm:pt-10 w-full flex justify-center">
                      <div className="flex items-center gap-3 border-b border-transparent pb-1 transition-all duration-300 group-hover:border-[#C46A2D]">
                        <span className="text-[10px] font-black uppercase tracking-widest text-[#111]">
                          {language === 'nl' ? 'ONTDEK' : language === 'en' ? 'DISCOVER' : 'ENTDECKEN'}
                        </span>
                        <ArrowRight className="h-3 w-3 transition-transform duration-500 group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>

                  {/* Aesthetic Corner Geometry */}
                  <div className="absolute bottom-0 right-0 h-24 w-24 translate-x-12 translate-y-12 rotate-45 border-t border-l border-[#C46A2D]/10 bg-[#fafaf8]/50 transition-all duration-700 group-hover:bg-[#C46A2D]/5" />
                  
                  {/* Subtle Grain Overlay */}
                  <div className="pointer-events-none absolute inset-0 opacity-[0.02] mix-blend-multiply" 
                    style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }} 
                  />
                  
                  {/* Interaction Border */}
                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#C46A2D] transition-all duration-700 group-hover:w-full" />
                </div>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

