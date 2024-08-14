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

<div class={cn('h-[45rem] bg-background text-left', className)}>
	<img src={card.img} alt={card.titulo} />
	<div class="flex flex-col gap-3">
		<h3 class="text-center text-2xl font-bold text-gray-900">{card.titulo}</h3>
		<ul class="flex flex-col items-start justify-start gap-2 text-gray-700">
			{#each card.topicos as topico}
				<li class="flex gap-2">
					<ChevronRight size={20} class="h-4" color="#CB3E38" />
					{topico}
				</li>
			{/each}
		</ul>
	</div>
</div>
