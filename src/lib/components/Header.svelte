<script lang="ts">
	import border from '$lib/images/border.svg';
</script>

<header>
	<h1>logo</h1>
	<!-- <img src={border} alt="" width="180" /> -->
	<nav>
		<ul>
			<li><a href="/">Home</a></li>
			<li><a href="/">Order</a></li>
			<li><a href="/">Locate</a></li>
			<li><a href="/">Contact</a></li>
			<li><a href="/">About</a></li>
		</ul>
	</nav>
	<!-- <img src={border} alt="" width="180" /> -->
	<!-- <span>open daily 5am - 5pm</span> -->
</header>

<style>
	header {
		/* position: fixed;
		height: 100vh;
		width: 200px;
		background: #3b2719;
		color: #f4f1f0;
		left: 50%;
		transform: translateX(-50%);
		font-size: 4rem;
		line-height: 1.2; */
		font-size: 2rem;
		display: flex;
		/* flex-direction: column; */
		justify-content: space-between;
		align-items: center;
		font-family: 'Unbounded', sans-serif;
		text-transform: lowercase;
		text-align: center;
		margin-bottom: 30px;
	}
	ul {
		display: flex;
		gap: 1.5rem;
	}
	a {
		color: #3b2719;
		text-decoration: none;
	}
	span {
		font-family: 'Unbounded', sans-serif;
		font-size: 1.3rem;
		margin-bottom: 20px;
	}
	h1 {
		font-size: 4rem;
	}
	/* h1 {
		color: #f4f1f0;
	} */
</style>
