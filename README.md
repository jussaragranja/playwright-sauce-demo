# Swag Labs Automated Tests with Playwright

This repository contains automated tests for the **[Swag Labs]** (https://www.saucedemo.com/v1/) demo website using the **Playwright** framework. The tests cover various login scenarios, including successful login, validation of required fields, error messages, and the ability to close error message containers.

## Prerequisites

Before running the tests, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [Playwright](https://playwright.dev/)

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

## Running Tests

To execute the tests, use the following command:
   ```bash
   npx playwright test
   ```
You can also run a specific test file:
   ```bash
   npx playwright test tests/login.spec.js
   ```

## Test Report

Playwright generates a test report after execution. To view the report, run:
   ```bash
   npx playwright show-report
   ```

## Project Structure
   ```bash
swag-labs-playwright-tests/
├── tests/
│   └── login.spec.js       # Contains all login-related test cases
├── playwright.config.js    # Playwright configuration file
├── package.json            # Project dependencies and scripts
├── TestScenarios.txt       # Description and steps of test scenarios
└── README.md               # Project documentation
```

## Author

👤 **Jussara Granja**

* LinkedIn: [@jussaragranja](https://linkedin.com/in/jussaragranja)
* Github: [@jussaragranja](https://github.com/jussaragranja)
* GitLab: [@jussaragranja](https://gitlab.com/jussaragranja)
* Twitter: [@JuuhGranja](https://twitter.com/JuuhGranja)
