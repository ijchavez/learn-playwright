interface LoginUser {
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
export const sucessfulLoginUser : LoginUser = {
    firstName: 'Gerardo',
    lastName: 'Chavez',
    email: 'info.gerardo.chavez@gmail.com',
    password: "password123",
    dob:{
        day: '29',
        month: 'June',
        year: '1986'
    }

}