const config = require('./assets/config.json');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      sans: [
        config.googleFonts.family,
        'Helvetica',
        'Arial',
        'sans-serif',
      ].filter(Boolean),
    },
    extend: {
      colors: {
        'light-bg': config.theme.light.background,
        'dark-bg': config.theme.dark.background,
      },
    },
  },
  plugins: [],
};
