<script>
	import Meta from "$lib/components/meta.svelte";
	import { siteConfig } from "$lib/config";
	import { m } from "$lib/paraglide/messages";
</script>

<Meta title={siteConfig.title} description={m.description()} />

<div class="min-h-screen flex items-center justify-center">
	<h1
		class="text-4xl text-center m-4 px-4 py-2 font-retro font-bold hover:text-white hover:bg-clip-border bg-linear-to-b from-amber-200 to-yellow-500 text-transparent bg-clip-text select-none"
	>
		{siteConfig.title}
	</h1>
</div>
