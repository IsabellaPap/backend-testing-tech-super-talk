import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rolldownOptions: {
      checks: {
        invalidAnnotation: false,
      },
    },
  },
});
