'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, Layers, UserCheck, Satellite, Scale, CreditCard } from 'lucide-react';

const trustGrid = [
  {
    icon: ShieldCheck,
    headline: 'Double-Counting Prevention',
    detail: 'Single credit ledger. Every serial number locked on listing.',
  },
  {
    icon: Layers,
    headline: 'Compliance + Voluntary Separation',
    detail: 'CCTS and voluntary credits never mixed. Separate workflows.',
  },
  {
    icon: UserCheck,
    headline: 'Human Pre-Screen on Every Project',
    detail: 'No low-quality projects auto-approved. 48-hour human review.',
  },
  {
    icon: Satellite,
    headline: 'Satellite-Verified MRV',
    detail: 'Sentinel-2 and SatSure data, not just self-reported numbers.',
  },
  {
    icon: Scale,
    headline: 'SEBI / BEE Regulatory Alignment',
    detail: "Built for India's CCTS, BRSR, and SEBI LODR framework.",
  },
  {
    icon: CreditCard,
    headline: 'AML / KYC on All Accounts',
    detail: 'Aadhaar eKYC for individuals, GSTIN for corporates. Annual re-KYC.',
  },
];

export default function WhyChooseCGS() {
  return (
    <section
      id="why-cgs"
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ background: 'var(--cgs-cream)' }}
      aria-label="Why Choose CGS"
    >
      {/* Section number */}
      <span
        className="section-number"
        style={{ color: 'var(--cgs-charcoal)', top: '2rem', left: '2rem' }}
        aria-hidden="true"
      >
        06
      </span>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Left */}
          <motion.div
            className="lg:w-5/12"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2
              className="text-4xl md:text-5xl font-bold italic text-[#1C1C1E] mb-6 leading-tight"
              style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
            >
              Infrastructure-Grade Trust.
              <br />
              <span className="text-[#2D6A4F]">Mission-Driven Purpose.</span>
            </h2>

            <p
              className="text-lg text-gray-600 max-w-md mb-8 leading-relaxed"
              style={{ fontFamily: '"DM Sans", system-ui, sans-serif' }}
            >
              We built CGS because India&apos;s green economy needed an infrastructure layer — not another broker, not another consultancy. A platform that project developers, corporates, and farmers can all trust equally.
            </p>

            {/* Governance callout */}
            <div className="rounded-xl p-6 border border-[#52B788]/30 bg-white mb-8 shadow-sm">
              <p
                className="font-bold text-[#1C1C1E] mb-2 text-sm"
                style={{ fontFamily: '"DM Sans", system-ui, sans-serif' }}
              >
                🛡️ Independent Credit Quality Committee
              </p>
              <p
                className="text-sm text-gray-600 leading-relaxed"
                style={{ fontFamily: '"DM Sans", system-ui, sans-serif' }}
              >
                A 5-member external committee of carbon market experts, environmental scientists, and legal specialists reviews every credit listing. Publicly disclosed. Quarterly transparency reports.
              </p>
            </div>

            <a
              href="/governance"
              className="text-sm font-semibold text-[#2D6A4F] hover:text-[#52B788] transition-colors"
              style={{ fontFamily: '"DM Sans", system-ui, sans-serif' }}
            >
              Read Our Governance Framework →
            </a>
          </motion.div>

          {/* Right: 3x2 trust grid */}
          <motion.div
            className="lg:w-7/12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            {trustGrid.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.headline}
                  className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-md hover:border-[#52B788]/20 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.06 }}
                >
                  <div className="w-9 h-9 rounded-lg bg-[#52B788]/10 flex items-center justify-center mb-4">
                    <Icon size={18} className="text-[#2D6A4F]" />
                  </div>
                  <h3
                    className="font-bold text-[#1C1C1E] text-sm mb-1.5 leading-snug"
                    style={{ fontFamily: '"DM Sans", system-ui, sans-serif' }}
                  >
                    {item.headline}
                  </h3>
                  <p
                    className="text-xs text-gray-500 leading-relaxed"
                    style={{ fontFamily: '"DM Sans", system-ui, sans-serif' }}
                  >
                    {item.detail}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
