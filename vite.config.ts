/// <reference types="vitest/config" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()], // Integrate React with Vite
    build: {
        sourcemap: 'hidden',
        rolldownOptions: {}
    },
    test: {
        watch: false, // vitest - Disable continuous file watching
    },
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src'),
            "source": resolve(__dirname, 'src')
        }
    },
    define: {
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }
});