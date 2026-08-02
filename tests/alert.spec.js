import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://testkru.com/Interactions/Alerts');
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('button', { name: 'Show Alert' }).click();
});


test('Handle Alert Diallog', async ({ page }) => {
  await page.goto('https://testkru.com/Interactions/Alerts');

  // Listen for the alert dialog
  page.once('dialog', async dialog => {
    expect(dialog.type()).toBe('alert');
    expect(dialog.message()).toBe('This is a simple alert!');
    await dialog.accept(); // Clicks 'OK'
  });

  // Trigger the alert
  await page.getByRole('button', { name: 'Show Alert' }).click();
});