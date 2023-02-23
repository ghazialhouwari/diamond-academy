/** @type {import('tailwindcss').Config} */
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
    extend: {},
    fontFamily: {
      sans: ['"Roboto Condensed"', 'ui-sans-serif', 'system-ui'],
      heading: ['"Luckiest Guy"', 'ui-sans-serif', 'system-ui'],
    },
  },
  plugins: [],
}
