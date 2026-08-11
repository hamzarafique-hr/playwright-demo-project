# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\orangeHRM.spec.js >> OrangeHRM login, admin access, and logout
- Location: tests\tests\orangeHRM.spec.js:5:5

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
  1  | import { expect } from '@playwright/test';
  2  | 
  3  | export class LoginPage {
  4  |   constructor(page) {
  5  |     this.page = page;
  6  |     this.usernameInput = page.getByRole('textbox', { name: 'Username' });
  7  |     this.passwordInput = page.getByRole('textbox', { name: 'Password' });
  8  |     this.loginButton = page.getByRole('button', { name: 'Login' });
  9  |     this.forgotPasswordLink = page.getByText('Forgot your password?');
  10 |     this.cancelButton = page.getByRole('button', { name: 'Cancel' });
  11 |     this.heading = page.getByRole('heading', { name: 'Login' });
  12 |   }
  13 | 
  14 |   async goto() {
> 15 |     await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
     |                     ^ TimeoutError: page.goto: Timeout 30000ms exceeded.
  16 |     await expect(this.heading).toBeVisible();
  17 |   }
  18 | 
  19 |   async login(username, password) {
  20 |     await this.usernameInput.fill(username);
  21 |     await this.passwordInput.fill(password);
  22 |     await Promise.all([
  23 |       this.page.waitForURL(/dashboard/),
  24 |       this.loginButton.click(),
  25 |     ]);
  26 |   }
  27 | 
  28 |   async openForgotPassword() {
  29 |     await this.forgotPasswordLink.click();
  30 |     await expect(this.cancelButton).toBeVisible();
  31 |   }
  32 | 
  33 |   async cancelForgotPassword() {
  34 |     await this.cancelButton.click();
  35 |     await expect(this.loginButton).toBeVisible();
  36 |   }
  37 | }
```