'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/components/language-provider';
import { Language } from '@/lib/translations';
import { cn } from '@/lib/utils';
import { Menu, X, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: t.nav.assortment, href: '/assortiment' },
    { label: t.nav.about, href: '#about' },
    { label: t.nav.location, href: '#location' },
  ];

  const languages: { code: Language; label: string }[] = [
    { code: 'nl', label: 'NL' },
    { code: 'en', label: 'EN' },
    { code: 'de', label: 'DE' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-foreground/5 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-8">
        
        {/* Logo (Left) */}
        <div className="flex items-center">
          <a href="/" className="group flex items-center gap-2 text-xs font-black uppercase tracking-tight text-[#111]">
            <span className="h-4 w-1 bg-[#C46A2D]" />
            Tabak Molenstraat
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-10 text-[11px] font-black uppercase tracking-widest text-[#111]">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="transition-all hover:text-[#C46A2D] hover:tracking-[0.2em]">
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Side: Language (Desktop) + Hamburger (Mobile) */}
        <div className="flex items-center gap-6">
          {/* Language Selector (Desktop) */}
          <div className="hidden md:flex items-center gap-4">
            {languages.map((lang, idx) => (
              <React.Fragment key={lang.code}>
                <button
                  onClick={() => setLanguage(lang.code)}
                  className={cn(
                    "text-[10px] font-black tracking-[0.2em] transition-all hover:text-[#C46A2D]",
                    language === lang.code ? "text-[#C46A2D]" : "text-[#555]"
                  )}
                >
                  {lang.label}
                </button>
                {idx < languages.length - 1 && (
                  <span className="text-[8px] text-[#ddd]">|</span>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Hamburger Menu Trigger */}
          <button 
            className="flex h-10 w-10 items-center justify-center rounded-full bg-[#111]/5 md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring' as const, damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[100] h-screen w-full bg-[#fafaf8] p-8 md:hidden"
          >
            <div className="flex h-full flex-col">
              <div className="flex items-center justify-between pb-12 border-b border-[#111]/5">
                 <a href="/" className="flex items-center gap-2 text-xs font-black uppercase tracking-tight text-[#111]" onClick={() => setIsOpen(false)}>
                  <span className="h-4 w-1 bg-[#C46A2D]" />
                  Tabak Molenstraat
                </a>
                <button 
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-[#111]/5"
                  onClick={() => setIsOpen(false)}
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <nav className="mt-16 flex flex-col space-y-8">
                {navLinks.map((link, idx) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 + 0.2 }}
                    onClick={() => setIsOpen(false)}
                    className="group flex items-center justify-between text-3xl font-black uppercase tracking-tighter text-[#111]"
                  >
                    <span>{link.label}</span>
                    <span className="h-2 w-2 rounded-full bg-[#C46A2D] opacity-0 transition-opacity group-hover:opacity-100" />
                  </motion.a>
                ))}
              </nav>

              <div className="mt-auto flex flex-col gap-8 pb-12 border-t border-[#111]/5 pt-12">
                <div className="flex items-center gap-3">
                  <Globe className="h-4 w-4 text-[#C46A2D]" />
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#111]/60">Language Select</span>
                </div>
                <div className="flex flex-wrap gap-6">
                   {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code);
                        setIsOpen(false);
                      }}
                      className={cn(
                        "text-xl font-black tracking-tight transition-all",
                        language === lang.code ? "text-[#C46A2D]" : "text-[#111]/40"
                      )}
                    >
                      {lang.label === 'NL' ? 'Nederlands' : lang.label === 'EN' ? 'English' : 'Deutsch'}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
