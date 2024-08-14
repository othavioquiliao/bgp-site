<script>
	// From Shadcn Svelte UI Library
	import Button from '$lib/components/ui/button/button.svelte';
	import ChevronRight from 'lucide-svelte/icons/chevron-right';
	import BoxReveal from './BoxReveal.svelte';
</script>

<div class="h-full w-full max-w-[32rem] items-center justify-center overflow-hidden pt-8">
	<BoxReveal boxColor={'#CB3E38'} duration={0.5}>
		<p class="select-none text-[3.5rem] font-semibold">
			Sua Empresa esta Preparada
			<span class="text-[#CB3E38]">?</span>
		</p>
	</BoxReveal>

	<BoxReveal boxColor={'#CB3E38'} duration={0.5}>
		<h2 class="mt-[.5rem] select-none text-[1rem]">
			Para grande revolução do IPv6 com a
			<span class="font-semibold text-[#CB3E38]">BGP Consultoria</span>
		</h2>
	</BoxReveal>

	<BoxReveal boxColor={'#CB3E38'} duration={0.5}>
		<div class="mt-[1rem] select-none space-y-2">
			<div class="flex items-start justify-start">
				<ChevronRight color="#CB3E38" size={50} class="h-5" />
				<p>
					Preparamos sua rede para suportar o crescente número de acessos à internet, com foco em <span
						class="text-[#CB3E38]">qualidade</span
					>,
					<span class="text-[#CB3E38]">estabilidade</span> e
					<span class="text-[#CB3E38]">economia</span>.
				</p>
				<br />
			</div>
			<div class="flex items-start justify-start">
				<ChevronRight color="#CB3E38" size={50} class="h-5" />
				<p>
					Fazemos isso com
					<span class="text-[#CB3E38]">"know how"</span> e comprometimento, por meio de uma
					<span class="text-[#CB3E38]">estrutura capacitada e apta a atender a sua demanda</span>,
					seja pontual ou por meio de planos.
				</p>
			</div>
		</div></BoxReveal
	>

	<BoxReveal boxColor={'#CB3E38'} duration={0.5}>
		<Button class="mt-[1.6rem] w-48 bg-[#CB3E38]">Saiba Mais</Button>
	</BoxReveal>
</div>
