import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
    const proxyConfig =
        mode === "production"
            ? { "/api": process.env.PROD_API_URL } // Production proxy
            : { "/api": "http://localhost:5001" }; // Local dev proxy

    return {
        plugins: [react()],
        server: {
            port: 5000,
            proxy: proxyConfig,
        },
    };
});
