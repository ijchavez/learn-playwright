import { chromium, test } from "@playwright/test"
import { ECOMMERCE, testUser } from '../utils/Constants'

test("Login test demo", async () => {
    const browser = await chromium.launch({
        headless: false
    })
    const context = await browser.newContext()
    const page = await context.newPage()

    await page.goto(ECOMMERCE)
    await page.hover('//a[@data-toggle="dropdown"]//span[contains(.,"My account")]')
    //await page.click('text=Login')
    await page.click("'Login'")
    await page.fill("input[name='email']", testUser.user)
    await page.fill("input[name='password']", testUser.password)
    await page.click("input[value='Login']")

    //new page inside the same context
    //const page1 = await context.newPage()
    //await page1.goto(ECOMMERCE + ACCOUNT_PATH)
})