<script lang="ts">
	import SquareCard from '$lib/components/CardPlanos/SquareCard.svelte';
	import WordPullUp from '$lib/components/BoxReveal/WordPullUp.svelte';

	import CDN from '$lib/img/planos/Memory storage(5).gif';
	import BGP from '$lib/img/planos/Secure data(4).gif';
	import ASN from '$lib/img/planos/Connected world(3).gif';
	import BackBone from '$lib/img/planos/Server status(4).gif';
	import ServidorPlano from '$lib/img/planos/Server(4).gif';
	import mainImg from '$lib/img/img1.webp';
	import monitoramentoImg from '$lib/img/planos/Server status monit.gif';
	import customImg from '$lib/img/planos/Strategic consulting.gif';
	import { Separator } from '$lib/components/ui/separator';

	import ChevronRight from 'lucide-svelte/icons/chevron-right';
	import { fade } from 'svelte/transition';
	import SectionDiferenciais from '$lib/components/SectionDiferenciais.svelte';
	import { Button } from '$lib/components/ui/button';
	import ShineBorder from '$lib/components/ShineBorder/MultipleBorderExample.svelte';

	interface Card {
		img: string;
		titulo: string;
		topicos: string[];
	}

	const cards: Card[] = [
		{
			img: CDN,
			titulo: 'CDN',
			topicos: [
				'Solicitações de CDNs.',
				'Peering com Google, Netflix e Facebook.',
				'Configuração de roteador dedicado para peering.',
				'Suporte completo em todo o processo.'
			]
		},
		{
			img: BGP,
			titulo: 'BGP',
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
			titulo: 'ASN',
			topicos: [
				'Suporte completo durante o processo.',
				'Ajuda na obtenção do AS junto ao Registro.br.',
				'Configuração básica do BGP com a operadora.',
				'Entrega de IPs públicos e preparação para IPv6.'
			]
		}
	];

	const networkFeatures: string[] = [
		'Planejamento',
		'Mapeamento completo da rede',
		'Reestruturação do Core com ativação de PE e CE',
		'Redundância',
		'VLAN, MPLS, VPLS',
		'Política de redistribuição baseada em redes declaradas',
		'Pilha dupla IPv4/IPv6'
	];

	const serverFeatures: string[] = [
		'Ferramentas para gerência da rede IP',
		'Monitoramento e gráficos',
		'DNS (Autoritativo, Recursivo, Reverso)',
		'VPN',
		'Servidor para OLT',
		'Disponibilidade de adicionar espaço para o seu sistema de gerência!'
	];

	const monitoramentoFeatures: string[] = [
		'Monitoramento contínuo do uso da banda IP ou IX “PTT”',
		'Detecção de quedas em operadoras ou transportes, com contato imediato para solução',
		'Monitoramento em tempo real do Core, POPs e roteadores internos',
		'Supervisão de servidores',
		'Otimização do uso de equipamentos'
	];

	let scrollY = 0;
</script>

<svelte:window bind:scrollY />

<!-- <h1 class="fixed right-40 top-40 z-20 bg-white text-5xl text-black">{scrollY}</h1> -->

<section
	class="bg-[ mb-10 flex h-full min-h-full w-full select-none items-center justify-center bg-cover bg-center bg-no-repeat object-cover"
	style={`background-image: url(${mainImg});`}
>
	<div class="z-10 flex flex-col items-center justify-center">
		<WordPullUp words="Tecnologia & Inovação" velocidade={0.35} />
		<WordPullUp words="para Melhor Performance" velocidade={0.55} />

		<h2 class="mt-[.5rem] flex items-center gap-3 text-2xl text-white">
			Consultoria para Provedores de Internet e Grandes Empresas
		</h2>
	</div>
</section>

<!-- ------------------------------ DIFERENCIAIS	 ------------------------------ -->

<div class="flex h-full w-full flex-col items-center justify-center">
	<div class="mb-10 flex w-full items-center justify-center">
		<Separator class=" w-1/3" />
		<h1 class=" w-full text-center font-inter text-4xl font-bold">Difereciais</h1>
		<Separator class=" w-1/3" />
	</div>
	<SectionDiferenciais />
</div>

<!-- ------------------------------ PLANOS ------------------------------ -->

<div class="mt-16 flex w-full items-center justify-center" id="Planos">
	<Separator class=" w-1/3" />
	<h1 class=" w-full text-center font-inter text-4xl font-bold">Nossos Planos</h1>
	<Separator class=" w-1/3" />
