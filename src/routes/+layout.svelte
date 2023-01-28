<script>
	import Header from './components/Header.svelte';
	import './styles.css';
	import 'bootstrap/dist/css/bootstrap.min.css';
	import 'bootstrap/dist/js/bootstrap.min.js';
	import 'bootstrap/dist/js/bootstrap.bundle.min.js';
</script>

<Header title="SvelteKit Blog"/>

<main>
	<slot />
</main>


<footer>
	<p>Footer</p>
</footer>
