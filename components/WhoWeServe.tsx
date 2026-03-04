'use client';

import { motion } from 'framer-motion';
import { Sprout, Building2, Wheat, TrendingUp } from 'lucide-react';

const audiences = [
  {
    icon: Sprout,
    accentColor: '#52B788',
    headline: 'Turn Your Green Project Into Verified Carbon Revenue',
    body: 'Waste management firms, renewable developers, FPOs, municipalities, and NGOs — list your project, get structured, verify through accredited VVBs, and monetize your credits on India\'s most trusted marketplace.',
    cta: 'Register Your Project →',
    href: '/onboarding',
    tag: 'Bucket A / B / C Projects Accepted',
    title: 'Project Developers & NGOs',
  },
  {
    icon: Building2,
    accentColor: '#D4A853',
    headline: 'Meet Your BRSR, SEBI & Net Zero Mandates — In One Platform',
    body: 'Browse verified Indian carbon credits, procure at transparent prices, auto-generate BRSR Core, GRI 305, and CDP reports, and retire credits with blockchain-anchored certificates. Built for India\'s top 1,000 listed companies.',
    cta: 'Access Corporate Dashboard →',
    href: '/corporate',
    tag: 'CCTS + Voluntary Credits Available',
    title: 'Corporate Buyers',
  },
  {
    icon: Wheat,
    accentColor: '#8B5E3C',
    headline: 'Earn From Your Fields Without Changing Your Life',
    body: 'Stop burning stubble. Reduce urea slightly. Earn ₹2,000–₹4,000 per acre annually — paid directly to your UPI account. No paperwork. No complexity. Your FPO handles the rest with our mobile app.',
    cta: 'FPO Enrollment Guide →',
    href: '/farmers',
    tag: 'Available in Hindi, Punjabi, Marathi, Telugu',
    title: 'Farmers & FPOs',
  },
  {
    icon: TrendingUp,
    accentColor: '#B7E4C7',
    headline: "Forward Contracts on India's Fastest-Growing Asset Class",
    body: 'Fund early-stage green projects and receive verified carbon credits upon issuance. Transparent risk ratings, conservative yield estimates, and full audit trails. India\'s carbon market grows to ₹83,000 Cr by 2030.',
    cta: 'Explore Investment Products →',
    href: '/investors',
    tag: 'Forward Purchase Agreements Available',
    title: 'Investors & ESG Funds',
  },
];

export default function WhoWeServe() {
  return (
    <section
      id="who-we-serve"
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ background: 'var(--cgs-cream)' }}
      aria-label="Who We Serve"
    >
      {/* Section number */}
      <span
        className="section-number"
        style={{ color: 'var(--cgs-charcoal)', top: '2rem', left: '2rem', fontSize: '14rem' }}
        aria-hidden="true"
      >
        01
      </span>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
        >
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold italic text-[#1C1C1E] mb-4 leading-tight"
            style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
          >
            Built for Every
            <br />
            Voice in Green India
          </h2>
          <p
            className="text-lg text-gray-600 max-w-2xl"
            style={{ fontFamily: '"DM Sans", system-ui, sans-serif' }}
          >
            Whether you generate credits, need to offset emissions, or want to invest in India&apos;s green future — CGS is your infrastructure layer.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {audiences.map((a, i) => {
            const Icon = a.icon;
            return (
              <motion.article
                key={a.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
                style={{ borderLeft: `4px solid ${a.accentColor}` }}
              >
                {/* Hover glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                  style={{
                    boxShadow: `inset 0 0 0 1px ${a.accentColor}30`,
                    background: `radial-gradient(ellipse at top left, ${a.accentColor}08 0%, transparent 70%)`,
                  }}
                />

                {/* Icon */}
                <div
                  className="inline-flex items-center justify-center w-12 h-12 rounded-xl mb-5"
                  style={{ background: `${a.accentColor}18` }}
                >
                  <Icon size={22} style={{ color: a.accentColor }} />
                </div>

                {/* Tag badge */}
                <span
                  className="inline-block text-xs font-semibold px-3 py-1 rounded-full mb-4"
                  style={{
                    background: `${a.accentColor}15`,
                    color: a.accentColor,
                    fontFamily: '"DM Sans", system-ui, sans-serif',
                  }}
                >
                  {a.tag}
                </span>

                <h3
                  className="text-xl font-bold text-[#1C1C1E] mb-3 leading-snug"
                  style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
                >
                  {a.headline}
                </h3>

                <p
                  className="text-gray-600 text-sm leading-relaxed mb-6"
                  style={{ fontFamily: '"DM Sans", system-ui, sans-serif' }}
                >
                  {a.body}
                </p>

                <a
                  href={a.href}
                  className="text-sm font-semibold transition-all duration-200 inline-flex items-center gap-1 group/link"
                  style={{
                    color: a.accentColor,
                    fontFamily: '"DM Sans", system-ui, sans-serif',
                  }}
                  aria-label={a.cta}
                >
                  {a.cta}
                  <span className="transition-transform group-hover/link:translate-x-1">→</span>
                </a>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
