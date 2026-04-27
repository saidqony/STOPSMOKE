/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // 60% — Background utama
        'clean-cloud': '#F8FAFC',
        'clean-cloud-dark': '#E2E8F0',
        // 30% — Heading, navigasi, footer
        'medical-trust': '#1E3A8A',
        'medical-trust-light': '#3B82F6',
        'medical-trust-dark': '#0F172A',
        // 10% — CTA, aksen
        'recovery-green': '#10B981',
        'recovery-green-dark': '#059669',
        'recovery-green-light': '#34D399',
        // Text
        'text-body': '#334155',
        'text-muted': '#475569',
        'text-light': '#64748B',
      },
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
        lora: ['Lora', 'serif'],
        opensans: ['"Open Sans"', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
      },
      fontSize: {
        'hero': ['52px', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
        'h1-med': ['48px', { lineHeight: '1.3' }],
        'h2': ['40px', { lineHeight: '1.2' }],
        'h3': ['28px', { lineHeight: '1.2' }],
        'h4': ['22px', { lineHeight: '1.3' }],
        'lead': ['18px', { lineHeight: '1.7' }],
        'body': ['16px', { lineHeight: '1.7' }],
        'sm-body': ['15px', { lineHeight: '1.6' }],
        'caption': ['14px', { lineHeight: '1.5' }],
        'label': ['13px', { lineHeight: '1.4' }],
      },
      spacing: {
        'xs': '4px',
        'sm': '8px',
        'md': '16px',
        'lg': '24px',
        'xl': '32px',
        '2xl': '48px',
        '3xl': '64px',
        '4xl': '80px',
        '5xl': '100px',
      },
      maxWidth: {
        'container': '1200px',
      },
      borderRadius: {
        'sm': '0.25rem',
        DEFAULT: '0.5rem',
        'md': '0.75rem',
        'lg': '1rem',
        'xl': '1.5rem',
        '2xl': '2rem',
        '3xl': '3rem',
      },
      boxShadow: {
        'card': '0 1px 3px rgba(0,0,0,0.05), 0 1px 2px rgba(0,0,0,0.06)',
        'card-hover': '0 10px 25px rgba(0,0,0,0.1), 0 4px 10px rgba(0,0,0,0.05)',
        'cta': '0 4px 14px rgba(16,185,129,0.35)',
        'cta-lg': '0 8px 30px rgba(16,185,129,0.4)',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease forwards',
        'pulse-ring': 'pulseRing 2s cubic-bezier(0.215, 0.61, 0.355, 1) infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseRing: {
          '0%': { transform: 'scale(1)', opacity: '0.8' },
          '80%, 100%': { transform: 'scale(2)', opacity: '0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};
