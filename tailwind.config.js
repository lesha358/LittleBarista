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
        primary: "#4A5568",
        secondary: "#718096",
        cream: {
          50: '#FFFBF7',
          100: '#FFF7EF',
          200: '#FFEFE7',
          300: '#FFE7DF',
          400: '#FFDFD7',
          500: '#FFD7CF',
          600: '#FFCFC7',
          700: '#FFC7BF',
          800: '#FFBFB7',
          900: '#FFB7AF',
        },
        brown: {
          50: '#FDF6F0',
          100: '#FAE9D9',
          200: '#F5D3B3',
          300: '#F0BD8D',
          400: '#EBA767',
          500: '#E69141',
          600: '#B8741B',
          700: '#8A5714',
          800: '#5C3A0D',
          900: '#2E1D06',
        }
      },
    },
  },
  plugins: [],
}; 