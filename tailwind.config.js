/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#28ABE6',
          blueLight: '#5BC4F0',
          blueDark: '#1A8FC4',
          navy: '#2B4570',
          navyLight: '#3A5A8C',
          navyDark: '#1E3255',
          green: '#7AC74F',
          greenLight: '#A3DC7E',
          greenDark: '#5BA836',
        },
        surface: {
          0: '#FFFFFF',
          50: '#F7FAFC',
          100: '#F0F6FA',
          200: '#E6EFF5',
          300: '#D5E3EC',
          400: '#C2D2DE',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'sans-serif'],
      },
      fontSize: {
        '7xl': ['4.5rem', { lineHeight: '1.05', letterSpacing: '-0.03em' }],
        '8xl': ['6rem', { lineHeight: '1.02', letterSpacing: '-0.04em' }],
      },
      boxShadow: {
        soft: '0 2px 20px rgba(43, 69, 112, 0.06)',
        card: '0 4px 30px rgba(43, 69, 112, 0.08)',
        float: '0 10px 50px rgba(43, 69, 112, 0.12)',
        glow: '0 0 40px rgba(40, 171, 230, 0.15)',
        'glow-navy': '0 0 40px rgba(43, 69, 112, 0.1)',
      },
      backgroundImage: {
        'grid-light': "linear-gradient(rgba(43,69,112,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(43,69,112,0.04) 1px, transparent 1px)",
        'radial-blue': 'radial-gradient(circle at 50% 0%, rgba(40,171,230,0.08), transparent 60%)',
      },
      backgroundSize: {
        grid: '40px 40px',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'draw-line': 'drawLine 2s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        drawLine: {
          '0%': { strokeDashoffset: '1000' },
          '100%': { strokeDashoffset: '0' },
        },
      },
    },
  },
  plugins: [],
};
