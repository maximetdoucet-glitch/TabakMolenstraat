'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/components/language-provider';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

export function AboutLocation() {
  const { t, language } = useLanguage();

  return (
    <section id="location" className="bg-background py-20 sm:py-32 sm:snap-start sm:snap-always">
      <div className="container mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-start lg:gap-24 max-w-7xl mx-auto">
          
          {/* Information Side (Left) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Header with orange bar */}
            <div className="mb-12 border-l-4 border-[#C46A2D] pl-8">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#555]">
                {language === 'nl' ? 'CONTACT & LOCATIE' : language === 'en' ? 'CONTACT & LOCATION' : 'KONTAKT & STANDORT'}
              </span>
              <h2 className="mt-4 text-3xl font-black uppercase tracking-tighter text-[#111] sm:text-4xl lg:text-5xl">
                {t.location.title}
              </h2>
            </div>

            {/* Side-by-Side Information Blocks */}
            <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-16">
              {/* Visit & Contact Column */}
              <div className="space-y-12">
                <div>
                  <h3 className="mb-6 text-[10px] font-black uppercase tracking-[0.2em] text-[#555]">
                    {language === 'nl' ? 'BEZOEK' : language === 'en' ? 'VISIT' : 'BESUCH'}
                  </h3>
                  <div className="flex items-start gap-4">
                    <MapPin className="mt-1 h-4 w-4 shrink-0 text-[#C46A2D]" />
                    <p className="text-base font-bold leading-relaxed text-[#111]">
                      Molenstraat 44<br />
                      6511 HG Nijmegen
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="mb-6 text-[10px] font-black uppercase tracking-[0.2em] text-[#555]">
                    {language === 'nl' ? 'CONTACT' : language === 'en' ? 'CONTACT' : 'KONTAKT'}
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <Phone className="h-4 w-4 shrink-0 text-[#C46A2D]" />
                      <a href={`tel:${t.location.phone}`} className="text-base font-bold text-[#111] transition-colors hover:text-[#C46A2D]">
                        {t.location.phone}
                      </a>
                    </div>
                    <div className="flex items-center gap-4">
                      <Mail className="h-4 w-4 shrink-0 text-[#C46A2D]" />
                      <a href="mailto:info@tabakmolenstraat.nl" className="text-xs font-bold uppercase tracking-widest text-[#111] transition-colors hover:text-[#C46A2D]">
                        info@tabakmolenstraat.nl
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Opening Hours Column - Clean Style, No Background Box */}
              <div>
                <h3 className="mb-8 text-[10px] font-black uppercase tracking-[0.2em] text-[#555]">
                  {language === 'nl' ? 'OPEN' : language === 'en' ? 'OPEN' : 'OFFEN'}
                </h3>
                <div className="space-y-4">
                  {Object.entries(t.location.hours).map(([day, hours]) => (
                    <div key={day} className="flex justify-between gap-8 text-[12px]">
                      <span className="capitalize font-medium text-[#555]">
                        {t.location.days ? (t.location.days as any)[day] : day}
                      </span>
                      <span className="font-black text-[#111] tracking-tight">{hours as string}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA Button Align to the left of column block */}
            <div className="mt-16">
              <ButtonWithLink 
                href="https://www.google.com/maps/dir/?api=1&destination=Molenstraat+44+Nijmegen"
                label={language === 'nl' ? 'GOOGLE MAPS ROUTE' : language === 'en' ? 'GOOGLE MAPS ROUTE' : 'GOOGLE MAPS ROUTE'}
              />
            </div>
          </motion.div>

          {/* Photo Side (Right) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:mt-12"
          >
            <div className="relative aspect-[16/10] lg:aspect-[4/3] w-full overflow-hidden border border-[#111]/5 bg-[#f5f5f3] shadow-2xl">
              <Image
                src="/assets/shop_storefront_highres.jpg"
                alt="Tabak Molenstraat Storefront"
                fill
                className="object-cover transition-all duration-1000 hover:scale-110"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
            {/* Minimalist Marker below the photo as in screenshot */}
            <div className="mt-6 flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-[#C46A2D]" />
              <span className="text-[10px] font-black uppercase tracking-widest text-[#111]">
                6511 HG NIJMEGEN CENTRUM
              </span>
            </div>
          </motion.div>
        </div>

        {/* Dynamic Map - Restored but with better framing */}
        <div className="mt-24 max-w-7xl mx-auto overflow-hidden h-[300px] w-full border border-[#111]/5 grayscale-[0.2] transition-all duration-700 hover:grayscale-0 sm:h-[400px]">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2466.8242095914376!2d5.86438631!3d51.8441416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c708681234567%3A0xabcdef!2sMolenstraat%2044%2C%206511%20HG%20Nijmegen%2C%20Netherlands!5e0!3m2!1sen!2snl!4v1712600000000!5m2!1sen!2snl" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={false} 
            loading="lazy" 
          />
        </div>
      </div>
    </section>
  );
}

function ButtonWithLink({ href, label }: { href: string; label: string }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="inline-flex h-10 items-center bg-[#111] px-6 text-[10px] font-black uppercase tracking-tight text-white transition-all hover:bg-[#C46A2D]"
    >
      {label} <ExternalLink className="ml-2 h-3 w-3" />
    </a>
  );
}
