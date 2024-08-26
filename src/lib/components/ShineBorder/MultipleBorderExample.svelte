<script>
	// Scroll below to see the original Component file
	import ShineBorder from '../ShineBorder/ShineBorder.svelte';
	export let frase = 'Entre em contato';
	export let href;
</script>

<div class="flex min-h-36 w-full items-center justify-center">
	<!-- Add Border colors in array of strings  -->
	<ShineBorder class="text-center text-2xl font-bold " {href} color={['#CB3E38', '#CB1111']}>
		{frase}
	</ShineBorder>
</div>
