import { Page } from "@playwright/test";

export class AccountPage {
  constructor(private page: Page) {}

  get accountCreatedHeading() {
    return this.page.getByText('ACCOUNT CREATED!');
  }

  get accountDeletedHeading() {
    return this.page.getByText('ACCOUNT DELETED!');
  }

  loggedInAs(username: string) {
    return this.page.getByText(`Logged in as ${username}`);
  }

  async clickContinue() {
    await this.page.getByText('Continue').click();
  }

  async deleteAccount() {
    await this.page.getByText('Delete Account').click();
  }

  async logout() {
    await this.page.getByText('Logout').click();
  }
}