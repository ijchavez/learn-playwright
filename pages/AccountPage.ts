import { Page, expect } from "@playwright/test";

export class AccountPage {
    constructor (public page: Page){
        this.page = page
    }
    async validateAccountCreatedSuccessfulMessage(message: string){
        await expect(this.page.locator("p.alert.alert-success")).toHaveText(message)
    }
    async validateWelcomeToYourAccountMessage(message: string){
        await expect(this.page.locator("p.info-account")).toHaveText(message)
    }
}