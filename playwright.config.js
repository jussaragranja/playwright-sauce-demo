import { defineConfig, devices } from '@playwright/test';

module.exports = defineConfig({
  use: {
    headless: false, 
    viewport: { width: 1280, height: 720 }, 
    baseURL: 'https://www.saucedemo.com/',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
  reporter: [
    ['list'],
    ['html', { outputFolder: 'playwright-report', open: 'never' }],
  ],
});