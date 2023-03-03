import { defineConfig } from "vitest/config";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import path from "path";

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
      dirs: ["./composables/**"],
    }),
    Components({
      dirs: ["./components"],
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./"),
      //#components alias not resolved, @ works
      "#components": path.resolve(__dirname, "./.nuxt/components"),
    },
  },
});
