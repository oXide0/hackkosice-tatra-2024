import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        VitePWA({
            registerType: 'autoUpdate',
            manifest: {
                name: 'Investing App',
                short_name: 'Investing',
                theme_color: '#0000FF',
                background_color: '#0000FF',
                icons: [
                    {
                        src: '/logo-1.png',
                        sizes: '220x220',
                        type: 'image/png',
                    },
                ],
            },
        }),
    ],
    resolve: {
        alias: {
            routes: '/src/routes',
            pages: '/src/pages',
            components: '/src/components',
            ui: '/src/components/ui',
            services: '/src/services',
            hooks: '/src/hooks',
            utils: '/src/utils',
            types: '/src/types',
            store: '/src/store',
            features: '/src/features',
            config: '/src/config',
        },
    },
});
