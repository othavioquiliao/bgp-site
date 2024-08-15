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
	import BackBone from '$lib/img/planos/BackBone.gif';
	import ServidorPlano from '$lib/img/planos/ServidorPlano.gif';

	import CarregaQuandoVisivel from '$lib/components/CarregaQuandoVisivel.svelte';
	import ChevronRight from 'lucide-svelte/icons/chevron-right';
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

<section class="flex h-full min-h-[98%] w-4/5 items-center justify-center">
	<div class="flex select-none flex-col items-start justify-center gap-2 md:w-1/2">
		<BoxRevealEx />
	</div>
	<GlobeEx class="w-1/2" />
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

<div class="flex w-full items-center justify-center overflow-hidden py-20">
	<Separator />
	<h4 class="rounded-lg border bg-[#CB3E38] px-5 py-2 text-2xl font-bold text-white">Planos</h4>
	<Separator />
</div>
<!-- Section Planos -->

<section id="planos" class="relative flex h-full w-full items-center justify-center">
	<div class="flex w-3/5 justify-center gap-5">
		{#each cards as card}
			<SquareCard {card} />
		{/each}
	</div>
</section>

<div class="flex w-full items-center justify-center overflow-hidden py-20">
	<Separator />
	<h4 class="text-nowrap rounded-lg border bg-[#CB3E38] px-5 py-2 text-2xl font-bold text-white">
		Estrutura de Rede
	</h4>
	<Separator />
</div>

<!-- Section Estrutura de Rede -->
<section id="estrutura-de-rede" class="relative flex h-full w-3/5 items-center justify-center">
	<div class="flex w-1/2 flex-col gap-3">
		<h1 class="mb-3 w-full text-center text-4xl font-bold underline decoration-[#CB3E38]">
			Plano OSPF
		</h1>
		<p class="text-pretty text-xl">
			Consideramos este o <span class=" text-[#CB3E38]"> plano mais importante</span>, pois a
			estrutura da sua rede é essencial para garantir a
			<span class=" text-[#CB3E38]">qualidade do produto</span> entregue ao cliente final.
		</p>
		<p class="text-pretty text-xl">
			Uma topologia de rede bem projetada resulta em uma excelente experiência de navegação.
		</p>
		<p class="text-pretty text-xl">Destacamos os seguintes pontos:</p>

		<ul class="flex flex-col items-start justify-start gap-2 text-gray-700">
			<li class="flex gap-2">
				<ChevronRight size={20} class="h-4" color="#CB3E38" />
				Planejamento
			</li>
			<li class="flex gap-2">
				<ChevronRight size={20} class="h-4" color="#CB3E38" />
				Mapeamento completo da rede
			</li>
			<li class="flex gap-2">
				<ChevronRight size={20} class="h-4" color="#CB3E38" />
				Reestruturação do Core com ativação de PE e CE
			</li>
			<li class="flex gap-2">
				<ChevronRight size={20} class="h-4" color="#CB3E38" />
				Redundância
			</li>
			<li class="flex gap-2">
				<ChevronRight size={20} class="h-4" color="#CB3E38" />
				VLAN, MPLS, VPLS
			</li>
			<li class="flex gap-2">
				<ChevronRight size={20} class="h-4" color="#CB3E38" />
				Política de redistribuição baseada em redes declaradas; Pilha dupla IPv4/IPv6
			</li>
		</ul>
	</div>
	<div class="flex w-1/2 justify-center gap-5">
		<CarregaQuandoVisivel
			src={BackBone}
			id="BackBone"
			alt="Imagem de Servidor e BackBone da internet"
		/>
	</div>
</section>
<section
	id="estrutura-de-rede"
	class="relative flex h-full w-3/5 flex-row-reverse items-center justify-center"
>
	<div class="flex w-1/2 flex-col gap-3">
		<h1 class="mb-3 w-full text-center text-4xl font-bold underline decoration-[#CB3E38]">
			Para o seu Servidor :
		</h1>
		<p class="text-pretty text-xl">
			Temos <span class=" text-[#CB3E38]">soluções em virtualização</span> e máquinas físicas para
			garantir a <span class=" text-[#CB3E38]">melhor gestão</span> para o seu provedor.
		</p>
		<p class="text-pretty text-xl">
			Focamos em otimização e confiabilidade, atendendo às necessidades específicas da sua rede.
		</p>
		<p class="text-pretty text-xl">
			Uma topologia de rede bem projetada resulta em uma excelente experiência de navegação.
		</p>
		<p class="text-pretty text-xl">Oferecemos:</p>

		<ul class="flex flex-col items-start justify-start gap-2 text-gray-700">
			<li class="flex gap-2">
				<ChevronRight size={20} class="h-4" color="#CB3E38" />
				Ferramentas para gerência da rede IP
			</li>
			<li class="flex gap-2">
				<ChevronRight size={20} class="h-4" color="#CB3E38" />
				Monitoramento e gráficos
			</li>
			<li class="flex gap-2">
				<ChevronRight size={20} class="h-4" color="#CB3E38" />
				DNS (Autoritativo, Recursivo, Reverso)
			</li>
			<li class="flex gap-2">
				<ChevronRight size={20} class="h-4" color="#CB3E38" />
				VPN
			</li>
			<li class="flex gap-2">
				<ChevronRight size={20} class="h-4" color="#CB3E38" />
				Servidor para OLT
			</li>
			<li class="flex gap-2">
				<ChevronRight size={20} class="h-4" color="#CB3E38" />
				Disponibilidade de adicionar espaço para o seu sistema de gerência!
			</li>
		</ul>
	</div>
	<div class="flex w-1/2 justify-center gap-5">
		<CarregaQuandoVisivel
			src={ServidorPlano}
			id="ServidorPlano"
			alt="Imagem de um Servidor com alguem sentado analisando o status do servidores"
		/>
	</div>
</section>
