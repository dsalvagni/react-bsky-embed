/// <reference types="vite/client" />
// https://victorlillo.dev/blog/react-typescript-vite-component-library
import path, { resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { globSync } from "glob";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import { libInjectCss } from "vite-plugin-lib-inject-css";

export default defineConfig({
  plugins: [react(), libInjectCss(), dts()],
  build: {
    lib: {
      entry: [resolve(__dirname, "src/main.ts")],
      formats: ["es"],
      fileName: (_format, name) => {
        return `${name}.js`;
      },
    },
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime"],
      input: Object.fromEntries(
        globSync(["src/**/index.tsx", "src/main.ts"]).map((file: string) => {
          const entryName = path.relative(
            "src",
            file.slice(0, file.length - path.extname(file).length)
          );
          const entryUrl = fileURLToPath(new URL(file, import.meta.url));
          return [entryName, entryUrl];
        })
      ),
      output: {
        banner: (chunkInfo) => {
          if (chunkInfo.name.includes(".client")) {
            return "'use client';";
          }
          return "";
        },
        entryFileNames: "[name].js",
        assetFileNames: "assets/[name][extname]",
        globals: {
          react: "React",
          "react-dom": "React-dom",
          "react/jsx-runtime": "react/jsx-runtime",
        },
      },
    },
  },
});
