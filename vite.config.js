import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base:"http://LeandroDBechara.github.io/dgt-web/",
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        admin: 'admin.html',
        discapacidad: 'discapacidad.html',
        mision: 'mision.html',
        multas: 'multas.html',
        normativas: 'normativas.html',
        recorridos: 'recorridos.html',
        resoluciones: 'resoluciones.html',
        zafra: 'zafra.html'
      }
    }
  }
})
