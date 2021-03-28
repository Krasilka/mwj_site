class ProductList {
    constructor(cart) {
      this.cart = cart;
      this.container = document.querySelector('.product-list .row');
      this.productService = new ProductsService();
      this.sortDirection = 'ascending';
      this.productService
        .getProducts()
        .then(() => this.renderProducts())
        .then(() => this.addEventListeners());    
    }
    async renderProducts() {
      let productListDomString = '';
      const products = await this.productService.getProducts();
      [...products]
        .sort( (a, b) => this.sortDirection === 'ascending' 
                           ? a.price - b.price
                           : b.price - a.price)
        .forEach(product => {
            productListDomString += `
            <div class="col" align="center">
                <div class="card product text-light">
                    <img src="img/products/${product.image}" alt="${product.title}">
                    <div class="card-body">
                        <h4>${product.title}</h4>
                        <p class="card-text text-truncate">${product.price}</p>
                        <button type="button" class="add-to-cart btn btn-dark" data-toggle="modal" data-target="#addToCartModal" data-id="${product.id}" value="Add to cart">Add to Cart</button>
                    </div>
                </div>
            </div>`;
      });
      this.container.innerHTML = productListDomString;
    }

    async addEventListeners() {
      document
        .querySelectorAll('.product .add-to-cart')
        .forEach(button =>
          button.addEventListener('click', event =>
            this.handleProductAddToCart(event)
          )
        );
//       document
//         .querySelectorAll(
//           '.card.product button.buy, #productInfoModal button.buy'
//         )
//         .forEach(button =>
//           button.addEventListener('click', event =>
//             this.handleProductBuyClick(event)
//           )
//         );
//       document.querySelector('.sort-asc').addEventListener('click', async () => {
//           this.sortDirection = 'ascending';
//           await this.renderProducts();
//           this.addEventListeners();
//       });
//       document.querySelector('.sort-desc').addEventListener('click', async () => {
//           this.sortDirection = 'descending';
//           await this.renderProducts();
//           this.addEventListeners();
//       });
    }

    async handleProductAddToCart(event) {
        const button = event.target; // Button that triggered the modal
        const id = button.dataset.id; // Extract info from data-* attributes
        const product = await this.productService.getProductById(id);
        const modal = document.querySelector('#addToCartModal');
        const productImg = modal.querySelector('.modal-body .img-cart-modal');
        productImg.setAttribute('src', 'img/products/' + product.image);
        productImg.setAttribute('alt', product.title);
        modal.querySelector('.modal-body .product-title-modal').innerText = product.title;
        modal.querySelector('.modal-body .product-price-modal').innerText =
          product.price;
        // const btnBuy = modal.querySelector('button.buy');
        // btnBuy.innerText = `${product.price} - Buy`;
        // btnBuy.dataset.id = id;
      }

    // async handleProductInfoClick(event) {
    //   const button = event.target; // Button that triggered the modal
    //   const id = button.dataset.id; // Extract info from data-* attributes
    //   const product = await this.productService.getProductById(id);
    //   const modal = document.querySelector('#productInfoModal');
    //   const productImg = modal.querySelector('.modal-body .card-img-top');
    //   productImg.setAttribute('src', 'img/products/' + product.image);
    //   productImg.setAttribute('alt', product.title);
    //   modal.querySelector('.modal-body .card-title').innerText = product.title;
    //   modal.querySelector('.modal-body .card-text').innerText =
    //     product.description;
    //   const btnBuy = modal.querySelector('button.buy');
    //   btnBuy.innerText = `${product.price} - Buy`;
    //   btnBuy.dataset.id = id;
    // }
    // handleProductBuyClick(event) {
    //   const button = event.target;
    //   const id = button.dataset.id;
    //   this.cart.addProduct(id);
    //   window.showAlert('Product added to cart');
    // }
}









// function itemAddToCartModal() {
//     modalProductContainer = document.querySelector('.modal#addToCartModal tbody');
//     modalProductContainer.innerHTML = '';
//     let productCards = document.querySelectorAll('.product-list .add-to-cart');
//     let clickedItemIndex = function () {
//         for (let i = 0; i < productCards.length; i++) {
//             (function (index) {
//                 productCards[i].onclick = function () {
//                 }
//             })(i);
//             const name = document.querySelectorAll('.col .card h4')[i].innerText;
//             return name;
//         }
//     };
//     // const name = document.querySelectorAll('.col .card h4')[i];
//     // let name = document.querySelectorAll('.col .card h4')[clickedItemIndex()].innerText;
//     const productList = JSON.parse(productsJSON);
//     const item = productList.filter(function (entry, clickedItemIndex) { return entry.title === clickedItemIndex; });
//     // let item = productList[clickedItem];
//     let addedProduct = `
//             <tr>
//                 <td class="w-25">
//                   <img src="/img/products/${item.image}" class="img-fluid img-thumbnail" alt="Sheep">
//                 </td>
//                 <td>${item.title}</td>
//                 <td>${item.price}</td>
//                 <td class="qty">1</td>
//                 <td>
//                     <button class="btn"><i class="fa fa-close"></i></button>
//                   </a>
//                 </td>
//               </tr>
//     `
//     modalProductContainer.innerHTML += addedProduct;

//     clickedItemIndex();
//     $('#addToCartModal').modal('show');
// }

// itemAddCartModal();

