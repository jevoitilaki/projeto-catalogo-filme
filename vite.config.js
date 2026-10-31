import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: true,                    // escuta em 0.0.0.0
    port: 5173,
    strictPort: true,
    allowedHosts: [
      'backpedal-winnings-helpful.ngrok-free.dev',
    ],
    hmr: {
      host: 'backpedal-winnings-helpful.ngrok-free.dev',
      protocol: 'wss',
      clientPort: 443,
    },
  },
})