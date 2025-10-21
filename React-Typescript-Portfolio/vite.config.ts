import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), react()],
  // Use repository name as base for GitHub Pages: https://<username>.github.io/Portfolio/
  base: '/Portfolio/'
});
