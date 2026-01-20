import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // Usa / como base padrão para o domínio principal, a menos que VITE_BASE_URL seja definido
  const baseUrl = process.env.VITE_BASE_URL || '/'
  
  return {
    plugins: [react()],
    base: baseUrl,
    build: {
      outDir: 'dist',
      assetsDir: 'assets',
    }
  }
})
