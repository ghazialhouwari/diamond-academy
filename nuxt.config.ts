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
      "@nuxtjs/google-fonts",
      {
        families: {
          "Luckiest+Guy": true,
          "Roboto+Condensed": true,
          "Noto+Kufi+Arabic": true,
        },
      },
    ],
    "nuxt-icon",
    [
      "@nuxt/image-edge",
      {
        storyblok: {
          baseURL: "https://a.storyblok.com/",
        },
      },
    ],
    [
      "@nuxtjs/i18n",
      {
        langDir: "locales",
        locales: [
          {
            code: "en",
            iso: "en-US",
            file: "en.json",
            name: "English",
          },
          {
            code: "ar",
            iso: "ar-sa",
            files: ["ar.json"],
            name: "Arabic",
          },
        ],
        defaultLocale: "en",
        vueI18n: {
          legacy: false,
          locale: "en",
          fallbackLocale: "en",
        },
      },
    ],
    [
      "@storyblok/nuxt",
      {
        accessToken: process.env.STORY_BLOCK_ACCESS_TOKEN,
      },
    ],
  ],
  components: [
    {
      path: "~/components/icons",
      global: true,
    },
    "~/components",
  ],
});
