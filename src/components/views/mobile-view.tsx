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
    </main>
  );
}
