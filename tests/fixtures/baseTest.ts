import { test as base, Page } from "@playwright/test";
import { PageObjectManager } from "../../PagesObjects/pageObjectManager";

type Fixtures = {
  poManager: PageObjectManager;
  home: any;
  auth: any;
  account: any;
  signup: any;
};

export const test = base.extend<Fixtures>({
  poManager: async ({ page }: { page: Page }, use: (value: PageObjectManager) => Promise<void>) => {
    const poManager = new PageObjectManager(page);
    await use(poManager);
  },

  home: async ({ poManager }: { poManager: PageObjectManager }, use: (value: any) => Promise<void>) => {
    await use(poManager.getHomePage());
  },

  auth: async ({ poManager }: { poManager: PageObjectManager }, use: (value: any) => Promise<void>) => {
    await use(poManager.getAuthPage());
  },

  account: async ({ poManager }: { poManager: PageObjectManager }, use: (value: any) => Promise<void>) => {
    await use(poManager.getAccountPage());
  },

  signup: async ({ poManager }: { poManager: PageObjectManager }, use: (value: any) => Promise<void>) => {
    await use(poManager.getSignupPage());
  },
});

export { expect } from "@playwright/test";