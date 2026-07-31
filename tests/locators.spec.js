import { test } from '@playwright/test';

test('Go to the Practice Test Automation Website', async ({ page }) => {

    await page.goto('https://practicetestautomation.com/practice-test-login/');

    await page.pause();

});