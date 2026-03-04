'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';

const words = ['Where', 'Green', 'Projects', 'Meet', 'Capital,', 'Compliance', '&', 'Markets'];

const trustBadges = [
  'Verra & Gold Standard Aligned',
  'BRSR / SEBI Compliant Reporting',
  'BEE / CCTS Framework Ready',
];

// SVG Landscape component
function HeroLandscape({ mouseX, mouseY }: { mouseX: number; mouseY: number }) {
  return (
    <div className="relative w-full h-full min-h-[420px] overflow-hidden rounded-2xl">
      {/* Sky gradient */}
      <div
        className="absolute inset-0 rounded-2xl"
        style={{
          background: 'linear-gradient(180deg, #061208 0%, #0A1F14 40%, #1B4332 100%)',
        }}
      />

      {/* Stars */}
      {[...Array(30)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-white animate-soft-pulse"
          style={{
            width: Math.random() > 0.7 ? '2px' : '1px',
            height: Math.random() > 0.7 ? '2px' : '1px',
            top: `${Math.random() * 35}%`,
            left: `${Math.random() * 100}%`,
            opacity: 0.3 + Math.random() * 0.5,
            animationDelay: `${Math.random() * 3}s`,
          }}
        />
      ))}

      {/* Layer 1: Distant mountains */}
      <motion.div
        className="absolute bottom-0 left-0 right-0"
        style={{ y: mouseY * 0.02 }}
      >
        <svg viewBox="0 0 800 260" className="w-full" preserveAspectRatio="none">
          <path
            d="M0,260 L0,140 Q80,80 160,120 Q240,160 300,90 Q360,20 440,70 Q520,120 580,60 Q640,0 720,50 Q760,75 800,40 L800,260 Z"
            fill="#112A1A"
          />
        </svg>
      </motion.div>

      {/* Layer 2: Mid hills with trees */}
      <motion.div
        className="absolute bottom-0 left-0 right-0"
        style={{ y: mouseY * 0.05 }}
      >
        <svg viewBox="0 0 800 220" className="w-full" preserveAspectRatio="none">
          <path
            d="M0,220 L0,160 Q50,140 80,150 Q100,110 120,140 Q140,110 160,150 Q180,110 200,140 Q240,130 260,155 Q320,120 340,150 Q380,130 400,155 Q440,120 500,150 Q560,110 580,145 Q620,100 660,140 Q700,120 740,145 Q760,130 800,150 L800,220 Z"
            fill="#1B4332"
          />
          {/* Tree silhouettes */}
          {[60, 130, 200, 300, 420, 520, 620, 730].map((x, i) => (
            <g key={i} transform={`translate(${x}, ${100 + (i % 3) * 20})`}>
              <polygon points="0,-40 -15,0 15,0" fill="#0D2B1A" />
              <polygon points="0,-60 -12,-20 12,-20" fill="#0F3020" />
              <rect x="-3" y="0" width="6" height="12" fill="#0A1F14" />
            </g>
          ))}
        </svg>
      </motion.div>

      {/* Layer 3: Wind turbines */}
      <motion.div
        className="absolute bottom-0 left-0 right-0"
        style={{ y: mouseY * 0.08 }}
      >
        {[
          { x: '15%', baseY: 65 },
          { x: '55%', baseY: 70 },
          { x: '80%', baseY: 62 },
        ].map((turbine, i) => (
          <div
            key={i}
            className="absolute"
            style={{ bottom: `${turbine.baseY}px`, left: turbine.x }}
          >
            {/* Tower */}
            <div
              className="absolute"
              style={{
                width: '3px',
                height: '85px',
                background: 'linear-gradient(to bottom, #52B788, #2D6A4F)',
                bottom: 0,
                left: '50%',
                transform: 'translateX(-50%)',
                borderRadius: '2px',
              }}
            />
            {/* Blades */}
            <div
              className="absolute animate-turbine"
              style={{
                width: '40px',
                height: '40px',
                bottom: '80px',
                left: '50%',
                transform: 'translateX(-50%)',
                transformOrigin: 'center',
              }}
            >
              {[0, 120, 240].map((angle) => (
                <div
                  key={angle}
                  className="absolute"
                  style={{
                    width: '2px',
                    height: '18px',
                    background: '#52B788',
                    top: '50%',
                    left: '50%',
                    transformOrigin: 'bottom center',
                    transform: `translateX(-50%) rotate(${angle}deg)`,
                    borderRadius: '2px',
                    opacity: 0.8,
                  }}
                />
              ))}
              <div
                className="absolute w-2 h-2 rounded-full bg-[#52B788]"
                style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
              />
            </div>
          </div>
        ))}
      </motion.div>

      {/* Layer 4: Solar panels */}
      <motion.div
        className="absolute bottom-0 left-0 right-0"
        style={{ y: mouseY * 0.12 }}
      >
        <svg viewBox="0 0 800 80" className="w-full" preserveAspectRatio="none">
          {/* Solar panel arrays */}
          {[60, 250, 560, 700].map((x, i) => (
            <g key={i} transform={`translate(${x}, 20)`}>
              <rect x="0" y="8" width="50" height="28" rx="2" fill="#1B4332" stroke="#52B788" strokeWidth="0.5" />
              <line x1="17" y1="8" x2="17" y2="36" stroke="#52B788" strokeWidth="0.4" opacity="0.5" />
              <line x1="33" y1="8" x2="33" y2="36" stroke="#52B788" strokeWidth="0.4" opacity="0.5" />
              <line x1="0" y1="22" x2="50" y2="22" stroke="#52B788" strokeWidth="0.4" opacity="0.5" />
              <rect x="20" y="36" width="10" height="12" fill="#2D6A4F" />
            </g>
          ))}
        </svg>
      </motion.div>

      {/* Layer 5: Wheat / foreground */}
      <motion.div
        className="absolute bottom-0 left-0 right-0"
        style={{ y: mouseY * 0.15 }}
      >
        <svg viewBox="0 0 800 60" className="w-full" preserveAspectRatio="none">
          <path d="M0,60 Q200,45 400,55 Q600,65 800,50 L800,60 Z" fill="#2D6A4F" />
        </svg>
        {/* Wheat stalks */}
        {[...Array(22)].map((_, i) => (
          <div
            key={i}
            className="animate-wheat absolute bottom-0"
            style={{
              left: `${4 + i * 4.5}%`,
              animationDelay: `${(i * 0.18) % 4}s`,
            }}
          >
            <svg width="12" height="32" viewBox="0 0 12 32">
              <line x1="6" y1="32" x2="6" y2="8" stroke="#52B788" strokeWidth="1" opacity="0.7" />
              <ellipse cx="6" cy="6" rx="3" ry="6" fill="#B7E4C7" opacity="0.5" />
              <ellipse cx="3" cy="14" rx="2" ry="4" fill="#52B788" opacity="0.6" transform="rotate(-20 3 14)" />
              <ellipse cx="9" cy="14" rx="2" ry="4" fill="#52B788" opacity="0.6" transform="rotate(20 9 14)" />
            </svg>
          </div>
        ))}
      </motion.div>

      {/* Subtle glow at horizon */}
      <div
        className="absolute bottom-1/4 left-0 right-0 h-20 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 50% at 50% 100%, rgba(82,183,136,0.08) 0%, transparent 100%)',
        }}
      />
    </div>
  );
}

