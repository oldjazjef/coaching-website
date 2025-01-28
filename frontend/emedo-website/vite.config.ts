import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    vueDevTools(),
    tailwindcss()
  ],
  css: {
    preprocessorOptions: {
      scss: {
      }
    }
  },
  resolve: {
    alias: {
      '@lib': fileURLToPath(new URL('./lib', import.meta.url)),
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
