import { defineConfig } from "vitest/config";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";

export default defineConfig({
  test: {
    globals: true,
    environment: "jsdom",
    clearMocks: true,
    restoreMocks: true,
    threads: false,
    testTimeout: 300000,
    deps: {
      inline: [/@nuxt\/test-utils/],
    },
  },
  plugins: [
    vue(),
    AutoImport({
      imports: ["vue", "vue-i18n"],
    }),
  ],
});
