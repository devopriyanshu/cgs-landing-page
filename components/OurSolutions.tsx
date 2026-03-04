'use client';

import { motion } from 'framer-motion';
import { ClipboardList, Calculator, Satellite, ShoppingBag, BarChart3, HandCoins, CheckCircle } from 'lucide-react';

const solutions = [
  {
    icon: ClipboardList,
    tag: 'For Project Developers',
    tagColor: '#52B788',
    headline: 'Get Your Green Project Structured in 48 Hours',
    body: 'Submit your project in 5 questions. Our team classifies it into the right pathway — ready inventory, pipeline, or early-stage — and contacts you within 48 hours with a clear action plan.',
    features: [
      'Sector coverage: Agri, Renewable, Waste, Industrial, Nature',
      'Progressive documentation — no paperwork upfront',
      'Bucket A/B/C classification with tailored support',
    ],
    cta: 'Start Project Registration',
    ctaHref: '/onboarding',
    ctaStyle: 'filled',
  },
  {
    icon: Calculator,
    tag: 'SaaS Tool — ₹15,000/month',
    tagColor: '#D4A853',
    headline: 'Know Your Credit Yield Before You Invest a Rupee',
    body: 'Our Structuring Toolkit guides you through methodology selection, baseline modelling, and financial projections — with honest conservative/base/optimistic scenarios. Powered by Verra VM0042 and Gold Standard frameworks.',
    features: [
      'Methodology selector (12 questions → best-fit recommendation)',
      'Carbon yield calculator with confidence intervals',
      'Revenue model including all platform, VVB, and registry costs',
    ],
    cta: 'Try the Structuring Toolkit',
    ctaHref: '/toolkit',
    ctaStyle: 'outline',
  },
  {
    icon: Satellite,
    tag: 'Verification Infrastructure',
    tagColor: '#B7E4C7',
    headline: 'Satellite-Verified. Audit-Ready. VVB-Submitted.',
    body: 'We integrate Satyukt and SatSure satellite APIs for agricultural monitoring, manage your entire VVB submission package, and track every open audit item so nothing falls through. Verification time reduced from 3 months to 6 weeks.',
    features: [
      'Sentinel-2 / Landsat integration for agri projects',
      'Auto-compiled VVB submission packages',
      'Compliance vs. voluntary workflows fully separated',
    ],
    cta: 'See MRV in Action',
    ctaHref: '/mrv',
    ctaStyle: 'outline',
  },
  {
    icon: ShoppingBag,
    tag: "India's Most Transparent Marketplace",
    tagColor: '#D4A853',
    headline: 'Buy, Sell, and Retire Verified Indian Carbon Credits',
    body: 'Browse credits by sector, geography, vintage, Quality Score, and SDG alignment. Each listing includes a Project Story — the farmer, the community, the impact. Procurement from ₹10L (e-commerce) to ₹10Cr+ (RFQ workflow).',
    features: [
      'Quality Score 1–5 on every credit (our proprietary framework)',
      'Blockchain-anchored retirement certificates',
      'Portfolio bundling — one contract, one certificate',
    ],
    cta: 'Browse the Marketplace',
    ctaHref: '/marketplace',
    ctaStyle: 'gold',
  },
  {
    icon: BarChart3,
    tag: 'SaaS — ₹5–25L/year',
    tagColor: '#52B788',
    headline: 'Auto-Generate Your BRSR, GRI, and CDP Reports',
    body: 'Connect your emissions data. Our dashboard shows your real-time offset portfolio vs. Net Zero target gap, and auto-generates BRSR Core Section B, GRI 305-1/2/3 tables, and CDP Climate questionnaire responses — audit-ready, one click.',
    features: [
      'SEBI BRSR Core compliant output',
      'Vintage expiry alerts and rebalancing recommendations',
      'Role-based access: Sustainability Officer / CFO / Auditor',
    ],
    cta: 'Request ESG Dashboard Demo',
    ctaHref: '/demo',
    ctaStyle: 'outline',
  },
  {
    icon: HandCoins,
    tag: 'Year 2 Feature — Waitlist Open',
    tagColor: '#8B5E3C',
    headline: 'Fund Green Projects. Receive Credits on Issuance.',
    body: 'Sign Forward Purchase Agreements directly with project developers at pre-agreed prices. Lock in 3–5 year supply before CCTS compliance drives prices higher. Risk-rated, legally structured, platform-managed.',
    features: [
      'Bilateral FPAs — no SEBI CIS triggers',
      'Risk ratings: delivery probability, methodology risk, policy risk',
      'Advance payment for farmers upon enrollment',
    ],
    cta: 'Join Forward Offtake Waitlist',
    ctaHref: '/waitlist',
    ctaStyle: 'outline',
  },
];

