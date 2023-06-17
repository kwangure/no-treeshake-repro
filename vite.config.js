import { defineConfig } from 'vite';

export default defineConfig({
	build: {
		rollupOptions: {
			input: './main.js',
			output: {
				dir: 'vite-output'
			},
		},
		assetsDir: './',
	},
	plugins: [
		{
			enforce: 'pre',
			name: 'plugin-notreeshake',
			resolveId(id) {
				return { id, moduleSideEffects: 'no-treeshake' };
			}
		}
	],
})