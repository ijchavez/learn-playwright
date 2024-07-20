import { Page } from "@playwright/test";

export class LandingPage {
    constructor (public page: Page){
        this.page = page
    }
    async clickOnSignInBtn(){
        await this.page.locator("a.login").click();
    }
}