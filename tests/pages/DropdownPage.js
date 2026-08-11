import { expect } from "@playwright/test";

export class DropdownPage {
    constructor(page) {
        this.page = page;
        this.logo = page.getByRole('img', { name: 'Vinoth Tech Solutions' });
        this.simpleDropdownHeading = page.getByRole('heading', { name: 'Simple Dropdown' });
        this.chooseCityHeading = page.getByLabel('Choose A City:');
        this.chooseCityOption = page.getByTitle('Choose A City');
        this.optionLondon = page.getByTitle('London');
        this.optionParis = page.getByTitle('Paris');
        this.optionMumbai = page.getByTitle('Mumbai');

    }

    async verifyDropdownScreenVisible() {
        await expect(this.logo).toBeVisible;
        await expect(this.simpleDropdownHeading).toBeVisible
        await expect(this.chooseCityHeading).toBeVisible
        await expect(this.chooseCityOption).toBeVisible
    }

    async selectCountry(countryCode) {
        await this.chooseCityHeading.selectOption(countryCode);
    }

    async removeFocus() {
        await this.simpleDropdownHeading.click();
    }
}