<script>
	import '../app.css';
	import NavBar from '$lib/components/NavBar.svelte';
	import { ModeWatcher } from 'mode-watcher';
</script>

<ModeWatcher defaultMode="dark" />
<NavBar />
<main class="flex h-screen w-full flex-col items-center"><slot /></main>
