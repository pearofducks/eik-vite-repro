import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eikPlugin from '@eik/rollup-plugin'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    rollupOptions: {
      input: './src/main.js',
      plugins: [eikPlugin()]
    }
  },
})
