<script lang="ts">
	import SquareCard from '$lib/components/CardPlanos/SquareCard.svelte';
	import WordPullUp from '$lib/components/BoxReveal/WordPullUp.svelte';

	import coworking from '$lib/img/coworking.png';
	import CDN from '$lib/img/planos/Online.gif';
	import BGP from '$lib/img/planos/Endpoint.gif';
	import ASN from '$lib/img/planos/Connected world.gif';
	import BackBone from '$lib/img/planos/Server status.gif';
	import ServidorPlano from '$lib/img/planos/Server.gif';
	import mainImg from '$lib/img/mainImg.webp';
	import customImg from '$lib/img/planos/Strategic consulting.gif';
	import { Separator } from '$lib/components/ui/separator';
	import ShineBorder from '$lib/components/ShineBorder/MultipleBorderExample.svelte';

	import ChevronRight from 'lucide-svelte/icons/chevron-right';
	import { fade } from 'svelte/transition';
	import SectionDiferenciais from '$lib/components/SectionDiferenciais.svelte';
	import { onMount } from 'svelte';
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

	let scrollY = 0;
</script>

<svelte:window bind:scrollY />

<!-- <h1 class="fixed right-40 top-40 z-20 bg-white text-5xl text-black">{scrollY}</h1> -->

<section
	class=" relative mb-10 flex h-full min-h-full w-full select-none items-center justify-center"
>
	<img
		src={mainImg}
		alt="Imagem principal"
		loading="eager"
		class="absolute h-full w-full object-cover blur-sm"
	/>
	<div class="z-10 flex flex-col items-center justify-center p-10">
		{#if isMobile}
			<WordPullUp words="Tecnologia & Inovação para" velocidade={0.35} />
			<WordPullUp words="Melhor Performance" velocidade={0.55} />
		{:else}
			<WordPullUp words="Tecnologia & Inovação" velocidade={0.35} />
			<WordPullUp words="para Melhor Performance" velocidade={0.55} />
		{/if}

		<h2 class="mt-[.5rem] flex items-center gap-3 text-xl text-white md:text-2xl">
			Consultoria para Provedores de Internet e Grandes Empresas
		</h2>
	</div>
</section>

<!-- ------------------------------ DIFERENCIAIS	 ------------------------------ -->

<SectionDiferenciais />

<!-- ------------------------------ PLANOS ------------------------------ -->

<div class="mt-10 flex w-full items-center justify-center md:mt-16" id="Planos">
	<Separator class="w-1/4  md:w-1/3" />
	<h1 class=" w-full text-center font-inter text-3xl font-bold uppercase md:text-4xl">
		Nossos Planos
	</h1>
	<Separator class="w-1/4  md:w-1/3" />
</div>
<div class="flex w-full flex-col pt-0 text-white md:w-3/5 md:pt-16">
	<section
		class="relative mb-10 flex h-full flex-col-reverse items-center justify-center gap-10 md:mb-20 md:flex-row"
	>
		<div class="flex w-full flex-col gap-3 px-5 text-center md:w-1/2 md:px-0 md:text-start">
			<h1
				class="mb-5 w-full text-center font-inter text-2xl font-bold underline decoration-[#CB3E38] underline-offset-8 md:text-4xl"
			>
				Core Base
			</h1>
			<p class="break-before-right text-pretty text-xl">
				Consideramos este o <span class="font-bold text-[#CB3E38]">plano mais importante</span>,
				pois a estrutura da sua rede é essencial para garantir a
				<span class="font-bold text-[#CB3E38]">qualidade do produto</span> entregue ao cliente final.
			</p>
			<p class="text-pretty text-xl">
				Uma topologia de rede bem projetada resulta em uma excelente experiência de navegação.
			</p>
			<p class="text-pretty text-start text-xl">Destacamos os seguintes pontos:</p>

			<ul class="flex flex-col items-start justify-start gap-2 text-start text-lg">
				{#each networkFeatures as feature}
					<li class="flex gap-2">
						<ChevronRight size={20} class="h-4" color="#CB3E38" />
						{feature}
					</li>
				{/each}
			</ul>
		</div>
		<div class="flex w-full justify-center gap-5 md:w-1/2">
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
		class="relative flex h-full flex-col-reverse items-center justify-center md:mb-10 md:flex-row-reverse"
	>
		<div class="flex w-full flex-col gap-3 px-5 text-center md:w-1/2 md:px-0 md:text-start">
			<h1
				class="mb-5 w-full text-center font-inter text-2xl font-bold underline decoration-[#CB3E38] underline-offset-8 md:text-4xl"
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
			<p class="text-pretty text-start text-xl">Oferecemos:</p>

			<ul class="flex flex-col items-start justify-start gap-2 text-start text-lg">
				{#each serverFeatures as feature}
					<li class="flex gap-2">
						<ChevronRight size={20} class="h-4" color="#CB3E38" />
						{feature}
					</li>
				{/each}
			</ul>
		</div>
		<div class="flex w-full justify-center gap-5 md:w-1/2">
			{#if scrollY > 650}
				<img src={ServidorPlano} alt="Plano de Servidor" loading="lazy" class="select-none" />
			{/if}
		</div>
	</section>
</div>
<!-- ----------------   Custom -->

<section
	class="flex h-full w-full flex-col-reverse items-center justify-center gap-5 text-white md:w-3/5 md:flex-row"
>
	<div class="flex w-full flex-col items-center gap-5 px-5 text-center md:w-1/2 md:px-0">
		<h1
			class="mb-2 w-full font-inter text-3xl font-bold underline decoration-[#CB3E38] underline-offset-8 md:text-4xl"
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
	<div class="flex w-full justify-center gap-5 md:w-1/2">
		{#if scrollY > 100}
			<img src={customImg} alt="Plano Custom" loading="lazy" class="select-none" />
		{/if}
	</div>
</section>

<!-- ----------------- CARDS ------------------------------------------ -->
<section
	class="relative flex w-full flex-col flex-nowrap items-center justify-center gap-5 px-5 py-10 md:w-3/5 md:flex-row md:px-0 md:pb-20 md:pt-10"
>
	{#if scrollY > 1250}
		{#each cards as card (card.titulo)}
			<SquareCard {card} />
		{/each}
	{/if}
</section>

<div
	id="Sobre"
	class=" relative flex min-h-60 w-full items-center justify-center overflow-x-hidden bg-cover bg-center shadow-[inset_0_0_100px_110px_rgba(8,14,21,1)]"
	style={`background-image: url(${coworking});`}
>
	<p class="z-10 whitespace-pre-wrap text-center text-5xl font-medium text-white">
		<ShineBorder
			href="https://wa.me/5511989111928?text=Ola%20Tudo%20bem%3F%0AOlhado%20o%20seu%20site%20e%20gostaria%20de%20saber%20mais!"
			frase="Entrar em Contato"
		/>
	</p>
</div>
