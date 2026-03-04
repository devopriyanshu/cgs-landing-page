'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const impactStats = [
  { value: 28.8, prefix: '₹', suffix: ' Cr', label: 'Direct farmer income targeted annually by Year 5', decimals: 1 },
  { value: 300000, prefix: '', suffix: '+', label: 'Acres of farmland under management (Year 3 target)', decimals: 0 },
  { value: 50, prefix: '', suffix: '+', label: 'Corporate buyers on the platform (Year 3 target)', decimals: 0 },
];

function ImpactStat({ stat, delay }: { stat: typeof impactStats[0]; delay: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  useEffect(() => {
    if (!inView) return;
    const duration = 2200;
    const startTime = Date.now();
    const ticker = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(eased * stat.value);
      if (progress < 1) requestAnimationFrame(ticker);
      else setCount(stat.value);
    };
    const t = setTimeout(() => requestAnimationFrame(ticker), delay * 1000);
    return () => clearTimeout(t);
  }, [inView, stat.value, delay]);

  const formatted =
    stat.decimals === 1
      ? count.toFixed(1)
      : Math.floor(count).toLocaleString('en-IN');

  return (
    <div ref={ref} className="text-center px-8">
      <motion.div
        className="text-5xl md:text-6xl font-bold text-[#D4A853] mb-3"
        style={{ fontFamily: '"DM Sans", system-ui, sans-serif' }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay }}
      >
        {stat.prefix}{formatted}{stat.suffix}
      </motion.div>
      <p
        className="text-sm text-[#B7E4C7]/70 max-w-[200px] mx-auto leading-snug"
        style={{ fontFamily: '"DM Sans", system-ui, sans-serif' }}
      >
        {stat.label}
      </p>
    </div>
  );
}

export default function ImpactNumbers() {
  return (
    <section
      className="relative py-20 md:py-28 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #2D6A4F 0%, #1B4332 100%)',
      }}
      aria-label="Impact Statistics"
    >
      {/* Background texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 80%, rgba(82,183,136,0.4) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(212,168,83,0.2) 0%, transparent 50%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-bold italic text-[#FAFAF8] mb-14"
          style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          The Impact We&apos;re Building Toward
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#52B788]/20 mb-12">
          {impactStats.map((stat, i) => (
            <ImpactStat key={stat.label} stat={stat} delay={i * 0.2} />
          ))}
        </div>

        <motion.p
          className="text-base text-[#B7E4C7]/70 italic max-w-3xl mx-auto"
          style={{ fontFamily: '"DM Sans", system-ui, sans-serif' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          &ldquo;Every credit traded on CGS is a direct income supplement for an Indian farmer, a verified offset for an Indian corporation, and a step toward India&apos;s Net Zero commitment.&rdquo;
        </motion.p>
      </div>
    </section>
  );
}
