import { test as baseTest } from "@playwright/test"

import { LoginPage, LandingPage, RegistrationPage, AccountPage } from '../pages';


type pages = {
    landingPage: LandingPage;
    loginPage : LoginPage;
    registrationPage : RegistrationPage;
    accountPage: AccountPage;
}
const testPages = baseTest.extend<pages>({
    registrationPage: async ({ page }, use) => {
        await use(new RegistrationPage(page));
    },
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },
    landingPage: async ({ page }, use) => {
        await use(new LandingPage(page));
    },
    accountPage: async ({ page }, use) => {
        await use(new AccountPage(page));
    }
})
export const test = testPages;
export const expect = testPages.expect;