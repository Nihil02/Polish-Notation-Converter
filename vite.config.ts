import { resolve } from "path";
/// <reference types="vitest" />
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  test: {
  },
  build: {
    lib: {
      entry: resolve(__dirname, "src/main.ts"),
      name: "polish-notation-converter",
      fileName: "polish-notation-converter",
    },
  },
  plugins: [dts()],
});
