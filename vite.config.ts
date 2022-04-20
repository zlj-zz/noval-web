import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

console.log(process.cwd())

// https://vitejs.dev/config/
export default ({ mode }) => {
	return defineConfig({
		plugins: [vue({
			reactivityTransform: true
		})],
		base: loadEnv(mode, process.cwd()).VITE_APP_NAME
	})
}
