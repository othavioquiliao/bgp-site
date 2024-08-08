<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import Rede from '$lib/img/plllllsss.png';
	import Logo from '$lib/img/logo-consulto.png';
	import manGif from '$lib/img/Online connection.gif';
</script>

<!-- #CB3E38 -->

<section class="relative flex min-h-full w-full items-center justify-center gap-10 px-20">
	<div class="flex w-1/2 flex-col">
		<h1 class="uppercase">Teste</h1>
		<h2>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut excepturi sequi laudantium
			mollitia distinctio reprehenderit corporis inventore quasi sit reiciendis aliquam voluptates,
			similique rem porro facilis deleniti eligendi. Earum, aut! Lorem ipsum dolor, sit amet
			consectetur adipisicing elit. Itaque ex quas minus sit voluptas possimus optio harum expedita,
			alias, sed aperiam veritatis! Tempore ullam saepe, reiciendis quaerat sequi adipisci quod?
		</h2>
	</div>
	<img src={Rede} alt="Mapa mundi com pontos representando rede" class="flex pt-20" />
</section>

<section class="flex h-full w-full gap-10 px-20">
	<img src={manGif} alt="" class="" />
	<div>
		<h1 class="text-center text-4xl">Sobre</h1>
		<p>
			Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet quae laborum cumque sequi
			delectus at suscipit nisi dicta odit exercitationem numquam, consectetur explicabo
			reprehenderit repellendus ea eligendi tempora maiores excepturi? Lorem ipsum, dolor sit amet
			consectetur adipisicing elit. Eveniet quae laborum cumque sequi delectus at suscipit nisi
			dicta odit exercitationem numquam, consectetur explicabo reprehenderit repellendus ea eligendi
			tempora maiores excepturi? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet
			quae laborum cumque sequi delectus at suscipit nisi dicta odit exercitationem numquam,
			consectetur explicabo reprehenderit repellendus ea eligendi tempora maiores excepturi? Lorem
			ipsum, dolor sit amet consectetur adipisicing elit. Eveniet quae laborum cumque sequi delectus
			at suscipit nisi dicta odit exercitationem numquam, consectetur explicabo reprehenderit
			repellendus ea eligendi tempora maiores excepturi? Lorem ipsum, dolor sit amet consectetur
			adipisicing elit. Eveniet quae laborum cumque sequi delectus at suscipit nisi dicta odit
			exercitationem numquam, consectetur explicabo reprehenderit repellendus ea eligendi tempora
			maiores excepturi?
		</p>
	</div>
</section>
