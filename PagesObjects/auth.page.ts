import { Page, expect } from "@playwright/test";

export class AuthPage {
  constructor(private page: Page) {}

  async verifyNewUserSignupVisible() {
    await expect(this.page.getByText('New User Signup!')).toBeVisible();
  }

  async enterNameAndEmail(name: string, email: string) {
    await this.page.locator('input[name="name"]').fill(name);
    await this.page.locator('input[data-qa="signup-email"]').fill(email);
  }

  async clickSignup() {
    await this.page.getByRole('button', { name: 'Signup' }).click();
  }

async verifyLoginToAccountVisible() {
  await expect(this.page.getByText('Login to your account')).toBeVisible();
}

async login(email: string, password: string) {
  await this.page.locator('input[data-qa="login-email"]').fill(email);
  await this.page.locator('input[data-qa="login-password"]').fill(password);
  await this.page.getByRole('button', { name: 'Login' }).click();
}

async verifyLoginError() {
  await expect(this.page.getByText('Your email or password is incorrect!')).toBeVisible();
}

async verifyOnLoginPage() {
  await expect(this.page).toHaveURL(/login/);
}

async verifySignupError() {
  await expect(this.page.getByText('Email Address already exist!')).toBeVisible();
}

}