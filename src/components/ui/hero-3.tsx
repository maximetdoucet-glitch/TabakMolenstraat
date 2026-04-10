"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { cn } from "@/lib/utils";

// Props interface for the component
interface AnimatedMarqueeHeroProps {
  tagline: string;
  title: React.ReactNode;
  description: string;
  ctaText: string;
  images: string[];
  className?: string;
}

// Reusable Button component adapted for the "Pure Retail" aesthetic
const ActionButton = ({ children, onClick }: { children: React.ReactNode; onClick?: () => void }) => (
  <motion.button
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    onClick={onClick}
    className="mt-8 border border-foreground bg-foreground px-10 py-4 text-[10px] font-black uppercase tracking-[0.2em] text-background transition-colors hover:bg-foreground/90 focus:outline-none focus:ring-1 focus:ring-foreground focus:ring-offset-2"
  >
    {children}
  </motion.button>
);

// The main hero component
export const AnimatedMarqueeHero: React.FC<AnimatedMarqueeHeroProps> = ({
  tagline,
  title,
  description,
  ctaText,
  images,
  className,
}) => {
  // Animation variants for the text content
  const FADE_IN_ANIMATION_VARIANTS: Variants = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 100, damping: 20 } },
  };

  // Duplicate images for a seamless loop
  const duplicatedImages = [...images, ...images, ...images];

  return (
    <section
      className={cn(
        "relative flex h-screen min-h-[800px] w-full flex-col items-center justify-start overflow-hidden bg-[#fafaf8] px-4 pt-8 text-center",
        className
      )}
    >
      <div className="z-10 flex flex-col items-center pb-6">
        {/* Tagline */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={FADE_IN_ANIMATION_VARIANTS}
          className="mb-8 flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.4em] text-[#111]"
        >
          <span className="h-px w-8 bg-[#C46A2D]" />
          {tagline}
          <span className="h-px w-8 bg-[#C46A2D]" />
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          className="max-w-5xl text-6xl font-black uppercase leading-[0.8] tracking-[-0.04em] text-[#111] md:text-8xl lg:text-[130px]"
        >
          {typeof title === 'string' ? (
            title.split(" ").map((word, i) => (
              <motion.span
                key={i}
                variants={FADE_IN_ANIMATION_VARIANTS}
                className="inline-block"
              >
                {word}&nbsp;
              </motion.span>
            ))
          ) : (
            title
          )}
        </motion.h1>

        {/* Description */}
        <motion.p
          initial="hidden"
          animate="show"
          variants={FADE_IN_ANIMATION_VARIANTS}
          transition={{ delay: 0.5 }}
          className="mt-10 max-w-xl text-[13px] font-bold leading-relaxed tracking-widest text-[#333] sm:text-sm"
        >
          {description}
        </motion.p>

        {/* Call to Action Button */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={FADE_IN_ANIMATION_VARIANTS}
          transition={{ delay: 0.6 }}
        >
          <ActionButton onClick={() => document.getElementById('location')?.scrollIntoView({ behavior: 'smooth' })}>
            {ctaText}
          </ActionButton>
        </motion.div>
      </div>

      {/* Animated Image Marquee - 3D Perspective Carousel with Full Rounding */}
      <div className="absolute bottom-[-5%] left-0 h-[55%] w-full [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] [perspective:1500px]">
        <motion.div
          className="flex gap-12 px-12"
          initial={{ x: 0 }}
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            ease: "linear",
            duration: 80,
            repeat: Infinity,
          }}
          style={{ transformStyle: "preserve-3d" }}
        >
          {duplicatedImages.map((src, index) => (
            <motion.div
              key={index}
              whileHover={{ 
                scale: 1.1, 
                rotateY: 15,
                z: 100,
                transition: { duration: 0.4, ease: "easeOut" }
              }}
              className="relative aspect-[3/4] h-72 flex-shrink-0 overflow-hidden rounded-[3.5rem] bg-white shadow-[0_40px_80px_-15px_rgba(0,0,0,0.25),0_15px_30px_-10px_rgba(0,0,0,0.12)] transition-all duration-700 md:h-[420px]"
              style={{
                rotateY: -10,
                transformStyle: "preserve-3d",
              }}
            >
              <img
                src={src}
                alt={`Collection Item ${index + 1}`}
                className="h-full w-full object-cover rounded-[3.5rem] transition-transform duration-1000"
              />
              {/* Subtle architectural overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent pointer-events-none rounded-[3.5rem]" />
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      {/* Background structural lines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <div className="h-full w-full bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:100px_100px]" />
      </div>
    </section>
  );
};
