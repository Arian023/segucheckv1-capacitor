<script context="module" lang="ts">
	// ./__layout.svelte: Incluye librerías y pie de página general
	// No editar app.html, sino acá y __layout en subcarpetas
	import { setContext } from 'svelte';
	import Footer from '$lib/Footer.svelte';
	export const load = async ({ page }) => ({
		props: {
			key: page.path
		}
	});
</script>

<script lang="ts">
	import '../app.scss';
</script>

<div class="flex-wrapper">
	<slot />
	<Footer />
</div>

<style>
	/* Empujar footer al fondo de la página: https://stackoverflow.com/questions/4575826/how-to-push-a-footer-to-the-bottom-of-page-when-content-is-short-or-missing */
	.flex-wrapper {
		display: flex;
		min-height: 100vh;
		flex-direction: column;
		justify-content: space-between;
	}
</style>
