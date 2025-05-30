import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
    plugins: [
        vue({
            template: {
                compilerOptions: {
                    compatConfig: {
                        MODE: 3
                    }
                }
            }
        })
    ],
    base: '/live-demo/',
    build: {
        outDir: '../backend/public',
        rollupOptions: {
            input: './index.html'
        }
    }
})