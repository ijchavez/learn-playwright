import { Page } from "@playwright/test";

export class LoginPage {
    constructor (public page: Page){
        this.page = page
    }
    async enterEmailForRegistration(email: string){
        await this.page.locator("#email_create").fill(email.toLowerCase(), { timeout: 5000 });
    }
    async clickOnCreateAnAccountBtn(){
        await Promise.all([
            await this.page.locator("#SubmitCreate").click()
        ])

    }
    async enterEmailForLogin(email: string){
        await this.page.locator("#email").fill(email.toLowerCase(), { timeout: 5000 });
    }
    async enterpasswordForLogin(email: string){
        await this.page.locator("#passwd").fill(email.toLowerCase(), { timeout: 5000 });
    }
    async clickOnSignInBtn(){
        await Promise.all([
            await this.page.locator("#SubmitLogin").click()
        ])

    }
}