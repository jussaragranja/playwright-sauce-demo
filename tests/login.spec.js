const { test, expect } = require('@playwright/test');

test.describe('Swag Labs Login Tests', () => {
  const baseUrl = 'https://www.saucedemo.com/';

  test('Validate successful login', async ({ page }) => {
    await page.goto(baseUrl);
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');
    await expect(page).toHaveURL(/inventory.html/);
  });

  test('Validate username field is required', async ({ page }) => {
    await page.goto(baseUrl);
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');
    const errorMessage = await page.locator('[data-test="error"]');
    await expect(errorMessage).toHaveText('Epic sadface: Username is required');
  });

  test('Validate password field is required', async ({ page }) => {
    await page.goto(baseUrl);
    await page.fill('#user-name', 'standard_user');
    await page.click('#login-button');
    const errorMessage = await page.locator('[data-test="error"]');
    await expect(errorMessage).toHaveText('Epic sadface: Password is required');
  });

  test('Validate login is not possible with an invalid username', async ({ page }) => {
    await page.goto(baseUrl);
    await page.fill('#user-name', 'invalid_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');
    const errorMessage = await page.locator('[data-test="error"]');
    await expect(errorMessage).toHaveText('Epic sadface: Username and password do not match any user in this service');
  });

  test('Validate login is not possible with an invalid password', async ({ page }) => {
    await page.goto(baseUrl);
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'wrong_password');
    await page.click('#login-button');
    const errorMessage = await page.locator('[data-test="error"]');
    await expect(errorMessage).toHaveText('Epic sadface: Username and password do not match any user in this service');
  });

  test('Validate that the error message container can be closed', async ({ page }) => {
    await page.goto(baseUrl);
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');
    const errorMessage = await page.locator('[data-test="error"]');
    await expect(errorMessage).toBeVisible();
    const closeButton = await page.locator('[data-test="error-button"]');
    await closeButton.click();
    await expect(errorMessage).not.toBeVisible();
  });
});