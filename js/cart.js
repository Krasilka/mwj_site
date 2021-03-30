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


  // deleteProduct(id) {
  //   if (this.cart[id] > 1) {
  //     this.cart[id] -= 1;
  //   } else {
  //     delete this.cart[id];
  //   }
  //   this.saveCart();
  //   this.updateBadge();
  // }

  // async cartLengthAndCost() {
  //   // return Object.keys(this.cart).length;
  //   let count = 0;
  //   let cost = 0;
  //   // const productService = new ProductsService();
  //   for (const key in this.cart) {
  //       const product = await this.productService.getProductById(key);
  //       const quantity = this.cart[key]; 
  //       count += quantity;
  //       cost += quantity * product.price;
  //   }
  //   return {
  //       count, cost
  //   };
  // }
  // async order(ev) {
  //   if ((await this.cartLengthAndCost()).count === 0) {
  //     window.showAlert('Please choose products to order', false);
  //     return;
  //   }    
  //   const form = this.cartContainer.querySelector('.form-contacts');
  //   if (form.checkValidity()) {
  //     ev.preventDefault();
  //     fetch('order', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json'
  //       },
  //       body: JSON.stringify({
  //         clientName: document.querySelector('#client-name').value,
  //         clientEmail: document.querySelector('#client-email').value,
  //         cart: this.cart
  //       })
  //     })
  //       .then(response => {
  //         if (response.status === 200) {
  //           return response.text();
  //         } else {
  //           throw new Error('Cannot send form');
  //         }
  //       })
  //       .then(responseText => {
  //         form.reset();
  //         this.cart = {};
  //         this.saveCart();
  //         this.updateBadge();
  //         this.renderCart();
  //         window.showAlert('Thank you! ' + responseText);
  //         this.cartContainer.querySelector('.close-btn').click();
  //       })
  //       .catch(error => showAlert('There is an error: ' + error, false));
  //   } else {
  //     window.showAlert('Please fill form correctly', false);
  //   }
  // }
}