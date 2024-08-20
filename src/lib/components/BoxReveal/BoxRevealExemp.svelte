<script>
	// From Shadcn Svelte UI Library
	import Button from '$lib/components/ui/button/button.svelte';
	import ChevronRight from 'lucide-svelte/icons/chevron-right';
	import BoxReveal from './BoxReveal.svelte';
</script>

<div class="h-full w-full items-center justify-center overflow-hidden">
	<BoxReveal boxColor={'#CB3E38'} duration={0.5}>
		<p class="text-nowrap font-inter text-8xl font-semibold">
			Sua empresa está preparada
			<span class="font-semibold text-[#CB3E38]">?</span>
		</p>
	</BoxReveal>

	<BoxReveal boxColor={'#CB3E38'} duration={0.5}>
		<h2 class="mt-[.5rem] text-2xl">
			Para a grande revolução do IPv6 com a
			<span class="font-semibold text-[#CB3E38]">BGP Consultoria</span>
		</h2>
	</BoxReveal>

	<BoxReveal boxColor={'#CB3E38'} duration={0.5}>
		<Button
			class="text-md mt-[1.6rem] w-48 border border-opacity-0 bg-[#CB3E38] font-inter text-white hover:border-[#CB3E38] hover:bg-background hover:text-[#CB3E38]"
			>Saiba Mais</Button
		>
	</BoxReveal>
</div>
