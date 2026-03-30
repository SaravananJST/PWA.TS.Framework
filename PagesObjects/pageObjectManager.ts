import { Page } from "@playwright/test";
import { HomePage } from "./home.page";
import { AuthPage } from "./auth.page";
import { SignupPage } from "./signup.page";
import { AccountPage } from "./account.page";

export class PageObjectManager {
  private readonly homePage: HomePage;
  private readonly authPage: AuthPage;
  private readonly signupPage: SignupPage;
  private readonly accountPage: AccountPage;

  constructor(page: Page) {
    this.homePage = new HomePage(page);
    this.authPage = new AuthPage(page);
    this.signupPage = new SignupPage(page);
    this.accountPage = new AccountPage(page);
  }

  getHomePage() { return this.homePage; }
  getAuthPage() { return this.authPage; }
  getSignupPage() { return this.signupPage; }
  getAccountPage() { return this.accountPage; }
}