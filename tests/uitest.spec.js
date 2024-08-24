const {test, expect} = require('@playwright/test');

test('Set context and load page', async ({browser}) => {
    // Create a new incognito browser context
    const context = await browser.newContext();
    // Create a new page in the context
    const page = await context.newPage();
    // Navigate to the page
    await page.goto('https://playwright.dev/');
    // Check the page title
    await expect(page).toHaveTitle('Fast and reliable end-to-end testing for modern web apps | Playwright');

});

test('page playwright test', async ({page}) => {
    // Navigate to the page
    await page.goto('https://google.com/');
    // Check the page title
    await expect(page).toHaveTitle('Google');
});