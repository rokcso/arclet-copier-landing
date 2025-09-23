// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://arcletcopier.com",
  integrations: [tailwind()],
  i18n: {
    defaultLocale: "en",
    locales: ["en", "zh", "ja", "es"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
