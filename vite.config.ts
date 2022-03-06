import path from 'path';
import commonjsExternals from 'vite-plugin-commonjs-externals';
import EnvironmentPlugin from 'vite-plugin-environment';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

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
});
