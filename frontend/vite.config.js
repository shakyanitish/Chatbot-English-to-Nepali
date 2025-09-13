import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // Frontend port
    open: true,
    proxy: {
      "/chat": "http://localhost:4002",
      "/users": "http://localhost:4002",
      "/bots": "http://localhost:4002",
    },
  },
});
