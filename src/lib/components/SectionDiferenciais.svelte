<script lang="ts">
	import Wifi from 'lucide-svelte/icons/wifi';
	import Gem from 'lucide-svelte/icons/gem';
	import Headset from 'lucide-svelte/icons/headset';
	import HandCoins from 'lucide-svelte/icons/hand-coins';
	import { Separator } from './ui/separator';

	interface CardDiferenciais {
		img: any;
		titulo: string;
		descricao: string;
	}
	const diferenciaisFeatures: CardDiferenciais[] = [
		{
			img: Wifi,
			titulo: 'Consultoria de Internet',

			descricao:
				'Análise de otimização e melhoria de performance de infra e processos de provedores.'
		},
		{
			img: 'https://via.placeholder.com/150',
			titulo: 'Expertise BGP',
			descricao:
				'Profissionais renomados no mercado nacional com experiência e credibilidade que o seu provedor precisa.'
		},
		{
			img: 'https://via.placeholder.com/150',
			titulo: 'Suporte',
			descricao: 'Atendimento com linha de chamado e suporte para atendimento ágil e  para solução.'
		},
		{
			img: 'https://via.placeholder.com/150',
			titulo: 'Planos Acessíveis',
			descricao:
				'São vários planos diferentes com soluções para se encaixar ao tamanho da sua empresa.'
		}
	];
</script>

<section class="flex min-h-96 w-3/5 items-center justify-center py-5">
	<div class="flex w-1/4 flex-col items-center gap-5 text-center">
		<Wifi size={70} />
		<h3 class="text-2xl font-semibold text-[#CB3E38]">{diferenciaisFeatures[0].titulo}</h3>
		<p class="text-pretty text-lg">{diferenciaisFeatures[0].descricao}</p>
	</div>
	<Separator orientation="vertical" class="mx-5" />
	<div class="flex w-1/4 flex-col items-center gap-5 text-center">
		<Gem size={70} />

		<h3 class="text-2xl font-semibold text-[#CB3E38]">{diferenciaisFeatures[1].titulo}</h3>
		<p class="text-pretty text-lg">{diferenciaisFeatures[1].descricao}</p>
	</div>
	<Separator orientation="vertical" class="mx-5" />
	<div class="flex w-1/4 flex-col items-center gap-5 text-center">
		<Headset size={70} />
		<h3 class="text-2xl font-semibold text-[#CB3E38]">{diferenciaisFeatures[2].titulo}</h3>
		<p class="text-pretty text-lg">{diferenciaisFeatures[2].descricao}</p>
	</div>
	<Separator orientation="vertical" class="mx-5" />
	<div class="flex w-1/4 flex-col items-center gap-5 text-center">
		<HandCoins size={70} />
		<h3 class="text-2xl font-semibold text-[#CB3E38]">{diferenciaisFeatures[3].titulo}</h3>
		<p class="text-pretty text-lg">{diferenciaisFeatures[3].descricao}</p>
	</div>
</section>
