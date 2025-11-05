const { test, expect } = require('../fixtures/loginUser');
const { ProductPage } = require('../pages/ProductPage');

test.describe('Swag Labs Product Page Tests', () => {
  test.use({ loginAsStandardUser: true });

  test('Validate the title of the product page', async ({ page }) => {
    const productPage = new ProductPage(page);
    await productPage.isLoaded();
    await expect(productPage.productTitle).toHaveText('Products');
  });

  test('Add products to the cart and validate in the cart', async ({ page }) => {
    const productPage = new ProductPage(page);
    await productPage.isLoaded();
    const count = await productPage.addToCartButtons.count();
    await productPage.addAllProductsToCart();
    await productPage.goToCart();
    await expect(page).toHaveURL(/cart.html/);
    await expect(productPage.cartItems).toHaveCount(count);
  });
});