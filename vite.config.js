import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // Determina a base URL baseada no ambiente
  const baseUrl = process.env.VITE_BASE_URL || (mode === 'production' ? '/' : '/~acustikaauditiva/')
  
  return {
    plugins: [react()],
    base: baseUrl,
    build: {
      outDir: 'dist',
      assetsDir: 'assets',
    }
  }
})
