<script>
	import FeaturedPosts from './components/FeaturedPosts.svelte';
	import HeaderPosts from './components/HeaderPosts.svelte';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Page description" />
	<link
		rel="stylesheet"
		href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@200;400;700"
	/>
</svelte:head>

<section>
	<div class="container d-none d-sm-block">
		<HeaderPosts />
	</div>
	<div class="container vw-100 mw-100 justify-content-center mt-4">
		<div class="container align-items-end">
			<div class="row">
				<h1 class="col fw-bold">Featured Posts</h1>
				<a href="#" class="col-auto h6 text-muted">See More</a>
			</div>
		</div>
		<div class="container vw-100 mw-100 justify-content-center">
			<FeaturedPosts />
		</div>
	</div>
	<div class="container mt-3">
		<div class="row">
			<h1>Last Posts</h1>
		</div>
		<div class="row">
			<div class="col-6 rounded rounded-2 bg-danger">
				<div class="row align-content-end g-0 p-4">
					<h4 class="fw-bold">Featured 1</h4>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
				</div>
			</div>
			<div class="col-6" />
		</div>
	</div>
</section>
