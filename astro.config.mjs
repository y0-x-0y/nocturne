// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://y0-x-0y.github.io',
  base: '/nocturne',
  output: 'static',
  vite: {
    plugins: [tailwindcss()]
  }
});
