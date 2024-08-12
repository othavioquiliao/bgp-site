<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import Rede from '$lib/img/plllllsss.png';
	import Logo from '$lib/img/logo-consulto.png';
	import manGif from '$lib/img/Online connection.gif';
	import GlobeEx from '$lib/components/Globe.svelte';
</script>

<!-- #CB3E38 -->

<section
	class=" flex h-full min-h-full w-full items-center justify-center gap-10 px-5 md:w-4/5 md:px-0"
>
	<div class="flex flex-col items-start justify-center gap-2 md:w-2/3">
		<h1 class="w-full select-none text-pretty text-3xl md:text-4xl">
			“Nem tudo o que se <span class="font-bold text-[#CB3E38]">enfrenta</span> pode ser modificado,
			mas <span class="font-bold text-[#CB3E38]">nada</span> pode ser modificado enquanto não for
			<span class="font-bold text-[#CB3E38]">enfrentado</span>.”
		</h1>
		<h2 class="select-none text-xl">
			<span class="font-bold text-[#CB3E38]">-</span> James Baldwin
		</h2>
	</div>
	<div
		class=" absolute -z-10 flex h-full w-full items-center justify-center md:relative md:z-0 md:w-1/2"
	>
		<GlobeEx />
	</div>
</section>

<section id="sobre" class="flex h-full w-4/5 items-center justify-center gap-10">
	<img src={manGif} alt="" class="w-1/3" />
	<div class="flex w-2/3 flex-col items-center gap-5">
		<h1 class="w-full text-center text-4xl font-bold underline decoration-[#CB3E38]">Sobre</h1>
		<p class="text-pretty text-2xl">
			Consultoria para provedores de internet e empresas com necessidade de ambiente de servidor
			estável, seguro e com performance Desenvolver e aprimorar a rede de internet do provedor para
			atendimento aos clientes Pessoa Física e Pessoa Jurídica, através de um diagnóstico técnico e
			preciso, é possível uma percepção imediata na qualidade e performance da rede.
		</p>
	</div>
</section>
<section id="sobre2" class="flex h-full w-4/5 items-center justify-center gap-10">
	<img src={manGif} alt="" class="w-1/3" />
	<div class="flex w-2/3 flex-col items-center gap-5">
		<h1 class="w-full text-center text-4xl font-bold underline decoration-[#CB3E38]">Sobre</h1>
		<p class="text-pretty text-2xl">
			Consultoria para provedores de internet e empresas com necessidade de ambiente de servidor
			estável, seguro e com performance Desenvolver e aprimorar a rede de internet do provedor para
			atendimento aos clientes Pessoa Física e Pessoa Jurídica, através de um diagnóstico técnico e
			preciso, é possível uma percepção imediata na qualidade e performance da rede.
		</p>
	</div>
</section>
