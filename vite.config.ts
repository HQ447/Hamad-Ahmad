import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dotenv from "dotenv";

dotenv.config();

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      // Any other rollup config you have goes here
    },
  },
});
