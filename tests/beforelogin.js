const { test } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
  await page.goto('/');
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');
  await test.expect(page).toHaveURL(/inventory.html/);
});