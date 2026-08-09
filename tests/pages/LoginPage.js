import { expect } from '@playwright/test';

export class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameInput = page.getByRole('textbox', { name: 'Username' });
    this.passwordInput = page.getByRole('textbox', { name: 'Password' });
    this.loginButton = page.getByRole('button', { name: 'Login' });
    this.forgotPasswordLink = page.getByText('Forgot your password?');
    this.cancelButton = page.getByRole('button', { name: 'Cancel' });
    this.heading = page.getByRole('heading', { name: 'Login' });
  }

  async goto() {
    await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await expect(this.heading).toBeVisible();
  }

  async login(username, password) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await Promise.all([
      this.page.waitForURL(/dashboard/),
      this.loginButton.click(),
    ]);
  }

  async openForgotPassword() {
    await this.forgotPasswordLink.click();
    await expect(this.cancelButton).toBeVisible();
  }

  async cancelForgotPassword() {
    await this.cancelButton.click();
    await expect(this.loginButton).toBeVisible();
  }
}