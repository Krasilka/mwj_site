const productsJSON = 
`[
    {
        "id": "1",
        "collection": "ROUGH PERFECTION",
        "title": "Rocky mountains ring",
        "type": "ring",
        "image": "rocky_mountains.jpg",
        "description": "Handmade sterling silver ring.",
        "price": "3000 uah"
    },
    {
        "id": "2",
        "collection": "GONE WILD",
        "title": "Leopard ring",
        "type": "ring",
        "image": "leopard_ring.jpg",
        "description": "Handmade sterling silver ring with vegan pony leather",
        "price": "3200 uah"
    },
    {
        "id": "4",
        "collection": "THE GLOW",
        "title": "Drops ring",
        "type": "ring",
        "image": "drops.jpg",
        "description": "Handmade sterling silver ring",
        "price": "2600 uah"
    },
    {
        "id": "5",
        "collection": "SENSUAL",
        "title": "Lady on ring",
        "type": "ring",
        "image": "lady_ring.jpg",
        "description": "Handmade sterling silver ring. Oxidized finish",
        "price": "3200 uah"
    },
    {
        "id": "6",
        "collection": "THE SEQUENCE",
        "title": "Lock chain",
        "type": "ring",
        "image": "lock_chain.jpg",
        "description": "Handmade solid chain ring with lock. Sterling silver",
        "price": "1800 uah"
    }
]`;

function renderProducts (productList) {
    const productsContainer = document.querySelector('.container .row');

    productsContainer.innerHTML = '';

    for (const item of productList) {
        productsContainer.innerHTML += `
        <div class="col">
            <div class="card product" style="width: 15rem;" style="height: 18rem;">
                <img src="img/products/${item.image}" class="card-img-top" alt="${item.title}">
                <div class="card-body">
                    <h5 class="card-title">${item.title}</h5>
                    <p class="card-text">${item.description}</p>
                    <a href="#" class="btn btn-primary ">ADD TO CART</a>
                </div>
            </div>
        </div>`
    }
}

//test

renderProducts(JSON.parse(productsJSON));




