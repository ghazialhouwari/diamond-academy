/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./storyblok/**/*.{js,vue,ts}",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          800: '#254B86',
          950: '#0C192D'
        },
        primary: colors.blue['500'],
        secondary: colors.blue['800'],
        dark: colors.blue['950'],
        error: colors.red['500'],
        info: colors.blue['500'],
        success: colors.green['500'],
        warning: colors.yellow['500'],
      }
    },
    fontFamily: {
      sans: ['"Roboto Condensed"', 'ui-sans-serif', 'system-ui'],
      heading: ['"Luckiest Guy"', 'ui-sans-serif', 'system-ui'],
      noto: ['"Noto Kufi Arabic"', 'ui-sans-serif', 'system-ui'],
    },
  },
  plugins: [],
}