export default function Hero() {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    setMouseX((e.clientX - cx) * 0.008);
    setMouseY((e.clientY - cy) * 0.006);
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [handleMouseMove]);

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: 'var(--cgs-deep)' }}
      aria-label="Hero section"
    >
      {/* Background ambient gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 20% 50%, rgba(29,67,50,0.4) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 pt-28 pb-20 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-8">
          {/* Left: Copy */}
          <div className="flex-1 lg:w-[60%] z-10">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 mb-6"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-[#52B788] animate-soft-pulse" />
              <span
                className="text-xs tracking-widest uppercase font-semibold text-[#52B788]"
                style={{ fontFamily: '"DM Sans", system-ui, sans-serif' }}
              >
                India&apos;s Green Infrastructure Platform
              </span>
            </motion.div>

            {/* H1 with word stagger */}
            <h1
              className="text-5xl md:text-6xl xl:text-7xl font-bold italic leading-tight text-[#FAFAF8] mb-6"
              style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
            >
              {['Where Green Projects', 'Meet Capital,', 'Compliance & Markets'].map((line, li) => (
                <motion.span
                  key={li}
                  className="block"
                  initial={{ opacity: 0, y: 32 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.2 + li * 0.15, ease: [0.16, 1, 0.3, 1] }}
                >
                  {line}
                </motion.span>
              ))}
            </h1>

            {/* Sub-headline */}
            <motion.p
              className="text-lg md:text-xl text-[#B7E4C7]/80 max-w-xl mb-8 leading-relaxed"
              style={{ fontFamily: '"DM Sans", system-ui, sans-serif' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65 }}
            >
              CGS connects project developers, farmers, corporations, and investors across India&apos;s carbon, renewable, waste, and sustainability economy — from first idea to verified credit.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap gap-4 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <a
                href="/onboarding"
                aria-label="Start Your Project"
                className="group flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-base text-[#0A1F14] bg-[#52B788] hover:bg-[#B7E4C7] transition-all duration-300 shadow-lg shadow-[#52B788]/20"
                style={{ fontFamily: '"DM Sans", system-ui, sans-serif' }}
              >
                Start Your Project
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="/marketplace"
                aria-label="Explore Marketplace"
                className="px-8 py-4 rounded-full font-semibold text-base text-[#FAFAF8] border border-[#FAFAF8]/30 hover:border-[#52B788] hover:text-[#52B788] transition-all duration-300"
                style={{ fontFamily: '"DM Sans", system-ui, sans-serif' }}
              >
                Explore Marketplace
              </a>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              {trustBadges.map((badge) => (
                <div key={badge} className="flex items-center gap-2">
                  <CheckCircle size={14} className="text-[#52B788] flex-shrink-0" />
                  <span
                    className="text-xs text-[#B7E4C7]/70"
                    style={{ fontFamily: '"DM Sans", system-ui, sans-serif' }}
                  >
                    {badge}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Animated SVG Landscape */}
          <motion.div
            className="w-full lg:w-[40%] lg:flex-shrink-0"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <HeroLandscape mouseX={mouseX} mouseY={mouseY} />
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.6 }}
        >
          <span
            className="text-xs text-[#52B788]/50 tracking-widest uppercase"
            style={{ fontFamily: '"DM Sans", system-ui, sans-serif' }}
          >
            Scroll
          </span>
          <div className="w-px h-8 bg-gradient-to-b from-[#52B788]/50 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
