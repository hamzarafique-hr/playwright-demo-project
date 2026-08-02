import { test, expect } from '@playwright/test';

test('test @smoke', async ({ page }) => {
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

test('Handle Confirm Dialog @sanity', async ({ page }) => {
  await page.goto('https://testkru.com/Interactions/Alerts');

  // Listen for the confirmation dialog
  page.once('dialog', async dialog => {
    expect(dialog.type()).toBe('confirm');
    expect(dialog.message()).toBe('Do you want to proceed?');
    
    await dialog.accept();  // Clicks 'OK' (or call dialog.dismiss() to click 'Cancel')
  });

  // Trigger the confirm dialog
  await page.getByRole('button', { name: 'Show Confirm' }).click();

  page.once('dialog', async dialog => {
    expect(dialog.type()).toBe('confirm');
    expect(dialog.message()).toBe('Do you want to proceed?');
    await dialog.dismiss();  // Clicks 'Cancel'

    await page.getByRole('button', { name: 'Show Confirm' }).click();
  })
});

test('Handle Prompt Dialog', async ({ page }) => {
  await page.goto('https://testkru.com/Interactions/Alerts');

  // Listen for the prompt dialog
  page.once('dialog', async dialog => {
    expect(dialog.type()).toBe('prompt');
    expect(dialog.message()).toBe('Please enter your name:');
    
    // Pass text into accept() to fill the prompt input field
    await dialog.accept('Alex Smith'); 
  });

  // Trigger the prompt
  await page.getByRole('button', { name: 'Show Prompt' }).click();
  await page.pause(3000); // Wait for the prompt to be handled
});

test('test for tags ', async ({ page }) => {
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