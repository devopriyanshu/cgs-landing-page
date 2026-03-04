'use client';

import { motion } from 'framer-motion';

const testimonials = [
  {
    quote:
      'CGS gave us a structured pathway to Verra registration that would have taken us 18 months to figure out alone. The MRV support alone is worth 10x the subscription.',
    author: 'Rajesh M.',
    role: 'FPO Director, Punjab',
    badge: 'Early Pilot Partner',
    tag: 'Agricultural Carbon Project',
    initials: 'RM',
    accentColor: '#52B788',
  },
  {
    quote:
      'As a sustainability officer, I spend 40% of my time compiling BRSR reports manually. The ESG dashboard auto-generated our entire Section B in one click. This is what we needed.',
    author: 'Priya S.',
    role: 'Head of Sustainability, Mid-cap Listed Co.',
    badge: 'Beta Tester',
    tag: 'Corporate ESG Dashboard',
    initials: 'PS',
    accentColor: '#D4A853',
  },
  {
    quote:
      'The Quality Score framework finally gives us a way to compare credits from different projects without hiring an external consultant for every purchase.',
    author: 'Vikram T.',
    role: 'CFO, Export-oriented Manufacturer',
    badge: 'Early Pilot Partner',
    tag: 'Carbon Credit Marketplace',
    initials: 'VT',
    accentColor: '#B7E4C7',
  },
];

const partnerLabels = [
  'Verra Aligned',
  'Gold Standard',
  'BEE / CCTS',
  'SEBI BRSR',
  'Satyukt',
  'SatSure',
];

export default function Testimonials() {
  return (
    <section
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ background: 'var(--cgs-deep)' }}
      aria-label="Testimonials"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 50% 40% at 50% 0%, rgba(29,67,50,0.25) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.h2
          className="text-4xl md:text-5xl font-bold italic text-[#FAFAF8] mb-14 text-center"
          style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          Trusted by India&apos;s
          <br />
          <span className="text-[#52B788]">Green Pioneers</span>
        </motion.h2>

        <div className="flex flex-col md:flex-row gap-6 mb-16">
          {testimonials.map((t, i) => (
            <motion.blockquote
              key={t.author}
              className="flex-1 glass-card rounded-2xl p-7 flex flex-col gap-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
            >
              {/* Quote mark */}
              <div
                className="text-5xl leading-none font-serif mb-2 opacity-30"
                style={{ color: t.accentColor }}
                aria-hidden="true"
              >
                &ldquo;
              </div>

              <p
                className="text-[#FAFAF8]/80 text-sm leading-relaxed flex-1 italic"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                {t.quote}
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 mt-2 pt-4 border-t border-white/10">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-[11px] font-bold flex-shrink-0"
                  style={{
                    background: `${t.accentColor}25`,
                    color: t.accentColor,
                    fontFamily: '"DM Sans", system-ui, sans-serif',
                  }}
                >
                  {t.initials}
                </div>
                <div>
                  <p
                    className="text-sm font-bold text-[#FAFAF8]"
                    style={{ fontFamily: '"DM Sans", system-ui, sans-serif' }}
                  >
                    {t.author}
                  </p>
                  <p
                    className="text-xs text-[#B7E4C7]/50"
                    style={{ fontFamily: '"DM Sans", system-ui, sans-serif' }}
                  >
                    {t.role}
                  </p>
                </div>
                <span
                  className="ml-auto text-[10px] font-semibold px-2 py-1 rounded-full"
                  style={{
                    background: `${t.accentColor}15`,
                    color: t.accentColor,
                    fontFamily: '"DM Sans", system-ui, sans-serif',
                  }}
                >
                  {t.badge}
                </span>
              </div>

              <span
                className="text-xs text-[#B7E4C7]/40"
                style={{ fontFamily: '"DM Sans", system-ui, sans-serif' }}
              >
                {t.tag}
              </span>
            </motion.blockquote>
          ))}
        </div>

        {/* Partner labels row */}
        <motion.div
          className="flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          {partnerLabels.map((label) => (
            <div
              key={label}
              className="px-5 py-2 rounded-full border border-[#52B788]/20 text-xs font-semibold text-[#B7E4C7]/50"
              style={{ fontFamily: '"DM Sans", system-ui, sans-serif' }}
            >
              {label}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
