import { describe, it, expect } from "vitest";
import { shallowMount, VueWrapper, RouterLinkStub } from "@vue/test-utils";
import Header from "./Header.vue";
import { createI18n, type Locale } from "vue-i18n";
import en from "../../locales/en.json";
import ar from "../../locales/ar.json";

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
  wrapper = shallowMount(Header, {
    global: {
      plugins: [i18n],
    },
    stubs: {
      NuxtLink: RouterLinkStub,
    },
  });
};

describe("Header", async () => {
  test("logo redirects to home page", () => {
    setup();
    expect(wrapper.find("nuxtlink").exists()).toBeTruthy();
    expect(wrapper.find("nuxtlink").attributes().to).toBe("/");
  });
  test("logo redirects to home page with correct locale", () => {
    setup("ar");
    expect(wrapper.find("nuxtlink").attributes().to).toBe("/ar");
  });
  it("renders side menu trigger button", () => {
    setup();
    const menuButton = wrapper.find('button[title="Open mobile navigation"]');
    expect(menuButton.exists).toBeTruthy();
  });
  test("side menu trigger button emits event", () => {
    setup();
    const menuButton = wrapper.find('button[title="Open mobile navigation"]');
    menuButton.trigger("click");
    expect(wrapper.emitted()).toHaveProperty("toggleSideMenu");
  });
});
