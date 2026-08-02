import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://testkru.com/Interactions/Alerts');
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('button', { name: 'Show Confirm' }).click();
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('button', { name: 'Show Confirm' }).click();
});

test('Handle Confirm Dialog', async ({ page }) => {
  await page.goto('https://testkru.com/Interactions/Alerts');

  // Listen for the confirmation dialog
  page.once('dialog @regression', async dialog => {
    expect(dialog.type()).toBe('confirm');
    expect(dialog.message()).toBe('Do you want to proceed?');
    
    await dialog.accept();  // Clicks 'OK' (or call dialog.dismiss() to click 'Cancel')
  });

  // Trigger the confirm dialog
  await page.getByRole('button', { name: 'Show Confirm' }).click();

  page.once('dialog @regression', async dialog => {
    expect(dialog.type()).toBe('confirm');
    expect(dialog.message()).toBe('Do you want to proceed?');
    await dialog.dismiss();  // Clicks 'Cancel'

    await page.getByRole('button', { name: 'Show Confirm' }).click();
  })
});