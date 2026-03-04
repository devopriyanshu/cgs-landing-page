'use client';

import { motion } from 'framer-motion';

const sectors = [
  {
    icon: '🌾',
    headline: 'Agricultural Carbon',
    body: 'Stubble burning prevention, no-till practices, urea reduction across 140M+ acres of Indian farmland. VM0042 methodology. FPO-led aggregation.',
    stats: '80M+ Farmers Addressable',
    accentColor: '#D4A853',
    bg: 'rgba(212, 168, 83, 0.08)',
  },
  {
    icon: '☀️',
    headline: 'Renewable Energy Credits',
    body: 'Solar, wind, small hydro, and biomass projects. RECs and ACM0002-aligned carbon credits. SCADA data integration.',
    stats: "India's fastest growing supply sector",
    accentColor: '#F9E070',
    bg: 'rgba(249, 224, 112, 0.08)',
  },
  {
    icon: '♻️',
    headline: 'Waste & Landfill Gas',
    body: 'Municipal solid waste, industrial waste diversion, landfill gas capture. AMS-III.F and ACM0022 methodologies.',
    stats: 'High-additionality, strong VVB track record',
    accentColor: '#52B788',
    bg: 'rgba(82, 183, 136, 0.08)',
  },
  {
    icon: '🏭',
    headline: 'Industrial Decarbonization',
    body: 'Fuel switching, process efficiency, cogeneration projects. CCTS compliance pathway for energy-intensive industries.',
    stats: 'CCTS compliance credits eligible',
    accentColor: '#7EB8D0',
    bg: 'rgba(126, 184, 208, 0.08)',
  },
  {
    icon: '🌲',
    headline: 'Forestry & NBS',
    body: 'Afforestation, reforestation, avoided deforestation, and improved forest management. VM0007, VM0015 methodologies.',
    stats: 'SDG co-benefits certified',
    accentColor: '#B7E4C7',
    bg: 'rgba(183, 228, 199, 0.08)',
  },
  {
    icon: '🏗️',
    headline: 'Built Environment',
    body: 'Energy efficiency in commercial buildings, green certified construction, district cooling. IGBC and GRIHA aligned.',
    stats: 'BRSR Scope 1+2 offset eligible',
    accentColor: '#A0B0C0',
    bg: 'rgba(160, 176, 192, 0.08)',
  },
];

export default function SectorsWeServe() {
  return (
    <section
      id="sectors"
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ background: 'var(--cgs-forest)' }}
      aria-label="Sectors We Serve"
    >
      {/* Section number */}
      <span
        className="section-number"
        style={{ color: '#FAFAF8', top: '2rem', left: '2rem' }}
        aria-hidden="true"
      >
        04
      </span>

      {/* Background decoration */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          background: 'radial-gradient(ellipse 70% 40% at 50% 0%, rgba(82,183,136,0.1) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          className="mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold italic text-[#FAFAF8] mb-4 leading-tight"
            style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
          >
            Every Green Sector.
            <br />
            <span className="text-[#52B788]">One Trusted Platform.</span>
          </h2>
        </motion.div>

        {/* Sector cards — horizontal scroll on mobile, grid on desktop */}
        <div className="flex lg:grid lg:grid-cols-3 gap-5 overflow-x-auto pb-4 lg:pb-0 snap-x snap-mandatory lg:snap-none">
          {sectors.map((sector, i) => (
            <motion.article
              key={sector.headline}
              className="min-w-[280px] lg:min-w-0 snap-start flex-shrink-0 lg:flex-shrink rounded-2xl p-7 border transition-all duration-300 group cursor-default"
              style={{
                background: sector.bg,
                borderColor: `${sector.accentColor}20`,
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ borderColor: `${sector.accentColor}50`, y: -4 }}
            >
              {/* Large background icon */}
              <div
                className="text-6xl mb-5 transition-transform duration-300 group-hover:scale-110 inline-block"
                role="img"
                aria-hidden="true"
              >
                {sector.icon}
              </div>

              <h3
                className="text-lg font-bold text-[#FAFAF8] mb-2"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                {sector.headline}
              </h3>

              <p
                className="text-sm text-[#B7E4C7]/60 mb-5 leading-relaxed"
                style={{ fontFamily: '"DM Sans", system-ui, sans-serif' }}
              >
                {sector.body}
              </p>

              <div
                className="text-xs font-semibold px-3 py-1.5 rounded-full inline-block"
                style={{
                  color: sector.accentColor,
                  background: `${sector.accentColor}15`,
                  fontFamily: '"DM Sans", system-ui, sans-serif',
                }}
              >
                {sector.stats}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
