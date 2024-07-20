import { expect, test } from '@playwright/test';
import {
  AUTOMATION_PRACTICE_URL,
} from '../utils/Constants';
import { getUser } from '../utils/Utils';
import { LoginPage, LandingPage, AccountPage } from '../pages';
import { sucessfulLoginUser }  from '../fixture/loginUser';

let landingPage: LandingPage;
let loginPage : LoginPage;
let accountPage: AccountPage;

test.beforeEach(async ({ page }, testInfo) => {
  console.log(`Running ${testInfo.title}`);
  await page.goto(AUTOMATION_PRACTICE_URL);
  landingPage = new LandingPage(page);
  loginPage = new LoginPage(page);
  accountPage = new AccountPage(page);
});

test('login successful', async () => {
  await landingPage.clickOnSignInBtn()

  await loginPage.enterEmailForLogin(sucessfulLoginUser.email)
  await loginPage.enterpasswordForLogin(sucessfulLoginUser.password)
  await loginPage.clickOnSignInBtn()
  await accountPage.validateWelcomeToYourAccountMessage("Welcome to your account. Here you can manage all of your personal information and orders.");

});
test.afterEach('Status check', async ({ page }, testInfo) => {
  console.log(`Finished ${testInfo.title} with status ${testInfo.status}`);

  if (testInfo.status !== testInfo.expectedStatus)
    console.log(`Did not run as expected, ended up at ${page.url()}`);
});