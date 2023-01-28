<script>
	import { posts } from "$lib/data.js";
</script>

<div class="container d-none d-sm-block">
	<div class="row justify-content-center">
		{#each posts.slice(0,3) as post}
			<div class="col-md mt-4">
				<div class="row justify-content-center">
					<div class="col-auto justify-content-center" style="height: 5rem">
						<img class=" h-100 rounded-circle" src={post.image} alt="" />
					</div>
					<div class="col-lg-7 ms-3 col-md-auto col-sm-8 my-md-2">
						<h6 class="text-sm-start text-md-center text-lg-start fw-bold">
							{post.title}
						</h6>
						<p class="text-muted">{post.date}</p>
					</div>
				</div>
			</div>
		{/each}
	</div>
</div>
