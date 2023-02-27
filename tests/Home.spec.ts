import { describe, it, expect } from "vitest";
import { fileURLToPath } from "node:url";
import { setup, url, createPage } from "@nuxt/test-utils";
import i18n from "../modules/i18n";
import { getText } from "./helper";
import en from "../locales/en.json";
import ar from "../locales/ar.json";

await setup({
  rootDir: fileURLToPath(new URL(`..`, import.meta.url)),
  browser: true,
});

describe("Test hero title locale", async () => {
  it("renders English text correctly", async () => {
    const home = url("/");
    const page = await createPage();
    await page.goto(home);

    expect(await getText(page, '[data-test-id="hero-heading"]')).toEqual(
      en["diamond-academy"]
    );
  });
  it("renders Arabic text correctly", async () => {
    const home = url("/ar");
    const page = await createPage();
    await page.goto(home);

    expect(await getText(page, '[data-test-id="hero-heading"]')).toEqual(
      ar["diamond-academy"]
    );
  });
});
