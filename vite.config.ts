import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

console.log(process.cwd())

// https://vitejs.dev/config/
export default ({ mode }) => {
  return defineConfig({
    resolve: {
      // only support absolute path.
      alias: {
        "@": resolve(__dirname, "src"),
        "api": resolve(__dirname, "src/api"),
        "assets": resolve(__dirname, "src/assets"),
        "components": resolve(__dirname, "src/components"),
        "views": resolve(__dirname, "src/views"),
        "router": resolve(__dirname, "src/router"),
      }
    },
    plugins: [vue({
      reactivityTransform: true
    })],
    base: loadEnv(mode, process.cwd()).VITE_APP_NAME
  })
}
