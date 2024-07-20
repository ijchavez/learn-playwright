interface DateObject {
    day: string;
    month: string;
    year: string;
}

export class DateGenerator {
    static generateRandomDate(): DateObject {
        const daysInMonth: { [key: string]: number } = {
            'Enero': 31, 'Febrero': 28, 'Marzo': 31, 'Abril': 30, 'Mayo': 31, 'Junio': 30,
            'Julio': 31, 'Agosto': 31, 'Septiembre': 30, 'Octubre': 31, 'Noviembre': 30, 'Diciembre': 31
        };
        const months: string[] = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

        // Generar año entre 1950 y 2023
        const yearToWork: number = Math.floor(Math.random() * (2024 - 1950)) + 1950;
        const year: string = yearToWork.toString();
        // Generar mes aleatorio
        const monthIndex: number = Math.floor(Math.random() * months.length);
        const month: string = months[monthIndex];

        // Generar día aleatorio dentro del rango correspondiente al mes
        const maxDay: number = month === 'febrero' && this.isLeapYear(yearToWork) ? 29 : daysInMonth[month];
        const dayInNumber: number = Math.floor(Math.random() * maxDay) + 1;
        const day: string = dayInNumber.toString();

        return { day, month, year };
    }

    private static isLeapYear(year: number): boolean {
        return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    }
}