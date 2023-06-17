export default {
	input: './main.js',
	output: {
		dir: 'rollup-output'
	},
	plugins: [
		{
			name: 'plugin-notreeshake',
			resolveId(id) {
				return { id, moduleSideEffects: 'no-treeshake' };
			}
		}
	],
};
