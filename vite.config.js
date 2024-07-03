import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue'

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'vue/src/main.js',
            ],
            refresh: true,
        }),
        vue(),
    ],
    resolve: {
        alias: {
          '@': fileURLToPath(new URL('./vue/src', import.meta.url))
        }
    },
});