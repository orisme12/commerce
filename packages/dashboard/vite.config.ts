import { resolve } from 'node:path'
import unoCSS from 'unocss/vite'
import react from '@vitejs/plugin-react-swc'
import { TanStackRouterVite } from '@tanstack/router-vite-plugin'

import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    react(),
    unoCSS(),
    TanStackRouterVite(),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      'types': resolve(__dirname, './types'),
    },
  },
})
