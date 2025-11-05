const { test } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const testData = require('../utils/testData');

exports.test = test.extend({
  loginAsStandardUser: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await loginPage.login(testData.validUser.username, testData.validUser.password);
    await use(page);
  },
});