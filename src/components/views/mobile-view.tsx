'use client';

import React from 'react';
import { MobileNav } from '@/components/mobile/mobile-nav';
import { MobileHero } from '@/components/mobile/mobile-hero';
import { MobileCategoryGrid } from '@/components/mobile/mobile-category-grid';
import { AboutSection } from '@/components/about-section';
import { AboutLocation } from '@/components/about-location';
import { Footer } from '@/components/footer';
import { useLanguage } from '@/components/language-provider';

export function MobileView() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-[#fafaf8] overflow-x-hidden">
      {/* High-Visibility Sync Verification Banner */}
      <div className="bg-red-600 py-3 text-center sticky top-0 z-[200]">
        <span className="text-[10px] font-black uppercase tracking-[0.5em] text-white animate-pulse">SYNC VERIFIED - v6.0-RED</span>
      </div>
      
      {/* Mobile Navigation */}
      <MobileNav />

      {/* Hero Section - Fresh High-Impact Mobile Design */}
      <MobileHero 
        tagline={t.hero.tagline}
        title={t.hero.title}
        description={t.hero.subtitle}
        ctaText={t.hero.cta}
      />

      {/* Category Grid - Immersive Mobile Layout */}
      <MobileCategoryGrid />

      {/* About Section - Using existing but refined for mobile */}
      <AboutSection />

      {/* Location Section */}
      <AboutLocation />

      {/* Standard Footer */}
      <Footer />

      {/* Deployment Confirmation Badge (Temporary) */}
      <div className="bg-[#111] py-2 text-center">
        <span className="text-[8px] font-black uppercase tracking-[0.5em] text-white/20">Boutique Deployment v4.0-ULTIMATE</span>
      </div>
    </main>
  );
}
