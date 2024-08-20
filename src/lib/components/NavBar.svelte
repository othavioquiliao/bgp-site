<script lang="ts">
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
			class=" font-inter text-base font-bold underline  decoration-[#CA3438] decoration-2   hover:decoration-black md:text-2xl"
			>Home</Button
		>
		<Button
			variant="link"
			href="#Planos"
			class=" font-inter text-base font-bold underline  decoration-[#CA3438] decoration-2   hover:decoration-black md:text-2xl"
			>Planos</Button
		>
	</div>

	<a href="/" class="relative flex w-1/3 items-center justify-center">
		<img
			src={Logo}
			alt="Logo BGS consultoria"
			class="{`w-20 transform pt-2 transition-transform duration-500 ease-in-out ${
				scrollY === 0 ? ' scale-[2] pt-5 ' : ''
			}`}}}"
		/>
	</a>
	<div class="flex w-1/3 items-center justify-evenly">
		<Button
			variant="link"
			href="#estrutura-de-rede"
			class=" font-inter text-base font-bold underline  decoration-[#CA3438] decoration-2   hover:decoration-black md:text-2xl"
			>Estrutura de Rede</Button
		>
		<Button
			variant="link"
			href="/login"
			class=" font-inter text-base font-bold underline  decoration-[#CA3438] decoration-2   hover:decoration-black md:text-2xl"
			>Contato</Button
		>
	</div>
</nav>
