import { expect, test } from "@playwright/test"
import { PLAYGROUND_URL, FORM_DEMO, CHECKBOX_DEMO } from '../utils/Constants'
test("Basic interactions input value", async ({ page }) => {
    await page.goto(PLAYGROUND_URL + FORM_DEMO)
    const messageInput = await page.locator('input#user-message')
    await messageInput.scrollIntoViewIfNeeded()
    
    await expect(messageInput).toHaveAttribute('placeholder','Please enter your Message')
    await expect(messageInput).toHaveValue('')
    //console.log(">>> " + (await messageInput.inputValue()))

    await messageInput.type('Hi Gerardo')
    //console.log((await messageInput.inputValue()))
    await expect(messageInput).toHaveValue('Hi Gerardo')
})
test("Basic interactions Sum", async ({ page }) => {
    await page.goto(PLAYGROUND_URL + FORM_DEMO)
    const sum1Input = await page.locator('#sum1')
    const sum2Input = await page.locator('#sum2')

    const getValuesBtn = page.locator("//button[text()='Get Sum']")
    let num1 = 121
    let num2 = 546
    let numericResult = num1 + num2
    await sum1Input.type(num1.toString())
    await sum2Input.type(num2.toString())
    await getValuesBtn.click()
    test.setTimeout(5000)
    const result = await page.locator("#addmessage")
    expect(result).toHaveText(numericResult.toString())
})
test("Basic interactions checkbox", async ({ page }) => {
    await page.goto(PLAYGROUND_URL + CHECKBOX_DEMO)
    const checkboxInput = await page.locator('#isAgeSelected')
    
    console.log(`checkbox is checked: ${await checkboxInput.isChecked()}`)
    expect(checkboxInput).not.toBeChecked()

    await checkboxInput.click()
    expect(checkboxInput).toBeChecked()

})