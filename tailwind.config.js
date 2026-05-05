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
          DEFAULT: '#0B1F3A',
          50: '#f0f4f9',
          100: '#dde6f3',
          200: '#bccce6',
          300: '#8fa7dd',
          400: '#6476c4',
          500: '#3b51b5',
          600: '#1D4ED8',
          700: '#1f2d6b',
          800: '#151d47',
          900: '#020617',
        },
        secondary: {
          DEFAULT: '#1f2b4b',
          50: '#f0f4f8',
          100: '#dce4f0',
          200: '#b9c9e0',
          300: '#8fa7d1',
          400: '#6274c2',
          500: '#3f56ac',
          600: '#32448a',
          700: '#283766',
          800: '#1f2b4b',
          900: '#161d33',
        },
        gold: {
          DEFAULT: '#FACC15',
          50: '#fffaf0',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#FACC15',
          500: '#EAB308',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
        accent: '#C9A227',
        background: '#F8FAFC',
        muted: '#64748B',
        charcoal: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
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
