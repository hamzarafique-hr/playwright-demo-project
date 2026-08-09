import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';

test('OrangeHRM login, admin access, and logout', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const dashboardPage = new DashboardPage(page);

  await loginPage.goto();
  await loginPage.openForgotPassword();
  await loginPage.cancelForgotPassword();
  await loginPage.login('Admin', 'admin123');

  await dashboardPage.openSidePanel();
  await dashboardPage.openSidePanel();
  await dashboardPage.goToAdmin();

  const popup = await dashboardPage.openExternalFooterLink();
  await popup.waitForLoadState('domcontentloaded');

  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
  await dashboardPage.logout();
});