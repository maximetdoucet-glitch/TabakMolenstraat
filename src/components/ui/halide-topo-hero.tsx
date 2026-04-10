'use client';

import React, { useEffect, useRef } from 'react';
import { useLanguage } from '@/components/language-provider';
import { cn } from '@/lib/utils';

const HalideTopoHero: React.FC = () => {
  const { t, language } = useLanguage();
  const canvasRef = useRef<HTMLDivElement>(null);
  const layersRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Mouse Parallax Logic
    const handleMouseMove = (e: MouseEvent) => {
      const x = (window.innerWidth / 2 - e.pageX) / 25;
      const y = (window.innerHeight / 2 - e.pageY) / 25;

      // Rotate the 3D Canvas
      canvas.style.transform = `rotateX(${55 + y / 2}deg) rotateZ(${-25 + x / 2}deg)`;

      // Apply depth shift to layers
      layersRef.current.forEach((layer, index) => {
        if (!layer) return;
        const depth = (index + 1) * 20;
        const moveX = x * (index + 1) * 0.3;
        const moveY = y * (index + 1) * 0.3;
        layer.style.transform = `translateZ(${depth}px) translate(${moveX}px, ${moveY}px)`;
      });
    };

    // Entrance Animation
    canvas.style.opacity = '0';
    canvas.style.transform = 'rotateX(90deg) rotateZ(0deg) scale(0.8)';
    
    const timeout = setTimeout(() => {
      canvas.style.transition = 'all 2.5s cubic-bezier(0.16, 1, 0.3, 1)';
      canvas.style.opacity = '1';
      canvas.style.transform = 'rotateX(55deg) rotateZ(-25deg) scale(1)';
    }, 300);

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className="relative w-full overflow-hidden bg-[#fafaf8]">
      <style>{`
        :root {
          --halide-bg: #fafaf8;
          --halide-dark: #1a1a1a;
          --halide-accent: #0066cc;
          --halide-grain-opacity: 0.05;
        }

        .halide-body {
          background-color: var(--halide-bg);
          color: var(--halide-dark);
          overflow: hidden;
          height: 85vh;
          min-height: 600px;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .halide-grain {
          position: absolute;
          top: 0; left: 0; width: 100%; height: 100%;
          pointer-events: none;
          z-index: 5;
          opacity: var(--halide-grain-opacity);
          mix-blend-mode: multiply;
        }

        .viewport {
          perspective: 2000px;
          width: 100%; height: 100%;
          display: flex; align-items: center; justify-content: center;
          overflow: hidden;
        }

        .canvas-3d {
          position: relative;
          width: 900px; height: 550px;
          transform-style: preserve-3d;
          transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .layer {
          position: absolute;
          inset: 0;
          border: 1px solid rgba(26, 26, 26, 0.05);
          background-size: cover;
          background-position: center;
          transition: transform 0.5s ease;
          box-shadow: 0 40px 100px -20px rgba(0,0,0,0.1);
        }

        .layer-1 { 
          background-image: url('/assets/shop_storefront_highres.jpg'); 
          filter: contrast(1.05) brightness(1.02);
        }
        .layer-2 { 
          background-image: url('/assets/category_staff_cigarettes.jpg'); 
          opacity: 0.6; 
          mix-blend-mode: multiply;
        }
        .layer-3 { 
          background-image: url('/assets/category_vapes_wall.jpg'); 
          opacity: 0.3; 
          mix-blend-mode: overlay;
        }

        .contours {
          position: absolute;
          width: 200%; height: 200%;
          top: -50%; left: -50%;
          background-image: repeating-radial-gradient(circle at 50% 50%, transparent 0, transparent 40px, rgba(26,26,26,0.03) 41px, transparent 42px);
          transform: translateZ(150px);
          pointer-events: none;
        }

        .interface-grid {
          position: absolute;
          inset: 0;
          padding: 3rem;
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-template-rows: auto 1fr auto;
          z-index: 10;
          pointer-events: none;
        }

        .hero-title {
          grid-column: 1 / -1;
          align-self: center;
          font-size: clamp(3rem, 8vw, 7rem);
          line-height: 0.85;
          letter-spacing: -0.06em;
          font-weight: 900;
          text-transform: uppercase;
          color: var(--halide-dark);
        }

        .cta-button {
          pointer-events: auto;
          background: var(--halide-dark);
          color: var(--halide-bg);
          padding: 1.25rem 2.5rem;
          text-decoration: none;
          font-size: 11px;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          clip-path: polygon(0 0, 100% 0, 100% 75%, 90% 100%, 0 100%);
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          border: 1px solid var(--halide-dark);
        }

        .cta-button:hover { 
          background: transparent; 
          color: var(--halide-dark);
          transform: translateY(-5px); 
        }

        .scroll-hint {
          position: absolute;
          bottom: 3rem; left: 50%;
          width: 1px; height: 70px;
          background: linear-gradient(to bottom, var(--halide-dark), transparent);
          animation: flow 2s infinite ease-in-out;
          opacity: 0.3;
        }

        @keyframes flow {
          0%, 100% { transform: scaleY(0); transform-origin: top; }
          50% { transform: scaleY(1); transform-origin: top; }
          51% { transform: scaleY(1); transform-origin: bottom; }
        }
      `}</style>

      <div className="halide-body">
        {/* SVG Filter for Grain */}
        <svg style={{ position: 'absolute', width: 0, height: 0 }}>
          <filter id="grain">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" />
            <feColorMatrix type="saturate" values="0" />
          </filter>
        </svg>

        <div className="halide-grain" style={{ filter: 'url(#grain)' }}></div>

        <div className="interface-grid">
          <div className="text-[10px] font-black tracking-[0.3em] uppercase opacity-40">
            HALIDE_RETAIL_CORE // {language === 'nl' ? 'NIJMEGEN' : 'NIJMEGEN'}
          </div>
          <div style={{ textAlign: 'right', fontFamily: 'monospace', color: 'var(--halide-accent)', fontSize: '0.65rem', fontWeight: 700 }}>
            <div>LAT: 51.8441° N</div>
            <div>LON: 5.8644° E</div>
            <div className="mt-1 opacity-50 uppercase tracking-widest">{t.nav.location}</div>
          </div>

          <h1 className="hero-title">
            {t.hero.title.split(' ').map((word: string, i: number) => (
              <React.Fragment key={i}>
                {word}
                {i === 0 && <br />}
              </React.Fragment>
            ))}
          </h1>

          <div style={{ gridColumn: '1 / -1', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
            <div className="max-w-xs text-[10px] font-black uppercase tracking-widest leading-loose opacity-60">
              <p>[ {language === 'nl' ? 'SINDS 1968' : 'SINCE 1968'} ]</p>
              <p>{t.hero.subtitle}</p>
            </div>
            <a 
              href="#collection" 
              className="cta-button"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('collection')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              {t.hero.cta}
            </a>
          </div>
        </div>

        <div className="viewport">
          <div className="canvas-3d" ref={canvasRef}>
            <div className="layer layer-1" ref={(el) => { layersRef.current[0] = el!; }}></div>
            <div className="layer layer-2" ref={(el) => { layersRef.current[1] = el!; }}></div>
            <div className="layer layer-3" ref={(el) => { layersRef.current[2] = el!; }}></div>
            <div className="contours"></div>
          </div>
        </div>

        <div className="scroll-hint"></div>
      </div>
    </div>
  );
};

export default HalideTopoHero;
