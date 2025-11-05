class ProductPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.productTitle = page.locator('.product_label');
    this.addToCartButtons = page.locator('.btn_primary.btn_inventory');
    this.cartLink = page.locator('.shopping_cart_link');
    this.cartItems = page.locator('.cart_item');
  }

  async isLoaded() {
    await this.productTitle.waitFor({ state: 'visible' });
  }

  async addAllProductsToCart() {
    const count = await this.addToCartButtons.count();
    for (let i = 0; i < count; i++) {
      await this.addToCartButtons.nth(i).click();
    }
  }

  async goToCart() {
    await this.cartLink.click();
  }
}

module.exports = { ProductPage };