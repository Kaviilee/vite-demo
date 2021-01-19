import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import path from 'path';

export default defineConfig({
  plugins: [vue(), vueJsx()],
  alias: {
    '@': path.resolve(__dirname, './src'),
    '@components': path.resolve(__dirname, './src/components'),
    '@utils': path.resolve(__dirname, './src/utils'),
    '@assets': path.resolve(__dirname, './src/assets'),
  },
});

/**
 * can not with * like "@/*": "/src/*"
 */
/* const pathAliasMap = {
  '@/': '/src/',
  '@components/': '/src/components/',
  '@utils/': '/src/utils/',
  '@assets/': '/src/assets/',
};

export default {
  resolvers: [
    {
      alias(path: string) {
        for (const [slug, res] of Object.entries(pathAliasMap)) {
          if (path.startsWith(slug)) {
            return path.replace(slug, res);
          }
        }
      },
    },
  ],
  base: './',
  assetsDir: 'assets',
}; */
