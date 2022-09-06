// vite cores
import { defineConfig } from 'vite';

// init plugins
import { createHtmlPlugin } from 'vite-plugin-html';

// overwrite configs
export default defineConfig({
  plugins: [
    createHtmlPlugin({
      minify: true,
    }),
  ],
  build: {
    rollupOptions: {
      output: {
        entryFileNames: 'js/[name]-[hash].js',
        chunkFileNames: 'js/[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          if (/\.css$/.test(assetInfo.name ?? '')) {
            return 'css/[name]-[hash][extname]';
          }
          return 'assets/[name]-[hash][extname]';
        },
      },
    },
  },
});
