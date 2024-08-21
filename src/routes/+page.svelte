<script lang="ts">
	// import GlobeEx from '$lib/components/Globe.svelte';
	import SquareCard from '$lib/components/CardPlanos/SquareCard.svelte';

	import imgSobre from '$lib/img/imgBest.png';
	import CDN from '$lib/img/planos/Memory storage(5).gif';
	import BGP from '$lib/img/planos/Secure data(4).gif';
	import ASN from '$lib/img/planos/Connected world(3).gif';
	import BackBone from '$lib/img/planos/Server status(4).gif';
	import ServidorPlano from '$lib/img/planos/Server(4).gif';
	import mainImg from '$lib/img/img1.webp';

	import ChevronRight from 'lucide-svelte/icons/chevron-right';
	import { fade } from 'svelte/transition';
	import WordPullUp from '$lib/components/BoxReveal/WordPullUp.svelte';

	//
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
				'Solicitações de CDNs.',
				'Peering com Google, Netflix e Facebook.',
				'Configuração de roteador dedicado para peering.',
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

	let networkFeatures = [
		'Planejamento',
		'Mapeamento completo da rede',
		'Reestruturação do Core com ativação de PE e CE',
		'Redundância',
		'VLAN, MPLS, VPLS',
		'Política de redistribuição baseada em redes declaradas',
		'Pilha dupla IPv4/IPv6'
	];

	let serverFeatures = [
		'Ferramentas para gerência da rede IP',
		'Monitoramento e gráficos',
		'DNS (Autoritativo, Recursivo, Reverso)',
		'VPN',
		'Servidor para OLT',
		'Disponibilidade de adicionar espaço para o seu sistema de gerência!'
	];

	let scrollY: any;
</script>

<svelte:window bind:scrollY />

<section class="flex h-full min-h-full w-full items-center justify-center bg-blend-color-burn">
	<div class="z-10 flex flex-col items-center justify-center">
		<!-- <BoxRevealEx /> -->
		<WordPullUp words="Tecnologia & Inovação" velocidade={0.25} />
		<WordPullUp words="para Melhor Performance" velocidade={0.75} />

		<h2 class="mt-[.5rem] text-2xl text-white">
			Consultoria para Provedores de Internet e Grandes Empresas
		</h2>
	</div>
	<img src={mainImg} alt="" class="absolute w-full blur-sm" loading="eager" />
</section>

<!-- Obter valor do scroll -->
<!-- <h1 class="fixed right-40 top-40 z-20 bg-white text-5xl">{scrollY}</h1> -->
<!-- Seção Estrutura de Rede -->
<div class="flex w-3/5 flex-col pt-16 text-white">
	<section class="relative mb-20 flex h-full items-center justify-center gap-10">
		<div class="flex w-1/2 flex-col gap-3">
			<h1
				class="mb-5 w-full text-center font-inter text-4xl font-semibold underline decoration-[#CB3E38]"
			>
				Plano OSPF
			</h1>
			<p class="break-before-right text-pretty text-xl">
				Consideramos este o <span class=" font-semibold text-[#CB3E38]">
					plano mais importante</span
				>, pois a estrutura da sua rede é essencial para garantir a
				<span class=" font-semibold text-[#CB3E38]">qualidade do produto</span> entregue ao cliente final.
			</p>
			<p class="text-pretty text-xl">
				Uma topologia de rede bem projetada resulta em uma excelente experiência de navegação.
			</p>
			<p class="text-pretty text-xl">Destacamos os seguintes pontos:</p>

			<ul class="flex flex-col items-start justify-start gap-2 text-lg">
				{#each networkFeatures as feature}
					<li class="flex gap-2">
						<ChevronRight size={20} class="h-4" color="#CB3E38" />
						{feature}
					</li>
				{/each}
			</ul>
		</div>
		<div class="flex w-1/2 justify-center gap-5">
			{#if scrollY > 150}
				<img src={BackBone} alt="" loading="lazy" transition:fade={{ delay: -20, duration: 0 }} />
			{/if}
		</div>
	</section>

	<section
		id="estrutura-de-rede"
		class="relative flex h-full flex-row-reverse items-center justify-center"
	>
		<div class="flex w-1/2 flex-col gap-3">
			<h1
				class="mb-5 w-full text-center font-inter text-4xl font-semibold underline decoration-[#CB3E38]"
			>
				Plano Servidor
			</h1>
			<p class="text-pretty text-xl">
				Temos <span class=" font-semibold text-[#CB3E38]">soluções em virtualização</span> e
				máquinas físicas para garantir a
				<span class=" font-semibold text-[#CB3E38]">melhor gestão</span> para o seu provedor.
			</p>
			<p class="text-pretty text-xl">
				Focamos em otimização e confiabilidade, atendendo às necessidades específicas da sua rede.
			</p>
			<p class="text-pretty text-xl">
				Uma topologia de rede bem projetada resulta em uma excelente experiência de navegação.
			</p>
			<p class="text-pretty text-xl">Oferecemos:</p>

			<ul class="flex flex-col items-start justify-start gap-2 text-lg">
				{#each serverFeatures as feature}
					<li class="flex gap-2">
						<ChevronRight size={20} class="h-4" color="#CB3E38" />
						{feature}
					</li>
				{/each}
			</ul>
		</div>
		<div class="flex w-1/2 justify-center gap-5">
			{#if scrollY > 650}
				<img src={ServidorPlano} alt="Plano de Servidor" loading="lazy" />
			{/if}
		</div>
	</section>
</div>

<!-- Seção Planos -->
<section class="relative flex h-full w-full items-center justify-center py-20">
	<div class="flex w-3/5 justify-center gap-5">
		{#if scrollY > 1250}
			{#each cards as card, index (card.titulo)}
				<SquareCard {card} />
			{/each}
		{/if}
	</div>
</section>

<!-- Sobre -->
<!-- <section id="sobre" class=" flex h-2/3 w-3/5 items-start justify-center gap-10">
	<img
		src={imgSobre}
		alt="Online connection"
		class="w-1/2 rounded-2xl shadow-2xl shadow-gray-500"
		loading="lazy"
	/>
	<div class="flex h-[80%] w-2/3 flex-col items-center justify-center gap-5">
		<h1 class="w-full text-center text-4xl font-bold underline decoration-[#CB3E38]">Sobre</h1>
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
</section> -->
