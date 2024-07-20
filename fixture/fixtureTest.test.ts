import { successFulLogiUserTest } from "./userFixture"

successFulLogiUserTest('registration successful', async ({ firstName, lastName, email, dob }) => {
    console.log(firstName)
    console.log(lastName)
    console.log(email)
    console.log(dob)
  });