import { describe, it, expect } from "vitest";
import { shallowMount } from "@vue/test-utils";
import Hero from "../components/Hero.vue";
import { createI18n } from "vue-i18n";

import en from "../locales/en.json";
import ar from "../locales/ar.json";

describe("Test hero title locale", async () => {
  it("renders English text correctly", async () => {
    const i18n = createI18n({
      locale: "en",
      legacy: false,
      messages: {
        en,
        ar,
      },
    });
    const wrapper = shallowMount(Hero, {
      global: {
        plugins: [i18n],
      },
    });
    const heading = await wrapper.find('[data-test-id="hero-heading"]');
    expect(heading.text()).toBe(en["diamond-academy"]);
  });
});
