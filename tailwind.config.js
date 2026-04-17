/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        teal: {
          DEFAULT: '#2CBEC9',
          glow: '#6FE3EA',
          mid: '#1fa0aa',
          dark: '#147880',
        },
        brand: {
          dark: '#0f1418',
          darker: '#080e16',
          light: '#f4f7f8',
        },
      },
      fontFamily: {
        tajawal: ['Tajawal', 'sans-serif'],
        dm: ['DM Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
