# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: orangeHRM.spec.js >> test
- Location: tests\orangeHRM.spec.js:3:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
TimeoutError: page.goto: Timeout 30000ms exceeded.
Call log:
  - navigating to "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login", waiting until "load"

```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test('test', async ({ page }) => {
> 4  |   await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
     |              ^ TimeoutError: page.goto: Timeout 30000ms exceeded.
  5  |   await page.getByRole('heading', { name: 'Login' }).click();
  6  |   await page.getByRole('textbox', { name: 'Username' }).click();
  7  |   await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  8  |   await page.getByRole('textbox', { name: 'Password' }).click();
  9  |   await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  10 |   await page.getByText('LoginUsername : AdminPassword').click();
  11 |   await page.getByText('Forgot your password?').click();
  12 |   await page.getByRole('button', { name: 'Cancel' }).click();
  13 |   await page.getByRole('textbox', { name: 'Username' }).click();
  14 |   await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  15 |   await page.getByText('LoginUsername : AdminPassword').click();
  16 |   await page.getByRole('textbox', { name: 'Password' }).click();
  17 |   await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  18 |   await page.locator('div').nth(4).click();
  19 |   await page.getByRole('button', { name: 'Login' }).click();
  20 |   await page.getByRole('navigation', { name: 'Sidepanel' }).getByRole('button').click();
  21 |   await page.getByRole('navigation', { name: 'Sidepanel' }).getByRole('button').click();
  22 |   await page.getByRole('link', { name: 'Admin' }).click();
  23 |   await page.getByRole('heading', { name: '/ User Management' }).click();
  24 |   const page1Promise = page.waitForEvent('popup');
  25 |   await page.getByText('© 2005 - 2026 OrangeHRM, Inc').click();
  26 |   const page1 = await page1Promise;
  27 |   await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
  28 |   await page.getByRole('listitem').filter({ hasText: 'manda user' }).locator('i').click();
  29 |   await page.getByRole('menuitem', { name: 'Logout' }).click();
  30 | });
```