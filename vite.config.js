import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'
import vue from '@vitejs/plugin-vue'


// https://vitejs.dev/config/
export default defineConfig({
 
  plugins: [
    vue(),
    
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@comps': fileURLToPath(new URL('./src/components', import.meta.url)),
    }
  },  
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
        @import "@/styleMix/_mixin.scss";
        @import "@/styleMix/_color.scss";
        `
      }
    }
  }
  
})
