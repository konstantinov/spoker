<script>

</script>

<style>
	section {
		background: url(/images/home-background.jpg) center center no-repeat fixed;
		background-size: cover;
		min-height: 500px;
		width: 100%;
		padding: 20vh 0;
		display: flex;
		flex-flow: column;
		align-items: center;
	}

	.content {
		max-width: 1150px;
		width: 100%;
	}

	h1 {
		color: rgb(255, 221, 0);
		font: 700  36px/50px "Anonymous Pro", Sans-serif;
		text-align: center;
	}
	h2 {
		color: #fff;
		font: 900  96px/100px Inter, Sans-serif;
		text-align: center;
		text-transform: uppercase;
	}
	.flow {
		display: flex;
		flex-flow: row nowrap;
		align-items: center;
		justify-content: center;
	}
	.step {
		text-transform: uppercase;
		color: #fff;
		font: 900 24px/30px Inter, Sans-serif;
	}
	.arrow {
		width: 50px;
		height: 50px;
		font: 900 40px/30px Inter, Sans-serif;
		color: #FFFFFF3B;
		border-radius: 50%;
		border: 2px solid #FFFFFF3B;
		margin: 0 20px;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.arrow i {
		font-style: normal;
		margin-top: -12px;
	}
	.step:last-child {
		color: rgb(255, 221, 0);
	}

	.yellow {

		color: #181B20;
		background: rgb(255, 221, 0);
		border: 2px solid rgb(255, 221, 0);;

	}

	.yellow:hover, .yellow:active, .black {
		background: #181B20;
		color: #fff;
		border: 2px solid #fff;
	}

	.black:hover, .black:active {
		color: #FFFFFF3B;
		border: 2px solid #FFFFFF3B;
	}

	.buttons {
		display: flex;
		flex-flow: row;
		align-items: center;
		justify-content: center;
		margin-top: 40px;
	}
	.button {
		border-radius: 8px;
		display: flex;
		flex-flow: row nowrap;
		align-items: center;
		justify-content: center;
		height: 60px;
		padding: 0 60px;
		cursor: pointer;
		text-transform: uppercase;
		font: 700  18px/20px "Anonymous Pro",  monospace;
		text-decoration: none;
		transition-duration: 300ms;
		transition-property: background, color;
		margin: 0 20px;
	}
	.button i {
		margin-left: 10px;
		font-size: 130%;
	}
</style>

<svelte:head>
	<title>Planning pocker lite</title>
</svelte:head>

<section>
	<div class="content">
		<h1>Start planning session</h1>
		<h2>immediately and totally free!</h2>
		<div class="flow">
			<div class="step">Start</div>
			<div class="arrow"><i>&rarr;</i></div>
			<div class="step">Share the link</div>
			<div class="arrow"><i>&rarr;</i></div>
			<div class="step">Plan!</div>
		</div>
		<div class="buttons">
			<a class="button yellow" href="#">Start now<i>&rarr;</i></a>
			<a class="button black" href="#">How it works<i>&rarr;</i></a>
		</div>
	</div>
</section>


