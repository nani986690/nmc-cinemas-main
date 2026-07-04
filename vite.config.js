import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import { cloudflare } from "@cloudflare/vite-plugin";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react({
    babel: {
      plugins: ["@emotion/babel-plugin"],
    },
  }), cloudflare()],
  server: {
    allowedHosts: ["annette-nondesignate-cryptically.ngrok-free.dev"],
    host: true,
  },
});