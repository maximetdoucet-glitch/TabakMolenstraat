'use client';

import React from 'react';
import { useLanguage } from '@/components/language-provider';
import { motion } from 'framer-motion';
import { ShoppingBag, Zap, MapPin } from 'lucide-react';

export function AboutSection() {
  const { t, language } = useLanguage();

  const features = [
    {
      icon: MapPin,
      title: t.features.central.title,
      desc: t.features.central.desc,
    },
    {
      icon: Zap,
      title: t.features.fast.title,
      desc: t.features.fast.desc,
    },
    {
      icon: ShoppingBag,
      title: t.features.complete.title,
      desc: t.features.complete.desc,
    },
  ];

  return (
    <section id="about" className="bg-[#f5f5f3] py-16 sm:py-24 sm:snap-start sm:snap-always">
      <div className="container mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 gap-12 sm:gap-16 lg:grid-cols-12 lg:gap-24">
          {/* Main Text */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-[10px] font-black uppercase tracking-tight text-[#555]">
                {language === 'nl' ? 'ONZE WINKEL' : language === 'en' ? 'OUR SHOP' : 'UNSER GESCHÄFT'}
              </span>
              <h2 className="mt-4 text-3xl font-black uppercase tracking-tighter text-[#111] sm:text-4xl">
                {t.about.title}
              </h2>
              <div className="mt-6 h-1 w-12 bg-[#C46A2D]" />
              <p className="mt-8 text-sm sm:text-base font-bold leading-relaxed text-[#333]">
                {t.about.desc}
              </p>
            </motion.div>
          </div>

          {/* Fact List */}
          <div className="lg:col-span-5">
            <div className="space-y-6 sm:space-y-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  className="flex items-start gap-6 border-l border-[#C46A2D] pl-6"
                >
                  <div className="flex h-10 w-10 sm:h-8 sm:w-8 shrink-0 items-center justify-center border border-[#111] bg-white">
                    <feature.icon className="h-4 w-4 text-[#C46A2D]" />
                  </div>
                  <div>
                    <h3 className="mb-1 text-xs font-black uppercase tracking-tight text-[#111]">
                      {feature.title}
                    </h3>
                    <p className="text-[11px] sm:text-[12px] font-medium leading-snug text-[#555]">
                      {feature.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
