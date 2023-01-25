<script>
    const data = [
        {
            id: 1,
            title: "Lorem ipsum dolor sit amet consectetur",
            date: "TODAY",
            image: "https://picsum.photos/200/200"
        },
        {
            id: 2,
            title: "Lorem ipsum dolor sit amet consectetur",
            date: "YESTERDAY",
            image: "https://picsum.photos/202/202"
        },
        {
            id: 3,
            title: "Lorem ipsum dolor sit amet consectetur",
            date: "YESTERDAY",
            image: "https://picsum.photos/201/201"
        }
    ];
</script>

<div class="container d-none d-sm-block">
	<div class="row justify-content-center">
        {#each data as item}
            <div class="col-md mt-4">
                <div class="row justify-content-center">
                    <div class="col-auto justify-content-center" style="height: 5rem">
                        <img class=" h-100 rounded-circle" src={item.image} alt="" />
                    </div>
                    <div class="col-lg-7 ms-3 col-md-auto col-sm-8 my-md-2">
                        <h6 class="text-sm-start text-md-center text-lg-start fw-bold">
                            {item.title}
                        </h6>
                        <p class="text-muted">{item.date}</p>
                    </div>
                </div>
            </div>
        {/each}
	</div>
</div>
