'use client';

import React from 'react';
import { useLanguage } from '@/components/language-provider';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export function MobileCategoryGrid() {
  const { t, language } = useLanguage();

  const categories = [
    {
      id: 'sigaretten',
      index: '01',
      title: t.categories.sigaretten.title,
      desc: t.categories.sigaretten.desc,
      image: '/assets/shop_storefront_highres.jpg'
    },
    {
      id: 'vapes',
      index: '02',
      title: t.categories.vapes.title,
      desc: t.categories.vapes.desc,
      image: '/assets/category_staff_cigarettes.jpg'
    },
    {
      id: 'tabak',
      index: '03',
      title: t.categories.tabak.title,
      desc: t.categories.tabak.desc,
      image: '/assets/category_staff_cigarettes.jpg'
    },
    {
      id: 'accessoires',
      index: '04',
      title: t.categories.accessoires.title,
      desc: t.categories.accessoires.desc,
      image: '/assets/shop_storefront_highres.jpg'
    },
  ];

  return (
    <section className="bg-[#fafaf8] py-20 px-6">
      <div className="mb-12 border-l-4 border-[#C46A2D] pl-6">
        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#555]">
          {t.categories.title}
        </span>
        <h2 className="mt-4 text-[2.5rem] font-black uppercase leading-[0.9] tracking-tighter text-[#111]">
          {t.categories.gridTitle}
        </h2>
      </div>

      <div className="flex flex-col gap-8 sm:gap-12">
        {categories.map((category, idx) => (
          <motion.a
            key={category.id}
            href={`/assortiment#${category.id}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="group relative flex flex-col"
          >
            {/* Minimalist Typographic Header - More Compact */}
            <div className="relative w-full overflow-hidden border border-[#111]/10 bg-white p-5 transition-all duration-700 group-active:bg-[#111]/5">
              <div className="flex flex-col items-center text-center">
                <span className="text-[7px] font-black uppercase tracking-[0.4em] text-[#C46A2D] mb-3 block">Premium_{category.index}</span>
                <h3 className="text-xl font-black uppercase tracking-tighter text-[#111]">{category.title}</h3>
                
                <div className="mt-5 flex h-9 w-9 items-center justify-center rounded-full border border-[#111]/10 bg-[#fafaf8] text-[#111] shadow-sm transition-transform duration-500 group-active:scale-110">
                  <ArrowUpRight className="h-4 w-4" />
                </div>
              </div>
            </div>

            {/* Description Area - Tighter Spacing */}
            <div className="mt-4 px-2">
              <p className="text-[11px] font-bold leading-relaxed text-[#666]">
                {category.desc}
              </p>
              <div className="mt-4 flex items-center gap-4 opacity-40">
                 <div className="h-px grow bg-[#111]/10" />
                 <span className="text-[9px] font-black uppercase tracking-widest text-[#111]">
                   {language === 'nl' ? 'ONTDEK' : language === 'en' ? 'DISCOVER' : 'ENTDECKEN'}
                 </span>
                 <div className="h-px grow bg-[#111]/10" />
              </div>
            </div>

            {/* High-fidelity numeric accent - More Subtle */}
            <div className="absolute top-0 right-0 -z-10 opacity-[0.02] select-none pointer-events-none p-2">
              <span className="text-[80px] font-black leading-none text-[#111]">{category.index}</span>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
