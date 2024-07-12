export type User = {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    conformedPassword: string,
};


// export class User {
//     firstName?: string;
//     lastName?: string;
//     email?: string;
//     password?: string;
//     conformedPassword?: string;

//     constructor() {
//         this.firstName = '';
//         this.lastName = '';
//         this.email = '';
//         this.password = '';
//         this.conformedPassword = '';
//     }

//     areFieldsNotEmpty(): boolean {
//         if (Object.keys(this).length === 0) {
//             return false;
//         }
//         for (let key in this) {
//             const value = this[key as keyof User];
//             if (value === null || value === undefined || value === '') {
//                 return false;
//             }
//         }
//         return true;
//     }
// }
