import { test as base, Page } from "@playwright/test";
import { PageObjectManager } from "../../PagesObjects/pageObjectManager";
import { HomePage } from "../../PagesObjects/home.page";
import { AuthPage } from "../../PagesObjects/auth.page";
import { AccountPage } from "../../PagesObjects/account.page";
import { SignupPage } from "../../PagesObjects/signup.page";

type Fixtures = {
  poManager: PageObjectManager;
  home: HomePage;
  auth: AuthPage;
  account: AccountPage;
  signup: SignupPage;
};

export const test = base.extend<Fixtures>({
  poManager: async ({ page }: { page: Page }, use) => {
    await use(new PageObjectManager(page));
  },
  home: async ({ poManager }, use) => {
    await use(poManager.getHomePage());
  },
  auth: async ({ poManager }, use) => {
    await use(poManager.getAuthPage());
  },
  account: async ({ poManager }, use) => {
    await use(poManager.getAccountPage());
  },
  signup: async ({ poManager }, use) => {
    await use(poManager.getSignupPage());
  },
});

export { expect } from "@playwright/test";
