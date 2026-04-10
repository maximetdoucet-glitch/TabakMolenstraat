"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { motion, useSpring, useMotionValue, Variants } from "framer-motion";
import { cn } from "@/lib/utils";
import { ButtonColorful } from "@/components/ui/button-colorful";

// Magnetic effect component for high-end interactivity
function Magnetic({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 150 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const distanceX = clientX - centerX;
    const distanceY = clientY - centerY;
    
    x.set(distanceX * 0.3);
    y.set(distanceY * 0.3);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
    >
      {children}
    </motion.div>
  );
}

interface RefinedBoutiqueHeroProps {
  tagline: string;
  title: string;
  description: string;
  ctaText: string;
  imageSrc: string;
  className?: string;
}

export const RefinedBoutiqueHero: React.FC<RefinedBoutiqueHeroProps> = ({
  tagline,
  title,
  description,
  ctaText,
  imageSrc,
  className,
}) => {
  // Simple, professional reveal animations
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 15 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8, 
        ease: [0.16, 1, 0.3, 1] 
      } 
    },
  };

  return (
    <section
      className={cn(
        "relative flex min-h-[85dvh] sm:h-[100dvh] w-full flex-col items-center justify-center overflow-hidden bg-[#fafaf8] px-6 py-12 sm:py-8 text-center sm:snap-start sm:snap-always",
        className
      )}
    >
      {/* Background Shop Image - Low Opacity & Grayscale for subtle depth */}
      <div className="absolute inset-0 z-0 select-none overflow-hidden opacity-[0.15] grayscale transition-opacity duration-700">
        <Image
          src={imageSrc}
          alt="Tabak Molenstraat Background"
          fill
          className="object-cover object-top"
          priority
        />
        {/* Subtle dark overlay for better text readability on mobile */}
        <div className="absolute inset-0 bg-white/20 sm:bg-transparent" />
      </div>

      <div className="z-[40] flex w-full max-w-5xl flex-col items-center">
        {/* 1. Tagline: Subtle & Refined */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mb-6 sm:mb-8 flex items-center gap-4 text-[8px] sm:text-[10px] font-black uppercase tracking-[0.4em] sm:tracking-[0.5em] text-[#111]/60"
        >
          <span className="h-px w-3 sm:w-6 bg-[#C46A2D]/40" />
          {tagline}
          <span className="h-px w-3 sm:w-6 bg-[#C46A2D]/40" />
        </motion.div>

        {/* 2. Main Title: Typography Focal Point */}
        <motion.h1
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ delay: 0.1 }}
          className="max-w-4xl text-[2.75rem] font-black uppercase leading-[0.9] tracking-tighter text-[#111] sm:text-7xl md:text-8xl lg:text-[96px]"
        >
          {title}
        </motion.h1>

        {/* 3. Subheadline: Clear & Minimal */}
        <motion.p
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ delay: 0.2 }}
          className="mt-4 sm:mt-6 max-w-lg text-[11px] sm:text-[13px] font-bold leading-relaxed tracking-widest text-[#555] sm:text-sm px-4"
        >
          {description}
        </motion.p>

        {/* 4. CTA: Primary Action - Magnetic & Programmatic */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ delay: 0.3 }}
          className="mt-10 sm:mt-12"
        >
          <ButtonColorful
            label={ctaText}
            onClick={() => {
              const element = document.getElementById('location');
              if (element) {
                const offset = 80;
                const bodyRect = document.body.getBoundingClientRect().top;
                const elementRect = element.getBoundingClientRect().top;
                const elementPosition = elementRect - bodyRect;
                const offsetPosition = elementPosition - offset;

                window.scrollTo({
                  top: offsetPosition,
                  behavior: 'smooth'
                });
              }
            }}
            className="h-14 px-12"
          />
        </motion.div>
      </div>
    </section>
  );
};
