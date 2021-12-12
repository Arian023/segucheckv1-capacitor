<script>
	// Alternar modo oscuro según preferencia del usuario:
	let isDarkMode = () => {
		// Se corrige error de que la ventana no está definida en primer arranque:
		if (typeof window != 'undefined') {
			return window.matchMedia('(prefers-color-scheme: dark)').matches;
		} else {
			return true;
		}
	};
</script>

<footer
	class="pt-2 {isDarkMode ? 'text-light bg-dark' : 'bg-light'} user-select-none"
	id="contacto"
>
	<div class="container p-4">
		<div class="row justify-content-center">
			<div class="col-md-6">
				<h4 class="my-4">
					<img src="/img/segucheck-logo.svg" height="36" alt="Logo SeguCheck" class="me-3" />
					<a href="/acerca" class="text-reset text-decoration-none" class:text-secondary={isDarkMode}>
						SeguCheck © 2021
					</a>
				</h4>
				<p>
					Desarrollado por
					<a
						href="https://github.com/sebamon/segucheckv1-sveltekit"
						class="text-decoration-none"
						class:text-secondary={isDarkMode}
					>
						SanguCheck Dozen
					</a>
				</p>
			</div>
			<div class="col-md-6">
				<h5>Nuestras redes sociales</h5>
				<a
					href="https://www.facebook.com/"
					class="text-decoration-none fs-1"
					alt="Facebook"
					title="Facebook"
					class:text-secondary={isDarkMode}><i class="fab fa-facebook-square me-1" /></a
				>
				<a
					href="https://www.twitter.com/"
					class="text-decoration-none fs-1"
					alt="Twitter"
					title="Twitter"
					class:text-secondary={isDarkMode}><i class="fab fa-twitter-square me-1" /></a
				>
				<a
					href="https://www.linkedin.com/"
					class="text-decoration-none fs-1"
					alt="LinkedIn"
					title="LinkedIn"
					class:text-secondary={isDarkMode}><i class="fab fa-linkedin me-1" /></a
				>
			</div>
		</div>
	</div>
</footer>

<style>
	footer {
		max-height: 100%;
	}
</style>
