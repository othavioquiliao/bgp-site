<script lang="ts">
	import '../app.css';
	import NavBar from '$lib/components/NavBar.svelte';
	import { ModeWatcher } from 'mode-watcher'; // Certifique-se de que este pacote está instalado e funcionando corretamente.
	import Footer from '$lib/components/Footer.svelte';
	import { onMount } from 'svelte';

	// Função gtag tipada corretamente
	function gtag(...args: any[]) {
		window.dataLayer.push(args);
	}

	onMount(() => {
		const scriptTag = document.createElement('script');
		scriptTag.src = 'https://www.googletagmanager.com/gtag/js?id=AW-11448617367';
		scriptTag.async = true;
		document.head.appendChild(scriptTag);

		scriptTag.onload = () => {
			window.dataLayer = window.dataLayer || [];
			window.gtag = gtag;
			gtag('js', new Date());
			gtag('config', 'AW-11448617367');
		};
	});
</script>

<ModeWatcher defaultMode="dark" />
<NavBar />
<main class="flex h-screen w-full flex-col items-center">
	<slot />
	<Footer />
</main>
