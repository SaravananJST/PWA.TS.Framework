import { PageObjectManager } from "../PagesObjects/pageObjectManager";

export async function registerUser(page: any, user: any) {
  const poManager = new PageObjectManager(page);

  const home = poManager.getHomePage();
  const auth = poManager.getAuthPage();
  const signup = poManager.getSignupPage();
  const account = poManager.getAccountPage();

  await home.navigate();
  await home.verifyHomePageVisible();

  await home.clickSignupLogin();

  await auth.verifyNewUserSignupVisible();
  await auth.enterNameAndEmail(user.name, user.email);
  await auth.clickSignup();

  await signup.verifyEnterAccountInfoVisible();
  await signup.fillAccountDetails(user);
  await signup.clickCreateAccount();

  await account.verifyAccountCreated();
  await account.clickContinue();
}

export async function navigateToHome(home: any) {
  await home.navigate();
  await home.verifyHomePageVisible();
}

export async function cleanupAccount(page: any) {
  const poManager = new PageObjectManager(page);
  const account = poManager.getAccountPage();

  await account.deleteAccount();
  await account.verifyAccountDeleted();
  await account.clickContinue();
}

export async function logoutAndLogin(page: any, email: string, password: string, userName: string) {
  const poManager = new PageObjectManager(page);
  const home = poManager.getHomePage();
  const auth = poManager.getAuthPage();
  const account = poManager.getAccountPage();

  await account.logout();
  await home.clickSignupLogin();
  await auth.verifyLoginToAccountVisible();
  await auth.login(email, password);
  await account.verifyLoggedIn(userName);
}