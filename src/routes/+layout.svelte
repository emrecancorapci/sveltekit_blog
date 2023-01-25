<script>
	import Header from './components/Header.svelte';
	import './styles.css';
</script>

<Header />

<main>
	<slot />
</main>


<footer>
	<p>Footer</p>
</footer>
