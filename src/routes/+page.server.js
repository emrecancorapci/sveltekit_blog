export async function load() {
	const posts = await fetch('https://jsonplaceholder.typicode.com/posts')
		.then((response) => response.json());
		
	return {
		featuredPosts: posts.slice(0, 5)
	};
}
