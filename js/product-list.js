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
      .sort((a, b) => this.sortDirection === 'ascending'
        ? a.price - b.price
        : b.price - a.price)
      .forEach(product => {
        productListDomString += `
            <div class="col" align="center">
                <div class="card product text-light">
                    <img src="img/products/${product.image}" alt="${product.title}">
                    <div class="card-body">
                        <h4>${product.title}</h4>
                        <p class="card-text text-truncate">${product.price} UAH</p>
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
    this.cart.addProduct(id);
  }

  //   sorting will be here   
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







