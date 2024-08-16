<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import createGlobe from 'cobe';
	import { spring } from 'svelte/motion';
	import { cn } from '$lib/utils';

	let x = spring(0, {
		stiffness: 0.04,
		damping: 0.4,
		precision: 0.005
	});
	let className = '';
	export { className as class };

	let pointerInteracting: number | null = null;
	let pointerInteractionMovement = 0;
	let canvas: HTMLCanvasElement;
	let phi = 0;
	let width = 0;
	let globe: ReturnType<typeof createGlobe>;

	const onResize = () => {
		width = canvas.offsetWidth;
	};

	const onRender = (state: any) => {
		if (!pointerInteracting) {
			phi += 0.005;
		}
		state.phi = phi + $x;
		state.width = width * 2;
		state.height = width * 2;
	};

	onMount(() => {
		onResize();

		globe = createGlobe(canvas, {
			devicePixelRatio: 2,
			width: width,
			height: width,
			phi: 0,
			theta: 0.0,
			dark: -5,
			diffuse: 1.2, // 1.2
			mapSamples: 10000,
			mapBrightness: 6, // 6
			baseColor: [0.129, 0.129, 0.129],
			markerColor: [203 / 255, 62 / 255, 56 / 255],
			glowColor: [0.129, 0.129, 0.129],
			markers: [
				{ location: [14.5995, 120.9842], size: 0.03 },
				{ location: [19.076, 72.8777], size: 0.03 },
				{ location: [23.8103, 90.4125], size: 0.05 },
				{ location: [30.0444, 31.2357], size: 0.07 },
				{ location: [39.9042, 116.4074], size: 0.08 },
				{ location: [-23.5505, -46.6333], size: 0.05 },
				{ location: [19.4326, -99.1332], size: 0.04 },
				{ location: [40.7128, -74.006], size: 0.1 },
				{ location: [34.6937, 135.5022], size: 0.05 },
				{ location: [41.0082, 28.9784], size: 0.06 }
			],
			onRender: onRender
		});
	});

	onDestroy(() => {
		if (globe) {
			globe.destroy(); // Certifique-se de que o objeto globe seja destruído corretamente
		}
	});
</script>

<svelte:window on:resize={onResize} />

<main
	class={cn(
		' h-min-full inset-0 aspect-[1/1] min-w-[400px] max-w-[600px]  items-center justify-center',
		className
	)}
>
	<canvas
		class="h-full w-full [contain:layout_paint_size]"
		bind:this={canvas}
		on:pointerdown={(e) => {
			pointerInteracting = e.clientX - pointerInteractionMovement;
			canvas.style.cursor = 'grabbing';
		}}
		on:pointerup={() => {
			pointerInteracting = null;
			canvas.style.cursor = 'grab';
		}}
		on:pointerout={() => {
			pointerInteracting = null;
			canvas.style.cursor = 'grab';
		}}
		on:mousemove={(e) => {
			if (pointerInteracting !== null) {
				const delta = e.clientX - pointerInteracting;
				pointerInteractionMovement = delta;
				x.set(delta / 200);
			}
		}}
	/>
</main>
