<script lang="ts">
	import { onMount } from 'svelte';

	let isVisible = false;
	export let src: string;
	export let alt: string;
	export let id: string;
	let element: HTMLElement;

	function handleIntersection([entry]: IntersectionObserverEntry[]): void {
		if (entry.isIntersecting) {
			isVisible = true;
		}
	}

	onMount(() => {
		const observer = new IntersectionObserver(handleIntersection, {
			root: null,
			rootMargin: '0px',
			threshold: 0.1
		});

		if (element) {
			observer.observe(element);
		}

		return () => {
			observer.disconnect();
		};
	});
</script>

<div bind:this={element} {id}>
	{#if isVisible}
		<img {src} {alt} />
	{/if}
</div>
