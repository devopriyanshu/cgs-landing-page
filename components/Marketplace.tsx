'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, HandshakeIcon } from 'lucide-react';

const mockListings = [
  {
    name: 'Punjab Wheat Belt — Stubble Prevention',
    certification: 'Verra Certified',
    qualityScore: 4.2,
    details: ['Agricultural', 'Punjab', '2024 Vintage', 'VM0042'],
    sdgs: ['SDG 2', 'SDG 13', 'SDG 15'],
    price: '₹850',
    available: '12,400 tonnes',
    story:
      'Across 3,200 farming families in Amritsar and Ludhiana districts, this project supports transition away from stubble burning through direct income supplements and FPO-led monitoring.',
  },
  {
    name: 'Rajasthan Solar Aggregation — Rural Off-Grid',
    certification: 'Gold Standard',
    qualityScore: 4.7,
    details: ['Renewable Energy', 'Rajasthan', '2023 Vintage', 'ACM0002'],
    sdgs: ['SDG 7', 'SDG 13', 'SDG 11'],
    price: '₹1,120',
    available: '8,800 tonnes',
    story:
      'Off-grid solar for 14 villages across the Thar desert. Displaces diesel generators, reduces 8,800 tCO₂e annually with SCADA-verified generation data.',
  },
  {
    name: 'Maharashtra MSW Diversion — Pune Metro Region',
    certification: 'Verra Certified',
    qualityScore: 3.9,
    details: ['Waste Management', 'Maharashtra', '2024 Vintage', 'AMS-III.F'],
    sdgs: ['SDG 11', 'SDG 12', 'SDG 13'],
    price: '₹620',
    available: '21,500 tonnes',
    story:
      'Municipal solid waste diversion from three landfill sites in the Pune metropolitan area. Compost output sold to local farmers, closing the organic loop.',
  },
];

const qualityFactors = [
  'Methodology Robustness',
  'Additionality Strength',
  'MRV & Satellite Coverage',
  'Permanence & Risk Buffer',
  'SDG Co-Benefits',
];

function StarRating({ score }: { score: number }) {
  const full = Math.floor(score);
  const partial = score - full;
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <svg key={s} width="12" height="12" viewBox="0 0 12 12">
          <defs>
            {s === Math.ceil(score) && partial > 0 && (
              <linearGradient id={`pg-${s}`} x1="0" x2="1" y1="0" y2="0">
                <stop offset={`${partial * 100}%`} stopColor="#D4A853" />
                <stop offset={`${partial * 100}%`} stopColor="#D4A85340" />
              </linearGradient>
            )}
          </defs>
          <polygon
            points="6,1 7.5,4.5 11,4.8 8.5,7 9.3,10.5 6,8.5 2.7,10.5 3.5,7 1,4.8 4.5,4.5"
            fill={
              s <= full
                ? '#D4A853'
                : s === Math.ceil(score) && partial > 0
                ? `url(#pg-${s})`
                : '#D4A85340'
            }
          />
        </svg>
      ))}
    </div>
  );
}

function QualityTooltip() {
  return (
    <div className="absolute left-0 top-full mt-2 z-50 w-60 bg-[#0A1F14] border border-[#52B788]/30 rounded-xl p-4 shadow-2xl">
      <p
        className="text-xs font-bold text-[#52B788] mb-3"
        style={{ fontFamily: '"DM Sans", system-ui, sans-serif' }}
      >
        CGS Quality Score — 5 Factors
      </p>
      {qualityFactors.map((f, i) => (
        <div key={f} className="flex items-center gap-2 mb-1.5">
          <span
            className="text-[10px] font-bold text-[#D4A853]"
            style={{ fontFamily: '"DM Sans", system-ui, sans-serif' }}
          >
            {i + 1}.
          </span>
          <span
            className="text-[10px] text-[#B7E4C7]/70"
            style={{ fontFamily: '"DM Sans", system-ui, sans-serif' }}
          >
            {f}
          </span>
        </div>
      ))}
    </div>
  );
}

