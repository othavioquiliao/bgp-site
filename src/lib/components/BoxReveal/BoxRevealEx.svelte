<script>
	// From Shadcn Svelte UI Library
	import Button from '$lib/components/ui/button/button.svelte';
	import ChevronRight from 'lucide-svelte/icons/chevron-right';
	import BoxReveal from './BoxReveal.svelte';
</script>

<div class="  flex h-full w-full flex-col items-center justify-center text-black">
	<BoxReveal boxColor={'#CB3E38'} duration={0.5}>
		<p class="select-none font-inter text-7xl font-semibold">
			Sua empresa está preparada
			<span class="font-semibold text-[#CB3E38]">?</span>
		</p>
	</BoxReveal>

	<BoxReveal boxColor={'#CB3E38'} duration={0.5}>
		<h2 class="mt-[.5rem] select-none text-xl">
			Para a grande revolução do IPv6 com a
			<span class="font-semibold text-[#CB3E38]">BGP Consultoria</span>
		</h2>
	</BoxReveal>

	<BoxReveal boxColor={'#CB3E38'} duration={0.5}>
		<div
			class="mt-[1rem] flex w-1/2 select-none flex-col items-center justify-center space-y-2 text-center text-xl"
		>
			<div class="flex items-center justify-start">
				<ChevronRight color="#CB3E38" size={50} class="h-5" />
				<p>
					Preparamos sua rede para suportar o crescente número de acessos à internet, com foco em <span
						class="font-semibold text-[#CB3E38]">qualidade</span
					>,
					<span class="font-semibold text-[#CB3E38]">estabilidade</span> e
					<span class="font-semibold text-[#CB3E38]">economia</span>.
				</p>
				<br />
			</div>
			<div class="flex items-center justify-start">
				<ChevronRight color="#CB3E38" size={50} class="h-5" />
				<p>
					Fazemos isso com
					<span class="font-semibold text-[#CB3E38]">"know how"</span> e comprometimento, por meio
					de uma
					<span class="font-semibold text-[#CB3E38]"
						>estrutura capacitada e apta a atender a sua demanda</span
					>, seja pontual ou por meio de planos.
				</p>
			</div>
		</div>
	</BoxReveal>

	<BoxReveal boxColor={'#CB3E38'} duration={0.5}>
		<Button
			class="text-md mt-[1.6rem] w-48 border border-opacity-0 bg-[#CB3E38] font-inter text-white hover:border-[#CB3E38] hover:bg-background hover:text-[#CB3E38]"
			>Saiba Mais</Button
		>
	</BoxReveal>
</div>
