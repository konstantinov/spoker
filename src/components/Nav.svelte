<script>
	export let segment;
</script>

<style>
ul {
	display: flex;
	flex-flow: row nowrap;
	justify-content: center;
	align-items: center;
	background: rgb(255, 221, 0);
	list-style: none;
	padding: 26px 20px;
	margin: 0;
	font: 700  18px/40px "Anonymous Pro", Sans-serif;
}
li {
	margin: 0; padding: 0;
}
a {
	text-decoration: none;
	border-bottom: 2px solid transparent;
	margin: 0 20px;
	transition-duration: 1s;
	transition-property: border-bottom;
	color: #181B20;
}


a:hover, a[aria-current="page"] {
	border-bottom: 2px solid #000;
}

a:active {
	color: red;
}

@media (max-width: 600px) {
	ul {
		padding: 5px;
		line-height: 25px;
	}
}
</style>

<nav>
	<ul>
		<li><a aria-current="{segment === undefined ? 'page' : undefined}" href=".">Home</a></li>
		<li><a aria-current="{segment === 'about' ? 'page' : undefined}" href="about">About</a></li>
	</ul>
</nav>
