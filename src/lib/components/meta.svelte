<script lang="ts">
	import { siteConfig } from "$lib/config";

	const { title, description }: { title: string; description: string } = $props();
</script>

<svelte:head>
	<title>{title}</title>

	<meta name="title" content={title} />
	<meta property="og:title" content={title} />
	<meta name="twitter:title" content={title} />

	<meta name="description" content={description} />
	<meta property="og:description" content={description} />
	<meta name="twitter:description" content={description} />

	<meta property="og:image" content={siteConfig.ogImage} />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:image" content={siteConfig.ogImage} />

	<link rel="icon" type="image/svg+xml" sizes="any" href={siteConfig.favicon} />
	<link
		rel="apple-touch-icon"
		sizes="512x512"
		href={`${siteConfig.baseUrl}/apple-touch-icon.png`}
	/>
	<link rel="manifest" href={siteConfig.webManifest} />
</svelte:head>
