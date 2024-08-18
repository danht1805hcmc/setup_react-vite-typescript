import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "~": "/src",

      "~logo": "/src/assets/images/logo",

      "~styles": "/src/assets/styles",
      "~abstracts": "/src/assets/styles/abstracts",
    },
  },
});
