// @ts-check
import { defineConfig, envField } from 'astro/config';
import node from '@astrojs/node';
import tailwindcss from '@tailwindcss/vite';


// https://astro.build/config
export default defineConfig({
  env: {
    schema:{
      BACK_API: envField.string({context: 'client', access: 'public'}),
    }
  },
  output: 'server',
  adapter: node({mode:'standalone'}),
  server: {
    host: "0.0.0.0",
    port: 8080,
  },
  vite: {
    plugins: [tailwindcss()],
  },
});