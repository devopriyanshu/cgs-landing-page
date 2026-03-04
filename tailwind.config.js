/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'cgs-deep': '#0A1F14',
        'cgs-forest': '#1B4332',
        'cgs-moss': '#2D6A4F',
        'cgs-sage': '#52B788',
        'cgs-mist': '#B7E4C7',
        'cgs-cream': '#F8F4EE',
        'cgs-earth': '#8B5E3C',
        'cgs-gold': '#D4A853',
        'cgs-white': '#FAFAF8',
        'cgs-charcoal': '#1C1C1E',
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'Georgia', 'serif'],
        dmsans: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-cgs': 'linear-gradient(135deg, #2D6A4F 0%, #1B4332 100%)',
      },
      animation: {
        'turbine-spin': 'turbineSpin 20s linear infinite',
        'wheat-sway': 'wheatSway 4s ease-in-out infinite',
        'fade-rise': 'fadeRise 0.8s ease-out forwards',
        'count-up': 'countUp 2s ease-out forwards',
      },
      keyframes: {
        turbineSpin: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        wheatSway: {
          '0%, 100%': { transform: 'translateX(0) rotate(0deg)' },
          '50%': { transform: 'translateX(4px) rotate(1.5deg)' },
        },
        fadeRise: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        countUp: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
