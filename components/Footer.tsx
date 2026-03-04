'use client';

import { Linkedin, Twitter, Instagram } from 'lucide-react';

const footerLinks = {
  solutions: [
    { label: 'Project Onboarding', href: '/onboarding' },
    { label: 'Structuring Toolkit', href: '/toolkit' },
    { label: 'MRV Workflow', href: '/mrv' },
    { label: 'Carbon Marketplace', href: '/marketplace' },
    { label: 'ESG Dashboard', href: '/esg' },
    { label: 'Forward Offtake', href: '/waitlist' },
  ],
  whoWeServe: [
    { label: 'Project Developers', href: '/onboarding' },
    { label: 'Corporate Buyers', href: '/corporate' },
    { label: 'Farmers & FPOs', href: '/farmers' },
    { label: 'ESG Investors', href: '/investors' },
    { label: 'NGOs & Municipalities', href: '/ngos' },
    { label: 'Exporters', href: '/exporters' },
  ],
  company: [
    { label: 'About CGS', href: '/about' },
    { label: 'Our Governance', href: '/governance' },
    { label: 'Regulatory Framework', href: '/regulatory' },
    { label: 'Blog & Insights', href: '/blog' },
    { label: 'Careers', href: '/careers' },
    { label: 'Contact Us', href: '/contact' },
  ],
};

export default function Footer() {
  return (
    <footer
      className="pt-16 pb-8"
      style={{ background: 'var(--cgs-charcoal)' }}
      aria-label="Site footer"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* 4-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Column 1: Brand */}
          <div>
            <div className="mb-4">
              <span
                className="text-3xl font-bold italic text-[#52B788]"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                CGS
              </span>
              <p
                className="text-[11px] tracking-widest uppercase text-[#B7E4C7]/50 mt-0.5"
                style={{ fontFamily: '"DM Sans", system-ui, sans-serif' }}
              >
                Common Ground Solutions
              </p>
            </div>
            <p
              className="text-sm text-[#B7E4C7]/50 mb-5 leading-relaxed max-w-[200px]"
              style={{ fontFamily: '"DM Sans", system-ui, sans-serif' }}
            >
              India&apos;s Green Infrastructure Platform
            </p>
            {/* Social icons */}
            <div className="flex gap-3 mb-5">
              {[
                { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com' },
                { icon: Twitter, label: 'Twitter / X', href: 'https://x.com' },
                { icon: Instagram, label: 'Instagram', href: 'https://instagram.com' },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-[#B7E4C7]/40 hover:text-[#52B788] hover:border-[#52B788]/40 transition-all duration-200"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
            <div className="space-y-1">
              <a
                href="https://commongroundsolutions.in"
                className="block text-xs text-[#52B788]/60 hover:text-[#52B788] transition-colors"
                style={{ fontFamily: '"DM Sans", system-ui, sans-serif' }}
              >
                commongroundsolutions.in
              </a>
              <a
                href="https://cgsolint.com"
                className="block text-xs text-[#52B788]/60 hover:text-[#52B788] transition-colors"
                style={{ fontFamily: '"DM Sans", system-ui, sans-serif' }}
              >
                cgsolint.com
              </a>
            </div>
          </div>

          {/* Column 2: Solutions */}
          <div>
            <h3
              className="text-xs font-bold tracking-widest uppercase text-[#FAFAF8]/80 mb-4"
              style={{ fontFamily: '"DM Sans", system-ui, sans-serif' }}
            >
              Our Solutions
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.solutions.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-[#B7E4C7]/45 hover:text-[#52B788] transition-colors"
                    style={{ fontFamily: '"DM Sans", system-ui, sans-serif' }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Who We Serve */}
          <div>
            <h3
              className="text-xs font-bold tracking-widest uppercase text-[#FAFAF8]/80 mb-4"
              style={{ fontFamily: '"DM Sans", system-ui, sans-serif' }}
            >
              Who We Serve
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.whoWeServe.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-[#B7E4C7]/45 hover:text-[#52B788] transition-colors"
                    style={{ fontFamily: '"DM Sans", system-ui, sans-serif' }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Company */}
          <div>
            <h3
              className="text-xs font-bold tracking-widest uppercase text-[#FAFAF8]/80 mb-4"
              style={{ fontFamily: '"DM Sans", system-ui, sans-serif' }}
            >
              Company
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-[#B7E4C7]/45 hover:text-[#52B788] transition-colors"
                    style={{ fontFamily: '"DM Sans", system-ui, sans-serif' }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p
            className="text-xs text-[#B7E4C7]/30"
            style={{ fontFamily: '"DM Sans", system-ui, sans-serif' }}
          >
            © 2025 Common Ground Solutions Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex gap-4">
            {['Privacy Policy', 'Terms of Service', 'Grievance Policy'].map((label) => (
              <a
                key={label}
                href={`/${label.toLowerCase().replace(/ /g, '-')}`}
                className="text-xs text-[#B7E4C7]/30 hover:text-[#52B788] transition-colors"
                style={{ fontFamily: '"DM Sans", system-ui, sans-serif' }}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
