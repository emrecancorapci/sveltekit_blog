<script>
	const data = [
		{
			id: 1,
			title: 'Featured 1',
			date: 'TODAY',
			image: 'https://picsum.photos/704/704',
			content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
		},
		{
			id: 2,
			title: 'Featured 2',
			date: 'YESTERDAY',
			image: 'https://picsum.photos/702/702',
			content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
		},
		{
			id: 3,
			title: 'Featured 3',
			date: 'YESTERDAY',
			image: 'https://picsum.photos/703/703',
			content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
		},
		{
			id: 4,
			title: 'Featured 4',
			date: 'YESTERDAY',
			image: 'https://picsum.photos/705/705',
			content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
		},
		{
			id: 5,
			title: 'Featured 5',
			date: 'YESTERDAY',
			image: 'https://picsum.photos/706/706',
			content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
		}
	];

	const imgStyle = (/** @type {string} */ url) => {
		return `background-image: linear-gradient(to bottom,
        rgba(245, 246, 252, 0.52), rgba(55, 60, 107, 0.73)),
        url('${url}');`;
	};
</script>

<div class="row p-5 g-0 justify-content-center">
	<div class="col-lg-3 col-md-4 mt-md-0 mt-sm-2 justify-content-center">
		<div class="row g-0 ratio ratio-1x1 mb-4 rounded rounded-3 shadow-sm">
			<div class="bg-img rounded rounded-3 shadow" style={imgStyle(data[0].image)} />
			<div class="row g-0 align-content-end g-0 p-4 text-white">
				<h4 class="fw-bold tx-shadow-title">{data[0].title}</h4>
				<p class="tx-shadow-title">
					{data[0].content}
				</p>
			</div>
		</div>
		<div class="row ratio ratio-1x1 mt-4 rounded rounded-3 shadow-sm">
			<div class="bg-img rounded rounded-3" style={imgStyle(data[1].image)} />
			<div class="row align-content-end g-0 p-4 text-white">
				<h4 class="fw-bold tx-shadow-title">{data[1].title}</h4>
				<p class="tx-shadow-title">
					{data[1].content}
				</p>
			</div>
		</div>
	</div>
	<div class="col-lg-6 col-md-8 mt-4 mt-md-0 mt-sm-4">
		<div class="row ratio ratio-1x1 rounded rounded-3 shadow-sm">
			<div class="bg-img rounded rounded-3" style={imgStyle(data[2].image)} />
			<div class="row align-content-end g-0 p-4 text-white">
				<h4 class="fw-bold tx-shadow-title">{data[2].title}</h4>
				<p class="tx-shadow-title">
					{data[2].content}
				</p>
			</div>
		</div>
	</div>
	<div class="col-lg-3 col-md-12 mt-4 mt-lg-0 mt-sm-4">
		<div class="row ratio ratio-1x1 mb-4 rounded rounded-3 shadow-sm">
			<div class="bg-img rounded rounded-3" style={imgStyle(data[3].image)} />
			<div class="row align-content-end g-0 p-4 text-white">
				<h4 class="fw-bold tx-shadow-title">{data[3].title}</h4>
				<p class="tx-shadow-title">
					{data[3].content}
				</p>
			</div>
		</div>
		<div class="row ratio ratio-1x1 mt-4 rounded rounded-3 shadow-sm">
			<div class="bg-img rounded rounded-3" style={imgStyle(data[4].image)} />
			<div class="row align-content-end g-0 p-4 text-white">
				<h4 class="fw-bold tx-shadow-title">{data[4].title}</h4>
				<p class="tx-shadow-title">
					{data[4].content}
				</p>
			</div>
		</div>
	</div>
</div>
