import { test } from "../tests/fixtures/baseTest";
import { userData } from "../utils/userData";
import { registerUser } from "../utils/userFlows";

test('Logout User', async ({ page, account, auth }) => {

  const user = userData();
  await registerUser(page, user);
  await account.logout();
  await auth.verifyLoginToAccountVisible();
});