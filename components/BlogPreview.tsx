'use client';

import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';

const articles = [
  {
    tag: 'Carbon Markets',
    tagColor: '#52B788',
    title: 'CCTS Compliance: What Every Listed Company Needs to Know Before FY2026',
    excerpt:
      "The Bureau of Energy Efficiency's Carbon Credit Trading Scheme creates mandatory offset obligations for large industries. Here's your action checklist.",
    readTime: '6 min read',
    href: '/blog/ccts-compliance-guide',
    gradientFrom: '#1B4332',
    gradientTo: '#2D6A4F',
  },
  {
    tag: 'Agricultural Carbon',
    tagColor: '#D4A853',
    title: 'How 10 Acres in Punjab Can Generate ₹2,720 in Annual Carbon Income',
    excerpt:
      'A complete walkthrough of how stubble prevention and urea reduction translate to Verra-certified carbon credits and direct UPI payments.',
    readTime: '4 min read',
    href: '/blog/farmer-carbon-income-guide',
    gradientFrom: '#2D3020',
    gradientTo: '#4A5030',
  },
  {
    tag: 'ESG Reporting',
    tagColor: '#B7E4C7',
    title: 'BRSR Core vs. GRI 305: Which Framework Should Your Company Report Under?',
    excerpt:
      "India's SEBI BRSR Core is now mandatory for top 1,000 listed companies. Here's how it maps to GRI and CDP — and how to automate all three.",
    readTime: '5 min read',
    href: '/blog/brsr-gri-cdp-comparison',
    gradientFrom: '#1A2030',
    gradientTo: '#283040',
  },
];

export default function BlogPreview() {
  return (
    <section
      className="py-24 md:py-32 overflow-hidden"
      style={{ background: 'var(--cgs-cream)' }}
      aria-label="Blog Preview"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-14 flex-wrap gap-4">
          <motion.h2
            className="text-4xl md:text-5xl font-bold italic text-[#1C1C1E] leading-tight"
            style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            Insights from
            <br />
            <span className="text-[#2D6A4F]">India&apos;s Green Economy</span>
          </motion.h2>
          <motion.a
            href="/blog"
            className="text-sm font-semibold text-[#2D6A4F] hover:text-[#52B788] transition-colors border-b border-[#2D6A4F]/40 pb-0.5"
            style={{ fontFamily: '"DM Sans", system-ui, sans-serif' }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            View All Insights →
          </motion.a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((article, i) => (
            <motion.article
              key={article.title}
              className="group rounded-2xl overflow-hidden bg-white shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -5 }}
            >
              {/* Card image area */}
              <div
                className="h-40 relative overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, ${article.gradientFrom}, ${article.gradientTo})`,
                }}
              >
                {/* Decorative pattern */}
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage:
                      'repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(82,183,136,0.15) 20px, rgba(82,183,136,0.15) 40px)',
                  }}
                />
                <div className="absolute bottom-4 left-5">
                  <span
                    className="text-xs font-bold px-3 py-1 rounded-full"
                    style={{
                      background: `${article.tagColor}25`,
                      color: article.tagColor,
                      fontFamily: '"DM Sans", system-ui, sans-serif',
                    }}
                  >
                    {article.tag}
                  </span>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h3
                  className="font-bold text-[#1C1C1E] text-base mb-3 leading-snug group-hover:text-[#2D6A4F] transition-colors"
                  style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
                >
                  {article.title}
                </h3>
                <p
                  className="text-sm text-gray-500 leading-relaxed mb-4 flex-1"
                  style={{ fontFamily: '"DM Sans", system-ui, sans-serif' }}
                >
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-1.5 text-xs text-gray-400">
                    <Clock size={12} />
                    <span style={{ fontFamily: '"DM Sans", system-ui, sans-serif' }}>{article.readTime}</span>
                  </div>
                  <a
                    href={article.href}
                    className="text-xs font-semibold text-[#2D6A4F] hover:text-[#52B788] transition-colors"
                    style={{ fontFamily: '"DM Sans", system-ui, sans-serif' }}
                    aria-label={`Read: ${article.title}`}
                  >
                    Read more →
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
