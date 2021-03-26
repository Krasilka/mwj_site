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
    const productsContainer = document.querySelector('.product-list .row');

    productsContainer.innerHTML = '';

    for (const item of productList) {
        productsContainer.innerHTML += `
        <div class="col" align="center">
            <div class="card product text-light">
                <img src="img/products/${item.image}" alt="${item.title}">
                <div class="card-body">
                    <h4>${item.title}</h4>
                    <p class="card-text text-truncate">${item.price}</p>
                    <button type="button" class="add-to-cart btn btn-dark" data-toggle="modal" data-target="#cartModal" value="Add to cart">Add to Cart</button>
                </div>
            </div>
        </div>`
    }
}

renderProducts(JSON.parse(productsJSON));

function itemAddedToCartModal() {
    modalProductContainer = document.querySelector('.modal#cartModal tbody');
    modalProductContainer.innerHTML = '';
    let productCards = document.querySelectorAll('.product-list .add-to-cart');
    let clickedItemIndex = function () {
       for (let i = 0; i < productCards.length; i++) {
            (function(index){
                productCards[i].onclick = function(){
                    alert(index);
                    return index;
                }    
            })(i); 
        }};
        // clickedItemIndex();
        let name = document.querySelectorAll('.col .card h4')[clickedItemIndex()];
        // let name = document.querySelectorAll('.col .card h4')[clickedItemIndex()].innerText;
        let productList = JSON.parse(productsJSON);
        let item = productList.filter(function (entry, name) { return entry.title === name; });

    // let item = productList[clickedItem];
    
    let addedProduct = `
            <tr>
                <td class="w-25">
                  <img src="/img/products/${item.image}" class="img-fluid img-thumbnail" alt="Sheep">
                </td>
                <td>${item.title}</td>
                <td>${item.price}</td>
                <td class="qty">1</td>
                <td>
                    <button class="btn"><i class="fa fa-close"></i></button>
                  </a>
                </td>
              </tr>
    `
    modalProductContainer.innerHTML += addedProduct;

    $('#cartModal').modal('show');
}

  itemAddedToCartModal();

    