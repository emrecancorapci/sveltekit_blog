<script>
	import { auth } from '$lib/store.js';

	/**
	 * @type {string}
	 */
	export let title;

	/**
	 * @type {boolean}
	 */
	let auth_value;

	auth.subscribe((value) => (auth_value = value));

	const changeAuth = () => {
		auth.set(!auth_value);
		console.log(auth_value);
	};
</script>

<header>
	<nav class="navbar navbar-expand-lg bg-light mx-5">
		<div class="container-fluid">
			<a class="navbar-brand" href="#">{title}</a>
			<button
				class="navbar-toggler"
				type="button"
				data-bs-toggle="collapse"
				data-bs-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span class="navbar-toggler-icon" />
			</button>
			<div class="collapse navbar-collapse" id="navbarSupportedContent">
				<ul class="navbar-nav me-auto mb-2 mb-lg-0">
					<li class="nav-item">
						<a class="nav-link active" aria-current="page" href="#">Home</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#">Link</a>
					</li>
					<li class="nav-item dropdown">
						<a
							class="nav-link dropdown-toggle"
							href="#"
							role="button"
							data-bs-toggle="dropdown"
							aria-expanded="false"
						>
							Dropdown
						</a>
						<ul class="dropdown-menu">
							<li><a class="dropdown-item" href="#">Action</a></li>
							<li><a class="dropdown-item" href="#">Another action</a></li>
							<li><hr class="dropdown-divider" /></li>
							<li><a class="dropdown-item" href="#">Something else here</a></li>
						</ul>
					</li>
					{#if auth_value}
						<li class="nav-item">
							<button class="btn btn-dark" on:click={changeAuth}>Sign Out</button>
						</li>
					{:else}
						<li class="nav-item">
							<button class="btn btn-light" on:click={changeAuth}>Sign In</button>
						</li>
					{/if}
				</ul>
				<form class="d-flex" role="search">
					<input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
					<button class="btn btn-outline-success" type="submit">Search</button>
				</form>
			</div>
		</div>
	</nav>
</header>

<style>
	/* your styles go here */
</style>
