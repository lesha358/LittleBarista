/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#C78149",
        secondary: "#8F8F8F",
        brand: {
          charcoal: '#121212',
          white: '#FFFFFF',
          copper: '#C78149',
          terracotta: '#CC6D3C',
          stone: '#7A7A7A',
          beige: '#E2D4C8',
          roast: '#5C3A24',
        },
        cream: {
          50: '#FBF7F2',
          100: '#F5EEE5',
          200: '#EADFD2',
          300: '#DDCDBD',
          400: '#D3BEA9',
          500: '#C5A68A',
          600: '#AE8D70',
          700: '#8A6C52',
          800: '#644C39',
          900: '#3D2C21',
        },
        brown: {
          50: '#F7F1EA',
          100: '#EDE0D2',
          200: '#DDBEA0',
          300: '#CB9B72',
          400: '#C78149',
          500: '#B86A39',
          600: '#8F4F2A',
          700: '#6D3C23',
          800: '#4C2B1A',
          900: '#251813',
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-in': 'slideIn 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}; 