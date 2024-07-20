import { expect, test } from '@playwright/test';
import {
  NEOCITIES_URL,
  PAGES_PATH,
  NESTED_IFRAME_PATH,
} from '../utils/Constants';
import { DateGenerator } from '../utils/DateGenerator';
import { getUser } from '../utils/Utils';

test.beforeEach(async ({ page }, testInfo) => {
  console.log(`Running ${testInfo.title}`);
  await page.goto(NEOCITIES_URL + PAGES_PATH + NESTED_IFRAME_PATH);
});

test('Handling IFrames', async ({ page }) => {
  const randomDate = DateGenerator.generateRandomDate()

  const allFrames = page.frames();
  console.log(`Total Frames: ${allFrames.length}`)

  const outerFrame = page.frameLocator("#outer-iframe")
  await outerFrame?.locator("#dia").selectOption(randomDate.day)
  await outerFrame?.locator("#mes").selectOption({label: randomDate.month})
  await outerFrame?.locator("#año").selectOption({label: randomDate.year})
  //await outerFrame?.locator("#año").selectOption({index: 20})

  await outerFrame?.locator("#mostrarFechaBtn").click()

  const birthDate = await outerFrame?.locator("#fechaNacimiento").textContent()
  expect(await outerFrame?.locator("#fechaNacimiento").textContent()).toBe(`Fecha de Nacimiento: ${randomDate.day} de ${randomDate.month} de ${randomDate.year}`);
  console.log(birthDate)

});
test('Handling IFrames inside Iframes', async ({ page }) => {
  const user = await getUser();
  const outerFrame = page.frameLocator("#outer-iframe")
  const registerFrame = outerFrame.frameLocator("#regFrame")
  await registerFrame.locator("#name").fill(user.name)
  await registerFrame.locator("#email").fill(user.email)
  await registerFrame.locator("#username").fill(user.username)
  await registerFrame.locator("#password").fill(user.password)
  await registerFrame.locator("#confirmPassword").fill(user.confirmPassword)

  await registerFrame?.locator("#mostrarMensajeBtn").click()

  const registerBtn = await registerFrame?.locator("#mensajeInicioSesion").textContent()
  expect(await registerFrame?.locator("#mensajeInicioSesion").textContent()).toBe(`Intentaste registrarte con nombre '${user.name}', usuario '${user.username}' y correo electronico '${user.email}'.`);
  console.log(registerBtn)
//3.13.00

});
test.afterEach('Status check', async ({ page }, testInfo) => {
  console.log(`Finished ${testInfo.title} with status ${testInfo.status}`);

  if (testInfo.status !== testInfo.expectedStatus)
    console.log(`Did not run as expected, ended up at ${page.url()}`);
});