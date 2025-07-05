import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: './', // <-- ESSENCIAL pro Vercel mostrar os arquivos direito
  plugins: [react()],
})
