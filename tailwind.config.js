const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');
const primary = colors.indigo;
const secondary = colors.pink;
const info = colors.sky;
const warning = colors.amber;
const success = colors.emerald;
const error = colors.red;

module.exports = {
  content: [
    './assets/**/*.{vue,js,css}',
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary,
        secondary,
        info,
        warning,
        success,
        error,
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
