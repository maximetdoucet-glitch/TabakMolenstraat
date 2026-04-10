'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/components/language-provider';
import { Menu, X, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Language } from '@/lib/translations';

export function MobileNav() {
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: t.nav.assortment, href: '/assortiment' },
    { label: t.nav.about, href: '#about' },
    { label: t.nav.location, href: '#location' },
  ];

  const languages: { code: Language; label: string }[] = [
    { code: 'nl', label: 'Nederlands' },
    { code: 'en', label: 'English' },
    { code: 'de', label: 'Deutsch' },
  ];

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-[110] bg-[#C46A2D] py-1 text-center">
        <span className="text-[7px] font-black uppercase tracking-[0.3em] text-white">LATEST BUILD: v5.0-FINAL-RESOLVED</span>
      </div>
      <header className="fixed top-6 left-0 right-0 z-[100] h-20 bg-[#fafaf8]/80 backdrop-blur-md px-6 flex items-center justify-between border-b border-[#111]/5">
        <a href="/" className="flex items-center gap-2">
          <span className="h-5 w-1 bg-[#C46A2D]" />
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#111]">Tabak Molenstraat</span>
        </a>

        <button 
          onClick={() => setIsOpen(true)}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-[#111] text-white shadow-lg"
        >
          <Menu className="h-4 w-4" />
        </button>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[110] bg-[#111] p-6 flex flex-col"
          >
            <div className="flex justify-between items-center mb-16">
               <div className="flex items-center gap-2">
                <span className="h-5 w-1 bg-[#C46A2D]" />
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white">Tabak Molenstraat</span>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <nav className="flex flex-col gap-6">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  onClick={() => setIsOpen(false)}
                  className="text-4xl font-black uppercase tracking-tighter text-white hover:text-[#C46A2D] transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>

            <div className="mt-auto pb-12">
              <div className="flex items-center gap-3 mb-8">
                <Globe className="h-4 w-4 text-[#C46A2D]" />
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40">Select Language</span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setLanguage(lang.code);
                      setIsOpen(false);
                    }}
                    className={cn(
                      "text-xs font-black uppercase tracking-widest p-4 text-left border transition-all",
                      language === lang.code 
                        ? "border-[#C46A2D] text-[#C46A2D] bg-[#C46A2D]/5" 
                        : "border-white/10 text-white/60 hover:border-white/20"
                    )}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
