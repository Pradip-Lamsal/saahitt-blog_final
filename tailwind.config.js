import { fontFamily } from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        manrope: ['var(--font-manrope)', ...fontFamily.sans],
        domine: ['var(--font-domine)', ...fontFamily.serif],
        recoleta: ['Recoleta', 'serif'],
      colors: {
        amber: {
          500: '#F2AE30', // Color for the Saahitt logo
          600: '#E09E20', // Slightly darker for hover state
        },
      },
    },
  },
},
  plugins: [],
} 