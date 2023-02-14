<script>
	import randImgUrl from '$lib/randImgUrl';
	export let posts;

	const imgStyle = (/** @type {string} */ url) => 
		`background-image: linear-gradient(to bottom,
        rgba(245, 246, 252, 0.52), rgba(55, 60, 107, 0.73)),
        url('${url}');`;
	
</script>

<div class="row p-5 justify-content-center">
	<div class="col-lg-3 col-md-4 mt-md-0 mt-sm-2">
		<div class="row ratio ratio-1x1 mb-4 rounded rounded-3 shadow-sm">
			<div class="bg-img rounded rounded-3 shadow" style={imgStyle(randImgUrl())} />
			<div class="row align-content-end p-4 text-white">
				<h5 class="fw-bold tx-shadow-title">{posts[0].title}</h5>
			</div>
		</div>
		<div class="row ratio ratio-1x1 mt-4 rounded rounded-3 shadow-sm">
			<div class="bg-img rounded rounded-3" style={imgStyle(randImgUrl())} />
			<div class="row align-content-end p-4 text-white">
				<h5 class="fw-bold tx-shadow-title">{posts[1].title}</h5>
			</div>
		</div>
	</div>
	<div class="col-lg-6 col-md-8 mt-4 mt-md-0 mt-sm-4">
		<div class="row ratio ratio-1x1 rounded rounded-3 shadow-sm">
			<div class="bg-img rounded rounded-3" style={imgStyle(randImgUrl())} />
			<div class="row align-content-end p-4 text-white">
				<h5 class="fw-bold tx-shadow-title">{posts[2].title}</h5>
			</div>
		</div>
	</div>
	<div class="col-lg-3 col-md-12 mt-4 mt-sm-4 mt-md-0 d-none d-lg-block">
		<div class="row ratio ratio-1x1 mb-4 rounded rounded-3 shadow-sm">
			<div class="bg-img rounded rounded-3" style={imgStyle(randImgUrl())} />
			<div class="row align-content-end p-4 text-white">
				<h5 class="fw-bold tx-shadow-title">{posts[3].title}</h5>
			</div>
		</div>
		<div class="row ratio ratio-1x1 mt-4 rounded rounded-3 shadow-sm">
			<div class="bg-img rounded rounded-3" style={imgStyle(randImgUrl())} />
			<div class="row align-content-end p-4 text-white">
				<h5 class="fw-bold tx-shadow-title">{posts[4].title}</h5>
			</div>
		</div>
	</div>
</div>
