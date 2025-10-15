import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // Sempre usa /~acustikaauditiva/ como base, a menos que VITE_BASE_URL seja definido
  const baseUrl = process.env.VITE_BASE_URL || '/~acustikaauditiva/'
  
  return {
    plugins: [react()],
    base: baseUrl,
    build: {
      outDir: 'dist',
      assetsDir: 'assets',
    }
  }
})
