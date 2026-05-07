// @ts-check
import { defineConfig, envField } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import icon from 'astro-icon';


// https://astro.build/config
export default defineConfig({
  integrations: [icon()],
  env:{
    schema:{
      API: envField.string({context: "client", access: "public" }),
    }
  },

  prefetch: {
    prefetchAll: true,
    defaultStrategy: "viewport",
  },

  build: {
    inlineStylesheets: "always",
  },

  vite: {
    plugins: [tailwindcss()]
  },

});