import { test, expect } from '@playwright/test';
import { DropdownPage } from '../pages/DropdownPage.js';

test.describe('Homescreen flows', () => {
    test('Verify Static dropdown', async ({ page }) => {
        const dropdownPage = new DropdownPage(page);

        await page.goto('https://vinothqaacademy.com/drop-down/');
        await dropdownPage.verifyDropdownScreenVisible();

        await expect(page).toHaveScreenshot('dropdown.png');
    });

});