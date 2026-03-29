import { test } from "../tests/fixtures/baseTest";
import { navigateToHome } from "../utils/userFlows";

test('Login User with incorrect email and password', async ({ home, auth }) => {

  await navigateToHome(home);
  await home.clickSignupLogin();
  await auth.verifyLoginToAccountVisible();
  await auth.login('wronguser@test.com', 'wrongpassword');
  await auth.verifyLoginError();
});