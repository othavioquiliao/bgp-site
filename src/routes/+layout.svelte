<script>
	import '../app.css';
	import NavBar from '$lib/components/NavBar.svelte';
	import { ModeWatcher } from 'mode-watcher';
	import Footer from '$lib/components/Footer.svelte';
</script>

<ModeWatcher defaultMode="dark" />
<NavBar />
<main class="flex h-screen w-full flex-col items-center">
	<slot />
	<Footer />
</main>
