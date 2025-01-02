import { defineConfig } from 'vite';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      src: resolve('src/'),
      types: resolve('src/types/'),
      scripts: resolve('src/scripts/'),
    },
  },
});
