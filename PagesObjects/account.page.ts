import { Page, expect } from "@playwright/test";

export class AccountPage {
  constructor(private page: Page) {}

  async verifyAccountCreated() {
    await expect(this.page.getByText('ACCOUNT CREATED!')).toBeVisible();
  }

  async clickContinue() {
    await this.page.getByText('Continue').click();
  }

  async verifyLoggedIn(username: string) {
    await expect(this.page.getByText(`Logged in as ${username}`)).toBeVisible();
  }

  async deleteAccount() {
    await this.page.getByText('Delete Account').click();
  }

  async verifyAccountDeleted() {
    await expect(this.page.getByText('ACCOUNT DELETED!')).toBeVisible();
  }

  async logout() {
  await this.page.getByText('Logout').click();
}

}