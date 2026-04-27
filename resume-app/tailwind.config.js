/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,css}'],
  theme: {
    extend: {
      colors: {
        bg: 'rgb(var(--rgb-bg)          / <alpha-value>)',
        surface: '#EEF7FB',
        'surface-2': '#DFF0F7',
        'sky-accent': 'rgb(var(--rgb-sky)         / <alpha-value>)',
        'coral-accent': 'rgb(var(--rgb-coral)        / <alpha-value>)',
        terracotta: 'rgb(var(--rgb-terracotta)   / <alpha-value>)',
        navy: 'rgb(var(--rgb-navy)         / <alpha-value>)',
        'text-primary': '#1a2744',
        'text-muted': '#4A6274',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Montserrat', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
      },
      keyframes: {
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      animation: {
        'gradient-shift': 'gradient-shift 8s ease infinite',
      },
    },
  },
  plugins: [],
};
