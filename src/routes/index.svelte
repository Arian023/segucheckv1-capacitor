<script lang="ts">
	import ModalLogin from '$lib/ModalLogin.svelte';
	let modalOpen = false;
</script>

<svelte:head>
	<title>Inicio - SeguCheck</title>
</svelte:head>

<!-- Modal login -->
<ModalLogin {modalOpen} />

<!-- Hero a pantalla completa -->
<header class="py-4">
	<div class="container align-items-center">
		<img src="img/segucheck-logo.svg" alt="Logo SeguCheck" id="logoHeader" class="m-5" />
		<h1 class="fw-bold">Tus documentos de forma más eficiente</h1>
		<h3 class="lead col-md-8">
			Lleva el control de tus credenciales, permisos y checklists en tu bolsillo
		</h3>
		<div class="m-3 g-2">
			<a href="/app" class="btn btn-primary btn-lg px-4 mx-1"> Ir al menú </a>
			<!-- Implementar login
				<button on:click={() => (modalOpen = !modalOpen)} class="btn btn-primary btn-lg px-4 mx-2">
				Iniciar sesión
			</button> -->
			<a href="/acerca" class="btn btn-secondary btn-lg px-4 mx-1"> Acerca de </a>
		</div>
	</div>
</header>

<style>
	header {
		/* Estilo de portada */
		background: #ededed url('/img/bg-hero.jpg');
		background-attachment: fixed; /* Efecto parallax */
		background-size: cover; /* Cubrir todo el ancho */
		background-position: center;
		background-repeat: no-repeat;
	}
	#logoHeader {
		max-height: 200px;
	}
	@media (max-width: 768px) {
		/* Esconde carrusel en pantallas pequeñas */
		#logoHeader {
			display: block;
			margin: 0 auto;
			width: 40%;
		}
	}
	@media (min-width: 768px) and (min-height: 800px) {
		/* Evita que se sobresalgan items del header en pantallas pequeñas */
		header {
			height: 90vh;
		}
	}
</style>
