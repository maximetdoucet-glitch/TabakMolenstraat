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

      <div className="flex flex-col gap-16">
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
            {/* Minimalist Typographic Header */}
            <div className="relative w-full overflow-hidden border border-[#111]/5 bg-white p-8 transition-all duration-700 group-active:bg-[#111]/5">
              <div className="flex flex-col items-center text-center">
                <span className="text-[8px] font-black uppercase tracking-[0.4em] text-[#C46A2D] mb-4 block">Premium_{category.index}</span>
                <h3 className="text-3xl font-black uppercase tracking-tighter text-[#111]">{category.title}</h3>
                
                <div className="mt-8 flex h-12 w-12 items-center justify-center rounded-full border border-[#111]/10 bg-[#fafaf8] text-[#111] shadow-sm transition-transform duration-500 group-active:scale-110">
                  <ArrowUpRight className="h-5 w-5" />
                </div>
              </div>
            </div>

            {/* Description Area */}
            <div className="mt-6">
              <p className="text-[12px] font-bold leading-relaxed text-[#555]">
                {category.desc}
              </p>
              <div className="mt-6 flex items-center gap-4">
                 <div className="h-px grow bg-[#111]/5" />
                 <span className="text-[10px] font-black uppercase tracking-widest text-[#111]">
                   {language === 'nl' ? 'ONTDEK COLLECTIE' : language === 'en' ? 'EXPLORE COLLECTION' : 'KOLLEKTION ENTDECKEN'}
                 </span>
                 <div className="h-px grow bg-[#111]/5" />
              </div>
            </div>

            {/* High-fidelity numeric accent */}
            <div className="absolute -top-6 -right-4 -z-10 opacity-[0.03] select-none pointer-events-none">
              <span className="text-[120px] font-black leading-none text-[#111]">{category.index}</span>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
