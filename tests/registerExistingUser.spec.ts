import { test, expect } from "../tests/fixtures/baseTest";
import { userData } from "../utils/userData";
import { registerUser } from "../utils/userFlows";

test('Register User with existing email', async ({ page, home, auth, account }) => {
  const user = userData();

  await registerUser(page, user);

  await account.logout();
  await expect(auth.loginToAccountHeading).toBeVisible();
  
  await home.clickSignupLogin();
  await expect(auth.newUserSignupHeading).toBeVisible();

  await auth.enterNameAndEmail(user.name, user.email);
  await auth.clickSignup();

  await expect(auth.signupErrorMessage).toBeVisible();
});