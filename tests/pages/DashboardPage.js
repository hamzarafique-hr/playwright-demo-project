import { expect } from '@playwright/test';

export class DashboardPage {
  constructor(page) {
    this.page = page;
    this.sidePanelButton = page.getByRole('navigation', { name: 'Sidepanel' }).getByRole('button').first();
    this.adminLink = page.getByRole('link', { name: 'Admin' });
    this.userMenu = page.getByRole('listitem').filter({ hasText: 'manda user' });
    this.logoutOption = page.getByRole('menuitem', { name: 'Logout' });
    this.footerLink = page.getByText(/©\s*2005 - 2026 OrangeHRM, Inc/);
  }

  async openSidePanel() {
    await this.sidePanelButton.click();
  }

  async goToAdmin() {
    await this.adminLink.click();
    await expect(this.page.getByRole('heading', { name: /User Management/ })).toBeVisible();
  }

  async openExternalFooterLink() {
    const [popup] = await Promise.all([
      this.page.waitForEvent('popup'),
      this.footerLink.click(),
    ]);
    return popup;
  }

  async logout() {
    await this.userMenu.locator('i').click();
    await this.logoutOption.click();
    await expect(this.page.getByRole('button', { name: 'Login' })).toBeVisible();
  }
}