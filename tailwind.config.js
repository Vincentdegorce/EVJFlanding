/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ivory: '#f7f2ec',
        cream: '#f0e6dc',
        beige: '#e6d7c6',
        blush: '#e9d8d2',
        bronze: '#b5977a',
        ink: '#211d1a',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['"Manrope"', 'sans-serif'],
      },
      boxShadow: {
        premium: '0 32px 70px -35px rgba(32, 24, 18, 0.55)',
        soft: '0 24px 40px -32px rgba(33, 29, 26, 0.45)',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease-out both',
        'fade-up-delayed': 'fadeUp 0.95s ease-out 0.15s both',
      },
    },
  },
  plugins: [],
}

