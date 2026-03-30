import { test, expect } from "../tests/fixtures/baseTest";
import { userData } from "../utils/userData";
import { registerUser, cleanupAccount, logoutAndLogin } from "../utils/userFlows";

test('Login User with correct email and password', async ({ page, account }) => {
  const user = userData();

  await registerUser(page, user);

  await logoutAndLogin(page, user.email, user.password, user.name);
  await expect(account.loggedInAs(user.name)).toBeVisible();

  await cleanupAccount(page);
});