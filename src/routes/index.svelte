<script>
</script>

<svelte:head>
	<title>Fire Forecast</title>
</svelte:head>

<h1>Fire Forecast</h1>
<p>View a 3-day fire weather, fuel moisture, and fire behavior forecast
  for anywhere in the world!
</p>
<figure>
	<img alt="SEM" src="./Wildfire.jpg">
	<figcaption>Systems for Environmental Management</figcaption>
</figure>

<style>
	h1, figure, p {
		text-align: center;
		margin: 0 auto;
	}

	h1 {
		font-size: 2.8em;
		text-transform: uppercase;
		font-weight: 700;
		margin: 0 0 0.5em 0;
	}

	figure {
		margin: 0 0 1em 0;
	}

	img {
		width: 100%;
		max-width: 400px;
		margin: 0 0 1em 0;
	}

	p {
		margin: 1em auto;
	}

	@media (min-width: 480px) {
		h1 {
			font-size: 4em;
		}
	}
</style>
