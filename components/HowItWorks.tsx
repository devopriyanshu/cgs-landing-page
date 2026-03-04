'use client';

import { motion } from 'framer-motion';
import { ClipboardCheck, Search, FileText, Satellite, Award, Store, CheckCircle } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: ClipboardCheck,
    label: 'Project Registration',
    description: 'Submit in 5 questions. Classified in 48 hours.',
  },
  {
    number: '02',
    icon: Search,
    label: 'Pre-Screen & Bucket Assignment',
    description: 'Human-assisted review. Tailored onboarding path assigned.',
  },
  {
    number: '03',
    icon: FileText,
    label: 'Eligibility & Structuring',
    description: 'Methodology selected. Yield modelled. Additionality assessed.',
  },
  {
    number: '04',
    icon: Satellite,
    label: 'MRV & Verification',
    description: 'Satellite monitoring + VVB audit. Submission package auto-compiled.',
  },
  {
    number: '05',
    icon: Award,
    label: 'Registry Issuance',
    description: 'Verra or Gold Standard credits issued. Serial numbers confirmed.',
  },
  {
    number: '06',
    icon: Store,
    label: 'Marketplace Listing',
    description: 'Quality-scored listing. Project Story published. Available to buyers.',
  },
  {
    number: '07',
    icon: CheckCircle,
    label: 'Retirement & Reporting',
    description: 'Corporate buys, retires credits. BRSR/CDP reports auto-generated.',
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ background: 'var(--cgs-cream)' }}
      aria-label="How It Works"
    >
      {/* Section number */}
      <span
        className="section-number"
        style={{ color: 'var(--cgs-charcoal)', top: '2rem', left: '2rem' }}
        aria-hidden="true"
      >
        03
      </span>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold italic text-[#1C1C1E] mb-4 leading-tight"
            style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
          >
            From First Idea to
            <br />
            Verified Credit —
            <br />
            <span className="text-[#2D6A4F]">The CGS Lifecycle</span>
          </h2>
        </motion.div>

        {/* Desktop stepper */}
        <div className="hidden lg:block relative mb-16">
          {/* Connecting dashed line */}
          <div
            className="absolute top-8 left-0 right-0 h-px"
            style={{
              backgroundImage: 'repeating-linear-gradient(to right, #52B788 0, #52B788 12px, transparent 12px, transparent 22px)',
              opacity: 0.4,
            }}
          />

          <div className="grid grid-cols-7 gap-2 relative">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.label}
                  className="flex flex-col items-center text-center group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                >
                  {/* Step circle */}
                  <div
                    className="relative w-16 h-16 rounded-full flex items-center justify-center mb-4 z-10 border-2 bg-[#F8F4EE] transition-all duration-300 group-hover:bg-[#52B788] group-hover:border-[#52B788] group-hover:shadow-lg group-hover:shadow-[#52B788]/20"
                    style={{ borderColor: '#52B788' }}
                  >
                    <Icon
                      size={22}
                      className="text-[#52B788] group-hover:text-[#0A1F14] transition-colors duration-300"
                    />
                    {/* Step number badge */}
                    <span
                      className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-[#1B4332] text-[#B7E4C7] text-[9px] font-bold flex items-center justify-center"
                      style={{ fontFamily: '"DM Sans", system-ui, sans-serif' }}
                    >
                      {i + 1}
                    </span>
                  </div>

                  <h3
                    className="text-xs font-bold text-[#1C1C1E] mb-1 leading-tight"
                    style={{ fontFamily: '"DM Sans", system-ui, sans-serif' }}
                  >
                    {step.label}
                  </h3>
                  <p
                    className="text-[10px] text-gray-500 leading-snug"
                    style={{ fontFamily: '"DM Sans", system-ui, sans-serif' }}
                  >
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile vertical timeline */}
        <div className="lg:hidden relative mb-16">
          <div
            className="absolute left-7 top-0 bottom-0 w-px"
            style={{ background: 'linear-gradient(to bottom, #52B788, transparent)' }}
          />
          <div className="space-y-8">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.label}
                  className="flex items-start gap-5 pl-2"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                >
                  <div className="w-10 h-10 rounded-full bg-[#1B4332] border-2 border-[#52B788] flex items-center justify-center flex-shrink-0 z-10">
                    <Icon size={16} className="text-[#52B788]" />
                  </div>
                  <div className="pt-1">
                    <h3
                      className="text-sm font-bold text-[#1C1C1E] mb-1"
                      style={{ fontFamily: '"DM Sans", system-ui, sans-serif' }}
                    >
                      {step.label}
                    </h3>
                    <p
                      className="text-xs text-gray-500"
                      style={{ fontFamily: '"DM Sans", system-ui, sans-serif' }}
                    >
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p
            className="text-gray-500 mb-4 text-sm"
            style={{ fontFamily: '"DM Sans", system-ui, sans-serif' }}
          >
            Ready to begin?
          </p>
          <a
            href="/onboarding"
            aria-label="Proceed to Project Onboarding"
            className="inline-flex items-center gap-2 px-10 py-4 rounded-full font-semibold text-base bg-[#52B788] text-[#0A1F14] hover:bg-[#2D6A4F] hover:text-[#FAFAF8] transition-all duration-300 shadow-lg shadow-[#52B788]/20"
            style={{ fontFamily: '"DM Sans", system-ui, sans-serif' }}
          >
            Proceed to Project Onboarding →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
