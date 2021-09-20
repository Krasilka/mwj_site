class Cart {
  constructor() {
    this.productService = new ProductsService();
    this.cartContainer = document.querySelector('#modal-cart');
    this.cart = JSON.parse(localStorage['cart'] || '{}');
    this.updateBadge();
  }

  saveCart() {
    localStorage['cart'] = JSON.stringify(this.cart);
  }

  addProduct(id) {
    this.cart[id] = (this.cart[id] || 0) + 1;
    this.saveCart();
    this.updateBadge();
  }

  async updateBadge() {
    const { count } = await this.cartLength();
    document.querySelector('.cart .count').innerText = `${count}`;
    document.querySelector('.shopping-bag .count').innerText = `${count}`;
  }

  async cartLength() {
    let count = 0;
    for (const key in this.cart) {
      const product = await this.productService.getProductById(key);
      const quantity = this.cart[key];
      count += quantity;
    }
    return {
      count
    };
  }

