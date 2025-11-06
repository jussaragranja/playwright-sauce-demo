import { defineConfig, devices } from '@playwright/test';

module.exports = defineConfig({
  use: {
    headless: process.env.CI ? true : false,
    viewport: { width: 1280, height: 720 }, 
    baseURL: 'https://www.saucedemo.com/',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
  reporter: [
    ['line'],
    ['allure-playwright'],
    ['list'],
    ['html', { outputFolder: 'playwright-report', open: 'never' }]
  ],
});