export default function OurSolutions() {
  return (
    <section
      id="solutions"
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ background: 'var(--cgs-deep)' }}
      aria-label="Our Solutions"
    >
      {/* Section number */}
      <span
        className="section-number"
        style={{ color: '#FAFAF8', top: '2rem', left: '2rem' }}
        aria-hidden="true"
      >
        02
      </span>

      {/* Background decoration */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 50% 60% at 80% 20%, rgba(29,67,50,0.3) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          className="mb-16 max-w-3xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
        >
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold italic text-[#FAFAF8] mb-4 leading-tight"
            style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
          >
            Six Solutions.
            <br />
            One Platform.
            <br />
            <span className="text-[#52B788]">The Complete Green Lifecycle.</span>
          </h2>
        </motion.div>

        {/* Solutions grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((sol, i) => {
            const Icon = sol.icon;
            return (
              <motion.article
                key={sol.headline}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -4, borderColor: 'rgba(82, 183, 136, 0.3)' }}
                className="group glass-card rounded-2xl p-7 flex flex-col h-full transition-all duration-300"
              >
                {/* Tag */}
                <span
                  className="text-[11px] font-semibold tracking-wider uppercase mb-4 inline-block"
                  style={{
                    color: sol.tagColor,
                    fontFamily: '"DM Sans", system-ui, sans-serif',
                  }}
                >
                  {sol.tag}
                </span>

                {/* Icon */}
                <div
                  className="inline-flex items-center justify-center w-11 h-11 rounded-xl mb-5"
                  style={{ background: `${sol.tagColor}20` }}
                >
                  <Icon size={20} style={{ color: sol.tagColor }} />
                </div>

                <h3
                  className="text-lg font-bold text-[#FAFAF8] mb-3 leading-snug"
                  style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
                >
                  {sol.headline}
                </h3>

                <p
                  className="text-sm text-[#B7E4C7]/60 leading-relaxed mb-5 flex-1"
                  style={{ fontFamily: '"DM Sans", system-ui, sans-serif' }}
                >
                  {sol.body}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {sol.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <CheckCircle size={13} className="text-[#52B788] flex-shrink-0 mt-0.5" />
                      <span
                        className="text-xs text-[#FAFAF8]/60"
                        style={{ fontFamily: '"DM Sans", system-ui, sans-serif' }}
                      >
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href={sol.ctaHref}
                  aria-label={sol.cta}
                  className={`text-sm font-semibold px-5 py-2.5 rounded-full text-center transition-all duration-200 ${
                    sol.ctaStyle === 'filled'
                      ? 'bg-[#52B788] text-[#0A1F14] hover:bg-[#B7E4C7]'
                      : sol.ctaStyle === 'gold'
                      ? 'bg-[#D4A853] text-[#0A1F14] hover:bg-[#F0C87A]'
                      : 'border border-[#52B788]/50 text-[#52B788] hover:border-[#52B788] hover:bg-[#52B788]/10'
                  }`}
                  style={{ fontFamily: '"DM Sans", system-ui, sans-serif' }}
                >
                  {sol.cta}
                </a>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
