import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: "/cryptichunt/", // 👈 Add this line (replace with your repo name)
  server: {
    host: "::", // allows LAN access
    port: 8080,
    allowedHosts: ['.ngrok-free.dev'], // allow ngrok URLs
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
