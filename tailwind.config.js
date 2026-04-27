/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          900: '#0a1424',
          800: '#0f1d33',
          700: '#1c2e48',
        },
        charcoal: '#101820',
        gold: {
          100: '#f9edd0',
          200: '#e8d9b5',
          300: '#d9c08b',
          400: '#c9a968',
        },
      },
      boxShadow: {
        panel: '0 18px 45px rgba(7, 16, 30, 0.35)',
      },
      backgroundImage: {
        'hero-glow':
          'linear-gradient(110deg, rgba(10, 20, 36, 0.92) 0%, rgba(10, 20, 36, 0.78) 40%, rgba(15, 29, 51, 0.52) 62%, rgba(10, 20, 36, 0.95) 100%), radial-gradient(circle at 12% 20%, rgba(232, 217, 181, 0.22), rgba(10, 20, 36, 0) 45%)',
        'cta-glow':
          'radial-gradient(circle at 5% 50%, rgba(201, 169, 104, 0.3), rgba(16, 24, 32, 1) 55%)',
      },
    },
  },
  plugins: [],
}

