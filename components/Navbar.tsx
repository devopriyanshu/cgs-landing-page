'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Solutions', href: '#solutions' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Sectors', href: '#sectors' },
  { label: 'Marketplace', href: '#marketplace' },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#0A1F14]/95 backdrop-blur-md shadow-lg shadow-black/20'
            : 'bg-transparent'
        }`}
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-6 h-18 flex items-center justify-between py-4">
          {/* Logo */}
          <a href="/" className="flex flex-col leading-none group" aria-label="CGS Home">
            <span
              className="text-2xl font-bold italic text-[#52B788] transition-colors group-hover:text-[#B7E4C7]"
              style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
            >
              CGS
            </span>
            <span className="text-[10px] tracking-widest text-[#B7E4C7]/60 uppercase font-dmsans">
              Common Ground Solutions
            </span>
          </a>

          {/* Desktop nav links */}
          <ul className="hidden lg:flex items-center gap-8" role="list">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  aria-label={link.label}
                  className="text-sm font-medium text-[#FAFAF8]/80 hover:text-[#52B788] transition-colors duration-200 tracking-wide"
                  style={{ fontFamily: '"DM Sans", system-ui, sans-serif' }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="/list-project"
              aria-label="List Your Project"
              className="px-5 py-2.5 text-sm font-medium rounded-full border border-[#52B788] text-[#52B788] hover:bg-[#52B788]/10 transition-all duration-200"
              style={{ fontFamily: '"DM Sans", system-ui, sans-serif' }}
            >
              List Your Project
            </a>
            <a
              href="/platform"
              aria-label="Enter Platform"
              className="px-5 py-2.5 text-sm font-semibold rounded-full bg-[#52B788] text-[#0A1F14] hover:bg-[#B7E4C7] transition-all duration-200 shadow-md shadow-[#52B788]/20"
              style={{ fontFamily: '"DM Sans", system-ui, sans-serif' }}
            >
              Enter Platform
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 text-[#FAFAF8] hover:text-[#52B788] transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile full-screen overlay */}
      <div
        className={`fixed inset-0 z-40 bg-[#0A1F14] transition-all duration-500 flex flex-col items-center justify-center gap-8 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <a href="/" className="flex flex-col items-center leading-none mb-8">
          <span
            className="text-4xl font-bold italic text-[#52B788]"
            style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
          >
            CGS
          </span>
          <span className="text-xs tracking-widest text-[#B7E4C7]/60 uppercase mt-1">
            Common Ground Solutions
          </span>
        </a>

        {navLinks.map((link, i) => (
          <a
            key={link.label}
            href={link.href}
            onClick={() => setMenuOpen(false)}
            className="text-2xl font-medium text-[#FAFAF8] hover:text-[#52B788] transition-colors"
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              animationDelay: `${i * 0.05}s`,
            }}
          >
            {link.label}
          </a>
        ))}

        <div className="flex flex-col items-center gap-4 mt-8">
          <a
            href="/list-project"
            className="px-8 py-3 text-base font-medium rounded-full border border-[#52B788] text-[#52B788] hover:bg-[#52B788]/10 transition-all"
          >
            List Your Project
          </a>
          <a
            href="/platform"
            className="px-8 py-3 text-base font-semibold rounded-full bg-[#52B788] text-[#0A1F14] hover:bg-[#B7E4C7] transition-all"
          >
            Enter Platform
          </a>
        </div>
      </div>
    </>
  );
}
