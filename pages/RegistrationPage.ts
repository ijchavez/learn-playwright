import { Page, expect } from "@playwright/test";
import { convertMonthIntoMM } from "../utils/Utils";

export class RegistrationPage {
    constructor (public page: Page){
        this.page = page
    }
    async enterFirstName(firstName: string){
        await this.page.locator("#customer_firstname").fill(firstName);
    }
    async enterLastName(lastName: string){
        await this.page.locator("#customer_lastname").fill(lastName);
    }
    async enterPassword(password: string){
        await this.page.locator("#passwd").fill(password);
    }
    async enterEmail(email: string){
        await this.page.locator("#email").fill(email.toLowerCase(), { timeout: 5000 });

    }
    async expectEmail(email: string){
        await expect(this.page.locator("#email")).toHaveValue(email.toLowerCase())

    }
    async selectDateOfBirth(day: string, month: string, year: string){
        await this.page.locator("#days").selectOption(day)
        const monthToReturn = await convertMonthIntoMM(month)
        await this.page.locator("#months").selectOption({index: monthToReturn})
        await this.page.locator("#years").selectOption(year)
    }
    async clickOnRegisterBtn(){
        await Promise.all([
            this.page.locator("#submitAccount").click()
        ])
    }
}