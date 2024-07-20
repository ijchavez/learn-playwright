import { expect, test } from "@playwright/test"
import { PLAYGROUND_URL, ALERT_DEMO } from '../utils/Constants'
import { manageAlertBox, managePromptBox } from "../utils/Utils"

test("Handling Javascript alert box", async ({ page }) => {
    await page.goto(PLAYGROUND_URL + ALERT_DEMO)
    await manageAlertBox(page, true)
    await page.locator("button:has-text('Click Me')").nth(0).click()
})
test("Handling Javascript confirm box Cancel", async ({ page }) => {
    await page.goto(PLAYGROUND_URL + ALERT_DEMO)
    await manageAlertBox(page, false)
    await page.locator("button:has-text('Click Me')").nth(1).click()
    //console.log(await page.locator('id=confirm-demo').textContent())
    await expect(page.locator('id=confirm-demo')).toHaveText('You pressed Cancel!')

})
test("Handling Javascript confirm box Accept", async ({ page }) => {
    await page.goto(PLAYGROUND_URL + ALERT_DEMO)
    await manageAlertBox(page, true)
    await page.locator("button:has-text('Click Me')").nth(1).click()
    console.log(await page.locator('id=confirm-demo').textContent())
    await expect(page.locator('id=confirm-demo')).toHaveText('You pressed OK!')
})
test("Handling Javascript prompt box", async ({ page }) => {
    await page.goto(PLAYGROUND_URL + ALERT_DEMO)
    await managePromptBox(page, ALERT_DEMO)
    await page.locator("button:has-text('Click Me')").nth(2).click()
    await expect(page.locator('id=prompt-demo')).toHaveText(`You have entered '${ALERT_DEMO}' !`)
})