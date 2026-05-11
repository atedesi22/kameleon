import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Ou sa police préférée
        display: ['Space Grotesk', 'sans-serif'],
      },
      colors: {
        indigo: {
          600: '#4F46E5', // La couleur accent de Kameleon
        }
      }
    },
  },
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  plugins: [react(),
     tailwindcss(),
  ],
})
