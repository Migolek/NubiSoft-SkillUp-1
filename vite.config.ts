import path from 'path';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import commonjsExternals from 'vite-plugin-commonjs-externals';
import EnvironmentPlugin from 'vite-plugin-environment';

const modules = ['path'];

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    commonjsExternals({
      externals: modules,
    }),
    EnvironmentPlugin('all', { prefix: 'APP_' }),
  ],
  build: {
    assetsDir: '.',
    rollupOptions: {
      output: {
        format: 'cjs',
      },
      external: modules,
    },
    outDir: 'build',
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  css: {
    modules: {
      generateScopedName: '[name]__[local]___[hash:base64:5]',
    },
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "./src/assets/scss/_variables.scss";
        `,
      },
    },
  },
});
