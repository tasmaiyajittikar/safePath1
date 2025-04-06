import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'leaflet-routing-machine': 'leaflet-routing-machine/dist/leaflet-routing-machine.js',
      'leaflet-routing-machine/css': 'leaflet-routing-machine/dist'
    }
  }
})
