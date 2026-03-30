import { Page } from "@playwright/test";
import { UserData } from "../utils/userData";

export class SignupPage {
  constructor(private page: Page) {}

  get enterAccountInfoHeading() {
    return this.page.getByText('Enter Account Information');
  }

  async fillAccountDetails(user: UserData) {
    await this.page.locator('#password').fill(user.password);
    await this.page.selectOption('#days', '1');
    await this.page.selectOption('#months', '1');
    await this.page.selectOption('#years', '2000');
    await this.page.locator('#newsletter').check();
    await this.page.locator('#optin').check();
    await this.page.locator('#first_name').fill(user.firstName);
    await this.page.locator('#last_name').fill(user.lastName);
    await this.page.locator('#company').fill(user.company);
    await this.page.locator('#address1').fill(user.address);
    await this.page.locator('#address2').fill(user.address2);
    await this.page.selectOption('#country', user.country);
    await this.page.locator('#state').fill(user.state);
    await this.page.locator('#city').fill(user.city);
    await this.page.locator('#zipcode').fill(user.zipcode);
    await this.page.locator('#mobile_number').fill(user.mobile);
  }

  async clickCreateAccount() {
    await this.page.getByText('Create Account').click();
  }
}