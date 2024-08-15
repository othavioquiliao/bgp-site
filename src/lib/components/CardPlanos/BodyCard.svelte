<script lang="ts">
	import { cn } from '$lib/utils';
	import ChevronRight from 'lucide-svelte/icons/chevron-right';

	export let className: string = '';

	interface Card {
		img: string;
		titulo: string;
		topicos: string[];
	}
	export let card: Card;
</script>

<div class={cn('h-[45rem]  ', className)}>
	<img src={card.img} alt={card.titulo} />
	<div class="flex flex-col gap-3">
		<h3 class="text-center text-2xl font-bold text-gray-900 underline decoration-[#CB3E38]">
			{card.titulo}
		</h3>
		<ul class="flex flex-col gap-2 text-gray-700">
			{#each card.topicos as topico}
				<li class=" flex items-start">
					<ChevronRight size={30} class="h-5" color="#CB3E38" />
					{topico}
				</li>
			{/each}
		</ul>
	</div>
</div>
