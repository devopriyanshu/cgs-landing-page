'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

interface Stat {
  value: string;
  prefix?: string;
  suffix?: string;
  numericEnd: number;
  label: string;
}

const stats: Stat[] = [
  {
    prefix: '',
    value: '80M+',
    numericEnd: 80,
    suffix: 'M+',
    label: 'Farmers Addressable Across India',
  },
  {
    prefix: '₹',
    value: '₹83,000 Cr',
    numericEnd: 83000,
    suffix: ' Cr',
    label: 'Carbon Market Size by 2030',
  },
  {
    prefix: '',
    value: '7',
    numericEnd: 7,
    suffix: '',
    label: 'Green Sectors We Cover',
  },
  {
    prefix: '',
    value: 'Verra + GS',
    numericEnd: -1,
    suffix: '',
    label: 'Internationally Certified Standards',
  },
];

function CountUpStat({ stat, delay }: { stat: Stat; delay: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  useEffect(() => {
    if (!inView || stat.numericEnd === -1) return;
    let start = 0;
    const duration = 1800;
    const startTime = Date.now();

    const tick = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(eased * stat.numericEnd);
      setCount(current);
      if (progress < 1) requestAnimationFrame(tick);
      else setCount(stat.numericEnd);
    };

    const timeout = setTimeout(() => requestAnimationFrame(tick), delay * 1000);
    return () => clearTimeout(timeout);
  }, [inView, stat.numericEnd, delay]);

  const displayValue =
    stat.numericEnd === -1
      ? stat.value
      : `${stat.prefix ?? ''}${count.toLocaleString('en-IN')}${stat.suffix}`;

  return (
    <div ref={ref} className="flex flex-col items-center text-center px-6 py-2">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay }}
        className="text-4xl md:text-5xl font-bold text-[#D4A853] mb-2"
        style={{ fontFamily: '"DM Sans", system-ui, sans-serif' }}
      >
        {displayValue}
      </motion.div>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: delay + 0.2 }}
        className="text-sm text-[#B7E4C7]/70 max-w-[150px] leading-snug"
        style={{ fontFamily: '"DM Sans", system-ui, sans-serif' }}
      >
        {stat.label}
      </motion.p>
    </div>
  );
}

export default function StatsBar() {
  return (
    <section
      className="w-full py-12"
      style={{ background: 'var(--cgs-forest)' }}
      aria-label="Key statistics"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-[#52B788]/20">
          {stats.map((stat, i) => (
            <CountUpStat key={stat.label} stat={stat} delay={i * 0.15} />
          ))}
        </div>
      </div>
    </section>
  );
}
