'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { useLanguage } from '@/components/language-provider';
import { motion, useScroll, useSpring, useTransform, Variants } from 'framer-motion';
import { ArrowLeft, ChevronRight, Check } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export default function AssortimentPage() {
  const { t, language } = useLanguage();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [activeSection, setActiveSection] = useState('sigaretten');

  const sections = React.useMemo(() => [
    { id: 'sigaretten', data: t.assortmentPage.sections.cigarettes, index: '01' },
    { id: 'vapes', data: t.assortmentPage.sections.vapes, index: '02' },
    { id: 'tabak', data: t.assortmentPage.sections.tobacco, index: '03' },
    { id: 'accessoires', data: t.assortmentPage.sections.accessoires, index: '04' },
  ], [t]);

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = sections.map(s => document.getElementById(s.id));
      const scrollPosition = window.scrollY + 250;

      sectionElements.forEach((el, idx) => {
        if (el && scrollPosition >= el.offsetTop && scrollPosition < (el.offsetTop + el.offsetHeight)) {
          setActiveSection(sections[idx].id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 100,
        behavior: 'smooth'
      });
    }
  };

  return (
    <main className="flex min-h-screen flex-col bg-[#fafaf8] selection:bg-[#C46A2D] selection:text-white">
      <Navbar />
      
      {/* Scroll Progress Bar */}
      <motion.div 
        className="fixed top-[56px] left-0 right-0 z-[60] h-0.5 bg-[#C46A2D] origin-left"
        style={{ scaleX }}
      />

      {/* Sticky Header */}
      <section className="relative overflow-hidden border-b border-[#111]/5 pt-8 pb-8 sm:pt-20 sm:pb-16 lg:pt-24 lg:pb-20">
        <div className="container mx-auto px-4 sm:px-8">
          <Link 
            href="/"
            className="group mb-8 inline-flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] text-[#555] transition-all hover:text-[#C46A2D]"
          >
            <ArrowLeft className="h-3 w-3 transition-transform group-hover:-translate-x-1" />
            {t.assortmentPage.backToHome}
          </Link>
          
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1 className="text-[2.75rem] font-black uppercase leading-[0.9] tracking-tighter text-[#111] sm:text-8xl lg:text-[120px]">
                {t.assortmentPage.title.split(' ')[0]}<br />
                <span className="text-transparent outline-text opacity-40 px-1" style={{ WebkitTextStroke: "1px #111" }}>
                  {t.assortmentPage.title.split(' ')[1] || ''}
                </span>
              </h1>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 sm:mt-12 max-w-xl text-sm sm:text-lg font-bold leading-relaxed text-[#333]"
            >
              {t.assortmentPage.subtitle}
            </motion.p>
          </div>
        </div>
        
        {/* Background Decor */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 opacity-[0.03] select-none pointer-events-none hidden sm:block">
          <span className="text-[300px] font-black leading-none tracking-tighter text-[#111]">ASSORT</span>
        </div>
      </section>

      {/* Mobile Horizontal Navigation */}
      <div className="sticky top-16 z-40 w-full overflow-x-auto bg-[#fafaf8]/80 backdrop-blur-md border-b border-[#111]/5 lg:hidden no-scrollbar">
        <nav className="flex px-4 py-4 space-x-8 min-w-max justify-center sm:justify-start">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={cn(
                "text-[10px] font-black uppercase tracking-widest transition-colors whitespace-nowrap",
                activeSection === section.id ? "text-[#C46A2D]" : "text-[#111]/40"
              )}
            >
              {section.data.title}
            </button>
          ))}
        </nav>
      </div>

      {/* Main Content with Sticky Nav */}
      <div className="relative flex-grow">
        <div className="container mx-auto flex px-4 sm:px-8">
          
          {/* Side Navigation (Desktop) */}
          <aside className="sticky top-40 hidden h-fit w-64 shrink-0 lg:block">
            <nav className="flex flex-col space-y-6">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={cn(
                    "group flex items-center gap-4 text-left transition-all duration-300",
                    activeSection === section.id ? "translate-x-2" : "opacity-40 grayscale hover:opacity-100 hover:grayscale-0"
                  )}
                >
                  <span className={cn(
                    "text-[10px] font-black uppercase tracking-widest transition-colors",
                    activeSection === section.id ? "text-[#C46A2D]" : "text-[#111]"
                  )}>
                    {section.index}
                  </span>
                  <span className={cn(
                    "text-xs font-black uppercase tracking-widest transition-colors",
                    activeSection === section.id ? "text-[#111]" : "text-[#555]"
                  )}>
                    {section.data.title}
                  </span>
                  {activeSection === section.id && (
                    <motion.div 
                      layoutId="navIndicator"
                      className="h-1 w-1 rounded-full bg-[#C46A2D]"
                    />
                  )}
                </button>
              ))}
            </nav>
          </aside>

          {/* Assortment Sections */}
          <div className="flex-grow space-y-24 sm:space-y-48 py-12 sm:py-32 lg:pl-20">
            {sections.map((section) => (
              <section key={section.id} id={section.id} className="scroll-mt-32 sm:scroll-mt-40 relative">
                
                {/* Section Header */}
                <div className="mb-12 sm:mb-20 flex flex-col items-start border-l-4 border-[#C46A2D] pl-6 sm:pl-8">
                  <motion.span 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-[10px] sm:text-[11px] font-black uppercase tracking-[0.4em] text-[#555]"
                  >
                    Category {section.index}
                  </motion.span>
                  <motion.h2 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="mt-3 sm:mt-4 text-3xl font-black uppercase tracking-tighter text-[#111] sm:text-5xl lg:text-6xl"
                  >
                    {section.data.title}
                  </motion.h2>
                  <motion.p 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="mt-4 sm:mt-6 max-w-xl text-sm sm:text-base font-bold text-[#333]"
                  >
                    {section.data.desc}
                  </motion.p>
                </div>

                {/* Spacing Refinement (Removed Image) */}
                <div className="mb-12" />

                {/* Grid */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
                  {section.data.brands.map((brand: string, idx: number) => (
                    <BrandCard key={brand} brand={brand} index={idx} />
                  ))}
                </div>

                {/* Large Background Index */}
                <div className="absolute -top-6 -left-6 sm:-top-12 sm:-left-12 -z-10 select-none pointer-events-none opacity-[0.02] sm:opacity-[0.03]">
                  <span className="text-[100px] sm:text-[180px] font-black leading-none text-[#111]">{section.index}</span>
                </div>
              </section>
            ))}
          </div>

        </div>
      </div>

      <Footer />
    </main>
  );
}

