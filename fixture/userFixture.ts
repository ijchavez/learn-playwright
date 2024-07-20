import { test as fixtureTest } from "@playwright/test"

type loginUser = {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    dob:{
        day:string,
        month: string,
        year: string
    }
}

const user = fixtureTest.extend<loginUser>({
    firstName: 'Gerardo',
    lastName: 'Chavez',
    email: 'info.gerardo.chavez@gmail.com',
    dob:{
        day: '29',
        month: 'June',
        year: '1986'
    }
})
export const successFulLogiUserTest = user