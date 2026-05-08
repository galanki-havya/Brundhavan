/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#ba6c3c',
          50: '#fff3ea',
          100: '#f8dcc7',
          200: '#efc39f',
          300: '#e6a97a',
          400: '#d48356',
          500: '#ba6c3c',
          600: '#9b572f',
          700: '#7d4328',
          800: '#5c3220',
          900: '#3f2317',
        },

        secondary: {
          DEFAULT: '#9f5d41',
          50: '#f7f1e8',
          100: '#edd9c9',
          200: '#e2bea7',
          300: '#d49a7b',
          400: '#ba7455',
          500: '#9f5d41',
          600: '#7e4935',
          700: '#60372e',
          800: '#45281f',
          900: '#2f1913',
        },

        background: '#fffaf5',

        charcoal: {
          50: '#FAF7F2',
          100: '#F4EEE6',
          200: '#E7D9C7',
          300: '#DAC4AB',
          400: '#CDB094',
          500: '#5F5147',
          600: '#4A3D36',
          700: '#3A2618',
          800: '#2B1A12',
          900: '#1F120A',
        },

        gold: {
          50: '#FBF7EF',
          100: '#F3E4D4',
          200: '#EDD1B8',
          300: '#E5BD9C',
          400: '#D9A876',
          500: '#C89B3C',
          600: '#B8862F',
          700: '#8B5E3C',
          800: '#6B4829',
          900: '#4F3418',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['"DM Sans"', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 4px 24px rgba(0,0,0,0.08)',
        'card-hover': '0 12px 40px rgba(0,0,0,0.14)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      }
    },
  },
  plugins: [],
}
