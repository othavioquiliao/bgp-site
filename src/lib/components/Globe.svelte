<script lang="ts">
	import { onMount } from 'svelte';
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
	let pointerInteracting: any = null;
	let pointerInteractionMovement = 0;
	let canvas: HTMLCanvasElement;

	let phi = 0;
	let width = 0;
	// $: console.log(width, 'X');
	let onResize = () => {
		width = canvas.offsetWidth;
	};
	let onRender = (state: any) => {
		if (!pointerInteracting) {
			phi += 0.005;
		}
		state.phi = phi + $x;
		state.width = width * 2;
		state.height = width * 2;
	};
	onMount(() => {
		window.addEventListener('resize', onResize);
		onResize();
		const globe = createGlobe(canvas, {
			devicePixelRatio: 2,
			width: width,
			height: width,
			phi: 0,
			theta: 0.0,
			dark: -5,
			diffuse: 0.4, // 1.2
			mapSamples: 16000,
			mapBrightness: 5, // 6
			baseColor: [0.294, 0.294, 0.302],
			markerColor: [0.796, 0.243, 0.22],
			glowColor: [0.502, 0.502, 0.502],
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
			// onRender: (state) => {
			//   if (!pointerInteracting) {
			//     // Called on every animation frame.
			//     // `state` will be an empty object, return updated params.
			//     phi += 0.009;
			//   }
			//   state.phi = phi + $x;

			//   // phi += 0.01;
			// },
			onRender: onRender
		});
	});
</script>

<main
	class={cn(
		'absolute inset-0 top-32 mx-auto aspect-[1/1] w-full min-w-[400px] max-w-[600px]',
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
				// console.log('working');
				const delta = e.clientX - pointerInteracting;
				pointerInteractionMovement = delta;
				x.set(delta / 200);
			}
		}}
	/>
</main>
