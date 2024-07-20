import { expect, test } from '../base/pomFixture';
import {
  AUTOMATION_PRACTICE_URL,
} from '../utils/Constants';
import { getUser } from '../utils/Utils';

test.beforeEach(async ({ page }, testInfo) => {
  console.log(`Running ${testInfo.title}`);
  await page.goto(AUTOMATION_PRACTICE_URL);

});

test('registration successful', async ({ page, landingPage, loginPage, registrationPage, accountPage }) => {
  const user = await getUser();
  await landingPage.clickOnSignInBtn()

  await loginPage.enterEmailForRegistration(user.email)
  await loginPage.clickOnCreateAnAccountBtn();

  await registrationPage.enterFirstName(user.name.split(" ")[0])
  await registrationPage.enterLastName(user.name.split(" ")[1])
  await registrationPage.expectEmail(user.email)
  await registrationPage.enterPassword(user.password)
  await registrationPage.selectDateOfBirth("14","January","1991")
  
  await registrationPage.clickOnRegisterBtn();
  await accountPage.validateAccountCreatedSuccessfulMessage(" Your account has been created.")

});
test.afterEach('Status check', async ({ page }, testInfo) => {
  console.log(`Finished ${testInfo.title} with status ${testInfo.status}`);

  if (testInfo.status !== testInfo.expectedStatus)
    console.log(`Did not run as expected, ended up at ${page.url()}`);
});