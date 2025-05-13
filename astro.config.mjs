import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    api: "modern-compiler"
                }
            }
        }
    },
    redirects: {
        "/schedule": "/schedule/wednesday",
        "/events": "/overview#list",
        "/live": "/live/wednesday"
    }
});
