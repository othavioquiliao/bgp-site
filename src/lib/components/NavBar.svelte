<script lang="ts">
	import Logo from '$lib/img/logo.png';
	import Button from './ui/button/button.svelte';
</script>

<nav class="fixed flex h-16 w-full items-center justify-between">
	<div class="flex w-1/3 items-center">
		<Button variant="link" href="/" class="w-1/2 font-sans text-base font-bold lg:text-xl"
			>Home</Button
		>
		<Button variant="link" href="/about" class="w-1/2 font-sans text-base font-bold lg:text-xl"
			>About</Button
		>
	</div>

	<div class="flex w-1/3 items-center">
		<Button variant="link" href="/contact" class="w-1/2 font-sans text-base font-bold lg:text-xl"
			>Contact</Button
		>
		<Button variant="link" href="/login" class="w-1/2 font-sans text-base font-bold lg:text-xl"
			>Serviçoes</Button
		>
	</div>
</nav>
