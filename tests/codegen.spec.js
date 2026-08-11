import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://example.com/');
  await page.getByRole('heading', { name: 'Example Domain' }).click();
  await page.getByText('This domain is for use in').click();
  await page.getByRole('link', { name: 'Learn more' }).click();
  await page.getByRole('heading', { name: 'Example Domains' }).click();
  await page.getByRole('link', { name: 'Domains', exact: true }).click();
  await page.goto('https://example.com/');
});

test('Daraz app', async ({ page }) => {
  await page.goto('https://www.daraz.pk/#?');
  await page.getByRole('link', { name: 'Login' }).click();
  await page.getByText('Password', { exact: true }).click();
  await page.locator('path').nth(4).click();
  await page.getByRole('link', { name: 'SIGN UP' }).click();
  await page.locator('.iweb-dialog-container.iweb-dialog-container-enter > .iweb-dialog-wrap > .iweb-dialog-body > .iweb-dialog-body-content-wrapper > .iweb-dialog-body-content > .lzd-member-loginsign-popup > .lzd-member-loginsign-popup-close-button > div > svg').click();
  await page.getByRole('searchbox', { name: 'Search in Daraz' }).click();
  await page.getByRole('searchbox', { name: 'Search in Daraz' }).fill('shoes');
  await page.getByRole('link', { name: 'Shoes for men', exact: true }).click();
  await page.getByRole('heading', { name: 'shoes for men' }).click();
  await page.locator('.Ms6aG').first().click();
  await page.getByRole('heading', { name: 'Size' }).click();
  await page.getByRole('button', { name: 'Add to Cart' }).click();
  await page.locator('.lzd-member-loginsign-popup-close-button > div > svg').click();
});