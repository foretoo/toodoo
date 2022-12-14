import { defineConfig } from "vite"
import preact from "@preact/preset-vite"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [ preact() ],
  esbuild: { logOverride: { "this-is-undefined-in-esm": "silent" }},
  server: {
    open: true,
    host: true,
  },
  resolve: {
    alias: {
      app: "/src/app",
      view: "/src/view",
      service: "/src/service",
      components: "/src/components",
    },
  },
})
