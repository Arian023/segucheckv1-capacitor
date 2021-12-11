import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [preprocess({
        scss: {
            "prependData": "@import \"src/variables.scss\";"
        }
    })],

	kit: {
        // hydrate the <div id="svelte"> element in src/app.html
        target: '#svelte',

        vite: {
            css: {
                preprocessorOptions: {
                    scss: {
                        additionalData: "@import \"src/variables.scss\";"
                    }
                }
            }
        },
        adapter: adapter({
			// default options are shown
			pages: 'build',
			assets: 'build',
			fallback: null
		})
    }
};

export default config;
