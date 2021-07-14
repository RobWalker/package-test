import { defineConfig } from 'vite';

import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';

// see https://github.com/subwaytime/vite-aliases
// import { ViteAliases } from 'vite-aliases'

import fs   from 'fs';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [ vue(), vueJsx() ],

  server: {
    host: "one.auctria.local",
    port: 3000,
  },

  build: {
    sourcemap: true
  },

  resolve: {
    // When aliasing to file system paths, always use absolute paths. Relative alias values will be used as-is and will not be resolved into file system paths.
    alias: {
      '@': path.resolve(__dirname, '/src'),
      '@base': path.resolve(__dirname, '../test-base/src'),
      '@core': path.resolve(__dirname, '../test-core/src')
    },

    dedupe: ['vue']
  }
  
})