function BrandLogo({ brand }: { brand: string }) {
  // Purely typographic logo presentation for legal compliance - Ultra-Premium micro-scaling
  return (
    <div className="flex h-full w-full items-center justify-center">
       <span className="text-xs font-black uppercase tracking-[0.5em] text-[#111]">
         {brand}
       </span>
    </div>
  );
}

function BrandCard({ brand, index }: { brand: string; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ 
        delay: index * 0.05, 
        duration: 0.5,
        type: "spring" as const,
        stiffness: 100,
        damping: 20
      }}
      whileHover={{ y: -5 }}
      className="group relative flex w-full max-w-[340px] mx-auto flex-col overflow-hidden border border-[#111]/10 bg-white transition-all duration-500 hover:border-[#111] hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.06)]"
    >
      {/* Visual Area - Typographic & Compliant - Micro Layout */}
      <div className="flex h-20 sm:h-24 w-full items-center justify-center bg-[#fafaf8]/50 p-4 transition-colors group-hover:bg-white border-b border-[#111]/5">
        <BrandLogo brand={brand} />
      </div>

      <div className="z-10 flex flex-col justify-between p-5 pt-4 flex-grow">
        <div className="flex flex-col">
          <div className="mb-3 h-1 w-5 bg-[#C46A2D] transition-all duration-500 group-hover:w-8" />
          <h3 className="text-[9px] font-black uppercase tracking-[0.2em] text-[#000] opacity-80">
            {brand}
          </h3>
          <div className="mt-4 flex items-center gap-2">
            <div className="flex h-4 w-4 items-center justify-center rounded-full bg-green-50 text-green-600">
              <Check className="h-2.5 w-2.5" />
            </div>
            <span className="text-[10px] font-black uppercase tracking-widest text-green-600/80">
              In Voorraad
            </span>
          </div>
        </div>
        <div className="mt-8 flex items-center justify-between">
            <span className="text-[10px] font-bold text-[#111]/20 tracking-tighter">NIJMEGEN_RETAIL_STOCK</span>
            <ChevronRight className="h-4 w-4 translate-x-4 text-[#111] opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-40" />
        </div>
      </div>

      {/* Stylized Background Letter */}
      <div className="absolute top-2 right-2 z-0 select-none pointer-events-none opacity-[0.02] transition-all duration-700 group-hover:opacity-[0.04]">
        <span className="text-6xl font-black leading-none text-[#111]">
          {brand.charAt(0)}
        </span>
      </div>
      
      {/* Interactive Border Bottom */}
      <div className="absolute bottom-0 left-0 h-1 w-full translate-y-full bg-[#111] transition-transform duration-500 group-hover:translate-y-0" />
    </motion.div>
  );
}

