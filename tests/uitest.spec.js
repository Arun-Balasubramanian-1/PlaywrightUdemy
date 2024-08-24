const {test} = require('@playwright/test');

test('Set context and load page', async ({browser}) => {
    // Create a new incognito browser context
    const context = await browser.newContext();
    // Create a new page in the context
    const page = await context.newPage();
    // Navigate to the page
    await page.goto('https://playwright.dev/');
    // Close the context
    await context.close();
});

test('page playwright test', async ({page}) => {
    // Navigate to the page
    await page.goto('https://playwright.dev/');
});