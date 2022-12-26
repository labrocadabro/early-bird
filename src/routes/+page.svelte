<script lang="ts">
	import bird1 from '$lib/images/bird1.png';
	import bird2 from '$lib/images/bird2.png';
	import bird3 from '$lib/images/bird3.png';
</script>

<svelte:head>
	<title>The Early Bird Cafe</title>
	<meta name="description" content="The Early Bird Cafe" />
</svelte:head>
<main>
	<section id="left-panel">
		<section id="lockup">
			<h1>You're up early<br /> so we are too</h1>
			<h3>fresh coffee, meals, and snacks from 5am to 5pm</h3>
			<a href="/order">order now</a>
		</section>
	</section>
	<section id="right-panel">
		<div id="bird-grid">
			<div />
			<div class="bird"><img src={bird1} alt="bird 1" /></div>
			<div class="bird"><img src={bird2} alt="bird 1" /></div>
			<div />
			<div />
			<div class="bird"><img src={bird3} alt="bird 1" /></div>
		</div>
	</section>
</main>

<style>
	main {
		/* background-image: url('/bgimg/coffee-beans.jpg'); */
		/* width: 100vw;
		background-repeat: no-repeat; */
		background-size: cover;
	}
	#left-panel {
		/* background-color: rgba(255, 255, 255, 0.9); */
		display: flex;
		align-items: center;
	}
	h1 {
		font-family: 'Unbounded';
		text-transform: unset;
	}
	a {
		display: block;
		background: #1c1917;
		width: 50%;
		padding: 2rem;
		color: white;
		text-decoration: none;
		font-family: 'Unbounded';
		text-align: center;
		font-size: 2rem;
	}
	#bird-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
	}
	.bird {
		display: flex;
		justify-content: flex-end;
	}
	.bird img {
		width: 50%;
	}
</style>
