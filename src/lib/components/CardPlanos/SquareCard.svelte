<script lang="ts">
	import CardBody from './BodyCard.svelte';
	import CardIcon from './CardIcon.svelte';

	interface Card {
		img: string;
		titulo: string;
		topicos: string[];
	}
	export let card: Card;
</script>

<div class="  relative border border-dashed border-zinc-400 dark:border-white dark:bg-[#2F2F2F]">
	{#each ['-left-3 -top-3', '-right-3 -top-3', '-bottom-3 -left-3', '-bottom-3 -right-3'] as position}
		<CardIcon class={position} />
	{/each}
	<CardBody className="px-5 py-10" {card} />
</div>
