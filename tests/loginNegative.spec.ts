import { test, expect } from "../tests/fixtures/baseTest";

test('Login User with incorrect email and password', async ({ home, auth }) => {
  await home.navigate();
  await home.clickSignupLogin();

  await expect(auth.loginToAccountHeading).toBeVisible();

  await auth.login('wronguser@test.com', 'wrongpassword');

  await expect(auth.loginErrorMessage).toBeVisible();
});