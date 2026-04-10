'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/components/language-provider';

export function Footer() {
  const { t, language } = useLanguage();

  return (
    <footer className="bg-[#111111] py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 gap-12 border-b border-white/10 pb-12 lg:grid-cols-4 lg:gap-24">
          {/* Business Info */}
          <div className="lg:col-span-2">
            <h2 className="text-sm font-black uppercase tracking-tighter text-white">
              Tabak Molenstraat
            </h2>
            <p className="mt-4 max-w-sm text-[12px] font-bold leading-relaxed text-zinc-400">
              {t.footer.desc}
            </p>
          </div>

          {/* Practical Links */}
          <div className="grid grid-cols-2 gap-8 lg:col-span-2">
            <div>
              <h3 className="mb-4 text-[10px] font-black uppercase tracking-tight text-[#C46A2D]">
                {t.footer.links.collection}
              </h3>
              <ul className="space-y-3">
                <li><Link href="/assortiment#sigaretten" className="text-[11px] font-bold text-white transition-colors hover:text-[#C46A2D]">
                  {t.footer.links.cigarettes}
                </Link></li>
                <li><Link href="/assortiment#vapes" className="text-[11px] font-bold text-white transition-colors hover:text-[#C46A2D]">
                  {t.footer.links.vapes}
                </Link></li>
                <li><Link href="/assortiment#tabak" className="text-[11px] font-bold text-white transition-colors hover:text-[#C46A2D]">
                  {t.footer.links.tobacco}
                </Link></li>
                <li><Link href="/assortiment#accessoires" className="text-[11px] font-bold text-white transition-colors hover:text-[#C46A2D]">
                  {t.footer.links.accessories}
                </Link></li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-[10px] font-black uppercase tracking-tight text-[#C46A2D]">
                {t.footer.links.info}
              </h3>
              <ul className="space-y-3">
                <li><a href="#about" className="text-[11px] font-bold text-white transition-colors hover:text-[#C46A2D]">
                  {t.footer.links.about}
                </a></li>
                <li><a href="#location" className="text-[11px] font-bold text-white transition-colors hover:text-[#C46A2D]">
                  {t.footer.links.location}
                </a></li>
                <li><a href="#location" className="text-[11px] font-bold text-white transition-colors hover:text-[#C46A2D]">
                  {t.footer.links.hours}
                </a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col justify-between gap-8 border-t border-white/5 pt-8 sm:flex-row sm:items-center">
          <div className="flex flex-col gap-4">
            <p className="text-[10px] font-black uppercase tracking-tight text-zinc-500">
              {t.footer.copy}
            </p>
            <p className="max-w-md text-[10px] font-bold leading-relaxed text-zinc-600">
              {t.assortmentPage.legalNotice}
            </p>
          </div>
          <div className="flex items-center gap-6 text-[10px] font-black uppercase tracking-widest text-zinc-700">
            <span>Nijmegen Centrum</span>
            <span>Est. 1968</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
