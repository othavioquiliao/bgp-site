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

<div class="flex h-full w-full flex-col items-center justify-center">
	<h1 class=" mb-8 w-full text-center font-inter text-3xl font-bold uppercase md:mb-0 md:text-4xl">
		Diferenciais
	</h1>

	<section
		class="flex min-h-96 w-full flex-col items-center justify-center gap-5 px-5 py-5 md:w-3/5 md:flex-row md:gap-0 md:px-0"
	>
		<div class="flex w-full md:w-2/4">
			<div class="flex w-1/2 flex-col items-center gap-5 text-center">
				<Wifi size={70} />
				<h3 class="text-2xl font-semibold text-[#CB3E38]">{diferenciaisFeatures[0].titulo}</h3>
				<p class="text-md text-pretty md:text-lg">{diferenciaisFeatures[0].descricao}</p>
			</div>
			<Separator orientation="vertical" class="mx-5" />
			<div class="flex w-1/2 flex-col items-center gap-5 text-center">
				<Gem size={70} />

				<h3 class="text-2xl font-semibold text-[#CB3E38]">{diferenciaisFeatures[1].titulo}</h3>
				<p class="text-md text-pretty md:text-lg">{diferenciaisFeatures[1].descricao}</p>
			</div>
		</div>
		<Separator orientation="horizontal" class="  w-full md:hidden" />

		<div class="flex w-full md:w-2/4">
			<Separator orientation="vertical" class="mx-5 hidden md:flex" />
			<div class="flex w-1/2 flex-col items-center gap-5 text-center">
				<Headset size={70} />
				<h3 class="text-2xl font-semibold text-[#CB3E38]">{diferenciaisFeatures[2].titulo}</h3>
				<p class="text-md text-pretty md:text-lg">{diferenciaisFeatures[2].descricao}</p>
			</div>
			<Separator orientation="vertical" class="mx-5" />
			<div class="flex w-1/2 flex-col items-center gap-5 text-center">
				<HandCoins size={70} />
				<h3 class="text-2xl font-semibold text-[#CB3E38]">{diferenciaisFeatures[3].titulo}</h3>
				<p class="text-md text-pretty md:text-lg">{diferenciaisFeatures[3].descricao}</p>
			</div>
		</div>
	</section>
</div>
