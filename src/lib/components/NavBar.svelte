<script lang="ts">
	import Logo from '$lib/img/BGP-branco.png';
	import Button from './ui/button/button.svelte';
	let scrollY: number;
	import Facebook from 'lucide-svelte/icons/facebook';
	import Instagram from 'lucide-svelte/icons/instagram';
	import Linkedin from 'lucide-svelte/icons/linkedin';
</script>

<svelte:window bind:scrollY />
<nav
	class="fixed z-20 flex h-16 w-full items-center justify-between bg-gradient-to-b {scrollY > 900
		? 'from-background  from-25% to-transparent'
		: ''}"
>
	<div class="flex w-1/3 items-center justify-evenly">
		<Button
			variant="link"
			href="/"
			class=" font-inter  text-base font-bold text-white underline  decoration-[#CA3438] decoration-2   hover:decoration-black md:text-2xl"
			>Home</Button
		>
		<Button
			variant="link"
			href="#Planos"
			class=" font-inter text-base font-bold text-white underline  decoration-[#CA3438] decoration-2   hover:decoration-black md:text-2xl"
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

	<div class="flex w-1/3 items-center justify-center gap-5">
		<Button variant="link" class="px-1 py-6">
			<Instagram size={30} />
		</Button>
		<Button variant="link" class="px-1 py-6">
			<Facebook size={30} />
		</Button>
		<Button variant="link" class="px-1 py-6">
			<Linkedin size={30} />
		</Button>

		<Button
			variant="outline"
			href="https://wa.me/5511989111928?text=Ola%20Tudo%20bem%3F%0AOlhado%20o%20seu%20site%20e%20gostaria%20de%20saber%20mais!"
			class=" ml-5 border-[#CB3E38] bg-transparent px-2 py-5 font-inter text-base font-bold md:text-2xl "
		>
			<span class="pr-1 font-bold text-[#CB3E38]">(</span> 11<span
				class="px-1 font-bold text-[#CB3E38]">)</span
			>
			98911<span class="px-1 font-bold text-[#CB3E38]">-</span>1928
		</Button>
	</div>
</nav>
