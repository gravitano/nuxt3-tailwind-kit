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
    './server/**/*.{js,ts}',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './node_modules/windplus/styles/**/*.{vue,js,css}',
    './node_modules/windplus/styles/*.{vue,js,css}',
    './node_modules/windplus/styles/main.css',
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
      textColor: {
        skin: {
          base: 'var(--color-text-base)',
          muted: 'var(--color-text-muted)',
          icon: 'var(--color-text-icon)',
        },
      },
      backgroundColor: {
        skin: {
          fill: 'var(--color-fill)',
          'icon-fill': 'var(--color-icon-fill)',
        },
      },
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};
