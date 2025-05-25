/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#FFB6C1',
        secondary: '#C8BFFF',
        accent: '#A7C7FF',
        background: '#FFF4E6',
        text: '#1A1A1A',
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
      },
      animation: {
        'pulse-slow': 'pulse 4s infinite',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};