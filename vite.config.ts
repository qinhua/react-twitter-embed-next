import { defineConfig } from 'vite';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.tsx'),
      name: 'react-twitter-embed'
    },
    rollupOptions: {
      external: ['react', 'react-dom']
    }
  }
});
