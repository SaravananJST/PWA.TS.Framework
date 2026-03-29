import { test } from "../tests/fixtures/baseTest";
import { userData } from "../utils/userData";
import { registerUser, cleanupAccount } from "../utils/userFlows";

test('Register User', async ({ page, home }) => {

  const user = userData();

  await registerUser(page, user);
  await cleanupAccount(page);
});