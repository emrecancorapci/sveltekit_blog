<script>
	import { posts } from "$lib/data.js";

	const imgStyle = (/** @type {string} */ url) => {
		return `background-image: linear-gradient(to bottom,
        rgba(245, 246, 252, 0.52), rgba(55, 60, 107, 0.73)),
        url('${url}');`;
	};
</script>

<div class="row p-5 justify-content-center">
	<div class="col-lg-3 col-md-4 mt-md-0 mt-sm-2">
		<div class="row ratio ratio-1x1 mb-4 rounded rounded-3 shadow-sm">
			<div class="bg-img rounded rounded-3 shadow" style={imgStyle(posts[0].image)} />
			<div class="row align-content-end p-4 text-white">
				<h4 class="fw-bold tx-shadow-title">{posts[0].title}</h4>
				<p class="tx-shadow-title">
					{posts[0].content}
				</p>
			</div>
		</div>
		<div class="row ratio ratio-1x1 mt-4 rounded rounded-3 shadow-sm">
			<div class="bg-img rounded rounded-3" style={imgStyle(posts[1].image)} />
			<div class="row align-content-end p-4 text-white">
				<h4 class="fw-bold tx-shadow-title">{posts[1].title}</h4>
				<p class="tx-shadow-title">
					{posts[1].content}
				</p>
			</div>
		</div>
	</div>
	<div class="col-lg-6 col-md-8 mt-4 mt-md-0 mt-sm-4">
		<div class="row ratio ratio-1x1 rounded rounded-3 shadow-sm">
			<div class="bg-img rounded rounded-3" style={imgStyle(posts[2].image)} />
			<div class="row align-content-end p-4 text-white">
				<h4 class="fw-bold tx-shadow-title">{posts[2].title}</h4>
				<p class="tx-shadow-title">
					{posts[2].content}
				</p>
			</div>
		</div>
	</div>
	<div class="col-lg-3 col-md-12 mt-4 mt-sm-4 mt-md-0 d-none d-lg-block">
		<div class="row ratio ratio-1x1 mb-4 rounded rounded-3 shadow-sm">
			<div class="bg-img rounded rounded-3" style={imgStyle(posts[3].image)} />
			<div class="row align-content-end p-4 text-white">
				<h4 class="fw-bold tx-shadow-title">{posts[3].title}</h4>
				<p class="tx-shadow-title">
					{posts[3].content}
				</p>
			</div>
		</div>
		<div class="row ratio ratio-1x1 mt-4 rounded rounded-3 shadow-sm">
			<div class="bg-img rounded rounded-3" style={imgStyle(posts[4].image)} />
			<div class="row align-content-end p-4 text-white">
				<h4 class="fw-bold tx-shadow-title">{posts[4].title}</h4>
				<p class="tx-shadow-title">
					{posts[4].content}
				</p>
			</div>
		</div>
	</div>
</div>
