import { Page } from "@playwright/test";
import { HomePage } from "./home.page";
import { AuthPage } from "./auth.page";
import { SignupPage } from "./signup.page";
import { AccountPage } from "./account.page";

export class PageObjectManager {
  constructor(private page: Page) {}

  getHomePage() {
    return new HomePage(this.page);
  }

  getAuthPage() {
    return new AuthPage(this.page);
  }

  getSignupPage() {
    return new SignupPage(this.page);
  }

  getAccountPage() {
    return new AccountPage(this.page);
  }
}