# Swag Labs Automated Tests with Playwright

This repository contains automated tests for the [**Swag Labs**](https://www.saucedemo.com/v1/) demo website using the **Playwright** framework. The tests cover various login scenarios, including successful login, validation of required fields, error messages, and the ability to close error message containers.


## 🚀 Overview

- Framework: Playwright (Node.js)
- Design Pattern: Page Object Model (POM)
- Coverage: Login scenarios, error messages, product and cart flows


## 📚 Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [How to Run the Tests](#how-to-run-the-tests)
- [Test Reports](#test-reports)
- [Project Structure](#project-structure)
- [Author](#author)

## Prerequisites

Before running the tests, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [Playwright](https://playwright.dev/)

Tip: To check if Node.js and npm are installed, run:

```bash
node -v
npm -v
```


## Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/your-username/swag-labs-playwright-tests.git
   ```
2. Navigate to the project directory:
   ```bash
   cd swag-labs-playwright-tests
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```
4. (Optional) Install Playwright browsers:
   ```bash
   npx playwright install
   ```

## How to Run the Tests

## Run all tests

To execute the tests, use the following command:
   ```bash
   npx playwright test
   ```
You can also run a specific test file:
   ```bash
   npx playwright test tests/login.spec.js
   ```
Run in interactive mode (UI)
   ```bash
   npx playwright test --ui
   ```

### Run in headed mode (browser visible)

By default, the project is configured to run with the browser visible (headless: false). You can change this in playwright.config.js.


## Test Reports

After running the tests, a detailed HTML report is generated automatically. To view the report:

   ```bash
   npx playwright show-report
   ```

The report will open in your default browser, showing details of all executed tests.


## Project Structure
   ```bash
swag-labs-playwright-tests/
├── tests/         # Automated test cases organized by feature
│   ├── login.spec.js
│   └── product.spec.js
├── pages/         # Page Objects (abstraction of UI pages)
│   ├── LoginPage.js
│   └── ProductPage.js
├── utils/         # Utilities and centralized test data
│   └── testData.js
├── fixtures/      # Custom fixtures for common scenarios (e.g., login)
│   └── loginUser.js
├── playwright.config.js  # Playwright configuration (baseURL, viewport, etc.)
├── package.json          # Project dependencies and scripts
├── README.md             # This file!
└── TestScenarios.txt     # Description of covered test scenarios
```

### About the Page Object Model (POM)

POM separates page interaction logic into reusable classes, making tests easier to maintain and scale.

## Author

👤 **Jussara Granja**

* LinkedIn: [@jussaragranja](https://linkedin.com/in/jussaragranja)
* Github: [@jussaragranja](https://github.com/jussaragranja)
* GitLab: [@jussaragranja](https://gitlab.com/jussaragranja)
