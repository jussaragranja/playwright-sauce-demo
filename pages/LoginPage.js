class LoginPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.usernameInput = page.locator('#user-name');
    this.passwordInput = page.locator('#password');
    this.loginButton = page.locator('#login-button');
    this.errorMessage = page.locator('[data-test="error"]');
    this.errorCloseButton = page.locator('[data-test="error-button"]');
  }

  async goto() {
    await this.page.goto('/');
  }

  async login(username, password) {
    if (username !== undefined) await this.usernameInput.fill(username);
    if (password !== undefined) await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async getErrorMessage() {
    return this.errorMessage.textContent();
  }

  async closeError() {
    await this.errorCloseButton.click();
  }
}

module.exports = { LoginPage };