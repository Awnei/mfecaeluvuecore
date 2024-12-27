import Components from 'unplugin-vue-components/vite';
import Vue from '@vitejs/plugin-vue';
import Vuetify, { transformAssetUrls } from 'vite-plugin-vuetify';
import { defineConfig } from 'vite';
import { fileURLToPath, URL } from 'node:url';
import VueDevTools from 'vite-plugin-vue-devtools';
import ModuleFederation from '@originjs/vite-plugin-federation';

export default defineConfig({
  plugins: [
    Vue({
      template: { transformAssetUrls },
    }),
    Vuetify({
      autoImport: true,
    }),
    Components(),
    VueDevTools(),
    ModuleFederation({
      name: 'core-app',
      filename: 'remoteEntry.js',
      exposes: {
        './vuetify': './src/plugins/vuetify.ts',
        './pinia': './src/plugins/pinia.ts',
      },
      shared: ['vue']
    })
  ],
  define: { 'process.env': {} },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
    extensions: [
      '.js',
      '.json',
      '.jsx',
      '.mjs',
      '.ts',
      '.tsx',
      '.vue',
    ],
  },
  server: {
    port: 3000,
  },
  build: {
    outDir: 'dist',
    target: 'esnext',
  },
})
