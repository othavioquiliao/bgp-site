<script>
	import CardBody from './BodyCard.svelte';
	import CardIcon from './CardIcon.svelte';
</script>

<div>
	<div class="relative border border-dashed border-zinc-400 dark:border-zinc-700 dark:bg-[#0b0b0b]">
		<CardIcon class="-left-3 -top-3" />
		<CardIcon class="-right-3 -top-3" />
		<CardIcon class="-bottom-3 -left-3" />
		<CardIcon class="-bottom-3 -right-3" />
		<CardBody class="p-10" />
	</div>
</div>
