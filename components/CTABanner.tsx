'use client';

import { motion } from 'framer-motion';

export default function CTABanner() {
  return (
    <section
      className="relative py-20 md:py-28 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #52B788 0%, #1B4332 60%, #0A1F14 100%)',
      }}
      aria-label="Call to Action"
    >
      {/* Decorative pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          backgroundImage:
            'repeating-linear-gradient(-45deg, transparent, transparent 30px, rgba(255,255,255,0.05) 30px, rgba(255,255,255,0.05) 60px)',
        }}
      />
      {/* Glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 50% 70% at 30% 50%, rgba(82,183,136,0.2) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <motion.h2
          className="text-4xl md:text-5xl lg:text-6xl font-bold italic text-[#FAFAF8] mb-5 leading-tight"
          style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          India&apos;s Green Economy
          <br />
          Starts with Common Ground.
        </motion.h2>

        <motion.p
          className="text-xl text-[#FAFAF8]/80 mt-4 mb-10 max-w-2xl mx-auto"
          style={{ fontFamily: '"DM Sans", system-ui, sans-serif' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          Whether you have a project to list, credits to buy, or emissions to offset — your journey starts here.
        </motion.p>

        <motion.div
          className="flex flex-wrap gap-4 justify-center mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <a
            href="/onboarding"
            aria-label="Proceed to Project Onboarding"
            className="px-10 py-4 rounded-full font-semibold text-base bg-[#FAFAF8] text-[#1C1C1E] hover:bg-[#B7E4C7] transition-all duration-300 shadow-xl"
            style={{ fontFamily: '"DM Sans", system-ui, sans-serif' }}
          >
            Proceed to Project Onboarding
          </a>
          <a
            href="/marketplace"
            aria-label="Check Out Our Marketplace"
            className="px-10 py-4 rounded-full font-semibold text-base border-2 border-[#FAFAF8]/60 text-[#FAFAF8] hover:border-[#FAFAF8] hover:bg-white/10 transition-all duration-300"
            style={{ fontFamily: '"DM Sans", system-ui, sans-serif' }}
          >
            Check Out Our Marketplace
          </a>
        </motion.div>

        <motion.p
          className="text-sm text-[#FAFAF8]/50"
          style={{ fontFamily: '"DM Sans", system-ui, sans-serif' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.45 }}
        >
          No commitment required. Onboarding call within 48 hours.
        </motion.p>
      </div>
    </section>
  );
}
