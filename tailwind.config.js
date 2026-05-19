/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
          cream: '#fdfcf0',
        // ───────────────── PRIMARY BRAND (Royal Blue)
        primary: {
          DEFAULT: '#1E4FA3',
          50:  '#EEF4FF',
          100: '#DCE8FF',
          200: '#B8D0FF',
          300: '#8CB2FF',
          400: '#5D8EFF',
          500: '#1E4FA3',
          600: '#183F84',
          700: '#123166',
          800: '#0D2348',
          900: '#07152C',
        },

        // ───────────────── SECONDARY (Gold / Bronze)
        secondary: {
          DEFAULT: '#C89B3C',
          50:  '#FCF8EE',
          100: '#F6E7C6',
          200: '#EDD39A',
          300: '#E2BE6E',
          400: '#D4A94E',
          500: '#C89B3C',
          600: '#A57D2D',
          700: '#7F5E24',
          800: '#5B4218',
          900: '#3A2A0D',
        },

        // ───────────────── BACKGROUND
        background: '#ffffff',


        // ───────────────── NEUTRALS
        charcoal: {
          50:  '#F8F9FB',
          100: '#EEF1F5',
          200: '#DCE2EA',
          300: '#C2CBD8',
          400: '#95A3B8',
          500: '#5B6575',
          600: '#444D5A',
          700: '#313844',
          800: '#1F242D',
          900: '#11151B',
        },

        // ───────────────── GOLD ACCENTS
        gold: {
          50:  '#FFFBEF',
          100: '#FDF1C8',
          200: '#F8E08F',
          300: '#F0CB57',
          400: '#DDB03A',
          500: '#C89B3C',
          600: '#B58A1F',
          700: '#8A6818',
          800: '#614712',
          900: '#3D2B08',
        },

        // ───────────────── LOGO PETAL COLORS
        petals: {
          orange: '#F28C28',
          purple: '#7C4DFF',
          sky:    '#42A5F5',
          pink:   '#FF6347',
          yellow: '#F4C430',
          green:  '#22C55E',
          teal:   '#14B8A6',
          lime:   '#84CC16',
        },

        // ───────────────── UTILITY COLORS
        success: '#22C55E',
        warning: '#F59E0B',
        danger:  '#E63946',
        info:    '#0EA5E9',
      },

      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body:    ['"DM Sans"', 'sans-serif'],
      },

      boxShadow: {
        card:        '0 6px 24px rgba(17, 21, 27, 0.06)',
        'card-hover':'0 14px 40px rgba(17, 21, 27, 0.12)',
        soft:        '0 2px 10px rgba(17, 21, 27, 0.04)',
        gold:        '0 8px 24px rgba(200, 155, 60, 0.18)',
        blue:        '0 8px 24px rgba(30, 79, 163, 0.16)',
      },

      animation: {
        'fade-in':  'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
      },

      keyframes: {
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%':   { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%':   { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
}