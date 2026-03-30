import { Page } from "@playwright/test";

export class AuthPage {
  constructor(private page: Page) {}

  get newUserSignupHeading() {
    return this.page.getByText('New User Signup!');
  }

  get loginToAccountHeading() {
    return this.page.getByText('Login to your account');
  }

  get loginErrorMessage() {
    return this.page.getByText('Your email or password is incorrect!');
  }

  get signupErrorMessage() {
    return this.page.getByText('Email Address already exist!');
  }

  async enterNameAndEmail(name: string, email: string) {
    await this.page.locator('input[name="name"]').fill(name);
    await this.page.locator('input[data-qa="signup-email"]').fill(email);
  }

  async clickSignup() {
    await this.page.getByRole('button', { name: 'Signup' }).click();
  }

  async login(email: string, password: string) {
    await this.page.locator('input[data-qa="login-email"]').fill(email);
    await this.page.locator('input[data-qa="login-password"]').fill(password);
    await this.page.getByRole('button', { name: 'Login' }).click();
  }
}