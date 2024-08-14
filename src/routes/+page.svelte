<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import manGif from '$lib/img/Online connection.gif';
	import GlobeEx from '$lib/components/Globe.svelte';
	import BoxRevealEx from '$lib/components/BoxReveal/BoxRevealEx.svelte';
	import SquareCard from '$lib/components/CardPlanos/SquareCard.svelte';
	import Separator from '$lib/components/ui/separator/separator.svelte';

	import CDN from '$lib/img/planos/CDN.png';
	import BGP from '$lib/img/planos/BGP.png';
	import ASN from '$lib/img/planos/ASN.png';

	interface Card {
		img: string;
		titulo: string;
		topicos: string[];
	}

	let cards: Card[] = [
		{
			img: CDN,
			titulo: 'Plano CDN',
			topicos: [
				'Solicitação de CNDs e peering com grandes provedores de conteúdo.',
				'Peering com Google, Netflix e Facebook.',
				'Configuração de router dedicado para peering.',
				'Suporte completo em todo o processo.'
			]
		},
		{
			img: BGP,
			titulo: 'Plano BGP',
			topicos: [
				'Suporte para iBGP e eBGP.',
				'Gerenciamento de filtros, anúncios e peers BGP.',
				'Definição e priorização de engenharia de tráfego.',
				'Segurança: controle de IP Spoofing, Bogon Routing e filtros ASN.',
				'Otimização de recursos e roteadores para economia.'
			]
		},
		{
			img: ASN,
			titulo: 'Plano ASN',
			topicos: [
				'Suporte completo durante o processo.',
				'Ajuda na obtenção do AS junto ao Registro.br.',
				'Configuração básica do BGP com a operadora.',
				'Entrega de IPs públicos e preparação para IPv6.'
			]
		}
	];
</script>

<section class="flex h-full min-h-[98%] w-full items-center justify-center md:w-3/5">
	<div class="flex select-none flex-col items-start justify-center gap-2 md:w-1/2">
		<BoxRevealEx />
	</div>
	<div class="relative top-36 flex h-[80%] w-1/2">
		<GlobeEx />
	</div>
</section>

<section id="sobre" class="mb-20 flex h-full w-3/5 items-start justify-center gap-10">
	<img src={manGif} alt="Online connection" class="w-1/2" />
	<div class="flex h-[80%] w-2/3 flex-col items-center justify-center gap-5">
		<h1 class="w-full text-center text-4xl font-bold uppercase underline decoration-[#CB3E38]">
			Sobre
		</h1>
		<p class="text-pretty text-center text-xl">
			Consultoria para provedores de internet e empresas com necessidade de ambiente de servidor
			estável, seguro e com performance.
		</p>
		<p class="text-pretty text-center text-xl">
			Desenvolver e aprimorar a rede de internet do provedor para atendimento aos clientes Pessoa
			Física e Pessoa Jurídica, através de um diagnóstico técnico e preciso, é possível uma
			percepção imediata na qualidade e performance da rede.
		</p>
	</div>
</section>

<!-- Section Planos -->
<div class="flex w-full items-center justify-center overflow-hidden py-20">
	<Separator />
	<h4 class="rounded-lg border bg-[#CB3E38] px-5 py-2 text-2xl font-bold text-white">Planos</h4>
	<Separator />
</div>
<section id="planos" class="relative flex h-full w-full items-center justify-center">
	<div class="flex w-3/5 justify-center gap-5">
		{#each cards as card}
			<SquareCard {card} />
		{/each}
	</div>
</section>

<!-- Section Estrutura de Rede -->
<div class="flex w-full items-center justify-center overflow-hidden py-20">
	<Separator />
	<h4 class="text-nowrap rounded-lg border bg-[#CB3E38] px-5 py-2 text-2xl font-bold text-white">
		Estrutura de Rede
	</h4>
	<Separator />
</div>
<section id="estrutura-de-rede" class="relative flex h-full w-full items-center justify-center">
	<div class="flex w-3/5 justify-center gap-5">
		{#each cards as card}
			<SquareCard {card} />
		{/each}
	</div>
</section>
