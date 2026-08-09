import { test } from '@playwright/test';
import { SauceLoginPage } from '../pages/SauceLoginPage';
import { SauceInventoryPage } from '../pages/SauceInventoryPage';

test('test', async ({ page }) => {
  const loginPage = new SauceLoginPage(page);
  const inventoryPage = new SauceInventoryPage(page);

  await loginPage.goto();

  await loginPage.login('standarduser', 'secret_sauce');
  await loginPage.errorMessage.click();

  await loginPage.usernameInput.fill('standard_user');
  await loginPage.loginButton.click();

  await inventoryPage.openMenu();
  await inventoryPage.clickAboutLink();
  await inventoryPage.clickFooterWordmark();

  await page.goto('https://www.saucedemo.com/inventory.html');
  await inventoryPage.logout();

  await loginPage.usernameInput.click();
});
