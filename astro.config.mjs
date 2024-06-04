import { defineConfig } from 'astro/config';
import vue from "@astrojs/vue";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  integrations: [vue(), tailwind({
    applyBaseStyles: false
  }), mdx(), sitemap(), robotsTxt()],
  site: 'https://flamerinus.github.io',
  base: '/Proxycalc'
});