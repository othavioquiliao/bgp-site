<script lang="ts">
	import { cn } from '$lib/utils';
	import { Motion } from 'svelte-motion';

	export let velocidade: number = 0.25;
	export let words = 'Pull Up';
	export let wrapperFramerProps = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: {
				staggerChildren: velocidade
			}
		}
	};
	export let framerProps = {
		hidden: { y: 20, opacity: 0 },
		show: { y: 0, opacity: 1 }
	};

	let className: any = '';
	export { className as class };

	let wordSplit = words.split(' ');
</script>

<Motion variants={wrapperFramerProps} initial="hidden" animate="show" let:motion>
	<h1
		class={cn(
			' bg-gradient-to-b from-white to-red-700 bg-clip-text text-start font-inter text-7xl font-extrabold tracking-[-0.02em] text-transparent text-white drop-shadow-2xl  ',
			className
		)}
		use:motion
	>
		{#each wordSplit as word, i}
			<Motion variants={framerProps} let:motion>
				<span class="inline-block {word === '&' ? 'font-bold text-red-500' : ''}" use:motion>
					{#if word === ''}
						<span>&nbsp;</span>
					{:else}
						{word}
					{/if}
				</span>
			</Motion>
		{/each}
	</h1>
</Motion>
