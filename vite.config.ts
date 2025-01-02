import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@src': path.resolve(__dirname, './src'),
      '@ai': path.resolve(__dirname, './src/ai'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@components': path.resolve(__dirname, './src/components')
    }
  },
  envDir: './src/environments',
  plugins: [react()],
})
