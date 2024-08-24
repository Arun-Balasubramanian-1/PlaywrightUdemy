# PlaywrightUdemy

## Steps to Initialize Playwright Project:
1. Create a Directory
2. Run the following command from that directory:
    ```sh
    npm init playwright
    ```

## Commands:
- **Run the end-to-end tests (Runs in headless mode):**
    ```sh
    npx playwright test
    ```

- **Run the end-to-end tests in headed mode:**
    ```sh
    npx playwright test --headed
    ```

- **Starts the interactive UI mode:**
    ```sh
    npx playwright test --ui
    ```

- **Run the tests only on Desktop Chrome:**
    ```sh
    npx playwright test --project=chromium
    ```

- **Run the tests in a specific file:**
    ```sh
    npx playwright test example
    ```

- **Run the tests in debug mode:**
    ```sh
    npx playwright test --debug
    ```

- **Auto generate tests with Codegen:**
    ```sh
    npx playwright codegen
    ```
