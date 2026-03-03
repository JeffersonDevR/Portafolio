import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/Portafolio/",
  plugins: [react()],
  build: {
    rollupOptions: {
      input: './index.html',
    }
  }
});
// Config updated to force restart
