<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';

	import manGif from '$lib/img/Online connection.gif';
	import GlobeEx from '$lib/components/Globe.svelte';
	import BoxRevealEx from '$lib/components/BoxReveal/BoxRevealEx.svelte';
	import CardProduct from '$lib/components/CardPlanos/CardProduct.svelte';
	import SquareCard from '$lib/components/CardPlanos/SquareCard.svelte';
	import Separator from '$lib/components/ui/separator/separator.svelte';
</script>

<!-- #CB3E38 -->

<section class="  flex h-full min-h-[98%] w-full items-center justify-center px-5 md:w-3/5 md:px-0">
	<div class="flex select-none flex-col items-start justify-center gap-2 md:w-1/2">
		<BoxRevealEx />
	</div>
	<div class="relative top-36 flex h-full w-1/2">
		<GlobeEx />
	</div>
</section>

<section id="sobre" class="flex h-full w-3/5 items-start justify-center gap-10">
	<img src={manGif} alt="" class="w-1/2" />
	<div class="flex w-2/3 flex-col items-center gap-5">
		<h1 class="w-full text-center text-4xl font-bold underline decoration-[#CB3E38]">Sobre</h1>
		<p class="text-pretty text-xl">
			Consultoria para provedores de internet e empresas com necessidade de ambiente de servidor
			estável, seguro e com performance.
		</p>
		<p class="text-pretty text-xl">
			Desenvolver e aprimorar a rede de internet do provedor para atendimento aos clientes Pessoa
			Física e Pessoa Jurídica, através de um diagnóstico técnico e preciso, é possível uma
			percepção imediata na qualidade e performance da rede.
		</p>
	</div>
</section>
<div class="flex w-full items-center justify-center">
	<Separator />
	<h4 class="rounded-lg border px-5 py-2">Planos</h4>
	<Separator />
</div>
<section id="serviços" class="relative flex min-h-[50%] w-full items-center justify-center">
	<div class=" flex w-3/5 justify-center gap-5">
		<SquareCard /><SquareCard /><SquareCard /><SquareCard />
	</div>
</section>
