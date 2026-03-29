import { test } from "../tests/fixtures/baseTest";
import { userData } from "../utils/userData";
import { registerUser } from "../utils/userFlows";

test('Register User with existing email', async ({ page, home, auth, account }) => {

  const user = userData();

  await registerUser(page, user);
  await account.logout();
  await home.clickSignupLogin();
  await auth.verifyNewUserSignupVisible();
  await auth.enterNameAndEmail(user.name, user.email);
  await auth.clickSignup();
  await auth.verifySignupError();
});