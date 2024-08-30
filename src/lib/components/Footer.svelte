<script lang="ts">
	import logoBGP from '$lib/img/logo-branco-com-X.png';
	import { Separator } from '$lib/components/ui/separator';
	import Facebook from 'lucide-svelte/icons/facebook';
	import Instagram from 'lucide-svelte/icons/instagram';
	import Linkedin from 'lucide-svelte/icons/linkedin';
	import { Button } from './ui/button';
	import brazilImg from '$lib/img/Design sem nome.png';

	let anoAtual = new Date().getFullYear();
</script>

<footer
	class="flex min-h-[70%] w-full flex-col-reverse items-center justify-center md:min-h-[60%] md:w-5/6 md:flex-row"
>
	<div
		class="flex h-full w-full flex-col items-center justify-center gap-3 md:w-1/4 md:items-start"
	>
		<div class="flex w-full items-center justify-center">
			<img src={logoBGP} alt="Logo BGP Branco" class="w-80" />
		</div>
		<p>Razao Social: Bgp Consultoria Ltda.</p>
		<p>CNPJ: 29.432.186/0001-30</p>
		<div class="flex w-full justify-center gap-5 pt-5 md:justify-start">
			<Button variant="ghost" class="px-1 py-6">
				<Instagram size={40} />
			</Button>
			<Button variant="ghost" class="px-1 py-6">
				<Facebook size={40} />
			</Button>
			<Button variant="ghost" class="px-1 py-6">
				<Linkedin size={40} />
			</Button>
		</div>
	</div>

	<Separator orientation="vertical" class="hidden h-full min-h-[70%] md:flex" />

	<div class="flex w-full flex-col gap-5 p-5 text-center md:w-1/4">
		<p
			class="font-inter text-2xl font-semibold underline decoration-[#CB3E38] underline-offset-[6px]"
		>
			Quem somos
		</p>
		<p>
			Consultoria para provedores de internet e empresas que precisam de servidores estáveis,
			seguros e de alto desempenho.
		</p>
		<p>
			Aprimoramento da rede de internet com diagnóstico técnico preciso para melhorar a qualidade e
			performance no atendimento a clientes.
		</p>
	</div>
	<Separator orientation="vertical" class="hidden min-h-[70%] md:flex" />

	<div class="hidden w-2/4 items-center justify-center md:flex">
		<div class="flex w-1/2 flex-col gap-5 text-pretty px-14 text-center">
			<p
				class="font-inter text-2xl font-semibold underline decoration-[#CB3E38] underline-offset-[6px]"
			>
				Contato
			</p>
			<p>
				Atendemos o <span class="font-semibold text-[#CB3E38]">Brasil inteiro</span> , entre em contato
				conosco para saber mais sobre nossos serviços.
			</p>
			<p>(11) 98911-1928</p>
		</div>
		<img src={brazilImg} alt="Mapa do brazil" class="w-1/2" />
	</div>
</footer>
