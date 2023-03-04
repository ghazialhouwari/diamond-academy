// @vitest-environment nuxt
import { nextTick } from "vue";
import { describe, it, expect } from "vitest";
import { shallowMount, VueWrapper, RouterLinkStub } from "@vue/test-utils";
import LanguageSwitcher from "./LanguageSwitcher.vue";
import { createI18n, type Locale } from "vue-i18n";
import en from "../../locales/en.json";
import ar from "../../locales/ar.json";
import { mockNuxtImport } from "nuxt-vitest/utils";

mockNuxtImport("useSwitchLocalePath", () => {
  return () => {
    return (code: string) => `/${code}`;
  };
});

const locales = [
  {
    code: "en",
  },
  {
    code: "ar",
  },
  {
    code: "fr",
  },
];
mockNuxtImport("useI18n", () => {
  return () => {
    return {
      locale: "en",
      locales: {
        value: locales,
      },
    };
  };
});

let wrapper: VueWrapper;
const setup = (locale: Locale = "en") => {
  const i18n = createI18n({
    locale,
    legacy: false,
    messages: {
      en,
      ar,
    },
  });
  wrapper = shallowMount(LanguageSwitcher, {
    global: {
      plugins: [i18n],
    },
  });
};

describe("Language Switcher", async () => {
  it("renders two locale links for Arabic and English", () => {
    setup();
    expect(wrapper.findAll("nuxt-link-stub").length).toBe(locales.length);
  });
  it("doesn't render a separator for the last link", () => {
    setup();
    expect(wrapper.findAll("separator-stub").length).toBe(locales.length - 1);
  });
});
