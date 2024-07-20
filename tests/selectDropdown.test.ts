import { expect, test } from '@playwright/test';
import {
  PLAYGROUND_URL,
  SELECT_DROPDOWN_DEMO,
  DAY_SELECTED_MESSAGE,
  JQUERY_DROPDOWN_SEARCH_DEMO,
} from '../utils/Constants';
import { getRandomDayOfWeek } from '../utils/Utils';
test('Handling dropdown', async ({ page }) => {
  const day = await getRandomDayOfWeek();
  await page.goto(PLAYGROUND_URL + SELECT_DROPDOWN_DEMO);
  await page.selectOption('#select-demo', {
    label: day,
    //value: day
    //index: 5
  });
  const result = await page.locator('.selected-value');
  console.log(day);
  await expect(result).toHaveText(`${DAY_SELECTED_MESSAGE} ${day}`);
});
test('Handling multiple elements', async ({ page }) => {
  const day = await getRandomDayOfWeek();
  await page.goto(PLAYGROUND_URL + SELECT_DROPDOWN_DEMO);
  await page.selectOption('#multi-select', [
    {
      label: 'Texas',
    },
    {
      value: 'Ohio',
    },
  ]);
  await page.locator('id=printMe').click();
  await page.locator('#printAll').click();
});
test('Handling bootstrap dropdown', async ({ page }) => {
  const day = await getRandomDayOfWeek();
  await page.goto(PLAYGROUND_URL + JQUERY_DROPDOWN_SEARCH_DEMO);
  await page.locator('#country+span').click();
  await page
    .locator('ul#select2-country-results')
    .locator('li', {
      hasText: 'India',
    })
    .click();
  await page.waitForTimeout(5000);

});
