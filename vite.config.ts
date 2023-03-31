import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tsconfigPaths from 'vite-tsconfig-paths'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      { find: '@src', replacement: resolve(__dirname, 'src') },
      {
        find: '@component',
        replacement: resolve(__dirname, 'src/component'),
      },
      // {
      //   find: '@routes',
      //   replacement: resolve(__dirname, 'src/routes'),
      // },
    ],
  },

  plugins: [react(), tsconfigPaths()],
  // plugins: [react()],
})