</div>
<div class="flex w-3/5 flex-col pt-16 text-white">
	<section class="relative mb-20 flex h-full items-center justify-center gap-10">
		<div class="flex w-1/2 flex-col gap-3">
			<h1
				class="mb-5 w-full text-center font-inter text-4xl font-bold underline decoration-[#CB3E38] underline-offset-8"
			>
				OSPF
			</h1>
			<p class="break-before-right text-pretty text-xl">
				Consideramos este o <span class="font-bold text-[#CB3E38]">plano mais importante</span>,
				pois a estrutura da sua rede é essencial para garantir a
				<span class="font-bold text-[#CB3E38]">qualidade do produto</span> entregue ao cliente final.
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
				<img
					src={BackBone}
					alt=""
					loading="lazy"
					class="select-none"
					transition:fade={{ delay: 0, duration: 300 }}
				/>
			{/if}
		</div>
	</section>

	<section
		id="estrutura-de-rede"
		class="relative mb-10 flex h-full flex-row-reverse items-center justify-center"
	>
		<div class="flex w-1/2 flex-col gap-3">
			<h1
				class="mb-5 w-full text-center font-inter text-4xl font-bold underline decoration-[#CB3E38] underline-offset-8"
			>
				Servidor
			</h1>
			<p class="text-pretty text-xl">
				Temos <span class="font-bold text-[#CB3E38]">soluções em virtualização</span> e máquinas
				físicas para garantir a <span class="font-bold text-[#CB3E38]">melhor gestão</span> para o seu
				provedor.
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
				<img src={ServidorPlano} alt="Plano de Servidor" loading="lazy" class="select-none" />
			{/if}
		</div>
	</section>
</div>

<section class="relative flex h-full w-full items-center justify-center py-20">
	<div class="flex w-3/5 justify-center gap-5">
		{#if scrollY > 1250}
			{#each cards as card (card.titulo)}
				<SquareCard {card} />
			{/each}
		{/if}
	</div>
</section>

<div class="flex w-3/5 flex-col gap-5 pt-10 text-white">
	<section class="relative flex h-full items-center justify-center gap-10">
		<div class="flex w-1/2 flex-col gap-3">
			<h1
				class="mb-5 w-full text-center font-inter text-4xl font-bold underline decoration-[#CB3E38] underline-offset-8"
			>
				Monitoramento
			</h1>
			<p class="break-before-right text-pretty text-xl">
				Nossa equipe monitora sua rede de forma contínua, <span class="font-bold text-[#CB3E38]"
					>garantindo</span
				>
				a estabilidade ao agir prontamente em casos de falhas,
				<span class="font-bold text-[#CB3E38]">otimizando o uso de equipamentos</span>
				e mantendo o <span class="font-bold text-[#CB3E38]">desempenho</span> dos servidores e roteadores
				no máximo.
			</p>
			<p class="text-pretty text-xl">
				Uma topologia de rede bem projetada resulta em uma excelente experiência de navegação.
			</p>
			<p class="text-pretty text-xl">Destacamos os seguintes pontos:</p>

			<ul class="flex flex-col items-start justify-start gap-2 text-lg">
				{#each monitoramentoFeatures as feature}
					<li class="flex gap-2">
						<ChevronRight size={20} class="h-4" color="#CB3E38" />
						{feature}
					</li>
				{/each}
			</ul>
		</div>
		<div class="flex w-1/2 justify-center gap-5">
			{#if scrollY > 2300}
				<img
					src={monitoramentoImg}
					alt="Plano Monitoramento"
					loading="lazy"
					class="select-none"
					transition:fade={{ delay: 0, duration: 300 }}
				/>
			{/if}
		</div>
	</section>

	<section class=" flex h-full flex-row-reverse items-center justify-center">
		<div class="flex w-1/2 flex-col items-center gap-5 text-center">
			<h1
				class="mb-2 w-full font-inter text-4xl font-bold underline decoration-[#CB3E38] underline-offset-8"
			>
				Custom
			</h1>
			<p class="text-pretty text-xl">
				Desenvolvido <span class="font-bold text-[#CB3E38]">exclusivamente</span> para sua empresa,
				<span class="font-bold text-[#CB3E38]">completamente adaptável</span> às suas necessidades.
			</p>
			<p class="text-pretty text-xl">
				Nós moldamos nossos serviços para <span class="font-bold text-[#CB3E38]">garantir</span>
				que você receba exatamente o <span class="font-bold text-[#CB3E38]">suporte</span> que
				precisa, de forma
				<span class="font-bold text-[#CB3E38]">personalizada e eficiente</span>.
			</p>
		</div>
		<div class="flex w-1/2 justify-center gap-5">
			{#if scrollY > 2980}
				<img src={customImg} alt="Plano Custom" loading="lazy" class="select-none" />
			{/if}
		</div>
	</section>
</div>
<div class="flex w-full items-center justify-center">
	<Separator class=" w-2/5" />
	<ShineBorder
		href="https://wa.me/5555555555555?text=Ola%20acabei%20de%20ver%20site%20e%20estou%20interessando%20em%20saber%20mais%20sobre%20seus%20planos!"
		frase="Entrar em Contato"
	/>
	<Separator class=" w-2/5 " />
</div>

<footer class="flex min-h-64 w-full items-center justify-center">
	<p>FOOTER</p>
</footer>
