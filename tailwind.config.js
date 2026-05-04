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
          50:  '#eef3fb',
          100: '#dbe6f7',
          200: '#b8cbed',
          300: '#8fa7dd',
          400: '#6476c4',
          500: '#1E3A8A',
          600: '#183169',
          700: '#12264f',
          800: '#0d1d3a',
          900: '#091328',
        },
        secondary: {
          50: '#eef2fb',
          100: '#dedeff',
          200: '#b9c6f6',
          300: '#8e9ce8',
          400: '#6274ce',
          500: '#3f56ac',
          600: '#32448a',
          700: '#283766',
          800: '#1f2b4b',
          900: '#161d33',
        },
        accent: {
          50:  '#fbf4d5',
          100: '#f7e2aa',
          200: '#efc870',
          300: '#e1b343',
          400: '#d4af37',
          500: '#b88f2f',
          600: '#947523',
          700: '#6f571b',
          800: '#4e4014',
          900: '#33290f',
        },
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
        gold: {
          50:  '#fbf4d5',
          100: '#f7e2aa',
          200: '#efc870',
          300: '#e1b343',
          400: '#d4af37',
          500: '#b88f2f',
          600: '#947523',
          700: '#6f571b',
          800: '#4e4014',
          900: '#33290f',
        }
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['"DM Sans"', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 4px 24px rgba(0,0,0,0.08)',
        'card-hover': '0 12px 40px rgba(0,0,0,0.14)',
      }
    },
  },
  plugins: [],
}
