<script>
	import '../app.css';
	import NavBar from '$lib/components/NavBar.svelte';
</script>

<NavBar />
<main class="flex h-screen w-full flex-col items-center"><slot /></main>
