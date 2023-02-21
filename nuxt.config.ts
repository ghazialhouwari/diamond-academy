export default defineNuxtConfig({
  build: {
    transpile: ["trpc-nuxt"],
  },
  runtimeConfig: {
    public: {
      storyblokAccessLevel: process.env.STORY_BLOCK_ACCESS_TOKEN_LEVEL,
    },
  },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    [
      "@storyblok/nuxt",
      {
        accessToken: process.env.STORY_BLOCK_ACCESS_TOKEN,
      },
    ],
  ],
});
