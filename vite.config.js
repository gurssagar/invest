import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig, searchForWorkspaceRoot } from 'vite';
import webfontDownload from 'vite-plugin-webfont-dl';



export default defineConfig({
	plugins: [sveltekit(),],
	server: {
		fs: {
			// Allow serving files from one level up to the project root
			allow: ['..'],
		},
	},



});
