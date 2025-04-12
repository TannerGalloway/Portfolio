import path from "path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/Portfolio",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
