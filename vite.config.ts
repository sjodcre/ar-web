import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from "path"


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  build: {
    rollupOptions: {
      external: ['sharp'],
    },
  },
  // server: {
  //   proxy: {
  //     '/api/communitylabs': {
  //       target: 'https://www.communitylabs.com',
  //       changeOrigin: true,
  //       rewrite: (path) => path.replace(/^\/api\/communitylabs/, ''),
  //     },
  //     '/api/arweavehub': {
  //       target: 'https://arweavehub.com',
  //       changeOrigin: true,
  //       rewrite: (path) => path.replace(/^\/api\/arweavehub/, ''),
  //     },
  //   },
  // },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
