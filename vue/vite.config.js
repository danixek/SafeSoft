import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default {
    server: {
        proxy: {
            '/api': 'https://localhost:7204', // pøeposílá API požadavky na ASP.NET
        },
        port: 5173,
    },
};
