import { test, expect } from '@playwright/test';

test('Handle Prompt Dialog @smoke', async ({ page }) => {
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