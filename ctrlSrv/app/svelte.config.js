import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';
import { resolve } from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		preprocess({
			postcss: true
		})
	],
	kit: {
		adapter: adapter(),
		prerender: {
			enabled: false
		},
		target: '#svelte',
		ssr: false,
		vite: {
			server: {
				hmr: {
					host: 'localhost',
					port: 15000,
					protocol: 'ws'
				}
			},
			resolve: {
				alias: {
					$src: resolve('./src')
				}
			}
		}
	}
};

export default config;