const sdgColors: Record<string, string> = {
  'SDG 2': '#DDA63A',
  'SDG 7': '#FCC30B',
  'SDG 11': '#FD9D24',
  'SDG 12': '#BF8B2E',
  'SDG 13': '#3F7E44',
  'SDG 15': '#56C02B',
};

export default function Marketplace() {
  const [tooltipIdx, setTooltipIdx] = useState<number | null>(null);

  return (
    <section
      id="marketplace"
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ background: 'var(--cgs-deep)' }}
      aria-label="Carbon Credit Marketplace"
    >
      {/* Section number */}
      <span
        className="section-number"
        style={{ color: '#FAFAF8', top: '2rem', left: '2rem' }}
        aria-hidden="true"
      >
        05
      </span>

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 40% 50% at 100% 50%, rgba(29,67,50,0.25) 0%, transparent 60%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.h2
          className="text-4xl md:text-5xl font-bold italic text-[#FAFAF8] mb-14 leading-tight"
          style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          India&apos;s Most Transparent
          <br />
          <span className="text-[#52B788]">Carbon Credit Marketplace</span>
        </motion.h2>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Left: Mock listing cards */}
          <motion.div
            className="flex-1 lg:w-[55%] space-y-4"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            {mockListings.map((listing, i) => (
              <motion.article
                key={listing.name}
                className="glass-card rounded-2xl p-6 group"
                whileHover={{ y: -3, borderColor: 'rgba(82,183,136,0.3)' }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-start justify-between mb-3 gap-3 flex-wrap">
                  <h3
                    className="font-bold text-[#FAFAF8] text-base leading-snug"
                    style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
                  >
                    {listing.name}
                  </h3>
                  <span
                    className="text-xs font-semibold px-3 py-1 rounded-full bg-[#52B788]/15 text-[#52B788] whitespace-nowrap flex-shrink-0"
                    style={{ fontFamily: '"DM Sans", system-ui, sans-serif' }}
                  >
                    {listing.certification}
                  </span>
                </div>

                {/* Quality Score */}
                <div
                  className="flex items-center gap-2 mb-3 relative cursor-help"
                  onMouseEnter={() => setTooltipIdx(i)}
                  onMouseLeave={() => setTooltipIdx(null)}
                >
                  <StarRating score={listing.qualityScore} />
                  <span
                    className="text-xs font-bold text-[#D4A853]"
                    style={{ fontFamily: '"DM Sans", system-ui, sans-serif' }}
                  >
                    {listing.qualityScore}/5
                  </span>
                  <span
                    className="text-xs text-[#B7E4C7]/40 underline decoration-dotted"
                    style={{ fontFamily: '"DM Sans", system-ui, sans-serif' }}
                  >
                    Quality Score
                  </span>
                  <AnimatePresence>
                    {tooltipIdx === i && (
                      <motion.div
                        initial={{ opacity: 0, y: 4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 4 }}
                        transition={{ duration: 0.2 }}
                      >
                        <QualityTooltip />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Details row */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {listing.details.map((d) => (
                    <span
                      key={d}
                      className="text-[10px] font-medium px-2 py-0.5 rounded bg-[#1B4332]/60 text-[#B7E4C7]/70"
                      style={{ fontFamily: '"DM Sans", system-ui, sans-serif' }}
                    >
                      {d}
                    </span>
                  ))}
                </div>

                {/* SDG badges */}
                <div className="flex gap-1.5 mb-4">
                  {listing.sdgs.map((sdg) => (
                    <span
                      key={sdg}
                      className="w-7 h-7 rounded-full text-[9px] font-bold text-white flex items-center justify-center"
                      style={{
                        background: sdgColors[sdg] || '#52B788',
                        fontFamily: '"DM Sans", system-ui, sans-serif',
                      }}
                      title={sdg}
                    >
                      {sdg.replace('SDG ', '')}
                    </span>
                  ))}
                </div>

                {/* Price row */}
                <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                  <div>
                    <span
                      className="text-xl font-bold text-[#D4A853]"
                      style={{ fontFamily: '"DM Sans", system-ui, sans-serif' }}
                    >
                      {listing.price}
                    </span>
                    <span
                      className="text-xs text-[#B7E4C7]/50 ml-1"
                      style={{ fontFamily: '"DM Sans", system-ui, sans-serif' }}
                    >
                      / tonne CO₂e
                    </span>
                  </div>
                  <span
                    className="text-xs text-[#B7E4C7]/60"
                    style={{ fontFamily: '"DM Sans", system-ui, sans-serif' }}
                  >
                    {listing.available} available
                  </span>
                </div>

                {/* Buttons */}
                <div className="flex gap-2 flex-wrap">
                  <button
                    className="flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-full border border-[#52B788]/40 text-[#52B788] hover:bg-[#52B788]/10 transition-all"
                    style={{ fontFamily: '"DM Sans", system-ui, sans-serif' }}
                  >
                    <Eye size={12} />
                    View Project Story
                  </button>
                  <button
                    className="flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-full bg-[#52B788] text-[#0A1F14] hover:bg-[#B7E4C7] transition-all"
                    style={{ fontFamily: '"DM Sans", system-ui, sans-serif' }}
                  >
                    Request Offtake
                  </button>
                </div>
              </motion.article>
            ))}
          </motion.div>

          {/* Right: Features */}
          <motion.div
            className="lg:w-[45%]"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3
              className="text-3xl font-bold italic text-[#FAFAF8] mb-8 leading-snug"
              style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
            >
              Browse. Procure. Report.
              <br />
              <span className="text-[#52B788]">All in One Place.</span>
            </h3>

            <div className="space-y-5 mb-10">
              {[
                { emoji: '🔍', headline: 'Quality Score on every credit', detail: '1–5 proprietary rating across 5 independent factors' },
                { emoji: '📖', headline: 'Project Story', detail: 'With photos, maps, and community impact' },
                { emoji: '📦', headline: 'Portfolio bundling', detail: 'One contract, one retirement certificate' },
                { emoji: '📄', headline: 'Auto-generated reports', detail: 'BRSR, GRI 305, and CDP from your portfolio' },
                { emoji: '🔗', headline: 'Blockchain-anchored retirements', detail: 'Immutable certificates, no double-counting' },
                { emoji: '⚡', headline: 'E-commerce checkout', detail: 'Orders under ₹10L — procure instantly' },
              ].map((feature) => (
                <div key={feature.headline} className="flex items-start gap-4">
                  <span className="text-2xl flex-shrink-0">{feature.emoji}</span>
                  <div>
                    <p
                      className="font-semibold text-[#FAFAF8] text-sm"
                      style={{ fontFamily: '"DM Sans", system-ui, sans-serif' }}
                    >
                      {feature.headline}
                    </p>
                    <p
                      className="text-xs text-[#B7E4C7]/55 mt-0.5"
                      style={{ fontFamily: '"DM Sans", system-ui, sans-serif' }}
                    >
                      {feature.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="/marketplace"
              aria-label="Explore the Marketplace"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-base bg-[#52B788] text-[#0A1F14] hover:bg-[#B7E4C7] transition-all duration-300 shadow-lg shadow-[#52B788]/20 mb-4"
              style={{ fontFamily: '"DM Sans", system-ui, sans-serif' }}
            >
              Explore the Marketplace →
            </a>
            <br />
            <a
              href="/list-credits"
              className="text-sm text-[#52B788]/70 hover:text-[#52B788] transition-colors"
              style={{ fontFamily: '"DM Sans", system-ui, sans-serif' }}
            >
              Are you a project developer? List your credits →
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
