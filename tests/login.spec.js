const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const testData = require('../utils/testData');

test.describe('Swag Labs Login Tests', () => {
  test('Validate successful login', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(testData.validUser.username, testData.validUser.password);
    await expect(page).toHaveURL(/inventory.html/);
  });

  test('Validate username field is required', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('', testData.validUser.password);
    await expect(loginPage.errorMessage).toHaveText('Epic sadface: Username is required');
  });

  test('Validate password field is required', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(testData.validUser.username, '');
    await expect(loginPage.errorMessage).toHaveText('Epic sadface: Password is required');
  });

  test('Validate login is not possible with an invalid username', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(testData.invalidUser.username, testData.invalidUser.password);
    await expect(loginPage.errorMessage).toHaveText(
      'Epic sadface: Username and password do not match any user in this service'
    );
  });

  test('Validate login is not possible with an invalid password', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(testData.invalidPassword.username, testData.invalidPassword.password);
    await expect(loginPage.errorMessage).toHaveText(
      'Epic sadface: Username and password do not match any user in this service'
    );
  });

  test('Validate that the error message container can be closed', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('', testData.validUser.password);
    await expect(loginPage.errorMessage).toBeVisible();
    await loginPage.closeError();
    await expect(loginPage.errorMessage).not.toBeVisible();
  });
});