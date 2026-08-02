import { test } from '@playwright/test';

test('Go to the Practice Test Automation Website @regression', async ({ page }) => {

    await page.goto('https://practicetestautomation.com');

    await page.pause();

});

test('Go to the Practice Test Automation Website and Login @sanity', async ({ page }) => {

    await page.goto('https://practicetestautomation.com/practice-test-login/');
    await page.getByLabel('Username').fill('student');
    await page.getByLabel('Password').fill('Password123');
    await page.getByRole('button', { name: 'Submit' }).click();
    await page.pause();
    
});

test('Go to Automation Exercise Website and Login with Locator @sanity', async ({ page }) => {
    await page.goto('https://automationexercise.com/login');
    await page.locator("input[data-qa='login-email']").fill('hamzawork9d@gmail.com');
    // await page.getByPlaceholder('Email Address').fill('hamzawork9d@gmail.com');
    await page.getByPlaceholder('Password').fill('password123');
    await page.getByRole('button', { name: 'Login' }).click();
    await page.pause();


});

