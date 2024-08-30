<script lang="ts">
	import Logo from '$lib/img/BGP-branco.png';
	import Menu from 'lucide-svelte/icons/menu';
	import Button from './ui/button/button.svelte';
	import Facebook from 'lucide-svelte/icons/facebook';
	import Instagram from 'lucide-svelte/icons/instagram';
	import Linkedin from 'lucide-svelte/icons/linkedin';
	import { onMount } from 'svelte';
	import * as Sheet from '$lib/components/ui/sheet';

	let scrollY: number;
	let isMobile: boolean;

	function checkIfMobile() {
		isMobile = window.innerWidth <= 768; // Define o breakpoint para mobile
	}

	// Verifica se é mobile no momento da montagem do componente
	onMount(() => {
		checkIfMobile();
		window.addEventListener('resize', checkIfMobile);

		// Remove o event listener quando o componente for destruído
		return () => {
			window.removeEventListener('resize', checkIfMobile);
		};
	});
</script>

<svelte:window bind:scrollY />
{#if isMobile}
	<nav
		class="fixed z-20 flex min-h-16 w-full items-center justify-center bg-gradient-to-b from-background from-25% to-transparent px-5"
	>
		<Sheet.Root>
			<Sheet.Trigger class=""><Menu size={40} /></Sheet.Trigger>
			<Sheet.Content side="left">
				<Sheet.Header class="flex w-full flex-col		items-center justify-center gap-10">
					<Sheet.Title><img src={Logo} alt="Logo BGS consultoria" class="w-36" /></Sheet.Title>
					<Sheet.Description class="flex w-full flex-col items-center gap-5">
						<Button variant="outline" href="/" class="w-2/3 text-xl font-bold">Home</Button>
						<Button variant="outline" href="#Planos" class="w-2/3 text-xl font-bold">Planos</Button>
						<Button variant="outline" href="#Sobre" class="w-2/3 text-xl font-bold">Sobre</Button>

						<div
							class="mt-16 flex w-3/4 flex-col items-center justify-center
						gap-10"
						>
							<div>
								<Button variant="link" class="px-1 py-6">
									<Instagram size={40} />
								</Button>
								<Button variant="link" class="px-1 py-6">
									<Facebook size={40} />
								</Button>
								<Button variant="link" class="px-1 py-6">
									<Linkedin size={40} />
								</Button>
							</div>

							<Button
								variant="outline"
								href="https://wa.me/5511989111928?text=Ola%20Tudo%20bem%3F%0AOlhado%20o%20seu%20site%20e%20gostaria%20de%20saber%20mais!"
								class="  border-[#CB3E38] bg-transparent px-2 py-5 font-inter text-base font-bold md:text-xl "
							>
								<span class="pr-1 font-bold text-[#CB3E38]">(</span> 11<span
									class="px-1 font-bold text-[#CB3E38]">)</span
								>
								98911<span class="px-1 font-bold text-[#CB3E38]">-</span>1928
							</Button>
						</div>
					</Sheet.Description>
				</Sheet.Header>
			</Sheet.Content>
		</Sheet.Root>
		<a href="/" class="relative flex w-[80%] items-center justify-center">
			<img src={Logo} alt="Logo BGS consultoria" class="w-24" />
		</a>
	</nav>
{:else}
	<nav
		class="fixed z-20 flex h-16 w-full items-center justify-between bg-gradient-to-b {scrollY > 900
			? 'from-background  from-50% to-transparent'
			: ''}"
	>
		<!-- Exibe o menu sanduíche se for mobile -->

		<!-- Menu normal para desktop -->
		<div class="flex w-1/3 items-center justify-evenly">
			<Button
				variant="link"
				href="/"
				class=" font-inter  text-base font-bold text-white underline decoration-[#CA3438] decoration-2 underline-offset-4   hover:decoration-white md:text-2xl"
				>Home</Button
			>
			<Button
				variant="link"
				href="#Planos"
				class=" font-inter  text-base font-bold text-white underline decoration-[#CA3438] decoration-2 underline-offset-4   hover:decoration-white md:text-2xl"
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
				class=" ml-5 border-[#CB3E38] bg-transparent px-2 py-5 font-inter text-base font-bold md:text-xl "
			>
				<span class="pr-1 font-bold text-[#CB3E38]">(</span> 11<span
					class="px-1 font-bold text-[#CB3E38]">)</span
				>
				98911<span class="px-1 font-bold text-[#CB3E38]">-</span>1928
			</Button>
		</div>
	</nav>
{/if}
