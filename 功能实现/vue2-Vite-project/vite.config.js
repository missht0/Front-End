import { defineConfig } from "vite"
import { createVuePlugin } from "vite-plugin-vue2"

export default defineConfig({
  plugins: [
    createVuePlugin(),
  ],
  server: {
    port: 3000,
    open: true,
    cors: true,
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },
  resolve: {
    alias: {
      '@': '/src',
      '@com': '/src/components',
    }
  }


})

