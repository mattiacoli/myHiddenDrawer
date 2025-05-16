import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      'localhost',
      '127.0.0.1',
      'ab69-51-179-98-199.ngrok-free.app',
      // You can add a wildcard for all ngrok hosts if needed
      // '*.ngrok-free.app'
    ]
  }
})
