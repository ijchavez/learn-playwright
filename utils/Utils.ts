import { Page } from "@playwright/test"
import { faker } from '@faker-js/faker';

export async function manageAlertBox( page: Page, choice: boolean){
    await page.on("dialog", async (alert) => {
        const alertText = await alert.message()
        console.log(alertText)
        if(choice === true){
            await alert.accept()
        }else{
            await alert.dismiss()
        }
    })
}
export async function managePromptBox( page: Page, name: string){
    await page.on("dialog", async (alert) => {
        const alertText = await alert.defaultValue()
        console.log(alertText)
        await alert.accept(name)
    })
}
export async function getRandomDayOfWeek(): Promise<string> {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const randomIndex = Math.floor(Math.random() * daysOfWeek.length);
    return daysOfWeek[randomIndex];
}
interface CreateUser{
    name:string,
    email:string,
    username:string,
    password:string,
    confirmPassword:string,

}
function generatePassword(): string {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+{}[]|:;<>,.?/';
    let password = '';
    for (let i = 0; i < 8; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        password += chars.charAt(randomIndex);
    }
    return password;

}
export async function getUser(): Promise<CreateUser> {
    const password = generatePassword();
    return {
        name: faker.person.fullName(),
        email:faker.internet.email(),
        username:faker.airline.airline().name,
        password:password,
        confirmPassword:password
    }
}
export async function convertMonthIntoMM(month: string): Promise<number>{
        // Objeto que mapea nombres de meses a sus equivalentes en MM
        const months = {
            "january": 1,
            "february": 2,
            "march": 3,
            "april": 4,
            "may": 5,
            "june": 6,
            "july": 7,
            "august": 8,
            "september": 9,
            "october": 10,
            "noviember": 11,
            "deciember": 12
        };
    
        const monthLower = month.toLowerCase();
        return await months[monthLower];
    
}