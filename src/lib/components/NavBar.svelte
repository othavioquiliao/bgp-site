<script lang="ts">
	import { page } from '$app/stores';
	import Logo from '$lib/img/logo.png';
	import Button from './ui/button/button.svelte';
	let scrollY: number;
</script>

<svelte:window bind:scrollY />
<nav
	class="fixed z-20 flex h-16 w-full items-center justify-between bg-gradient-to-b from-background from-65% to-transparent"
>
	<div class="flex w-1/3 items-center justify-evenly">
		<Button
			variant="link"
			href="/"
			class=" font-sans text-base font-bold underline decoration-[#CB3E38] hover:decoration-white lg:text-xl"
			>Home</Button
		>
		<Button
			variant="link"
			href="#Planos"
			class=" font-sans text-base font-bold underline decoration-[#CB3E38] hover:decoration-white lg:text-xl"
			>Planos</Button
		>
	</div>

	<a href="/" class="relative flex w-1/3 items-center justify-center">
		<img
			src={Logo}
			alt="Logo BGS consultoria"
			class="{`w-20 transform transition-transform duration-500 ease-in-out hover:scale-110 ${
				scrollY === 0 ? ' scale-150 pt-2 ' : ''
			}`}}"
		/>
	</a>
	<div class="flex w-1/3 items-center justify-evenly">
		<Button
			variant="link"
			href="#estrutura-de-rede"
			class=" font-sans text-base font-bold underline decoration-[#CB3E38] hover:decoration-white lg:text-xl"
			>Estrutura de Rede</Button
		>
		<Button
			variant="link"
			href="/login"
			class=" font-sans text-base font-bold underline decoration-[#CB3E38] hover:decoration-white lg:text-xl"
			>Contato</Button
		>
	</div>
</nav>
