'use client';

import React, { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';

import { Navbar } from "@/components/navbar";
import { RefinedBoutiqueHero } from "@/components/ui/refined-hero";
import { CategoryGrid } from "@/components/category-grid";
import { AboutSection } from "@/components/about-section";
import { AboutLocation } from "@/components/about-location";
import { Footer } from "@/components/footer";
import { useLanguage } from "@/components/language-provider";

const SHOP_IMAGE = "/assets/category_staff_cigarettes.jpg";

export function DesktopView() {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.4], [0.95, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.35], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 0.3], [40, 0]);

  return (
    <main className="h-screen overflow-y-auto snap-y snap-mandatory scroll-smooth flex flex-col" ref={containerRef}>
      <Navbar />
      
      {/* 1. HERO SECTION */}
      <div className="snap-start snap-always">
        <RefinedBoutiqueHero 
          tagline={t.hero.tagline}
          title={t.hero.title}
          description={t.hero.subtitle}
          ctaText={t.hero.cta}
          imageSrc={SHOP_IMAGE}
        />
      </div>

      {/* 2. CATEGORY GRID */}
      <motion.div 
        style={{ scale, opacity, y }}
        className="relative z-10 snap-start snap-always"
      >
        <CategoryGrid />
      </motion.div>

      {/* 3. ABOUT SECTION */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="snap-start snap-always"
      >
        <AboutSection />
      </motion.section>

      {/* 4. LOCATION SECTION */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="snap-start snap-always"
      >
        <AboutLocation />
      </motion.section>

      {/* 5. STANDARD FOOTER */}
      <div className="snap-start snap-always">
        <Footer />
      </div>
    </main>
  );
}
