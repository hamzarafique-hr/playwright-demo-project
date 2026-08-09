import { expect } from '@playwright/test';

export class SauceInventoryPage {
  constructor(page) {
    this.page = page;
    this.openMenuButton = page.getByRole('button', { name: 'Open Menu' });
    this.aboutSidebarLink = page.locator('[data-test="about-sidebar-link"]');
    this.logoutSidebarLink = page.locator('[data-test="logout-sidebar-link"]');
    this.footerWordmark = page.locator('.footer-wordmark');
  }

  async openMenu() {
    await this.openMenuButton.click();
  }

  async clickAboutLink() {
    await this.aboutSidebarLink.click();
  }

  async clickFooterWordmark() {
    await this.footerWordmark.scrollIntoViewIfNeeded();
    await this.footerWordmark.click();
  }

  async logout() {
    await this.openMenuButton.click();
    await this.logoutSidebarLink.click();
    await expect(this.page.locator('[data-test="login-button"]')).toBeVisible();
  }
}
