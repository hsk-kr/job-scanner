import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc'
import tsconfigPaths from 'vite-tsconfig-paths';
import commonjs from '@rollup/plugin-commonjs';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  build: {
    emptyOutDir: false,
    target: 'ES2015',
    rollupOptions: {
      plugins: [commonjs()],
      input: {
        content: './src/content/content.ts',
      },
      output: {
        entryFileNames: `assets/[name].js`,
        format: 'cjs',
      },
    },
  },
});
