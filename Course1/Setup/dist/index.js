"use strict";
console.log("typescript is here still");
// class User {
//     public email: string
//     name: string
//     readonly city: string = "HCM"
//     private middleName: string
//     constructor(email: string, name: string, middleName:string) {
//         this.email = email;
//         this.name = name;
//         this.middleName=middleName;
//     }
// }
class User {
    constructor(email, name, middleName) {
        this.email = email;
        this.name = name;
        this.middleName = middleName;
        this.city = "HCM";
        this.email = email;
        this.name = name;
        this.middleName = middleName;
    }
}
const tien = new User("tien@gmail.com,", "tien", "tran");
// tien.city = "HCM"; can't use this because readonly
