<script>
	import Nav from '../components/Nav.svelte';

	export let segment;
</script>

<link rel="stylesheet" href="/globasl.css">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Anonymous+Pro:wght@700&family=Inter:wght@900&family=Rubik:wght@700&display=swap" rel="stylesheet">
<Nav {segment}/>

<main>
	<slot></slot>
</main>