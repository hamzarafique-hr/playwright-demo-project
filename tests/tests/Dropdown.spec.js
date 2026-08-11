import { test, expect } from '@playwright/test';
import { DropdownPage } from '../pages/DropdownPage.js';

test.describe('Homescreen flows', () => {
    test('Verify Static dropdown', async ({ page }) => {
        const dropdownPage = new DropdownPage(page);

        await page.goto('https://vinothqaacademy.com/drop-down/');
        await dropdownPage.verifyDropdownScreenVisible();
        await dropdownPage.chooseCityOption.click();
        await dropdownPage.selectCountry('London');
        await dropdownPage.removeFocus();
        await expect(dropdownPage.optionLondon).toBeVisible();
        await dropdownPage.selectCountry('Paris');
        await dropdownPage.removeFocus();
        await expect(dropdownPage.optionParis).toBeVisible();
        await dropdownPage.selectCountry('Mumbai');
        await dropdownPage.removeFocus();
        await expect(dropdownPage.optionMumbai).toBeVisible();
        // await page.pause();

    });

    test('Dynamic Dropdown', async ({ page }) => {
        await page.goto('https://www.globalsqa.com/demo-site/auto-complete/#ComboBox');
        await page.getByRole('heading', { name: 'Auto Complete' });
        await page.locator('a.close_img:visible').click();
        await page.frameLocator('[src*="combobox.html"]').getByRole('textbox').click();
        await page.frameLocator('[src*="combobox.html"]').getByRole('textbox').fill('app');
        await page.frameLocator('[src*="combobox.html"]').locator('.ui-menu-item-wrapper').getByText('AppleScript').click();

        // await page.pause();
    });
    test('Multi Select Dropdown', async({page}) => {
        await page.goto('https://vinothqaacademy.com/drop-down/');
        await page.getByText('© 2025 V-Tech Solutions Ltd (UK), Reg. No: 16489105', { exact: true }).scrollIntoViewIfNeeded();
        await expect(page.getByText('© 2025 V-Tech Solutions Ltd (UK), Reg. No: 16489105', { exact: true })).toBeVisible();
        await page.getByRole('heading', { name: 'Multiple Select' }).scrollIntoViewIfNeeded();
        await expect(page.getByRole('heading', { name: 'Multiple Select' })).toBeVisible();
        await expect(page.getByText('Choose Programming Languages:', { exact: true })).toBeVisible();
        await page.locator('span.select2-selection.select2-selection--multiple').click();
        const languages = ['Python', 'Java', 'CSharp'];
        for (const lang of languages) {
            await page.locator('.select2-search__field').fill(lang);
            await page.keyboard.press('Enter');
        }

        // await page.pause();
    })

    test('Take screenshot of the page', async ({ page }) => {
        const dropdownPage = new DropdownPage(page);

        await page.goto('https://vinothqaacademy.com/drop-down/');
        await dropdownPage.verifyDropdownScreenVisible();
        await dropdownPage.chooseCityOption.click();
        await dropdownPage.selectCountry('London');
        await dropdownPage.removeFocus();
        await expect(dropdownPage.optionLondon).toBeVisible();
        await dropdownPage.selectCountry('Paris');
        await dropdownPage.removeFocus();
        await expect(dropdownPage.optionParis).toBeVisible();
        await dropdownPage.selectCountry('Mumbai');
        await dropdownPage.removeFocus();
        await expect(dropdownPage.optionMumbai).toBeVisible();
        await page.screenshot({ path: 'dropdown.png' });
        await page.screenshot({ path: 'full-page.png' , fullPage: true});

        await expect(page).toHaveScreenshot('dropdown.png');
        await expect(page).toHaveScreenshot('full-page.png');
        // await page.pause();

    });
    test('MAke a test case using Absolute Xpath', async({page}) => {
        await page.goto('https://automationpanda.com/');
        await expect(page.getByRole('heading', { name: 'Automation Panda' })).toBeVisible();
        await page.locator("//a[normalize-space()='About']").click();
        await page.locator("//a[normalize-space()='Contact']").click();
        await page.locator("//label[@for='g3-email']").scrollIntoViewIfNeeded();
        await expect(page.locator("//label[@for='g3-email']")).toBeVisible();
        

    });
});
