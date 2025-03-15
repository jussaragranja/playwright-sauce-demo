const { test, expect } = require('@playwright/test');
require('./beforelogin'); // Importa o arquivo beforelogin.js

test.describe('Swag Labs Product Page Tests', () => {
  test('Validate the title of the product page', async ({ page }) => {
    const productTitle = await page.locator('//div[@class="product_label"]');
    await expect(productTitle).toBeVisible();
    await expect(productTitle).toHaveText('Products'); 
  });

  test('Add products to the cart and validate in the cart', async ({ page }) => {
    const addToCartButtons = await page.locator('.btn_primary.btn_inventory');
    const productCount = await addToCartButtons.count();
    for (let i = 0; i < productCount; i++) {
      await addToCartButtons.nth(i).click();
    }
    await page.click('#shopping_cart_container a.shopping_cart_link');
    await expect(page).toHaveURL(/cart.html/);
    const cartItems = await page.locator('.cart_item');
    await expect(cartItems).toHaveCount(productCount);
  });
});