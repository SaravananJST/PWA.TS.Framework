import { expect, Page } from "@playwright/test";
import { PageObjectManager } from "../PagesObjects/pageObjectManager";
import { UserData } from "./userData";

export async function registerUser(page: Page, user: UserData) {
  const { home, auth, signup, account } = getPages(page);

  await home.navigate();
  await home.clickSignupLogin();
  await expect(auth.newUserSignupHeading).toBeVisible();
  await auth.enterNameAndEmail(user.name, user.email);
  await auth.clickSignup();
  await expect(signup.enterAccountInfoHeading).toBeVisible();
  await signup.fillAccountDetails(user);
  await signup.clickCreateAccount();
  await expect(account.accountCreatedHeading).toBeVisible();
  await account.clickContinue();
}

export async function cleanupAccount(page: Page) {
  const { account } = getPages(page);
  await account.deleteAccount();
  await expect(account.accountDeletedHeading).toBeVisible();
  await account.clickContinue();
}

export async function logoutAndLogin(page: Page, email: string, password: string, userName: string) {
  const { home, auth, account } = getPages(page);
  await account.logout();
  await home.clickSignupLogin();
  await expect(auth.loginToAccountHeading).toBeVisible();
  await auth.login(email, password);
  await expect(account.loggedInAs(userName)).toBeVisible();
}

function getPages(page: Page) {
  const poManager = new PageObjectManager(page);
  return {
    home: poManager.getHomePage(),
    auth: poManager.getAuthPage(),
    signup: poManager.getSignupPage(),
    account: poManager.getAccountPage(),
  };
}