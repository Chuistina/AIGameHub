/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'game-primary': '#4F46E5',
        'game-secondary': '#818CF8',
        'game-accent': '#C7D2FE',
      },
    },
  },
  plugins: [],
};